import { hexToRgb, rgbToHex, rgbToHsl, formatRgb, formatHsl, type RGB } from "./colorMath";
import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const aPicker = el<HTMLInputElement>("mix-a-picker");
const bPicker = el<HTMLInputElement>("mix-b-picker");
const aText = el<HTMLInputElement>("mix-a");
const bText = el<HTMLInputElement>("mix-b");
const ratioInput = el<HTMLInputElement>("mix-ratio");
const ratioLabel = el<HTMLSpanElement>("mix-ratio-label");
const resultSwatch = el<HTMLDivElement>("mix-result-swatch");
const resultHex = el<HTMLElement>("mix-result-hex");
const resultRgb = el<HTMLElement>("mix-result-rgb");
const resultHsl = el<HTMLElement>("mix-result-hsl");

function mix(a: RGB, b: RGB, t: number): RGB {
	return {
		r: Math.round(a.r + (b.r - a.r) * t),
		g: Math.round(a.g + (b.g - a.g) * t),
		b: Math.round(a.b + (b.b - a.b) * t),
	};
}

function render() {
	const a = hexToRgb(aText.value);
	const b = hexToRgb(bText.value);
	ratioLabel.textContent = `${ratioInput.value}%`;
	if (!a || !b) return;
	const result = mix(a, b, Number(ratioInput.value) / 100);
	const hex = rgbToHex(result);
	resultSwatch.style.background = hex;
	resultHex.textContent = hex;
	resultRgb.textContent = formatRgb(result);
	resultHsl.textContent = formatHsl(rgbToHsl(result));
}

document.querySelectorAll<HTMLButtonElement>("[data-copy-target]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const targetId = btn.dataset.copyTarget;
		const value = targetId ? document.getElementById(targetId)?.textContent : null;
		if (!value || value === "—") return;
		copyText(value);
	});
});

aPicker.addEventListener("input", () => {
	aText.value = aPicker.value.toUpperCase();
	render();
});
bPicker.addEventListener("input", () => {
	bText.value = bPicker.value.toUpperCase();
	render();
});
aText.addEventListener("input", () => {
	if (/^#[0-9a-fA-F]{6}$/.test(aText.value)) aPicker.value = aText.value;
	render();
});
bText.addEventListener("input", () => {
	if (/^#[0-9a-fA-F]{6}$/.test(bText.value)) bPicker.value = bText.value;
	render();
});
ratioInput.addEventListener("input", render);

render();
