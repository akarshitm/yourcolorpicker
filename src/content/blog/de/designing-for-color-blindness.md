---
title: "Design für Farbenblindheit: Arten, Zahlen und praktische Lösungen"
description: "Farbenblindheit betrifft einen beachtlichen Teil Ihres Publikums. So sehen die verschiedenen Formen wirklich aus – und so gestalten Sie barrierefrei."
publishDate: 2026-09-06
relatedTool:
  label: "Farbenblindheit an Ihrem Bild simulieren"
  href: "/de/color-blindness-simulator"
---

Farbsehschwächen – umgangssprachlich Farbenblindheit genannt – betreffen etwa **1 von 12 Männern (rund 8 %)** und **1 von 200 Frauen (rund 0,5 %)** nordeuropäischer Abstammung, in anderen Bevölkerungsgruppen mit etwas abweichenden Raten. Auf jeder halbwegs großen Website oder App ist das kein Randfall, sondern ein beachtlicher Teil Ihres tatsächlichen Publikums – von dem die meisten es Ihnen nie gesagt haben und sich vermutlich gar nicht als Menschen mit „Behinderung“ sehen. Sie haben sich einfach an ein Leben voller mehrdeutiger rot-grüner Ampeln und Statusanzeigen gewöhnt.

## Die wichtigsten Formen – und wie sie tatsächlich aussehen

„Farbenblind“ wird oft verwendet, als wäre es eine einzige Sache, umfasst aber mehrere unterschiedliche Formen:

- **Deuteranopie / Deuteranomalie** (Grünschwäche) – mit Abstand die häufigste Form. Rot-, Grün- und Brauntöne sind schwer zu unterscheiden, und Farben in diesem Bereich wirken oft gedämpfter oder gelblicher als beabsichtigt.
- **Protanopie / Protanomalie** (Rotschwäche) – ähnliche Verwechslungen wie bei der Deuteranopie, aber mit anders verschobenen Rottönen; Rot kann dunkler wirken, als es ist, manchmal fast schwarz.
- **Tritanopie / Tritanomalie** (Blauschwäche) – deutlich seltener und betrifft die Unterscheidung von Blau und Gelb. Blau und Grün können verwechselt werden, Gelb kann blass oder rosa wirken.
- **Achromatopsie** (vollständige Farbenblindheit) – extrem selten; gesehen wird nur in Graustufen.

Entscheidend: „Rot-Grün-Schwäche“ bedeutet nicht, dass jemand die Welt in nur zwei Farben sieht – sondern dass bestimmte Farbtöne in diesem Bereich schwer voneinander zu unterscheiden sind, während der Rest des Spektrums weitgehend unbeeinträchtigt bleibt. Deshalb wird Farbenblindheit beim Testen leicht übersehen: Ein Design kann für jemanden mit Deuteranopie für sich genommen völlig in Ordnung aussehen und trotzdem scheitern, sobald zwei leicht verwechselbare Farben nebeneinander als *einziges* Signal für etwas Wichtiges dienen.

## Wo das echte Oberflächen kaputtmacht

- **Statusanzeigen** – Rot/Grün für Fehler/Erfolg ist der häufigste Fehler überhaupt. Jemand mit Deuteranopie sieht womöglich beide als ähnlich trübe Farbe und weiß nicht, welche er vor sich hat.
- **Diagramme** – ein Linien- oder Balkendiagramm, das fünf Kategorien nur über Farbe unterscheidet, wird unlesbar, wenn zwei dieser Farben in einen verwechselbaren Bereich fallen.
- **Formularvalidierung** – ein roter Rahmen um ein ungültiges Feld ist *als Farbsignal* für einen beachtlichen Teil der Nutzer unsichtbar, auch wenn sich das Feld auf andere Weise abhebt.
- **Karten und Heatmaps** – Verläufe von Rot nach Grün (üblich für Skalen von „schlecht bis gut“) sind fast die schlechteste Wahl für genau die Gruppe, die sie am dringendsten korrekt lesen muss.

## Lösungen, die wirklich funktionieren

Die gute Nachricht: Nichts davon erfordert, Ihre Palette komplett neu zu gestalten – nur, *sich nicht allein auf Farbe zu verlassen*:

1. **Kombinieren Sie Farbe mit einem zweiten Signal.** Ein Fehlerzustand bekommt einen roten Rahmen *und* ein Icon *und* Text, nicht nur Rot. Ein Erfolgszustand bekommt Grün *und* ein Häkchen. Sobald es ein nicht farbliches Signal gibt, wird die Farbe zur Zugabe statt zum einzigen Bedeutungsträger.
2. **Vermeiden Sie Rot-Grün als einzigen Kontrast zweier Zustände.** Wenn Sie ein klares Binär brauchen (an/aus, gut/schlecht), sind Blau und Orange (ein klassisches [Komplementärpaar](/de/blog/color-wheel-explained)) bei allen gängigen Formen der Farbenblindheit unterscheidbar – Rot und Grün oft nicht.
3. **Nutzen Sie in Diagrammen Muster oder Beschriftungen, nicht nur Farbe.** Direkte Beschriftungen an Segmenten oder unterschiedliche Linienstile (durchgezogen/gestrichelt/gepunktet) zusätzlich zur Farbe halten Diagramme mit mehreren Reihen unabhängig vom Farbsehen lesbar.
4. **Prüfen Sie den Kontrast zwischen benachbarten Farben, nicht nur zum Hintergrund.** Zwei Farben können jeweils einen guten [Kontrast zu weißem Hintergrund](/de/blog/wcag-contrast-guide) haben und *untereinander* trotzdem kaum unterscheidbar sein – genau der Fehler, der bei nebeneinanderliegenden Statusfarben und Diagrammreihen zählt.
5. **Simulieren Sie es tatsächlich vor dem Release.** Es ist sehr schwer, rein gedanklich vorherzusagen, wie Ihre Palette für jemanden mit Deuteranopie aussieht – Ihre echte Oberfläche oder Ihr Bild durch einen [Farbenblindheits-Simulator](/de/color-blindness-simulator) zu schicken, beseitigt das Rätselraten und deckt oft Probleme auf, die bei typischem Farbsehen völlig unauffällig sind.

Design für Farbenblindheit ist kein separates Design-System – es ist dasselbe Design-System mit einer zusätzlichen Gewohnheit: Wann immer Farbe eine Entscheidung kommuniziert, fragen Sie sich, was passiert, wenn diese Farbe nicht unterscheidbar ist, und sorgen Sie dafür, dass die Antwort nicht „der Nutzer versteht nicht, was los ist“ lautet.
