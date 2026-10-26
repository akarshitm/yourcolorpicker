---
title: "HEX vs. RGB vs. HSL: Unterschiede der Farbcodes und wann Sie welchen nutzen"
description: "HEX, RGB und HSL beschreiben dieselben Farben, sind aber für unterschiedliche Aufgaben gedacht. Das bedeutet jedes Format – und wann Sie es einsetzen sollten."
publishDate: 2026-09-06
relatedTool:
  label: "Jetzt eine Farbe umrechnen"
  href: "/de/color-converter"
---

Wenn Sie schon einmal eine Farbe aus einem Design-Tool kopiert haben, haben Sie sie wahrscheinlich in drei Schreibweisen gesehen: `#3B82F6`, `rgb(59, 130, 246)` und `hsl(217, 91%, 60%)`. Das sind nicht drei verschiedene Farben – es ist exakt dasselbe Blau, beschrieben in drei verschiedenen Systemen. Zu wissen, welches man wann nimmt (und warum es sie überhaupt gibt), erleichtert viele Entscheidungen in CSS und in Design-Tools.

## HEX: kompakt und gut zum Kopieren

HEX steht für hexadezimal – ein Zahlensystem zur Basis 16, das eine Farbe in einen sechsstelligen Code wie `#3B82F6` packt. Die sechs Zeichen teilen sich in drei Paare auf, je eines für Rot, Grün und Blau, und jedes Paar reicht von `00` (nichts von diesem Kanal) bis `FF` (das Maximum, dezimal 255).

Der ganze Reiz von HEX liegt in seiner Kompaktheit. Es ist das Format, das Sie in Design-Übergaben, Markenrichtlinien und dem meisten CSS aus dem Internet sehen, weil es kurz genug ist, um es ohne Mühe zu lesen und zu tippen. Der Nachteil: Es ist nicht sehr *menschlich*. Niemand sieht `#3B82F6` und hat sofort das Blau vor Augen. Man muss gängige Codes auswendig kennen oder den Code irgendwo einfügen, um ihn zu sehen – oder, wenn die Farbe aus einem Foto stammt, [den HEX-Code direkt aus dem Bild ermitteln](/de/hex-code-from-image).

## RGB: das Format, das der Funktionsweise von Bildschirmen entspricht

RGB (Rot, Grün, Blau) gibt dieselbe Information als drei einfache Zahlen von 0 bis 255 an: `rgb(59, 130, 246)`. Eigentlich sind das nur die HEX-Paare ins Dezimalsystem umgerechnet – `3B` hexadezimal ist `59` dezimal, und so weiter.

Dass RGB als eigenes Format existiert, statt dass alle nur HEX verwenden, liegt daran, dass Bildschirme physisch aus roten, grünen und blauen Subpixeln bestehen. RGB beschreibt Farbe so, wie die Hardware sie tatsächlich erzeugt. Damit ist es das natürliche Format für alles, was mit Farben rechnet – zwei Farben mischen, Helligkeit per Code anpassen oder einen Farbverlauf erzeugen. Außerdem unterstützt es einen vierten Kanal, Alpha (`rgba(59, 130, 246, 0.5)`), für Transparenz – was HEX erst seit Kurzem kann (`#3B82F680`) und in der Praxis deutlich seltener genutzt wird.

## HSL: das Format, das dem *menschlichen* Farbdenken entspricht

HSL (Farbton, Sättigung, Helligkeit – englisch Hue, Saturation, Lightness) fällt aus der Reihe: Statt Lichtkanälen beschreibt es eine Farbe so, wie Sie es im Gespräch tun würden. Der **Farbton** ist die Grundfarbe auf einem Kreis von 0–360° (0 ist Rot, 120 Grün, 240 Blau), die **Sättigung** gibt an, wie kräftig bzw. grau die Farbe ist (0 % ist grau, 100 % voll gesättigt), und die **Helligkeit**, wie nah sie an Schwarz oder Weiß liegt (0 % ist Schwarz, 100 % Weiß, 50 % die „reine“ Version des Farbtons).

Zu diesem Format greifen Sie, wenn Sie eine Farbe *anpassen* statt nur festhalten wollen. Brauchen Sie eine dunklere Version Ihres Markenblaus für einen Hover-Zustand? In HSL senken Sie einfach die Helligkeit – von `hsl(217, 91%, 60%)` auf `hsl(217, 91%, 45%)` – und Farbton sowie Sättigung bleiben unverändert, sodass die Farbfamilie konsistent bleibt. (Genau so entstehen [Aufhellungen und Abdunklungen](/de/blog/tints-tones-shades).) Dieselbe Anpassung in RGB oder HEX erfordert, alle drei Kanäle von Hand neu zu berechnen – deutlich weniger intuitiv.

## So entscheiden Sie schnell

- **Eine Farbe kopieren oder speichern bzw. Markenrichtlinien exakt treffen** → HEX
- **Mit Farbwerten rechnen oder mit Transparenz arbeiten** → RGB / RGBA
- **Helligkeit oder Intensität einer Farbe von Hand feinjustieren** → HSL
- **Unsicher oder ständig zwischen den Formaten wechselnd** → einen [Farbkonverter](/de/color-converter) offen halten, statt von Hand zu rechnen

In der Praxis nutzen die meisten Projekte eine Mischung aus allen dreien – HEX für feste Werte, HSL für die, an denen Sie gerade feilen, und RGB, wenn Code eine Farbe direkt verändern muss. Kein Format ist objektiv „richtig“; es sind einfach drei Blickwinkel auf dieselbe Farbe.
