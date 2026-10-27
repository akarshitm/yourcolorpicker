import {
	clamp,
	contrastRatio,
	contrastVerdict,
	formatHsl,
	formatRgb,
	hexToRgb,
	hsvToRgb,
	rgbToHex,
	rgbToHsl,
	rgbToHsv,
	type HSV,
	type RGB,
} from "./colorMath";
import { downsampleForQuantization, quantize, type PaletteSwatch } from "./quantize";
import { analyzeImageQuality, QUALITY_TIER_LABEL, qualityTier, type QualityTier } from "./imageQuality";
import { closestColorName } from "./colorNames";
import { generateHarmonies } from "./harmony";
import {
	decodePaletteFromUrl,
	deletePalette,
	deleteSavedColor,
	encodePaletteToUrl,
	getSavedColors,
	getSavedPalettes,
	saveColorToHistory,
	savePalette,
} from "./storage";

// The EyeDropper API (Chromium-based browsers only) isn't in TypeScript's
// bundled DOM lib yet, so it's declared here rather than left as `any`.
interface EyeDropperOpenResult {
	sRGBHex: string;
}
interface EyeDropperInstance {
	open(options?: { signal?: AbortSignal }): Promise<EyeDropperOpenResult>;
}
declare global {
	interface Window {
		EyeDropper?: new () => EyeDropperInstance;
	}
}

function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

let toastStack: HTMLDivElement | null = null;

function getToastStack(): HTMLDivElement {
	if (toastStack) return toastStack;
	const stack = document.createElement("div");
	stack.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;align-items:center;gap:8px;";
	document.body.appendChild(stack);
	toastStack = stack;
	return stack;
}

function showToast(message: string, duration = 1600) {
	const toast = document.createElement("div");
	toast.textContent = message;
	toast.setAttribute("role", "status");
	toast.style.cssText =
		"background:#171717;color:#fff;padding:8px 16px;border-radius:100px;font:14px 'Geist Sans',Arial,sans-serif;box-shadow:0 8px 16px -4px rgba(0,0,0,0.2);max-width:min(90vw,420px);text-align:center;";
	getToastStack().appendChild(toast);
	setTimeout(() => toast.remove(), duration);
}

async function copyText(text: string) {
	try {
		await navigator.clipboard.writeText(text);
		showToast("Copied to clipboard");
	} catch {
		showToast("Couldn’t copy — copy it manually");
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

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let naturalWidth = 0;
let naturalHeight = 0;
/** True source dimensions (before the display/working-canvas cap below) — used only for the megapixel quality check. */
let sourceWidth = 0;
let sourceHeight = 0;
let rawImageData: ImageData | null = null;
let currentPaletteHex: string[] = [];
let cursor = { x: 0, y: 0 };
let hasCursor = false;
/** Whatever the readout currently shows — an image pixel, a spectrum pick, a screen pick, or a random color. */
let currentRgb: RGB | null = null;
/** Spectrum picker state, kept apart from currentRgb so the hue survives dragging into grays and black. */
let spectrum: HSV = { h: 210, s: 75, v: 90 };

// ---------------------------------------------------------------------------
// Elements
// ---------------------------------------------------------------------------

const dropzoneEl = el<HTMLDivElement>("dropzone");
const uploadBtn = el<HTMLButtonElement>("upload-btn");
const fileInput = el<HTMLInputElement>("file-input");
const uploadError = el<HTMLParagraphElement>("upload-error");
const pickScreenBtn = el<HTMLButtonElement>("pick-screen-btn");
const captureScreenshotBtn = el<HTMLButtonElement>("capture-screenshot-btn");
const miniPickerBtn = el<HTMLButtonElement>("mini-picker-btn");

const imageCanvas = el<HTMLCanvasElement>("image-canvas");
const overlayCanvas = el<HTMLCanvasElement>("select-overlay");
const imageCtx = imageCanvas.getContext("2d")!;
const overlayCtx = overlayCanvas.getContext("2d")!;

const magnifierEl = el<HTMLDivElement>("magnifier");
const magnifierCanvas = el<HTMLCanvasElement>("magnifier-canvas");
const magnifierCtx = magnifierCanvas.getContext("2d")!;

const readoutSwatch = el<HTMLDivElement>("readout-swatch");
const readoutHex = el<HTMLParagraphElement>("readout-hex");
const readoutRgb = el<HTMLParagraphElement>("readout-rgb");
const readoutHsl = el<HTMLParagraphElement>("readout-hsl");
const pinColorBtn = el<HTMLButtonElement>("pin-color-btn");
const randomColorBtn = el<HTMLButtonElement>("random-color-btn");
const spectrumSv = el<HTMLDivElement>("spectrum-sv");
const spectrumThumb = el<HTMLDivElement>("spectrum-thumb");
const spectrumHue = el<HTMLInputElement>("spectrum-hue");
const spectrumHexInput = el<HTMLInputElement>("spectrum-hex-input");
const savedColorsEl = el<HTMLDivElement>("saved-colors");

const paletteCountInput = el<HTMLInputElement>("palette-count");
const paletteCountLabel = el<HTMLSpanElement>("palette-count-label");
const paletteGrid = el<HTMLDivElement>("palette-grid");

const qualityBadge = el<HTMLSpanElement>("quality-badge");
const qualityWarnings = el<HTMLUListElement>("quality-warnings");
const qualityTierBars: Record<QualityTier, HTMLDivElement> = {
	low: el<HTMLDivElement>("quality-tier-low"),
	medium: el<HTMLDivElement>("quality-tier-medium"),
	high: el<HTMLDivElement>("quality-tier-high"),
	hd: el<HTMLDivElement>("quality-tier-hd"),
};

const contrastA = el<HTMLInputElement>("contrast-a");
const contrastB = el<HTMLInputElement>("contrast-b");
const contrastResult = el<HTMLDivElement>("contrast-result");

const exportPreview = el<HTMLPreElement>("export-preview");
const exportPngBtn = el<HTMLButtonElement>("export-png");

const saveNameInput = el<HTMLInputElement>("save-name");
const savePaletteBtn = el<HTMLButtonElement>("save-palette-btn");
const shareBtn = el<HTMLButtonElement>("share-btn");
const savedPalettesEl = el<HTMLDivElement>("saved-palettes");

// ---------------------------------------------------------------------------
// Upload handling
// ---------------------------------------------------------------------------

function loadFile(file: File | null | undefined) {
	if (!file) return;
	if (!file.type.startsWith("image/")) {
		uploadError.textContent = "That file doesn’t look like an image. Try a PNG, JPG, or WEBP.";
		uploadError.classList.remove("hidden");
		return;
	}
	uploadError.classList.add("hidden");

	const reader = new FileReader();
	reader.onload = () => {
		const img = new Image();
		img.onload = () => onImageReady(img);
		img.onerror = () => {
			uploadError.textContent = "Couldn’t read that image. Try a different file.";
			uploadError.classList.remove("hidden");
		};
		img.src = reader.result as string;
	};
	reader.readAsDataURL(file);
}

// Cap the working canvas like a typical photo viewer would — this is what's
// displayed AND what every pixel read comes from, so a 12MP phone photo
// doesn't force full-resolution getImageData calls on every mouse move.
const MAX_CANVAS_W = 820;
const MAX_CANVAS_H = 520;

function finishCanvasLoad() {
	naturalWidth = imageCanvas.width;
	naturalHeight = imageCanvas.height;
	overlayCanvas.width = naturalWidth;
	overlayCanvas.height = naturalHeight;

	rawImageData = imageCtx.getImageData(0, 0, naturalWidth, naturalHeight);

	cursor = { x: Math.floor(naturalWidth / 2), y: Math.floor(naturalHeight / 2) };
	hasCursor = false; // seeded below, but no real pointer is over the image yet — keep the crosshair/loupe hidden
	renderQuality();
	renderPalette();
	clearOverlay();
	hideMagnifier();

	// Seed the readout with a real color right away instead of leaving placeholder dashes.
	const seedRgb = pixelAt(cursor.x, cursor.y);
	if (seedRgb) updateReadout(seedRgb);
}

/** Shared by file uploads, the demo image, and screenshot capture — anything
 * that can be drawn to a canvas becomes a normal, sampleable image source. */
function loadImageSource(source: CanvasImageSource, srcWidth: number, srcHeight: number) {
	sourceWidth = srcWidth;
	sourceHeight = srcHeight;
	const scale = Math.min(1, MAX_CANVAS_W / srcWidth, MAX_CANVAS_H / srcHeight);
	imageCanvas.width = Math.round(srcWidth * scale);
	imageCanvas.height = Math.round(srcHeight * scale);
	imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
	imageCtx.drawImage(source, 0, 0, imageCanvas.width, imageCanvas.height);
	finishCanvasLoad();
}

function onImageReady(img: HTMLImageElement) {
	loadImageSource(img, img.naturalWidth, img.naturalHeight);
}

/** A sample photo shown immediately on load, so there's something to try before uploading. */
function loadDemoImage() {
	const img = new Image();
	img.onload = () => onImageReady(img);
	img.src = "/demo-image.jpg";
}

uploadBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => loadFile(fileInput.files?.[0]));

dropzoneEl.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropzoneEl.classList.add("drag-active");
});
dropzoneEl.addEventListener("dragleave", () => dropzoneEl.classList.remove("drag-active"));
dropzoneEl.addEventListener("drop", (e) => {
	e.preventDefault();
	dropzoneEl.classList.remove("drag-active");
	loadFile(e.dataTransfer?.files?.[0]);
});

window.addEventListener("paste", (e) => {
	const items = e.clipboardData?.items;
	if (!items) return;
	for (const item of items) {
		if (item.type.startsWith("image/")) {
			loadFile(item.getAsFile());
			break;
		}
	}
});

// ---------------------------------------------------------------------------
// Live screen eyedropper, screenshot capture, and a floating mini picker —
// three more ways in besides uploading a file, alongside the canvas above.
// ---------------------------------------------------------------------------

async function pickFromScreen() {
	if (!window.EyeDropper) {
		showToast("Live screen picking needs Chrome, Edge, or another Chromium browser.", 3000);
		return;
	}
	try {
		const result = await new window.EyeDropper().open();
		const rgb = hexToRgb(result.sRGBHex);
		if (!rgb) return;
		hasCursor = false; // this color isn't tied to an image pixel, so no crosshair/magnifier to show
		clearOverlay();
		hideMagnifier();
		updateReadout(rgb);
		showToast(`Picked ${result.sRGBHex} from your screen`);
	} catch {
		// User pressed Escape or dismissed the picker — nothing to do.
	}
}

async function captureScreenshot() {
	if (!navigator.mediaDevices?.getDisplayMedia) {
		showToast("Your browser doesn't support screen capture.", 3000);
		return;
	}
	let stream: MediaStream;
	try {
		stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
	} catch {
		// User cancelled the share picker — nothing to do.
		return;
	}
	const video = document.createElement("video");
	video.srcObject = stream;
	video.muted = true;
	await video.play();
	// Give the video element one paint to report real dimensions before capture.
	await new Promise((resolve) => requestAnimationFrame(resolve));
	loadImageSource(video, video.videoWidth, video.videoHeight);
	stream.getTracks().forEach((track) => track.stop());
	showToast("Screenshot captured — hover or click the image above to sample it");
}

/** Opens a small, separately-focusable window with just a live eyedropper
 * button — for sampling something outside the browser without keeping this
 * whole page in the way. Its result is sent back here via postMessage. */
function openMiniPicker() {
	const popup = window.open("", "mini-color-picker", "width=260,height=180,popup=yes");
	if (!popup) {
		showToast("Your browser blocked the popup — allow popups for this site to use the mini picker.", 3500);
		return;
	}
	popup.document.title = "Mini color picker";
	popup.document.body.style.cssText = "margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;height:100vh;font-family:Arial,sans-serif;background:#fafafa;color:#171717;";
	popup.document.body.innerHTML = `
		<div id="swatch" style="width:64px;height:64px;border-radius:12px;border:1px solid #ebebeb;background:#fafafa;"></div>
		<code id="hex" style="font-size:14px;">—</code>
		<button id="pick" style="font:14px Arial,sans-serif;padding:8px 16px;border-radius:100px;border:none;background:#171717;color:#fff;cursor:pointer;">Pick a color</button>
	`;
	const pickBtn = popup.document.getElementById("pick") as HTMLButtonElement;
	const swatchEl = popup.document.getElementById("swatch") as HTMLDivElement;
	const hexEl = popup.document.getElementById("hex") as HTMLElement;
	pickBtn.addEventListener("click", async () => {
		if (!popup.window.EyeDropper) {
			hexEl.textContent = "Unsupported browser";
			return;
		}
		try {
			const result = await new popup.window.EyeDropper().open();
			swatchEl.style.background = result.sRGBHex;
			hexEl.textContent = result.sRGBHex;
			window.postMessage({ source: "mini-color-picker", hex: result.sRGBHex }, window.location.origin);
		} catch {
			// User pressed Escape — nothing to do.
		}
	});
}

window.addEventListener("message", (e) => {
	if (e.origin !== window.location.origin || e.data?.source !== "mini-color-picker") return;
	const rgb = hexToRgb(e.data.hex);
	if (!rgb) return;
	hasCursor = false;
	clearOverlay();
	hideMagnifier();
	updateReadout(rgb);
	showToast(`Picked ${e.data.hex} from the mini picker`);
});

pickScreenBtn.addEventListener("click", pickFromScreen);
captureScreenshotBtn.addEventListener("click", captureScreenshot);
miniPickerBtn.addEventListener("click", openMiniPicker);

// ---------------------------------------------------------------------------
// Pixel readout + magnifier + picking (mouse + keyboard accessible)
// ---------------------------------------------------------------------------

function clientToImagePixel(clientX: number, clientY: number): { x: number; y: number } {
	const rect = imageCanvas.getBoundingClientRect();
	const scaleX = naturalWidth / rect.width;
	const scaleY = naturalHeight / rect.height;
	return {
		x: clamp(Math.round((clientX - rect.left) * scaleX), 0, naturalWidth - 1),
		y: clamp(Math.round((clientY - rect.top) * scaleY), 0, naturalHeight - 1),
	};
}

function imagePixelToClient(x: number, y: number): { clientX: number; clientY: number } {
	const rect = imageCanvas.getBoundingClientRect();
	return {
		clientX: rect.left + (x / naturalWidth) * rect.width,
		clientY: rect.top + (y / naturalHeight) * rect.height,
	};
}

function pixelAt(x: number, y: number): RGB | null {
	if (!rawImageData) return null;
	const i = (y * rawImageData.width + x) * 4;
	return { r: rawImageData.data[i], g: rawImageData.data[i + 1], b: rawImageData.data[i + 2] };
}

/** Pass fromSpectrum when the spectrum itself produced the color, so its position isn't re-derived (and jittered) from rounded RGB. */
function updateReadout(rgb: RGB, fromSpectrum = false) {
	const hex = rgbToHex(rgb);
	const hsl = rgbToHsl(rgb);
	currentRgb = rgb;
	if (!fromSpectrum) {
		const hsv = rgbToHsv(rgb);
		// Grays and black have no hue of their own — leave the hue slider where it was.
		if (hsv.s === 0 || hsv.v === 0) hsv.h = spectrum.h;
		spectrum = hsv;
	}
	renderSpectrum();
	if (document.activeElement !== spectrumHexInput) spectrumHexInput.value = hex;
	readoutHex.textContent = hex;
	readoutRgb.textContent = formatRgb(rgb);
	readoutHsl.textContent = formatHsl(hsl);
	readoutSwatch.style.background = hex;
	pinColorBtn.disabled = false;
	renderHarmonySuggestions(hex);
}

const harmonyContainers: Record<string, HTMLDivElement> = {
	Complementary: el<HTMLDivElement>("harmony-complementary"),
	Analogous: el<HTMLDivElement>("harmony-analogous"),
	Triadic: el<HTMLDivElement>("harmony-triadic"),
	Monochromatic: el<HTMLDivElement>("harmony-mono"),
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

function renderHarmonySuggestions(hex: string) {
	for (const scheme of generateHarmonies(hex)) {
		const container = harmonyContainers[scheme.label];
		if (container) renderSwatchRow(container, scheme.colors);
	}
}

function drawCrosshair() {
	clearOverlay();
	if (!hasCursor) return;
	const r = 6;
	overlayCtx.save();
	overlayCtx.lineWidth = Math.max(1, naturalWidth / 400);
	overlayCtx.strokeStyle = "#ffffff";
	overlayCtx.beginPath();
	overlayCtx.arc(cursor.x, cursor.y, r, 0, Math.PI * 2);
	overlayCtx.stroke();
	overlayCtx.strokeStyle = "#171717";
	overlayCtx.lineWidth = Math.max(0.5, naturalWidth / 800);
	overlayCtx.beginPath();
	overlayCtx.arc(cursor.x, cursor.y, r, 0, Math.PI * 2);
	overlayCtx.stroke();
	overlayCtx.restore();
}

function clearOverlay() {
	overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
}

const MAGNIFIER_SIZE = 120;
const MAGNIFIER_PIXELS = 11; // odd, so there's a true center pixel under the crosshair
const MAGNIFIER_ZOOM = MAGNIFIER_SIZE / MAGNIFIER_PIXELS;

function hideMagnifier() {
	magnifierEl.hidden = true;
}

/** Draws a zoomed pixel-grid crop into the circular loupe; the center-pixel
 * crosshair itself is a plain CSS ::after on #magnifier (see ColorTool.astro). */
function showMagnifierAt(clientX: number, clientY: number, imgX: number, imgY: number) {
	if (!rawImageData) return;

	magnifierCtx.imageSmoothingEnabled = false;
	magnifierCtx.clearRect(0, 0, MAGNIFIER_SIZE, MAGNIFIER_SIZE);

	const half = Math.floor(MAGNIFIER_PIXELS / 2);
	const sx = clamp(imgX - half, 0, Math.max(0, naturalWidth - MAGNIFIER_PIXELS));
	const sy = clamp(imgY - half, 0, Math.max(0, naturalHeight - MAGNIFIER_PIXELS));
	const sw = Math.min(MAGNIFIER_PIXELS, naturalWidth);
	const sh = Math.min(MAGNIFIER_PIXELS, naturalHeight);

	magnifierCtx.drawImage(imageCanvas, sx, sy, sw, sh, 0, 0, sw * MAGNIFIER_ZOOM, sh * MAGNIFIER_ZOOM);

	// Positioned relative to the dropzone (not the tighter canvas-wrap), matching
	// how a loupe is anchored to the whole photo panel rather than the image edge.
	const panelRect = dropzoneEl.getBoundingClientRect();
	let left = clientX - panelRect.left + 20;
	let top = clientY - panelRect.top - MAGNIFIER_SIZE - 20;
	if (top < 0) top = clientY - panelRect.top + 20;
	left = clamp(left, 0, Math.max(0, panelRect.width - MAGNIFIER_SIZE));
	top = clamp(top, 0, Math.max(0, panelRect.height - MAGNIFIER_SIZE));
	magnifierEl.style.left = `${left}px`;
	magnifierEl.style.top = `${top}px`;
	magnifierEl.hidden = false;
}

function moveCursorTo(x: number, y: number, clientPos?: { clientX: number; clientY: number }) {
	cursor = { x: clamp(x, 0, naturalWidth - 1), y: clamp(y, 0, naturalHeight - 1) };
	hasCursor = true;
	const rgb = pixelAt(cursor.x, cursor.y);
	if (rgb) updateReadout(rgb);
	drawCrosshair();
	const pos = clientPos ?? imagePixelToClient(cursor.x, cursor.y);
	showMagnifierAt(pos.clientX, pos.clientY, cursor.x, cursor.y);
}

function saveColor(hex: string) {
	saveColorToHistory(hex);
	renderSavedColors();
	showToast("Color saved");
}

function pinCurrentColor() {
	if (!currentRgb) return;
	saveColor(rgbToHex(currentRgb));
}

imageCanvas.addEventListener("mousemove", (e) => {
	if (!rawImageData) return;
	const { x, y } = clientToImagePixel(e.clientX, e.clientY);
	moveCursorTo(x, y, { clientX: e.clientX, clientY: e.clientY });
});
imageCanvas.addEventListener("mouseleave", () => {
	hideMagnifier();
});

// Touch devices have no hover, so drag-to-preview stands in for mousemove:
// dragging a finger across the image moves the magnifier/readout live, and
// lifting it opens the same color-options menu a click would.
let lastTouchPos: { clientX: number; clientY: number } | null = null;

function touchPoint(e: TouchEvent): { clientX: number; clientY: number } | null {
	const touch = e.touches[0] ?? e.changedTouches[0];
	return touch ? { clientX: touch.clientX, clientY: touch.clientY } : null;
}

imageCanvas.addEventListener(
	"touchstart",
	(e) => {
		if (!rawImageData) return;
		const pos = touchPoint(e);
		if (!pos) return;
		e.preventDefault();
		lastTouchPos = pos;
		const { x, y } = clientToImagePixel(pos.clientX, pos.clientY);
		moveCursorTo(x, y, pos);
	},
	{ passive: false },
);
imageCanvas.addEventListener(
	"touchmove",
	(e) => {
		if (!rawImageData) return;
		const pos = touchPoint(e);
		if (!pos) return;
		e.preventDefault();
		lastTouchPos = pos;
		const { x, y } = clientToImagePixel(pos.clientX, pos.clientY);
		moveCursorTo(x, y, pos);
	},
	{ passive: false },
);
imageCanvas.addEventListener("touchend", (e) => {
	if (!rawImageData || !lastTouchPos) return;
	e.preventDefault(); // also suppresses the synthetic click that would otherwise follow
	const rgb = pixelAt(cursor.x, cursor.y);
	if (rgb) openColorMenu(lastTouchPos.clientX, lastTouchPos.clientY, rgb);
	hideMagnifier();
});

imageCanvas.addEventListener("click", (e) => {
	if (!rawImageData) return;
	const { x, y } = clientToImagePixel(e.clientX, e.clientY);
	moveCursorTo(x, y, { clientX: e.clientX, clientY: e.clientY });
	const rgb = pixelAt(x, y);
	if (rgb) openColorMenu(e.clientX, e.clientY, rgb);
});
imageCanvas.addEventListener("keydown", (e) => {
	if (!rawImageData) return;
	const step = e.shiftKey ? 10 : 1;
	let handled = true;
	switch (e.key) {
		case "ArrowLeft":
			moveCursorTo(cursor.x - step, cursor.y);
			break;
		case "ArrowRight":
			moveCursorTo(cursor.x + step, cursor.y);
			break;
		case "ArrowUp":
			moveCursorTo(cursor.x, cursor.y - step);
			break;
		case "ArrowDown":
			moveCursorTo(cursor.x, cursor.y + step);
			break;
		case "Enter":
		case " ": {
			const rgb = pixelAt(cursor.x, cursor.y);
			if (rgb) {
				const { clientX, clientY } = imagePixelToClient(cursor.x, cursor.y);
				openColorMenu(clientX, clientY, rgb);
			}
			break;
		}
		default:
			handled = false;
	}
	if (handled) e.preventDefault();
});
pinColorBtn.addEventListener("click", pinCurrentColor);

randomColorBtn.addEventListener("click", () => {
	const rgb: RGB = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256),
	};
	hasCursor = false; // this color isn't tied to an image pixel, so no crosshair/magnifier to show
	clearOverlay();
	hideMagnifier();
	updateReadout(rgb);
});

// ---------------------------------------------------------------------------
// Spectrum picker — saturation/brightness square, hue slider, and HEX input
// ---------------------------------------------------------------------------
function renderSpectrum() {
	const hex = rgbToHex(hsvToRgb(spectrum));
	spectrumSv.style.setProperty("--hue", `hsl(${spectrum.h} 100% 50%)`);
	spectrumThumb.style.left = `${spectrum.s}%`;
	spectrumThumb.style.top = `${100 - spectrum.v}%`;
	spectrumThumb.style.background = hex;
	spectrumHue.value = String(spectrum.h);
	spectrumSv.setAttribute("aria-valuenow", String(spectrum.s));
	spectrumSv.setAttribute("aria-valuetext", `${hex}, saturation ${spectrum.s}%, brightness ${spectrum.v}%`);
}

function applySpectrum() {
	hasCursor = false; // spectrum colors aren't tied to an image pixel
	clearOverlay();
	hideMagnifier();
	updateReadout(hsvToRgb(spectrum), true);
}

function setSvFromPointer(e: PointerEvent) {
	const rect = spectrumSv.getBoundingClientRect();
	spectrum = {
		h: spectrum.h,
		s: Math.round(clamp((e.clientX - rect.left) / rect.width, 0, 1) * 100),
		v: Math.round((1 - clamp((e.clientY - rect.top) / rect.height, 0, 1)) * 100),
	};
	applySpectrum();
}

spectrumSv.addEventListener("pointerdown", (e) => {
	spectrumSv.setPointerCapture(e.pointerId);
	spectrumSv.focus();
	setSvFromPointer(e);
});
spectrumSv.addEventListener("pointermove", (e) => {
	if (spectrumSv.hasPointerCapture(e.pointerId)) setSvFromPointer(e);
});
spectrumSv.addEventListener("keydown", (e) => {
	const step = e.shiftKey ? 10 : 1;
	const deltas: Record<string, [number, number]> = {
		ArrowLeft: [-step, 0],
		ArrowRight: [step, 0],
		ArrowUp: [0, step],
		ArrowDown: [0, -step],
	};
	const d = deltas[e.key];
	if (!d) return;
	e.preventDefault();
	spectrum = { h: spectrum.h, s: clamp(spectrum.s + d[0], 0, 100), v: clamp(spectrum.v + d[1], 0, 100) };
	applySpectrum();
});
spectrumHue.addEventListener("input", () => {
	spectrum = { ...spectrum, h: Number(spectrumHue.value) };
	applySpectrum();
});
spectrumHexInput.addEventListener("input", () => {
	const rgb = hexToRgb(spectrumHexInput.value);
	if (!rgb) return;
	hasCursor = false;
	clearOverlay();
	hideMagnifier();
	updateReadout(rgb);
});
spectrumHexInput.addEventListener("blur", () => {
	// Snap back to the canonical form of the current color (or clear a half-typed code).
	spectrumHexInput.value = currentRgb ? rgbToHex(currentRgb) : "";
});
spectrumHexInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") spectrumHexInput.blur();
});
renderSpectrum();

// ---------------------------------------------------------------------------
// Color options menu — opens at the clicked/focused pixel with quick actions
// ---------------------------------------------------------------------------

let openMenuEl: HTMLDivElement | null = null;
let menuReturnFocus: HTMLElement | null = null;

function closeColorMenu() {
	if (!openMenuEl) return;
	openMenuEl.remove();
	openMenuEl = null;
	document.removeEventListener("keydown", onMenuKeydown, true);
	document.removeEventListener("pointerdown", onMenuOutsideClick, true);
	menuReturnFocus?.focus();
	menuReturnFocus = null;
}

function onMenuOutsideClick(e: PointerEvent) {
	if (openMenuEl && !openMenuEl.contains(e.target as Node)) closeColorMenu();
}

function onMenuKeydown(e: KeyboardEvent) {
	if (!openMenuEl) return;
	const items = Array.from(openMenuEl.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
	const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement);
	if (e.key === "Escape") {
		e.preventDefault();
		closeColorMenu();
	} else if (e.key === "ArrowDown") {
		e.preventDefault();
		items[(currentIndex + 1) % items.length]?.focus();
	} else if (e.key === "ArrowUp") {
		e.preventDefault();
		items[(currentIndex - 1 + items.length) % items.length]?.focus();
	}
}

function openColorMenu(clientX: number, clientY: number, rgb: RGB) {
	closeColorMenu();
	hideMagnifier();
	const hex = rgbToHex(rgb);
	const hsl = rgbToHsl(rgb);

	menuReturnFocus = document.activeElement as HTMLElement;

	const menu = document.createElement("div");
	menu.setAttribute("role", "menu");
	menu.setAttribute("aria-label", `Color options for ${hex}`);
	menu.className = "flex flex-col gap-xxs rounded-md border p-1";
	menu.style.cssText =
		"position:fixed;z-index:9998;min-width:220px;background:var(--color-canvas-elevated);border-color:var(--color-hairline);box-shadow:0 2px 2px rgba(0,0,0,0.04),0 8px 16px -4px rgba(0,0,0,0.2);";

	const header = document.createElement("div");
	header.className = "flex items-center gap-xs px-2 py-2 mb-1 border-b";
	header.style.borderColor = "var(--color-hairline)";
	header.innerHTML = `<span style="display:inline-block;width:22px;height:22px;border-radius:6px;background:${hex};border:1px solid var(--color-hairline);flex-shrink:0"></span><span class="type-code">${hex}</span>`;
	menu.appendChild(header);

	const ICONS = {
		save: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 2h8v12l-4-3-4 3V2z"/></svg>',
		fullscreen:
			'<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"/></svg>',
		copy: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M3 11V3a1 1 0 0 1 1-1h8"/></svg>',
		name: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 2h5a1 1 0 0 1 1 1v5l-7 7-6-6 7-7z"/><circle cx="11" cy="5" r="1" fill="currentColor" stroke="none"/></svg>',
		contrast:
			'<svg viewBox="0 0 16 16" width="16" height="16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 2a6 6 0 0 1 0 12z" fill="currentColor"/></svg>',
	};

	const addItem = (icon: string, label: string, onActivate: () => void) => {
		const item = document.createElement("button");
		item.type = "button";
		item.setAttribute("role", "menuitem");
		item.className = "ctx-item";
		item.innerHTML = `${icon}<span>${label}</span>`;
		item.addEventListener("click", () => {
			onActivate();
			closeColorMenu();
		});
		menu.appendChild(item);
		return item;
	};

	addItem(ICONS.save, "Save color", () => saveColor(hex));
	addItem(ICONS.fullscreen, "View full screen", () => openColorFullscreen(hex));
	addItem(ICONS.copy, "Copy all values", () => copyText(`${hex}\n${formatRgb(rgb)}\n${formatHsl(hsl)}`));
	addItem(ICONS.name, "Closest color name", () => showToast(`Closest match: “${closestColorName(rgb)}”`, 2400));
	addItem(ICONS.contrast, "Check contrast", () => showToast(contrastMessage(rgb), 2400));

	document.body.appendChild(menu);
	openMenuEl = menu;

	// Position within the viewport, anchored near the click/focus point.
	const menuRect = menu.getBoundingClientRect();
	const x = clamp(clientX, 8, window.innerWidth - menuRect.width - 8);
	const y = clamp(clientY, 8, window.innerHeight - menuRect.height - 8);
	menu.style.left = `${x}px`;
	menu.style.top = `${y}px`;

	document.addEventListener("pointerdown", onMenuOutsideClick, true);
	document.addEventListener("keydown", onMenuKeydown, true);
	menu.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus();
}

function openColorFullscreen(hex: string) {
	const overlay = document.createElement("div");
	overlay.style.cssText = `position:fixed;inset:0;z-index:9999;background:${hex};display:flex;align-items:flex-end;justify-content:center;padding:24px;cursor:pointer;`;

	const label = document.createElement("p");
	label.textContent = `${hex} — tap anywhere or press Esc to exit`;
	label.style.cssText =
		"background:rgba(0,0,0,0.6);color:#fff;padding:8px 16px;border-radius:100px;font:14px 'Geist Sans',Arial,sans-serif;pointer-events:none;";
	overlay.appendChild(label);

	function exit() {
		overlay.remove();
		document.removeEventListener("keydown", onKey);
		if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
	}
	function onKey(e: KeyboardEvent) {
		if (e.key === "Escape") exit();
	}

	overlay.addEventListener("click", exit);
	document.addEventListener("keydown", onKey);
	document.body.appendChild(overlay);
	overlay.requestFullscreen?.().catch(() => {});
}

// ---------------------------------------------------------------------------
// Saved colors — persisted, with a closest name + matching palette suggestions
// ---------------------------------------------------------------------------

function renderSavedColors() {
	savedColorsEl.innerHTML = "";
	const colors = getSavedColors();
	if (colors.length === 0) {
		const p = document.createElement("p");
		p.className = "type-body-sm text-faint";
		p.textContent = "No saved colors yet.";
		savedColorsEl.appendChild(p);
		return;
	}

	for (const saved of colors) {
		const hex = `#${saved.hex}`;
		const rgb = hexToRgb(hex);
		if (!rgb) continue;

		const item = document.createElement("div");
		item.className = "saved-color-chip";

		const swatch = document.createElement("button");
		swatch.type = "button";
		swatch.className = "h-11 w-11 rounded-md border block hover-pop";
		swatch.style.background = hex;
		swatch.style.borderColor = "var(--color-hairline)";
		swatch.title = `Recall ${hex}`;
		swatch.setAttribute("aria-label", `Recall ${hex} into the live readout`);
		swatch.addEventListener("click", () => updateReadout(rgb));

		const removeBtn = document.createElement("button");
		removeBtn.type = "button";
		removeBtn.className = "saved-color-remove";
		removeBtn.setAttribute("aria-label", `Remove ${hex} from saved colors`);
		removeBtn.textContent = "×";
		removeBtn.addEventListener("click", () => {
			deleteSavedColor(saved.id);
			renderSavedColors();
		});

		const label = document.createElement("span");
		label.className = "type-body-sm text-mute mt-xxs block text-center";
		label.textContent = hex;

		item.append(swatch, removeBtn, label);
		savedColorsEl.appendChild(item);
	}
}

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------

function renderPalette() {
	if (!rawImageData) return;
	const count = Number(paletteCountInput.value);
	const small = downsampleForQuantization(imageCanvas, naturalWidth, naturalHeight, 200);
	const swatches: PaletteSwatch[] = quantize(small, count);
	currentPaletteHex = swatches.map((s) => rgbToHex(s));
	renderPaletteGrid(currentPaletteHex);
}

function renderPaletteGrid(hexList: string[]) {
	paletteGrid.innerHTML = "";
	for (const hex of hexList) {
		const rgb = hexToRgb(hex);
		if (!rgb) continue;
		const hsl = rgbToHsl(rgb);
		const wrap = document.createElement("div");
		wrap.className = "flex flex-col items-center gap-1";
		const swatch = document.createElement("button");
		swatch.type = "button";
		swatch.className = "h-12 w-full rounded-md border hover-pop";
		swatch.style.background = hex;
		swatch.style.borderColor = "var(--color-hairline)";
		swatch.title = `${hex} — ${formatRgb(rgb)} — ${formatHsl(hsl)}\nClick to copy HEX`;
		swatch.setAttribute("aria-label", `Swatch ${hex}`);
		swatch.addEventListener("click", () => copyText(hex));
		const label = document.createElement("span");
		label.className = "type-body-sm text-mute";
		label.textContent = hex;
		wrap.append(swatch, label);
		paletteGrid.appendChild(wrap);
	}
}

paletteCountInput.addEventListener("input", () => {
	paletteCountLabel.textContent = paletteCountInput.value;
	if (rawImageData) renderPalette();
});

// ---------------------------------------------------------------------------
// Image quality — its own area, categorized rather than a raw score
// ---------------------------------------------------------------------------

const TIER_ORDER: QualityTier[] = ["low", "medium", "high", "hd"];
const TIER_COLOR: Record<QualityTier, string> = {
	low: "var(--color-error)",
	medium: "var(--color-warning)",
	high: "var(--color-link)",
	hd: "var(--color-success)",
};

function renderQuality() {
	if (!rawImageData) return;
	const report = analyzeImageQuality(rawImageData, sourceWidth, sourceHeight);
	const tier = qualityTier(report);

	qualityBadge.textContent = QUALITY_TIER_LABEL[tier];
	qualityBadge.style.color = TIER_COLOR[tier];

	const tierIndex = TIER_ORDER.indexOf(tier);
	TIER_ORDER.forEach((t, i) => {
		const bar = qualityTierBars[t];
		bar.classList.toggle("active", i <= tierIndex);
		bar.style.setProperty("--tier-color", TIER_COLOR[tier]);
	});

	qualityWarnings.innerHTML = "";
	for (const w of report.warnings) {
		const li = document.createElement("li");
		li.textContent = w;
		qualityWarnings.appendChild(li);
	}
}

// ---------------------------------------------------------------------------
// Contrast checker
// ---------------------------------------------------------------------------

/** Quick one-off verdict for the color options menu: does black or white text read best on it? */
function contrastMessage(rgb: RGB): string {
	const white = contrastRatio(rgb, { r: 255, g: 255, b: 255 });
	const black = contrastRatio(rgb, { r: 0, g: 0, b: 0 });
	const useWhite = white >= black;
	const winner = useWhite ? white : black;
	const label = useWhite ? "White" : "Black";
	const passes = winner >= 4.5 ? "passes AA" : winner >= 3 ? "passes AA for large text only" : "fails AA";
	return `${label} text reads best here — ${winner.toFixed(1)}:1 (${passes})`;
}

function renderContrast() {
	const a = hexToRgb(contrastA.value);
	const b = hexToRgb(contrastB.value);
	if (!a || !b) {
		contrastResult.textContent = "Enter two valid hex colors (e.g. #171717) to compare.";
		return;
	}
	const ratio = contrastRatio(a, b);
	const verdict = contrastVerdict(ratio);
	contrastResult.innerHTML = `
		<p class="type-heading-md mb-xxs">${ratio.toFixed(2)}:1</p>
		<p>Normal text — AA ${verdict.aaNormal ? "✅ pass" : "❌ fail"}, AAA ${verdict.aaaNormal ? "✅ pass" : "❌ fail"}</p>
		<p>Large text — AA ${verdict.aaLarge ? "✅ pass" : "❌ fail"}, AAA ${verdict.aaaLarge ? "✅ pass" : "❌ fail"}</p>
	`;
}
contrastA.addEventListener("input", renderContrast);
contrastB.addEventListener("input", renderContrast);

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

function buildExport(format: "css" | "tailwind" | "json"): string {
	if (currentPaletteHex.length === 0) return "";
	if (format === "css") {
		return `:root {\n${currentPaletteHex.map((hex, i) => `  --color-${i + 1}: ${hex};`).join("\n")}\n}`;
	}
	if (format === "tailwind") {
		return `colors: {\n${currentPaletteHex.map((hex, i) => `  'swatch-${i + 1}': '${hex}',`).join("\n")}\n}`;
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

document.querySelectorAll<HTMLButtonElement>("[data-export]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const format = btn.dataset.export as "css" | "tailwind" | "json";
		const text = buildExport(format);
		if (!text) {
			showToast("Upload an image first");
			return;
		}
		exportPreview.textContent = text;
		exportPreview.classList.remove("hidden");
		copyText(text);
	});
});

exportPngBtn.addEventListener("click", () => {
	if (currentPaletteHex.length === 0) {
		showToast("Upload an image first");
		return;
	}
	const swatchSize = 96;
	const canvas = document.createElement("canvas");
	canvas.width = swatchSize * currentPaletteHex.length;
	canvas.height = swatchSize;
	const ctx = canvas.getContext("2d")!;
	currentPaletteHex.forEach((hex, i) => {
		ctx.fillStyle = hex;
		ctx.fillRect(i * swatchSize, 0, swatchSize, swatchSize);
	});
	canvas.toBlob((blob) => {
		if (!blob) return;
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "real-color-finder-palette.png";
		a.click();
		URL.revokeObjectURL(url);
	});
});

// ---------------------------------------------------------------------------
// History + sharing
// ---------------------------------------------------------------------------

function renderSavedPalettes() {
	savedPalettesEl.innerHTML = "";
	const palettes = getSavedPalettes();
	if (palettes.length === 0) {
		const p = document.createElement("p");
		p.className = "type-body-sm text-faint";
		p.textContent = "No saved palettes yet.";
		savedPalettesEl.appendChild(p);
		return;
	}
	for (const palette of palettes) {
		const row = document.createElement("div");
		row.className = "flex items-center gap-xs";
		const strip = document.createElement("div");
		strip.className = "flex h-6 flex-1 overflow-hidden rounded-md border";
		strip.style.borderColor = "var(--color-hairline)";
		for (const hex of palette.colors) {
			const chip = document.createElement("div");
			chip.style.background = `#${hex}`;
			chip.style.flex = "1";
			strip.appendChild(chip);
		}
		const name = document.createElement("span");
		name.className = "type-body-sm min-w-0 flex-1 truncate";
		name.title = palette.name;
		name.textContent = palette.name;
		const loadBtn = document.createElement("button");
		loadBtn.type = "button";
		loadBtn.className = "btn-ghost-sm";
		loadBtn.textContent = "Load";
		loadBtn.addEventListener("click", () => {
			currentPaletteHex = palette.colors.map((c) => `#${c}`);
			renderPaletteGrid(currentPaletteHex);
		});
		const deleteBtn = document.createElement("button");
		deleteBtn.type = "button";
		deleteBtn.className = "btn-ghost-sm";
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", () => {
			if (!window.confirm(`Delete saved palette “${palette.name}”? This can’t be undone.`)) return;
			deletePalette(palette.id);
			renderSavedPalettes();
		});
		row.append(strip, name, loadBtn, deleteBtn);
		savedPalettesEl.appendChild(row);
	}
}

savePaletteBtn.addEventListener("click", () => {
	if (currentPaletteHex.length === 0) {
		showToast("Nothing to save yet — upload an image first");
		return;
	}
	savePalette(saveNameInput.value, currentPaletteHex);
	saveNameInput.value = "";
	renderSavedPalettes();
	showToast("Palette saved");
});

shareBtn.addEventListener("click", () => {
	if (currentPaletteHex.length === 0) {
		showToast("Nothing to share yet — upload an image first");
		return;
	}
	const url = encodePaletteToUrl(currentPaletteHex);
	copyText(url);
});

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

loadDemoImage();
renderSavedPalettes();
renderSavedColors();

const sharedPalette = decodePaletteFromUrl();
if (sharedPalette) {
	currentPaletteHex = sharedPalette.map((c) => `#${c}`);
	renderPaletteGrid(currentPaletteHex);
}
