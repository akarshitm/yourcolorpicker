---
title: "HEX, RVB ou HSL : Quelle Différence et Quel Code Couleur Utiliser ?"
description: "HEX, RVB (RGB) et HSL décrivent les mêmes couleurs, mais sont conçus pour des usages différents. Voici ce que signifie chaque format et quand l'utiliser."
publishDate: 2026-09-06
relatedTool:
  label: "Convertir une couleur maintenant"
  href: "/fr/color-converter"
---

Si vous avez déjà copié une couleur depuis un outil de design, vous l'avez sans doute vue écrite de trois façons différentes : `#3B82F6`, `rgb(59, 130, 246)` et `hsl(217, 91%, 60%)`. Ce ne sont pas trois couleurs différentes — c'est exactement le même bleu, décrit par trois systèmes distincts. Savoir lequel utiliser (et pourquoi ils existent) simplifie beaucoup de décisions en CSS et dans les outils de design.

## HEX : compact et facile à copier-coller

HEX est l'abréviation d'hexadécimal — un système de numération en base 16 qui condense une couleur en un code de six caractères comme `#3B82F6`. Ces six caractères se divisent en trois paires, une pour le rouge, une pour le vert et une pour le bleu, chaque paire allant de `00` (aucune intensité sur ce canal) à `FF` (le maximum, soit 255 en décimal).

Tout l'intérêt du HEX tient à sa compacité. C'est le format que vous verrez dans les livrables de design, les chartes graphiques et la plupart du CSS copié sur internet, car il est assez court pour être lu et saisi sans effort. La contrepartie, c'est qu'il n'est pas très *humain* : personne ne regarde `#3B82F6` en visualisant immédiatement ce bleu. Il faut soit mémoriser les codes courants, soit le coller quelque part pour le voir — ou, si la couleur vient d'une photo, [trouver le code HEX directement depuis l'image](/fr/hex-code-from-image).

## RVB : le format qui correspond au fonctionnement des écrans

RVB (rouge, vert, bleu — RGB en anglais) exprime la même information sous forme de trois nombres simples de 0 à 255 : `rgb(59, 130, 246)`. Ce ne sont en réalité que les paires du HEX converties en décimal — `3B` en hexadécimal vaut `59` en décimal, et ainsi de suite.

Si le RVB existe comme format à part entière, plutôt que tout le monde n'utilise le HEX, c'est parce que les écrans sont physiquement constitués de sous-pixels rouges, verts et bleus. Le RVB décrit la couleur telle que le matériel la produit, ce qui en fait le format naturel pour tout calcul sur les couleurs — mélanger deux couleurs, ajuster la luminosité par programmation ou générer un dégradé. Il prend aussi en charge un quatrième canal, alpha (`rgba(59, 130, 246, 0.5)`), pour la transparence, que le HEX ne gère que depuis peu (`#3B82F680`) et qui y est bien moins utilisé en pratique.

## HSL : le format qui correspond à notre façon de *penser* la couleur

Le HSL (teinte, saturation, luminosité — parfois appelé TSL en français) est à part : au lieu de canaux lumineux, il décrit une couleur comme vous le feriez dans une conversation. La **teinte** est la couleur de base sur une roue de 0 à 360° (0 pour le rouge, 120 pour le vert, 240 pour le bleu), la **saturation** indique à quel point elle est vive ou grisée (0 % est gris, 100 % pleinement saturé) et la **luminosité** indique sa proximité avec le noir ou le blanc (0 % est noir, 100 % est blanc, 50 % correspond à la version « pure » de la teinte).

C'est le format à privilégier quand vous voulez *ajuster* une couleur plutôt que simplement la noter. Besoin d'une version plus foncée du bleu de votre marque pour un état de survol ? En HSL, il suffit de baisser la luminosité — de `hsl(217, 91%, 60%)` à `hsl(217, 91%, 45%)` — sans toucher à la teinte ni à la saturation, donc la famille de couleurs reste cohérente. (C'est exactement ainsi que l'on construit les [teintes et nuances](/fr/blog/tints-tones-shades).) Faire le même ajustement en RVB ou en HEX oblige à recalculer les trois canaux à la main, ce qui est bien moins intuitif.

## Pour décider rapidement

- **Copier ou stocker une couleur, ou respecter exactement une charte graphique** → HEX
- **Faire des calculs sur les couleurs ou gérer la transparence** → RVB / RVBA
- **Ajuster manuellement la clarté ou l'intensité d'une couleur** → HSL
- **Pas sûr, ou besoin de passer sans cesse de l'un à l'autre** → gardez un [convertisseur de couleurs](/fr/color-converter) ouvert plutôt que de faire les calculs à la main

En pratique, la plupart des projets finissent par combiner les trois — HEX pour les valeurs qui ne changent pas, HSL pour celles que vous ajustez, et RVB dès que le code doit manipuler une couleur directement. Aucun format n'est objectivement « le bon » : ce sont simplement trois façons de regarder la même couleur.
