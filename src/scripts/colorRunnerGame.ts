import { el, fill, gameUrl, loadJson, saveJson, shareResult } from "./games";
import { RUNNER_KEY } from "./gameKeys";
import { laneSprites, propSprites, runnerFrames, type Sprite } from "./colorRunnerSprites";

// Color Runner: a pseudo-3D pixel endless runner. The road is a list of
// segments, each with three lane colors. The player must stay on the lane whose
// color matches the target word in the HUD; the target changes over time with
// a warning, and everything speeds up the longer you survive.

type ColorKey = "red" | "blue" | "yellow" | "green" | "pink" | "orange" | "purple";
type RGB = [number, number, number];

const PALETTE: Record<ColorKey, RGB> = {
	red: [229, 57, 53],
	blue: [30, 136, 229],
	yellow: [253, 216, 53],
	green: [67, 160, 71],
	pink: [240, 98, 146],
	orange: [251, 140, 0],
	purple: [142, 36, 170],
};
const BASE_COLORS: ColorKey[] = ["red", "blue", "yellow", "green", "pink"];
const GOLD: RGB = [255, 193, 7];
const GOLD_LIGHT: RGB = [255, 224, 130];

// Screen + camera (internal pixel resolution; CSS scales it up crisply).
const W = 160;
const H = 240;
const CX = W / 2;
const HORIZON = 72;
const FOCAL = 168;
const CAM_H = 3.6;
const ROAD_HALF = 1.5;
const WALK_HALF = 1.95;
const FEET_Y = 222;
const FEET_DEPTH = (CAM_H * FOCAL) / (FEET_Y - HORIZON);
const MAX_Z = 130;
const FOG_START = 50;
const FOG: RGB = [255, 176, 160];

const JUMP_TIME = 0.62;
const GOLD_TIME = 10;
const OFF_COLOR_GRACE = 0.25;

// Difficulty curves, all driven by seconds survived.
const speedAt = (t: number) => 11 + Math.min(27, t * 0.32);
const segLenAt = (t: number) => Math.max(11, 34 - t * 0.28);
const changeIntervalAt = (t: number) => Math.max(4.5, 10 - t * 0.07);
const keepLaneAt = (t: number) => Math.max(0.2, 0.65 - t * 0.006);
const barrierAt = (t: number) => (t < 18 ? 0 : Math.min(0.6, 0.25 + (t - 18) * 0.006));
const paletteAt = (t: number): ColorKey[] => (t < 35 ? BASE_COLORS : t < 70 ? [...BASE_COLORS, "orange"] : [...BASE_COLORS, "orange", "purple"]);

const pick = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];
const shuffle = <T>(list: T[]): T[] => [...list].sort(() => Math.random() - 0.5);
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = ([r, g, b]: RGB, shade = 1) => `rgb(${Math.round(r * shade)},${Math.round(g * shade)},${Math.round(b * shade)})`;
const isLight = ([r, g, b]: RGB) => (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;

// --- DOM -----------------------------------------------------------------

const root = el<HTMLDivElement>("cr-root");
const strings = JSON.parse(root.dataset.strings || "{}") as {
	runOn: string;
	next: string;
	goldActive: string;
	distance: string;
	best: string;
	newBest: string;
	overColor: string;
	overBarrier: string;
	final: string;
	colors: Record<ColorKey, string>;
	copied: string;
	shareTitle: string;
};

const stage = el<HTMLDivElement>("cr-stage");
const canvas = el<HTMLCanvasElement>("cr-canvas");
const ctx = canvas.getContext("2d")!;
ctx.imageSmoothingEnabled = false;
const scoreEl = el("cr-score");
const goldEl = el("cr-gold");
const targetEl = el("cr-target");
const targetWord = el("cr-target-word");
const nextEl = el("cr-next");
const nextWord = el("cr-next-word");
const nextCount = el("cr-next-count");
const startOverlay = el("cr-start");
const pauseOverlay = el("cr-pause");
const overOverlay = el("cr-over");
const shareBtn = el<HTMLButtonElement>("cr-share");

const show = (node: HTMLElement, visible: boolean) => node.classList.toggle("cr-hidden", !visible);

// --- Sprites + static sky ------------------------------------------------------

const frames = runnerFrames();
const props = propSprites();
const lane = laneSprites();

const sky = document.createElement("canvas");
sky.width = W;
sky.height = HORIZON + 1;
{
	const s = sky.getContext("2d")!;
	const stops: RGB[] = [
		[38, 26, 84],
		[126, 58, 150],
		[255, 150, 150],
		FOG,
	];
	for (let y = 0; y <= HORIZON; y++) {
		const t = (y / HORIZON) * (stops.length - 1);
		const i = Math.min(stops.length - 2, Math.floor(t));
		// Quantize into bands for a retro dithered-sunset look.
		const band = Math.floor((t - i) * 6) / 6;
		s.fillStyle = css(mix(stops[i], stops[i + 1], band));
		s.fillRect(0, y, W, 1);
	}
	s.fillStyle = "#ffe08a";
	for (let dy = -10; dy <= 10; dy++) {
		const half = Math.round(Math.sqrt(100 - dy * dy));
		if (dy > 2 && dy % 3 === 0) continue; // sunset stripes
		s.fillRect(112 - half, HORIZON - 16 + dy, half * 2, 1);
	}
	let x = 0;
	while (x < W) {
		const bw = 6 + Math.floor(Math.random() * 10);
		const bh = 6 + Math.floor(Math.random() * 18);
		s.fillStyle = "#3d2466";
		s.fillRect(x, HORIZON - bh, bw, bh + 1);
		s.fillStyle = "#ffd98a";
		for (let wy = HORIZON - bh + 2; wy < HORIZON - 1; wy += 3)
			for (let wx = x + 1; wx < x + bw - 1; wx += 2) if (Math.random() < 0.3) s.fillRect(wx, wy, 1, 1);
		x += bw + Math.floor(Math.random() * 3);
	}
}

// --- Game state -------------------------------------------------------------------

interface Segment {
	z0: number;
	z1: number;
	lanes: ColorKey[];
}
interface Thing {
	kind: "prop" | "barrier" | "bucket";
	sprite: Sprite;
	z: number;
	x: number;
	h: number;
	lane?: number;
	taken?: boolean;
}

let camZ = 0;
let speed = speedAt(0);
let elapsed = 0;
let segments: Segment[] = [];
let events: { z: number; color: ColorKey }[] = [];
let things: Thing[] = [];
let genZ = 0;
let genTarget: ColorKey = "blue";
let genLane = 1;
let nextChangeZ = 0;
let nextPropZ = [0, 0];
let nextBuildingZ = [0, 0];
let nextBucketAt = 0;
let playerLane = 1;
let laneTarget = 1;
let jumpT = -1;
let offTime = 0;
let goldUntil = -1;
let graceUntil = 0;
let running = false;
let paused = false;
let lastTs: number | null = null;
let animT = 0;
let shownTarget: ColorKey | null = null;
let shownScore = -1;
let saved = loadJson(RUNNER_KEY, { best: 0 });

function generateSegment(first = false) {
	const pal = paletteAt(elapsed);
	const len = first ? 45 : segLenAt(elapsed);
	if (!first && genZ >= nextChangeZ) {
		genTarget = pick(pal.filter((c) => c !== genTarget));
		events.push({ z: genZ, color: genTarget });
		nextChangeZ = genZ + changeIntervalAt(elapsed) * speedAt(elapsed);
	}
	if (!first && Math.random() > keepLaneAt(elapsed)) genLane = Math.floor(Math.random() * 3);
	const others = shuffle(pal.filter((c) => c !== genTarget));
	const lanes = [0, 1, 2].map((i) => (i === genLane ? genTarget : others.pop()!));
	segments.push({ z0: genZ, z1: genZ + len, lanes });
	if (Math.random() < barrierAt(elapsed) && len > 13) {
		things.push({ kind: "barrier", sprite: lane.barrier, z: genZ + len * (0.4 + Math.random() * 0.25), x: genLane - 1, h: 0.42, lane: genLane });
	}
	genZ += len;
}

function spawnScenery() {
	for (const side of [0, 1]) {
		const sign = side === 0 ? -1 : 1;
		while (nextPropZ[side] < camZ + MAX_Z) {
			const z = nextPropZ[side];
			const roll = Math.random();
			let prop: Thing;
			if (roll < 0.3) prop = { kind: "prop", sprite: pick([props.tree, props.pine]), z, x: sign * (2.3 + Math.random() * 0.6), h: 1.6 + Math.random() * 0.5 };
			else if (roll < 0.45) prop = { kind: "prop", sprite: props.streetlight, z, x: sign * 1.8, h: 2.3 };
			else if (roll < 0.6) prop = { kind: "prop", sprite: pick([props.blackCat, props.gingerCat]), z, x: sign * (1.7 + Math.random() * 0.15), h: 0.3 };
			else if (roll < 0.75) prop = { kind: "prop", sprite: props.bush, z, x: sign * (2.1 + Math.random() * 0.4), h: 0.4 };
			else if (roll < 0.87) prop = { kind: "prop", sprite: props.hydrant, z, x: sign * 1.78, h: 0.4 };
			else prop = { kind: "prop", sprite: props.flowers, z, x: sign * (2.0 + Math.random() * 0.5), h: 0.25 };
			things.push(prop);
			nextPropZ[side] += 3 + Math.random() * 6;
		}
		while (nextBuildingZ[side] < camZ + MAX_Z) {
			things.push({ kind: "prop", sprite: pick(props.buildings), z: nextBuildingZ[side], x: sign * (3.6 + Math.random() * 1.2), h: 3.6 + Math.random() * 2.4 });
			nextBuildingZ[side] += 7 + Math.random() * 8;
		}
	}
	if (elapsed >= nextBucketAt && elapsed >= goldUntil) {
		const l = Math.floor(Math.random() * 3);
		things.push({ kind: "bucket", sprite: lane.bucket, z: camZ + MAX_Z - 5, x: l - 1, h: 0.5, lane: l });
		nextBucketAt = elapsed + 18 + Math.random() * 14;
	}
}

function segmentAt(z: number): Segment {
	return segments.find((s) => z >= s.z0 && z < s.z1) ?? segments[segments.length - 1];
}

function targetAt(z: number): ColorKey {
	let color = events[0].color;
	for (const e of events) if (e.z <= z) color = e.color;
	return color;
}

function reset() {
	camZ = 0;
	elapsed = 0;
	speed = speedAt(0);
	segments = [];
	things = [];
	genZ = 0;
	genLane = 1;
	genTarget = pick(BASE_COLORS);
	events = [{ z: -Infinity, color: genTarget }];
	nextChangeZ = 9 * speedAt(0);
	nextPropZ = [2, 4];
	nextBuildingZ = [0, 3];
	nextBucketAt = 12 + Math.random() * 6;
	playerLane = 1;
	laneTarget = 1;
	jumpT = -1;
	offTime = 0;
	goldUntil = -1;
	graceUntil = 1;
	shownTarget = null;
	shownScore = -1;
	generateSegment(true);
	while (genZ < MAX_Z + 40) generateSegment();
	spawnScenery();
}

// --- Update ----------------------------------------------------------------------

function update(dt: number) {
	elapsed += dt;
	animT += dt;
	speed = speedAt(elapsed);
	camZ += speed * dt;
	const feetZ = camZ + FEET_DEPTH;

	const step = dt * 11;
	playerLane += Math.max(-step, Math.min(step, laneTarget - playerLane));
	if (jumpT >= 0) {
		jumpT += dt;
		if (jumpT >= JUMP_TIME) jumpT = -1;
	}
	const airborne = jumpT > 0.04 && jumpT < JUMP_TIME - 0.04;

	while (genZ < camZ + MAX_Z + 40) generateSegment();
	segments = segments.filter((s) => s.z1 > camZ);
	things = things.filter((t) => t.z > camZ + 2.5 && !t.taken);
	spawnScenery();

	const gold = elapsed < goldUntil;
	const currentLane = Math.round(playerLane);

	for (const t of things) {
		if (t.kind === "prop" || t.lane !== currentLane || Math.abs(t.z - feetZ) > 0.6) continue;
		if (t.kind === "bucket") {
			t.taken = true;
			goldUntil = elapsed + GOLD_TIME;
			graceUntil = goldUntil + 0.8;
		} else if (!airborne && !gold && elapsed > graceUntil) {
			return gameOver("barrier");
		}
	}

	const target = targetAt(feetZ);
	const onColor = segmentAt(feetZ).lanes[currentLane] === target;
	if (gold || elapsed <= graceUntil) {
		offTime = 0;
	} else if (!airborne) {
		// Time in the air pauses the off-color clock rather than resetting it,
		// so jump-spamming can't skip a wrong-colored stretch.
		if (onColor) offTime = 0;
		else {
			offTime += dt;
			if (offTime > OFF_COLOR_GRACE) return gameOver("color", target);
		}
	}
}

// --- Render ------------------------------------------------------------------------

function project(z: number) {
	const zr = z - camZ;
	const s = FOCAL / zr;
	return { zr, s, y: HORIZON + CAM_H * s };
}

function drawThing(t: Thing) {
	const { zr, s, y } = project(t.z);
	if (zr <= 0.5 || zr > MAX_Z) return;
	const hpx = t.h * s;
	const wpx = (hpx * t.sprite.w) / t.sprite.h;
	let gy = y;
	if (t.kind === "bucket") gy -= (0.15 + Math.sin(animT * 6) * 0.08) * s;
	const fog = zr > FOG_START ? Math.min(1, (zr - FOG_START) / (MAX_Z - FOG_START)) : 0;
	ctx.globalAlpha = 1 - fog * 0.85;
	ctx.drawImage(t.sprite.canvas, Math.round(CX + t.x * s - wpx / 2), Math.round(gy - hpx), Math.max(1, Math.round(wpx)), Math.max(1, Math.round(hpx)));
	ctx.globalAlpha = 1;
}

function render() {
	ctx.drawImage(sky, 0, 0);
	const gold = elapsed < goldUntil;
	let segIndex = 0;
	let lastSeg: Segment | null = null;

	for (let y = H - 1; y > HORIZON; y--) {
		const zr = (CAM_H * FOCAL) / (y - HORIZON);
		if (zr > MAX_Z) {
			ctx.fillStyle = css(FOG);
			ctx.fillRect(0, HORIZON + 1, W, y - HORIZON);
			break;
		}
		const wz = camZ + zr;
		const s = FOCAL / zr;
		while (segIndex < segments.length - 1 && segments[segIndex].z1 <= wz) segIndex++;
		const seg = segments[segIndex];
		const fog = zr > FOG_START ? Math.min(1, (zr - FOG_START) / (MAX_Z - FOG_START)) : 0;
		const stripe = Math.floor(wz / 2) % 2 === 0;
		const tone = (c: RGB, shade = 1) => css(mix(c.map((v) => v * shade) as RGB, FOG, fog));

		ctx.fillStyle = tone(stripe ? [74, 150, 76] : [62, 132, 66]);
		ctx.fillRect(0, y, W, 1);
		const walk = Math.round(WALK_HALF * s);
		ctx.fillStyle = tone(stripe ? [186, 182, 196] : [168, 164, 180]);
		ctx.fillRect(CX - walk, y, walk * 2, 1);

		for (let i = 0; i < 3; i++) {
			const x0 = Math.round(CX + (i - ROAD_HALF) * s);
			const x1 = Math.round(CX + (i - ROAD_HALF + 1) * s);
			const color = gold ? (Math.floor((wz + animT * 6) / 1.5) % 2 === 0 ? GOLD : GOLD_LIGHT) : PALETTE[seg.lanes[i]];
			ctx.fillStyle = tone(color, stripe ? 1 : 0.9);
			ctx.fillRect(x0, y, x1 - x0, 1);
		}
		if (s > 3) {
			ctx.fillStyle = tone([28, 22, 50]);
			for (const edge of [-1.5, -0.5, 0.5, 1.5]) ctx.fillRect(Math.round(CX + edge * s), y, 1, 1);
		}
		// A dark seam where one set of lane colors hands over to the next.
		if (!gold && lastSeg && lastSeg !== seg) {
			ctx.fillStyle = tone([28, 22, 50]);
			ctx.fillRect(Math.round(CX - ROAD_HALF * s), y, Math.round(ROAD_HALF * 2 * s), s > 20 ? 2 : 1);
		}
		lastSeg = seg;
	}

	const feetZ = camZ + FEET_DEPTH;
	const sorted = [...things].sort((a, b) => b.z - a.z);
	for (const t of sorted) if (t.z >= feetZ) drawThing(t);

	// Player + shadow.
	const px = Math.round(CX + (playerLane - 1) * (FOCAL / FEET_DEPTH));
	const lift = jumpT >= 0 ? Math.sin((Math.PI * jumpT) / JUMP_TIME) * 22 : 0;
	ctx.fillStyle = "rgba(20, 12, 40, 0.35)";
	const shadowW = Math.round(16 - lift / 3);
	ctx.fillRect(px - shadowW / 2, FEET_Y - 1, shadowW, 3);
	const sprite = jumpT >= 0 ? frames.jump : frames.run[Math.floor(animT * (4 + speed * 0.25)) % 2];
	const scale = 2;
	ctx.drawImage(sprite.canvas, px - (sprite.w * scale) / 2, Math.round(FEET_Y - sprite.h * scale - lift), sprite.w * scale, sprite.h * scale);

	for (const t of sorted) if (t.z < feetZ) drawThing(t);
}

// --- HUD ---------------------------------------------------------------------------

function paintPill(node: HTMLElement, color: ColorKey) {
	const rgb = PALETTE[color];
	node.style.background = css(rgb);
	node.style.color = isLight(rgb) ? "#1a1530" : "#ffffff";
}

function updateHud() {
	const feetZ = camZ + FEET_DEPTH;
	const score = Math.floor(camZ);
	if (score !== shownScore) {
		scoreEl.textContent = fill(strings.distance, { n: score });
		shownScore = score;
	}
	const target = targetAt(feetZ);
	if (target !== shownTarget) {
		targetWord.textContent = strings.colors[target];
		paintPill(targetEl, target);
		shownTarget = target;
	}
	const upcoming = events.find((e) => e.z > feetZ);
	const secondsAway = upcoming ? (upcoming.z - feetZ) / speed : Infinity;
	show(nextEl, secondsAway < 3);
	if (upcoming && secondsAway < 3) {
		nextWord.textContent = strings.colors[upcoming.color];
		paintPill(nextWord, upcoming.color);
		nextCount.textContent = String(Math.ceil(secondsAway));
	}
	const goldLeft = goldUntil - elapsed;
	show(goldEl, goldLeft > 0);
	if (goldLeft > 0) goldEl.textContent = `✨ ${strings.goldActive} ${Math.ceil(goldLeft)}`;
	stage.classList.toggle("cr-golden", goldLeft > 0);
	stage.classList.toggle("cr-danger", offTime > 0);
}

// --- Loop + lifecycle -----------------------------------------------------------------

function frame(ts: number) {
	if (!running || paused) return;
	const dt = lastTs === null ? 0 : Math.min(0.05, (ts - lastTs) / 1000);
	lastTs = ts;
	update(dt);
	if (!running) return;
	render();
	updateHud();
	requestAnimationFrame(frame);
}

function start() {
	reset();
	running = true;
	paused = false;
	lastTs = null;
	show(startOverlay, false);
	show(overOverlay, false);
	show(pauseOverlay, false);
	stage.classList.remove("cr-shake");
	requestAnimationFrame(frame);
}

function gameOver(reason: "color" | "barrier", color?: ColorKey) {
	running = false;
	render();
	updateHud();
	stage.classList.remove("cr-danger", "cr-golden");
	void stage.offsetWidth;
	stage.classList.add("cr-shake");
	const distance = Math.floor(camZ);
	const isBest = distance > saved.best;
	if (isBest) {
		saved = { best: distance };
		saveJson(RUNNER_KEY, saved);
	}
	el("cr-over-reason").textContent = reason === "barrier" ? strings.overBarrier : fill(strings.overColor, { color: strings.colors[color!] });
	el("cr-over-distance").textContent = fill(strings.final, { n: distance });
	el("cr-over-best").textContent = isBest ? strings.newBest : fill(strings.best, { n: saved.best });
	shareBtn.dataset.distance = String(distance);
	show(nextEl, false);
	show(overOverlay, true);
}

function move(dir: -1 | 1) {
	if (!running || paused) return;
	laneTarget = Math.max(0, Math.min(2, laneTarget + dir));
}

function jump() {
	if (!running || paused || jumpT >= 0) return;
	jumpT = 0;
}

document.addEventListener("keydown", (e) => {
	if (!running || paused) return;
	const key = e.key;
	if (key === "ArrowLeft" || key === "a" || key === "A") move(-1);
	else if (key === "ArrowRight" || key === "d" || key === "D") move(1);
	else if (key === "ArrowUp" || key === "w" || key === "W" || key === " ") jump();
	else return;
	e.preventDefault();
});

let touchStart: { x: number; y: number } | null = null;
stage.addEventListener("touchstart", (e) => {
	const t = e.touches[0];
	touchStart = { x: t.clientX, y: t.clientY };
}, { passive: true });
stage.addEventListener("touchend", (e) => {
	if (!touchStart) return;
	const t = e.changedTouches[0];
	const dx = t.clientX - touchStart.x;
	const dy = t.clientY - touchStart.y;
	touchStart = null;
	if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 24) move(dx < 0 ? -1 : 1);
	else if (dy < -24) jump();
});

const press = (id: string, action: () => void) =>
	el(id).addEventListener("pointerdown", (e) => {
		e.preventDefault();
		action();
	});
press("cr-left", () => move(-1));
press("cr-right", () => move(1));
press("cr-jump", jump);

el("cr-start-btn").addEventListener("click", start);
el("cr-again").addEventListener("click", start);
el("cr-resume-btn").addEventListener("click", () => {
	paused = false;
	lastTs = null;
	show(pauseOverlay, false);
	requestAnimationFrame(frame);
});
document.addEventListener("visibilitychange", () => {
	if (document.hidden && running && !paused) {
		paused = true;
		show(pauseOverlay, true);
	}
});

shareBtn.addEventListener("click", () => {
	const text = `🏃 ${strings.shareTitle}: ${fill(strings.final, { n: shareBtn.dataset.distance ?? "0" })}\n\n${gameUrl("/games/color-runner")}`;
	shareResult(text, shareBtn, strings.copied);
});

// Idle scene behind the start screen.
reset();
render();
updateHud();
if (saved.best > 0) el("cr-start-best").textContent = `🏆 ${fill(strings.best, { n: saved.best })}`;
