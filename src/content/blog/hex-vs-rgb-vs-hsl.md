---
title: "HEX vs RGB vs HSL: What's the Difference (and When to Use Each)"
description: "HEX, RGB, and HSL all describe the same colors, but they're built for different jobs. Here's what each format actually means and when to reach for it."
publishDate: 2026-09-06
relatedTool:
  label: "Convert a color now"
  href: "/color-converter"
---

If you've ever copied a color from a design tool, you've probably seen it written three different ways: `#3B82F6`, `rgb(59, 130, 246)`, and `hsl(217, 91%, 60%)`. These aren't three different colors — they're the exact same blue, described by three different systems. Knowing which one to reach for (and why they exist at all) makes a lot of CSS and design-tool decisions easier.

## HEX: compact and copy-paste friendly

HEX is shorthand for hexadecimal — a base-16 number system that packs a color into a six-character code like `#3B82F6`. The six characters split into three pairs, one each for red, green, and blue, with each pair running from `00` (none of that channel) to `FF` (the maximum, 255 in decimal).

HEX's whole appeal is compactness. It's the format you'll see in design handoffs, brand guidelines, and most CSS you copy from the internet, because it's short enough to read and type without much friction. The tradeoff is that it's not very *human*: nobody looks at `#3B82F6` and immediately pictures the blue. You have to either memorize common codes or paste it somewhere to see it — or, if the color came from a photo, [get the HEX code straight from the image](/hex-code-from-image).

## RGB: the format that matches how screens actually work

RGB (red, green, blue) writes the same information as three plain numbers from 0–255: `rgb(59, 130, 246)`. It's really just HEX's pairs converted to decimal — `3B` in hex is `59` in decimal, and so on.

The reason RGB exists as its own format, rather than everyone just using HEX, is that screens are physically built from red, green, and blue sub-pixels. RGB describes color the way the hardware actually produces it, which makes it the natural format for anything doing math on color — blending two colors, adjusting brightness programmatically, or generating a gradient. It also supports a fourth channel, alpha (`rgba(59, 130, 246, 0.5)`), for transparency, which HEX only recently gained support for (`#3B82F680`) and which is far less commonly used in practice.

## HSL: the format that matches how *people* think about color

HSL (hue, saturation, lightness) is the odd one out, because instead of channels of light, it describes a color the way you'd describe it in conversation: **hue** is the base color on a 0–360° wheel (0 is red, 120 is green, 240 is blue), **saturation** is how vivid versus gray it is (0% is gray, 100% is fully saturated), and **lightness** is how close it is to black or white (0% is black, 100% is white, 50% is the "pure" version of the hue).

This is the format to reach for when you want to *adjust* a color rather than just record it. Need a darker version of your brand blue for a hover state? In HSL, that's just lowering the lightness value — `hsl(217, 91%, 60%)` to `hsl(217, 91%, 45%)` — and the hue and saturation stay untouched, so the color family stays consistent. (This is exactly how [tints and shades](/blog/tints-tones-shades) are built.) Doing the equivalent adjustment in RGB or HEX means recalculating all three channels by hand, which is much less intuitive.

## A quick way to decide

- **Copying or storing a color, or matching a brand guideline exactly** → HEX
- **Doing math on color values, or working with transparency** → RGB / RGBA
- **Manually tweaking a color's brightness or vividness** → HSL
- **Not sure, or need to go between them constantly** → keep a [color converter](/color-converter) open rather than doing the math by hand

In practice, most projects end up using a mix of all three — HEX for the values that don't change, HSL for the ones you're actively tuning, and RGB whenever code needs to manipulate a color directly. There's no format that's objectively "correct"; they're just three lenses on the same underlying color.
