import { hexToRgb, contrastRatio, contrastVerdict } from "./colorMath";

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const aPicker = el<HTMLInputElement>("cc-a-picker");
const bPicker = el<HTMLInputElement>("cc-b-picker");
const aText = el<HTMLInputElement>("cc-a");
const bText = el<HTMLInputElement>("cc-b");
const previewBox = el<HTMLDivElement>("cc-preview");
const result = el<HTMLDivElement>("cc-result");

const strings = {
	enterValid: result.dataset.enterValid || "Enter two valid hex colors (e.g. #171717) to compare.",
	normalLabel: result.dataset.normalLabel || "Normal text —",
	largeLabel: result.dataset.largeLabel || "Large text —",
	pass: result.dataset.pass || "pass",
	fail: result.dataset.fail || "fail",
};

function render() {
	const a = hexToRgb(aText.value);
	const b = hexToRgb(bText.value);
	if (!a || !b) {
		result.innerHTML = `<p class="type-body-sm text-faint">${strings.enterValid}</p>`;
		return;
	}
	previewBox.style.color = aText.value;
	previewBox.style.background = bText.value;

	const ratio = contrastRatio(a, b);
	const verdict = contrastVerdict(ratio);
	result.innerHTML = `
		<p class="type-heading-lg mb-xs">${ratio.toFixed(2)}:1</p>
		<p class="type-body-md text-body">${strings.normalLabel} AA ${verdict.aaNormal ? "✅" : "❌"} ${verdict.aaNormal ? strings.pass : strings.fail}, AAA ${verdict.aaaNormal ? "✅" : "❌"} ${verdict.aaaNormal ? strings.pass : strings.fail}</p>
		<p class="type-body-md text-body">${strings.largeLabel} AA ${verdict.aaLarge ? "✅" : "❌"} ${verdict.aaLarge ? strings.pass : strings.fail}, AAA ${verdict.aaaLarge ? "✅" : "❌"} ${verdict.aaaLarge ? strings.pass : strings.fail}</p>
	`;
}

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

render();
