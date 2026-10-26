---
title: "La Recherche sur la Couleur en 2026 : Ce que les Scientifiques ont Découvert"
description: "D'une théorie de Schrödinger vieille de 100 ans enfin complétée à la raison pour laquelle les écrans à large gamut ne se voient pas pareil selon les personnes : les découvertes de 2026 en science des couleurs qui comptent pour les designers."
publishDate: 2026-10-24
relatedTool:
  label: "Essayer le simulateur de daltonisme"
  href: "/fr/color-blindness-simulator"
---

La couleur semble être un problème résolu. Nous avons des codes hex, des cercles chromatiques et des formules de contraste, et la plupart du temps, ils fonctionnent. Mais 2026 a été une année chargée pour la science des couleurs, et plusieurs découvertes changent notre façon de penser une chose que les designers manipulent tous les jours : la manière dont les gens voient réellement la couleur.

Voici les avancées à connaître, et ce que chacune signifie si vous travaillez avec la couleur.

## 1. Votre écran « calibré » ne se voit peut-être pas pareil pour tout le monde

En octobre 2026, les chercheurs Andy Rider et Andrew Stockman, de l'Institut d'ophtalmologie de l'University College London, ont publié dans *Optics Express* une étude qui explique une frustration bien connue dans le cinéma et le design. Deux écrans sont calibrés pour correspondre, et pourtant ils paraissent différents, et les spectateurs ne s'accordent pas sur celui qui est « juste ».

L'équipe a construit un modèle informatique de la vision humaine des couleurs qui tient compte des **différences individuelles** entre observateurs. Certaines de ces différences sont de légers troubles de la vision rouge-vert. D'autres sont liées à l'âge, car le cristallin filtre davantage la lumière bleue en vieillissant. Ils ont ensuite soumis 16 écrans au modèle, des téléviseurs grand public aux moniteurs de cinéma professionnels et aux projecteurs de salle.

Le résultat : **les écrans modernes à large gamut varient davantage d'une personne à l'autre que les anciens.** Ces écrans utilisent des sources de lumière rouge, verte et bleue à bande très étroite. Elles affichent des couleurs plus vives, mais amplifient aussi les petites différences entre les yeux des observateurs. Le primaire bleu explique surtout les désaccords entre spectateurs âgés et jeunes ; les primaires rouge et vert touchent surtout les personnes présentant différents types de troubles rouge-vert.

Une partie du problème vient de ce que la plupart des outils de calibrage reposent sur des normes de correspondance des couleurs vieilles d'environ un siècle, qui représentent mal la vision typique. Comme l'a dit Rider, cela « peut faire paraître faux des écrans modernes même lorsqu'ils ont été calibrés pour paraître identiques ».

**Ce que cela signifie pour vous :** une couleur parfaite sur votre écran est la vision d'une personne sur un appareil. Les chercheurs précisent que leurs prédictions doivent encore être testées avec de vrais observateurs. Malgré tout, les meilleures habitudes sont celles que les designers connaissent déjà : vérifiez les couleurs importantes sur plusieurs appareils et ne faites pas dépendre le sens de subtiles différences de teinte.

## 2. La théorie des couleurs de Schrödinger est enfin complète

Il y a environ un siècle, le physicien Erwin Schrödinger, plus connu pour son chat, a proposé que les qualités que nous percevons dans une couleur pouvaient être décrites de manière purement mathématique. Ces qualités sont la **teinte**, la **saturation** et la **luminosité**. Mais son modèle comportait une lacune : il n'avait jamais défini formellement l'**axe neutre**, la ligne de gris qui va du noir au blanc. Sans lui, les définitions de la teinte et de la saturation ne tenaient pas.

Une équipe du Laboratoire national de Los Alamos dirigée par Roxana Bujack a désormais comblé cette lacune. Leurs travaux ont été présentés à la Eurographics Conference on Visualization et publiés dans *Computer Graphics Forum*. Ils ont défini l'axe neutre de façon géométrique et ont aussi pris en compte deux particularités connues de la vision humaine :

- **L'effet Bezold–Brücke :** la teinte perçue d'une couleur change lorsqu'elle devient plus lumineuse ou plus sombre.
- **Les rendements décroissants :** les grandes différences de couleur sont perçues comme plus petites que la somme des petits écarts qui les composent.

Leur conclusion : la teinte, la saturation et la luminosité « ne découlent pas de constructions externes supplémentaires, comme des expériences culturelles ou acquises ». Elles découlent de la géométrie de notre perception des distances entre couleurs.

**Ce que cela signifie pour vous :** c'est la théorie qui explique pourquoi les espaces colorimétriques perceptuels existent. Si vous avez remarqué que la luminosité HSL ne correspond pas à la clarté réellement perçue des couleurs, vous avez rencontré le problème qu'aborde cette recherche. (Notre guide [HEX, RVB ou HSL](/fr/blog/hex-vs-rgb-vs-hsl) couvre le côté pratique.) De meilleurs modèles mathématiques de la perception mènent, à terme, à de meilleurs espaces colorimétriques, dégradés et palettes de visualisation de données.

## 3. Les modèles de vision par IA ne voient pas la couleur comme nous

À mesure que les outils d'image par IA se répandent, une question se pose naturellement : « voient »-ils la couleur comme les humains ? Une prépublication de juillet 2026 sur arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, l'a testé directement.

Les chercheurs ont évalué plus de 50 modèles de vision préentraînés, dont des réseaux convolutifs et des vision transformers. Ils ont mesuré la plus petite différence de couleur détectable par chaque modèle et l'ont comparée aux seuils de discrimination humains mesurés au fil de décennies d'expériences en laboratoire.

La réponse est un **non** net. L'alignement avec la sensibilité humaine aux couleurs était faible dans toutes les familles de modèles. Les modèles entraînés sans étiquettes (auto-supervisés) s'en sortaient un peu mieux que les modèles supervisés classiques. Les modèles entraînés sur des images associées à du texte se retrouvaient à la fois en tête et en queue du classement. Les auteurs concluent qu'une sensibilité aux couleurs semblable à celle des humains n'émerge pas d'elle-même avec les méthodes d'entraînement actuelles.

**Ce que cela signifie pour vous :** méfiez-vous des outils d'IA pour les jugements où la couleur est critique, comme savoir si deux nuances sont distinguables ou si une palette convient à tous. Pour une question dont la réponse est mesurable, utilisez une mesure. Un [vérificateur de contraste](/fr/contrast-checker) donne un ratio exact, et un sélecteur de couleur une valeur exacte. Notez que cet article est une prépublication qui n'a pas encore été évaluée par des pairs.

## 4. Le contraste arrive directement dans le CSS

Côté pratique, l'un des plus grands changements de l'année pour les designers web est venu des navigateurs plutôt que des laboratoires. En avril 2026, la fonction CSS `contrast-color()` a atteint le statut **Baseline**, ce qui signifie qu'elle fonctionne désormais dans tous les principaux moteurs de navigateur.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

Vous lui donnez une couleur de fond, et elle renvoie le noir ou le blanc, selon celui qui contraste le plus. Mathématiquement, le meilleur des deux atteint toujours au moins 4.5:1 environ. Le résultat respecte donc le niveau WCAG AA pour le texte normal, mais pas forcément le niveau AAA, plus strict, de 7:1. Elle ne tient pas compte des autres couleurs de votre marque : c'est un filet de sécurité, pas une décision de design.

Pendant ce temps, la méthode de contraste **APCA**, dont on parle depuis longtemps, reste exploratoire. Les WCAG 3 sont toujours à l'état de brouillon, et aucune Recommandation finale du W3C n'est attendue avant 2028. Pour la conformité actuelle, les ratios des WCAG 2 restent la référence. Notre [guide du contraste WCAG](/fr/blog/wcag-contrast-guide) les explique.

## Vue d'ensemble

Les recherches de 2026 vont dans une même direction : **il n'existe pas une seule façon « correcte » de voir une couleur.** Les couleurs varient selon les yeux, l'âge et l'écran de chacun, et les mathématiques qui décrivent la perception sont plus subtiles que les valeurs RVB que nous tapons dans une feuille de style.

Ce n'est pas une raison pour renoncer à la précision. C'est une raison de l'utiliser là où elle compte. Vérifiez les valeurs exactes, testez le contraste avec de vrais chiffres et prévisualisez votre palette telle que la verront les personnes atteintes de troubles de la vision des couleurs. Environ 1 homme sur 12 et 1 femme sur 200 présentent une forme de trouble de la vision des couleurs, et l'étude de l'UCL suggère que les écrans modernes pourraient creuser ces écarts. Pour en savoir plus sur la conception pour ce public, consultez notre guide [Concevoir pour le daltonisme](/fr/blog/designing-for-color-blindness).

### Sources

- Rider, Frith et Stockman, *Optics Express* 34, 38458–38481 (2026), via le [communiqué de presse d'Optica](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Laboratoire national de Los Alamos, via [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, juillet 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
