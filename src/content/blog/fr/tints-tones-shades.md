---
title: "Teintes, Tons et Nuances : Créer une Gamme de Couleurs Cohérente"
description: "Teintes claires, tons et nuances foncées sont les trois façons de décliner une couleur en une gamme complète. Voici la différence et pourquoi les design systems en dépendent autant."
publishDate: 2026-09-06
relatedTool:
  label: "Générer une gamme de teintes et nuances"
  href: "/fr/shades-and-tints-generator"
---

Ouvrez n'importe quel design system sérieux — la palette de Tailwind, Material Design, la charte graphique de votre propre produit — et vous constaterez qu'une couleur de marque apparaît rarement une seule fois. Elle se présente plutôt sous forme de *gamme* : une dizaine de couleurs apparentées allant du très clair au très foncé, toutes clairement de la même famille. Cette gamme repose sur trois opérations simples, et les connaître permet de décliner bien plus facilement une couleur de marque en une palette complète et utilisable, au lieu de deviner des codes hex au hasard.

## Teintes claires : mélanger avec du blanc

Une teinte claire (*tint*) s'obtient en mélangeant une couleur avec du blanc — la teinte de base reste la même, mais elle devient progressivement plus claire et moins saturée à mesure qu'on ajoute du blanc. En termes de HSL, il s'agit simplement d'augmenter la **luminosité** en gardant la teinte à peu près stable. Une teinte claire de bleu marine finit par se rapprocher d'un bleu très pâle, presque blanc.

On utilise les teintes claires quand on a besoin d'une version plus claire d'une couleur qui appartient visuellement à la même famille — un fond subtil derrière une carte, un état de survol à peine différent de la couleur de base, ou le fond clair d'un bandeau d'information associé à une icône ou une bordure plus foncée aux couleurs de la marque.

## Nuances foncées : mélanger avec du noir

Une nuance foncée (*shade*) est l'inverse d'une teinte claire : on mélange la couleur avec du noir plutôt qu'avec du blanc, ce qui fait baisser la **luminosité** vers zéro tout en gardant (là encore) la teinte à peu près constante. Une nuance du même bleu marine devient de plus en plus sombre jusqu'à être presque noire.

On utilise les nuances foncées partout où il faut une version plus sombre et plus contrastée d'une couleur : états de survol et actifs des boutons (un schéma courant consiste à utiliser une nuance légèrement plus foncée au `:hover` et encore plus foncée au `:active`), couleur de texte dérivée d'une couleur de marque qui doit respecter les [exigences de contraste](/fr/blog/wcag-contrast-guide) sur fond clair, ou couleurs de surface en mode sombre qui doivent rester liées à la palette du mode clair.

## Tons : mélanger avec du gris

Le ton est la troisième option, dont on parle moins : on mélange une couleur avec du gris, ce qui réduit la **saturation** tout en gardant la luminosité à peu près au même niveau. Là où teintes et nuances poussent une couleur vers le blanc ou le noir, un ton la pousse vers le *neutre*, atténuant son intensité sans forcément l'éclaircir ni l'assombrir.

Les tons sont utiles précisément quand une couleur de marque pleinement saturée paraît trop criarde — une version adoucie d'un rouge vif pour une grande zone de fond, ou une couleur d'accent atténuée qui doit rester discrètement derrière un contenu plus important au lieu de rivaliser avec lui.

## Pourquoi c'est plus important que de choisir les couleurs à l'œil

L'alternative à une gamme générée de façon systématique consiste à choisir chaque nuance à l'œil, une par une, ce qui pose généralement deux problèmes : les écarts entre les couleurs deviennent irréguliers (certains sauts paraissent brutaux, d'autres se remarquent à peine) et les couleurs dérivent en teinte à mesure qu'elles s'éclaircissent ou s'assombrissent, si bien que votre « famille » de bleus tire discrètement vers le violet côté foncé et vers le vert côté clair. Travailler en [HSL](/fr/blog/hex-vs-rgb-vs-hsl) et ajuster un seul canal à la fois — la luminosité pour les teintes et nuances, la saturation pour les tons — évite ces deux problèmes, car la teinte ne change jamais à moins de la modifier volontairement.

## Une gamme pratique pour commencer

Une gamme polyvalente raisonnable pour une couleur de marque, dans l'esprit de l'échelle de Tailwind, compte 8 à 10 niveaux : 2 ou 3 teintes claires (fonds clairs, états de survol), la couleur de base elle-même et 4 ou 5 nuances foncées (texte, bordures, surfaces en mode sombre, états actifs). Très peu de produits ont besoin de plus — l'objectif n'est pas la granularité maximale, mais d'avoir une couleur apparentée prête pour chaque état de l'interface sans en inventer une nouvelle à chaque fois.

Générer tout cela à la main, un code hex après l'autre, est exactement le genre de petite tâche répétitive qui mérite d'être automatisée : choisissez une couleur de base, générez toute la gamme en une fois avec un [générateur de teintes et nuances](/fr/shades-and-tints-generator), et vous obtenez une palette prête à l'emploi au lieu d'un tas de bleus légèrement dépareillés.
