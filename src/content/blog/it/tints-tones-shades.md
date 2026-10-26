---
title: "Tinte, Toni e Ombre: Come Creare una Scala di Colori Coerente"
description: "Tinte, toni e ombre sono i tre modi per trasformare un colore in una gamma completa e utilizzabile. Ecco la differenza e perché i design system li usano così tanto."
publishDate: 2026-09-06
relatedTool:
  label: "Genera una scala di tinte e ombre"
  href: "/it/shades-and-tints-generator"
---

Apri qualsiasi design system serio — la palette di Tailwind, Material Design, le linee guida del brand del tuo prodotto — e vedrai che un colore del brand compare raramente una sola volta. Compare invece come una *scala*: una decina di colori correlati che vanno dal chiarissimo allo scurissimo, tutti riconoscibili come parte della stessa famiglia. Quella scala si costruisce con tre semplici operazioni, e conoscerle rende molto più facile estendere un colore del brand in una palette completa invece di tirare a indovinare codici hex.

## Tinte: mescolare con il bianco

Una tinta è ciò che ottieni mescolando un colore con il bianco: la tonalità resta la stessa, ma diventa via via più chiara e meno satura man mano che aggiungi bianco. In termini HSL, significa semplicemente alzare il valore di **luminosità** mantenendo la tonalità più o meno ferma. Una tinta di blu navy finisce per avvicinarsi a un blu molto pallido, quasi bianco.

Le tinte servono quando hai bisogno di una versione più chiara di un colore che appartenga ancora visivamente alla stessa famiglia: uno sfondo delicato dietro una card, uno stato hover appena diverso dal colore base o lo sfondo chiaro di un banner informativo abbinato a un'icona o un bordo più scuri nel colore del brand.

## Ombre: mescolare con il nero

Un'ombra è l'immagine speculare di una tinta: si mescola il colore con il nero invece che con il bianco, abbassando la **luminosità** verso lo zero e mantenendo (di nuovo) la tonalità più o meno costante. Un'ombra dello stesso blu navy diventa sempre più scura fino a essere quasi nera.

Le ombre servono ovunque ti occorra una versione più scura e più contrastata di un colore: stati hover e active dei pulsanti (uno schema comune è un'ombra leggermente più scura su `:hover` e una ancora più scura su `:active`), colore del testo derivato dal colore del brand che deve rispettare i [requisiti di contrasto](/it/blog/wcag-contrast-guide) su uno sfondo chiaro, o colori delle superfici in modalità scura che devono sembrare legati alla palette della modalità chiara.

## Toni: mescolare con il grigio

Il tono è la terza opzione, di cui si parla meno: si mescola un colore con il grigio, riducendo la **saturazione** e lasciando la luminosità più o meno dov'era. Mentre tinte e ombre spingono un colore verso il bianco o il nero, un tono lo spinge verso il *neutro*, smorzandone l'intensità senza necessariamente renderlo più chiaro o più scuro.

I toni sono utili proprio quando un colore del brand completamente saturo risulta troppo urlato: una versione smorzata di un rosso brillante per una grande area di sfondo, o un colore d'accento attenuato che deve restare discretamente dietro a contenuti più importanti invece di competere con essi.

## Perché è più importante che scegliere i colori a occhio

L'alternativa a generare una scala in modo sistematico è scegliere ogni sfumatura a occhio, una alla volta, il che di solito causa due problemi: i passaggi tra i colori diventano irregolari (alcuni salti sembrano drastici, altri si notano appena) e i colori cambiano tonalità man mano che si schiariscono o si scuriscono, così la tua "famiglia" di blu vira leggermente al viola nella parte scura e leggermente al verde in quella chiara. Lavorare in [HSL](/it/blog/hex-vs-rgb-vs-hsl) e regolare un solo canale alla volta — luminosità per tinte e ombre, saturazione per i toni — evita entrambi i problemi, perché la tonalità semplicemente non cambia a meno che tu non la modifichi di proposito.

## Una scala pratica per iniziare

Una scala ragionevole e versatile per un colore del brand, più o meno nello stile di Tailwind, ha 8–10 passaggi: 2–3 tinte (sfondi chiari, stati hover), il colore base e 4–5 ombre (testo, bordi, superfici in modalità scura, stati active). Pochissimi prodotti ne hanno bisogno di più: l'obiettivo non è la massima granularità, ma avere un colore correlato pronto per ogni stato dell'interfaccia senza inventarne uno nuovo ogni volta.

Generare tutto questo a mano, un codice hex alla volta, è proprio il tipo di piccolo compito ripetitivo che conviene automatizzare: scegli un colore base, genera l'intera scala in un colpo solo con un [generatore di tinte e ombre](/it/shades-and-tints-generator) e avrai una palette pronta invece di un mucchio di blu che non stanno bene insieme.
