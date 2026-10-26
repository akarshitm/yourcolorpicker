---
title: "WCAG-Farbkontrast: Praxisleitfaden für Designer und Entwickler"
description: "Was die WCAG-Anforderungen an das Kontrastverhältnis wirklich bedeuten, warum es sie gibt und wie Sie AA oder AAA ohne Rätselraten erreichen."
publishDate: 2026-09-06
relatedTool:
  label: "Kontrastverhältnis prüfen"
  href: "/de/contrast-checker"
---

„Achten Sie darauf, dass Ihr Text genug Kontrast hat“ ist ein Rat, der sich leicht geben und überraschend leicht falsch umsetzen lässt – denn „genug“ ist kein Gefühl, sondern eine Zahl. Sie ist in den Web Content Accessibility Guidelines (WCAG) definiert und strenger, als die meisten intuitiv annehmen.

## Was das Kontrastverhältnis tatsächlich misst

Das Kontrastverhältnis ist eine einzige Zahl von 1:1 (identische Farben – reinweißer Text auf weißem Hintergrund) bis 21:1 (maximaler Kontrast – reines Schwarz auf reinem Weiß). Berechnet wird es aus der *relativen Leuchtdichte* beider Farben – vornehm ausgedrückt: „wie viel Licht jede Farbe reflektiert“, gewichtet danach, wie das menschliche Auge Helligkeit wahrnimmt (wir sind zum Beispiel empfindlicher für Grün als für Blau, daher gewichtet die Formel die Kanäle unterschiedlich, statt einfach den Mittelwert der RGB-Werte zu bilden).

Sie müssen das nicht selbst ausrechnen – jeder [Kontrastprüfer](/de/contrast-checker) übernimmt die Mathematik –, aber es lohnt sich zu wissen, dass es um *Leuchtdichte* geht und nicht nur darum, wie verschieden zwei Farben auf den ersten Blick wirken. Zwei Farben, die recht unterschiedlich aussehen, können trotzdem durchfallen, wenn sie ähnlich hell sind (eine typische Falle: mittelgrauer Text auf mittelblauem Hintergrund sieht oft okay aus, schneidet aber schlecht ab).

## Die konkreten Schwellenwerte

Die WCAG definieren zwei Stufen, AA und AAA, jeweils mit unterschiedlichen Anforderungen für normalen und großen Text:

| | Normaler Text | Großer Text (ab 18 pt/24 px oder 14 pt/18,66 px fett) |
|---|---|---|
| **AA** (der Standard, den die meisten Websites anstreben) | 4.5:1 | 3:1 |
| **AAA** (die strengere, „erweiterte“ Stufe) | 7:1 | 4.5:1 |

Für großen Text gilt eine niedrigere Schwelle, weil größere Buchstaben sich von Natur aus leichter vom Hintergrund abheben, selbst bei weniger Kontrast zwischen beiden Farben.

AA ist die Stufe, auf die sich die meisten gesetzlichen Barrierefreiheitsanforderungen beziehen (darunter ADA und Section 508 in den USA, die EN 301 549 in der EU sowie BITV 2.0 und das Barrierefreiheitsstärkungsgesetz in Deutschland), und sollte für die meisten Websites als nicht verhandelbares Minimum gelten. AAA ist über ein ganzes Design-System hinweg deutlich schwerer zu erreichen – ein gutes Ziel für zentrale Texte (etwa Fließtext in einem leseintensiven Produkt), aber in der Regel nicht seitenweit vorgeschrieben.

## Warum das über die Konformität hinaus wichtig ist

Zu wenig Kontrast lässt nicht nur ein Audit scheitern – er lässt echte Leser im Stich. Am stärksten betroffen sind Menschen mit Sehschwäche oder [Farbenblindheit](/de/blog/designing-for-color-blindness), aber auch alle, die auf einem minderwertigen oder spiegelnden Bildschirm lesen, alle über 40 (die Kontrastempfindlichkeit nimmt mit dem Alter ab, lange bevor man es merkt) und ehrlich gesagt jeder, der in der prallen Sonne auf sein Handy blinzelt. Kontrast ist eine der seltenen Barrierefreiheitsanforderungen, die das Erlebnis für praktisch alle messbar verbessert – nicht nur für die Gruppe, für die sie geschrieben wurde.

## Typische Kontrastfehler, die niemand bemerkt

- **Platzhaltertext und deaktivierte Zustände** – Designer hellen diese oft für die visuelle Hierarchie auf und rutschen dabei unbemerkt unter 4.5:1, obwohl der umgebende Text problemlos besteht.
- **Text über Bildern oder Verläufen** – eine Farbe, die auf flachem Hintergrund besteht, kann durchfallen, sobald sie über einem unruhigen oder helleren Bildbereich liegt.
- **Markenfarben als Textfarbe** – ein leuchtendes Markenblau oder eine Pastell-Markenfarbe sieht als Akzent toll aus, fällt als Fließtext auf Weiß aber glatt durch.
- **Dark Mode** – der Kontrast muss im Dark Mode separat geprüft werden; eine Kombination, die im Light Mode besteht, tut das nicht automatisch, wenn der Hintergrund fast schwarz wird.

## Ein einfacher Ablauf

1. Wählen Sie Text- und Hintergrundfarbe wie gewohnt – stammen sie aus einem Mockup oder Screenshot, ermittelt die [Pipette](/de/eyedropper-tool) die exakten Werte.
2. Prüfen Sie das Verhältnis vor dem Release, nicht erst nach einer Beschwerde oder einem Audit – behandeln Sie es wie einen kaputten Link.
3. Fällt es durch, passen Sie zuerst die *Helligkeit* an (im Sinne von [HSL](/de/blog/hex-vs-rgb-vs-hsl)) statt Farbton oder Sättigung – so beheben Sie den Kontrast am schnellsten, ohne die wahrgenommene Farbe zu verändern.
4. Prüfen Sie den Dark Mode separat, falls Ihr Produkt einen hat.

Kontrast ist eine der wenigen Barrierefreiheitsregeln mit einer festen Zahl – und damit eine der am leichtesten einzuhaltenden. Es gibt keine Mehrdeutigkeit, sobald Sie das Verhältnis direkt prüfen, statt nach Augenmaß zu urteilen.
