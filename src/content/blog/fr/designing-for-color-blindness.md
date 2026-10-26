---
title: "Concevoir pour le Daltonisme : Types, Chiffres et Solutions Pratiques"
description: "Le daltonisme touche une part importante de votre public. Voici à quoi ressemblent réellement ses différents types et comment en tenir compte dans vos designs."
publishDate: 2026-09-06
relatedTool:
  label: "Simuler le daltonisme sur votre image"
  href: "/fr/color-blindness-simulator"
---

Les troubles de la vision des couleurs — couramment appelés daltonisme — touchent environ **1 homme sur 12 (près de 8 %)** et **1 femme sur 200 (environ 0,5 %)** d'ascendance nord-européenne, avec des taux un peu différents dans d'autres populations. Sur n'importe quel site ou application d'une certaine taille, ce n'est pas un cas marginal : c'est une part significative de votre public réel, dont la plupart ne vous l'ont jamais dit et ne se considèrent probablement pas comme ayant un « handicap ». Ces personnes se sont simplement adaptées à une vie entière de feux et de voyants rouge-vert ambigus.

## Les principaux types, et ce qu'ils donnent réellement

« Daltonien » est souvent employé comme s'il désignait une seule chose, mais le terme recouvre plusieurs conditions distinctes :

- **Deutéranopie / deutéranomalie** (faiblesse au vert) — de loin le type le plus courant. Rouges, verts et bruns deviennent difficiles à distinguer, et les couleurs de cette gamme paraissent souvent plus ternes ou plus jaunâtres que prévu.
- **Protanopie / protanomalie** (faiblesse au rouge) — confusion proche de la deutéranopie, mais avec des rouges décalés différemment ; les rouges peuvent paraître plus sombres qu'ils ne le sont, parfois presque noirs.
- **Tritanopie / tritanomalie** (faiblesse au bleu) — bien plus rare, elle affecte la distinction bleu-jaune. Bleus et verts peuvent être confondus, et les jaunes paraître pâles ou rosés.
- **Achromatopsie** (absence totale de vision des couleurs) — extrêmement rare, la vision se fait uniquement en niveaux de gris.

Point essentiel : le « daltonisme rouge-vert » ne signifie pas que l'on voit le monde en deux couleurs seulement, mais que certaines teintes de cette gamme deviennent difficiles à distinguer les unes des autres, tandis que le reste du spectre est largement épargné. C'est pourquoi le daltonisme passe facilement inaperçu lors des tests : un design peut paraître parfait à une personne deutéranope pris isolément, et pourtant échouer dès que deux couleurs facilement confondues sont placées côte à côte comme *seul* signal d'une information importante.

## Là où les interfaces cassent vraiment

- **Indicateurs d'état** — rouge/vert pour erreur/succès est l'échec le plus courant. Une personne deutéranope peut voir les deux comme une même couleur boueuse sans savoir laquelle elle regarde.
- **Graphiques** — un graphique en courbes ou en barres qui ne distingue cinq catégories que par la couleur devient illisible si deux d'entre elles tombent dans une gamme confondable.
- **Validation de formulaires** — un contour rouge sur un champ invalide est invisible *en tant que signal coloré* pour une part importante des utilisateurs, même si le champ reste visuellement distinct par ailleurs.
- **Cartes et cartes thermiques** — les dégradés du rouge au vert (courants pour les échelles « mauvais à bon ») sont presque le pire choix possible pour la population qui a justement le plus besoin de les lire correctement.

## Les solutions qui marchent vraiment

Bonne nouvelle : rien de tout cela n'oblige à refaire votre palette de zéro — il suffit de *ne pas compter uniquement sur la couleur* :

1. **Associez la couleur à un second signal.** Un état d'erreur reçoit une bordure rouge *et* une icône *et* un texte, pas seulement du rouge. Un état de succès reçoit du vert *et* une coche. Dès qu'il existe un signal non coloré, la couleur devient un plus plutôt que le seul canal porteur de sens.
2. **Évitez le rouge-vert comme unique contraste entre deux états.** Si vous avez besoin d'un binaire clair (activé/désactivé, bon/mauvais), le bleu et l'orange (une [paire complémentaire](/fr/blog/color-wheel-explained) classique) restent distinguables pour tous les types courants de daltonisme, ce qui n'est souvent pas le cas du rouge et du vert.
3. **Utilisez des motifs ou des étiquettes dans les graphiques, pas seulement la couleur.** Des étiquettes directes sur les segments, ou des styles de ligne distincts (pleine, tiretée, pointillée) en plus de la couleur, gardent les graphiques multi-séries lisibles quelle que soit la vision des couleurs.
4. **Vérifiez le contraste entre couleurs adjacentes, pas seulement par rapport au fond.** Deux couleurs peuvent chacune avoir un bon [contraste sur fond blanc](/fr/blog/wcag-contrast-guide) tout en étant presque impossibles à distinguer *l'une de l'autre* — exactement le problème qui compte pour les couleurs d'état et les séries de graphiques placées côte à côte.
5. **Simulez-le réellement avant la mise en ligne.** Il est très difficile de prévoir à quoi ressemblera votre palette pour une personne deutéranope en raisonnant dans l'abstrait — passer votre interface ou image réelle dans un [simulateur de daltonisme](/fr/color-blindness-simulator) élimine toute supposition et révèle souvent des problèmes invisibles avec une vision des couleurs typique.

Concevoir pour le daltonisme n'est pas vraiment un design system à part — c'est le même design system avec une habitude en plus : chaque fois que la couleur communique une décision, demandez-vous ce qui se passe si cette couleur n'est pas distinguable, et assurez-vous que la réponse n'est pas « l'utilisateur ne comprend pas ce qui se passe ».
