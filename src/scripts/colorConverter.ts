import {
	hexToRgb,
	rgbToHex,
	rgbToHsl,
	hslToRgb,
	rgbToHsv,
	hsvToRgb,
	formatRgb,
	formatHsl,
	formatHsv,
	type RGB,
} from "./colorMath";
import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const swatch = el<HTMLDivElement>("converter-swatch");
const hexInput = el<HTMLInputElement>("conv-hex");
const rInput = el<HTMLInputElement>("conv-r");
const gInput = el<HTMLInputElement>("conv-g");
const bInput = el<HTMLInputElement>("conv-b");
const hslH = el<HTMLInputElement>("conv-hsl-h");
const hslS = el<HTMLInputElement>("conv-hsl-s");
const hslL = el<HTMLInputElement>("conv-hsl-l");
const hsvH = el<HTMLInputElement>("conv-hsv-h");
const hsvS = el<HTMLInputElement>("conv-hsv-s");
const hsvV = el<HTMLInputElement>("conv-hsv-v");

type Group = "hex" | "rgb" | "hsl" | "hsv";

function render(rgb: RGB, skip?: Group) {
	const hex = rgbToHex(rgb);
	const hsl = rgbToHsl(rgb);
	const hsv = rgbToHsv(rgb);

	swatch.style.background = hex;

	if (skip !== "hex") hexInput.value = hex;
	if (skip !== "rgb") {
		rInput.value = String(rgb.r);
		gInput.value = String(rgb.g);
		bInput.value = String(rgb.b);
	}
	if (skip !== "hsl") {
		hslH.value = String(hsl.h);
		hslS.value = String(hsl.s);
		hslL.value = String(hsl.l);
	}
	if (skip !== "hsv") {
		hsvH.value = String(hsv.h);
		hsvS.value = String(hsv.s);
		hsvV.value = String(hsv.v);
	}
}

hexInput.addEventListener("input", () => {
	const rgb = hexToRgb(hexInput.value);
	if (rgb) render(rgb, "hex");
});

function readRgbInputs(): RGB | null {
	const r = Number(rInput.value);
	const g = Number(gInput.value);
	const b = Number(bInput.value);
	if ([r, g, b].some((n) => !Number.isFinite(n) || n < 0 || n > 255)) return null;
	return { r, g, b };
}
[rInput, gInput, bInput].forEach((input) =>
	input.addEventListener("input", () => {
		const rgb = readRgbInputs();
		if (rgb) render(rgb, "rgb");
	}),
);

function readHslInputs(): RGB | null {
	const h = Number(hslH.value);
	const s = Number(hslS.value);
	const l = Number(hslL.value);
	if (!Number.isFinite(h) || !Number.isFinite(s) || !Number.isFinite(l)) return null;
	if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) return null;
	return hslToRgb({ h, s, l });
}
[hslH, hslS, hslL].forEach((input) =>
	input.addEventListener("input", () => {
		const rgb = readHslInputs();
		if (rgb) render(rgb, "hsl");
	}),
);

function readHsvInputs(): RGB | null {
	const h = Number(hsvH.value);
	const s = Number(hsvS.value);
	const v = Number(hsvV.value);
	if (!Number.isFinite(h) || !Number.isFinite(s) || !Number.isFinite(v)) return null;
	if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100) return null;
	return hsvToRgb({ h, s, v });
}
[hsvH, hsvS, hsvV].forEach((input) =>
	input.addEventListener("input", () => {
		const rgb = readHsvInputs();
		if (rgb) render(rgb, "hsv");
	}),
);

document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const rgb = readRgbInputs() ?? hexToRgb(hexInput.value);
		if (!rgb) return;
		const format = btn.dataset.copy;
		if (format === "hex") copyText(rgbToHex(rgb));
		else if (format === "rgb") copyText(formatRgb(rgb));
		else if (format === "hsl") copyText(formatHsl(rgbToHsl(rgb)));
		else if (format === "hsv") copyText(formatHsv(rgbToHsv(rgb)));
	});
});

// Seed with a friendly starting color.
render({ r: 59, g: 130, b: 246 });
