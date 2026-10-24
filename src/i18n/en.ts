export const en = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Image Color Picker",
		tools: "Tools",
		whyUs: "Why us",
		faq: "FAQ",
		blog: "Blog",
		about: "About",
		contact: "Contact",
		howToUse: "How to use",
		openMenu: "Open menu",
		uploadImage: "Upload image",
		language: "Language",
		games: "Games",
	},
	footer: {
		privacyHeading: "Privacy",
		privacyBlurb:
			"Your Color Picker is entirely client-side for the actual color tool. Every pixel you inspect, every palette extracted, and every color you save is computed and stored right in your browser using the Canvas API and local storage — your image is never uploaded, transmitted, or seen by any server, because there isn't one in this flow. We use Google Analytics to understand overall site traffic, but no image or color data is ever tracked or shared, and clearing your browser data removes everything saved locally.",
		readFullPolicy: "Read the full {{link}}.",
		privacyPolicyLabel: "Privacy Policy",
		aboutUs: "About Us",
		tools: "All Tools",
		faq: "FAQ",
		contactUs: "Contact Us",
		privacyPolicy: "Privacy Policy",
		termsAndConditions: "Terms and Conditions",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Your Color Picker — Color Finder From Any Photo",
		metaDescription:
			"Free color picker and color finder from image — instant HEX, RGB, and HSL codes, plus a complementary color finder and random color picker.",
		eyebrow: "Free color picker · No signup · Nothing ever uploaded",
		heading: "The color picker that finds any color in a photo",
		subhead:
			"A color finder from image that gets every HEX, RGB, and HSL code with pixel precision — plus a built-in complementary color finder and a random color picker for whenever you just need a color to start from.",
		ctaPrimary: "Upload an image",
		ctaSecondary: "See what makes it different",
	},
	features: {
		heading: "A color picker built for precision, not just extraction",
		items: [
			{
				title: "A color picker from image, pixel by pixel",
				body: "Hover the image and a zoomed loupe shows every individual pixel around your cursor, with the exact target pixel outlined — so this image color picker selects the one you mean, not an average of its neighbors.",
			},
			{
				title: "A hex color finder and RGB color finder, together",
				body: "Every pixel doubles as a hex code color finder, an RGB color finder, and an HSL reader at once — with its closest standard color name matched in one click.",
			},
			{
				title: "A built-in complementary color finder",
				body: "Complementary, analogous, triadic, and monochromatic palettes update live from whatever color you're pointing at — a complementary color finder with no color-theory knowledge required.",
			},
			{
				title: "A random color picker, whenever you need one",
				body: "No image handy? Hit random color to get a fresh HEX, RGB, and HSL code to start from — then save it or use it to generate a matching palette.",
			},
			{
				title: "Built-in contrast checker",
				body: "Compare any two colors from your image against WCAG AA/AAA thresholds for normal and large text — no separate tool needed.",
			},
			{
				title: "Export, not just copy",
				body: "Take your palette out as CSS variables, a Tailwind config snippet, JSON, or a downloadable PNG swatch strip — or save colors locally with no account needed.",
			},
		],
	},
	trust: {
		points: ["100% client-side — your image never leaves your browser", "No account, no signup, no watermark", "Works offline once the page has loaded"],
	},
	cta: {
		heading: "Ready to find your colors?",
	},
	cookieConsent: {
		message: "We use cookies (via Google Analytics) to understand how visitors use this site. See our {{link}} for details.",
		linkLabel: "Privacy Policy",
		accept: "Accept",
		decline: "Decline",
	},
	help: {
		title: "How to use Your Color Picker",
		close: "Close",
		done: "Got it",
		steps: [
			{
				title: "1. Upload an image",
				body: "Click the upload area, drag a file onto it, or paste an image straight from your clipboard.",
			},
			{
				title: "2. Inspect any pixel",
				body: "Hover the image and a magnifier shows every pixel around your cursor, zoomed in with the exact target pixel outlined — its RGB, HEX, and HSL update live to the right. You can also focus the image and use the arrow keys.",
			},
			{
				title: "3. Click for options",
				body: "Click a pixel — or press Enter while focused — to open its options: save it, view it full-screen (handy for holding your phone up to a real object to compare), copy every value at once, see its closest color name, or check whether black or white text reads best on it.",
			},
			{
				title: "4. Read the suggestions, palette, and quality",
				body: "\"Goes well with\" updates live with complementary, analogous, triadic, and monochromatic swatches for whatever color you're on. \"Dominant colors\" extracts the main colors from the whole image. The quality area below the image tells you whether it's Low, Medium, High, or HD — so you know how much to trust what you're picking.",
			},
			{
				title: "5. Save, export, or share",
				body: "Saved colors sit in a simple bookmark row — click one to bring it back into the live readout. Palettes export as CSS variables, Tailwind config, JSON, or a PNG strip, and can be saved locally or shared with a link.",
			},
		],
	},
	tool: {
		eyebrow: "Color picker from image",
		heading: "Upload an image, get every color in it",
		intro:
			"This image color picker doubles as a color finder from image for HEX, RGB, and HSL codes. Move over the sample photo below to try it, then upload your own — nothing is uploaded anywhere, it's read and analyzed entirely in your browser.",
		uploadButton: "Upload image",
		pickFromScreen: "Pick from screen",
		captureScreenshot: "Capture screenshot",
		miniPicker: "Mini picker window",
		dragHint: "or drag & drop a file onto the panel above, or paste with Ctrl/Cmd+V",
		canvasAriaLabel: "Image canvas — hover to inspect a pixel's color, click or press Enter to open save, full-screen, and copy options",
		qualityHeading: "Image quality",
		qualityLow: "Low",
		qualityMedium: "Medium",
		qualityHigh: "High",
		qualityHD: "HD",
		contrastHeading: "Contrast checker",
		colorA: "Color A",
		colorB: "Color B",
		contrastPlaceholder: "Pick two colors from the image (via its options menu) or paste hex codes to compare.",
		pickerHeading: "Color picker",
		randomColor: "Random color",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Copy",
		saveColor: "Save color",
		goesWellWith: "Goes well with",
		goesWellWithSub: "Palettes generated live from the color you're pointing at — click a swatch to copy.",
		complementary: "Complementary",
		analogous: "Analogous",
		triadic: "Triadic",
		monochromatic: "Monochromatic",
		dominantColors: "Dominant colors",
		colorsUnit: "colors",
		paletteCountAriaLabel: "Number of palette colors",
		savedColors: "Saved colors",
		savedColorsSub: "Click the image, or focus it and press Enter, for color options — including saving one here.",
		exportHeading: "Export",
		exportCss: "CSS variables",
		exportTailwind: "Tailwind config",
		exportJson: "JSON",
		exportPng: "Download PNG strip",
		historyHeading: "History",
		paletteNamePlaceholder: "Palette name",
		save: "Save",
		copyLink: "Copy link",
	},
	faq: {
		pageEyebrow: "FAQ",
		pageHeading: "Frequently asked questions",
		pageIntro:
			"Everything people ask us about picking colors from an image, reading HEX and RGB codes, and building a color palette — plus a few color questions that come up along the way.",
		metaDescription:
			"Answers about picking colors from an image, reading HEX and RGB codes, and building a color palette — plus other common color questions.",
		sectionHeading: "Color picker and color finder — frequently asked",
		viewAll: "View all FAQs",
		items: [
			{
				q: "How is this different from Google's color picker?",
				a: "Google's built-in color picker lets you pick from a palette or type in a HEX code, but it can't read colors out of a photo. Your Color Picker is a color picker from image — upload or drag in any photo and read the exact HEX, RGB, and HSL of any pixel in it.",
			},
			{
				q: "How do I find the HEX code of a color in an image?",
				a: "Upload the image, then hover — or drag your finger on a phone — over any pixel. The hex color finder updates live as you move, and clicking that pixel opens options to copy its HEX, RGB, or HSL, save it, or view it full-screen.",
			},
			{
				q: "What is a complementary color finder?",
				a: "A complementary color finder shows the color directly opposite your chosen one on the color wheel — the pairing designers reach for first. Ours updates live alongside analogous, triadic, and monochromatic suggestions for whatever color you're viewing.",
			},
			{
				q: "Can I get a random color?",
				a: "Yes — the random color picker built into the tool generates a fresh HEX, RGB, and HSL color any time you need a starting point, complete with its own matching palette suggestions.",
			},
			{
				q: "Is this color picker free and private?",
				a: "Yes. It's free with no signup, and 100% client-side — your image is read and analyzed entirely in your browser and is never uploaded to a server.",
			},
			{
				q: "What is a color picker tool?",
				a: "A color picker tool lets you select or identify a color and get its digital value — usually as a HEX code, RGB, or HSL — so you can reuse it in design work. Your Color Picker is a color picker from image: upload any photo and click a pixel to read its exact color values instantly.",
			},
			{
				q: "How do I use the color picker shortcut?",
				a: "Built-in OS shortcuts like Windows' Win + Shift + C (PowerToys Color Picker) or macOS's Digital Color Meter let you sample any pixel on your screen. If you'd rather skip installing anything, drop your image straight into Your Color Picker and hover over it in your browser — no shortcut or software required.",
			},
			{
				q: "How do I use a color finder?",
				a: "Drag or upload an image into the tool, then move your cursor (or finger on mobile) over any part of the picture. The color finder tracks your position live, showing the HEX, RGB, and HSL of that exact pixel — click it to copy the code or save the color.",
			},
			{
				q: "How do I change Finder's color on Mac?",
				a: "If you mean macOS's Finder app, go to System Settings → Appearance and change the Accent Color, which tints Finder's sidebar, windows, and highlights — there's no separate Finder-only color setting. If you're instead trying to identify a color you see in a photo, that's what Your Color Picker is built for — upload the image and click any pixel to get its exact code.",
			},
			{
				q: "How do I use a true color finder?",
				a: "\"True color\" refers to full 24-bit color depth — over 16 million shades, matching what your screen actually displays. Your Color Picker reads pixels at true color precision, so the HEX and RGB values you get match the exact shade in your image, not a rounded approximation.",
			},
			{
				q: "What color is this?",
				a: "Upload a photo of it — or a screenshot, if it's on your screen — into Your Color Picker, then hover your cursor (or your finger on mobile) over the exact spot. The tool shows the HEX, RGB, and HSL of that pixel live, and you can click to copy or save it. For a whole image rather than one spot, sample a few of its most prominent areas to get a sense of its overall color.",
			},
			{
				q: "What color is taupe?",
				a: "Taupe is a muted, grayish-brown that sits between gray and brown with a warm undertone, often landing somewhere around HEX #8B8589 to #B38B6D depending on the shade. Paint and fabric taupes vary quite a bit, so if you have a taupe swatch or photo, upload it here to get its exact HEX code rather than relying on a general estimate.",
			},
			{
				q: "How do I find my color palette?",
				a: "\"Color palette\" can mean two different things. If you mean the shades that suit you personally, that's color season analysis (Spring, Summer, Autumn, Winter, and their sub-seasons) — determined by draping colored fabric near your face in natural light to see what best complements your skin, hair, and eye undertone, either with a stylist or an online self-assessment quiz. If you mean a design palette, the more precise route is to sample real colors from a reference photo — upload one to Your Color Picker and pick a few pixels; each comes with built-in complementary, analogous, and triadic suggestions to round out a set.",
			},
			{
				q: "How do I create a color palette?",
				a: "Start from a reference image — a photo, artwork, or mood board — and sample a handful of its colors with Your Color Picker. Each color you pick comes with built-in complementary, analogous, and triadic suggestions, so you can build a cohesive palette around a starting shade rather than guessing at combinations.",
			},
			{
				q: "How do you find your aura color?",
				a: "Aura color is a concept from energy-healing and spiritual practices, not a measurable or physical property — it's typically assessed through aura photography (like Kirlian photography) or by practitioners who read it intuitively. It's unrelated to HEX or RGB values, which measure light wavelengths rather than energy fields.",
			},
			{
				q: "How do I identify a paint color on a wall?",
				a: "Take a photo of the wall in natural, even daylight — avoid shadows and artificial lighting, which shift how a color reads — then upload it to Your Color Picker and sample the wall area to get its HEX and RGB. Screens and lighting conditions mean this gives a very close match rather than a guaranteed swatch-exact result, so bring the HEX to a paint store for their closest formula match.",
			},
			{
				q: "What's the best free tool to invert image colors?",
				a: "Your Color Picker is built for identifying and sampling colors from an image rather than inverting them, but color inversion is easy to do for free — most photo apps (macOS Preview, Windows Photos) have a built-in invert filter, and free editors like GIMP or Photopea (browser-based, no install) support it as a one-click filter too.",
			},
			{
				q: "How do I match belt color?",
				a: "The classic style rule is to match your belt to your shoes — brown belt with brown shoes, black with black — rather than to your pants or shirt. For an exact match between two specific items, like a particular leather tone, photograph both under the same light and compare their HEX codes with Your Color Picker rather than relying on eye judgment alone.",
			},
			{
				q: "What is RGB color?",
				a: "RGB stands for Red, Green, Blue — the three channels of light your screen mixes to create every color you see, each ranging from 0 to 255. It's an additive color model built for digital displays, unlike the paint-mixing model most people learn in school. Your Color Picker shows the RGB value for any pixel you sample from an image.",
			},
			{
				q: "What is HSL in a color code?",
				a: "HSL stands for Hue, Saturation, and Lightness — an alternative way to describe the same color as HEX or RGB, but in terms that are easier to reason about: hue is the base color (0–360° on the color wheel), saturation is how vivid or muted it is, and lightness is how close it is to black or white. It's often easier to predictably tweak a color in HSL — lowering lightness darkens a shade without shifting its hue, for example.",
			},
		],
	},
	about: {
		title: "About Us — Your Color Picker",
		description:
			"Your Color Picker is a free, private, browser-based color picker and color finder from image — see what it does and why nothing is uploaded.",
		eyebrow: "About",
		heading: "About Your Color Picker",
		intro: "A small, focused tool for one job: pulling exact HEX, RGB, and HSL values out of any image, instantly and privately.",
		whatHeading: "What it does",
		whatBody:
			"Your Color Picker is a color picker from image — upload or drag in a photo, screenshot, or design mockup, then hover or tap anywhere on it to read that exact pixel's color as HEX, RGB, and HSL. Click a color to copy any of those codes, save it to a palette, view it full-screen, or see suggested complementary, analogous, and triadic colors alongside it. There's also a standalone random color picker for whenever you just need a starting point.",
		whyHeading: "Why we built it",
		whyBody:
			"Most color pickers let you choose from a swatch or type in a code you already know — few let you point at a real photo and ask \"what color is that, exactly?\" We built Your Color Picker to answer that question in seconds, without asking you to install software, create an account, or upload anything to a server.",
		howHeading: "How it works",
		howBody:
			"Everything runs client-side in your browser using the HTML Canvas API. Your image is decoded and read locally on your device — it's never transmitted anywhere, because there's no upload step in the flow at all. Saved colors live in your browser's local storage, so they stay on your device and disappear if you clear your browser data. See our {{link}} for the full details.",
		howLinkLabel: "Privacy Policy",
		whoHeading: "Who it's for",
		whoBody:
			"Designers matching a HEX code from a reference image, developers pulling brand colors out of a screenshot, painters and decorators checking a wall or fabric color from a photo, and anyone who's ever looked at something and wondered exactly what shade it is.",
		questionsHeading: "Questions?",
		questionsFaqBody: "Check our {{link}} for common questions.",
		questionsFaqLinkLabel: "FAQ",
		questionsContactBody: "Or {{link}} directly — we read every message.",
		questionsContactLinkLabel: "get in touch",
	},
	contact: {
		title: "Contact Us — Your Color Picker",
		description: "Get in touch about Your Color Picker — bug reports, feature requests, or general feedback. We read every message.",
		eyebrow: "Contact",
		heading: "Contact us",
		intro: "Found a bug, have a feature idea, or just want to say hi? Send us a message — we read everything that comes in.",
		emailHeading: "Email us",
		sendEmailButton: "Send an email",
		includeHeading: "What to include",
		includeBody:
			"For bug reports, let us know what device and browser you're using and, if you can, what you were doing right before the issue showed up. For feature requests or general feedback, just tell us what you'd find useful — we read every message and aim to reply within a few business days.",
		beforeHeading: "Before you write in",
		beforeFaqBody: "Quick questions about how the tool works are often already answered on our {{link}}.",
		beforeFaqLinkLabel: "FAQ page",
		beforePrivacyBody: "For questions about how your data is handled, see our {{link}}.",
		beforePrivacyLinkLabel: "Privacy Policy",
	},
	privacy: {
		title: "Privacy Policy — Your Color Picker",
		description: "Your Color Picker's privacy policy: your images are processed entirely in your browser and are never uploaded, transmitted, or stored on a server.",
		eyebrow: "Legal",
		heading: "Privacy Policy",
		lastUpdatedPrefix: "Last updated:",
		shortHeading: "The short version",
		shortBody:
			"Your Color Picker runs entirely in your browser. Any image you upload is read and analyzed locally on your device using the Canvas API — it is never uploaded, transmitted to, or stored on any server, because this site has no server-side component in that flow at all. We do use Google Analytics to understand overall site traffic — see \"Cookies and tracking\" below for details.",
		imagesHeading: "Images you upload",
		imagesBody:
			"When you upload or drag in an image, it's decoded and rendered directly in your browser's memory to power the color picker. It is not sent over the network to us or to any third party. Closing or refreshing the tab discards the image completely.",
		storageHeading: "What we store locally",
		storageBody:
			"The tool uses your browser's local storage — a standard web technology, not a cookie — to remember two things on your own device: your light/dark theme preference, and any colors you choose to save while using the tool. This data never leaves your device, is never visible to us, and is removed automatically if you clear your browser's site data.",
		cookiesHeading: "Cookies and tracking",
		cookiesBody:
			"We use Google Analytics to understand overall traffic — for example, which pages are popular and roughly where visitors come from. It sets cookies and may collect information like your approximate location, device and browser type, and the pages you visit. This is completely separate from the color tool itself: your images and the colors you sample are never sent to Google or anyone else. You can opt out using the {{optout}}, or see {{privacy}} for details on how Google handles this data.",
		cookiesOptoutLabel: "Google Analytics Opt-out Browser Add-on",
		cookiesGooglePrivacyLabel: "Google's Privacy Policy",
		hostingHeading: "Hosting and server logs",
		hostingBody:
			"Like any website, our hosting provider may keep standard server access logs (such as IP address, browser type, and request timestamps) for security and reliability purposes. These logs are generated by the hosting infrastructure itself, not by this site's code, and are unrelated to any image or color data — none of that ever reaches a server.",
		childrenHeading: "Children's privacy",
		childrenBody:
			"Your Color Picker doesn't knowingly collect personal information from anyone, including children, because it doesn't collect personal information at all — there's no account system and nothing you enter is transmitted to us.",
		changesHeading: "Changes to this policy",
		changesBody:
			"If this policy changes, we'll update the \"last updated\" date above. Significant changes — like adding any form of data collection — will be reflected clearly on this page.",
		contactHeading: "Contact",
		contactBody: "Questions about this policy? Reach us at {{email}} or via our {{link}}.",
		contactLinkLabel: "contact page",
	},
	terms: {
		title: "Terms and Conditions — Your Color Picker",
		description: "The terms and conditions for using Your Color Picker, a free browser-based color picker and color finder from image.",
		eyebrow: "Legal",
		heading: "Terms and conditions",
		lastUpdatedPrefix: "Last updated:",
		acceptanceHeading: "Acceptance of terms",
		acceptanceBody: "By using Your Color Picker (\"the tool,\" \"the site\"), you agree to these terms. If you don't agree with them, please don't use the site.",
		useHeading: "Use of the service",
		useBody:
			"Your Color Picker is free to use, for personal or commercial purposes, with no signup required. You agree to use it only for lawful purposes and not to attempt to disrupt, reverse-engineer for malicious purposes, or abuse the service in a way that impairs it for other users.",
		contentHeading: "Your images and content",
		contentBody:
			"Any image you use with the tool is processed entirely in your own browser and is never uploaded to us — we never receive, store, or have access to it, so we make no claim to it whatsoever. You're solely responsible for making sure you have the right to use any image you load into the tool. See our {{link}} for more on how the tool handles data.",
		contentLinkLabel: "Privacy Policy",
		warrantyHeading: "No warranty",
		warrantyBody:
			"Your Color Picker is provided \"as is,\" without warranty of any kind, express or implied. While we aim for the color values it reports to be accurate, we don't guarantee perfect precision for every image, device, or display — screen calibration, image compression, and color profiles can all affect the exact values you see. Don't rely on it as the sole source for decisions where color accuracy is critical (for example, final paint or print production) without independent verification.",
		liabilityHeading: "Limitation of liability",
		liabilityBody:
			"To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the site or tool.",
		linksHeading: "Third-party links",
		linksBody: "Pages on this site may link to third-party resources for context. We aren't responsible for the content, accuracy, or practices of any site we don't operate.",
		changesHeading: "Changes to the service or these terms",
		changesBody:
			"We may update the tool or these terms at any time. Continued use of the site after changes are posted means you accept the updated terms. We'll update the \"last updated\" date above whenever this page changes.",
		contactHeading: "Contact",
		contactBody: "Questions about these terms? Reach us at {{email}} or via our {{link}}.",
		contactLinkLabel: "contact page",
	},
	toolsHub: {
		title: "All Color Tools | Your Color Picker",
		description:
			"Every free color tool in one place: color picker, converter, gradient maker, contrast checker, color blindness simulator, mixer, and more.",
		eyebrow: "Tools",
		heading: "All tools",
		intro: "Every free color tool on this site, in one place.",
		guidesHeading: "Guides",
		items: [
			{
				title: "Image Color Picker",
				body: "Upload a photo and read the exact HEX, RGB, and HSL of any pixel, with a magnifier and full palette extraction.",
			},
			{
				title: "Color Converter",
				body: "Convert any color between HEX, RGB, HSL, and HSV instantly — edit any field and the rest update live.",
			},
			{
				title: "Gradient Maker",
				body: "Pick two or more colors, preview a live CSS gradient, and copy the finished code.",
			},
			{
				title: "Contrast Checker",
				body: "Check the WCAG contrast ratio between a text and background color, with live AA/AAA pass/fail results.",
			},
			{
				title: "Color Blindness Simulator",
				body: "Upload an image to see it simulated for protanopia, deuteranopia, and tritanopia side by side.",
			},
			{
				title: "Color Mixer",
				body: "Blend two colors together at any ratio to find the exact color between them.",
			},
			{
				title: "Shades & Tints Generator",
				body: "Generate a full lightness ramp — tints toward white and shades toward black — from one base color.",
			},
			{
				title: "Random Color Generator",
				body: "Generate a random HEX, RGB, and HSL color with one click, plus matching palette suggestions.",
			},
			{
				title: "Browse Colors",
				body: "Explore every standard CSS named color with its HEX code — searchable, click to copy.",
			},
			{
				title: "Palette Generator",
				body: "Build a complete color palette — complementary, analogous, triadic, and monochromatic — from one base color, ready to export.",
			},
		],
	},
	games: {
		hub: {
			title: "Free Color Games — Test Your Color Vision | Your Color Picker",
			description: "Play free color games: Color Runner, an odd-color-out vision test, and a color memory challenge. No signup, right in your browser.",
			eyebrow: "Games",
			heading: "Color games",
			intro: "Quick, free games that train your eye for color. Beat your best and come back daily for a new Color Memory round.",
			play: "Play",
			newBadge: "New",
			dailyBadge: "Daily"
		},
		banner: {
			heading: "Play free color games",
			body: "Color Runner, an odd-color-out vision test, and color memory — how sharp is your eye?",
			cta: "Play now"
		},
		common: {
			share: "Share result",
			copied: "Copied — paste it anywhere!",
			playAgain: "Play again",
			start: "Start",
			best: "Best",
			moreGames: "More color games",
			allGames: "All games"
		},
		odd: {
			title: "Odd Color Out — Free Color Vision Test Game | Your Color Picker",
			description: "Find the one tile with a slightly different shade. Every level the grid grows and the difference shrinks — how far can your color vision go?",
			eyebrow: "Game",
			heading: "Odd Color Out",
			intro: "Tap the tile that doesn't match. Every level the grid grows and the difference gets smaller — you have three lives.",
			cardBody: "Spot the one tile with a slightly different shade. Levels get harder until only the sharpest eyes survive.",
			level: "Level",
			lives: "Lives",
			tileLabel: "Tile {n}",
			gameOver: "Game over — you reached level {n}.",
			rankLabel: "Your eye: {rank}",
			ranks: [
				"Getting started",
				"Good eye",
				"Sharp eye",
				"Eagle eye",
				"Color hawk",
				"Superhuman"
			],
			bestLevel: "Best: level {n}",
			help: {
				title: "How to play Odd Color Out",
				steps: [
					{
						title: "Find the odd tile",
						body: "One tile is a slightly different shade from the rest. Tap it to move to the next level."
					},
					{
						title: "It gets harder",
						body: "Each level adds more tiles and makes the difference smaller."
					},
					{
						title: "Three lives",
						body: "A wrong tap costs a life and shows you where the odd tile was. Lose all three and the game ends."
					}
				]
			},
			explainerHeading: "What this game measures",
			explainerBody: "The odd tile differs only in lightness, which almost everyone can see — including people with color vision deficiencies. Higher levels test how small a difference your eyes can pick out. Screen brightness, glare, and display quality all affect results, so treat it as a fun challenge, not a medical eye test."
		},
		runner: {
			title: "Color Runner — Free Pixel Color Running Game | Your Color Picker",
			description: "Run on the right color! A free pixel-art endless runner: switch between three colored lanes, stay on the color shown on screen, and grab golden buckets for 10 seconds of safety.",
			eyebrow: "Arcade game",
			heading: "Color Runner",
			intro: "Run, switch lanes, and always stay on the color written at the top. The lanes keep changing and the pace keeps rising — grab a golden bucket for 10 seconds of safety.",
			cardBody: "A pixel endless runner: stay on the lane of the color shown and grab golden buckets for 10 seconds of gold. How far can you run?",
			runOn: "Run on",
			next: "Next",
			goldActive: "Golden!",
			distance: "{n} m",
			best: "Best: {n} m",
			newBest: "New best! 🎉",
			controls: "← → switch lanes · ↑ or Space to jump · on phones, swipe",
			overColor: "You left the {color} path!",
			final: "You ran {n} m",
			left: "Move left",
			right: "Move right",
			jump: "Jump",
			resume: "Resume",
			sound: "Sound",
			colors: {
				red: "Red",
				blue: "Blue",
				yellow: "Yellow",
				green: "Green",
				pink: "Pink",
				orange: "Orange",
				purple: "Purple"
			},
			help: {
				title: "How to play Color Runner",
				steps: [
					{
						title: "Follow the color",
						body: "The color at the top tells you which lane to run on. Step off it for more than a moment and the run ends."
					},
					{
						title: "Watch for changes",
						body: "Lane colors shuffle as you run, and a flashing NEXT warning appears before the target color changes. Move early."
					},
					{
						title: "Grab the gold, jump the seams",
						body: "Golden buckets appear right on your path — grab one and your runner turns golden for 10 seconds, when you can't be knocked out. Press ↑ or Space (or swipe up) to jump over a short wrong-colored stretch while you switch lanes."
					}
				]
			},
			explainerHeading: "Why color switching is hard",
			explainerBody: "Reading a color word and matching it to a color takes real mental effort, especially when the colors around it keep changing — a cousin of the famous Stroop effect. Speed makes it harder: your brain has less time to check the word against the lanes, so the game trains fast, accurate color recognition."
		},
		memory: {
			title: "Color Memory Game — Recreate the Color From Memory | Your Color Picker",
			description: "See a color for 3 seconds, then recreate it from memory with hue, saturation, and lightness sliders. Five rounds, scored out of 100.",
			eyebrow: "Game",
			heading: "Color Memory",
			intro: "Study a color for three seconds, then rebuild it from memory with hue, saturation, and lightness sliders. Five rounds, scored out of 100.",
			cardBody: "See a color for 3 seconds, then recreate it from memory. Five rounds — can you score 90+?",
			dailyMode: "Daily",
			practiceMode: "Practice",
			dailyDone: "You've played today's daily round — try Practice mode, or come back tomorrow.",
			round: "Round {n}/5",
			memorize: "Memorize this color",
			recreate: "Now recreate it",
			hue: "Hue",
			saturation: "Saturation",
			lightness: "Lightness",
			submit: "Submit",
			next: "Next round",
			target: "Target",
			yours: "Yours",
			roundScore: "{score} / 100",
			final: "Final score: {score} / 100",
			bestScore: "Best: {score}",
			help: {
				title: "How to play Color Memory",
				steps: [
					{
						title: "Memorize",
						body: "A color fills the panel for three seconds. Take it in."
					},
					{
						title: "Recreate",
						body: "Use the hue, saturation, and lightness sliders to rebuild it from memory, then press Submit."
					},
					{
						title: "Score",
						body: "Each round is scored out of 100 by how close your color looks to the original. Daily mode gives everyone the same five colors."
					}
				]
			},
			explainerHeading: "Why color memory is hard",
			explainerBody: "People remember colors as categories — \"blue\", \"teal\" — more than exact values, so memories drift toward the typical version of each color. Scores here use the CIELAB color space, which measures difference the way eyes perceive it, so a hue mistake costs more than a tiny lightness slip."
		}
	},
	moreTools: {
		heading: "Try more free color tools",
		body: "Converter, gradient maker, contrast checker, palette generator and more — free, fast, and 100% private.",
		cta: "Explore all tools",
	},
	relatedTools: {
		heading: "Related tools",
	},
	colorConverterTool: {
		title: "Color Converter — HEX, RGB, HSL, HSV | Your Color Picker",
		description: "Convert any color between HEX, RGB, HSL, and HSV instantly. Edit any field and every other format updates live, with one-click copy.",
		eyebrow: "Tool",
		heading: "Color Converter",
		intro: "Type a color into any field below — HEX, RGB, HSL, or HSV — and the other three update live. Click any format to copy it.",
		explainerHeading: "What is HSV vs. HSL?",
		explainerBody:
			"Both describe the same color space with hue, saturation, and a third channel — but HSL's third value is lightness (how close to black or white), while HSV's is value (how close to black, independent of white). HSV is common in design software color pickers; HSL is more common in CSS.",
		help: {
			title: "How to use the Color Converter",
			steps: [
				{ title: "1. Type a color", body: "Enter a value into any field — HEX, RGB, HSL, or HSV." },
				{
					title: "2. Watch the others update",
					body: "The other three formats update live to match, so you can read the same color in any format.",
				},
				{ title: "3. Copy what you need", body: "Click Copy next to any format to copy that exact value to your clipboard." },
			],
		},
	},
	gradientMakerTool: {
		title: "Gradient Maker — Build a CSS Gradient | Your Color Picker",
		description: "Build a linear or radial CSS gradient from two or more colors, preview it live, and copy the exact CSS.",
		eyebrow: "Tool",
		heading: "Gradient Maker",
		intro: "Add colors, choose linear or radial, and copy the finished CSS gradient.",
		explainerHeading: "Why use a CSS gradient?",
		explainerBody:
			"Gradients add depth to a flat background without loading an image — commonly used for hero sections, buttons, and overlays. Linear gradients blend along a straight line at any angle; radial gradients blend outward from a center point. Set your colors here and copy the exact CSS, ready to drop into any stylesheet.",
		addColor: "+ Add color",
		linear: "Linear",
		radial: "Radial",
		angle: "Angle",
		cssHeading: "CSS",
		copyCss: "Copy CSS",
		remove: "Remove",
		help: {
			title: "How to use the Gradient Maker",
			steps: [
				{ title: "1. Add your colors", body: "Start with two colors, or click + Add color for up to five stops." },
				{ title: "2. Choose a style", body: "Pick Linear (with an adjustable angle) or Radial." },
				{ title: "3. Copy the CSS", body: "The exact CSS updates live below — click Copy CSS when you're happy with it." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Color Blindness Simulator | Your Color Picker",
		description: "Upload an image and see how it looks to people with protanopia, deuteranopia, or tritanopia color vision deficiency.",
		eyebrow: "Tool",
		heading: "Color Blindness Simulator",
		intro: "Upload an image to see it simulated for the three common types of color vision deficiency, side by side with the original.",
		dropHint: "Drag & drop an image here, or use the button below",
		uploadNote: "Nothing is uploaded anywhere — this runs entirely in your browser.",
		original: "Original",
		protanopia: "Protanopia (red-blind)",
		deuteranopia: "Deuteranopia (green-blind)",
		tritanopia: "Tritanopia (blue-blind)",
		whyHeading: "Why this matters",
		whyBody:
			"Roughly 1 in 12 men and 1 in 200 women have some form of color vision deficiency. Simulating protanopia, deuteranopia, and tritanopia helps designers check that charts, UI states, and diagrams don't rely on color alone to communicate meaning.",
		help: {
			title: "How to use the Color Blindness Simulator",
			steps: [
				{ title: "1. Upload an image", body: "Drag a photo onto the panel, or use the upload button." },
				{
					title: "2. Compare the four views",
					body: "Your original image appears alongside protanopia, deuteranopia, and tritanopia simulations.",
				},
				{
					title: "3. Check your design",
					body: "Look for information that only comes through as color — that's what these simulations reveal.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Browse Colors — Named Color Palette | Your Color Picker",
		description: "Browse all standard CSS named colors with their HEX codes. Click any swatch to copy its HEX value.",
		eyebrow: "Tool",
		heading: "Browse Colors",
		introPrefix: "Every standard CSS named color (",
		introSuffix: " in total), with its HEX code. Click a swatch to copy.",
		searchPlaceholder: "Search by name or hex…",
		empty: "No colors match your search.",
		help: {
			title: "How to use Browse Colors",
			steps: [
				{ title: "1. Scroll or search", body: "Browse the full grid, or type a name or hex code into the search box to filter it." },
				{ title: "2. Click to copy", body: "Click any swatch to copy its HEX code to your clipboard." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Contrast Checker — WCAG AA/AAA | Your Color Picker",
		description: "Check the WCAG contrast ratio between two colors for accessible text, with live AA and AAA pass/fail results.",
		eyebrow: "Tool",
		heading: "Contrast Checker",
		intro: "Enter a text color and a background color to check their WCAG contrast ratio for accessible design.",
		explainerHeading: "Why contrast ratio matters",
		explainerBody:
			"WCAG defines minimum contrast ratios so text stays readable for people with low vision or color blindness: 4.5:1 for normal text and 3:1 for large text at AA, rising to 7:1 and 4.5:1 at the stricter AAA level. Checking your text and background combination against these thresholds is one of the simplest ways to make a design more accessible.",
		textLabel: "Text",
		backgroundLabel: "Background",
		largeSample: "Large text sample (24px)",
		normalSample: "Normal text sample (14px) — the quick brown fox jumps over the lazy dog.",
		enterValid: "Enter two valid hex colors (e.g. #171717) to compare.",
		normalTextRow: "Normal text —",
		largeTextRow: "Large text —",
		pass: "pass",
		fail: "fail",
		help: {
			title: "How to use the Contrast Checker",
			steps: [
				{ title: "1. Set two colors", body: "Choose a text color and a background color using the pickers or hex fields." },
				{ title: "2. Read the ratio", body: "The contrast ratio and live preview update instantly." },
				{
					title: "3. Check WCAG pass/fail",
					body: "See at a glance whether your combination passes AA or AAA for normal and large text.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Random Color Generator | Your Color Picker",
		description: "Generate a random HEX, RGB, and HSL color with one click, complete with matching complementary and analogous suggestions.",
		eyebrow: "Tool",
		heading: "Random Color Generator",
		intro: "Click Generate for a fresh random color, with matching palette suggestions.",
		explainerHeading: "When a random color helps",
		explainerBody:
			"Sometimes the hardest part of choosing a color is picking a starting point. Generating a random HEX, RGB, and HSL code — along with its complementary and analogous matches — gives you something concrete to react to and refine, rather than staring at a blank color picker.",
		generate: "Generate random color",
		help: {
			title: "How to use the Random Color Generator",
			steps: [
				{ title: "1. Click Generate", body: "Get a fresh random HEX, RGB, and HSL color instantly." },
				{ title: "2. Copy any format", body: "Click Copy next to whichever value you need." },
				{
					title: "3. Explore matches",
					body: "Complementary, analogous, and triadic suggestions update to match your new color.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Color Mixer — Blend Two Colors | Your Color Picker",
		description: "Blend two colors together at any ratio to find the color between them, with live HEX, RGB, and HSL output.",
		eyebrow: "Tool",
		heading: "Color Mixer",
		intro: "Pick two colors and a blend ratio to find the color between them.",
		explainerHeading: "How color mixing works here",
		explainerBody:
			"This mixer blends two colors in RGB space at whatever ratio you set, rather than simulating paint or pigment mixing — so a 50/50 blend of red and blue returns a clean purple, matching how colors combine on screen. Useful for finding a midpoint shade between a brand's two main colors, or previewing a hover state between two states.",
		colorA: "Color A",
		colorB: "Color B",
		blendRatio: "Blend ratio",
		help: {
			title: "How to use the Color Mixer",
			steps: [
				{ title: "1. Pick Color A and B", body: "Choose two colors using the pickers or hex fields." },
				{ title: "2. Adjust the ratio", body: "Drag the slider to blend more toward one color or the other." },
				{
					title: "3. Copy the result",
					body: "The blended color's HEX, RGB, and HSL update live — copy whichever you need.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Shades & Tints Generator | Your Color Picker",
		description: "Generate a full ramp of tints (toward white) and shades (toward black) from one base color, ready to copy.",
		eyebrow: "Tool",
		heading: "Shades & Tints Generator",
		intro: "Pick a base color to generate a full lightness ramp — from near-white tints to near-black shades.",
		explainerHeading: "Shades vs. tints",
		explainerBody:
			"A tint is your base color mixed toward white — lighter and softer, useful for backgrounds and hover states. A shade is the same color mixed toward black — darker and richer, useful for text or borders that need to stay recognizably related to the base. Generating a full ramp of both gives you a consistent set to build a UI color scale around.",
		tints: "Tints (toward white)",
		base: "Base",
		shades: "Shades (toward black)",
		help: {
			title: "How to use the Shades & Tints Generator",
			steps: [
				{ title: "1. Pick a base color", body: "Choose any color using the picker or hex field." },
				{
					title: "2. Read the ramp",
					body: "Tints (toward white) and shades (toward black) generate automatically around your base.",
				},
				{ title: "3. Copy any swatch", body: "Click any swatch in the ramp to copy its HEX code." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Palette Generator — Color Schemes | Your Color Picker",
		description:
			"Generate a full color palette from any base color — complementary, analogous, triadic, and monochromatic schemes, ready to export as CSS, Tailwind, or JSON.",
		eyebrow: "Tool",
		heading: "Palette Generator",
		intro:
			"Pick a base color or randomize one, then explore complementary, analogous, triadic, and monochromatic palettes built from it — export any of them when you're ready.",
		explainerHeading: "Complementary, analogous, and triadic, explained",
		explainerBody:
			"These are classic color-wheel relationships: complementary pairs sit opposite each other for high contrast, analogous colors sit next to each other for a calm, cohesive look, and triadic sets space three colors evenly around the wheel for balanced variety. Starting from one base color and generating all three gives you several ready-made directions to choose from.",
		baseColorLabel: "Base color",
		randomize: "Randomize",
		exportHeading: "Export",
		help: {
			title: "How to use the Palette Generator",
			steps: [
				{ title: "1. Pick a base color", body: "Choose any color using the picker or hex field, or click Randomize for a starting point." },
				{
					title: "2. Explore the schemes",
					body: "Complementary, analogous, triadic, and monochromatic palettes generate automatically from your base color.",
				},
				{
					title: "3. Export or copy",
					body: "Click any swatch to copy its HEX code, or export the whole palette as CSS variables, Tailwind config, or JSON.",
				},
			],
		},
	},
	eyedropperGuide: {
		title: "Online Eyedropper Tool — Pick Any Color | Your Color Picker",
		description:
			"Free online eyedropper tool — pick any color from your screen or an image and get instant HEX, RGB, and HSL codes. 100% private, nothing is uploaded.",
		eyebrow: "Guide",
		heading: "Online Eyedropper Tool",
		intro: "Pick any color from your screen, a screenshot, or a photo, right in your browser — no extension or install needed.",
		explainerHeading: "How the eyedropper tool works",
		explainerBody:
			"This eyedropper uses your browser's built-in color-picking tools to sample a pixel from anywhere on your screen, or lets you upload an image and click a pixel directly. Either way, you get the exact HEX, RGB, and HSL value instantly, ready to copy into your design tool, CSS, or code editor.",
		faqHeading: "Frequently asked questions",
		faq: [
			{
				q: "Does this eyedropper tool work on mobile?",
				a: "Picking from an uploaded image works on any device, including phones and tablets. Picking directly from your screen uses a browser feature (the EyeDropper API) currently supported in Chrome, Edge, and other Chromium-based browsers on desktop.",
			},
			{
				q: "Is anything uploaded to a server?",
				a: "No. Every pixel is read locally in your browser using the Canvas API — your image and screen never leave your device.",
			},
			{
				q: "What color formats does it give me?",
				a: "HEX, RGB, and HSL for every color you pick, each with a one-click copy button.",
			},
		],
	},
	hexFromImageGuide: {
		title: "Get the HEX Code From an Image | Your Color Picker",
		description:
			"Upload any photo and get the exact HEX code of any pixel instantly, plus RGB, HSL, and a full palette. Free and 100% private — nothing leaves your device.",
		eyebrow: "Guide",
		heading: "Get the HEX Code From Any Image",
		intro: "Upload a photo, screenshot, or logo and click any pixel to read its exact HEX code, along with RGB, HSL, and a matching color palette.",
		explainerHeading: "How to find a HEX code in a photo",
		explainerBody:
			"Drop an image into the tool below, then click or hover over any pixel to read its exact color. HEX, RGB, and HSL all update instantly, and you can extract a full palette from the image in one click. Everything runs in your browser, so the image itself is never uploaded to a server.",
		faqHeading: "Frequently asked questions",
		faq: [
			{
				q: "Can I get the HEX code from a screenshot?",
				a: "Yes — upload a screenshot the same way you'd upload any photo, then click the pixel you want the HEX code for.",
			},
			{
				q: "Will this work with a logo or a transparent PNG?",
				a: "Yes, PNG, JPG, and WebP images all work, including transparent PNGs — transparent areas are read as their underlying pixel color.",
			},
			{
				q: "Is my image uploaded anywhere?",
				a: "No. The image is decoded and read entirely in your browser using the Canvas API — it never leaves your device.",
			},
		],
	},
	notFound: {
		title: "Page Not Found — Your Color Picker",
		description: "The page you're looking for doesn't exist. Head back to Your Color Picker to find HEX, RGB, and HSL colors from any image.",
		eyebrow: "404",
		heading: "Page not found",
		intro: "The page you're looking for doesn't exist, may have moved, or the URL has a typo.",
		homeButton: "Go to homepage",
		tryHeading: "Or try one of these",
		tryTool: "Use the color picker tool",
		tryFaq: "Browse the FAQ",
		tryAbout: "About Your Color Picker",
		tryContact: "Contact us",
	},
};

export type Dictionary = typeof en;
