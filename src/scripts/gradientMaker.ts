import { copyText } from "./ui";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const preview = el<HTMLDivElement>("gradient-preview");
const stopsContainer = el<HTMLDivElement>("gradient-stops");
const addStopBtn = el<HTMLButtonElement>("add-stop-btn");
const typeLinear = el<HTMLInputElement>("gradient-type-linear");
const typeRadial = el<HTMLInputElement>("gradient-type-radial");
const angleWrap = el<HTMLLabelElement>("angle-wrap");
const angleInput = el<HTMLInputElement>("gradient-angle");
const angleLabel = el<HTMLSpanElement>("angle-label");
const cssOutput = el<HTMLPreElement>("gradient-css");
const copyBtn = el<HTMLButtonElement>("copy-gradient-btn");

const DEFAULT_COLORS = ["#3B82F6", "#EC4899"];
const MAX_STOPS = 5;
const MIN_STOPS = 2;
let stops: string[] = [...DEFAULT_COLORS];

function buildCss(): string {
	const colorList = stops.join(", ");
	if (typeRadial.checked) return `background: radial-gradient(circle, ${colorList});`;
	return `background: linear-gradient(${angleInput.value}deg, ${colorList});`;
}

function render() {
	const css = buildCss();
	preview.style.background = css.replace("background: ", "").replace(/;$/, "");
	cssOutput.textContent = css;
	angleWrap.style.display = typeRadial.checked ? "none" : "flex";
	angleLabel.textContent = `${angleInput.value}°`;
	renderStops();
}

function renderStops() {
	stopsContainer.innerHTML = "";
	stops.forEach((color, i) => {
		const row = document.createElement("div");
		row.className = "gradient-stop";

		const colorInput = document.createElement("input");
		colorInput.type = "color";
		colorInput.value = color;
		colorInput.setAttribute("aria-label", `Color stop ${i + 1}`);
		colorInput.addEventListener("input", () => {
			stops[i] = colorInput.value.toUpperCase();
			hexInput.value = stops[i];
			render();
		});

		const hexInput = document.createElement("input");
		hexInput.type = "text";
		hexInput.className = "field-input flex-1 min-w-0 type-code";
		hexInput.value = color;
		hexInput.addEventListener("input", () => {
			if (/^#[0-9a-fA-F]{6}$/.test(hexInput.value)) {
				stops[i] = hexInput.value.toUpperCase();
				colorInput.value = stops[i];
				render();
			}
		});

		row.append(colorInput, hexInput);

		if (stops.length > MIN_STOPS) {
			const removeBtn = document.createElement("button");
			removeBtn.type = "button";
			removeBtn.className = "btn-ghost-sm shrink-0";
			removeBtn.textContent = stopsContainer.dataset.removeLabel || "Remove";
			removeBtn.addEventListener("click", () => {
				stops.splice(i, 1);
				render();
			});
			row.appendChild(removeBtn);
		}

		stopsContainer.appendChild(row);
	});
	addStopBtn.hidden = stops.length >= MAX_STOPS;
}

addStopBtn.addEventListener("click", () => {
	if (stops.length >= MAX_STOPS) return;
	const palette = ["#3B82F6", "#EC4899", "#F59E0B", "#10B981", "#8B5CF6"];
	stops.push(palette[stops.length % palette.length]);
	render();
});

typeLinear.addEventListener("change", render);
typeRadial.addEventListener("change", render);
angleInput.addEventListener("input", render);
copyBtn.addEventListener("click", () => copyText(cssOutput.textContent ?? ""));

render();
