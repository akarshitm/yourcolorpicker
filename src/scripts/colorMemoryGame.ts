import { hslToRgb, rgbToHex, type HSL } from "./colorMath";
import { dayNumber, deltaE, el, fill, gameUrl, loadJson, saveJson, seededRandom, shareResult } from "./games";
import { MEMORY_KEY } from "./gameKeys";

const ROUNDS = 5;
const MEMORIZE_MS = 3000;

const root = el<HTMLDivElement>("cm-root");
const strings = JSON.parse(root.dataset.strings || "{}") as {
	round: string;
	memorize: string;
	recreate: string;
	roundScore: string;
	final: string;
	bestScore: string;
	dailyDone: string;
	copied: string;
	shareTitle: string;
	dailyMode: string;
};

const panel = el<HTMLDivElement>("cm-panel");
const timer = el<HTMLDivElement>("cm-timer");
const compare = el<HTMLDivElement>("cm-compare");
const startOverlay = el<HTMLDivElement>("cm-start");
const startBtn = el<HTMLButtonElement>("cm-start-btn");
const startNote = el<HTMLParagraphElement>("cm-start-note");
const controls = el<HTMLDivElement>("cm-controls");
const roundResult = el<HTMLDivElement>("cm-round-result");
const finalBox = el<HTMLDivElement>("cm-final");
const hInput = el<HTMLInputElement>("cm-h");
const sInput = el<HTMLInputElement>("cm-s");
const lInput = el<HTMLInputElement>("cm-l");
const shareBtn = el<HTMLButtonElement>("cm-share");
const modeButtons = Array.from(root.querySelectorAll<HTMLButtonElement>(".cm-mode"));

const today = dayNumber();
let saved = loadJson(MEMORY_KEY, { best: 0, dailyDay: 0, dailyScore: 0 });
let mode: "daily" | "practice" = saved.dailyDay === today ? "practice" : "daily";
let targets: HSL[] = [];
let scores: number[] = [];
let round = 0;

const show = (node: HTMLElement, visible: boolean) => node.classList.toggle("hidden", !visible);
const css = (c: HSL) => rgbToHex(hslToRgb(c));

// Saturated, mid-light colors only — memorizing near-grays is no fun.
function makeTargets(rand: () => number): HSL[] {
	return Array.from({ length: ROUNDS }, () => ({
		h: Math.floor(rand() * 360),
		s: 35 + Math.floor(rand() * 55),
		l: 30 + Math.floor(rand() * 45),
	}));
}

// ΔE 0 → 100 points; roughly 1.4 points lost per unit of perceptual difference.
const scoreFor = (a: HSL, b: HSL) => Math.max(0, Math.round((100 - deltaE(hslToRgb(a), hslToRgb(b)) * 1.4) * 10) / 10);

function currentGuess(): HSL {
	return { h: Number(hInput.value), s: Number(sInput.value), l: Number(lInput.value) };
}

function paintGuess() {
	const g = currentGuess();
	panel.style.background = css(g);
	sInput.style.setProperty("--track", `linear-gradient(90deg, ${css({ ...g, s: 0 })}, ${css({ ...g, s: 100 })})`);
	lInput.style.setProperty("--track", `linear-gradient(90deg, #000, ${css({ ...g, l: 50 })}, #fff)`);
}

function renderIdle() {
	modeButtons.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === mode)));
	el("cm-best").textContent = saved.best > 0 ? `🏆 ${fill(strings.bestScore, { score: saved.best.toFixed(1) })}` : "";
	el("cm-round").textContent = fill(strings.round, { n: 1 });
	el("cm-phase").textContent = "";
	const dailyLocked = mode === "daily" && saved.dailyDay === today;
	startBtn.disabled = dailyLocked;
	startNote.textContent = dailyLocked ? strings.dailyDone : "";
	show(startOverlay, true);
	show(compare, false);
	show(controls, false);
	show(roundResult, false);
	show(finalBox, false);
	timer.style.transition = "none";
	timer.style.width = "0";
}

function playRound() {
	const target = targets[round];
	el("cm-round").textContent = fill(strings.round, { n: round + 1 });
	el("cm-phase").textContent = strings.memorize;
	show(compare, false);
	show(controls, false);
	show(roundResult, false);
	panel.style.background = css(target);
	timer.style.transition = "none";
	timer.style.width = "100%";
	void timer.offsetWidth;
	timer.style.transition = `width ${MEMORIZE_MS}ms linear`;
	timer.style.width = "0";

	setTimeout(() => {
		el("cm-phase").textContent = strings.recreate;
		// Start from a neutral, random hue so the first slider position gives nothing away.
		hInput.value = String(Math.floor(Math.random() * 360));
		sInput.value = "50";
		lInput.value = "50";
		paintGuess();
		show(controls, true);
		hInput.focus();
	}, MEMORIZE_MS);
}

function submitRound() {
	const target = targets[round];
	const guess = currentGuess();
	const score = scoreFor(target, guess);
	scores.push(score);
	el("cm-compare-target").style.background = css(target);
	el("cm-compare-yours").style.background = css(guess);
	show(compare, true);
	show(controls, false);
	el("cm-phase").textContent = "";
	el("cm-round-score").textContent = fill(strings.roundScore, { score: score.toFixed(1) });
	if (round + 1 < ROUNDS) {
		show(roundResult, true);
	} else {
		finishGame();
	}
}

const emojiFor = (s: number) => (s >= 85 ? "🟩" : s >= 65 ? "🟨" : "🟥");

function finishGame() {
	const total = Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10;
	saved.best = Math.max(saved.best, total);
	if (mode === "daily") {
		saved.dailyDay = today;
		saved.dailyScore = total;
	}
	saveJson(MEMORY_KEY, saved);
	el("cm-best").textContent = `🏆 ${fill(strings.bestScore, { score: saved.best.toFixed(1) })}`;
	el("cm-final-msg").textContent = fill(strings.final, { score: total.toFixed(1) });
	el("cm-final-rounds").innerHTML = scores
		.map((s, i) => `<span class="cm-round-chip"><i style="background:${css(targets[i])}"></i>${s.toFixed(1)}</span>`)
		.join("");
	show(roundResult, false);
	show(finalBox, true);
	shareBtn.dataset.total = total.toFixed(1);
}

function startGame() {
	targets = makeTargets(mode === "daily" ? seededRandom(today * 104729 + 3) : Math.random);
	scores = [];
	round = 0;
	show(startOverlay, false);
	show(finalBox, false);
	playRound();
}

startBtn.addEventListener("click", startGame);
el("cm-submit").addEventListener("click", submitRound);
el("cm-next").addEventListener("click", () => {
	round += 1;
	playRound();
});
el("cm-again").addEventListener("click", () => {
	if (mode === "daily") mode = "practice";
	startGame();
	modeButtons.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === mode)));
});
[hInput, sInput, lInput].forEach((input) => input.addEventListener("input", paintGuess));
modeButtons.forEach((b) =>
	b.addEventListener("click", () => {
		mode = b.dataset.mode === "practice" ? "practice" : "daily";
		renderIdle();
	}),
);

shareBtn.addEventListener("click", () => {
	const label = mode === "daily" ? ` · ${strings.dailyMode} #${today}` : "";
	const text = `🧠 ${strings.shareTitle}${label}: ${shareBtn.dataset.total}/100\n${scores.map(emojiFor).join("")}\n\n${gameUrl("/games/color-memory")}`;
	shareResult(text, shareBtn, strings.copied);
});

renderIdle();
