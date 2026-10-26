---
title: "Designing for Color Blindness: Types, Stats, and Practical Fixes"
description: "Color blindness affects a meaningful share of your audience. Here's what the different types actually look like and how to design around them."
publishDate: 2026-09-06
relatedTool:
  label: "Simulate color blindness on your image"
  href: "/color-blindness-simulator"
---

Color vision deficiency — commonly called color blindness — affects roughly **1 in 12 men (about 8%)** and **1 in 200 women (about 0.5%)** of Northern European descent, with somewhat different rates in other populations. On any reasonably large site or app, that's not an edge case — it's a meaningful fraction of your actual audience, most of whom have never told you and probably don't think of themselves as having a "disability" at all. They've just adapted around a lifetime of red-green traffic lights and status indicators looking ambiguous.

## The main types, and what they actually look like

"Color blind" is often used as if it means one thing, but it covers several distinct conditions:

- **Deuteranopia / deuteranomaly** (green-weak) — the most common type by far. Reds, greens, and browns become hard to tell apart, and colors in that range often look more muted or yellowish than intended.
- **Protanopia / protanomaly** (red-weak) — similar confusion to deuteranopia but with reds shifted differently; reds can appear darker than they really are, sometimes reading closer to black.
- **Tritanopia / tritanomaly** (blue-weak) — much rarer, affecting blue-yellow distinction instead. Blues and greens can be confused, and yellows can look pale or pink.
- **Achromatopsia** (total color blindness) — extremely rare, seeing only in grayscale.

Critically, "red-green color blindness" doesn't mean someone sees the world in only two colors — it means specific hues in that range become difficult to distinguish from each other, while the rest of the spectrum is largely unaffected. This is why color blindness is easy to miss when testing: a design can look completely fine to someone with deuteranopia in isolation and still fail the moment two easily-confused colors are placed next to each other as the *only* signal for something important.

## Where this actually breaks real interfaces

- **Status indicators** — red/green for error/success is the single most common failure. Someone with deuteranopia may see both as a similar muddy color and have no idea which one they're looking at.
- **Charts and graphs** — a line or bar chart that relies on color alone to separate five categories becomes unreadable if two of those colors land in a confusable range.
- **Form validation** — a red outline on an invalid field is invisible as a *color* cue to a meaningful share of users, even if the field itself is still visually distinct in other ways.
- **Maps and heatmaps** — red-to-green gradients (common for "bad to good" scales) are close to the worst possible choice for exactly the population most likely to need to read them accurately.

## Fixes that actually work

The good news is that none of these require redesigning your palette from scratch — they require *not relying on color alone*:

1. **Pair color with a second signal.** An error state gets a red border *and* an icon *and* text, not just red. A success state gets green *and* a checkmark. Once there's a non-color cue, the color becomes a nice-to-have rather than the only channel carrying meaning.
2. **Avoid red-green as your only two-state contrast.** If you need a clear binary (on/off, good/bad), blue and orange (a classic [complementary pair](/blog/color-wheel-explained)) are distinguishable across every common type of color blindness, where red and green often are not.
3. **Use patterns or labels in charts, not just color.** Direct labels on chart segments, or distinct line styles (solid/dashed/dotted) alongside color, keep multi-series charts readable regardless of color vision.
4. **Check contrast between adjacent colors, not just against the background.** Two colors can each have fine [contrast against a white background](/blog/wcag-contrast-guide) while being nearly indistinguishable from *each other* — which is exactly the failure mode that matters for status colors and chart series sitting side by side.
5. **Actually simulate it before shipping.** It's very hard to predict how your specific palette will look to someone with deuteranopia by reasoning about it in the abstract — running your actual UI or image through a [color blindness simulator](/color-blindness-simulator) takes the guesswork out entirely and often surfaces problems that look completely fine to typical color vision.

Designing for color blindness isn't really a separate design system — it's the same design system with one habit added: whenever color is the thing communicating a decision, ask what happens if that color isn't distinguishable, and make sure the answer isn't "the user can't tell what's happening."
