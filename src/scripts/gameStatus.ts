import { fill, loadJson } from "./games";
import { ODD_KEY, MEMORY_KEY, RUNNER_KEY } from "./gameKeys";

// Fills each game card's status line from the player's saved best score.

document.querySelectorAll<HTMLElement>("[data-game-status]").forEach((card) => {
	const slot = card.querySelector<HTMLElement>("[data-status-slot]");
	if (!slot) return;
	const labels = JSON.parse(card.dataset.statusLabels || "{}") as Record<string, string>;
	const game = card.dataset.gameStatus;

	if (game === "odd") {
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
