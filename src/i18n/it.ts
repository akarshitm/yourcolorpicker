import type { Dictionary } from "./en";

export const it: Dictionary = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Selettore di Colore da Immagine",
		tools: "Strumenti",
		whyUs: "Perché noi",
		faq: "FAQ",
		about: "Chi siamo",
		contact: "Contatti",
		howToUse: "Come si usa",
		openMenu: "Apri menu",
		uploadImage: "Carica immagine",
		language: "Lingua",
	},
	footer: {
		privacyHeading: "Privacy",
		privacyBlurb:
			"Your Color Picker è interamente lato client per lo strumento colore vero e proprio. Ogni pixel che ispezioni, ogni palette estratta e ogni colore che salvi viene calcolato e memorizzato direttamente nel tuo browser tramite l'API Canvas e l'archiviazione locale — la tua immagine non viene mai caricata, trasmessa o vista da alcun server, perché non ce n'è uno in questo flusso. Usiamo Google Analytics per capire il traffico complessivo del sito, ma nessuna immagine o dato di colore viene mai tracciato o condiviso, e cancellare i dati del browser elimina tutto ciò che è salvato localmente.",
		readFullPolicy: "Leggi la {{link}} completa.",
		privacyPolicyLabel: "Informativa sulla Privacy",
		aboutUs: "Chi Siamo",
		tools: "Tutti gli Strumenti",
		faq: "FAQ",
		contactUs: "Contattaci",
		privacyPolicy: "Informativa sulla Privacy",
		termsAndConditions: "Termini e Condizioni",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Your Color Picker — Selettore di Colore da Immagine",
		metaDescription:
			"Selettore di colore e cerca-colore da immagine gratuito — codici HEX, RGB e HSL istantanei, più un cerca-colore complementare e generatore casuale.",
		eyebrow: "Selettore di colore gratuito · Nessuna registrazione · Niente viene mai caricato",
		heading: "Il selettore di colore che trova qualsiasi colore in una foto",
		subhead:
			"Un cerca-colore da immagine che ottiene ogni codice HEX, RGB e HSL con precisione a livello di pixel — più un cerca-colore complementare integrato e un generatore di colori casuali per quando ti serve solo un punto di partenza.",
		ctaPrimary: "Carica un'immagine",
		ctaSecondary: "Scopri cosa lo rende diverso",
	},
	features: {
		heading: "Un selettore di colore pensato per la precisione, non solo per l'estrazione",
		items: [
			{
				title: "Un selettore di colore da immagine, pixel per pixel",
				body: "Passa il cursore sull'immagine e una lente d'ingrandimento zoomata mostra ogni singolo pixel intorno al cursore, con il pixel target esatto evidenziato — così questo selettore di colore da immagine seleziona proprio quello che intendi, non una media dei suoi vicini.",
			},
			{
				title: "Un cerca-codice hex e un cerca-colore RGB, insieme",
				body: "Ogni pixel funge contemporaneamente da cerca-codice hex, cerca-colore RGB e lettore HSL — con il nome di colore standard più vicino individuato in un clic.",
			},
			{
				title: "Un cerca-colore complementare integrato",
				body: "Le palette complementari, analoghe, triadiche e monocromatiche si aggiornano in tempo reale in base al colore che stai indicando — un cerca-colore complementare senza bisogno di conoscere la teoria del colore.",
			},
			{
				title: "Un generatore di colori casuali, quando ti serve",
				body: "Non hai un'immagine a portata di mano? Premi colore casuale per ottenere un nuovo codice HEX, RGB e HSL da cui partire — poi salvalo o usalo per generare una palette abbinata.",
			},
			{
				title: "Verificatore di contrasto integrato",
				body: "Confronta due colori qualsiasi della tua immagine con le soglie WCAG AA/AAA per testo normale e grande — senza bisogno di uno strumento separato.",
			},
			{
				title: "Esporta, non solo copiare",
				body: "Esporta la tua palette come variabili CSS, uno snippet di configurazione Tailwind, JSON o una striscia di campioni PNG scaricabile — oppure salva i colori localmente senza bisogno di un account.",
			},
		],
	},
	trust: {
		points: [
			"100% lato client — la tua immagine non lascia mai il tuo browser",
			"Nessun account, nessuna registrazione, nessuna filigrana",
			"Funziona offline una volta caricata la pagina",
		],
	},
	cta: {
		heading: "Pronto a trovare i tuoi colori?",
	},
	cookieConsent: {
		message: "Usiamo i cookie (tramite Google Analytics) per capire come i visitatori usano questo sito. Consulta la nostra {{link}} per i dettagli.",
		linkLabel: "Informativa sulla Privacy",
		accept: "Accetta",
		decline: "Rifiuta",
	},
	help: {
		title: "Come usare Your Color Picker",
		close: "Chiudi",
		done: "Capito",
		steps: [
			{
				title: "1. Carica un'immagine",
				body: "Clicca sull'area di caricamento, trascina un file su di essa, o incolla un'immagine direttamente dagli appunti.",
			},
			{
				title: "2. Ispeziona qualsiasi pixel",
				body: "Passa il cursore sull'immagine e una lente d'ingrandimento mostra ogni pixel intorno al cursore, ingrandito con il pixel target esatto evidenziato — il suo RGB, HEX e HSL si aggiornano in tempo reale a destra. Puoi anche selezionare l'immagine e usare i tasti freccia.",
			},
			{
				title: "3. Clicca per le opzioni",
				body: "Clicca su un pixel — o premi Invio mentre è selezionato — per aprire le sue opzioni: salvarlo, vederlo a schermo intero (utile per confrontarlo tenendo il telefono vicino a un oggetto reale), copiare tutti i valori insieme, vedere il nome di colore più vicino, o controllare se il testo nero o bianco si legge meglio su di esso.",
			},
			{
				title: "4. Leggi i suggerimenti, la palette e la qualità",
				body: "\"Si abbina bene con\" si aggiorna in tempo reale con campioni complementari, analoghi, triadici e monocromatici per il colore su cui ti trovi. \"Colori dominanti\" estrae i colori principali dall'intera immagine. L'area qualità sotto l'immagine indica se è Bassa, Media, Alta o HD — così sai quanto fidarti di ciò che stai selezionando.",
			},
			{
				title: "5. Salva, esporta o condividi",
				body: "I colori salvati si trovano in una semplice riga di segnalibri — clicca su uno per riportarlo nella lettura in tempo reale. Le palette si esportano come variabili CSS, configurazione Tailwind, JSON o una striscia PNG, e possono essere salvate localmente o condivise con un link.",
			},
		],
	},
	tool: {
		eyebrow: "Selettore di colore da immagine",
		heading: "Carica un'immagine, ottieni ogni colore che contiene",
		intro:
			"Questo selettore di colore da immagine funge anche da cerca-colore da immagine per codici HEX, RGB e HSL. Passa il cursore sulla foto di esempio qui sotto per provarlo, poi carica la tua — niente viene caricato da nessuna parte, viene letto e analizzato interamente nel tuo browser.",
		uploadButton: "Carica immagine",
		pickFromScreen: "Preleva dallo schermo",
		captureScreenshot: "Cattura schermata",
		miniPicker: "Finestra selettore mini",
		dragHint: "oppure trascina e rilascia un file sul pannello sopra, o incolla con Ctrl/Cmd+V",
		canvasAriaLabel: "Canvas immagine — passa il cursore per ispezionare il colore di un pixel, clicca o premi Invio per aprire le opzioni salva, schermo intero e copia",
		qualityHeading: "Qualità immagine",
		qualityLow: "Bassa",
		qualityMedium: "Media",
		qualityHigh: "Alta",
		qualityHD: "HD",
		contrastHeading: "Verificatore di contrasto",
		colorA: "Colore A",
		colorB: "Colore B",
		contrastPlaceholder: "Scegli due colori dall'immagine (tramite il suo menu opzioni) o incolla codici hex per confrontarli.",
		pickerHeading: "Selettore di colore",
		randomColor: "Colore casuale",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Copia",
		saveColor: "Salva colore",
		goesWellWith: "Si abbina bene con",
		goesWellWithSub: "Palette generate in tempo reale dal colore che stai indicando — clicca su un campione per copiarlo.",
		complementary: "Complementare",
		analogous: "Analogo",
		triadic: "Triadico",
		monochromatic: "Monocromatico",
		dominantColors: "Colori dominanti",
		colorsUnit: "colori",
		paletteCountAriaLabel: "Numero di colori della palette",
		savedColors: "Colori salvati",
		savedColorsSub: "Clicca sull'immagine, o selezionala e premi Invio, per le opzioni colore — incluso salvarne uno qui.",
		exportHeading: "Esporta",
		exportCss: "Variabili CSS",
		exportTailwind: "Configurazione Tailwind",
		exportJson: "JSON",
		exportPng: "Scarica striscia PNG",
		historyHeading: "Cronologia",
		paletteNamePlaceholder: "Nome palette",
		save: "Salva",
		copyLink: "Copia link",
	},
	faq: {
		pageEyebrow: "FAQ",
		pageHeading: "Domande frequenti",
		pageIntro:
			"Tutto quello che ci chiedono sulla scelta dei colori da un'immagine, la lettura dei codici HEX e RGB e la creazione di una palette di colori — più qualche domanda sul colore che emerge lungo il percorso.",
		metaDescription:
			"Risposte su come scegliere i colori da un'immagine, leggere i codici HEX e RGB, e creare una palette — più altre domande comuni sul colore.",
		sectionHeading: "Selettore e cerca-colore — domande frequenti",
		viewAll: "Vedi tutte le FAQ",
		items: [
			{
				q: "In cosa è diverso dal selettore di colore di Google?",
				a: "Il selettore di colore integrato di Google ti permette di scegliere da una palette o digitare un codice HEX, ma non può leggere i colori da una foto. Your Color Picker è un selettore di colore da immagine — carica o trascina qualsiasi foto e leggi l'HEX, RGB e HSL esatti di qualsiasi pixel al suo interno.",
			},
			{
				q: "Come trovo il codice HEX di un colore in un'immagine?",
				a: "Carica l'immagine, poi passa il cursore — o trascina il dito su un telefono — su qualsiasi pixel. Il cerca-colore hex si aggiorna in tempo reale mentre ti muovi, e cliccando su quel pixel si aprono le opzioni per copiare il suo HEX, RGB o HSL, salvarlo o vederlo a schermo intero.",
			},
			{
				q: "Cos'è un cerca-colore complementare?",
				a: "Un cerca-colore complementare mostra il colore direttamente opposto a quello scelto sulla ruota dei colori — l'abbinamento a cui i designer ricorrono per primo. Il nostro si aggiorna in tempo reale insieme a suggerimenti analoghi, triadici e monocromatici per qualsiasi colore tu stia visualizzando.",
			},
			{
				q: "Posso ottenere un colore casuale?",
				a: "Sì — il generatore di colori casuali integrato nello strumento genera un nuovo colore HEX, RGB e HSL ogni volta che ti serve un punto di partenza, completo dei suoi suggerimenti di palette abbinati.",
			},
			{
				q: "Questo selettore di colore è gratuito e privato?",
				a: "Sì. È gratuito senza registrazione, e al 100% lato client — la tua immagine viene letta e analizzata interamente nel tuo browser e non viene mai caricata su un server.",
			},
			{
				q: "Cos'è uno strumento di selezione colore?",
				a: "Uno strumento di selezione colore ti permette di scegliere o identificare un colore e ottenere il suo valore digitale — di solito come codice HEX, RGB o HSL — così puoi riutilizzarlo nel tuo lavoro di design. Your Color Picker è un selettore di colore da immagine: carica qualsiasi foto e clicca su un pixel per leggere istantaneamente i suoi valori di colore esatti.",
			},
			{
				q: "Come uso la scorciatoia del selettore di colore?",
				a: "Le scorciatoie integrate del sistema operativo come Win + Shift + C di Windows (PowerToys Color Picker) o il Misuratore di Colore Digitale di macOS ti permettono di campionare qualsiasi pixel sullo schermo. Se preferisci non installare nulla, carica direttamente la tua immagine in Your Color Picker e passa il cursore su di essa nel browser — nessuna scorciatoia o software richiesto.",
			},
			{
				q: "Come uso un cerca-colore?",
				a: "Trascina o carica un'immagine nello strumento, poi muovi il cursore (o il dito su mobile) su qualsiasi parte dell'immagine. Il cerca-colore traccia la tua posizione in tempo reale, mostrando l'HEX, RGB e HSL di quel pixel esatto — clicca per copiare il codice o salvare il colore.",
			},
			{
				q: "Come cambio il colore del Finder su Mac?",
				a: "Se intendi l'app Finder di macOS, vai su Impostazioni di Sistema → Aspetto e cambia il Colore Accento, che tinge la barra laterale, le finestre e gli evidenziatori del Finder — non esiste un'impostazione colore esclusiva per il Finder. Se invece stai cercando di identificare un colore che vedi in una foto, è esattamente per questo che Your Color Picker è stato creato — carica l'immagine e clicca su qualsiasi pixel per ottenere il suo codice esatto.",
			},
			{
				q: "Come uso un cerca-colore true color?",
				a: "\"True color\" si riferisce a una profondità colore completa a 24 bit — oltre 16 milioni di sfumature, corrispondenti a ciò che il tuo schermo mostra effettivamente. Your Color Picker legge i pixel con precisione true color, quindi i valori HEX e RGB che ottieni corrispondono esattamente alla sfumatura nella tua immagine, non a un'approssimazione arrotondata.",
			},
			{
				q: "Che colore è questo?",
				a: "Carica una foto di esso — o uno screenshot, se è sul tuo schermo — in Your Color Picker, poi passa il cursore (o il dito su mobile) sul punto esatto. Lo strumento mostra l'HEX, RGB e HSL di quel pixel in tempo reale, e puoi cliccare per copiarlo o salvarlo. Per un'intera immagine anziché un punto, campiona alcune delle sue aree più prominenti per farti un'idea del suo colore complessivo.",
			},
			{
				q: "Che colore è il tortora (taupe)?",
				a: "Il tortora è un marrone grigiastro smorzato che si colloca tra il grigio e il marrone con una sfumatura calda, spesso intorno a HEX #8B8589 fino a #B38B6D a seconda della tonalità. Le vernici e i tessuti tortora variano parecchio, quindi se hai un campione o una foto di tortora, caricalo qui per ottenere il suo codice HEX esatto invece di affidarti a una stima generica.",
			},
			{
				q: "Come trovo la mia palette di colori?",
				a: "\"Palette di colori\" può significare due cose diverse. Se intendi le tonalità che ti stanno bene personalmente, si tratta dell'analisi della stagione cromatica (Primavera, Estate, Autunno, Inverno, e le loro sottostagioni) — determinata drappeggiando tessuti colorati vicino al viso in luce naturale per vedere cosa esalta meglio la tua pelle, capelli e sottotono degli occhi, sia con uno stilista sia con un quiz di autovalutazione online. Se intendi una palette di design, il modo più preciso è campionare colori reali da una foto di riferimento — caricane una su Your Color Picker e scegli alcuni pixel; ognuno viene con suggerimenti complementari, analoghi e triadici integrati per completare un insieme.",
			},
			{
				q: "Come creo una palette di colori?",
				a: "Parti da un'immagine di riferimento — una foto, un'opera d'arte o una moodboard — e campiona alcuni dei suoi colori con Your Color Picker. Ogni colore che scegli viene con suggerimenti complementari, analoghi e triadici integrati, così puoi costruire una palette coerente intorno a una tonalità di partenza invece di indovinare le combinazioni.",
			},
			{
				q: "Come si trova il colore della propria aura?",
				a: "Il colore dell'aura è un concetto proveniente dalle pratiche di guarigione energetica e spirituale, non una proprietà misurabile o fisica — viene tipicamente valutato tramite fotografia dell'aura (come la fotografia Kirlian) o da praticanti che la leggono in modo intuitivo. Non è correlato ai valori HEX o RGB, che misurano lunghezze d'onda della luce anziché campi energetici.",
			},
			{
				q: "Come identifico un colore di vernice su un muro?",
				a: "Scatta una foto del muro con luce diurna naturale e uniforme — evita ombre e illuminazione artificiale, che alterano la percezione del colore — poi caricala su Your Color Picker e campiona l'area del muro per ottenere il suo HEX e RGB. Schermi e condizioni di luce fanno sì che questo dia una corrispondenza molto vicina piuttosto che un risultato garantito identico al campione, quindi porta l'HEX in un negozio di vernici per la formula più simile.",
			},
			{
				q: "Qual è il miglior strumento gratuito per invertire i colori di un'immagine?",
				a: "Your Color Picker è pensato per identificare e campionare colori da un'immagine, non per invertirli, ma l'inversione dei colori è facile da fare gratuitamente — la maggior parte delle app foto (Anteprima di macOS, Foto di Windows) ha un filtro di inversione integrato, e editor gratuiti come GIMP o Photopea (basati su browser, senza installazione) lo supportano anche come filtro a un clic.",
			},
			{
				q: "Come abbino il colore della cintura?",
				a: "La regola di stile classica è abbinare la cintura alle scarpe — cintura marrone con scarpe marroni, nero con nero — piuttosto che ai pantaloni o alla camicia. Per una corrispondenza esatta tra due articoli specifici, come una particolare tonalità di pelle, fotografa entrambi sotto la stessa luce e confronta i loro codici HEX con Your Color Picker invece di affidarti solo al giudizio visivo.",
			},
			{
				q: "Cos'è il colore RGB?",
				a: "RGB sta per Red, Green, Blue (rosso, verde, blu) — i tre canali di luce che il tuo schermo mescola per creare ogni colore che vedi, ciascuno compreso tra 0 e 255. È un modello di colore additivo costruito per i display digitali, a differenza del modello di mescolanza dei colori che la maggior parte delle persone impara a scuola. Your Color Picker mostra il valore RGB di qualsiasi pixel che campioni da un'immagine.",
			},
			{
				q: "Cos'è HSL in un codice colore?",
				a: "HSL sta per Hue, Saturation e Lightness (tonalità, saturazione e luminosità) — un modo alternativo di descrivere lo stesso colore di HEX o RGB, ma in termini più facili da ragionare: la tonalità è il colore base (0–360° sulla ruota dei colori), la saturazione indica quanto è vivace o smorzato, e la luminosità indica quanto è vicino al nero o al bianco. Spesso è più facile regolare un colore in modo prevedibile in HSL — ridurre la luminosità scurisce una tonalità senza spostarne la tinta, per esempio.",
			},
		],
	},
	about: {
		title: "Chi Siamo — Your Color Picker",
		description:
			"Your Color Picker è un selettore e cerca-colore da immagine gratuito e privato — scopri cosa fa e perché non viene mai caricato nulla.",
		eyebrow: "Chi siamo",
		heading: "Informazioni su Your Color Picker",
		intro: "Uno strumento piccolo e focalizzato per un solo compito: estrarre valori HEX, RGB e HSL esatti da qualsiasi immagine, istantaneamente e in privato.",
		whatHeading: "Cosa fa",
		whatBody:
			"Your Color Picker è un selettore di colore da immagine — carica o trascina una foto, uno screenshot o un mockup di design, poi passa il cursore o tocca ovunque su di esso per leggere il colore esatto di quel pixel come HEX, RGB e HSL. Clicca su un colore per copiare uno qualsiasi di quei codici, salvarlo in una palette, vederlo a schermo intero, o vedere colori complementari, analoghi e triadici suggeriti accanto ad esso. C'è anche un generatore di colori casuali indipendente per quando ti serve solo un punto di partenza.",
		whyHeading: "Perché l'abbiamo creato",
		whyBody:
			"La maggior parte dei selettori di colore ti fa scegliere da un campione o digitare un codice che già conosci — pochi ti permettono di puntare una foto reale e chiedere \"che colore è esattamente questo?\" Abbiamo creato Your Color Picker per rispondere a questa domanda in pochi secondi, senza chiederti di installare software, creare un account o caricare nulla su un server.",
		howHeading: "Come funziona",
		howBody:
			"Tutto funziona lato client nel tuo browser tramite l'API HTML Canvas. La tua immagine viene decodificata e letta localmente sul tuo dispositivo — non viene mai trasmessa da nessuna parte, perché non c'è alcun passaggio di caricamento nel processo. I colori salvati vivono nell'archiviazione locale del tuo browser, quindi rimangono sul tuo dispositivo e scompaiono se cancelli i dati del browser. Consulta la nostra {{link}} per tutti i dettagli.",
		howLinkLabel: "Informativa sulla Privacy",
		whoHeading: "Per chi è",
		whoBody:
			"Designer che abbinano un codice HEX da un'immagine di riferimento, sviluppatori che estraggono colori del brand da uno screenshot, imbianchini e decoratori che verificano il colore di un muro o di un tessuto da una foto, e chiunque abbia mai guardato qualcosa chiedendosi esattamente di che tonalità si tratti.",
		questionsHeading: "Domande?",
		questionsFaqBody: "Consulta le nostre {{link}} per le domande comuni.",
		questionsFaqLinkLabel: "FAQ",
		questionsContactBody: "Oppure {{link}} direttamente — leggiamo ogni messaggio.",
		questionsContactLinkLabel: "contattaci",
	},
	contact: {
		title: "Contattaci — Your Color Picker",
		description: "Mettiti in contatto per Your Color Picker — segnalazioni di bug, richieste di funzionalità o feedback generale. Leggiamo ogni messaggio.",
		eyebrow: "Contatti",
		heading: "Contattaci",
		intro: "Hai trovato un bug, hai un'idea per una funzionalità, o vuoi solo salutare? Inviaci un messaggio — leggiamo tutto ciò che arriva.",
		emailHeading: "Scrivici",
		sendEmailButton: "Invia un'email",
		includeHeading: "Cosa includere",
		includeBody:
			"Per le segnalazioni di bug, facci sapere quale dispositivo e browser stai usando e, se puoi, cosa stavi facendo appena prima che apparisse il problema. Per richieste di funzionalità o feedback generale, dicci semplicemente cosa ti sarebbe utile — leggiamo ogni messaggio e cerchiamo di rispondere entro pochi giorni lavorativi.",
		beforeHeading: "Prima di scriverci",
		beforeFaqBody: "Le domande rapide su come funziona lo strumento hanno spesso già una risposta nella nostra {{link}}.",
		beforeFaqLinkLabel: "pagina FAQ",
		beforePrivacyBody: "Per domande su come vengono gestiti i tuoi dati, consulta la nostra {{link}}.",
		beforePrivacyLinkLabel: "Informativa sulla Privacy",
	},
	privacy: {
		title: "Informativa sulla Privacy — Your Color Picker",
		description:
			"Informativa sulla privacy di Your Color Picker: le tue immagini vengono elaborate interamente nel tuo browser e non vengono mai caricate, trasmesse o memorizzate su un server.",
		eyebrow: "Legale",
		heading: "Informativa sulla Privacy",
		lastUpdatedPrefix: "Ultimo aggiornamento:",
		shortHeading: "La versione breve",
		shortBody:
			"Your Color Picker funziona interamente nel tuo browser. Qualsiasi immagine che carichi viene letta e analizzata localmente sul tuo dispositivo tramite l'API Canvas — non viene mai caricata, trasmessa o memorizzata su alcun server, perché questo sito non ha alcun componente lato server in questo flusso. Usiamo Google Analytics per capire il traffico complessivo del sito — vedi \"Cookie e tracciamento\" qui sotto per i dettagli.",
		imagesHeading: "Immagini che carichi",
		imagesBody:
			"Quando carichi o trascini un'immagine, viene decodificata e visualizzata direttamente nella memoria del tuo browser per far funzionare il selettore di colore. Non viene inviata in rete a noi o a terzi. Chiudere o aggiornare la scheda scarta completamente l'immagine.",
		storageHeading: "Cosa memorizziamo localmente",
		storageBody:
			"Lo strumento usa l'archiviazione locale del tuo browser — una tecnologia web standard, non un cookie — per ricordare due cose sul tuo dispositivo: la tua preferenza di tema chiaro/scuro, e qualsiasi colore che scegli di salvare mentre usi lo strumento. Questi dati non lasciano mai il tuo dispositivo, non sono mai visibili a noi, e vengono rimossi automaticamente se cancelli i dati del sito nel tuo browser.",
		cookiesHeading: "Cookie e tracciamento",
		cookiesBody:
			"Usiamo Google Analytics per capire il traffico complessivo — per esempio, quali pagine sono popolari e approssimativamente da dove provengono i visitatori. Imposta cookie e può raccogliere informazioni come la tua posizione approssimativa, il tipo di dispositivo e browser, e le pagine che visiti. Questo è completamente separato dallo strumento colore stesso: le tue immagini e i colori che campioni non vengono mai inviati a Google o a chiunque altro. Puoi disattivarlo usando il {{optout}}, o consultare la {{privacy}} per i dettagli su come Google gestisce questi dati.",
		cookiesOptoutLabel: "componente aggiuntivo del browser per la disattivazione di Google Analytics",
		cookiesGooglePrivacyLabel: "Informativa sulla Privacy di Google",
		hostingHeading: "Hosting e log del server",
		hostingBody:
			"Come qualsiasi sito web, il nostro fornitore di hosting potrebbe conservare log di accesso standard del server (come indirizzo IP, tipo di browser e timestamp delle richieste) per motivi di sicurezza e affidabilità. Questi log sono generati dall'infrastruttura di hosting stessa, non dal codice di questo sito, e non sono correlati a nessun dato di immagine o colore — nulla di ciò raggiunge mai un server.",
		childrenHeading: "Privacy dei minori",
		childrenBody:
			"Your Color Picker non raccoglie consapevolmente informazioni personali da nessuno, inclusi i minori, perché non raccoglie informazioni personali in alcun modo — non c'è alcun sistema di account e nulla di ciò che inserisci ci viene trasmesso.",
		changesHeading: "Modifiche a questa informativa",
		changesBody:
			"Se questa informativa cambia, aggiorneremo la data di \"ultimo aggiornamento\" sopra. Modifiche significative — come l'aggiunta di qualsiasi forma di raccolta dati — saranno riflesse chiaramente in questa pagina.",
		contactHeading: "Contatti",
		contactBody: "Domande su questa informativa? Contattaci a {{email}} o tramite la nostra {{link}}.",
		contactLinkLabel: "pagina contatti",
	},
	terms: {
		title: "Termini e Condizioni — Your Color Picker",
		description: "I termini e condizioni per l'uso di Your Color Picker, un selettore di colore e cerca-colore da immagine gratuito basato su browser.",
		eyebrow: "Legale",
		heading: "Termini e condizioni",
		lastUpdatedPrefix: "Ultimo aggiornamento:",
		acceptanceHeading: "Accettazione dei termini",
		acceptanceBody:
			"Usando Your Color Picker (\"lo strumento\", \"il sito\"), accetti questi termini. Se non sei d'accordo con essi, ti preghiamo di non usare il sito.",
		useHeading: "Uso del servizio",
		useBody:
			"Your Color Picker è gratuito da usare, per scopi personali o commerciali, senza registrazione richiesta. Accetti di usarlo solo per scopi legali e di non tentare di interromperlo, decompilarlo per scopi malevoli, o abusare del servizio in un modo che lo comprometta per altri utenti.",
		contentHeading: "Le tue immagini e contenuti",
		contentBody:
			"Qualsiasi immagine che usi con lo strumento viene elaborata interamente nel tuo browser e non ci viene mai caricata — non la riceviamo, memorizziamo o vi abbiamo accesso, quindi non rivendichiamo alcun diritto su di essa. Sei l'unico responsabile di assicurarti di avere il diritto di usare qualsiasi immagine che carichi nello strumento. Consulta la nostra {{link}} per saperne di più su come lo strumento gestisce i dati.",
		contentLinkLabel: "Informativa sulla Privacy",
		warrantyHeading: "Nessuna garanzia",
		warrantyBody:
			"Your Color Picker è fornito \"così com'è\", senza garanzia di alcun tipo, espressa o implicita. Sebbene miriamo a che i valori di colore riportati siano accurati, non garantiamo una precisione perfetta per ogni immagine, dispositivo o display — la calibrazione dello schermo, la compressione dell'immagine e i profili colore possono tutti influenzare i valori esatti che vedi. Non affidarti ad esso come unica fonte per decisioni in cui la precisione del colore è critica (per esempio, produzione finale di vernice o stampa) senza verifica indipendente.",
		liabilityHeading: "Limitazione di responsabilità",
		liabilityBody:
			"Nella misura massima consentita dalla legge, non siamo responsabili per alcun danno indiretto, incidentale o consequenziale derivante dal tuo uso, o impossibilità di usare, il sito o lo strumento.",
		linksHeading: "Link a terze parti",
		linksBody:
			"Le pagine di questo sito possono collegarsi a risorse di terze parti per contesto. Non siamo responsabili per il contenuto, l'accuratezza o le pratiche di alcun sito che non gestiamo.",
		changesHeading: "Modifiche al servizio o a questi termini",
		changesBody:
			"Potremmo aggiornare lo strumento o questi termini in qualsiasi momento. L'uso continuato del sito dopo la pubblicazione delle modifiche significa che accetti i termini aggiornati. Aggiorneremo la data di \"ultimo aggiornamento\" sopra ogni volta che questa pagina cambia.",
		contactHeading: "Contatti",
		contactBody: "Domande su questi termini? Contattaci a {{email}} o tramite la nostra {{link}}.",
		contactLinkLabel: "pagina contatti",
	},
	toolsHub: {
		title: "Tutti gli Strumenti di Colore | Your Color Picker",
		description:
			"Tutti gli strumenti di colore gratuiti in un unico posto: selettore di colore, convertitore, generatore di gradienti, verificatore di contrasto, simulatore di daltonismo, mixer e altro.",
		eyebrow: "Strumenti",
		heading: "Tutti gli strumenti",
		guidesHeading: "Guide",
		intro: "Tutti gli strumenti di colore gratuiti di questo sito, in un unico posto.",
		items: [
			{
				title: "Selettore di Colore da Immagine",
				body: "Carica una foto e leggi l'HEX, RGB e HSL esatti di qualsiasi pixel, con una lente d'ingrandimento e l'estrazione completa della palette.",
			},
			{
				title: "Convertitore di Colore",
				body: "Converti qualsiasi colore tra HEX, RGB, HSL e HSV istantaneamente — modifica qualsiasi campo e gli altri si aggiornano in tempo reale.",
			},
			{
				title: "Generatore di Gradienti",
				body: "Scegli due o più colori, visualizza in anteprima un gradiente CSS dal vivo, e copia il codice finito.",
			},
			{
				title: "Verificatore di Contrasto",
				body: "Controlla il rapporto di contrasto WCAG tra un colore di testo e uno di sfondo, con risultati AA/AAA in tempo reale.",
			},
			{
				title: "Simulatore di Daltonismo",
				body: "Carica un'immagine per vederla simulata per protanopia, deuteranopia e tritanopia fianco a fianco.",
			},
			{
				title: "Mixer di Colori",
				body: "Mescola due colori in qualsiasi proporzione per trovare il colore esatto tra di essi.",
			},
			{
				title: "Generatore di Sfumature e Tonalità",
				body: "Genera una scala completa di luminosità — tonalità verso il bianco e sfumature verso il nero — da un colore base.",
			},
			{
				title: "Generatore di Colore Casuale",
				body: "Genera un colore HEX, RGB e HSL casuale con un clic, più suggerimenti di palette abbinati.",
			},
			{
				title: "Esplora Colori",
				body: "Esplora ogni colore standard con nome CSS con il suo codice HEX — ricercabile, clicca per copiare.",
			},
			{
				title: "Generatore di Palette",
				body: "Crea una palette di colori completa — complementare, analoga, triadica e monocromatica — da un colore base, pronta da esportare.",
			},
		],
	},
	relatedTools: {
		heading: "Strumenti correlati",
	},
	colorConverterTool: {
		title: "Convertitore di Colore — HEX, RGB, HSL, HSV | Your Color Picker",
		description: "Converti qualsiasi colore tra HEX, RGB, HSL e HSV istantaneamente. Modifica qualsiasi campo e ogni altro formato si aggiorna in tempo reale, con copia a un clic.",
		eyebrow: "Strumento",
		heading: "Convertitore di Colore",
		intro: "Digita un colore in qualsiasi campo qui sotto — HEX, RGB, HSL o HSV — e gli altri tre si aggiornano in tempo reale. Clicca su qualsiasi formato per copiarlo.",
		explainerHeading: "Cos'è HSV rispetto a HSL?",
		explainerBody:
			"Entrambi descrivono lo stesso spazio colore con tonalità, saturazione e un terzo canale — ma il terzo valore di HSL è la luminosità (quanto è vicino al nero o al bianco), mentre quello di HSV è il valore (quanto è vicino al nero, indipendentemente dal bianco). HSV è comune nei selettori di colore del software di design; HSL è più comune nel CSS.",
		help: {
			title: "Come usare il Convertitore di Colore",
			steps: [
				{ title: "1. Digita un colore", body: "Inserisci un valore in qualsiasi campo — HEX, RGB, HSL o HSV." },
				{
					title: "2. Osserva gli altri aggiornarsi",
					body: "Gli altri tre formati si aggiornano in tempo reale per corrispondere, così puoi leggere lo stesso colore in qualsiasi formato.",
				},
				{ title: "3. Copia ciò che ti serve", body: "Clicca su Copia accanto a qualsiasi formato per copiare quel valore esatto negli appunti." },
			],
		},
	},
	gradientMakerTool: {
		title: "Generatore di Gradienti — Crea un Gradiente CSS | Your Color Picker",
		description: "Crea un gradiente CSS lineare o radiale da due o più colori, visualizzalo in anteprima dal vivo, e copia il CSS esatto.",
		eyebrow: "Strumento",
		heading: "Generatore di Gradienti",
		intro: "Aggiungi colori, scegli lineare o radiale, e copia il gradiente CSS finito.",
		explainerHeading: "Perché usare un gradiente CSS?",
		explainerBody:
			"I gradienti danno profondità a uno sfondo piatto senza dover caricare un'immagine — molto usati in sezioni hero, pulsanti e overlay. I gradienti lineari mescolano i colori lungo una linea retta con qualsiasi angolazione; quelli radiali si espandono da un punto centrale. Imposta qui i tuoi colori e copia il CSS esatto, pronto da incollare in qualsiasi foglio di stile.",
		addColor: "+ Aggiungi colore",
		linear: "Lineare",
		radial: "Radiale",
		angle: "Angolo",
		cssHeading: "CSS",
		copyCss: "Copia CSS",
		remove: "Rimuovi",
		help: {
			title: "Come usare il Generatore di Gradienti",
			steps: [
				{ title: "1. Aggiungi i tuoi colori", body: "Inizia con due colori, o clicca su + Aggiungi colore per un massimo di cinque punti." },
				{ title: "2. Scegli uno stile", body: "Scegli Lineare (con angolo regolabile) o Radiale." },
				{ title: "3. Copia il CSS", body: "Il CSS esatto si aggiorna in tempo reale qui sotto — clicca su Copia CSS quando sei soddisfatto." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Simulatore di Daltonismo | Your Color Picker",
		description: "Carica un'immagine e scopri come appare alle persone con protanopia, deuteranopia o tritanopia.",
		eyebrow: "Strumento",
		heading: "Simulatore di Daltonismo",
		intro: "Carica un'immagine per vederla simulata per i tre tipi comuni di deficit della visione dei colori, fianco a fianco con l'originale.",
		dropHint: "Trascina e rilascia un'immagine qui, o usa il pulsante qui sotto",
		uploadNote: "Niente viene caricato da nessuna parte — funziona interamente nel tuo browser.",
		original: "Originale",
		protanopia: "Protanopia (cecità al rosso)",
		deuteranopia: "Deuteranopia (cecità al verde)",
		tritanopia: "Tritanopia (cecità al blu)",
		whyHeading: "Perché è importante",
		whyBody:
			"Circa 1 uomo su 12 e 1 donna su 200 hanno una qualche forma di deficit della visione dei colori. Simulare protanopia, deuteranopia e tritanopia aiuta i designer a verificare che grafici, stati dell'interfaccia e diagrammi non si basino solo sul colore per comunicare significato.",
		help: {
			title: "Come usare il Simulatore di Daltonismo",
			steps: [
				{ title: "1. Carica un'immagine", body: "Trascina una foto sul pannello, o usa il pulsante di caricamento." },
				{
					title: "2. Confronta le quattro viste",
					body: "La tua immagine originale appare insieme alle simulazioni di protanopia, deuteranopia e tritanopia.",
				},
				{
					title: "3. Controlla il tuo design",
					body: "Cerca informazioni che passano solo attraverso il colore — è questo che rivelano queste simulazioni.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Esplora Colori — Palette di Colori con Nome | Your Color Picker",
		description: "Esplora tutti i colori standard con nome CSS con i loro codici HEX. Clicca su qualsiasi campione per copiarne il valore HEX.",
		eyebrow: "Strumento",
		heading: "Esplora Colori",
		introPrefix: "Ogni colore standard con nome CSS (",
		introSuffix: " in totale), con il suo codice HEX. Clicca su un campione per copiarlo.",
		searchPlaceholder: "Cerca per nome o hex…",
		empty: "Nessun colore corrisponde alla tua ricerca.",
		help: {
			title: "Come usare Esplora Colori",
			steps: [
				{ title: "1. Scorri o cerca", body: "Esplora l'intera griglia, o digita un nome o codice hex nella casella di ricerca per filtrarla." },
				{ title: "2. Clicca per copiare", body: "Clicca su qualsiasi campione per copiare il suo codice HEX negli appunti." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Verificatore di Contrasto WCAG AA/AAA | Your Color Picker",
		description: "Controlla il rapporto di contrasto WCAG tra due colori per un testo accessibile, con risultati AA e AAA in tempo reale.",
		eyebrow: "Strumento",
		heading: "Verificatore di Contrasto",
		intro: "Inserisci un colore di testo e un colore di sfondo per controllare il loro rapporto di contrasto WCAG per un design accessibile.",
		explainerHeading: "Perché il rapporto di contrasto è importante",
		explainerBody:
			"Le WCAG definiscono rapporti di contrasto minimi affinché il testo resti leggibile per persone ipovedenti o daltoniche: 4,5:1 per il testo normale e 3:1 per il testo grande al livello AA, fino a 7:1 e 4,5:1 al livello AAA, più rigoroso. Verificare la tua combinazione di testo e sfondo rispetto a queste soglie è uno dei modi più semplici per rendere un design più accessibile.",
		textLabel: "Testo",
		backgroundLabel: "Sfondo",
		largeSample: "Campione di testo grande (24px)",
		normalSample: "Campione di testo normale (14px) — ma la volpe, col suo balzo, ha raggiunto il quieto Fido.",
		enterValid: "Inserisci due colori hex validi (es. #171717) per confrontarli.",
		normalTextRow: "Testo normale —",
		largeTextRow: "Testo grande —",
		pass: "superato",
		fail: "non superato",
		help: {
			title: "Come usare il Verificatore di Contrasto",
			steps: [
				{ title: "1. Imposta due colori", body: "Scegli un colore di testo e uno di sfondo usando i selettori o i campi hex." },
				{ title: "2. Leggi il rapporto", body: "Il rapporto di contrasto e l'anteprima dal vivo si aggiornano istantaneamente." },
				{
					title: "3. Controlla il superamento WCAG",
					body: "Vedi a colpo d'occhio se la tua combinazione supera AA o AAA per testo normale e grande.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Generatore di Colore Casuale | Your Color Picker",
		description: "Genera un colore HEX, RGB e HSL casuale con un clic, completo di suggerimenti complementari e analoghi abbinati.",
		eyebrow: "Strumento",
		heading: "Generatore di Colore Casuale",
		intro: "Clicca su Genera per un nuovo colore casuale, con suggerimenti di palette abbinati.",
		explainerHeading: "Quando un colore casuale è utile",
		explainerBody:
			"A volte la parte più difficile nello scegliere un colore è trovare un punto di partenza. Generare un codice HEX, RGB e HSL casuale — insieme alle sue combinazioni complementari e analoghe — ti dà qualcosa di concreto su cui reagire e affinare, invece di fissare un selettore di colore vuoto.",
		generate: "Genera colore casuale",
		help: {
			title: "Come usare il Generatore di Colore Casuale",
			steps: [
				{ title: "1. Clicca su Genera", body: "Ottieni istantaneamente un nuovo colore HEX, RGB e HSL casuale." },
				{ title: "2. Copia qualsiasi formato", body: "Clicca su Copia accanto al valore di cui hai bisogno." },
				{
					title: "3. Esplora gli abbinamenti",
					body: "I suggerimenti complementari, analoghi e triadici si aggiornano in base al tuo nuovo colore.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Mixer di Colori | Your Color Picker",
		description: "Mescola due colori in qualsiasi proporzione per trovare il colore tra di essi, con output HEX, RGB e HSL in tempo reale.",
		eyebrow: "Strumento",
		heading: "Mixer di Colori",
		intro: "Scegli due colori e una proporzione di miscelazione per trovare il colore tra di essi.",
		explainerHeading: "Come funziona questa miscelazione di colori",
		explainerBody:
			"Questo mixer combina due colori nello spazio RGB secondo il rapporto scelto, invece di simulare la mescola di pittura o pigmenti — quindi un mix 50/50 di rosso e blu dà un viola pulito, proprio come i colori si combinano davvero a schermo. Utile per trovare una tonalità intermedia tra i due colori principali di un brand, o per anteprima uno stato hover.",
		colorA: "Colore A",
		colorB: "Colore B",
		blendRatio: "Proporzione di miscelazione",
		help: {
			title: "Come usare il Mixer di Colori",
			steps: [
				{ title: "1. Scegli il Colore A e B", body: "Scegli due colori usando i selettori o i campi hex." },
				{ title: "2. Regola la proporzione", body: "Trascina il cursore per miscelare di più verso un colore o l'altro." },
				{
					title: "3. Copia il risultato",
					body: "L'HEX, RGB e HSL del colore miscelato si aggiornano in tempo reale — copia quello di cui hai bisogno.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Generatore di Sfumature e Tonalità | Your Color Picker",
		description: "Genera una scala completa di tonalità (verso il bianco) e sfumature (verso il nero) da un colore base, pronta da copiare.",
		eyebrow: "Strumento",
		heading: "Generatore di Sfumature e Tonalità",
		intro: "Scegli un colore base per generare una scala completa di luminosità — da tonalità quasi bianche a sfumature quasi nere.",
		explainerHeading: "Tinte chiare vs. tinte scure",
		explainerBody:
			"Una tinta chiara è il tuo colore base mescolato verso il bianco — più chiaro e morbido, utile per sfondi e stati hover. Una tinta scura è lo stesso colore mescolato verso il nero — più scuro e intenso, utile per testo o bordi che devono restare riconoscibilmente legati al colore base. Generare una rampa completa di entrambe ti dà un set coerente su cui costruire una scala di colori.",
		tints: "Tonalità (verso il bianco)",
		base: "Base",
		shades: "Sfumature (verso il nero)",
		help: {
			title: "Come usare il Generatore di Sfumature e Tonalità",
			steps: [
				{ title: "1. Scegli un colore base", body: "Scegli qualsiasi colore usando il selettore o il campo hex." },
				{
					title: "2. Leggi la scala",
					body: "Tonalità (verso il bianco) e sfumature (verso il nero) vengono generate automaticamente intorno alla tua base.",
				},
				{ title: "3. Copia qualsiasi campione", body: "Clicca su qualsiasi campione nella scala per copiare il suo codice HEX." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Generatore di Palette — Schemi di Colore | Your Color Picker",
		description:
			"Genera una palette di colori completa da qualsiasi colore base — schemi complementare, analogo, triadico e monocromatico, pronti da esportare come CSS, Tailwind o JSON.",
		eyebrow: "Strumento",
		heading: "Generatore di Palette",
		explainerHeading: "Complementare, analoga e triadica, spiegate",
		explainerBody:
			"Sono relazioni classiche della ruota dei colori: i complementari si trovano uno di fronte all'altro per il massimo contrasto, gli analoghi sono vicini per un look calmo e coerente, e le triadi distribuiscono tre colori a distanza uniforme sulla ruota per una varietà equilibrata. Partendo da un colore base e generando tutte e tre, ottieni diverse direzioni già pronte tra cui scegliere.",
		intro:
			"Scegli un colore base o generane uno casuale, poi esplora le palette complementari, analoghe, triadiche e monocromatiche create a partire da esso — esportane una qualsiasi quando sei pronto.",
		baseColorLabel: "Colore base",
		randomize: "Casuale",
		exportHeading: "Esporta",
		help: {
			title: "Come usare il Generatore di Palette",
			steps: [
				{ title: "1. Scegli un colore base", body: "Scegli un colore con il selettore o il campo hex, o clicca su Casuale per un punto di partenza." },
				{
					title: "2. Esplora gli schemi",
					body: "Le palette complementare, analoga, triadica e monocromatica si generano automaticamente dal tuo colore base.",
				},
				{
					title: "3. Esporta o copia",
					body: "Clicca su qualsiasi campione per copiarne il codice HEX, o esporta l'intera palette come variabili CSS, configurazione Tailwind o JSON.",
				},
			],
		},
	},
	eyedropperGuide: {
		title: "Contagocce Online — Scegli Qualsiasi Colore | Your Color Picker",
		description:
			"Contagocce online gratuito: scegli qualsiasi colore dallo schermo o da un'immagine e ottieni subito i codici HEX, RGB e HSL. 100% privato, non viene caricato nulla.",
		eyebrow: "Guida",
		heading: "Contagocce Online",
		intro: "Scegli qualsiasi colore dallo schermo, da uno screenshot o da una foto, direttamente nel browser — senza estensioni né installazioni.",
		explainerHeading: "Come funziona il contagocce",
		explainerBody:
			"Questo contagocce usa gli strumenti di selezione colore integrati nel browser per campionare un pixel in qualsiasi punto dello schermo, oppure ti permette di caricare un'immagine e cliccare direttamente su un pixel. In entrambi i casi ottieni subito il valore esatto in HEX, RGB e HSL, pronto da incollare nel tuo strumento di design, nel CSS o nell'editor di codice.",
		faqHeading: "Domande frequenti",
		faq: [
			{
				q: "Questo contagocce funziona su mobile?",
				a: "Scegliere un colore da un'immagine caricata funziona su qualsiasi dispositivo, inclusi telefoni e tablet. Il prelievo diretto dallo schermo usa una funzione del browser (l'API EyeDropper) attualmente supportata da Chrome, Edge e altri browser basati su Chromium su desktop.",
			},
			{
				q: "Qualcosa viene caricato su un server?",
				a: "No. Ogni pixel viene letto localmente nel browser tramite l'API Canvas — la tua immagine e il tuo schermo non lasciano mai il tuo dispositivo.",
			},
			{
				q: "Che formati di colore ottengo?",
				a: "HEX, RGB e HSL per ogni colore scelto, ciascuno con un pulsante per copiarlo con un clic.",
			},
		],
	},
	hexFromImageGuide: {
		title: "Ottieni il Codice HEX da un'Immagine | Your Color Picker",
		description:
			"Carica qualsiasi foto e ottieni subito il codice HEX esatto di qualsiasi pixel, oltre a RGB, HSL e una palette completa. Gratuito e 100% privato — nulla lascia il tuo dispositivo.",
		eyebrow: "Guida",
		heading: "Ottieni il Codice HEX da Qualsiasi Immagine",
		intro: "Carica una foto, uno screenshot o un logo e clicca su qualsiasi pixel per leggerne il codice HEX esatto, insieme a RGB, HSL e una palette di colori abbinata.",
		explainerHeading: "Come trovare un codice HEX in una foto",
		explainerBody:
			"Trascina un'immagine nello strumento qui sotto, poi clicca o passa il cursore su qualsiasi pixel per leggerne il colore esatto. HEX, RGB e HSL si aggiornano all'istante, e puoi estrarre una palette completa dall'immagine con un clic. Tutto avviene nel tuo browser, quindi l'immagine non viene mai caricata su un server.",
		faqHeading: "Domande frequenti",
		faq: [
			{
				q: "Posso ottenere il codice HEX da uno screenshot?",
				a: "Sì — carica uno screenshot come faresti con qualsiasi foto, poi clicca sul pixel di cui vuoi il codice HEX.",
			},
			{
				q: "Funziona con un logo o un PNG trasparente?",
				a: "Sì, funziona con immagini PNG, JPG e WebP, compresi i PNG trasparenti — le aree trasparenti vengono lette come il colore del pixel sottostante.",
			},
			{
				q: "La mia immagine viene caricata da qualche parte?",
				a: "No. L'immagine viene decodificata e letta interamente nel tuo browser tramite l'API Canvas — non lascia mai il tuo dispositivo.",
			},
		],
	},
	notFound: {
		title: "Pagina Non Trovata — Your Color Picker",
		description: "La pagina che stai cercando non esiste. Torna a Your Color Picker per trovare i colori HEX, RGB e HSL da qualsiasi immagine.",
		eyebrow: "404",
		heading: "Pagina non trovata",
		intro: "La pagina che stai cercando non esiste, potrebbe essere stata spostata, o l'URL contiene un errore di battitura.",
		homeButton: "Vai alla homepage",
		tryHeading: "Oppure prova una di queste",
		tryTool: "Usa lo strumento selettore di colore",
		tryFaq: "Sfoglia le FAQ",
		tryAbout: "Informazioni su Your Color Picker",
		tryContact: "Contattaci",
	},
};
