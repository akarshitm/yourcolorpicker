---
title: "Farbforschung 2026: Was die Wissenschaft dieses Jahr herausgefunden hat"
description: "Von einer endlich vollendeten, 100 Jahre alten Theorie Schrödingers bis zur Frage, warum Wide-Gamut-Bildschirme für jeden anders aussehen: die Erkenntnisse der Farbwissenschaft 2026, die für Designer zählen."
publishDate: 2026-10-24
relatedTool:
  label: "Farbenblindheits-Simulator ausprobieren"
  href: "/de/color-blindness-simulator"
---

Farbe wirkt wie ein gelöstes Problem. Wir haben Hex-Codes, Farbkreise und Kontrastformeln, und meistens funktionieren sie. Doch 2026 war ein ereignisreiches Jahr für die Farbwissenschaft, und mehrere Erkenntnisse verändern, wie wir über etwas denken, mit dem Designer täglich umgehen: wie Menschen Farbe tatsächlich sehen.

Hier sind die Entwicklungen, die Sie kennen sollten – und was jede davon bedeutet, wenn Sie mit Farbe arbeiten.

## 1. Ihr „kalibrierter“ Bildschirm sieht nicht für jeden gleich aus

Im Oktober 2026 veröffentlichten die Forscher Andy Rider und Andrew Stockman vom Institute of Ophthalmology des University College London in *Optics Express* eine Studie, die ein Ärgernis erklärt, das viele in Film und Design kennen: Zwei Displays sind aufeinander kalibriert und sehen trotzdem unterschiedlich aus – und verschiedene Betrachter sind sich uneinig, welches „richtig“ ist.

Das Team entwickelte ein Rechenmodell des menschlichen Farbsehens, das **individuelle Unterschiede** zwischen Betrachtern berücksichtigt. Manche dieser Unterschiede sind leichte Rot-Grün-Schwächen. Andere entstehen durch das Alter, denn die Augenlinse filtert mit zunehmendem Alter mehr blaues Licht heraus. Anschließend ließen sie 16 Displays durch das Modell laufen, von Consumer-Fernsehern bis zu professionellen Film-Monitoren und Kinoprojektoren.

Das Ergebnis: **Moderne Wide-Gamut-Displays unterscheiden sich von Person zu Person stärker als ältere.** Wide-Gamut-Bildschirme nutzen sehr schmalbandige rote, grüne und blaue Lichtquellen. Diese können lebendigere Farben darstellen, verstärken aber auch kleine Unterschiede zwischen den Augen der Betrachter. Die blaue Grundfarbe sorgt vor allem für Uneinigkeit zwischen älteren und jüngeren Betrachtern, die rote und grüne vor allem bei Menschen mit verschiedenen Formen der Rot-Grün-Schwäche.

Ein Teil des Problems: Die meisten Kalibrierungswerkzeuge stützen sich auf Farbabgleich-Standards von vor etwa einem Jahrhundert, die typisches Sehen nur unzureichend abbilden. Wie Rider es formulierte, kann dies „moderne Displays falsch aussehen lassen, selbst wenn sie auf gleiches Aussehen kalibriert wurden“.

**Was das für Sie bedeutet:** Eine Farbe, die auf Ihrem Monitor perfekt aussieht, ist die Sicht einer Person auf einem Gerät. Die Forscher weisen darauf hin, dass ihre Vorhersagen noch mit echten Betrachtern getestet werden müssen. Dennoch sind die sichersten Gewohnheiten die, die Designer bereits kennen: Prüfen Sie wichtige Farben auf mehr als einem Gerät, und lassen Sie Bedeutung nicht allein von feinen Farbtonunterschieden abhängen.

## 2. Schrödingers Farbtheorie ist endlich vollständig

Vor rund einem Jahrhundert schlug der Physiker Erwin Schrödinger – bekannter für seine Katze – vor, dass sich die Eigenschaften, die wir an einer Farbe wahrnehmen, rein mathematisch beschreiben lassen. Diese Eigenschaften sind **Farbton**, **Sättigung** und **Helligkeit**. Sein Modell hatte jedoch eine Lücke: Er definierte nie formal die **neutrale Achse**, die Graulinie von Schwarz nach Weiß. Ohne sie passten die Definitionen von Farbton und Sättigung nicht zusammen.

Ein Team des Los Alamos National Laboratory unter der Leitung von Roxana Bujack hat diese Lücke nun geschlossen. Die Arbeit wurde auf der Eurographics Conference on Visualization vorgestellt und in *Computer Graphics Forum* veröffentlicht. Die Forschenden definierten die neutrale Achse geometrisch und berücksichtigten zudem zwei bekannte Eigenheiten des menschlichen Sehens:

- **Der Bezold-Brücke-Effekt:** Der wahrgenommene Farbton einer Farbe verschiebt sich, wenn sie heller oder dunkler wird.
- **Abnehmender Grenzertrag:** Große Farbunterschiede werden als kleiner wahrgenommen als die Summe der kleinen Schritte, aus denen sie bestehen.

Ihr Fazit: Farbton, Sättigung und Helligkeit „entstehen nicht aus zusätzlichen äußeren Konstrukten wie kulturellen oder erlernten Erfahrungen“. Sie ergeben sich aus der Geometrie, mit der wir Farbabstände wahrnehmen.

**Was das für Sie bedeutet:** Das ist die Theorie dahinter, warum es wahrnehmungsbasierte Farbräume gibt. Wenn Ihnen aufgefallen ist, dass die HSL-Helligkeit nicht dazu passt, wie hell Farben tatsächlich wirken, sind Sie auf genau das Problem gestoßen, das diese Forschung angeht. (Unser Leitfaden zu [HEX vs. RGB vs. HSL](/de/blog/hex-vs-rgb-vs-hsl) behandelt die praktische Seite.) Bessere mathematische Modelle der Wahrnehmung führen mit der Zeit zu besseren Farbräumen, Verläufen und Paletten für die Datenvisualisierung.

## 3. KI-Bildmodelle sehen Farbe nicht wie wir

Mit der Verbreitung von KI-Bildwerkzeugen liegt die Frage nahe, ob sie Farbe so „sehen“ wie Menschen. Ein Preprint vom Juli 2026 auf arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, hat das direkt untersucht.

Die Forschenden testeten mehr als 50 vortrainierte Bildmodelle, darunter Convolutional Networks und Vision Transformer. Sie maßen, wie kleine Farbunterschiede jedes Modell noch erkennen konnte, und verglichen dies mit den menschlichen Unterscheidungsschwellen aus jahrzehntelangen Laborexperimenten.

Die Antwort war ein klares **Nein**. Die Übereinstimmung mit der menschlichen Farbempfindlichkeit war in allen Modellfamilien schwach. Ohne Labels trainierte (selbstüberwachte) Modelle schnitten etwas besser ab als klassisch überwachte. Modelle, die auf Bild-Text-Paaren trainiert wurden, landeten sowohl an der Spitze als auch am Ende der Rangliste. Die Autoren folgern, dass menschenähnliche Farbempfindlichkeit mit heutigen Trainingsmethoden nicht von selbst entsteht.

**Was das für Sie bedeutet:** Seien Sie vorsichtig, wenn Sie sich bei farbkritischen Urteilen auf KI-Werkzeuge verlassen – etwa ob zwei Farbtöne unterscheidbar sind oder ob eine Palette für alle Betrachter funktioniert. Für Fragen mit messbarer Antwort nutzen Sie eine Messung. Ein [Kontrastprüfer](/de/contrast-checker) liefert ein exaktes Verhältnis, ein Farbwähler einen exakten Wert. Beachten Sie, dass es sich um einen Preprint handelt, der noch kein Peer-Review durchlaufen hat.

## 4. Kontrast ist direkt in CSS angekommen

Auf der praktischen Seite kam eine der größten Neuerungen des Jahres für Webdesigner aus den Browsern statt aus den Laboren. Im April 2026 erreichte die CSS-Funktion `contrast-color()` den Status **Baseline** – sie funktioniert nun in allen großen Browser-Engines.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

Sie übergeben eine Hintergrundfarbe und erhalten Schwarz oder Weiß zurück, je nachdem, was stärker kontrastiert. Mathematisch erreicht die bessere der beiden Optionen immer mindestens etwa 4.5:1. Das Ergebnis erfüllt also WCAG AA für normalen Text, aber nicht unbedingt die strengere AAA-Stufe von 7:1. Die übrigen Farben Ihrer Marke berücksichtigt die Funktion nicht – sie ist ein Sicherheitsnetz, keine Designentscheidung.

Das lange diskutierte Kontrastverfahren **APCA** bleibt derweil experimentell. WCAG 3 ist weiterhin ein Entwurf; eine endgültige W3C-Empfehlung wird nicht vor 2028 erwartet. Für die Konformität gelten heute weiterhin die WCAG-2-Verhältnisse. Unser [WCAG-Kontrastleitfaden](/de/blog/wcag-contrast-guide) erklärt sie.

## Das große Ganze

Die Forschung von 2026 weist in eine Richtung: **Es gibt nicht die eine „richtige“ Art, wie eine Farbe aussieht.** Farben variieren mit den Augen, dem Alter und dem Bildschirm des Betrachters, und die Mathematik der Wahrnehmung ist subtiler als die RGB-Zahlen, die wir in ein Stylesheet tippen.

Das ist kein Grund, Präzision aufzugeben. Es ist ein Grund, sie dort einzusetzen, wo es zählt. Prüfen Sie exakte Werte, testen Sie Kontrast mit echten Zahlen, und sehen Sie sich Ihre Palette so an, wie Menschen mit Farbsehschwäche sie sehen. Etwa 1 von 12 Männern und 1 von 200 Frauen haben eine Form von Farbsehschwäche, und die UCL-Studie legt nahe, dass moderne Bildschirme diese Unterschiede noch vergrößern könnten. Mehr zur Gestaltung für dieses Publikum finden Sie in unserem Leitfaden [Design für Farbenblindheit](/de/blog/designing-for-color-blindness).

### Quellen

- Rider, Frith & Stockman, *Optics Express* 34, 38458–38481 (2026), über die [Optica-Pressemitteilung](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Los Alamos National Laboratory, über [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, Juli 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
