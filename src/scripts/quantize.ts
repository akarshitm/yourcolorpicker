import type { RGB } from "./colorMath";

export interface PaletteSwatch extends RGB {
	count: number;
	/** Share of sampled pixels this swatch represents, 0-1. */
	share: number;
}

type Pixel = [number, number, number];

/**
 * Median-cut color quantization. Downsample the source ImageData before
 * calling this — it's O(n log n) in pixel count and meant to run on a small
 * (e.g. <=200px wide) copy of the image, not the full-resolution buffer.
 */
export function quantize(imageData: ImageData, maxColors: number): PaletteSwatch[] {
	const pixels: Pixel[] = [];
	const data = imageData.data;
	for (let i = 0; i < data.length; i += 4) {
		const a = data[i + 3];
		if (a < 125) continue; // skip transparent pixels
		pixels.push([data[i], data[i + 1], data[i + 2]]);
	}
	if (pixels.length === 0) return [];

	const buckets = medianCutSplit(pixels, Math.max(1, maxColors));
	const total = pixels.length;

	return buckets
		.map((bucket) => {
			let r = 0;
			let g = 0;
			let b = 0;
			for (const p of bucket) {
				r += p[0];
				g += p[1];
				b += p[2];
			}
			const n = bucket.length;
			return {
				r: Math.round(r / n),
				g: Math.round(g / n),
				b: Math.round(b / n),
				count: n,
				share: n / total,
			};
		})
		.sort((a, b) => b.count - a.count);
}

function medianCutSplit(pixels: Pixel[], targetBuckets: number): Pixel[][] {
	let buckets = [pixels];

	while (buckets.length < targetBuckets) {
		// Split the bucket with the largest color-space range.
		let splitIndex = -1;
		let largestRange = -1;
		let splitChannel: 0 | 1 | 2 = 0;

		buckets.forEach((bucket, i) => {
			if (bucket.length < 2) return;
			const [channel, range] = widestChannel(bucket);
			if (range > largestRange) {
				largestRange = range;
				splitIndex = i;
				splitChannel = channel;
			}
		});

		if (splitIndex === -1 || largestRange === 0) break;

		const bucket = buckets[splitIndex];
		bucket.sort((a, b) => a[splitChannel] - b[splitChannel]);
		const cut = findValueBoundaryNearMedian(bucket, splitChannel);
		const left = bucket.slice(0, cut);
		const right = bucket.slice(cut);

		buckets.splice(splitIndex, 1, left, right);
	}

	return buckets;
}

/**
 * Median-cut should split a *sorted* bucket at its population midpoint, but
 * flat-color images (logos, screenshots, illustrations) often have long runs
 * of pixels sharing the exact same value on the split channel. Cutting inside
 * such a run arbitrarily divides a single solid color between two buckets by
 * array position rather than by hue, which muddies the resulting palette.
 * Instead, walk outward from the midpoint to the nearest run boundary.
 */
function findValueBoundaryNearMedian(bucket: Pixel[], channel: 0 | 1 | 2): number {
	const n = bucket.length;
	const mid = Math.floor(n / 2);
	if (bucket[mid][channel] !== bucket[mid - 1][channel]) return mid;

	let left = mid;
	while (left > 0 && bucket[left][channel] === bucket[left - 1][channel]) left--;
	let right = mid;
	while (right < n && bucket[right][channel] === bucket[mid - 1][channel]) right++;

	if (left === 0 && right === n) return mid; // whole bucket ties on this channel (shouldn't happen, range > 0 was checked)
	if (left === 0) return right;
	if (right === n) return left;
	return mid - left <= right - mid ? left : right;
}

function widestChannel(bucket: Pixel[]): [0 | 1 | 2, number] {
	const min: Pixel = [255, 255, 255];
	const max: Pixel = [0, 0, 0];
	for (const p of bucket) {
		for (let c = 0; c < 3; c++) {
			if (p[c] < min[c]) min[c] = p[c];
			if (p[c] > max[c]) max[c] = p[c];
		}
	}
	const ranges: [number, number, number] = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
	let widest: 0 | 1 | 2 = 0;
	if (ranges[1] > ranges[widest]) widest = 1;
	if (ranges[2] > ranges[widest]) widest = 2;
	return [widest, ranges[widest]];
}

/** Draws `source` into a small offscreen canvas and returns its ImageData. */
export function downsampleForQuantization(source: CanvasImageSource, sourceWidth: number, sourceHeight: number, maxDimension = 200): ImageData {
	const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
	const w = Math.max(1, Math.round(sourceWidth * scale));
	const h = Math.max(1, Math.round(sourceHeight * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("2D canvas context unavailable");
	ctx.drawImage(source, 0, 0, w, h);
	return ctx.getImageData(0, 0, w, h);
}
