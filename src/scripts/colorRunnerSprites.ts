// Pixel-art sprites for Color Runner, drawn from text grids. Each character
// maps to a color in the sprite's palette; "." is transparent. Rows shorter
// than the widest row are padded, so the art can stay readable here.

export interface Sprite {
	canvas: HTMLCanvasElement;
	w: number;
	h: number;
}

type Palette = Record<string, string>;

export function makeSprite(rows: string[], palette: Palette): Sprite {
	const w = Math.max(...rows.map((r) => r.length));
	const h = rows.length;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d")!;
	rows.forEach((row, y) => {
		[...row].forEach((ch, x) => {
			const color = palette[ch];
			if (!color) return;
			ctx.fillStyle = color;
			ctx.fillRect(x, y, 1, 1);
		});
	});
	return { canvas, w, h };
}

const mirror = (rows: string[]) => {
	const w = Math.max(...rows.map((r) => r.length));
	return rows.map((r) => [...r.padEnd(w, ".")].reverse().join(""));
};

// --- Runner (seen from behind) -------------------------------------------

const RUNNER_PALETTE: Palette = {
	k: "#1a1530",
	h: "#4a2a17",
	s: "#f1c27d",
	w: "#ffffff",
	b: "#2b4c7e",
	o: "#ff3d71",
};

const RUN_TOP = ["...kkkk...", "..khhhhk..", "..khhhhk..", "...khhk...", "..kwwwwk..", ".kswwwwsk.", ".kswwwwsk.", "..kwwwwk..", "..kbbbbk.."];
const RUN_A = [...RUN_TOP, "..kbkkbk..", "..kbk.kbk.", "..kbk.kok.", "..kbk.kk..", "..kok.....", "..kkk....."];
const JUMP = [...RUN_TOP, "..kbkkbk..", ".kbk..kbk.", ".kok..kok.", ".kk....kk.", "..........", ".........."];

export function runnerFrames(): { run: Sprite[]; jump: Sprite } {
	return {
		run: [makeSprite(RUN_A, RUNNER_PALETTE), makeSprite(mirror(RUN_A), RUNNER_PALETTE)],
		jump: makeSprite(JUMP, RUNNER_PALETTE),
	};
}

// --- Roadside props ---------------------------------------------------------

export function propSprites() {
	const tree = makeSprite(
		["...ggg...", ".ggGggg..", "gggggGgg.", "ggGgggggg", ".gggggGgg", "gggGggggg", ".ggggggg.", "...ggg...", "....t....", "....t....", "....t....", "...ttt..."],
		{ g: "#2e7d32", G: "#66bb6a", t: "#6d4c41" },
	);
	const pine = makeSprite(
		["....g....", "...gGg...", "..ggggg..", "...gGg...", "..ggggg..", ".gggGggg.", "..ggggg..", ".ggggGgg.", "ggggggggg", "....t....", "....t...."],
		{ g: "#1b5e20", G: "#43a047", t: "#5d4037" },
	);
	const catRows = ["c...c..", "cc.cc..", "ccccc..", "cycyc..", "ccccc.c", ".cccc.c", ".cccccc"];
	const blackCat = makeSprite(catRows, { c: "#222222", y: "#ffeb3b" });
	const gingerCat = makeSprite(catRows, { c: "#ef6c00", y: "#2e7d32" });
	const streetlight = makeSprite(
		[".lll.", "lLLLl", ".lll.", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", "..p..", ".ppp."],
		{ l: "#37474f", L: "#fff59d", p: "#546e7a" },
	);
	const bush = makeSprite([".gGgg.g.", "ggggGggg", "gGgggggG", ".gggggg."], { g: "#388e3c", G: "#81c784" });
	const hydrant = makeSprite([".rrr.", "rRrrr", ".rrr.", "rrrrr", ".rrr.", ".rrr.", "rrrrr"], { r: "#d32f2f", R: "#ff8a80" });
	const flowers = makeSprite(["p.y.p", "g.g.g", "ggggg"], { p: "#f06292", y: "#ffeb3b", g: "#43a047" });

	const buildings = ["#5c6bc0", "#8d6e63", "#ef9a9a", "#4db6ac", "#9575cd"].map((wall) => {
		const rows: string[] = [];
		const width = 12;
		const height = 18;
		for (let y = 0; y < height; y++) {
			if (y === 0) rows.push("r".repeat(width));
			else if (y === height - 1) rows.push("ww" + "dd".padEnd(width - 4, "w") + "ww");
			else if (y % 3 === 1) rows.push([...Array(width)].map((_, x) => (x % 3 === 1 ? (Math.random() < 0.6 ? "L" : "D") : "w")).join(""));
			else rows.push("w".repeat(width));
		}
		return makeSprite(rows, { w: wall, r: "#3e2723", L: "#ffe082", D: "#37474f", d: "#4e342e" });
	});

	return { tree, pine, blackCat, gingerCat, streetlight, bush, hydrant, flowers, buildings };
}

// --- Lane objects -------------------------------------------------------------

export function laneSprites() {
	const bucket = makeSprite(
		["..kkkkk..", ".k.....k.", "kYYYYYYYk", "kYyYYYYYk", ".kYYYYYk.", ".kYyYYYk.", ".kYYYYYk.", "..kYYYk..", "..kkkkk.."],
		{ k: "#8d6e00", Y: "#ffd54f", y: "#fff8e1" },
	);
	const barrier = makeSprite(
		["kkkkkkkkkkkkkk", "kRRwwRRwwRRwwk", "kRRwwRRwwRRwwk", "kkkkkkkkkkkkkk", ".k..........k.", ".k..........k."],
		{ k: "#212121", R: "#e53935", w: "#fafafa" },
	);
	return { bucket, barrier };
}
