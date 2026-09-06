import { hexToRgb, rgbToHex, type RGB } from "./colorMath";
import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const picker = el<HTMLInputElement>("st-picker");
const hexInput = el<HTMLInputElement>("st-hex");
const tintsEl = el<HTMLDivElement>("st-tints");
const baseEl = el<HTMLDivElement>("st-base");
const shadesEl = el<HTMLDivElement>("st-shades");

const WHITE: RGB = { r: 255, g: 255, b: 255 };
const BLACK: RGB = { r: 0, g: 0, b: 0 };
const STEPS = [0.9, 0.7, 0.5, 0.3, 0.1];

function mix(a: RGB, b: RGB, t: number): RGB {
	return {
		r: Math.round(a.r + (b.r - a.r) * t),
		g: Math.round(a.g + (b.g - a.g) * t),
		b: Math.round(a.b + (b.b - a.b) * t),
	};
}

function renderRamp(container: HTMLDivElement, hexList: string[]) {
	container.innerHTML = "";
	for (const hex of hexList) {
		const wrap = document.createElement("div");
		wrap.className = "ramp-swatch";
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "ramp-swatch-block hover-pop";
		btn.style.background = hex;
		btn.title = `${hex} — click to copy`;
		btn.setAttribute("aria-label", `Copy ${hex}`);
		btn.addEventListener("click", () => copyText(hex));
		const label = document.createElement("span");
		label.className = "type-body-sm text-mute";
		label.textContent = hex;
		wrap.append(btn, label);
		container.appendChild(wrap);
	}
}

function render() {
	const base = hexToRgb(hexInput.value);
	if (!base) return;
	const tints = STEPS.map((t) => rgbToHex(mix(base, WHITE, t)));
	const shades = STEPS.slice()
		.reverse()
		.map((t) => rgbToHex(mix(base, BLACK, t)));
	renderRamp(tintsEl, tints);
	renderRamp(baseEl, [rgbToHex(base)]);
	renderRamp(shadesEl, shades);
}

picker.addEventListener("input", () => {
	hexInput.value = picker.value.toUpperCase();
	render();
});
hexInput.addEventListener("input", () => {
	if (/^#[0-9a-fA-F]{6}$/.test(hexInput.value)) {
		picker.value = hexInput.value;
		render();
	}
});

render();
