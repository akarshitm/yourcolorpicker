import type { Dictionary } from "./en";

export const fr: Dictionary = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Sélecteur de Couleur d'Image",
		tools: "Outils",
		whyUs: "Pourquoi nous",
		faq: "FAQ",
		about: "À propos",
		contact: "Contact",
		howToUse: "Comment utiliser",
		openMenu: "Ouvrir le menu",
		uploadImage: "Importer une image",
		language: "Langue",
	},
	footer: {
		privacyHeading: "Confidentialité",
		privacyBlurb:
			"Your Color Picker fonctionne entièrement côté client pour l'outil de couleur lui-même. Chaque pixel que vous inspectez, chaque palette extraite et chaque couleur que vous enregistrez est calculée et stockée directement dans votre navigateur grâce à l'API Canvas et au stockage local — votre image n'est jamais téléversée, transmise ni vue par un serveur, car il n'y en a aucun dans ce flux. Nous utilisons Google Analytics pour comprendre le trafic global du site, mais aucune image ni donnée de couleur n'est jamais suivie ni partagée, et effacer les données de votre navigateur supprime tout ce qui est enregistré localement.",
		readFullPolicy: "Lisez notre {{link}} complète.",
		privacyPolicyLabel: "Politique de Confidentialité",
		aboutUs: "À Propos",
		tools: "Tous les Outils",
		faq: "FAQ",
		contactUs: "Nous Contacter",
		privacyPolicy: "Politique de Confidentialité",
		termsAndConditions: "Conditions Générales",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Your Color Picker — Sélecteur de Couleur d'Image",
		eyebrow: "Sélecteur de couleur gratuit · Sans inscription · Rien n'est jamais téléversé",
		heading: "Le sélecteur de couleur qui trouve n'importe quelle couleur dans une photo",
		subhead:
			"Un détecteur de couleur à partir d'une image qui obtient chaque code HEX, RGB et HSL avec une précision au pixel près — plus un détecteur de couleur complémentaire intégré et un sélecteur de couleur aléatoire pour quand vous avez juste besoin d'un point de départ.",
		ctaPrimary: "Importer une image",
		ctaSecondary: "Voir ce qui le rend différent",
	},
	features: {
		heading: "Un sélecteur de couleur conçu pour la précision, pas seulement l'extraction",
		items: [
			{
				title: "Un sélecteur de couleur à partir d'une image, pixel par pixel",
				body: "Survolez l'image et une loupe zoomée affiche chaque pixel individuel autour de votre curseur, avec le pixel cible exact mis en évidence — ce sélecteur de couleur d'image choisit ainsi précisément celui que vous visez, pas une moyenne de ses voisins.",
			},
			{
				title: "Un détecteur de code hexadécimal et un détecteur de couleur RGB, réunis",
				body: "Chaque pixel fait office à la fois de détecteur de code hexadécimal, de détecteur de couleur RGB et de lecteur HSL — avec son nom de couleur standard le plus proche identifié en un clic.",
			},
			{
				title: "Un détecteur de couleur complémentaire intégré",
				body: "Les palettes complémentaires, analogues, triadiques et monochromatiques se mettent à jour en direct selon la couleur que vous survolez — un détecteur de couleur complémentaire sans besoin de connaître la théorie des couleurs.",
			},
			{
				title: "Un sélecteur de couleur aléatoire, dès que vous en avez besoin",
				body: "Pas d'image sous la main ? Cliquez sur couleur aléatoire pour obtenir un nouveau code HEX, RGB et HSL comme point de départ — puis enregistrez-le ou utilisez-le pour générer une palette assortie.",
			},
			{
				title: "Vérificateur de contraste intégré",
				body: "Comparez deux couleurs de votre image aux seuils WCAG AA/AAA pour le texte normal et le grand texte — sans avoir besoin d'un autre outil.",
			},
			{
				title: "Exportez, ne vous contentez pas de copier",
				body: "Exportez votre palette en variables CSS, en extrait de configuration Tailwind, en JSON ou en bande d'échantillons PNG téléchargeable — ou enregistrez les couleurs localement sans besoin de compte.",
			},
		],
	},
	cta: {
		heading: "Prêt à trouver vos couleurs ?",
	},
	cookieConsent: {
		message: "Nous utilisons des cookies (via Google Analytics) pour comprendre comment les visiteurs utilisent ce site. Consultez notre {{link}} pour plus de détails.",
		linkLabel: "Politique de Confidentialité",
		accept: "Accepter",
		decline: "Refuser",
	},
	trust: {
		points: [
			"100 % côté client — votre image ne quitte jamais votre navigateur",
			"Pas de compte, pas d'inscription, pas de filigrane",
			"Fonctionne hors ligne une fois la page chargée",
		],
	},
	help: {
		title: "Comment utiliser Your Color Picker",
		close: "Fermer",
		done: "Compris",
		steps: [
			{
				title: "1. Importez une image",
				body: "Cliquez sur la zone d'importation, déposez-y un fichier, ou collez une image directement depuis votre presse-papiers.",
			},
			{
				title: "2. Inspectez n'importe quel pixel",
				body: "Survolez l'image et une loupe affiche chaque pixel autour de votre curseur, zoomé avec le pixel cible exact mis en évidence — son RGB, HEX et HSL se mettent à jour en direct à droite. Vous pouvez aussi mettre le focus sur l'image et utiliser les touches fléchées.",
			},
			{
				title: "3. Cliquez pour voir les options",
				body: "Cliquez sur un pixel — ou appuyez sur Entrée lorsqu'il a le focus — pour ouvrir ses options : l'enregistrer, l'afficher en plein écran (pratique pour comparer en tenant votre téléphone devant un objet réel), copier toutes les valeurs à la fois, voir son nom de couleur le plus proche, ou vérifier si un texte noir ou blanc s'y lit le mieux.",
			},
			{
				title: "4. Consultez les suggestions, la palette et la qualité",
				body: "« Va bien avec » se met à jour en direct avec des échantillons complémentaires, analogues, triadiques et monochromatiques pour la couleur survolée. « Couleurs dominantes » extrait les couleurs principales de toute l'image. La zone de qualité sous l'image indique si elle est Basse, Moyenne, Haute ou HD — pour savoir à quel point faire confiance à ce que vous sélectionnez.",
			},
			{
				title: "5. Enregistrez, exportez ou partagez",
				body: "Les couleurs enregistrées apparaissent dans une simple rangée de favoris — cliquez sur l'une d'elles pour la faire réapparaître dans l'affichage en direct. Les palettes s'exportent en variables CSS, configuration Tailwind, JSON ou bande PNG, et peuvent être enregistrées localement ou partagées via un lien.",
			},
		],
	},
	tool: {
		eyebrow: "Sélecteur de couleur à partir d'une image",
		heading: "Importez une image, obtenez toutes ses couleurs",
		intro:
			"Ce sélecteur de couleur d'image fait aussi office de détecteur de couleur à partir d'une image pour les codes HEX, RGB et HSL. Passez le curseur sur la photo d'exemple ci-dessous pour l'essayer, puis importez la vôtre — rien n'est téléversé où que ce soit, tout est lu et analysé entièrement dans votre navigateur.",
		uploadButton: "Importer une image",
		pickFromScreen: "Choisir depuis l'écran",
		captureScreenshot: "Capturer l'écran",
		miniPicker: "Fenêtre de sélection flottante",
		dragHint: "ou glissez-déposez un fichier sur le panneau ci-dessus, ou collez avec Ctrl/Cmd+V",
		canvasAriaLabel: "Canevas d'image — survolez pour inspecter la couleur d'un pixel, cliquez ou appuyez sur Entrée pour ouvrir les options d'enregistrement, de plein écran et de copie",
		qualityHeading: "Qualité de l'image",
		qualityLow: "Basse",
		qualityMedium: "Moyenne",
		qualityHigh: "Haute",
		qualityHD: "HD",
		contrastHeading: "Vérificateur de contraste",
		colorA: "Couleur A",
		colorB: "Couleur B",
		contrastPlaceholder: "Choisissez deux couleurs de l'image (via son menu d'options) ou collez des codes hexadécimaux pour les comparer.",
		pickerHeading: "Sélecteur de couleur",
		randomColor: "Couleur aléatoire",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Copier",
		saveColor: "Enregistrer la couleur",
		goesWellWith: "Va bien avec",
		goesWellWithSub: "Palettes générées en direct à partir de la couleur que vous survolez — cliquez sur un échantillon pour le copier.",
		complementary: "Complémentaire",
		analogous: "Analogue",
		triadic: "Triadique",
		monochromatic: "Monochromatique",
		dominantColors: "Couleurs dominantes",
		colorsUnit: "couleurs",
		paletteCountAriaLabel: "Nombre de couleurs de la palette",
		savedColors: "Couleurs enregistrées",
		savedColorsSub: "Cliquez sur l'image, ou mettez-la en focus et appuyez sur Entrée, pour voir les options de couleur — y compris en enregistrer une ici.",
		exportHeading: "Exporter",
		exportCss: "Variables CSS",
		exportTailwind: "Configuration Tailwind",
		exportJson: "JSON",
		exportPng: "Télécharger la bande PNG",
		historyHeading: "Historique",
		paletteNamePlaceholder: "Nom de la palette",
		save: "Enregistrer",
		copyLink: "Copier le lien",
	},
	faq: {
		pageEyebrow: "FAQ",
		pageHeading: "Questions fréquentes",
		pageIntro:
			"Tout ce qu'on nous demande sur le choix de couleurs à partir d'une image, la lecture des codes HEX et RGB, et la création d'une palette de couleurs — plus quelques questions sur les couleurs qui reviennent souvent.",
		sectionHeading: "Sélecteur et détecteur de couleur — questions fréquentes",
		viewAll: "Voir toutes les questions",
		items: [
			{
				q: "En quoi est-ce différent du sélecteur de couleur de Google ?",
				a: "Le sélecteur de couleur intégré de Google vous permet de choisir dans une palette ou de saisir un code HEX, mais il ne peut pas lire les couleurs d'une photo. Your Color Picker est un sélecteur de couleur à partir d'une image — importez ou glissez n'importe quelle photo et lisez le HEX, RGB et HSL exacts de n'importe quel pixel.",
			},
			{
				q: "Comment trouver le code HEX d'une couleur dans une image ?",
				a: "Importez l'image, puis survolez — ou faites glisser votre doigt sur mobile — n'importe quel pixel. Le détecteur de couleur hexadécimale se met à jour en direct pendant que vous vous déplacez, et cliquer sur ce pixel ouvre des options pour copier son HEX, RGB ou HSL, l'enregistrer ou le voir en plein écran.",
			},
			{
				q: "Qu'est-ce qu'un détecteur de couleur complémentaire ?",
				a: "Un détecteur de couleur complémentaire affiche la couleur directement opposée à celle choisie sur le cercle chromatique — l'association à laquelle les designers pensent en premier. Le nôtre se met à jour en direct avec des suggestions analogues, triadiques et monochromatiques pour la couleur que vous consultez.",
			},
			{
				q: "Puis-je obtenir une couleur aléatoire ?",
				a: "Oui — le sélecteur de couleur aléatoire intégré à l'outil génère une nouvelle couleur HEX, RGB et HSL chaque fois que vous avez besoin d'un point de départ, avec ses propres suggestions de palette assortie.",
			},
			{
				q: "Ce sélecteur de couleur est-il gratuit et privé ?",
				a: "Oui. Il est gratuit, sans inscription, et fonctionne à 100 % côté client — votre image est lue et analysée entièrement dans votre navigateur et n'est jamais téléversée sur un serveur.",
			},
			{
				q: "Qu'est-ce qu'un outil de sélection de couleur ?",
				a: "Un outil de sélection de couleur vous permet de choisir ou d'identifier une couleur et d'obtenir sa valeur numérique — généralement en code HEX, RGB ou HSL — pour la réutiliser dans votre travail de design. Your Color Picker est un sélecteur de couleur à partir d'une image : importez n'importe quelle photo et cliquez sur un pixel pour lire instantanément ses valeurs de couleur exactes.",
			},
			{
				q: "Comment utiliser le raccourci du sélecteur de couleur ?",
				a: "Les raccourcis intégrés du système, comme Win + Maj + C sous Windows (Sélecteur de couleur PowerToys) ou le Sondeur de couleur numérique de macOS, permettent d'échantillonner n'importe quel pixel de votre écran. Si vous préférez ne rien installer, déposez directement votre image dans Your Color Picker et survolez-la dans votre navigateur — aucun raccourci ni logiciel nécessaire.",
			},
			{
				q: "Comment utiliser un détecteur de couleur ?",
				a: "Glissez ou importez une image dans l'outil, puis déplacez votre curseur (ou votre doigt sur mobile) sur n'importe quelle partie de l'image. Le détecteur de couleur suit votre position en direct, affichant le HEX, RGB et HSL de ce pixel exact — cliquez pour copier le code ou enregistrer la couleur.",
			},
			{
				q: "Comment changer la couleur du Finder sur Mac ?",
				a: "Si vous parlez de l'application Finder de macOS, allez dans Réglages Système → Apparence et changez la Couleur d'Accentuation, qui teinte la barre latérale, les fenêtres et les surbrillances du Finder — il n'existe pas de réglage de couleur propre au Finder. Si vous cherchez plutôt à identifier une couleur vue sur une photo, c'est exactement ce pour quoi Your Color Picker est conçu — importez l'image et cliquez sur n'importe quel pixel pour obtenir son code exact.",
			},
			{
				q: "Comment utiliser un détecteur de couleur vraie ?",
				a: "La « couleur vraie » désigne une profondeur de couleur complète sur 24 bits — plus de 16 millions de teintes, correspondant à ce que votre écran affiche réellement. Your Color Picker lit les pixels avec une précision de couleur vraie, donc les valeurs HEX et RGB obtenues correspondent exactement à la teinte de votre image, pas à une approximation arrondie.",
			},
			{
				q: "De quelle couleur est-ce ?",
				a: "Importez-en une photo — ou une capture d'écran, si c'est affiché sur votre écran — dans Your Color Picker, puis survolez (ou touchez sur mobile) l'endroit exact. L'outil affiche le HEX, RGB et HSL de ce pixel en direct, et vous pouvez cliquer pour le copier ou l'enregistrer. Pour une image entière plutôt qu'un point précis, échantillonnez quelques-unes de ses zones les plus marquantes pour avoir une idée de sa couleur générale.",
			},
			{
				q: "De quelle couleur est le taupe ?",
				a: "Le taupe est un brun grisâtre discret, entre le gris et le brun, avec une nuance chaude, souvent autour de HEX #8B8589 à #B38B6D selon la teinte. Les taupes en peinture et en tissu varient pas mal, donc si vous avez un échantillon ou une photo de taupe, importez-le ici pour obtenir son code HEX exact plutôt que de vous fier à une estimation générale.",
			},
			{
				q: "Comment trouver sa palette de couleurs ?",
				a: "« Palette de couleurs » peut désigner deux choses différentes. Si vous parlez des teintes qui vous vont personnellement, il s'agit de l'analyse de saison colorimétrique (Printemps, Été, Automne, Hiver, et leurs sous-saisons) — déterminée en drapant des tissus colorés près de votre visage à la lumière naturelle pour voir ce qui met le mieux en valeur votre peau, vos cheveux et la nuance de vos yeux, avec un styliste ou un questionnaire d'auto-évaluation en ligne. Si vous parlez d'une palette de design, la méthode la plus précise consiste à échantillonner de vraies couleurs à partir d'une photo de référence — importez-en une dans Your Color Picker et choisissez quelques pixels ; chacun est accompagné de suggestions complémentaires, analogues et triadiques intégrées pour compléter un ensemble.",
			},
			{
				q: "Comment créer une palette de couleurs ?",
				a: "Partez d'une image de référence — une photo, une œuvre ou un moodboard — et échantillonnez quelques-unes de ses couleurs avec Your Color Picker. Chaque couleur choisie s'accompagne de suggestions complémentaires, analogues et triadiques intégrées, pour construire une palette cohérente à partir d'une teinte de départ plutôt que de deviner les associations.",
			},
			{
				q: "Comment trouver la couleur de son aura ?",
				a: "La couleur de l'aura est un concept issu des pratiques spirituelles et énergétiques, pas une propriété mesurable ou physique — elle est généralement évaluée par photographie d'aura (comme la photographie Kirlian) ou par des praticiens qui la perçoivent intuitivement. Cela n'a aucun rapport avec les valeurs HEX ou RGB, qui mesurent des longueurs d'onde lumineuses et non des champs d'énergie.",
			},
			{
				q: "Comment identifier la couleur de peinture d'un mur ?",
				a: "Prenez une photo du mur à la lumière naturelle du jour, uniforme — évitez les ombres et l'éclairage artificiel, qui altèrent la lecture d'une couleur — puis importez-la dans Your Color Picker et échantillonnez la zone du mur pour obtenir son HEX et son RGB. Les écrans et les conditions d'éclairage font que cela donne une correspondance très proche plutôt qu'un résultat garanti identique à l'échantillon, alors apportez le HEX dans un magasin de peinture pour trouver la formule la plus proche.",
			},
			{
				q: "Quel est le meilleur outil gratuit pour inverser les couleurs d'une image ?",
				a: "Your Color Picker est conçu pour identifier et échantillonner les couleurs d'une image, pas pour les inverser, mais inverser des couleurs est facile à faire gratuitement — la plupart des applications photo (Aperçu sous macOS, Photos sous Windows) ont un filtre d'inversion intégré, et des éditeurs gratuits comme GIMP ou Photopea (dans le navigateur, sans installation) le proposent aussi en un clic.",
			},
			{
				q: "Comment assortir la couleur d'une ceinture ?",
				a: "La règle de style classique est d'assortir votre ceinture à vos chaussures — ceinture marron avec chaussures marron, noir avec noir — plutôt qu'à votre pantalon ou votre chemise. Pour une correspondance exacte entre deux articles précis, comme une teinte de cuir particulière, photographiez les deux sous le même éclairage et comparez leurs codes HEX avec Your Color Picker plutôt que de vous fier uniquement à l'œil.",
			},
			{
				q: "Qu'est-ce que la couleur RGB ?",
				a: "RGB signifie Rouge, Vert, Bleu — les trois canaux de lumière que votre écran mélange pour créer chaque couleur que vous voyez, chacun allant de 0 à 255. C'est un modèle de couleur additif conçu pour les écrans numériques, contrairement au modèle de mélange des peintures appris à l'école. Your Color Picker affiche la valeur RGB de n'importe quel pixel que vous échantillonnez sur une image.",
			},
			{
				q: "Qu'est-ce que le HSL dans un code couleur ?",
				a: "HSL signifie Teinte (Hue), Saturation et Luminosité — une autre façon de décrire la même couleur que le HEX ou le RGB, mais avec des termes plus faciles à appréhender : la teinte est la couleur de base (0–360° sur le cercle chromatique), la saturation indique à quel point elle est vive ou terne, et la luminosité indique sa proximité avec le noir ou le blanc. Il est souvent plus simple d'ajuster une couleur de façon prévisible en HSL — réduire la luminosité assombrit une teinte sans en changer la nuance, par exemple.",
			},
		],
	},
	about: {
		title: "À Propos — Your Color Picker",
		description: "Your Color Picker est un sélecteur de couleur et détecteur de couleur à partir d'image gratuit, privé et basé sur le navigateur. Découvrez ce qu'il fait, comment il fonctionne, et pourquoi rien n'est jamais téléversé.",
		eyebrow: "À propos",
		heading: "À propos de Your Color Picker",
		intro: "Un outil petit et ciblé pour une seule tâche : extraire des valeurs HEX, RGB et HSL exactes de n'importe quelle image, instantanément et en privé.",
		whatHeading: "Ce qu'il fait",
		whatBody:
			"Your Color Picker est un sélecteur de couleur à partir d'une image — importez ou glissez une photo, une capture d'écran ou une maquette de design, puis survolez ou touchez n'importe quel point pour lire la couleur exacte de ce pixel en HEX, RGB et HSL. Cliquez sur une couleur pour copier l'un de ces codes, l'enregistrer dans une palette, l'afficher en plein écran, ou voir des couleurs complémentaires, analogues et triadiques suggérées à côté. Il y a aussi un sélecteur de couleur aléatoire indépendant pour quand vous avez juste besoin d'un point de départ.",
		whyHeading: "Pourquoi nous l'avons créé",
		whyBody:
			"La plupart des sélecteurs de couleur vous laissent choisir dans un nuancier ou saisir un code que vous connaissez déjà — peu vous permettent de pointer une vraie photo et de demander « c'est exactement quelle couleur, ça ? ». Nous avons créé Your Color Picker pour répondre à cette question en quelques secondes, sans vous demander d'installer un logiciel, de créer un compte, ou de téléverser quoi que ce soit sur un serveur.",
		howHeading: "Comment ça fonctionne",
		howBody:
			"Tout s'exécute côté client, dans votre navigateur, grâce à l'API Canvas HTML. Votre image est décodée et lue localement sur votre appareil — elle n'est jamais transmise nulle part, car il n'y a aucune étape de téléversement dans le processus. Les couleurs enregistrées vivent dans le stockage local de votre navigateur, elles restent donc sur votre appareil et disparaissent si vous effacez les données de votre navigateur. Consultez notre {{link}} pour tous les détails.",
		howLinkLabel: "Politique de Confidentialité",
		whoHeading: "Pour qui",
		whoBody:
			"Les designers qui cherchent un code HEX à partir d'une image de référence, les développeurs qui extraient des couleurs de marque d'une capture d'écran, les peintres et décorateurs qui vérifient la couleur d'un mur ou d'un tissu à partir d'une photo, et toute personne qui a déjà regardé quelque chose en se demandant exactement de quelle teinte il s'agissait.",
		questionsHeading: "Des questions ?",
		questionsFaqBody: "Consultez notre {{link}} pour les questions courantes.",
		questionsFaqLinkLabel: "FAQ",
		questionsContactBody: "Ou {{link}} directement — nous lisons chaque message.",
		questionsContactLinkLabel: "contactez-nous",
	},
	contact: {
		title: "Nous Contacter — Your Color Picker",
		description: "Contactez-nous à propos de Your Color Picker — signalement de bugs, idées de fonctionnalités ou avis général. Nous lisons chaque message.",
		eyebrow: "Contact",
		heading: "Nous contacter",
		intro: "Vous avez trouvé un bug, une idée de fonctionnalité, ou vous voulez simplement dire bonjour ? Envoyez-nous un message — nous lisons tout ce qui arrive.",
		emailHeading: "Écrivez-nous",
		sendEmailButton: "Envoyer un e-mail",
		includeHeading: "Quoi inclure",
		includeBody:
			"Pour les signalements de bugs, indiquez-nous quel appareil et quel navigateur vous utilisez et, si possible, ce que vous faisiez juste avant que le problème n'apparaisse. Pour les idées de fonctionnalités ou avis généraux, dites-nous simplement ce qui vous serait utile — nous lisons chaque message et essayons de répondre sous quelques jours ouvrés.",
		beforeHeading: "Avant de nous écrire",
		beforeFaqBody: "Les questions rapides sur le fonctionnement de l'outil trouvent souvent déjà réponse sur notre {{link}}.",
		beforeFaqLinkLabel: "page FAQ",
		beforePrivacyBody: "Pour les questions sur la gestion de vos données, consultez notre {{link}}.",
		beforePrivacyLinkLabel: "Politique de Confidentialité",
	},
	privacy: {
		title: "Politique de Confidentialité — Your Color Picker",
		description: "Politique de confidentialité de Your Color Picker : vos images sont traitées entièrement dans votre navigateur et ne sont jamais téléversées, transmises ni stockées sur un serveur.",
		eyebrow: "Légal",
		heading: "Politique de Confidentialité",
		lastUpdatedPrefix: "Dernière mise à jour :",
		shortHeading: "La version courte",
		shortBody:
			"Your Color Picker fonctionne entièrement dans votre navigateur. Toute image que vous importez est lue et analysée localement sur votre appareil grâce à l'API Canvas — elle n'est jamais téléversée, transmise ni stockée sur un serveur, car ce site n'a aucun composant serveur dans ce flux. Nous utilisons Google Analytics pour comprendre le trafic global du site — voir « Cookies et suivi » ci-dessous pour plus de détails.",
		imagesHeading: "Images que vous importez",
		imagesBody:
			"Lorsque vous importez ou glissez une image, elle est décodée et affichée directement dans la mémoire de votre navigateur pour faire fonctionner le sélecteur de couleur. Elle n'est jamais envoyée sur le réseau, ni à nous ni à un tiers. Fermer ou actualiser l'onglet supprime complètement l'image.",
		storageHeading: "Ce que nous stockons localement",
		storageBody:
			"L'outil utilise le stockage local de votre navigateur — une technologie web standard, pas un cookie — pour mémoriser deux choses sur votre propre appareil : votre préférence de thème clair/sombre, et toute couleur que vous choisissez d'enregistrer en utilisant l'outil. Ces données ne quittent jamais votre appareil, ne nous sont jamais visibles, et sont supprimées automatiquement si vous effacez les données de site de votre navigateur.",
		cookiesHeading: "Cookies et suivi",
		cookiesBody:
			"Nous utilisons Google Analytics pour comprendre le trafic global — par exemple, quelles pages sont populaires et d'où viennent approximativement les visiteurs. Il dépose des cookies et peut collecter des informations comme votre localisation approximative, le type d'appareil et de navigateur, et les pages que vous visitez. Cela est totalement distinct de l'outil de couleur lui-même : vos images et les couleurs que vous échantillonnez ne sont jamais envoyées à Google ni à qui que ce soit d'autre. Vous pouvez vous désinscrire via le {{optout}}, ou consulter la {{privacy}} pour savoir comment Google traite ces données.",
		cookiesOptoutLabel: "module complémentaire de désactivation de Google Analytics",
		cookiesGooglePrivacyLabel: "politique de confidentialité de Google",
		hostingHeading: "Hébergement et journaux serveur",
		hostingBody:
			"Comme tout site web, notre hébergeur peut conserver des journaux d'accès serveur standards (comme l'adresse IP, le type de navigateur et l'horodatage des requêtes) à des fins de sécurité et de fiabilité. Ces journaux sont générés par l'infrastructure d'hébergement elle-même, pas par le code de ce site, et n'ont aucun lien avec des données d'image ou de couleur — rien de tout cela n'atteint jamais un serveur.",
		childrenHeading: "Confidentialité des mineurs",
		childrenBody:
			"Your Color Picker ne collecte sciemment d'informations personnelles auprès de personne, y compris des mineurs, car il ne collecte aucune information personnelle du tout — il n'y a pas de système de compte et rien de ce que vous saisissez ne nous est transmis.",
		changesHeading: "Modifications de cette politique",
		changesBody:
			"Si cette politique change, nous mettrons à jour la date de « dernière mise à jour » ci-dessus. Les changements importants — comme l'ajout de toute forme de collecte de données — seront clairement indiqués sur cette page.",
		contactHeading: "Contact",
		contactBody: "Des questions sur cette politique ? Contactez-nous à {{email}} ou via notre {{link}}.",
		contactLinkLabel: "page de contact",
	},
	terms: {
		title: "Conditions Générales — Your Color Picker",
		description: "Les conditions générales d'utilisation de Your Color Picker, un sélecteur de couleur et détecteur de couleur à partir d'image gratuit basé sur le navigateur.",
		eyebrow: "Légal",
		heading: "Conditions générales",
		lastUpdatedPrefix: "Dernière mise à jour :",
		acceptanceHeading: "Acceptation des conditions",
		acceptanceBody: "En utilisant Your Color Picker (« l'outil », « le site »), vous acceptez ces conditions. Si vous n'êtes pas d'accord avec elles, merci de ne pas utiliser le site.",
		useHeading: "Utilisation du service",
		useBody:
			"Your Color Picker est gratuit, pour un usage personnel ou commercial, sans inscription requise. Vous acceptez de l'utiliser uniquement à des fins licites et de ne pas tenter de le perturber, de l'analyser à des fins malveillantes (rétro-ingénierie), ni d'abuser du service d'une manière qui le dégrade pour d'autres utilisateurs.",
		contentHeading: "Vos images et contenus",
		contentBody:
			"Toute image que vous utilisez avec l'outil est traitée entièrement dans votre propre navigateur et ne nous est jamais téléversée — nous ne la recevons, ne la stockons ni n'y avons accès, nous ne revendiquons donc absolument aucun droit dessus. Vous êtes seul responsable de vous assurer d'avoir le droit d'utiliser toute image que vous chargez dans l'outil. Consultez notre {{link}} pour en savoir plus sur la façon dont l'outil traite les données.",
		contentLinkLabel: "Politique de Confidentialité",
		warrantyHeading: "Absence de garantie",
		warrantyBody:
			"Your Color Picker est fourni « tel quel », sans garantie d'aucune sorte, expresse ou implicite. Bien que nous visions l'exactitude des valeurs de couleur rapportées, nous ne garantissons pas une précision parfaite pour chaque image, appareil ou écran — l'étalonnage de l'écran, la compression d'image et les profils colorimétriques peuvent tous affecter les valeurs exactes que vous voyez. Ne l'utilisez pas comme seule source pour des décisions où la précision des couleurs est critique (par exemple, une production finale de peinture ou d'impression) sans vérification indépendante.",
		liabilityHeading: "Limitation de responsabilité",
		liabilityBody:
			"Dans toute la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs résultant de votre utilisation, ou de votre incapacité à utiliser, le site ou l'outil.",
		linksHeading: "Liens vers des tiers",
		linksBody: "Les pages de ce site peuvent renvoyer vers des ressources tierces à titre de contexte. Nous ne sommes pas responsables du contenu, de l'exactitude ou des pratiques d'un site que nous n'exploitons pas.",
		changesHeading: "Modifications du service ou de ces conditions",
		changesBody:
			"Nous pouvons mettre à jour l'outil ou ces conditions à tout moment. La poursuite de l'utilisation du site après la publication des changements signifie que vous acceptez les conditions mises à jour. Nous mettrons à jour la date de « dernière mise à jour » ci-dessus à chaque modification de cette page.",
		contactHeading: "Contact",
		contactBody: "Des questions sur ces conditions ? Contactez-nous à {{email}} ou via notre {{link}}.",
		contactLinkLabel: "page de contact",
	},
	toolsHub: {
		title: "Tous les Outils de Couleur | Your Color Picker",
		description:
			"Tous les outils de couleur gratuits réunis : sélecteur de couleur, convertisseur, générateur de dégradés, vérificateur de contraste, simulateur de daltonisme, mélangeur et plus.",
		eyebrow: "Outils",
		heading: "Tous les outils",
		intro: "Tous les outils de couleur gratuits de ce site, réunis au même endroit.",
		items: [
			{
				title: "Sélecteur de Couleur d'Image",
				body: "Importez une photo et lisez le HEX, RGB et HSL exacts de n'importe quel pixel, avec une loupe et l'extraction complète de palette.",
			},
			{
				title: "Convertisseur de Couleur",
				body: "Convertissez n'importe quelle couleur entre HEX, RGB, HSL et HSV instantanément — modifiez un champ, les autres se mettent à jour en direct.",
			},
			{
				title: "Générateur de Dégradés",
				body: "Choisissez deux couleurs ou plus, prévisualisez un dégradé CSS en direct et copiez le code final.",
			},
			{
				title: "Vérificateur de Contraste",
				body: "Vérifiez le rapport de contraste WCAG entre une couleur de texte et de fond, avec des résultats AA/AAA en direct.",
			},
			{
				title: "Simulateur de Daltonisme",
				body: "Importez une image pour la voir simulée en protanopie, deutéranopie et tritanopie, côte à côte.",
			},
			{
				title: "Mélangeur de Couleurs",
				body: "Mélangez deux couleurs dans n'importe quelle proportion pour trouver la couleur exacte entre elles.",
			},
			{
				title: "Générateur de Tons et Nuances",
				body: "Générez une gamme complète de luminosité — tons clairs vers le blanc et nuances vers le noir — à partir d'une couleur de base.",
			},
			{
				title: "Générateur de Couleur Aléatoire",
				body: "Générez une couleur HEX, RGB et HSL aléatoire en un clic, avec des suggestions de palette assorties.",
			},
			{
				title: "Explorer les Couleurs",
				body: "Explorez toutes les couleurs nommées CSS standards avec leur code HEX — recherchable, cliquez pour copier.",
			},
			{
				title: "Générateur de Palettes",
				body: "Créez une palette de couleurs complète — complémentaire, analogue, triadique et monochromatique — à partir d'une couleur de base, prête à exporter.",
			},
		],
	},
	colorConverterTool: {
		title: "Convertisseur de Couleur — HEX, RGB, HSL, HSV | Your Color Picker",
		description: "Convertissez n'importe quelle couleur entre HEX, RGB, HSL et HSV instantanément. Modifiez un champ, les autres formats se mettent à jour en direct.",
		eyebrow: "Outil",
		heading: "Convertisseur de Couleur",
		intro: "Saisissez une couleur dans n'importe quel champ ci-dessous — HEX, RGB, HSL ou HSV — et les trois autres se mettent à jour en direct. Cliquez sur un format pour le copier.",
		explainerHeading: "Quelle différence entre HSV et HSL ?",
		explainerBody:
			"Les deux décrivent le même espace colorimétrique avec teinte, saturation et un troisième canal — mais le troisième canal du HSL est la luminosité (proximité du noir ou du blanc), tandis que celui du HSV est la valeur (proximité du noir, indépendamment du blanc). Le HSV est courant dans les sélecteurs de couleur des logiciels de design ; le HSL est plus courant en CSS.",
		help: {
			title: "Comment utiliser le Convertisseur de Couleur",
			steps: [
				{ title: "1. Saisissez une couleur", body: "Entrez une valeur dans n'importe quel champ — HEX, RGB, HSL ou HSV." },
				{
					title: "2. Observez les autres se mettre à jour",
					body: "Les trois autres formats se mettent à jour en direct, pour lire la même couleur dans n'importe quel format.",
				},
				{ title: "3. Copiez ce qu'il vous faut", body: "Cliquez sur Copier à côté d'un format pour copier cette valeur exacte." },
			],
		},
	},
	gradientMakerTool: {
		title: "Générateur de Dégradé CSS | Your Color Picker",
		description: "Créez un dégradé CSS linéaire ou radial à partir de deux couleurs ou plus, prévisualisez-le en direct et copiez le CSS exact.",
		eyebrow: "Outil",
		heading: "Générateur de Dégradés",
		intro: "Ajoutez des couleurs, choisissez linéaire ou radial, et copiez le dégradé CSS final.",
		addColor: "+ Ajouter une couleur",
		linear: "Linéaire",
		radial: "Radial",
		angle: "Angle",
		cssHeading: "CSS",
		copyCss: "Copier le CSS",
		remove: "Supprimer",
		help: {
			title: "Comment utiliser le Générateur de Dégradés",
			steps: [
				{ title: "1. Ajoutez vos couleurs", body: "Commencez avec deux couleurs, ou cliquez sur + Ajouter une couleur jusqu'à cinq." },
				{ title: "2. Choisissez un style", body: "Choisissez Linéaire (avec angle réglable) ou Radial." },
				{ title: "3. Copiez le CSS", body: "Le CSS exact se met à jour en direct ci-dessous — cliquez sur Copier le CSS une fois satisfait." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Simulateur de Daltonisme | Your Color Picker",
		description: "Importez une image et voyez à quoi elle ressemble pour les personnes atteintes de protanopie, deutéranopie ou tritanopie.",
		eyebrow: "Outil",
		heading: "Simulateur de Daltonisme",
		intro: "Importez une image pour la voir simulée selon les trois types courants de daltonisme, à côté de l'originale.",
		dropHint: "Glissez-déposez une image ici, ou utilisez le bouton ci-dessous",
		uploadNote: "Rien n'est téléversé où que ce soit — tout se passe entièrement dans votre navigateur.",
		original: "Originale",
		protanopia: "Protanopie (aveugle au rouge)",
		deuteranopia: "Deutéranopie (aveugle au vert)",
		tritanopia: "Tritanopie (aveugle au bleu)",
		whyHeading: "Pourquoi c'est important",
		whyBody:
			"Environ 1 homme sur 12 et 1 femme sur 200 présentent une forme de daltonisme. Simuler la protanopie, la deutéranopie et la tritanopie aide les designers à vérifier que les graphiques, états d'interface et diagrammes ne reposent pas uniquement sur la couleur pour transmettre du sens.",
		help: {
			title: "Comment utiliser le Simulateur de Daltonisme",
			steps: [
				{ title: "1. Importez une image", body: "Glissez une photo sur le panneau, ou utilisez le bouton d'import." },
				{
					title: "2. Comparez les quatre vues",
					body: "Votre image originale apparaît à côté des simulations de protanopie, deutéranopie et tritanopie.",
				},
				{
					title: "3. Vérifiez votre design",
					body: "Repérez les informations qui ne passent que par la couleur — c'est ce que ces simulations révèlent.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Explorer les Couleurs Nommées | Your Color Picker",
		description: "Explorez toutes les couleurs nommées CSS standards avec leurs codes HEX. Cliquez sur un échantillon pour copier sa valeur HEX.",
		eyebrow: "Outil",
		heading: "Explorer les Couleurs",
		introPrefix: "Toutes les couleurs nommées CSS standards (",
		introSuffix: " au total), avec leur code HEX. Cliquez sur un échantillon pour le copier.",
		searchPlaceholder: "Rechercher par nom ou hex…",
		empty: "Aucune couleur ne correspond à votre recherche.",
		help: {
			title: "Comment utiliser Explorer les Couleurs",
			steps: [
				{
					title: "1. Faites défiler ou recherchez",
					body: "Parcourez toute la grille, ou tapez un nom ou un code hex dans la recherche pour filtrer.",
				},
				{ title: "2. Cliquez pour copier", body: "Cliquez sur un échantillon pour copier son code HEX." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Vérificateur de Contraste WCAG AA/AAA | Your Color Picker",
		description: "Vérifiez le rapport de contraste WCAG entre deux couleurs pour un texte accessible, avec des résultats AA et AAA en direct.",
		eyebrow: "Outil",
		heading: "Vérificateur de Contraste",
		intro: "Saisissez une couleur de texte et une couleur de fond pour vérifier leur rapport de contraste WCAG.",
		textLabel: "Texte",
		backgroundLabel: "Fond",
		largeSample: "Exemple de grand texte (24px)",
		normalSample: "Exemple de texte normal (14px) — portez ce vieux whisky au juge blond qui fume.",
		enterValid: "Saisissez deux couleurs hexadécimales valides (ex. #171717) pour les comparer.",
		normalTextRow: "Texte normal —",
		largeTextRow: "Grand texte —",
		pass: "réussi",
		fail: "échoué",
		help: {
			title: "Comment utiliser le Vérificateur de Contraste",
			steps: [
				{ title: "1. Définissez deux couleurs", body: "Choisissez une couleur de texte et une couleur de fond via les sélecteurs ou les champs hex." },
				{ title: "2. Lisez le rapport", body: "Le rapport de contraste et l'aperçu en direct se mettent à jour instantanément." },
				{
					title: "3. Vérifiez la réussite WCAG",
					body: "Voyez en un coup d'œil si votre combinaison réussit AA ou AAA pour texte normal et grand texte.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Générateur de Couleur Aléatoire | Your Color Picker",
		description: "Générez une couleur HEX, RGB et HSL aléatoire en un clic, avec des suggestions complémentaires et analogues assorties.",
		eyebrow: "Outil",
		heading: "Générateur de Couleur Aléatoire",
		intro: "Cliquez sur Générer pour obtenir une nouvelle couleur aléatoire, avec des suggestions de palette assorties.",
		generate: "Générer une couleur aléatoire",
		help: {
			title: "Comment utiliser le Générateur de Couleur Aléatoire",
			steps: [
				{ title: "1. Cliquez sur Générer", body: "Obtenez instantanément une nouvelle couleur HEX, RGB et HSL aléatoire." },
				{ title: "2. Copiez un format", body: "Cliquez sur Copier à côté de la valeur dont vous avez besoin." },
				{
					title: "3. Explorez les suggestions",
					body: "Les suggestions complémentaires, analogues et triadiques se mettent à jour selon votre nouvelle couleur.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Mélangeur de Couleurs | Your Color Picker",
		description: "Mélangez deux couleurs dans n'importe quelle proportion pour trouver la couleur entre elles, avec sortie HEX, RGB et HSL en direct.",
		eyebrow: "Outil",
		heading: "Mélangeur de Couleurs",
		intro: "Choisissez deux couleurs et une proportion de mélange pour trouver la couleur entre elles.",
		colorA: "Couleur A",
		colorB: "Couleur B",
		blendRatio: "Proportion du mélange",
		help: {
			title: "Comment utiliser le Mélangeur de Couleurs",
			steps: [
				{ title: "1. Choisissez les couleurs A et B", body: "Choisissez deux couleurs via les sélecteurs ou les champs hex." },
				{ title: "2. Ajustez la proportion", body: "Faites glisser le curseur pour mélanger davantage vers une couleur ou l'autre." },
				{
					title: "3. Copiez le résultat",
					body: "Le HEX, RGB et HSL de la couleur mélangée se mettent à jour en direct — copiez celui dont vous avez besoin.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Générateur de Tons et Nuances | Your Color Picker",
		description: "Générez une gamme complète de tons (vers le blanc) et de nuances (vers le noir) à partir d'une couleur de base.",
		eyebrow: "Outil",
		heading: "Générateur de Tons et Nuances",
		intro: "Choisissez une couleur de base pour générer une gamme complète de luminosité — des tons presque blancs aux nuances presque noires.",
		tints: "Tons (vers le blanc)",
		base: "Base",
		shades: "Nuances (vers le noir)",
		help: {
			title: "Comment utiliser le Générateur de Tons et Nuances",
			steps: [
				{ title: "1. Choisissez une couleur de base", body: "Choisissez n'importe quelle couleur via le sélecteur ou le champ hex." },
				{
					title: "2. Lisez la gamme",
					body: "Les tons (vers le blanc) et nuances (vers le noir) sont générés automatiquement autour de votre base.",
				},
				{ title: "3. Copiez un échantillon", body: "Cliquez sur un échantillon de la gamme pour copier son code HEX." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Générateur de Palettes — Complémentaire, Analogue et Triadique | Your Color Picker",
		description:
			"Générez une palette de couleurs complète à partir de n'importe quelle couleur de base — schémas complémentaire, analogue, triadique et monochromatique, prêts à exporter en CSS, Tailwind ou JSON.",
		eyebrow: "Outil",
		heading: "Générateur de Palettes",
		intro:
			"Choisissez une couleur de base ou générez-en une aléatoirement, puis explorez les palettes complémentaires, analogues, triadiques et monochromatiques créées à partir d'elle — exportez celle de votre choix.",
		baseColorLabel: "Couleur de base",
		randomize: "Aléatoire",
		exportHeading: "Exporter",
		help: {
			title: "Comment utiliser le Générateur de Palettes",
			steps: [
				{ title: "1. Choisissez une couleur de base", body: "Choisissez une couleur via le sélecteur ou le champ hex, ou cliquez sur Aléatoire pour un point de départ." },
				{
					title: "2. Explorez les schémas",
					body: "Les palettes complémentaire, analogue, triadique et monochromatique se génèrent automatiquement à partir de votre couleur de base.",
				},
				{
					title: "3. Exportez ou copiez",
					body: "Cliquez sur un échantillon pour copier son code HEX, ou exportez toute la palette en variables CSS, configuration Tailwind ou JSON.",
				},
			],
		},
	},
	notFound: {
		title: "Page Introuvable — Your Color Picker",
		description: "La page que vous cherchez n'existe pas. Retournez sur Your Color Picker pour trouver les couleurs HEX, RGB et HSL de n'importe quelle image.",
		eyebrow: "404",
		heading: "Page introuvable",
		intro: "La page que vous cherchez n'existe pas, a peut-être été déplacée, ou l'URL comporte une erreur de frappe.",
		homeButton: "Aller à l'accueil",
		tryHeading: "Ou essayez l'une de celles-ci",
		tryTool: "Utiliser l'outil de sélection de couleur",
		tryFaq: "Parcourir la FAQ",
		tryAbout: "À propos de Your Color Picker",
		tryContact: "Nous contacter",
	},
};
