function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

const dropzone = el<HTMLDivElement>("cb-dropzone");
const uploadBtn = el<HTMLButtonElement>("cb-upload-btn");
const fileInput = el<HTMLInputElement>("cb-file-input");
const results = el<HTMLDivElement>("cb-results");

const canvasOriginal = el<HTMLCanvasElement>("cb-canvas-original");
const canvasProt = el<HTMLCanvasElement>("cb-canvas-protanopia");
const canvasDeut = el<HTMLCanvasElement>("cb-canvas-deuteranopia");
const canvasTrit = el<HTMLCanvasElement>("cb-canvas-tritanopia");

const MAX_W = 380;
const MAX_H = 380;

// Simplified RGB-space simulation matrices — a widely used approximation of
// dichromatic (fully colorblind) vision, good enough for design review even
// though it isn't a full LMS cone-response simulation.
type Matrix = [number, number, number, number, number, number, number, number, number];
const MATRICES: Record<"protanopia" | "deuteranopia" | "tritanopia", Matrix> = {
	protanopia: [0.567, 0.433, 0, 0.558, 0.442, 0, 0, 0.242, 0.758],
	deuteranopia: [0.625, 0.375, 0, 0.7, 0.3, 0, 0, 0.3, 0.7],
	tritanopia: [0.95, 0.05, 0, 0, 0.433, 0.567, 0, 0.475, 0.525],
};

function applyMatrix(source: ImageData, m: Matrix): ImageData {
	const out = new ImageData(source.width, source.height);
	const src = source.data;
	const dst = out.data;
	for (let i = 0; i < src.length; i += 4) {
		const r = src[i];
		const g = src[i + 1];
		const b = src[i + 2];
		dst[i] = Math.min(255, Math.max(0, r * m[0] + g * m[1] + b * m[2]));
		dst[i + 1] = Math.min(255, Math.max(0, r * m[3] + g * m[4] + b * m[5]));
		dst[i + 2] = Math.min(255, Math.max(0, r * m[6] + g * m[7] + b * m[8]));
		dst[i + 3] = src[i + 3];
	}
	return out;
}

function drawScaled(canvas: HTMLCanvasElement, img: CanvasImageSource, w: number, h: number) {
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d")!;
	ctx.drawImage(img, 0, 0, w, h);
}

function processImage(img: HTMLImageElement) {
	const scale = Math.min(1, MAX_W / img.naturalWidth, MAX_H / img.naturalHeight);
	const w = Math.round(img.naturalWidth * scale);
	const h = Math.round(img.naturalHeight * scale);

	drawScaled(canvasOriginal, img, w, h);
	const ctx = canvasOriginal.getContext("2d")!;
	const source = ctx.getImageData(0, 0, w, h);

	for (const [canvas, type] of [
		[canvasProt, "protanopia"],
		[canvasDeut, "deuteranopia"],
		[canvasTrit, "tritanopia"],
	] as const) {
		canvas.width = w;
		canvas.height = h;
		const targetCtx = canvas.getContext("2d")!;
		targetCtx.putImageData(applyMatrix(source, MATRICES[type]), 0, 0);
	}

	results.hidden = false;
}

function loadFile(file: File | null | undefined) {
	if (!file || !file.type.startsWith("image/")) return;
	const reader = new FileReader();
	reader.onload = () => {
		const img = new Image();
		img.onload = () => processImage(img);
		img.src = reader.result as string;
	};
	reader.readAsDataURL(file);
}

uploadBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => loadFile(fileInput.files?.[0]));

dropzone.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropzone.classList.add("drag-active");
});
dropzone.addEventListener("dragleave", () => dropzone.classList.remove("drag-active"));
dropzone.addEventListener("drop", (e) => {
	e.preventDefault();
	dropzone.classList.remove("drag-active");
	loadFile(e.dataTransfer?.files?.[0]);
});
