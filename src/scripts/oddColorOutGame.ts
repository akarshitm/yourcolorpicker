import { el, fill, gameUrl, loadJson, saveJson, shareResult } from "./games";
import { ODD_KEY } from "./gameKeys";

const LIVES = 3;

const root = el<HTMLDivElement>("oo-root");
const strings = JSON.parse(root.dataset.strings || "{}") as {
	tileLabel: string;
	gameOver: string;
	rankLabel: string;
	ranks: string[];
	bestLevel: string;
	copied: string;
	shareTitle: string;
};

const board = el<HTMLDivElement>("oo-board");
const startOverlay = el<HTMLDivElement>("oo-start");
const overOverlay = el<HTMLDivElement>("oo-over");
const levelEl = el<HTMLElement>("oo-level");
const livesEl = el<HTMLElement>("oo-lives");
const bestEl = el<HTMLElement>("oo-best");
const shareBtn = el<HTMLButtonElement>("oo-share");

let level = 1;
let lives = LIVES;
let oddIndex = 0;
let locked = false;
let saved = loadJson(ODD_KEY, { best: 0 });

// Grid grows every 4 levels (3x3 → 8x8); the lightness gap shrinks ~9% per
// level from 20 points down to a 1.5-point floor.
const gridSize = (lvl: number) => Math.min(3 + Math.floor((lvl - 1) / 4), 8);
const lightnessGap = (lvl: number) => Math.max(1.5, 20 * Math.pow(0.91, lvl - 1));

function rankFor(lvl: number): string {
	const thresholds = [5, 10, 15, 20, 26];
	const index = thresholds.findIndex((t) => lvl < t);
	return strings.ranks[index === -1 ? strings.ranks.length - 1 : index];
}

function renderHud() {
	levelEl.textContent = String(level);
	livesEl.textContent = "❤️".repeat(lives) + "🤍".repeat(LIVES - lives);
	bestEl.textContent = saved.best > 0 ? `🏆 ${fill(strings.bestLevel, { n: saved.best })}` : "";
}

function buildBoard() {
	const size = gridSize(level);
	const hue = Math.floor(Math.random() * 360);
	const sat = 45 + Math.floor(Math.random() * 35);
	const light = 38 + Math.floor(Math.random() * 24);
	const gap = lightnessGap(level);
	const oddLight = Math.random() < 0.5 ? light + gap : light - gap;
	oddIndex = Math.floor(Math.random() * size * size);

	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.innerHTML = "";
	board.classList.remove("oo-board-in");
	for (let i = 0; i < size * size; i++) {
		const tile = document.createElement("button");
		tile.type = "button";
		tile.className = "oo-tile";
		tile.dataset.index = String(i);
		tile.setAttribute("aria-label", fill(strings.tileLabel, { n: i + 1 }));
		tile.style.background = `hsl(${hue} ${sat}% ${i === oddIndex ? oddLight : light}%)`;
		board.appendChild(tile);
	}
	void board.offsetWidth; // restart the pop-in animation
	board.classList.add("oo-board-in");
	locked = false;
}

function endGame() {
	if (level > saved.best) {
		saved = { best: level };
		saveJson(ODD_KEY, saved);
	}
	renderHud();
	el("oo-over-msg").textContent = fill(strings.gameOver, { n: level });
	el("oo-rank").textContent = fill(strings.rankLabel, { rank: rankFor(level) });
	overOverlay.classList.remove("hidden");
}

board.addEventListener("click", (e) => {
	const tile = (e.target as HTMLElement).closest<HTMLButtonElement>(".oo-tile");
	if (!tile || locked) return;
	locked = true;
	if (Number(tile.dataset.index) === oddIndex) {
		level += 1;
		renderHud();
		buildBoard();
		return;
	}
	lives -= 1;
	renderHud();
	board.classList.remove("oo-shake");
	void board.offsetWidth;
	board.classList.add("oo-shake");
	board.children[oddIndex]?.classList.add("oo-tile-reveal");
	setTimeout(() => (lives > 0 ? buildBoard() : endGame()), 900);
});

function start() {
	level = 1;
	lives = LIVES;
	startOverlay.classList.add("hidden");
	overOverlay.classList.add("hidden");
	renderHud();
	buildBoard();
}

el("oo-start-btn").addEventListener("click", start);
el("oo-again").addEventListener("click", start);
startOverlay.classList.remove("hidden");

shareBtn.addEventListener("click", () => {
	const text = `👁️ ${strings.shareTitle}: ${fill(strings.gameOver, { n: level })}\n${fill(strings.rankLabel, { rank: rankFor(level) })}\n\n${gameUrl("/games/odd-color-out")}`;
	shareResult(text, shareBtn, strings.copied);
});

renderHud();
// Paint an idle board behind the start overlay so the page never looks empty.
buildBoard();
locked = true;
