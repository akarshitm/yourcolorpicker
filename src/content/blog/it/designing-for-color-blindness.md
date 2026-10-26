---
title: "Progettare per il Daltonismo: Tipi, Statistiche e Soluzioni Pratiche"
description: "Il daltonismo riguarda una parte significativa del tuo pubblico. Ecco come appaiono davvero i diversi tipi e come progettare tenendone conto."
publishDate: 2026-09-06
relatedTool:
  label: "Simula il daltonismo sulla tua immagine"
  href: "/it/color-blindness-simulator"
---

Il deficit della visione dei colori — comunemente chiamato daltonismo — riguarda circa **1 uomo su 12 (circa l'8%)** e **1 donna su 200 (circa lo 0,5%)** di origine nord-europea, con tassi un po' diversi in altre popolazioni. Su qualsiasi sito o app di dimensioni ragionevoli non è un caso limite: è una parte significativa del tuo pubblico reale, la maggior parte della quale non te l'ha mai detto e probabilmente non si considera affatto portatrice di una "disabilità". Si è semplicemente adattata a una vita di semafori e spie di stato rosso-verdi ambigui.

## I tipi principali e come appaiono davvero

"Daltonico" viene spesso usato come se indicasse una cosa sola, ma comprende diverse condizioni distinte:

- **Deuteranopia / deuteranomalia** (debolezza al verde): di gran lunga il tipo più comune. Rossi, verdi e marroni diventano difficili da distinguere, e i colori in quella gamma appaiono spesso più spenti o giallastri del previsto.
- **Protanopia / protanomalia** (debolezza al rosso): confusione simile alla deuteranopia, ma con i rossi spostati in modo diverso; i rossi possono apparire più scuri di quanto siano, a volte quasi neri.
- **Tritanopia / tritanomalia** (debolezza al blu): molto più rara, riguarda la distinzione tra blu e giallo. Blu e verdi possono essere confusi e i gialli possono apparire pallidi o rosati.
- **Acromatopsia** (cecità totale ai colori): estremamente rara, si vede solo in scala di grigi.

Un punto fondamentale: "daltonismo rosso-verde" non significa vedere il mondo in due soli colori, ma che specifiche tinte in quella gamma diventano difficili da distinguere tra loro, mentre il resto dello spettro resta in gran parte intatto. Per questo il daltonismo sfugge facilmente nei test: un design può sembrare perfetto, preso da solo, a una persona con deuteranopia e fallire comunque nel momento in cui due colori facilmente confondibili vengono affiancati come *unico* segnale di qualcosa di importante.

## Dove rompe davvero le interfacce

- **Indicatori di stato**: rosso/verde per errore/successo è il fallimento più comune in assoluto. Una persona con deuteranopia può vederli entrambi come un colore torbido simile senza capire quale sta guardando.
- **Grafici**: un grafico a linee o a barre che si affida solo al colore per separare cinque categorie diventa illeggibile se due di quei colori cadono in una gamma confondibile.
- **Validazione dei moduli**: un bordo rosso su un campo non valido è invisibile *come segnale cromatico* per una parte significativa degli utenti, anche se il campo resta visivamente distinto in altri modi.
- **Mappe e mappe di calore**: le sfumature dal rosso al verde (comuni nelle scale "da male a bene") sono quasi la scelta peggiore possibile proprio per la popolazione che più ha bisogno di leggerle con precisione.

## Soluzioni che funzionano davvero

La buona notizia è che niente di tutto questo richiede di riprogettare la palette da zero: basta *non affidarsi solo al colore*.

1. **Abbina al colore un secondo segnale.** Uno stato di errore riceve un bordo rosso *e* un'icona *e* un testo, non solo il rosso. Uno stato di successo riceve il verde *e* un segno di spunta. Quando esiste un segnale non cromatico, il colore diventa un valore aggiunto invece dell'unico canale che trasmette il significato.
2. **Evita il rosso-verde come unico contrasto tra due stati.** Se ti serve un binario chiaro (acceso/spento, buono/cattivo), blu e arancione (una classica [coppia complementare](/it/blog/color-wheel-explained)) restano distinguibili con tutti i tipi comuni di daltonismo, mentre rosso e verde spesso no.
3. **Nei grafici usa motivi o etichette, non solo il colore.** Etichette dirette sui segmenti, o stili di linea diversi (continua/tratteggiata/punteggiata) insieme al colore, mantengono leggibili i grafici con più serie qualunque sia la visione dei colori.
4. **Controlla il contrasto tra colori adiacenti, non solo rispetto allo sfondo.** Due colori possono avere ciascuno un buon [contrasto su sfondo bianco](/it/blog/wcag-contrast-guide) ed essere quasi indistinguibili *tra loro*: esattamente il problema che conta per i colori di stato e le serie dei grafici affiancate.
5. **Simulalo davvero prima di pubblicare.** È molto difficile prevedere come apparirà la tua palette a una persona con deuteranopia ragionando in astratto: far passare la tua interfaccia o immagine reale in un [simulatore di daltonismo](/it/color-blindness-simulator) elimina le congetture e spesso fa emergere problemi che sembrano perfetti con una visione dei colori tipica.

Progettare per il daltonismo non è davvero un design system separato: è lo stesso design system con un'abitudine in più. Ogni volta che è il colore a comunicare una decisione, chiediti cosa succede se quel colore non è distinguibile, e assicurati che la risposta non sia "l'utente non capisce cosa sta succedendo".
