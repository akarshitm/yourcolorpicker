export interface QualityReport {
	score: number; // 0-100
	warnings: string[];
	overexposedPct: number;
	underexposedPct: number;
	megapixels: number;
	blockinessRatio: number;
}

/**
 * Heuristic image-quality analysis: exposure clipping, resolution, and a
 * JPEG-blockiness estimate. This is a confidence signal for how trustworthy
 * the extracted colors are, not a color-accurate measurement.
 */
export function analyzeImageQuality(imageData: ImageData, naturalWidth: number, naturalHeight: number): QualityReport {
	const { data, width, height } = imageData;
	const warnings: string[] = [];

	// Sample every 4th pixel for performance on large images.
	const stride = 4 * 4;
	let sampled = 0;
	let overexposed = 0;
	let underexposed = 0;

	for (let i = 0; i < data.length; i += stride) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		sampled++;
		if (r >= 250 && g >= 250 && b >= 250) overexposed++;
		else if (r <= 5 && g <= 5 && b <= 5) underexposed++;
	}

	const overexposedPct = sampled ? (overexposed / sampled) * 100 : 0;
	const underexposedPct = sampled ? (underexposed / sampled) * 100 : 0;

	// Blockiness: compare pixel deltas that fall on an 8px JPEG macroblock
	// boundary against deltas in the interior of a block. Heavy compression
	// makes block edges much sharper than the surrounding gradient.
	let boundaryDelta = 0;
	let boundaryCount = 0;
	let interiorDelta = 0;
	let interiorCount = 0;
	const rowStride = width * 4;

	for (let y = 1; y < height; y++) {
		for (let x = 1; x < width; x += 2) {
			const i = y * rowStride + x * 4;
			const iUp = (y - 1) * rowStride + x * 4;
			const delta = Math.abs(data[i] - data[iUp]) + Math.abs(data[i + 1] - data[iUp + 1]) + Math.abs(data[i + 2] - data[iUp + 2]);
			if (y % 8 === 0) {
				boundaryDelta += delta;
				boundaryCount++;
			} else {
				interiorDelta += delta;
				interiorCount++;
			}
		}
	}

	const avgBoundary = boundaryCount ? boundaryDelta / boundaryCount : 0;
	const avgInterior = interiorCount ? interiorDelta / interiorCount : 1;
	const blockinessRatio = avgInterior > 0 ? avgBoundary / avgInterior : 1;

	const megapixels = (naturalWidth * naturalHeight) / 1_000_000;

	let score = 100;

	if (overexposedPct > 15) {
		score -= 25;
		warnings.push(`${overexposedPct.toFixed(0)}% of the image is blown out (overexposed) — highlight colors may be inaccurate.`);
	} else if (overexposedPct > 5) {
		score -= 10;
		warnings.push(`${overexposedPct.toFixed(0)}% of the image is near white/blown out — bright colors may be less precise.`);
	}

	if (underexposedPct > 15) {
		score -= 25;
		warnings.push(`${underexposedPct.toFixed(0)}% of the image is crushed to black (underexposed) — shadow colors may be inaccurate.`);
	} else if (underexposedPct > 5) {
		score -= 10;
		warnings.push(`${underexposedPct.toFixed(0)}% of the image is near black — dark colors may be less precise.`);
	}

	if (megapixels < 0.1) {
		score -= 20;
		warnings.push("This image is very low resolution — extracted colors are averaged over large, blurry pixel blocks.");
	} else if (megapixels < 0.3) {
		score -= 8;
		warnings.push("This image is low resolution — fine color detail may be lost.");
	}

	if (blockinessRatio > 2.2) {
		score -= 20;
		warnings.push("Visible JPEG compression artifacts detected — colors near edges may be averaged with neighboring blocks.");
	} else if (blockinessRatio > 1.6) {
		score -= 8;
		warnings.push("Some compression artifacts detected — minor color inaccuracy is possible.");
	}

	if (warnings.length === 0) {
		warnings.push("No major quality issues detected — extracted colors should be reliable.");
	}

	return {
		score: Math.max(0, Math.min(100, Math.round(score))),
		warnings,
		overexposedPct,
		underexposedPct,
		megapixels,
		blockinessRatio,
	};
}

export type QualityTier = "low" | "medium" | "high" | "hd";

export const QUALITY_TIER_LABEL: Record<QualityTier, string> = {
	low: "Low quality",
	medium: "Medium quality",
	high: "High quality",
	hd: "HD quality",
};

/**
 * Buckets a quality report into a plain tier for display. HD requires both a
 * clean score (little exposure clipping / compression damage) and enough
 * actual resolution to earn the name — a heavily-compressed 4K image isn't
 * "HD" in any meaningful sense, and a pristine 200px thumbnail isn't either.
 */
export function qualityTier(report: QualityReport): QualityTier {
	const { score, megapixels } = report;
	if (score < 40 || megapixels < 0.3) return "low";
	if (score < 65 || megapixels < 0.9) return "medium";
	if (score < 85 || megapixels < 2) return "high";
	return "hd";
}
