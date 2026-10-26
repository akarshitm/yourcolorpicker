---
title: "La Ricerca sul Colore nel 2026: Cosa Hanno Scoperto gli Scienziati"
description: "Da una teoria di Schrödinger vecchia di 100 anni finalmente completata al perché gli schermi ad ampia gamma appaiono diversi a persone diverse: le scoperte della scienza del colore del 2026 che contano per i designer."
publishDate: 2026-10-24
relatedTool:
  label: "Prova il simulatore di daltonismo"
  href: "/it/color-blindness-simulator"
---

Il colore sembra un problema risolto. Abbiamo codici hex, cerchi cromatici e formule di contrasto, e quasi sempre funzionano. Ma il 2026 è stato un anno intenso per la scienza del colore, e diverse scoperte cambiano il modo in cui pensiamo a qualcosa che i designer gestiscono ogni giorno: come le persone vedono davvero il colore.

Ecco gli sviluppi che vale la pena conoscere e cosa significa ciascuno se lavori con il colore.

## 1. Il tuo schermo "calibrato" potrebbe non apparire uguale a tutti

Nell'ottobre 2026, i ricercatori Andy Rider e Andrew Stockman dell'Institute of Ophthalmology dell'University College London hanno pubblicato su *Optics Express* uno studio che spiega una frustrazione nota a molti nel cinema e nel design. Due schermi vengono calibrati per corrispondere, eppure appaiono diversi, e osservatori diversi non concordano su quale sia quello "giusto".

Il team ha costruito un modello computazionale della visione umana dei colori che tiene conto delle **differenze individuali** tra osservatori. Alcune di queste differenze sono lievi deficit della visione rosso-verde. Altre dipendono dall'età, perché il cristallino filtra più luce blu man mano che invecchiamo. Hanno poi fatto passare 16 schermi attraverso il modello, dai televisori consumer ai monitor professionali per il cinema e ai proiettori da sala.

Il risultato: **gli schermi moderni ad ampia gamma variano di più da persona a persona rispetto a quelli più vecchi.** Gli schermi ad ampia gamma usano sorgenti luminose rosse, verdi e blu a banda molto stretta. Queste sorgenti possono mostrare colori più vividi, ma amplificano anche le piccole differenze tra gli occhi degli osservatori. Il primario blu è quello che genera più disaccordo tra osservatori anziani e giovani; i primari rosso e verde influiscono soprattutto sulle persone con diversi tipi di deficit rosso-verde.

Parte del problema è che la maggior parte degli strumenti di calibrazione si basa su standard di corrispondenza cromatica di circa un secolo fa, che non rappresentano bene la visione tipica. Come ha detto Rider, questo "può far sembrare sbagliati gli schermi moderni anche quando sono stati calibrati per apparire uguali".

**Cosa significa per te:** un colore che appare perfetto sul tuo monitor è la visione di una persona su un dispositivo. I ricercatori precisano che le loro previsioni devono ancora essere testate con osservatori reali. Detto questo, le abitudini più sicure sono quelle che i designer già conoscono: controlla i colori importanti su più di un dispositivo e non far dipendere il significato solo da sottili differenze di tonalità.

## 2. La teoria del colore di Schrödinger è finalmente completa

Circa un secolo fa, il fisico Erwin Schrödinger, più noto per il suo gatto, propose che le qualità che percepiamo in un colore potessero essere descritte in modo puramente matematico. Queste qualità sono la **tonalità**, la **saturazione** e la **luminosità**. Il suo modello però aveva una lacuna: non definì mai formalmente l'**asse neutro**, la linea di grigi che va dal nero al bianco. Senza di esso, le definizioni di tonalità e saturazione non stavano in piedi.

Un team del Los Alamos National Laboratory guidato da Roxana Bujack ha ora colmato questa lacuna. Il lavoro è stato presentato alla Eurographics Conference on Visualization e pubblicato su *Computer Graphics Forum*. I ricercatori hanno definito l'asse neutro in modo geometrico e hanno anche tenuto conto di due note particolarità della visione umana:

- **L'effetto Bezold–Brücke:** la tonalità percepita di un colore cambia quando diventa più luminoso o più scuro.
- **Rendimenti decrescenti:** le grandi differenze di colore vengono percepite come più piccole della somma dei piccoli passi che le compongono.

La loro conclusione è che tonalità, saturazione e luminosità "non derivano da costrutti esterni aggiuntivi come esperienze culturali o apprese". Derivano dalla geometria con cui percepiamo la distanza tra i colori.

**Cosa significa per te:** è la teoria alla base dell'esistenza degli spazi colore percettivi. Se hai notato che la luminosità HSL non corrisponde a quanto i colori appaiono davvero chiari, ti sei imbattuto nel problema che questa ricerca affronta. (La nostra guida su [HEX vs RGB vs HSL](/it/blog/hex-vs-rgb-vs-hsl) copre il lato pratico.) Modelli matematici migliori della percezione portano, col tempo, a spazi colore, sfumature e palette per la visualizzazione dei dati migliori.

## 3. I modelli di visione IA non vedono il colore come noi

Con la diffusione degli strumenti di immagine basati sull'IA, sorge spontanea una domanda: "vedono" il colore come le persone? Un preprint di luglio 2026 su arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, l'ha verificato direttamente.

I ricercatori hanno testato oltre 50 modelli di visione preaddestrati, tra cui reti convoluzionali e vision transformer. Hanno misurato la più piccola differenza di colore che ogni modello riusciva a rilevare e l'hanno confrontata con le soglie di discriminazione umane misurate in decenni di esperimenti di laboratorio.

La risposta è stata un chiaro **no**. L'allineamento con la sensibilità umana al colore è risultato debole in tutte le famiglie di modelli. I modelli addestrati senza etichette (auto-supervisionati) se la sono cavata un po' meglio di quelli supervisionati tradizionali. I modelli addestrati su immagini abbinate a testo si sono piazzati sia in cima sia in fondo alla classifica. Gli autori concludono che una sensibilità al colore simile a quella umana non emerge da sola con gli attuali metodi di addestramento.

**Cosa significa per te:** fai attenzione ad affidarti a strumenti di IA per giudizi in cui il colore è critico, come capire se due sfumature sono distinguibili o se una palette funziona per tutti. Per le domande con una risposta misurabile, usa una misura. Un [verificatore di contrasto](/it/contrast-checker) ti dà un rapporto esatto, e un selettore di colori un valore esatto. Tieni presente che questo articolo è un preprint e non ha ancora superato la revisione paritaria.

## 4. Il contrasto è arrivato direttamente nel CSS

Sul piano pratico, uno dei cambiamenti più importanti dell'anno per i web designer è arrivato dai browser invece che dai laboratori. Ad aprile 2026, la funzione CSS `contrast-color()` ha raggiunto lo stato **Baseline**, il che significa che ora funziona in tutti i principali motori di browser.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

Le passi un colore di sfondo e restituisce nero o bianco, quello che contrasta di più. Matematicamente, la migliore tra le due opzioni raggiunge sempre almeno circa 4.5:1. Ciò significa che il risultato rispetta il livello WCAG AA per il testo normale, ma non necessariamente il più severo livello AAA di 7:1. Non tiene conto degli altri colori del tuo brand, quindi è una rete di sicurezza, non una decisione di design.

Nel frattempo, il tanto discusso metodo di contrasto **APCA** resta sperimentale. Le WCAG 3 sono ancora una bozza, e una Raccomandazione finale del W3C non è attesa prima del 2028. Per la conformità di oggi, i rapporti delle WCAG 2 restano lo standard. La nostra [guida al contrasto WCAG](/it/blog/wcag-contrast-guide) li spiega.

## Il quadro generale

La ricerca del 2026 punta in un'unica direzione: **non esiste un solo modo "corretto" in cui un colore appare.** I colori variano con gli occhi, l'età e lo schermo di chi guarda, e la matematica che descrive la percezione è più sottile dei numeri RGB che digitiamo in un foglio di stile.

Non è un motivo per rinunciare alla precisione. È un motivo per usarla dove conta. Controlla i valori esatti, verifica il contrasto con numeri reali e visualizza in anteprima la tua palette come la vedranno le persone con deficit della visione dei colori. Circa 1 uomo su 12 e 1 donna su 200 hanno qualche forma di deficit della visione dei colori, e lo studio dell'UCL suggerisce che gli schermi moderni potrebbero ampliare queste differenze. Per saperne di più su come progettare per questo pubblico, leggi la nostra guida su come [progettare per il daltonismo](/it/blog/designing-for-color-blindness).

### Fonti

- Rider, Frith e Stockman, *Optics Express* 34, 38458–38481 (2026), tramite il [comunicato stampa di Optica](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Los Alamos National Laboratory, tramite [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, luglio 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
