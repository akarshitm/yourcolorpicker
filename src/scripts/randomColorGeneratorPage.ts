import { rgbToHex, rgbToHsl, formatRgb, formatHsl, type RGB } from "./colorMath";
import { generateHarmonies } from "./harmony";
import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const swatch = el<HTMLDivElement>("rc-swatch");
const hexEl = el<HTMLElement>("rc-hex");
const rgbEl = el<HTMLElement>("rc-rgb");
const hslEl = el<HTMLElement>("rc-hsl");
const generateBtn = el<HTMLButtonElement>("rc-generate-btn");

const harmonyContainers: Record<string, HTMLDivElement> = {
	Complementary: el<HTMLDivElement>("rc-harmony-complementary"),
	Analogous: el<HTMLDivElement>("rc-harmony-analogous"),
	Triadic: el<HTMLDivElement>("rc-harmony-triadic"),
};

function renderSwatchRow(container: HTMLElement, hexList: string[]) {
	container.innerHTML = "";
	for (const hex of hexList) {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "h-8 w-8 shrink-0 rounded border hover-pop";
		btn.style.background = hex;
		btn.style.borderColor = "var(--color-hairline)";
		btn.title = `${hex} — click to copy`;
		btn.setAttribute("aria-label", `Copy ${hex}`);
		btn.addEventListener("click", () => copyText(hex));
		container.appendChild(btn);
	}
}

function generate() {
	const rgb: RGB = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256),
	};
	const hex = rgbToHex(rgb);
	swatch.style.background = hex;
	hexEl.textContent = hex;
	rgbEl.textContent = formatRgb(rgb);
	hslEl.textContent = formatHsl(rgbToHsl(rgb));

	for (const scheme of generateHarmonies(hex)) {
		const container = harmonyContainers[scheme.label];
		if (container) renderSwatchRow(container, scheme.colors);
	}
}

document.querySelectorAll<HTMLButtonElement>("[data-copy-target]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const targetId = btn.dataset.copyTarget;
		const value = targetId ? document.getElementById(targetId)?.textContent : null;
		if (!value || value === "—") return;
		copyText(value);
	});
});

generateBtn.addEventListener("click", generate);
generate();
