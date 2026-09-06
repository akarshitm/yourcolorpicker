import { copyText } from "./ui";

const grid = document.getElementById("color-grid") as HTMLDivElement;
const search = document.getElementById("color-search") as HTMLInputElement;
const empty = document.getElementById("color-empty") as HTMLParagraphElement;
const cards = Array.from(grid.querySelectorAll<HTMLButtonElement>(".color-swatch-card"));

cards.forEach((card) => {
	card.addEventListener("click", () => {
		const hex = card.dataset.hex;
		if (hex) copyText(hex);
	});
});

search.addEventListener("input", () => {
	const query = search.value.trim().toLowerCase().replace(/^#/, "");
	let visibleCount = 0;
	for (const card of cards) {
		const matches = !query || card.dataset.name?.includes(query) || card.dataset.hex?.toLowerCase().includes(query);
		card.hidden = !matches;
		if (matches) visibleCount++;
	}
	empty.classList.toggle("hidden", visibleCount > 0);
});
