---
title: "WCAG Color Contrast: A Practical Guide for Designers and Developers"
description: "What the WCAG contrast ratio requirements actually mean, why they exist, and how to hit AA or AAA without guesswork."
publishDate: 2026-09-06
relatedTool:
  label: "Check your contrast ratio"
  href: "/contrast-checker"
---

"Make sure your text has enough contrast" is easy advice to give and surprisingly easy to get wrong, because "enough" isn't a feeling — it's a number, defined by the Web Content Accessibility Guidelines (WCAG), and it's stricter than most people's intuition.

## What the contrast ratio actually measures

Contrast ratio is a single number from 1:1 (identical colors — pure white text on a white background) to 21:1 (maximum contrast — pure black on pure white). It's calculated from the *relative luminance* of the two colors, which is a fancy way of saying "how much light each color reflects," weighted to match how human eyes perceive brightness (we're more sensitive to green than to blue, for instance, so the formula weights channels differently rather than just averaging RGB values).

You don't need to calculate this by hand — every [contrast checker](/contrast-checker) does the math for you — but it's worth knowing that the ratio is about *luminance*, not just how different two colors look to you at a glance. Two colors that look quite different can still fail if they're similarly bright (a common trap: medium-gray text on a medium-blue background often looks fine but tests poorly).

## The actual thresholds

WCAG defines two levels, AA and AAA, each with different requirements for normal versus large text:

| | Normal text | Large text (18pt+/24px+, or 14pt/18.66px bold) |
|---|---|---|
| **AA** (the standard most sites target) | 4.5:1 | 3:1 |
| **AAA** (the stricter, "enhanced" level) | 7:1 | 4.5:1 |

Large text gets a lower bar because bigger letterforms are inherently easier to distinguish from their background, even with less contrast between the two colors.

AA is the level referenced by most legal accessibility requirements (including the ADA and Section 508 in the US, and EN 301 549 in the EU) and is what most sites should treat as the non-negotiable minimum. AAA is meaningfully harder to hit across an entire design system — it's a good goal for critical text (like body copy in a reading-heavy product) but isn't usually required site-wide.

## Why this matters beyond compliance

Low contrast doesn't just fail an audit — it fails real readers. It affects people with low vision or [color blindness](/blog/designing-for-color-blindness) most acutely, but it also affects anyone reading on a low-quality or glare-lit screen, anyone over 40 (contrast sensitivity declines with age well before most people notice), and honestly, anyone squinting at a phone in direct sunlight. Contrast is one of the rare accessibility requirements that measurably improves the experience for essentially everyone, not just the specific group it was written to protect.

## Common ways contrast fails without anyone noticing

- **Placeholder text and disabled states** — designers often lighten these for visual hierarchy and accidentally drop below 4.5:1, even though the surrounding text passes fine.
- **Text over images or gradients** — a color that passes against a flat background can fail the moment it sits over a busy or lighter part of an image.
- **Brand colors used as text color** — a vibrant brand blue or a pastel brand color often looks great as an accent but fails outright as body text against white.
- **Dark mode** — contrast has to be re-checked separately in dark mode; a pairing that passes in light mode doesn't automatically pass once the background flips to near-black.

## A simple workflow

1. Pick your text and background colors as you normally would — if they come from a mockup or screenshot, the [eyedropper tool](/eyedropper-tool) grabs the exact values.
2. Check the ratio before shipping, not after a complaint or an audit — treat it the same as you would a broken link.
3. If it fails, adjust *lightness* first (in [HSL terms](/blog/hex-vs-rgb-vs-hsl)) rather than hue or saturation — it's the fastest way to fix contrast without changing what color something visually reads as.
4. Recheck dark mode separately if your product has one.

Contrast is one of the few accessibility rules with a hard number attached, which makes it one of the easiest to actually get right — there's no ambiguity once you check the ratio directly instead of eyeballing it.
