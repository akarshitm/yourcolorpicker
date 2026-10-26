---
title: "HEX vs RGB vs HSL: Differenze tra i Codici Colore e Quando Usarli"
description: "HEX, RGB e HSL descrivono gli stessi colori, ma sono pensati per compiti diversi. Ecco cosa significa ogni formato e quando conviene usarlo."
publishDate: 2026-09-06
relatedTool:
  label: "Converti un colore ora"
  href: "/it/color-converter"
---

Se ti è mai capitato di copiare un colore da uno strumento di design, probabilmente l'hai visto scritto in tre modi diversi: `#3B82F6`, `rgb(59, 130, 246)` e `hsl(217, 91%, 60%)`. Non sono tre colori diversi: è esattamente lo stesso blu, descritto da tre sistemi differenti. Sapere quale usare (e perché esistono) semplifica molte decisioni in CSS e negli strumenti di design.

## HEX: compatto e facile da copiare

HEX sta per esadecimale, un sistema numerico in base 16 che condensa un colore in un codice di sei caratteri come `#3B82F6`. I sei caratteri si dividono in tre coppie, una per il rosso, una per il verde e una per il blu, e ogni coppia va da `00` (nulla di quel canale) a `FF` (il massimo, 255 in decimale).

Tutto il fascino dell'HEX sta nella compattezza. È il formato che troverai nei passaggi di consegne di design, nelle linee guida dei brand e nella maggior parte del CSS copiato da internet, perché è abbastanza corto da leggere e digitare senza fatica. Il rovescio è che non è molto *umano*: nessuno guarda `#3B82F6` e immagina subito quel blu. Bisogna memorizzare i codici più comuni o incollarlo da qualche parte per vederlo, oppure, se il colore viene da una foto, [ricavare il codice HEX direttamente dall'immagine](/it/hex-code-from-image).

## RGB: il formato che rispecchia come funzionano gli schermi

RGB (rosso, verde, blu) esprime la stessa informazione come tre semplici numeri da 0 a 255: `rgb(59, 130, 246)`. In realtà sono solo le coppie dell'HEX convertite in decimale: `3B` in esadecimale è `59` in decimale, e così via.

L'RGB esiste come formato a sé, invece che usare solo l'HEX, perché gli schermi sono fisicamente composti da subpixel rossi, verdi e blu. L'RGB descrive il colore così come lo produce l'hardware, il che lo rende il formato naturale per qualsiasi calcolo sui colori: mescolare due colori, regolare la luminosità via codice o generare una sfumatura. Supporta anche un quarto canale, alfa (`rgba(59, 130, 246, 0.5)`), per la trasparenza, che l'HEX supporta solo da poco (`#3B82F680`) e che nella pratica si usa molto meno.

## HSL: il formato che rispecchia come *pensiamo* il colore

L'HSL (tonalità, saturazione, luminosità) è quello diverso, perché invece di canali di luce descrive un colore come faresti in una conversazione: la **tonalità** è il colore base su una ruota da 0 a 360° (0 è rosso, 120 è verde, 240 è blu), la **saturazione** indica quanto è vivace o grigio (0% è grigio, 100% completamente saturo) e la **luminosità** quanto è vicino al nero o al bianco (0% è nero, 100% è bianco, 50% è la versione "pura" della tonalità).

È il formato da scegliere quando vuoi *regolare* un colore invece di limitarti a registrarlo. Ti serve una versione più scura del blu del tuo brand per uno stato hover? In HSL basta abbassare la luminosità — da `hsl(217, 91%, 60%)` a `hsl(217, 91%, 45%)` — mentre tonalità e saturazione restano invariate, quindi la famiglia di colori rimane coerente. (È esattamente così che si costruiscono [tinte e ombre](/it/blog/tints-tones-shades).) Fare la stessa modifica in RGB o HEX significa ricalcolare a mano tutti e tre i canali, molto meno intuitivo.

## Un modo rapido per decidere

- **Copiare o salvare un colore, o rispettare esattamente le linee guida di un brand** → HEX
- **Fare calcoli sui colori o lavorare con la trasparenza** → RGB / RGBA
- **Regolare a mano la luminosità o l'intensità di un colore** → HSL
- **Non sei sicuro, o devi passare continuamente dall'uno all'altro** → tieni aperto un [convertitore di colori](/it/color-converter) invece di fare i calcoli a mano

Nella pratica, la maggior parte dei progetti finisce per usare un mix di tutti e tre: HEX per i valori che non cambiano, HSL per quelli che stai regolando e RGB quando il codice deve manipolare direttamente un colore. Non esiste un formato oggettivamente "giusto": sono solo tre lenti sullo stesso colore.
