---
title: "Color Research in 2026: What Scientists Learned This Year"
description: "From a completed 100-year-old Schrödinger theory to why wide-gamut screens look different to different people, here are the color science findings from 2026 that matter for designers."
publishDate: 2026-10-24
relatedTool:
  label: "Try the color blindness simulator"
  href: "/color-blindness-simulator"
---

Color feels like a solved problem. We have hex codes, color wheels, and contrast formulas, and most of the time they work. But 2026 has been a busy year for color science, and several findings change how we think about something designers handle every day: how people actually see color.

Here are the developments worth knowing about, and what each one means if you work with color.

## 1. Your "calibrated" screen may not look the same to everyone

In October 2026, researchers Andy Rider and Andrew Stockman at University College London's Institute of Ophthalmology published a study in *Optics Express* that explains a frustration many people in film and design have run into. Two displays are calibrated to match, yet they still look different, and different viewers disagree about which one is "right."

The team built a computational model of human color vision that accounts for **individual differences** between viewers. Some of those differences are mild red-green color vision deficiency. Others come from age, because the eye's lens filters out more blue light as we get older. They then ran 16 displays through the model, from consumer TVs to professional film monitors and cinema projectors.

The finding: **modern wide-gamut displays vary more from person to person than older ones.** Wide-gamut screens use very narrowband red, green, and blue light sources. Those sources can show more vivid colors, but they also amplify small differences between viewers' eyes. The blue primary mostly drives disagreements between older and younger viewers. The red and green primaries mostly affect people with different types of red-green deficiency.

Part of the problem is that most calibration tools rely on color-matching standards from about a century ago, and those standards don't represent typical vision well. As Rider put it, this "can make modern displays look wrong even when they have been calibrated to look the same."

**What it means for you:** a color that looks perfect on your monitor is one person's view on one device. The researchers note that their predictions still need to be tested with real observers. Even so, the safest habits are the ones designers already know: check important colors on more than one device, and don't let meaning depend on subtle hue differences alone.

## 2. Schrödinger's color theory is finally complete

About a century ago, physicist Erwin Schrödinger, better known for his cat, proposed that the qualities we perceive in a color could be described purely mathematically. Those qualities are **hue**, **saturation**, and **lightness**. His model had a gap, though. He never formally defined the **neutral axis**, the line of grays that runs from black to white. Without it, the definitions of hue and saturation didn't hold together.

A team at Los Alamos National Laboratory led by Roxana Bujack has now filled that gap. Their work was presented at the Eurographics Conference on Visualization and published in *Computer Graphics Forum*. They defined the neutral axis geometrically, and they also accounted for two known quirks of human vision:

- **The Bezold–Brücke effect:** a color's perceived hue shifts as it gets brighter or dimmer.
- **Diminishing returns:** large color differences are perceived as smaller than the sum of the small steps that make them up.

Their conclusion is that hue, saturation, and lightness "don't emerge from additional external constructs such as cultural or learned experiences." They come from the geometry of how we perceive color distance.

**What it means for you:** this is the theory behind why perceptual color spaces exist. If you've noticed that HSL lightness doesn't match how bright colors actually look, you've run into the problem this research addresses. (Our guide to [HEX vs RGB vs HSL](/blog/hex-vs-rgb-vs-hsl) covers the practical side.) Better mathematical models of perception lead, over time, to better color spaces, gradients, and data-visualization palettes.

## 3. AI vision models don't see color like we do

As AI image tools spread, a natural question is whether they "see" color the way people do. A July 2026 preprint on arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, tested this directly.

The researchers tested more than 50 pretrained vision models, including convolutional networks and vision transformers. They measured how small a color difference each model could detect and compared that with the human discrimination thresholds measured in decades of lab experiments.

The answer was a clear **no**. Alignment with human color sensitivity was weak across every model family. Models trained without labels (self-supervised) did somewhat better than conventionally supervised ones. Models trained on images paired with text landed at both the top and the bottom of the ranking. The authors conclude that human-like color sensitivity doesn't emerge on its own from current training methods.

**What it means for you:** be careful about relying on AI tools for color-critical judgments, such as whether two shades are distinguishable or whether a palette works for every viewer. For questions with a measurable answer, use a measurement. A [contrast checker](/contrast-checker) gives you an exact ratio, and a color picker gives you an exact value. Note that this paper is a preprint and has not yet been peer reviewed.

## 4. Contrast moved into CSS itself

On the practical side, one of the biggest changes for web designers this year came from browsers rather than labs. In April 2026, the CSS `contrast-color()` function reached **Baseline**, meaning it now works in all major browser engines.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

You give it a background color, and it returns black or white, whichever contrasts more. Mathematically, the better of black or white always reaches at least about 4.5:1. That means the result clears WCAG AA for normal text, though not necessarily the stricter AAA level of 7:1. It doesn't consider your brand's other colors, so it's a safety net, not a design decision.

Meanwhile, the long-discussed **APCA** contrast method remains exploratory. WCAG 3 is still a draft, with a final W3C Recommendation not expected before 2028. For compliance today, the WCAG 2 ratios are still the standard. Our [WCAG contrast guide](/blog/wcag-contrast-guide) explains them.

## The big picture

The research of 2026 points in one direction: **there is no single "correct" way a color looks.** Colors vary with the viewer's eyes, age, and screen, and the math that describes perception is subtler than the RGB numbers we type into a stylesheet.

That isn't a reason to give up on precision. It's a reason to use it where it counts. Check exact values, test contrast with real numbers, and preview your palette the way people with color vision deficiencies will see it. About 1 in 12 men and 1 in 200 women have some form of color vision deficiency, and the UCL study suggests modern screens may widen those differences. For more on designing for this audience, see our guide to [designing for color blindness](/blog/designing-for-color-blindness).

### Sources

- Rider, Frith & Stockman, *Optics Express* 34, 38458–38481 (2026), via the [Optica press release](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Los Alamos National Laboratory, via [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, July 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
