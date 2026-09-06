import { hexToRgb, rgbToHex, rgbToHsl, formatRgb, formatHsl, type RGB } from "./colorMath";
import { generateHarmonies } from "./harmony";
import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const picker = el<HTMLInputElement>("pg-picker");
const hexInput = el<HTMLInputElement>("pg-hex");
const randomizeBtn = el<HTMLButtonElement>("pg-randomize-btn");
const exportPreview = el<HTMLPreElement>("pg-export-preview");

const harmonyContainers: Record<string, HTMLDivElement> = {
	Complementary: el<HTMLDivElement>("pg-harmony-complementary"),
	Analogous: el<HTMLDivElement>("pg-harmony-analogous"),
	Triadic: el<HTMLDivElement>("pg-harmony-triadic"),
	Monochromatic: el<HTMLDivElement>("pg-harmony-monochromatic"),
};

let currentPaletteHex: string[] = [];

function renderSwatchRow(container: HTMLElement, hexList: string[]) {
	container.innerHTML = "";
	for (const hex of hexList) {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "h-12 w-12 shrink-0 rounded-md border hover-pop";
		btn.style.background = hex;
		btn.style.borderColor = "var(--color-hairline)";
		btn.title = `${hex} — click to copy`;
		btn.setAttribute("aria-label", `Copy ${hex}`);
		btn.addEventListener("click", () => copyText(hex));
		container.appendChild(btn);
	}
}

function render() {
	const rgb = hexToRgb(hexInput.value);
	if (!rgb) return;
	const hex = rgbToHex(rgb);
	picker.value = hex;

	const schemes = generateHarmonies(hex);
	const seen = new Set<string>();
	for (const scheme of schemes) {
		const container = harmonyContainers[scheme.label];
		if (container) renderSwatchRow(container, scheme.colors);
		for (const c of scheme.colors) seen.add(c);
	}
	currentPaletteHex = Array.from(seen);
	exportPreview.classList.add("hidden");
}

function buildExport(format: "css" | "tailwind" | "json"): string {
	if (currentPaletteHex.length === 0) return "";
	if (format === "css") {
		return `:root {\n${currentPaletteHex.map((hex, i) => `  --color-${i + 1}: ${hex};`).join("\n")}\n}`;
	}
	if (format === "tailwind") {
		return `colors: {\n${currentPaletteHex.map((hex, i) => `  'palette-${i + 1}': '${hex}',`).join("\n")}\n}`;
	}
	return JSON.stringify(
		currentPaletteHex.map((hex) => {
			const rgb = hexToRgb(hex)!;
			return { hex, rgb: formatRgb(rgb), hsl: formatHsl(rgbToHsl(rgb)) };
		}),
		null,
		2,
	);
}

picker.addEventListener("input", () => {
	hexInput.value = picker.value.toUpperCase();
	render();
});
hexInput.addEventListener("input", () => {
	if (/^#[0-9a-fA-F]{6}$/.test(hexInput.value)) render();
});

randomizeBtn.addEventListener("click", () => {
	const rgb: RGB = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256),
	};
	hexInput.value = rgbToHex(rgb);
	render();
});

document.querySelectorAll<HTMLButtonElement>("[data-pg-export]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const format = btn.dataset.pgExport as "css" | "tailwind" | "json";
		const text = buildExport(format);
		if (!text) return;
		exportPreview.textContent = text;
		exportPreview.classList.remove("hidden");
		copyText(text);
	});
});

render();
