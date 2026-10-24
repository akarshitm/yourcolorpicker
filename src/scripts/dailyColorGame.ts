import { hexToRgb, rgbToHex, type RGB } from "./colorMath";
import { dayNumber, el, fill, formatCountdown, gameUrl, loadJson, msUntilMidnight, saveJson, seededRandom, shareResult } from "./games";
import { DAILY_STATS_KEY, DAILY_TODAY_KEY } from "./gameKeys";

const MAX_GUESSES = 6;
const EXACT = 12;
const CLOSE = 40;

const root = el<HTMLDivElement>("dc-root");
const strings = JSON.parse(root.dataset.strings || "{}") as {
	puzzleLabel: string;
	invalid: string;
	win: string;
	lose: string;
	channels: string[];
	copied: string;
	shareTitle: string;
};

const form = el<HTMLFormElement>("dc-form");
const picker = el<HTMLInputElement>("dc-picker");
const input = el<HTMLInputElement>("dc-input");
const rows = el<HTMLOListElement>("dc-rows");
const msg = el<HTMLParagraphElement>("dc-msg");
const result = el<HTMLDivElement>("dc-result");
const shareBtn = el<HTMLButtonElement>("dc-share");

const today = dayNumber();
const rand = seededRandom(today * 7919 + 17);
// Keep channels away from the extremes so the color is never near-black/white.
const target: RGB = { r: 20 + Math.floor(rand() * 216), g: 20 + Math.floor(rand() * 216), b: 20 + Math.floor(rand() * 216) };
const targetHex = rgbToHex(target).toUpperCase();

interface TodayState {
	day: number;
	guesses: string[];
	done: boolean;
	won: boolean;
}
interface Stats {
	played: number;
	wins: number;
	streak: number;
	maxStreak: number;
	lastWinDay: number;
}

let state = loadJson<TodayState>(DAILY_TODAY_KEY, { day: today, guesses: [], done: false, won: false });
if (state.day !== today) state = { day: today, guesses: [], done: false, won: false };
let stats = loadJson<Stats>(DAILY_STATS_KEY, { played: 0, wins: 0, streak: 0, maxStreak: 0, lastWinDay: 0 });
// A missed day breaks the streak even before the next game is finished.
if (stats.streak > 0 && stats.lastWinDay < today - 1) stats.streak = 0;

type Grade = "exact" | "close" | "far";
function grade(guess: number, answer: number): { grade: Grade; arrow: string } {
	const diff = answer - guess;
	const abs = Math.abs(diff);
	const g: Grade = abs <= EXACT ? "exact" : abs <= CLOSE ? "close" : "far";
	return { grade: g, arrow: g === "exact" ? "✓" : diff > 0 ? "↑" : "↓" };
}

function evaluate(hex: string) {
	const rgb = hexToRgb(hex)!;
	return [grade(rgb.r, target.r), grade(rgb.g, target.g), grade(rgb.b, target.b)];
}

function renderRows(animateLast = false) {
	rows.innerHTML = "";
	for (let i = 0; i < MAX_GUESSES; i++) {
		const li = document.createElement("li");
		li.className = "dc-row";
		const hex = state.guesses[i];
		if (!hex) {
			li.classList.add("dc-row-empty");
			li.innerHTML = `<span class="dc-row-swatch"></span><span class="dc-row-hex type-code text-faint">#------</span>${'<span class="dc-cell"></span>'.repeat(3)}`;
		} else {
			if (animateLast && i === state.guesses.length - 1) li.classList.add("dc-row-new");
			const cells = evaluate(hex)
				.map((c, ch) => `<span class="dc-cell dc-cell-${c.grade}" aria-label="${strings.channels[ch]}">${strings.channels[ch][0]} ${c.arrow}</span>`)
				.join("");
			li.innerHTML = `<span class="dc-row-swatch" style="background:${hex}"></span><span class="dc-row-hex type-code">${hex}</span>${cells}`;
		}
		rows.appendChild(li);
	}
}

function renderStats() {
	el("dc-streak").textContent = String(stats.streak);
	el("dc-streak2").textContent = String(stats.streak);
	el("dc-played").textContent = String(stats.played);
	el("dc-winrate").textContent = stats.played ? String(Math.round((stats.wins / stats.played) * 100)) : "0";
	el("dc-max").textContent = String(stats.maxStreak);
}

let countdownTimer = 0;
function renderResult() {
	if (!state.done) return;
	form.style.display = "none";
	result.classList.remove("hidden");
	el("dc-result-msg").textContent = state.won ? fill(strings.win, { n: state.guesses.length }) : fill(strings.lose, { hex: targetHex });
	const tick = () => (el("dc-countdown").textContent = formatCountdown(msUntilMidnight()));
	tick();
	clearInterval(countdownTimer);
	countdownTimer = window.setInterval(tick, 1000);
}

function finish(won: boolean) {
	state.done = true;
	state.won = won;
	stats.played += 1;
	if (won) {
		stats.wins += 1;
		stats.streak = stats.lastWinDay === today - 1 ? stats.streak + 1 : 1;
		stats.lastWinDay = today;
		stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
	} else {
		stats.streak = 0;
	}
	saveJson(DAILY_STATS_KEY, stats);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (state.done) return;
	let value = input.value.trim().toUpperCase();
	if (!value.startsWith("#")) value = `#${value}`;
	if (!/^#[0-9A-F]{6}$/.test(value)) {
		msg.textContent = strings.invalid;
		return;
	}
	msg.textContent = "";
	state.guesses.push(value);
	const won = evaluate(value).every((c) => c.grade === "exact");
	if (won || state.guesses.length >= MAX_GUESSES) finish(won);
	saveJson(DAILY_TODAY_KEY, state);
	renderRows(true);
	renderStats();
	renderResult();
	input.value = "";
});

picker.addEventListener("input", () => {
	input.value = picker.value.toUpperCase();
});
input.addEventListener("input", () => {
	const v = input.value.trim();
	const hex = v.startsWith("#") ? v : `#${v}`;
	if (/^#[0-9a-fA-F]{6}$/.test(hex)) picker.value = hex.toLowerCase();
});

shareBtn.addEventListener("click", () => {
	const squares: Record<Grade, string> = { exact: "🟩", close: "🟨", far: "⬜" };
	const grid = state.guesses.map((hex) => evaluate(hex).map((c) => squares[c.grade]).join("")).join("\n");
	const score = state.won ? state.guesses.length : "X";
	const text = `🎨 ${strings.shareTitle} #${today} ${score}/${MAX_GUESSES}\n\n${grid}\n\n${gameUrl("/games/daily-color")}`;
	shareResult(text, shareBtn, strings.copied);
});

el("dc-puzzle").textContent = fill(strings.puzzleLabel, { n: today });
el("dc-target").style.background = targetHex;
renderRows();
renderStats();
renderResult();
