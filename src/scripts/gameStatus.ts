import { dayNumber, fill, loadJson } from "./games";
import { DAILY_STATS_KEY, DAILY_TODAY_KEY, ODD_KEY, MEMORY_KEY, RUNNER_KEY } from "./gameKeys";

// Fills each game card's status line from the player's saved progress, so the
// hub doubles as a "today's progress" board.
const today = dayNumber();

document.querySelectorAll<HTMLElement>("[data-game-status]").forEach((card) => {
	const slot = card.querySelector<HTMLElement>("[data-status-slot]");
	if (!slot) return;
	const labels = JSON.parse(card.dataset.statusLabels || "{}") as Record<string, string>;
	const game = card.dataset.gameStatus;

	if (game === "daily") {
		const state = loadJson(DAILY_TODAY_KEY, { day: 0, done: false });
		const stats = loadJson(DAILY_STATS_KEY, { streak: 0 });
		const done = state.day === today && state.done;
		slot.textContent = `${done ? labels.solved : labels.waiting}${stats.streak > 0 ? ` · 🔥 ${labels.streak} ${stats.streak}` : ""}`;
	} else if (game === "odd") {
		const { best } = loadJson(ODD_KEY, { best: 0 });
		if (best > 0) slot.textContent = `🏆 ${fill(labels.oddBest, { n: best })}`;
	} else if (game === "runner") {
		const { best } = loadJson(RUNNER_KEY, { best: 0 });
		if (best > 0) slot.textContent = `🏆 ${fill(labels.runnerBest, { n: best })}`;
	} else if (game === "memory") {
		const { best } = loadJson(MEMORY_KEY, { best: 0 });
		if (best > 0) slot.textContent = `🏆 ${fill(labels.memoryBest, { score: best.toFixed(1) })}`;
	}
});
