---
title: "Aufhellen, Abtönen, Abdunkeln: So entsteht eine stimmige Farbskala"
description: "Tints, Tones und Shades sind die drei Wege, eine Farbe zu einer vollständigen, nutzbaren Farbskala zu erweitern. Hier ist der Unterschied – und warum Design-Systeme so stark darauf setzen."
publishDate: 2026-09-06
relatedTool:
  label: "Farbabstufungen generieren"
  href: "/de/shades-and-tints-generator"
---

Öffnen Sie ein beliebiges ernsthaftes Design-System – die Farbpalette von Tailwind, Material Design, die Markenrichtlinien Ihres eigenen Produkts – und Sie werden feststellen, dass eine Markenfarbe selten nur einmal vorkommt. Stattdessen erscheint sie als *Skala*: etwa zehn verwandte Farben von sehr hell bis sehr dunkel, alle erkennbar aus derselben Familie. Diese Skala entsteht aus drei einfachen Operationen. Wer sie kennt, kann eine Markenfarbe viel leichter zu einer vollständigen, funktionierenden Palette erweitern, statt zufällige Hex-Codes zu raten.

## Aufhellungen (Tints): Mischen mit Weiß

Eine Aufhellung entsteht, wenn man eine Farbe mit Weiß mischt – der Farbton bleibt gleich, wird aber mit mehr Weiß zunehmend heller und weniger gesättigt. In HSL bedeutet das einfach, den Wert für **Helligkeit** zu erhöhen und den Farbton ungefähr beizubehalten. Eine Aufhellung von Marineblau nähert sich schließlich einem sehr blassen, fast weißen Blau.

Aufhellungen nutzen Sie, wenn Sie eine hellere Version einer Farbe brauchen, die optisch zur selben Familie gehört – ein dezenter Hintergrund hinter einer Karte, ein Hover-Zustand, der sich kaum von der Grundfarbe unterscheidet, oder der helle Hintergrund eines Info-Banners, der zu einem dunkleren Icon oder Rahmen in der Markenfarbe passt.

## Abdunklungen (Shades): Mischen mit Schwarz

Eine Abdunklung ist das Spiegelbild einer Aufhellung – die Farbe wird mit Schwarz statt mit Weiß gemischt. Dadurch sinkt die **Helligkeit** in Richtung null, während der Farbton (wiederum) weitgehend konstant bleibt. Eine Abdunklung desselben Marineblaus wird immer dunkler, bis sie fast schwarz ist.

Abdunklungen nutzen Sie überall dort, wo Sie eine dunklere, kontrastreichere Version einer Farbe brauchen: Hover- und Active-Zustände von Buttons (ein gängiges Muster ist eine etwas dunklere Stufe bei `:hover` und eine noch dunklere bei `:active`), Textfarben auf Basis der Markenfarbe, die auf hellem Hintergrund die [Kontrastanforderungen](/de/blog/wcag-contrast-guide) erfüllen müssen, oder Oberflächenfarben im Dark Mode, die mit der Light-Mode-Palette verwandt wirken sollen.

## Abtönungen (Tones): Mischen mit Grau

Die Abtönung ist die seltener besprochene dritte Option – die Farbe wird mit Grau gemischt, was die **Sättigung** senkt, während die Helligkeit ungefähr gleich bleibt. Während Aufhellungen und Abdunklungen eine Farbe in Richtung Weiß oder Schwarz verschieben, schiebt eine Abtönung sie in Richtung *neutral* und dämpft ihre Intensität, ohne sie unbedingt heller oder dunkler zu machen.

Abtönungen sind genau dann nützlich, wenn eine voll gesättigte Markenfarbe zu laut wirkt – eine gedämpfte Version eines leuchtenden Markenrots für eine große Hintergrundfläche oder eine abgeschwächte Akzentfarbe, die sich ruhig hinter wichtigeren Inhalten halten soll, statt mit ihnen zu konkurrieren.

## Warum das wichtiger ist, als Farben nach Augenmaß zu wählen

Die Alternative zu einer systematisch erzeugten Skala ist, jede Stufe einzeln nach Augenmaß zu wählen. Das führt meist zu zwei Problemen: Die Abstände zwischen den Farben werden ungleichmäßig (manche Sprünge wirken drastisch, andere fallen kaum auf), und die Farben driften beim Aufhellen oder Abdunkeln im Farbton ab, sodass Ihre „Familie“ von Blautönen am dunklen Ende leicht ins Violette und am hellen Ende leicht ins Grünliche kippt. Wer in [HSL](/de/blog/hex-vs-rgb-vs-hsl) arbeitet und jeweils nur einen Kanal verändert – Helligkeit für Aufhellungen und Abdunklungen, Sättigung für Abtönungen –, vermeidet beides, weil sich der Farbton schlicht nicht ändert, solange man ihn nicht bewusst ändert.

## Eine praxistaugliche Start-Skala

Eine sinnvolle Allzweck-Skala für eine einzelne Markenfarbe, ungefähr im Stil einer Tailwind-Skala, umfasst 8–10 Stufen: 2–3 Aufhellungen (helle Hintergründe, Hover-Zustände), die Grundfarbe selbst und 4–5 Abdunklungen (Text, Rahmen, Dark-Mode-Flächen, Active-Zustände). Kaum ein Produkt braucht mehr – das Ziel ist nicht maximale Feinheit, sondern für jeden UI-Zustand eine passende verwandte Farbe parat zu haben, ohne jedes Mal eine neue zu erfinden.

Das von Hand zu erzeugen, einen Hex-Code nach dem anderen, ist genau die Art kleiner, repetitiver Aufgabe, die man besser automatisiert: Wählen Sie eine Grundfarbe, erzeugen Sie die komplette Skala in einem Durchgang mit einem [Farbabstufungs-Generator](/de/shades-and-tints-generator), und Sie haben eine funktionierende Palette statt eines Haufens leicht unpassender Blautöne.
