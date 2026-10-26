---
title: "Contrasto Colori WCAG: Guida Pratica per Designer e Sviluppatori"
description: "Cosa significano davvero i requisiti WCAG sul rapporto di contrasto, perché esistono e come raggiungere il livello AA o AAA senza tirare a indovinare."
publishDate: 2026-09-06
relatedTool:
  label: "Verifica il tuo rapporto di contrasto"
  href: "/it/contrast-checker"
---

"Assicurati che il testo abbia abbastanza contrasto" è un consiglio facile da dare e sorprendentemente facile da sbagliare, perché "abbastanza" non è una sensazione: è un numero, definito dalle Linee guida per l'accessibilità dei contenuti Web (WCAG), ed è più severo di quanto la maggior parte delle persone immagini.

## Cosa misura davvero il rapporto di contrasto

Il rapporto di contrasto è un unico numero che va da 1:1 (colori identici: testo bianco puro su sfondo bianco) a 21:1 (contrasto massimo: nero puro su bianco puro). Si calcola a partire dalla *luminanza relativa* dei due colori, un modo elegante per dire "quanta luce riflette ciascun colore", ponderata in base a come l'occhio umano percepisce la luminosità (siamo più sensibili al verde che al blu, per esempio, quindi la formula pesa i canali in modo diverso invece di fare semplicemente la media dei valori RGB).

Non serve calcolarlo a mano — qualsiasi [verificatore di contrasto](/it/contrast-checker) fa i conti per te — ma è utile sapere che il rapporto riguarda la *luminanza*, non solo quanto due colori ti sembrano diversi a prima vista. Due colori che sembrano molto diversi possono comunque non superare il test se hanno una luminosità simile (una trappola comune: testo grigio medio su sfondo blu medio spesso sembra a posto ma ottiene un pessimo risultato).

## Le soglie reali

Le WCAG definiscono due livelli, AA e AAA, ciascuno con requisiti diversi per il testo normale e il testo grande:

| | Testo normale | Testo grande (18pt+/24px+, o 14pt/18,66px in grassetto) |
|---|---|---|
| **AA** (lo standard a cui punta la maggior parte dei siti) | 4.5:1 | 3:1 |
| **AAA** (il livello più severo, "avanzato") | 7:1 | 4.5:1 |

Il testo grande ha una soglia più bassa perché lettere più grandi sono per natura più facili da distinguere dallo sfondo, anche con meno contrasto tra i due colori.

AA è il livello a cui fa riferimento la maggior parte dei requisiti legali di accessibilità (tra cui ADA e Section 508 negli Stati Uniti, la norma EN 301 549 nell'UE e la Legge Stanca in Italia) ed è quello che la maggior parte dei siti dovrebbe considerare un minimo non negoziabile. AAA è molto più difficile da raggiungere su un intero design system: è un buon obiettivo per i testi critici (come il corpo del testo in un prodotto pensato per la lettura), ma di solito non è richiesto su tutto il sito.

## Perché conta al di là della conformità

Un contrasto basso non fa solo fallire un audit: delude lettori reali. Colpisce soprattutto le persone ipovedenti o con [daltonismo](/it/blog/designing-for-color-blindness), ma anche chiunque legga su uno schermo di bassa qualità o con riflessi, chiunque abbia più di 40 anni (la sensibilità al contrasto cala con l'età ben prima che la maggior parte delle persone se ne accorga) e, onestamente, chiunque strizzi gli occhi davanti al telefono sotto il sole. Il contrasto è uno dei rari requisiti di accessibilità che migliora in modo misurabile l'esperienza di quasi tutti, non solo del gruppo per cui è stato scritto.

## I modi più comuni in cui il contrasto fallisce senza che nessuno se ne accorga

- **Testo segnaposto e stati disabilitati**: i designer spesso li schiariscono per la gerarchia visiva e scendono involontariamente sotto 4.5:1, anche se il testo circostante supera il test senza problemi.
- **Testo su immagini o sfumature**: un colore che supera il test su uno sfondo uniforme può fallire non appena si trova su una parte più chiara o affollata di un'immagine.
- **Colori del brand usati per il testo**: un blu brillante o un colore pastel del brand stanno benissimo come accento, ma falliscono del tutto come testo corrente su bianco.
- **Modalità scura**: il contrasto va ricontrollato separatamente in modalità scura; un abbinamento che supera il test in modalità chiara non lo supera automaticamente quando lo sfondo diventa quasi nero.

## Un flusso di lavoro semplice

1. Scegli i colori del testo e dello sfondo come faresti normalmente; se provengono da un mockup o da uno screenshot, lo [strumento contagocce](/it/eyedropper-tool) ne ricava i valori esatti.
2. Verifica il rapporto prima della pubblicazione, non dopo un reclamo o un audit: trattalo come un link rotto.
3. Se non supera il test, regola prima la *luminosità* (in [termini HSL](/it/blog/hex-vs-rgb-vs-hsl)) invece della tonalità o della saturazione: è il modo più rapido per correggere il contrasto senza cambiare il colore percepito.
4. Ricontrolla separatamente la modalità scura, se il tuo prodotto ne ha una.

Il contrasto è una delle poche regole di accessibilità con un numero preciso associato, il che la rende una delle più facili da rispettare: non c'è alcuna ambiguità quando controlli direttamente il rapporto invece di giudicare a occhio.
