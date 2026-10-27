import type { Dictionary } from "./en";

export const de: Dictionary = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Bild-Farbwähler",
		tools: "Werkzeuge",
		whyUs: "Warum wir",
		faq: "FAQ",
		blog: "Blog",
		about: "Über uns",
		contact: "Kontakt",
		howToUse: "Anleitung",
		openMenu: "Menü öffnen",
		uploadImage: "Bild hochladen",
		language: "Sprache",
		games: "Spiele",
	},
	footer: {
		privacyHeading: "Datenschutz",
		privacyBlurb:
			"Your Color Picker läuft für das eigentliche Farbwerkzeug vollständig clientseitig. Jeder Pixel, den du untersuchst, jede extrahierte Palette und jede gespeicherte Farbe wird direkt in deinem Browser mit der Canvas-API und dem lokalen Speicher berechnet und gespeichert — dein Bild wird niemals hochgeladen, übertragen oder von einem Server gesehen, weil es in diesem Ablauf gar keinen gibt. Wir verwenden Google Analytics, um den gesamten Website-Traffic zu verstehen, aber Bild- oder Farbdaten werden nie verfolgt oder geteilt, und das Löschen deiner Browserdaten entfernt alles lokal Gespeicherte.",
		readFullPolicy: "Lies die vollständige {{link}}.",
		privacyPolicyLabel: "Datenschutzerklärung",
		aboutUs: "Über uns",
		tools: "Alle Werkzeuge",
		faq: "FAQ",
		contactUs: "Kontakt",
		privacyPolicy: "Datenschutzerklärung",
		termsAndConditions: "Allgemeine Geschäftsbedingungen",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Color Picker online — HEX & RGB aus Farbspektrum oder Bild",
		metaDescription:
			"Kostenloser Online-Color-Picker: über das Farbspektrum ziehen oder jede Farbe aus einem Bild wählen und den exakten HEX-, RGB- und HSL-Code kopieren. Ohne Anmeldung, nichts wird hochgeladen.",
		eyebrow: "Kostenloser Color Picker · Keine Anmeldung · Nichts wird je hochgeladen",
		heading: "Kostenloser Online-Color-Picker — Farbe aus dem Spektrum oder jedem Bild wählen",
		subhead:
			"Ein Farbfinder aus einem Bild, der jeden HEX-, RGB- und HSL-Code pixelgenau ermittelt — plus ein integrierter Komplementärfarben-Finder und ein Zufallsfarben-Generator für den Fall, dass du einfach nur einen Ausgangspunkt brauchst.",
		ctaPrimary: "Bild hochladen",
		ctaSecondary: "Was ihn anders macht",
	},
	features: {
		heading: "Ein Color Picker für Präzision, nicht nur zum Extrahieren",
		items: [
			{
				title: "Ein Color Picker aus einem Bild, Pixel für Pixel",
				body: "Bewege den Mauszeiger über das Bild und eine vergrößerte Lupe zeigt jeden einzelnen Pixel um deinen Cursor, wobei der genaue Zielpixel markiert ist — so wählt dieser Bild-Farbwähler genau den gemeinten Pixel aus, nicht einen Durchschnitt seiner Nachbarn.",
			},
			{
				title: "Ein Hex-Farbfinder und RGB-Farbfinder in einem",
				body: "Jeder Pixel dient gleichzeitig als Hexadezimal-Farbfinder, RGB-Farbfinder und HSL-Anzeige — mit dem nächstliegenden Standardfarbnamen, der mit einem Klick ermittelt wird.",
			},
			{
				title: "Ein integrierter Komplementärfarben-Finder",
				body: "Komplementäre, analoge, triadische und monochromatische Paletten aktualisieren sich live je nach der Farbe, auf die du gerade zeigst — ein Komplementärfarben-Finder ohne Farbtheorie-Kenntnisse.",
			},
			{
				title: "Ein Zufallsfarben-Generator, wann immer du ihn brauchst",
				body: "Kein Bild zur Hand? Klicke auf Zufallsfarbe, um einen neuen HEX-, RGB- und HSL-Code als Ausgangspunkt zu erhalten — dann speichern oder daraus eine passende Palette erzeugen.",
			},
			{
				title: "Integrierter Kontrastprüfer",
				body: "Vergleiche zwei beliebige Farben aus deinem Bild mit den WCAG-AA/AAA-Schwellenwerten für normalen und großen Text — ohne separates Werkzeug.",
			},
			{
				title: "Exportieren statt nur kopieren",
				body: "Exportiere deine Palette als CSS-Variablen, Tailwind-Konfigurationsschnipsel, JSON oder herunterladbaren PNG-Farbstreifen — oder speichere Farben lokal, ganz ohne Konto.",
			},
		],
	},
	cta: {
		heading: "Bereit, deine Farben zu finden?",
	},
	cookieConsent: {
		message: "Wir verwenden Cookies (über Google Analytics), um zu verstehen, wie Besucher diese Website nutzen. Details findest du in unserer {{link}}.",
		linkLabel: "Datenschutzerklärung",
		accept: "Akzeptieren",
		decline: "Ablehnen",
	},
	trust: {
		points: [
			"100 % clientseitig — dein Bild verlässt nie deinen Browser",
			"Kein Konto, keine Anmeldung, kein Wasserzeichen",
			"Funktioniert offline, sobald die Seite geladen ist",
		],
	},
	help: {
		title: "So verwendest du Your Color Picker",
		close: "Schließen",
		done: "Verstanden",
		steps: [
			{
				title: "1. Bild hochladen",
				body: "Klicke auf den Upload-Bereich, ziehe eine Datei hinein, oder füge ein Bild direkt aus deiner Zwischenablage ein.",
			},
			{
				title: "2. Beliebigen Pixel untersuchen",
				body: "Bewege den Mauszeiger über das Bild — eine Lupe zeigt jeden Pixel um deinen Cursor, vergrößert und mit markiertem Zielpixel; RGB, HEX und HSL werden rechts live aktualisiert. Du kannst das Bild auch fokussieren und die Pfeiltasten verwenden.",
			},
			{
				title: "3. Klicken für Optionen",
				body: "Klicke auf einen Pixel — oder drücke Enter, während er fokussiert ist —, um seine Optionen zu öffnen: speichern, im Vollbild ansehen (praktisch, um dein Handy an ein echtes Objekt zu halten und zu vergleichen), alle Werte auf einmal kopieren, den nächstliegenden Farbnamen anzeigen oder prüfen, ob schwarzer oder weißer Text darauf besser lesbar ist.",
			},
			{
				title: "4. Vorschläge, Palette und Qualität ansehen",
				body: "„Passt gut zu“ aktualisiert sich live mit komplementären, analogen, triadischen und monochromatischen Farbmustern für die aktuelle Farbe. „Dominante Farben“ extrahiert die Hauptfarben aus dem gesamten Bild. Der Qualitätsbereich unter dem Bild zeigt an, ob es Niedrig, Mittel, Hoch oder HD ist — so weißt du, wie sehr du dem, was du auswählst, vertrauen kannst.",
			},
			{
				title: "5. Speichern, exportieren oder teilen",
				body: "Gespeicherte Farben erscheinen in einer einfachen Lesezeichenleiste — klicke auf eine, um sie zurück in die Live-Anzeige zu holen. Paletten lassen sich als CSS-Variablen, Tailwind-Konfiguration, JSON oder PNG-Streifen exportieren und können lokal gespeichert oder per Link geteilt werden.",
			},
		],
	},
	tool: {
		eyebrow: "Online-Color-Picker",
		heading: "Farbe aus dem Spektrum oder einem Bild wählen",
		intro:
			"Ziehe über das Farbspektrum, tippe einen HEX-Code ein oder bewege den Mauszeiger über das Beispielfoto unten — und lade dann dein eigenes Bild hoch, um Farben daraus zu wählen. Jede Farbe liefert HEX-, RGB- und HSL-Codes, und nichts wird irgendwohin hochgeladen: Bilder werden vollständig in deinem Browser gelesen und analysiert.",
		uploadButton: "Bild hochladen",
		pickFromScreen: "Vom Bildschirm auswählen",
		captureScreenshot: "Bildschirm erfassen",
		miniPicker: "Schwebendes Auswahlfenster",
		dragHint: "oder Datei per Drag & Drop auf das Feld oben ziehen, oder mit Strg/Cmd+V einfügen",
		canvasAriaLabel: "Bild-Leinwand — bewege den Mauszeiger, um die Farbe eines Pixels zu untersuchen, klicke oder drücke Enter, um Speichern-, Vollbild- und Kopieroptionen zu öffnen",
		qualityHeading: "Bildqualität",
		qualityLow: "Niedrig",
		qualityMedium: "Mittel",
		qualityHigh: "Hoch",
		qualityHD: "HD",
		contrastHeading: "Kontrastprüfer",
		colorA: "Farbe A",
		colorB: "Farbe B",
		contrastPlaceholder: "Wähle zwei Farben aus dem Bild (über dessen Optionsmenü) oder füge Hex-Codes zum Vergleichen ein.",
		pickerHeading: "Color Picker",
		spectrumAriaLabel: "Sättigung und Helligkeit — ziehen oder Pfeiltasten verwenden",
		hueAriaLabel: "Farbton",
		hexInputAriaLabel: "HEX-Farbcode eingeben",
		randomColor: "Zufallsfarbe",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Kopieren",
		saveColor: "Farbe speichern",
		goesWellWith: "Passt gut zu",
		goesWellWithSub: "Paletten, live erzeugt aus der Farbe, auf die du gerade zeigst — klicke auf ein Muster, um es zu kopieren.",
		complementary: "Komplementär",
		analogous: "Analog",
		triadic: "Triadisch",
		monochromatic: "Monochromatisch",
		dominantColors: "Dominante Farben",
		colorsUnit: "Farben",
		paletteCountAriaLabel: "Anzahl der Palettenfarben",
		savedColors: "Gespeicherte Farben",
		savedColorsSub: "Klicke auf das Bild oder fokussiere es und drücke Enter, um Farboptionen zu sehen — einschließlich einer hier zu speichern.",
		exportHeading: "Exportieren",
		exportCss: "CSS-Variablen",
		exportTailwind: "Tailwind-Konfiguration",
		exportJson: "JSON",
		exportPng: "PNG-Streifen herunterladen",
		historyHeading: "Verlauf",
		paletteNamePlaceholder: "Palettenname",
		save: "Speichern",
		copyLink: "Link kopieren",
	},
	faq: {
		pageEyebrow: "FAQ",
		pageHeading: "Häufig gestellte Fragen",
		pageIntro:
			"Alles, was man uns über das Auswählen von Farben aus einem Bild, das Ablesen von HEX- und RGB-Codes und das Erstellen einer Farbpalette fragt — plus ein paar Farbfragen, die dabei so aufkommen.",
		metaDescription:
			"Antworten zum Auswählen von Farben aus einem Bild, Ablesen von HEX- und RGB-Codes und Erstellen einer Farbpalette — plus weitere häufige Fragen.",
		sectionHeading: "Color Picker und Farbfinder — häufig gefragt",
		viewAll: "Alle FAQs ansehen",
		items: [
			{
				q: "Wie unterscheidet sich das vom Color Picker von Google?",
				a: "Mit Googles integriertem Color Picker kannst du aus einer Palette wählen oder einen HEX-Code eingeben, aber er kann keine Farben aus einem Foto auslesen. Your Color Picker ist ein Color Picker aus einem Bild — lade ein beliebiges Foto hoch oder ziehe es hinein und lies den genauen HEX-, RGB- und HSL-Wert jedes Pixels darin ab.",
			},
			{
				q: "Wie finde ich den HEX-Code einer Farbe in einem Bild?",
				a: "Lade das Bild hoch und bewege dann den Mauszeiger — oder auf dem Handy den Finger — über einen beliebigen Pixel. Der Hex-Farbfinder aktualisiert sich live, während du dich bewegst, und ein Klick auf diesen Pixel öffnet Optionen, um HEX, RGB oder HSL zu kopieren, zu speichern oder im Vollbild anzusehen.",
			},
			{
				q: "Was ist ein Komplementärfarben-Finder?",
				a: "Ein Komplementärfarben-Finder zeigt die Farbe, die im Farbkreis genau gegenüber deiner gewählten liegt — die Kombination, zu der Designer als Erstes greifen. Unserer aktualisiert sich live zusammen mit analogen, triadischen und monochromatischen Vorschlägen für die gerade betrachtete Farbe.",
			},
			{
				q: "Kann ich eine Zufallsfarbe bekommen?",
				a: "Ja — der in das Werkzeug integrierte Zufallsfarben-Generator erzeugt jederzeit eine neue HEX-, RGB- und HSL-Farbe als Ausgangspunkt, samt eigener passender Palettenvorschläge.",
			},
			{
				q: "Ist dieser Color Picker kostenlos und privat?",
				a: "Ja. Er ist kostenlos, ohne Anmeldung, und läuft zu 100 % clientseitig — dein Bild wird vollständig in deinem Browser gelesen und analysiert und niemals auf einen Server hochgeladen.",
			},
			{
				q: "Was ist ein Color-Picker-Tool?",
				a: "Ein Color-Picker-Tool lässt dich eine Farbe auswählen oder identifizieren und ihren digitalen Wert erhalten — meist als HEX-Code, RGB oder HSL —, um ihn in deiner Designarbeit weiterzuverwenden. Your Color Picker ist ein Color Picker aus einem Bild: Lade ein beliebiges Foto hoch und klicke auf einen Pixel, um sofort seine genauen Farbwerte abzulesen.",
			},
			{
				q: "Wie benutze ich den Color-Picker-Shortcut?",
				a: "Integrierte Betriebssystem-Shortcuts wie Win + Umschalt + C unter Windows (PowerToys Color Picker) oder der Digitale Farbmesser von macOS lassen dich jeden Pixel auf deinem Bildschirm auslesen. Wenn du nichts installieren möchtest, lade dein Bild einfach direkt in Your Color Picker und bewege den Mauszeiger im Browser darüber — kein Shortcut oder Software nötig.",
			},
			{
				q: "Wie benutze ich einen Farbfinder?",
				a: "Ziehe ein Bild in das Werkzeug oder lade es hoch, und bewege dann deinen Cursor (oder auf dem Handy den Finger) über einen beliebigen Bereich. Der Farbfinder verfolgt deine Position live und zeigt HEX, RGB und HSL des genauen Pixels — klicke, um den Code zu kopieren oder die Farbe zu speichern.",
			},
			{
				q: "Wie ändere ich die Farbe des Finders auf dem Mac?",
				a: "Meinst du die macOS-App Finder, gehe zu Systemeinstellungen → Erscheinungsbild und ändere die Akzentfarbe, die die Seitenleiste, Fenster und Hervorhebungen des Finders einfärbt — eine separate, nur für den Finder geltende Farbeinstellung gibt es nicht. Möchtest du stattdessen eine Farbe identifizieren, die du auf einem Foto siehst, ist genau dafür Your Color Picker gedacht — lade das Bild hoch und klicke auf einen beliebigen Pixel, um seinen genauen Code zu erhalten.",
			},
			{
				q: "Wie benutze ich einen True-Color-Finder?",
				a: "„True Color“ bezeichnet eine volle 24-Bit-Farbtiefe — über 16 Millionen Farbtöne, die dem entsprechen, was dein Bildschirm tatsächlich anzeigt. Your Color Picker liest Pixel mit True-Color-Präzision aus, sodass die erhaltenen HEX- und RGB-Werte genau dem Farbton in deinem Bild entsprechen, nicht einer gerundeten Näherung.",
			},
			{
				q: "Welche Farbe ist das?",
				a: "Lade ein Foto davon — oder einen Screenshot, falls es auf deinem Bildschirm zu sehen ist — in Your Color Picker hoch und bewege den Mauszeiger (oder auf dem Handy den Finger) über die genaue Stelle. Das Werkzeug zeigt HEX, RGB und HSL dieses Pixels live an, und du kannst zum Kopieren oder Speichern klicken. Für ein ganzes Bild statt einer einzelnen Stelle probiere einige der auffälligsten Bereiche aus, um einen Eindruck der Gesamtfarbe zu bekommen.",
			},
			{
				q: "Welche Farbe ist Taupe?",
				a: "Taupe ist ein gedämpftes, graubraunes Grau-Braun mit warmem Unterton, oft irgendwo um HEX #8B8589 bis #B38B6D, je nach Farbton. Taupetöne bei Farbe und Stoff variieren ziemlich stark — wenn du also eine Taupe-Probe oder ein Foto hast, lade sie hier hoch, um den genauen HEX-Code zu erhalten, statt dich auf eine grobe Schätzung zu verlassen.",
			},
			{
				q: "Wie finde ich meine Farbpalette?",
				a: "„Farbpalette“ kann zwei verschiedene Dinge bedeuten. Meinst du die Töne, die persönlich zu dir passen, ist das die Farbtyp-Analyse (Frühling, Sommer, Herbst, Winter und ihre Untertypen) — ermittelt, indem farbige Stoffe im Tageslicht nahe an dein Gesicht gehalten werden, um zu sehen, was Haut, Haare und Augenfarbe am besten ergänzt, entweder mit einem Stylisten oder einem Online-Selbsttest. Meinst du eine Design-Palette, ist der präzisere Weg, echte Farben aus einem Referenzfoto zu sampeln — lade eines in Your Color Picker hoch und wähle ein paar Pixel; jeder kommt mit eingebauten komplementären, analogen und triadischen Vorschlägen, um ein Set abzurunden.",
			},
			{
				q: "Wie erstelle ich eine Farbpalette?",
				a: "Beginne mit einem Referenzbild — einem Foto, einem Kunstwerk oder einem Moodboard — und sample einige seiner Farben mit Your Color Picker. Jede gewählte Farbe kommt mit eingebauten komplementären, analogen und triadischen Vorschlägen, sodass du eine stimmige Palette um einen Ausgangston herum aufbauen kannst, statt Kombinationen zu erraten.",
			},
			{
				q: "Wie findet man seine Aurafarbe?",
				a: "Die Aurafarbe ist ein Konzept aus energetischen und spirituellen Praktiken, keine messbare oder physikalische Eigenschaft — sie wird meist durch Aurafotografie (wie Kirlian-Fotografie) oder von Praktizierenden, die sie intuitiv deuten, ermittelt. Sie hat nichts mit HEX- oder RGB-Werten zu tun, die Lichtwellenlängen messen und keine Energiefelder.",
			},
			{
				q: "Wie identifiziere ich eine Wandfarbe?",
				a: "Mache ein Foto der Wand bei natürlichem, gleichmäßigem Tageslicht — vermeide Schatten und Kunstlicht, die verändern, wie eine Farbe wirkt — und lade es dann in Your Color Picker hoch, um den Wandbereich zu sampeln und HEX und RGB zu erhalten. Bildschirme und Lichtverhältnisse sorgen dafür, dass dies eine sehr nahe Übereinstimmung liefert statt eines garantiert farbtongenauen Ergebnisses — bring den HEX-Code also in ein Farbengeschäft, um die nächstliegende Mischformel zu finden.",
			},
			{
				q: "Was ist das beste kostenlose Tool, um Bildfarben umzukehren?",
				a: "Your Color Picker ist zum Identifizieren und Sampeln von Farben aus einem Bild gedacht, nicht zum Umkehren — aber Farben kostenlos umzukehren ist einfach: Die meisten Foto-Apps (Vorschau unter macOS, Fotos unter Windows) haben einen eingebauten Invertierungsfilter, und kostenlose Editoren wie GIMP oder Photopea (browserbasiert, keine Installation) bieten das ebenfalls als Ein-Klick-Filter an.",
			},
			{
				q: "Wie stimme ich die Gürtelfarbe ab?",
				a: "Die klassische Stilregel ist, den Gürtel zu den Schuhen passend zu wählen — brauner Gürtel zu braunen Schuhen, Schwarz zu Schwarz — statt zu Hose oder Hemd. Für eine exakte Übereinstimmung zwischen zwei bestimmten Teilen, etwa einem bestimmten Lederton, fotografiere beide unter demselben Licht und vergleiche ihre HEX-Codes mit Your Color Picker, statt dich allein auf dein Auge zu verlassen.",
			},
			{
				q: "Was ist die Farbe RGB?",
				a: "RGB steht für Rot, Grün, Blau — die drei Lichtkanäle, die dein Bildschirm mischt, um jede Farbe zu erzeugen, die du siehst, jeweils im Bereich von 0 bis 255. Es ist ein additives Farbmodell für digitale Displays, anders als das Farbmischmodell, das die meisten aus der Schule kennen. Your Color Picker zeigt den RGB-Wert jedes Pixels an, den du aus einem Bild sampelst.",
			},
			{
				q: "Was ist HSL in einem Farbcode?",
				a: "HSL steht für Hue (Farbton), Saturation (Sättigung) und Lightness (Helligkeit) — eine alternative Art, dieselbe Farbe wie HEX oder RGB zu beschreiben, aber in leichter nachvollziehbaren Begriffen: Der Farbton ist die Grundfarbe (0–360° auf dem Farbkreis), die Sättigung zeigt, wie kräftig oder blass sie ist, und die Helligkeit, wie nah sie an Schwarz oder Weiß liegt. In HSL lässt sich eine Farbe oft vorhersehbarer anpassen — die Helligkeit zu senken macht einen Farbton dunkler, ohne den Farbton selbst zu verändern, zum Beispiel.",
			},
		],
	},
	about: {
		title: "Über uns — Your Color Picker",
		description:
			"Your Color Picker ist ein kostenloser, privater Color Picker und Farbfinder aus einem Bild — erfahre, was er tut und warum nie etwas hochgeladen wird.",
		eyebrow: "Über uns",
		heading: "Über Your Color Picker",
		intro: "Ein kleines, fokussiertes Werkzeug für eine Aufgabe: exakte HEX-, RGB- und HSL-Werte aus jedem Bild zu extrahieren, sofort und privat.",
		whatHeading: "Was es tut",
		whatBody:
			"Your Color Picker ist ein Color Picker aus einem Bild — lade ein Foto, einen Screenshot oder ein Design-Mockup hoch oder ziehe es hinein, und bewege dann den Mauszeiger oder tippe irgendwo darauf, um die genaue Farbe dieses Pixels als HEX, RGB und HSL abzulesen. Klicke auf eine Farbe, um einen dieser Codes zu kopieren, sie in einer Palette zu speichern, im Vollbild anzusehen, oder vorgeschlagene komplementäre, analoge und triadische Farben daneben zu sehen. Es gibt außerdem einen eigenständigen Zufallsfarben-Generator für den Fall, dass du einfach nur einen Ausgangspunkt brauchst.",
		whyHeading: "Warum wir es gebaut haben",
		whyBody:
			"Die meisten Color Picker lassen dich aus einer Musterpalette wählen oder einen Code eingeben, den du schon kennst — nur wenige lassen dich auf ein echtes Foto zeigen und fragen: „Welche Farbe ist das genau?“ Wir haben Your Color Picker gebaut, um diese Frage in Sekunden zu beantworten, ohne dass du Software installieren, ein Konto erstellen oder irgendetwas auf einen Server hochladen musst.",
		howHeading: "Wie es funktioniert",
		howBody:
			"Alles läuft clientseitig in deinem Browser mit der HTML-Canvas-API. Dein Bild wird lokal auf deinem Gerät decodiert und gelesen — es wird nirgendwohin übertragen, weil es in diesem Ablauf gar keinen Upload-Schritt gibt. Gespeicherte Farben liegen im lokalen Speicher deines Browsers, bleiben also auf deinem Gerät und verschwinden, wenn du deine Browserdaten löschst. Alle Details findest du in unserer {{link}}.",
		howLinkLabel: "Datenschutzerklärung",
		whoHeading: "Für wen es gedacht ist",
		whoBody:
			"Designer, die einen HEX-Code aus einem Referenzbild abgleichen, Entwickler, die Markenfarben aus einem Screenshot extrahieren, Maler und Dekorateure, die eine Wand- oder Stofffarbe anhand eines Fotos prüfen, und alle, die schon einmal etwas angesehen und sich gefragt haben, welcher Farbton das genau ist.",
		questionsHeading: "Fragen?",
		questionsFaqBody: "Sieh in unseren {{link}} nach häufigen Fragen.",
		questionsFaqLinkLabel: "FAQ",
		questionsContactBody: "Oder {{link}} direkt — wir lesen jede Nachricht.",
		questionsContactLinkLabel: "kontaktiere uns",
	},
	contact: {
		title: "Kontakt — Your Color Picker",
		description: "Kontaktiere uns zu Your Color Picker — Fehlermeldungen, Funktionswünsche oder allgemeines Feedback. Wir lesen jede Nachricht.",
		eyebrow: "Kontakt",
		heading: "Kontakt",
		intro: "Einen Fehler gefunden, eine Idee für eine Funktion, oder willst du einfach Hallo sagen? Schick uns eine Nachricht — wir lesen alles, was ankommt.",
		emailHeading: "Schreib uns",
		sendEmailButton: "E-Mail senden",
		includeHeading: "Was du angeben solltest",
		includeBody:
			"Bei Fehlermeldungen sag uns, welches Gerät und welchen Browser du benutzt, und wenn möglich, was du kurz vor dem Auftreten des Problems gemacht hast. Bei Funktionswünschen oder allgemeinem Feedback sag uns einfach, was dir nützen würde — wir lesen jede Nachricht und versuchen, innerhalb weniger Werktage zu antworten.",
		beforeHeading: "Bevor du schreibst",
		beforeFaqBody: "Kurze Fragen dazu, wie das Tool funktioniert, sind oft schon auf unserer {{link}} beantwortet.",
		beforeFaqLinkLabel: "FAQ-Seite",
		beforePrivacyBody: "Für Fragen zum Umgang mit deinen Daten sieh dir unsere {{link}} an.",
		beforePrivacyLinkLabel: "Datenschutzerklärung",
	},
	privacy: {
		title: "Datenschutzerklärung — Your Color Picker",
		description: "Datenschutzerklärung von Your Color Picker: Deine Bilder werden vollständig in deinem Browser verarbeitet und niemals hochgeladen, übertragen oder auf einem Server gespeichert.",
		eyebrow: "Rechtliches",
		heading: "Datenschutzerklärung",
		lastUpdatedPrefix: "Zuletzt aktualisiert:",
		shortHeading: "Die Kurzfassung",
		shortBody:
			"Your Color Picker läuft vollständig in deinem Browser. Jedes hochgeladene Bild wird mit der Canvas-API lokal auf deinem Gerät gelesen und analysiert — es wird niemals auf einen Server hochgeladen, übertragen oder dort gespeichert, weil diese Seite in diesem Ablauf keinerlei serverseitige Komponente hat. Wir verwenden Google Analytics, um den gesamten Website-Traffic zu verstehen — Details dazu unter „Cookies und Tracking“ weiter unten.",
		imagesHeading: "Von dir hochgeladene Bilder",
		imagesBody:
			"Wenn du ein Bild hochlädst oder hineinziehst, wird es direkt im Speicher deines Browsers decodiert und dargestellt, um den Color Picker zu betreiben. Es wird nicht über das Netzwerk an uns oder Dritte gesendet. Das Schließen oder Neuladen des Tabs verwirft das Bild vollständig.",
		storageHeading: "Was wir lokal speichern",
		storageBody:
			"Das Tool nutzt den lokalen Speicher deines Browsers — eine gängige Webtechnologie, kein Cookie —, um zwei Dinge auf deinem eigenen Gerät zu merken: deine Hell/Dunkel-Theme-Einstellung und alle Farben, die du beim Benutzen des Tools speicherst. Diese Daten verlassen niemals dein Gerät, sind für uns niemals sichtbar und werden automatisch entfernt, wenn du die Website-Daten deines Browsers löschst.",
		cookiesHeading: "Cookies und Tracking",
		cookiesBody:
			"Wir verwenden Google Analytics, um den allgemeinen Traffic zu verstehen — etwa welche Seiten beliebt sind und aus welcher Region Besucher ungefähr kommen. Es setzt Cookies und kann Informationen wie deinen ungefähren Standort, Geräte- und Browsertyp sowie die von dir besuchten Seiten erfassen. Das ist völlig getrennt vom eigentlichen Farbwerkzeug: Deine Bilder und die von dir ausgewählten Farben werden niemals an Google oder sonst jemanden gesendet. Du kannst dich über das {{optout}} abmelden oder in der {{privacy}} nachlesen, wie Google mit diesen Daten umgeht.",
		cookiesOptoutLabel: "Google Analytics Opt-out-Browser-Add-on",
		cookiesGooglePrivacyLabel: "Datenschutzerklärung von Google",
		hostingHeading: "Hosting und Server-Logs",
		hostingBody:
			"Wie jede Website kann unser Hosting-Anbieter aus Sicherheits- und Zuverlässigkeitsgründen standardmäßige Server-Zugriffsprotokolle führen (etwa IP-Adresse, Browsertyp und Zeitstempel von Anfragen). Diese Protokolle werden von der Hosting-Infrastruktur selbst erzeugt, nicht vom Code dieser Seite, und stehen in keinem Zusammenhang mit Bild- oder Farbdaten — nichts davon erreicht jemals einen Server.",
		childrenHeading: "Datenschutz für Kinder",
		childrenBody:
			"Your Color Picker sammelt wissentlich von niemandem persönliche Daten, auch nicht von Kindern, weil es überhaupt keine persönlichen Daten sammelt — es gibt kein Kontosystem, und nichts, was du eingibst, wird an uns übertragen.",
		changesHeading: "Änderungen dieser Richtlinie",
		changesBody:
			"Ändert sich diese Richtlinie, aktualisieren wir das Datum „Zuletzt aktualisiert“ oben. Wesentliche Änderungen — etwa das Hinzufügen jeglicher Datenerhebung — werden auf dieser Seite klar dargestellt.",
		contactHeading: "Kontakt",
		contactBody: "Fragen zu dieser Richtlinie? Erreiche uns unter {{email}} oder über unsere {{link}}.",
		contactLinkLabel: "Kontaktseite",
	},
	terms: {
		title: "Allgemeine Geschäftsbedingungen — Your Color Picker",
		description: "Die Allgemeinen Geschäftsbedingungen für die Nutzung von Your Color Picker, einem kostenlosen, browserbasierten Color Picker und Farbfinder aus einem Bild.",
		eyebrow: "Rechtliches",
		heading: "Allgemeine Geschäftsbedingungen",
		lastUpdatedPrefix: "Zuletzt aktualisiert:",
		acceptanceHeading: "Annahme der Bedingungen",
		acceptanceBody: "Mit der Nutzung von Your Color Picker („das Tool“, „die Website“) stimmst du diesen Bedingungen zu. Wenn du damit nicht einverstanden bist, nutze die Website bitte nicht.",
		useHeading: "Nutzung des Dienstes",
		useBody:
			"Your Color Picker ist kostenlos nutzbar, für private oder gewerbliche Zwecke, ohne Anmeldung. Du stimmst zu, es nur für rechtmäßige Zwecke zu nutzen und nicht zu versuchen, es zu stören, in böswilliger Absicht zurückzuentwickeln oder den Dienst so zu missbrauchen, dass er für andere Nutzer beeinträchtigt wird.",
		contentHeading: "Deine Bilder und Inhalte",
		contentBody:
			"Jedes Bild, das du mit dem Tool nutzt, wird vollständig in deinem eigenen Browser verarbeitet und uns niemals hochgeladen — wir erhalten, speichern oder greifen niemals darauf zu und erheben daher keinerlei Anspruch darauf. Du bist allein dafür verantwortlich, sicherzustellen, dass du das Recht hast, jedes Bild zu nutzen, das du in das Tool lädst. Mehr dazu, wie das Tool mit Daten umgeht, findest du in unserer {{link}}.",
		contentLinkLabel: "Datenschutzerklärung",
		warrantyHeading: "Kein Gewährleistungsanspruch",
		warrantyBody:
			"Your Color Picker wird „wie besehen“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung. Wir sind bestrebt, dass die gemeldeten Farbwerte korrekt sind, garantieren aber keine perfekte Genauigkeit für jedes Bild, Gerät oder Display — Bildschirmkalibrierung, Bildkompression und Farbprofile können die genauen angezeigten Werte beeinflussen. Verlasse dich nicht allein darauf für Entscheidungen, bei denen Farbgenauigkeit entscheidend ist (zum Beispiel finale Farb- oder Druckproduktion), ohne unabhängige Prüfung.",
		liabilityHeading: "Haftungsbeschränkung",
		liabilityBody:
			"Im gesetzlich zulässigen Umfang haften wir nicht für indirekte, beiläufige oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung der Website oder des Tools entstehen.",
		linksHeading: "Links zu Drittanbietern",
		linksBody: "Seiten dieser Website können zur Einordnung auf Ressourcen Dritter verlinken. Wir sind nicht verantwortlich für Inhalt, Genauigkeit oder Praktiken einer Website, die wir nicht selbst betreiben.",
		changesHeading: "Änderungen am Dienst oder diesen Bedingungen",
		changesBody:
			"Wir können das Tool oder diese Bedingungen jederzeit aktualisieren. Die fortgesetzte Nutzung der Website nach Veröffentlichung von Änderungen bedeutet, dass du die aktualisierten Bedingungen akzeptierst. Wir aktualisieren das Datum „Zuletzt aktualisiert“ oben, sobald sich diese Seite ändert.",
		contactHeading: "Kontakt",
		contactBody: "Fragen zu diesen Bedingungen? Erreiche uns unter {{email}} oder über unsere {{link}}.",
		contactLinkLabel: "Kontaktseite",
	},
	toolsHub: {
		title: "Alle Farbwerkzeuge | Your Color Picker",
		description:
			"Alle kostenlosen Farbwerkzeuge an einem Ort: Color Picker, Konverter, Verlaufsgenerator, Kontrastprüfer, Farbenblindheit-Simulator, Mischer und mehr.",
		eyebrow: "Werkzeuge",
		heading: "Alle Werkzeuge",
		intro: "Alle kostenlosen Farbwerkzeuge dieser Seite an einem Ort.",
		guidesHeading: "Anleitungen",
		items: [
			{
				title: "Bild-Farbwähler",
				body: "Lade ein Foto hoch und lies den genauen HEX-, RGB- und HSL-Wert jedes Pixels ab, mit Lupe und vollständiger Paletten-Extraktion.",
			},
			{
				title: "Farbkonverter",
				body: "Wandle jede Farbe sofort zwischen HEX, RGB, HSL und HSV um — ändere ein Feld, die anderen aktualisieren sich live.",
			},
			{
				title: "Verlaufsgenerator",
				body: "Wähle zwei oder mehr Farben, sieh dir einen CSS-Verlauf live an und kopiere den fertigen Code.",
			},
			{
				title: "Kontrastprüfer",
				body: "Prüfe das WCAG-Kontrastverhältnis zwischen einer Text- und Hintergrundfarbe, mit Live-AA/AAA-Ergebnissen.",
			},
			{
				title: "Farbenblindheit-Simulator",
				body: "Lade ein Bild hoch, um es simuliert für Protanopie, Deuteranopie und Tritanopie nebeneinander zu sehen.",
			},
			{
				title: "Farbmischer",
				body: "Mische zwei Farben in beliebigem Verhältnis, um die exakte Farbe dazwischen zu finden.",
			},
			{
				title: "Schattierungs- und Tönungsgenerator",
				body: "Erzeuge eine vollständige Helligkeitsskala — Tönungen Richtung Weiß und Schattierungen Richtung Schwarz — aus einer Grundfarbe.",
			},
			{
				title: "Zufallsfarben-Generator",
				body: "Erzeuge mit einem Klick eine zufällige HEX-, RGB- und HSL-Farbe, samt passenden Palettenvorschlägen.",
			},
			{
				title: "Farben durchsuchen",
				body: "Durchsuche jede benannte CSS-Standardfarbe mit ihrem HEX-Code — durchsuchbar, zum Kopieren anklicken.",
			},
			{
				title: "Paletten-Generator",
				body: "Erstelle eine vollständige Farbpalette — komplementär, analog, triadisch und monochromatisch — aus einer Grundfarbe, bereit zum Exportieren.",
			},
		],
	},
	games: {
		hub: {
			title: "Kostenlose Farbspiele — Teste dein Farbsehen | Your Color Picker",
			description: "Spiele kostenlos: Color Runner, einen Farbsehtest zum Finden der abweichenden Farbe und eine Farbgedächtnis-Challenge. Ohne Anmeldung, direkt im Browser.",
			eyebrow: "Spiele",
			heading: "Farbspiele",
			intro: "Schnelle, kostenlose Spiele, die dein Auge für Farben trainieren. Knack deinen Bestwert und komm täglich für eine neue Runde Farbgedächtnis wieder.",
			play: "Spielen",
			newBadge: "Neu",
			dailyBadge: "Täglich"
		},
		banner: {
			heading: "Kostenlose Farbspiele spielen",
			body: "Color Runner, ein Test für die abweichende Farbe und Farbgedächtnis — wie scharf ist dein Auge?",
			cta: "Jetzt spielen"
		},
		common: {
			share: "Ergebnis teilen",
			copied: "Kopiert — füge es überall ein!",
			playAgain: "Nochmal spielen",
			start: "Start",
			best: "Bestwert",
			moreGames: "Mehr Farbspiele",
			allGames: "Alle Spiele"
		},
		odd: {
			title: "Farbe raus — Kostenloses Farbsehtest-Spiel | Your Color Picker",
			description: "Finde das eine Feld mit einem leicht anderen Farbton. Mit jedem Level wächst das Raster und der Unterschied schrumpft — wie weit kommt dein Farbsehen?",
			eyebrow: "Spiel",
			heading: "Farbe raus",
			intro: "Tippe auf das Feld, das nicht passt. Mit jedem Level wächst das Raster und der Unterschied wird kleiner — du hast drei Leben.",
			cardBody: "Finde das Feld mit einem leicht anderen Farbton. Die Level werden schwerer, bis nur die schärfsten Augen bestehen.",
			level: "Level",
			lives: "Leben",
			tileLabel: "Feld {n}",
			gameOver: "Spiel vorbei — du hast Level {n} erreicht.",
			rankLabel: "Dein Auge: {rank}",
			ranks: [
				"Einsteiger",
				"Gutes Auge",
				"Scharfes Auge",
				"Adlerauge",
				"Farbfalke",
				"Übermenschlich"
			],
			bestLevel: "Bestwert: Level {n}",
			help: {
				title: "So spielst du Farbe raus",
				steps: [
					{
						title: "Finde das andere Feld",
						body: "Ein Feld hat einen leicht anderen Farbton als der Rest. Tippe darauf, um ins nächste Level zu kommen."
					},
					{
						title: "Es wird schwerer",
						body: "Jedes Level bringt mehr Felder und einen kleineren Unterschied."
					},
					{
						title: "Drei Leben",
						body: "Ein falscher Tipp kostet ein Leben und zeigt dir, wo das Feld war. Sind alle drei weg, endet das Spiel."
					}
				]
			},
			explainerHeading: "Was dieses Spiel misst",
			explainerBody: "Das abweichende Feld unterscheidet sich nur in der Helligkeit, die fast alle wahrnehmen können — auch Menschen mit Farbsehschwäche. Höhere Level testen, wie kleine Unterschiede deine Augen erkennen. Bildschirmhelligkeit, Spiegelungen und Displayqualität beeinflussen das Ergebnis, also sieh es als Spaß-Challenge, nicht als medizinischen Sehtest."
		},
		runner: {
			title: "Color Runner — Kostenloses Pixel-Laufspiel mit Farben | Your Color Picker",
			description: "Lauf auf der richtigen Farbe! Ein kostenloser Endlos-Runner im Pixel-Look: Wechsle zwischen drei farbigen Spuren, bleib auf der angezeigten Farbe und schnapp dir goldene Eimer für 10 Sekunden Schutz.",
			eyebrow: "Arcade-Spiel",
			heading: "Color Runner",
			intro: "Lauf, wechsle die Spur und bleib immer auf der Farbe, die oben steht. Die Spuren ändern sich ständig und das Tempo steigt — schnapp dir einen goldenen Eimer für 10 Sekunden Schutz.",
			cardBody: "Ein Pixel-Endlos-Runner: Bleib auf der Spur der angezeigten Farbe und sammle goldene Eimer für 10 Sekunden Gold. Wie weit kommst du?",
			runOn: "Lauf auf",
			next: "Gleich",
			goldActive: "Gold!",
			distance: "{n} m",
			best: "Bestwert: {n} m",
			newBest: "Neuer Rekord! 🎉",
			controls: "← → Spur wechseln · ↑ oder Leertaste zum Springen · am Handy wischen",
			overColor: "Du hast den Weg {color} verlassen!",
			final: "Du bist {n} m gelaufen",
			left: "Nach links",
			right: "Nach rechts",
			jump: "Springen",
			resume: "Weiter",
			sound: "Ton",
			colors: {
				red: "Rot",
				blue: "Blau",
				yellow: "Gelb",
				green: "Grün",
				pink: "Rosa",
				orange: "Orange",
				purple: "Lila"
			},
			help: {
				title: "So spielst du Color Runner",
				steps: [
					{
						title: "Folge der Farbe",
						body: "Die Farbe oben zeigt, auf welcher Spur du laufen musst. Verlässt du sie länger als einen Moment, ist der Lauf vorbei."
					},
					{
						title: "Achte auf Wechsel",
						body: "Die Spurfarben wechseln beim Laufen, und eine blinkende GLEICH-Warnung erscheint, bevor sich die Zielfarbe ändert. Reagiere früh."
					},
					{
						title: "Gold schnappen, Übergänge überspringen",
						body: "Goldene Eimer tauchen direkt auf deinem Weg auf — schnapp dir einen, und dein Läufer wird 10 Sekunden lang golden, ohne dass du ausscheiden kannst. Drück ↑ oder die Leertaste (oder wisch nach oben), um beim Spurwechsel über ein kurzes Stück in der falschen Farbe zu springen."
					}
				]
			},
			explainerHeading: "Warum Farbwechsel schwer sind",
			explainerBody: "Ein Farbwort zu lesen und der echten Farbe zuzuordnen kostet echte Denkarbeit, besonders wenn sich die Farben ringsum ständig ändern — ein Verwandter des berühmten Stroop-Effekts. Tempo macht es schwerer: Dein Gehirn hat weniger Zeit, das Wort mit den Spuren abzugleichen, und so trainiert das Spiel schnelles, genaues Farberkennen."
		},
		memory: {
			title: "Farbgedächtnis — Stelle die Farbe aus dem Gedächtnis nach | Your Color Picker",
			description: "Sieh dir eine Farbe 3 Sekunden lang an und stelle sie dann mit Reglern für Farbton, Sättigung und Helligkeit nach. Fünf Runden, bewertet von 0 bis 100.",
			eyebrow: "Spiel",
			heading: "Farbgedächtnis",
			intro: "Präge dir eine Farbe drei Sekunden lang ein und baue sie dann mit Reglern für Farbton, Sättigung und Helligkeit aus dem Gedächtnis nach. Fünf Runden, bewertet von 0 bis 100.",
			cardBody: "Sieh eine Farbe 3 Sekunden lang und stelle sie aus dem Gedächtnis nach. Fünf Runden — schaffst du 90+?",
			dailyMode: "Täglich",
			practiceMode: "Training",
			dailyDone: "Du hast die heutige Tagesrunde gespielt — probier den Trainingsmodus oder komm morgen wieder.",
			round: "Runde {n}/5",
			memorize: "Präge dir diese Farbe ein",
			recreate: "Jetzt nachstellen",
			hue: "Farbton",
			saturation: "Sättigung",
			lightness: "Helligkeit",
			submit: "Abgeben",
			next: "Nächste Runde",
			target: "Ziel",
			yours: "Deine",
			roundScore: "{score} / 100",
			final: "Endergebnis: {score} / 100",
			bestScore: "Bestwert: {score}",
			help: {
				title: "So spielst du Farbgedächtnis",
				steps: [
					{
						title: "Einprägen",
						body: "Eine Farbe füllt drei Sekunden lang das Feld. Präge sie dir ein."
					},
					{
						title: "Nachstellen",
						body: "Nutze die Regler für Farbton, Sättigung und Helligkeit, um sie aus dem Gedächtnis nachzubauen, und tippe auf Abgeben."
					},
					{
						title: "Punkte",
						body: "Jede Runde gibt bis zu 100 Punkte, je nachdem, wie ähnlich deine Farbe dem Original aussieht. Im Tagesmodus bekommen alle dieselben fünf Farben."
					}
				]
			},
			explainerHeading: "Warum Farbgedächtnis schwer ist",
			explainerBody: "Wir merken uns Farben eher als Kategorien („Blau“, „Türkis“) als als exakte Werte, deshalb driftet die Erinnerung zur typischen Version jeder Farbe. Die Wertung nutzt den CIELAB-Farbraum, der Unterschiede so misst, wie das Auge sie wahrnimmt — ein Fehler im Farbton kostet daher mehr als ein kleiner Helligkeitsfehler."
		}
	},
	moreTools: {
		heading: "Weitere kostenlose Farbwerkzeuge testen",
		body: "Konverter, Verlaufsgenerator, Kontrastprüfer, Palettengenerator und mehr – kostenlos, schnell und zu 100 % privat.",
		cta: "Alle Werkzeuge ansehen",
	},
	relatedTools: {
		heading: "Verwandte Werkzeuge",
	},
	colorConverterTool: {
		title: "Farbkonverter — HEX, RGB, HSL, HSV | Your Color Picker",
		description: "Wandle jede Farbe sofort zwischen HEX, RGB, HSL und HSV um. Ändere ein beliebiges Feld, und jedes andere Format aktualisiert sich live.",
		eyebrow: "Werkzeug",
		heading: "Farbkonverter",
		intro: "Gib unten in ein beliebiges Feld eine Farbe ein — HEX, RGB, HSL oder HSV — und die anderen drei aktualisieren sich live. Klicke auf ein Format, um es zu kopieren.",
		explainerHeading: "Was ist der Unterschied zwischen HSV und HSL?",
		explainerBody:
			"Beide beschreiben denselben Farbraum mit Farbton, Sättigung und einem dritten Kanal — aber der dritte Wert von HSL ist die Helligkeit (Nähe zu Schwarz oder Weiß), während es bei HSV der Hellwert ist (Nähe zu Schwarz, unabhängig von Weiß). HSV ist in Color Pickern von Design-Software verbreitet; HSL ist in CSS gebräuchlicher.",
		help: {
			title: "So verwendest du den Farbkonverter",
			steps: [
				{ title: "1. Farbe eingeben", body: "Gib in ein beliebiges Feld einen Wert ein — HEX, RGB, HSL oder HSV." },
				{
					title: "2. Die anderen beobachten",
					body: "Die anderen drei Formate aktualisieren sich passend live, sodass du dieselbe Farbe in jedem Format ablesen kannst.",
				},
				{ title: "3. Kopiere, was du brauchst", body: "Klicke neben einem Format auf Kopieren, um genau diesen Wert zu kopieren." },
			],
		},
	},
	gradientMakerTool: {
		title: "CSS-Verlaufsgenerator | Your Color Picker",
		description: "Erstelle einen linearen oder radialen CSS-Verlauf aus zwei oder mehr Farben, sieh ihn live und kopiere das exakte CSS.",
		eyebrow: "Werkzeug",
		heading: "Verlaufsgenerator",
		intro: "Füge Farben hinzu, wähle linear oder radial, und kopiere den fertigen CSS-Verlauf.",
		explainerHeading: "Warum einen CSS-Verlauf nutzen?",
		explainerBody:
			"Verläufe verleihen einem flachen Hintergrund Tiefe, ohne dass ein Bild geladen werden muss — häufig genutzt für Hero-Bereiche, Buttons und Overlays. Lineare Verläufe mischen Farben entlang einer geraden Linie in beliebigem Winkel; radiale Verläufe breiten sich von einem Mittelpunkt aus. Stelle hier deine Farben ein und kopiere das exakte CSS, fertig zum Einfügen in jedes Stylesheet.",
		addColor: "+ Farbe hinzufügen",
		linear: "Linear",
		radial: "Radial",
		angle: "Winkel",
		cssHeading: "CSS",
		copyCss: "CSS kopieren",
		remove: "Entfernen",
		help: {
			title: "So verwendest du den Verlaufsgenerator",
			steps: [
				{ title: "1. Farben hinzufügen", body: "Beginne mit zwei Farben oder klicke auf + Farbe hinzufügen für bis zu fünf Stopps." },
				{ title: "2. Einen Stil wählen", body: "Wähle Linear (mit einstellbarem Winkel) oder Radial." },
				{ title: "3. CSS kopieren", body: "Das exakte CSS aktualisiert sich unten live — klicke auf CSS kopieren, wenn es passt." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Farbenblindheit-Simulator | Your Color Picker",
		description: "Lade ein Bild hoch und sieh, wie es für Menschen mit Protanopie, Deuteranopie oder Tritanopie aussieht.",
		eyebrow: "Werkzeug",
		heading: "Farbenblindheit-Simulator",
		intro: "Lade ein Bild hoch, um es für die drei häufigsten Arten von Farbsehschwäche simuliert zu sehen, neben dem Original.",
		dropHint: "Bild hierher ziehen, oder den Button unten nutzen",
		uploadNote: "Nichts wird irgendwohin hochgeladen — alles läuft vollständig in deinem Browser.",
		original: "Original",
		protanopia: "Protanopie (Rotblindheit)",
		deuteranopia: "Deuteranopie (Grünblindheit)",
		tritanopia: "Tritanopie (Blaublindheit)",
		whyHeading: "Warum das wichtig ist",
		whyBody:
			"Etwa 1 von 12 Männern und 1 von 200 Frauen hat eine Form von Farbsehschwäche. Die Simulation von Protanopie, Deuteranopie und Tritanopie hilft Designern zu prüfen, dass Diagramme, UI-Zustände und Grafiken Bedeutung nicht allein über Farbe vermitteln.",
		help: {
			title: "So verwendest du den Farbenblindheit-Simulator",
			steps: [
				{ title: "1. Bild hochladen", body: "Ziehe ein Foto auf das Feld oder nutze den Upload-Button." },
				{
					title: "2. Die vier Ansichten vergleichen",
					body: "Dein Originalbild erscheint neben den Simulationen für Protanopie, Deuteranopie und Tritanopie.",
				},
				{
					title: "3. Dein Design prüfen",
					body: "Achte auf Informationen, die nur über Farbe vermittelt werden — genau das zeigen diese Simulationen.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Benannte Farben durchsuchen | Your Color Picker",
		description: "Durchsuche alle benannten CSS-Standardfarben mit ihren HEX-Codes. Klicke auf ein Muster, um seinen HEX-Wert zu kopieren.",
		eyebrow: "Werkzeug",
		heading: "Farben durchsuchen",
		introPrefix: "Jede benannte CSS-Standardfarbe (",
		introSuffix: " insgesamt) mit ihrem HEX-Code. Zum Kopieren auf ein Muster klicken.",
		searchPlaceholder: "Nach Name oder Hex suchen …",
		empty: "Keine Farben entsprechen deiner Suche.",
		help: {
			title: "So verwendest du Farben durchsuchen",
			steps: [
				{ title: "1. Scrollen oder suchen", body: "Durchstöbere das gesamte Raster oder gib einen Namen oder Hex-Code in die Suche ein." },
				{ title: "2. Zum Kopieren anklicken", body: "Klicke auf ein beliebiges Muster, um seinen HEX-Code zu kopieren." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Kontrastprüfer WCAG AA/AAA | Your Color Picker",
		description: "Prüfe das WCAG-Kontrastverhältnis zwischen zwei Farben für zugänglichen Text, mit Live-AA- und AAA-Ergebnissen.",
		eyebrow: "Werkzeug",
		heading: "Kontrastprüfer",
		intro: "Gib eine Textfarbe und eine Hintergrundfarbe ein, um ihr WCAG-Kontrastverhältnis zu prüfen.",
		explainerHeading: "Warum das Kontrastverhältnis wichtig ist",
		explainerBody:
			"WCAG definiert Mindest-Kontrastverhältnisse, damit Text für Menschen mit Sehschwäche oder Farbenblindheit lesbar bleibt: 4,5:1 für normalen Text und 3:1 für großen Text auf AA-Niveau, bis zu 7:1 und 4,5:1 auf dem strengeren AAA-Niveau. Die eigene Text-Hintergrund-Kombination gegen diese Schwellenwerte zu prüfen, ist eine der einfachsten Arten, ein Design barrierefreier zu machen.",
		textLabel: "Text",
		backgroundLabel: "Hintergrund",
		largeSample: "Beispiel für großen Text (24px)",
		normalSample: "Beispiel für normalen Text (14px) — Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
		enterValid: "Gib zwei gültige Hex-Farben ein (z. B. #171717), um sie zu vergleichen.",
		normalTextRow: "Normaler Text —",
		largeTextRow: "Großer Text —",
		pass: "bestanden",
		fail: "nicht bestanden",
		help: {
			title: "So verwendest du den Kontrastprüfer",
			steps: [
				{ title: "1. Zwei Farben festlegen", body: "Wähle eine Textfarbe und eine Hintergrundfarbe über die Farbwähler oder Hex-Felder." },
				{ title: "2. Verhältnis ablesen", body: "Das Kontrastverhältnis und die Live-Vorschau aktualisieren sich sofort." },
				{
					title: "3. WCAG-Bestehen prüfen",
					body: "Sieh auf einen Blick, ob deine Kombination AA oder AAA für normalen und großen Text besteht.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Zufallsfarben-Generator | Your Color Picker",
		description: "Erzeuge mit einem Klick eine zufällige HEX-, RGB- und HSL-Farbe, samt passenden komplementären und analogen Vorschlägen.",
		eyebrow: "Werkzeug",
		heading: "Zufallsfarben-Generator",
		intro: "Klicke auf Generieren für eine neue Zufallsfarbe, mit passenden Palettenvorschlägen.",
		explainerHeading: "Wann eine Zufallsfarbe hilft",
		explainerBody:
			"Manchmal ist der schwierigste Teil bei der Farbwahl, überhaupt einen Ausgangspunkt zu finden. Ein zufälliger HEX-, RGB- und HSL-Code — samt passender Komplementär- und Analogfarben — gibt dir etwas Konkretes zum Reagieren und Anpassen, statt vor einem leeren Color Picker zu sitzen.",
		generate: "Zufallsfarbe generieren",
		help: {
			title: "So verwendest du den Zufallsfarben-Generator",
			steps: [
				{ title: "1. Auf Generieren klicken", body: "Erhalte sofort eine neue zufällige HEX-, RGB- und HSL-Farbe." },
				{ title: "2. Ein Format kopieren", body: "Klicke neben dem benötigten Wert auf Kopieren." },
				{
					title: "3. Vorschläge erkunden",
					body: "Komplementäre, analoge und triadische Vorschläge aktualisieren sich passend zu deiner neuen Farbe.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Farbmischer | Your Color Picker",
		description: "Mische zwei Farben in beliebigem Verhältnis, um die Farbe dazwischen zu finden, mit Live-HEX-, RGB- und HSL-Ausgabe.",
		eyebrow: "Werkzeug",
		heading: "Farbmischer",
		intro: "Wähle zwei Farben und ein Mischverhältnis, um die Farbe dazwischen zu finden.",
		explainerHeading: "So funktioniert diese Farbmischung",
		explainerBody:
			"Dieser Mixer mischt zwei Farben im RGB-Raum im gewählten Verhältnis, anstatt Farbe oder Pigmente zu simulieren — eine 50/50-Mischung aus Rot und Blau ergibt daher ein klares Violett, genau wie Farben am Bildschirm tatsächlich kombiniert werden. Praktisch, um einen Zwischenton zwischen den beiden Hauptfarben einer Marke zu finden oder einen Hover-Zustand zu testen.",
		colorA: "Farbe A",
		colorB: "Farbe B",
		blendRatio: "Mischverhältnis",
		help: {
			title: "So verwendest du den Farbmischer",
			steps: [
				{ title: "1. Farbe A und B wählen", body: "Wähle zwei Farben über die Farbwähler oder Hex-Felder." },
				{ title: "2. Verhältnis anpassen", body: "Ziehe den Regler, um stärker zur einen oder anderen Farbe zu mischen." },
				{
					title: "3. Ergebnis kopieren",
					body: "HEX, RGB und HSL der gemischten Farbe aktualisieren sich live — kopiere, was du brauchst.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Schattierungs- und Tönungsgenerator | Your Color Picker",
		description: "Erzeuge eine vollständige Skala aus Tönungen (Richtung Weiß) und Schattierungen (Richtung Schwarz) aus einer Grundfarbe.",
		eyebrow: "Werkzeug",
		heading: "Schattierungs- und Tönungsgenerator",
		intro: "Wähle eine Grundfarbe, um eine vollständige Helligkeitsskala zu erzeugen — von fast weißen Tönungen bis zu fast schwarzen Schattierungen.",
		explainerHeading: "Tints vs. Shades",
		explainerBody:
			"Ein Tint ist deine Grundfarbe, gemischt in Richtung Weiß — heller und weicher, nützlich für Hintergründe und Hover-Zustände. Ein Shade ist dieselbe Farbe, gemischt in Richtung Schwarz — dunkler und kräftiger, nützlich für Text oder Ränder, die erkennbar mit der Grundfarbe verwandt bleiben sollen. Eine vollständige Rampe aus beiden zu erzeugen, ergibt ein stimmiges Set für eine Farbskala.",
		tints: "Tönungen (Richtung Weiß)",
		base: "Basis",
		shades: "Schattierungen (Richtung Schwarz)",
		help: {
			title: "So verwendest du den Schattierungs- und Tönungsgenerator",
			steps: [
				{ title: "1. Grundfarbe wählen", body: "Wähle eine beliebige Farbe über den Farbwähler oder das Hex-Feld." },
				{
					title: "2. Skala ablesen",
					body: "Tönungen (Richtung Weiß) und Schattierungen (Richtung Schwarz) werden automatisch um deine Basis erzeugt.",
				},
				{ title: "3. Ein Muster kopieren", body: "Klicke auf ein beliebiges Muster in der Skala, um seinen HEX-Code zu kopieren." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Paletten-Generator — Farbschemata | Your Color Picker",
		description:
			"Erzeuge eine vollständige Farbpalette aus jeder Grundfarbe — komplementäre, analoge, triadische und monochromatische Schemata, bereit zum Export als CSS, Tailwind oder JSON.",
		eyebrow: "Werkzeug",
		heading: "Paletten-Generator",
		explainerHeading: "Komplementär, analog und triadisch erklärt",
		explainerBody:
			"Das sind klassische Beziehungen im Farbkreis: Komplementärfarben liegen sich für maximalen Kontrast gegenüber, Analogfarben liegen nebeneinander für einen ruhigen, stimmigen Look, und triadische Sets verteilen drei Farben gleichmäßig über den Farbkreis für ausgewogene Vielfalt. Von einer Grundfarbe ausgehend und alle drei zu erzeugen, liefert dir mehrere fertige Richtungen zur Auswahl.",
		intro:
			"Wähle eine Grundfarbe oder erzeuge eine zufällige, und erkunde dann komplementäre, analoge, triadische und monochromatische Paletten daraus — exportiere, wenn du bereit bist.",
		baseColorLabel: "Grundfarbe",
		randomize: "Zufällig",
		exportHeading: "Exportieren",
		help: {
			title: "So verwendest du den Paletten-Generator",
			steps: [
				{ title: "1. Grundfarbe wählen", body: "Wähle eine Farbe über den Farbwähler oder das Hex-Feld, oder klicke auf Zufällig für einen Ausgangspunkt." },
				{
					title: "2. Die Schemata erkunden",
					body: "Komplementäre, analoge, triadische und monochromatische Paletten werden automatisch aus deiner Grundfarbe erzeugt.",
				},
				{
					title: "3. Exportieren oder kopieren",
					body: "Klicke auf ein Muster, um seinen HEX-Code zu kopieren, oder exportiere die gesamte Palette als CSS-Variablen, Tailwind-Konfiguration oder JSON.",
				},
			],
		},
	},
	eyedropperGuide: {
		title: "Online-Pipette – Jede Farbe Auswählen | Your Color Picker",
		description:
			"Kostenlose Online-Pipette – wähle jede Farbe von deinem Bildschirm oder einem Bild und erhalte sofort HEX-, RGB- und HSL-Codes. 100 % privat, es wird nichts hochgeladen.",
		eyebrow: "Anleitung",
		heading: "Online-Pipette",
		intro: "Wähle jede Farbe von deinem Bildschirm, einem Screenshot oder einem Foto – direkt im Browser, ohne Erweiterung oder Installation.",
		explainerHeading: "So funktioniert die Farbpipette",
		explainerBody:
			"Diese Pipette nutzt die im Browser integrierten Farbauswahl-Werkzeuge, um einen Pixel von beliebiger Stelle auf deinem Bildschirm zu erfassen, oder lässt dich ein Bild hochladen und direkt auf einen Pixel klicken. In beiden Fällen erhältst du sofort den exakten HEX-, RGB- und HSL-Wert, bereit zum Einfügen in dein Design-Tool, CSS oder deinen Code-Editor.",
		faqHeading: "Häufig gestellte Fragen",
		faq: [
			{
				q: "Funktioniert diese Pipette auf dem Handy?",
				a: "Die Farbauswahl aus einem hochgeladenen Bild funktioniert auf jedem Gerät, auch auf Smartphones und Tablets. Die direkte Auswahl vom Bildschirm nutzt eine Browserfunktion (die EyeDropper-API), die derzeit in Chrome, Edge und anderen Chromium-basierten Desktop-Browsern unterstützt wird.",
			},
			{
				q: "Wird etwas an einen Server gesendet?",
				a: "Nein. Jeder Pixel wird lokal in deinem Browser über die Canvas-API gelesen – dein Bild und dein Bildschirm verlassen niemals dein Gerät.",
			},
			{
				q: "Welche Farbformate erhalte ich?",
				a: "HEX, RGB und HSL für jede ausgewählte Farbe, jeweils mit einem Kopieren-Button per Klick.",
			},
		],
	},
	hexFromImageGuide: {
		title: "HEX-Code aus einem Bild Ermitteln | Your Color Picker",
		description:
			"Lade ein beliebiges Foto hoch und erhalte sofort den exakten HEX-Code jedes Pixels, dazu RGB, HSL und eine vollständige Palette. Kostenlos und 100 % privat – nichts verlässt dein Gerät.",
		eyebrow: "Anleitung",
		heading: "HEX-Code aus Jedem Bild Ermitteln",
		intro: "Lade ein Foto, einen Screenshot oder ein Logo hoch und klicke auf einen beliebigen Pixel, um dessen exakten HEX-Code zusammen mit RGB, HSL und einer passenden Farbpalette abzulesen.",
		explainerHeading: "So findest du einen HEX-Code in einem Foto",
		explainerBody:
			"Ziehe ein Bild in das Tool unten und klicke oder fahre dann über einen beliebigen Pixel, um dessen exakte Farbe abzulesen. HEX, RGB und HSL werden sofort aktualisiert, und du kannst mit einem Klick eine vollständige Palette aus dem Bild extrahieren. Alles läuft in deinem Browser, das Bild selbst wird also nie auf einen Server hochgeladen.",
		faqHeading: "Häufig gestellte Fragen",
		faq: [
			{
				q: "Kann ich den HEX-Code aus einem Screenshot erhalten?",
				a: "Ja – lade einen Screenshot genauso hoch wie jedes andere Foto und klicke dann auf den Pixel, dessen HEX-Code du möchtest.",
			},
			{
				q: "Funktioniert das mit einem Logo oder einem transparenten PNG?",
				a: "Ja, PNG-, JPG- und WebP-Bilder funktionieren alle, auch transparente PNGs – transparente Bereiche werden als die darunterliegende Pixelfarbe gelesen.",
			},
			{
				q: "Wird mein Bild irgendwohin hochgeladen?",
				a: "Nein. Das Bild wird vollständig in deinem Browser über die Canvas-API dekodiert und gelesen – es verlässt niemals dein Gerät.",
			},
		],
	},
	blog: {
		title: "Farb-Blog — Farbenlehre und Design | Your Color Picker",
		description: "Leitfäden zu Farbenlehre, HEX/RGB/HSL, Barrierefreiheit und Design – mit kostenlosen Tools, um sie direkt anzuwenden.",
		eyebrow: "Blog",
		heading: "Farbe, erklärt",
		intro: "Leitfäden zu Farbenlehre, Barrierefreiheit und Design – mit den passenden Tools zum Ausprobieren.",
		postTitleSuffix: "Your Color Picker Blog",
		readyToTry: "Bereit, es selbst auszuprobieren?",
		back: "← Zurück zum Blog",
	},
	notFound: {
		title: "Seite nicht gefunden — Your Color Picker",
		description: "Die gesuchte Seite existiert nicht. Kehre zu Your Color Picker zurück, um HEX-, RGB- und HSL-Farben aus jedem Bild zu finden.",
		eyebrow: "404",
		heading: "Seite nicht gefunden",
		intro: "Die gesuchte Seite existiert nicht, wurde möglicherweise verschoben, oder die URL enthält einen Tippfehler.",
		homeButton: "Zur Startseite",
		tryHeading: "Oder versuche eines davon",
		tryTool: "Das Color-Picker-Tool benutzen",
		tryFaq: "FAQ durchsuchen",
		tryAbout: "Über Your Color Picker",
		tryContact: "Kontakt aufnehmen",
	},
};
