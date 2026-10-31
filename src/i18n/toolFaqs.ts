import type { Locale } from "./config";

// Per-tool FAQs targeting the search queries each tool page competes for.
// Kept outside the main dictionaries so a locale can add them independently —
// a page whose locale has no entry simply renders no FAQ block.
export interface ToolFaqItem {
	q: string;
	a: string;
}

export interface ToolFaqSet {
	heading: string;
	items: ToolFaqItem[];
}

export type ToolFaqKey = "paletteGenerator" | "gradientMaker" | "colorMixer";

const en: Record<ToolFaqKey, ToolFaqSet> = {
	paletteGenerator: {
		heading: "Color palette generator — frequently asked",
		items: [
			{
				q: "How does this color palette generator work?",
				a: "Pick one base color (or hit Randomize) and the palette generator builds four color schemes from it using color-wheel rules: complementary, analogous, triadic, and monochromatic. Every swatch is a real HEX code you can copy, and the whole palette exports as CSS variables, a Tailwind config, or JSON.",
			},
			{
				q: "Can I generate a color palette from one color?",
				a: "Yes — that's exactly what this palette maker does. Type or pick a single HEX color and it generates matching palettes around it, so your brand color stays the anchor while the tool finds colors that work with it.",
			},
			{
				q: "Can I generate a color palette from an image?",
				a: "Yes. Upload a photo to the image color picker on our home page and it extracts the image's dominant colors as a palette. Pick any of those colors and bring its HEX code here to build full color schemes around it.",
			},
			{
				q: "Which color scheme should I choose?",
				a: "Complementary palettes give high contrast for calls to action, analogous palettes feel calm and cohesive, triadic palettes add balanced variety, and monochromatic palettes keep everything in one hue for a clean, minimal look. Generate all four and pick the one that fits your design.",
			},
			{
				q: "Is the palette generator free?",
				a: "Yes — free, no signup, and it runs entirely in your browser. Generate as many color palettes as you like and export them without a watermark.",
			},
		],
	},
	gradientMaker: {
		heading: "CSS gradient generator — frequently asked",
		items: [
			{
				q: "How do I create a CSS gradient?",
				a: "Pick two or more colors, choose linear or radial, set the angle, and this CSS gradient generator writes the background CSS for you. Click Copy CSS and paste it into any stylesheet — it works in every modern browser.",
			},
			{
				q: "What's the difference between a linear and a radial gradient?",
				a: "A linear-gradient() blends colors along a straight line at the angle you choose — 90deg runs left to right, 180deg top to bottom. A radial-gradient() blends outward from a center point in a circle or ellipse, which suits spotlights and soft backgrounds.",
			},
			{
				q: "How many colors can a CSS gradient have?",
				a: "CSS itself allows any number of color stops. This gradient maker supports up to five, which covers nearly every background, button, and hero-section gradient.",
			},
			{
				q: "Can I use the gradient as a text or button background?",
				a: "Yes. The generated CSS is a standard background value, so it works on any element — buttons, cards, hero sections, or text when combined with background-clip: text.",
			},
		],
	},
	colorMixer: {
		heading: "Color mixing tool — frequently asked",
		items: [
			{
				q: "How do I mix two colors online?",
				a: "Pick Color A and Color B, then drag the blend ratio slider. This color mixing tool shows the mixed color instantly with its HEX, RGB, and HSL codes, ready to copy.",
			},
			{
				q: "Does this color mixer work like mixing paint?",
				a: "Not quite. It mixes colors the way screens do, in RGB light, so red and blue make a clean purple. Paint mixes subtractively, so real pigments usually come out darker and muddier. For digital design, RGB mixing is the result you want.",
			},
			{
				q: "What color do you get when you mix two colors?",
				a: "At a 50/50 ratio you get the exact midpoint of the two colors' RGB values — for example, #FF0000 and #0000FF mix to #800080. Move the slider to weight the mix toward either color.",
			},
			{
				q: "What is a color mixer useful for?",
				a: "Designers use a color mixer to find an in-between shade of two brand colors, build hover and pressed states, create a smooth midpoint for a gradient, or tone down a color by mixing it with gray.",
			},
		],
	},
};

const toolFaqs: Partial<Record<Locale, Record<ToolFaqKey, ToolFaqSet>>> = { en };

export function getToolFaq(lang: Locale, key: ToolFaqKey): ToolFaqSet | undefined {
	return toolFaqs[lang]?.[key];
}
