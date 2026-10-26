import type { Dictionary } from "./en";

export const es: Dictionary = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Selector de Color de Imagen",
		tools: "Herramientas",
		whyUs: "Por qué nosotros",
		faq: "Preguntas",
		blog: "Blog",
		about: "Nosotros",
		contact: "Contacto",
		howToUse: "Cómo usar",
		openMenu: "Abrir menú",
		uploadImage: "Subir imagen",
		language: "Idioma",
		games: "Juegos",
	},
	footer: {
		privacyHeading: "Privacidad",
		privacyBlurb:
			"Your Color Picker funciona íntegramente del lado del cliente para la herramienta de color en sí. Cada píxel que inspeccionas, cada paleta que extraes y cada color que guardas se calcula y almacena directamente en tu navegador usando la API de Canvas y el almacenamiento local — tu imagen nunca se sube, transmite ni es vista por ningún servidor, porque no existe ninguno en este flujo. Usamos Google Analytics para entender el tráfico general del sitio, pero ninguna imagen o dato de color se rastrea ni se comparte jamás, y borrar los datos de tu navegador elimina todo lo guardado localmente.",
		readFullPolicy: "Lee la {{link}} completa.",
		privacyPolicyLabel: "Política de Privacidad",
		aboutUs: "Sobre Nosotros",
		tools: "Todas las Herramientas",
		faq: "Preguntas Frecuentes",
		contactUs: "Contáctanos",
		privacyPolicy: "Política de Privacidad",
		termsAndConditions: "Términos y Condiciones",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Selector de color de imagen online — HEX y RGB | Your Color Picker",
		metaDescription:
			"Obtén el color de una imagen online: sube una foto o captura de pantalla y consigue al instante el código HEX, RGB y HSL exacto — gratis, sin registro, nada se sube.",
		eyebrow: "Selector de color gratis · Sin registro · Nada se sube nunca",
		heading: "El selector de color que encuentra cualquier color en una foto",
		subhead:
			"Un buscador de color desde imagen que obtiene cada código HEX, RGB y HSL con precisión de píxel — además de un buscador de color complementario integrado y un selector de color aleatorio para cuando solo necesites un punto de partida.",
		ctaPrimary: "Subir una imagen",
		ctaSecondary: "Ver qué lo hace diferente",
	},
	features: {
		heading: "Un selector de color hecho para la precisión, no solo para extraer",
		items: [
			{
				title: "Un selector de color desde imagen, píxel por píxel",
				body: "Pasa el cursor sobre la imagen y una lupa ampliada muestra cada píxel individual alrededor de tu cursor, con el píxel exacto resaltado — así este selector de color de imagen elige el que quieres, no un promedio de sus vecinos.",
			},
			{
				title: "Un buscador de código hexadecimal y buscador de color RGB, juntos",
				body: "Cada píxel funciona a la vez como buscador de código hexadecimal, buscador de color RGB y lector HSL — con su nombre de color estándar más cercano identificado en un clic.",
			},
			{
				title: "Un buscador de color complementario integrado",
				body: "Las paletas complementarias, análogas, triádicas y monocromáticas se actualizan en vivo según el color que estés señalando — un buscador de color complementario sin necesidad de conocer teoría del color.",
			},
			{
				title: "Un selector de color aleatorio, cuando lo necesites",
				body: "¿No tienes una imagen a mano? Pulsa color aleatorio para obtener un código HEX, RGB y HSL nuevo del que partir — luego guárdalo o úsalo para generar una paleta a juego.",
			},
			{
				title: "Verificador de contraste integrado",
				body: "Compara dos colores cualesquiera de tu imagen frente a los umbrales WCAG AA/AAA para texto normal y grande — sin necesidad de otra herramienta.",
			},
			{
				title: "Exporta, no solo copies",
				body: "Exporta tu paleta como variables CSS, un fragmento de configuración de Tailwind, JSON o una tira de muestras PNG descargable — o guarda los colores localmente sin necesidad de cuenta.",
			},
		],
	},
	cta: {
		heading: "¿Listo para encontrar tus colores?",
	},
	cookieConsent: {
		message: "Usamos cookies (mediante Google Analytics) para entender cómo los visitantes usan este sitio. Consulta nuestra {{link}} para más detalles.",
		linkLabel: "Política de Privacidad",
		accept: "Aceptar",
		decline: "Rechazar",
	},
	trust: {
		points: [
			"100% del lado del cliente — tu imagen nunca sale de tu navegador",
			"Sin cuenta, sin registro, sin marca de agua",
			"Funciona sin conexión una vez cargada la página",
		],
	},
	help: {
		title: "Cómo usar Your Color Picker",
		close: "Cerrar",
		done: "Entendido",
		steps: [
			{
				title: "1. Sube una imagen",
				body: "Haz clic en el área de subida, arrastra un archivo hasta ella, o pega una imagen directamente desde tu portapapeles.",
			},
			{
				title: "2. Inspecciona cualquier píxel",
				body: "Pasa el cursor sobre la imagen y una lupa muestra cada píxel alrededor de tu cursor, ampliado y con el píxel exacto resaltado — su RGB, HEX y HSL se actualizan en vivo a la derecha. También puedes enfocar la imagen y usar las teclas de flecha.",
			},
			{
				title: "3. Haz clic para ver las opciones",
				body: "Haz clic en un píxel — o pulsa Enter mientras está enfocado — para abrir sus opciones: guardarlo, verlo a pantalla completa (útil para comparar con un objeto real acercando el teléfono), copiar todos los valores a la vez, ver su nombre de color más cercano, o comprobar si se lee mejor con texto negro o blanco.",
			},
			{
				title: "4. Consulta las sugerencias, la paleta y la calidad",
				body: "\"Combina bien con\" se actualiza en vivo con muestras complementarias, análogas, triádicas y monocromáticas para el color en el que estés. \"Colores dominantes\" extrae los colores principales de toda la imagen. El área de calidad debajo de la imagen indica si es Baja, Media, Alta o HD — para que sepas cuánto confiar en lo que estás seleccionando.",
			},
			{
				title: "5. Guarda, exporta o comparte",
				body: "Los colores guardados aparecen en una simple fila de marcadores — haz clic en uno para volver a mostrarlo en la lectura en vivo. Las paletas se exportan como variables CSS, configuración de Tailwind, JSON o una tira PNG, y pueden guardarse localmente o compartirse con un enlace.",
			},
		],
	},
	tool: {
		eyebrow: "Selector de color desde imagen",
		heading: "Sube una imagen, obtén cada color en ella",
		intro:
			"Este selector de color de imagen funciona también como buscador de color desde imagen para códigos HEX, RGB y HSL. Mueve el cursor sobre la foto de ejemplo de abajo para probarlo, luego sube la tuya — nada se sube a ningún sitio, se lee y analiza íntegramente en tu navegador.",
		uploadButton: "Subir imagen",
		pickFromScreen: "Elegir de la pantalla",
		captureScreenshot: "Capturar pantalla",
		miniPicker: "Ventana selectora flotante",
		dragHint: "o arrastra y suelta un archivo sobre el panel de arriba, o pega con Ctrl/Cmd+V",
		canvasAriaLabel: "Lienzo de imagen — pasa el cursor para inspeccionar el color de un píxel, haz clic o pulsa Enter para abrir las opciones de guardar, pantalla completa y copiar",
		qualityHeading: "Calidad de imagen",
		qualityLow: "Baja",
		qualityMedium: "Media",
		qualityHigh: "Alta",
		qualityHD: "HD",
		contrastHeading: "Verificador de contraste",
		colorA: "Color A",
		colorB: "Color B",
		contrastPlaceholder: "Elige dos colores de la imagen (mediante su menú de opciones) o pega códigos hexadecimales para compararlos.",
		pickerHeading: "Selector de color",
		randomColor: "Color aleatorio",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Copiar",
		saveColor: "Guardar color",
		goesWellWith: "Combina bien con",
		goesWellWithSub: "Paletas generadas en vivo a partir del color que estás señalando — haz clic en una muestra para copiarla.",
		complementary: "Complementario",
		analogous: "Análogo",
		triadic: "Triádico",
		monochromatic: "Monocromático",
		dominantColors: "Colores dominantes",
		colorsUnit: "colores",
		paletteCountAriaLabel: "Número de colores de la paleta",
		savedColors: "Colores guardados",
		savedColorsSub: "Haz clic en la imagen, o enfócala y pulsa Enter, para ver las opciones de color — incluyendo guardar uno aquí.",
		exportHeading: "Exportar",
		exportCss: "Variables CSS",
		exportTailwind: "Configuración de Tailwind",
		exportJson: "JSON",
		exportPng: "Descargar tira PNG",
		historyHeading: "Historial",
		paletteNamePlaceholder: "Nombre de la paleta",
		save: "Guardar",
		copyLink: "Copiar enlace",
	},
	faq: {
		pageEyebrow: "Preguntas frecuentes",
		pageHeading: "Preguntas frecuentes",
		pageIntro:
			"Todo lo que nos preguntan sobre cómo elegir colores de una imagen, leer códigos HEX y RGB, y crear una paleta de colores — además de algunas preguntas sobre color que surgen en el camino.",
		metaDescription:
			"Respuestas sobre cómo elegir colores de una imagen, leer códigos HEX y RGB, y crear una paleta de colores — y otras preguntas frecuentes sobre color.",
		sectionHeading: "Selector y buscador de color — preguntas frecuentes",
		viewAll: "Ver todas las preguntas",
		items: [
			{
				q: "¿En qué se diferencia esto del selector de color de Google?",
				a: "El selector de color integrado de Google te permite elegir de una paleta o escribir un código HEX, pero no puede leer colores de una foto. Your Color Picker es un selector de color desde imagen — sube o arrastra cualquier foto y lee el HEX, RGB y HSL exactos de cualquier píxel en ella.",
			},
			{
				q: "¿Cómo encuentro el código HEX de un color en una imagen?",
				a: "Sube la imagen y luego pasa el cursor — o arrastra tu dedo en el móvil — sobre cualquier píxel. El buscador de color hexadecimal se actualiza en vivo mientras te mueves, y hacer clic en ese píxel abre opciones para copiar su HEX, RGB o HSL, guardarlo o verlo a pantalla completa.",
			},
			{
				q: "¿Qué es un buscador de color complementario?",
				a: "Un buscador de color complementario muestra el color directamente opuesto al que elegiste en la rueda de color — la combinación a la que los diseñadores recurren primero. El nuestro se actualiza en vivo junto con sugerencias análogas, triádicas y monocromáticas para el color que estés viendo.",
			},
			{
				q: "¿Puedo obtener un color aleatorio?",
				a: "Sí — el selector de color aleatorio integrado en la herramienta genera un nuevo color HEX, RGB y HSL cada vez que necesites un punto de partida, con sus propias sugerencias de paleta a juego.",
			},
			{
				q: "¿Este selector de color es gratuito y privado?",
				a: "Sí. Es gratis, sin registro, y funciona 100% del lado del cliente — tu imagen se lee y analiza íntegramente en tu navegador y nunca se sube a un servidor.",
			},
			{
				q: "¿Qué es una herramienta de selector de color?",
				a: "Una herramienta de selector de color te permite elegir o identificar un color y obtener su valor digital — normalmente como código HEX, RGB o HSL — para reutilizarlo en tu trabajo de diseño. Your Color Picker es un selector de color desde imagen: sube cualquier foto y haz clic en un píxel para leer al instante sus valores de color exactos.",
			},
			{
				q: "¿Cómo uso el atajo del selector de color?",
				a: "Los atajos integrados del sistema operativo, como Win + Shift + C de Windows (Selector de Color de PowerToys) o el Medidor de Color Digital de macOS, te permiten muestrear cualquier píxel de tu pantalla. Si prefieres no instalar nada, sube tu imagen directamente a Your Color Picker y pasa el cursor sobre ella en tu navegador — no necesitas atajos ni software.",
			},
			{
				q: "¿Cómo uso un buscador de color?",
				a: "Arrastra o sube una imagen a la herramienta, luego mueve el cursor (o el dedo en el móvil) sobre cualquier parte de la imagen. El buscador de color sigue tu posición en vivo, mostrando el HEX, RGB y HSL de ese píxel exacto — haz clic para copiar el código o guardar el color.",
			},
			{
				q: "¿Cómo cambio el color del Finder en Mac?",
				a: "Si te refieres a la app Finder de macOS, ve a Ajustes del Sistema → Apariencia y cambia el Color de Acento, que tiñe la barra lateral, las ventanas y los resaltados del Finder — no existe un ajuste de color exclusivo para el Finder. Si en cambio buscas identificar un color que ves en una foto, para eso está Your Color Picker — sube la imagen y haz clic en cualquier píxel para obtener su código exacto.",
			},
			{
				q: "¿Cómo uso un buscador de color verdadero?",
				a: "\"Color verdadero\" se refiere a una profundidad de color completa de 24 bits — más de 16 millones de tonos, igual que lo que muestra realmente tu pantalla. Your Color Picker lee los píxeles con precisión de color verdadero, así que los valores HEX y RGB que obtienes coinciden exactamente con el tono de tu imagen, no con una aproximación redondeada.",
			},
			{
				q: "¿De qué color es esto?",
				a: "Sube una foto de ello — o una captura de pantalla, si está en tu pantalla — a Your Color Picker, y pasa el cursor (o el dedo en el móvil) sobre el punto exacto. La herramienta muestra el HEX, RGB y HSL de ese píxel en vivo, y puedes hacer clic para copiarlo o guardarlo. Para una imagen completa en lugar de un punto, muestrea algunas de sus áreas más destacadas para hacerte una idea de su color general.",
			},
			{
				q: "¿De qué color es el topo (taupe)?",
				a: "El taupe es un marrón grisáceo apagado que se sitúa entre el gris y el marrón con un matiz cálido, a menudo cerca de HEX #8B8589 a #B38B6D según el tono. Los taupes de pintura y tela varían bastante, así que si tienes una muestra o foto de taupe, súbela aquí para obtener su código HEX exacto en lugar de basarte en una estimación general.",
			},
			{
				q: "¿Cómo encuentro mi paleta de colores?",
				a: "\"Paleta de colores\" puede significar dos cosas distintas. Si te refieres a los tonos que te favorecen personalmente, eso es el análisis de estación de color (Primavera, Verano, Otoño, Invierno, y sus subestaciones) — se determina colocando telas de colores cerca de tu rostro con luz natural para ver qué complementa mejor tu piel, cabello y tono de ojos, ya sea con un estilista o un cuestionario de autoevaluación en línea. Si te refieres a una paleta de diseño, la vía más precisa es muestrear colores reales de una foto de referencia — sube una a Your Color Picker y elige algunos píxeles; cada uno viene con sugerencias complementarias, análogas y triádicas integradas para completar un conjunto.",
			},
			{
				q: "¿Cómo creo una paleta de colores?",
				a: "Empieza con una imagen de referencia — una foto, una obra de arte o un panel de inspiración — y muestrea algunos de sus colores con Your Color Picker. Cada color que elijas viene con sugerencias complementarias, análogas y triádicas integradas, para que puedas construir una paleta coherente a partir de un tono inicial en lugar de adivinar combinaciones.",
			},
			{
				q: "¿Cómo se encuentra el color del aura?",
				a: "El color del aura es un concepto de las prácticas espirituales y de sanación energética, no una propiedad medible o física — normalmente se evalúa mediante fotografía de aura (como la fotografía Kirlian) o por practicantes que lo leen de forma intuitiva. No tiene relación con los valores HEX o RGB, que miden longitudes de onda de luz y no campos de energía.",
			},
			{
				q: "¿Cómo identifico el color de pintura de una pared?",
				a: "Toma una foto de la pared con luz natural, uniforme y de día — evita sombras y luz artificial, que alteran cómo se lee un color — y luego súbela a Your Color Picker y muestrea el área de la pared para obtener su HEX y RGB. Las pantallas y las condiciones de luz hacen que esto dé una coincidencia muy cercana en lugar de un resultado idéntico garantizado a la muestra, así que lleva el HEX a una tienda de pinturas para que encuentren la fórmula más parecida.",
			},
			{
				q: "¿Cuál es la mejor herramienta gratuita para invertir los colores de una imagen?",
				a: "Your Color Picker está diseñado para identificar y muestrear colores de una imagen, no para invertirlos, pero invertir colores es fácil de hacer gratis — la mayoría de las apps de fotos (Vista Previa de macOS, Fotos de Windows) tienen un filtro de inversión integrado, y editores gratuitos como GIMP o Photopea (basado en navegador, sin instalación) también lo ofrecen como filtro de un clic.",
			},
			{
				q: "¿Cómo combino el color del cinturón?",
				a: "La regla de estilo clásica es combinar el cinturón con los zapatos — cinturón marrón con zapatos marrones, negro con negro — en lugar de con el pantalón o la camisa. Para una coincidencia exacta entre dos artículos específicos, como un tono de cuero en particular, fotografía ambos con la misma luz y compara sus códigos HEX con Your Color Picker en lugar de fiarte solo del ojo.",
			},
			{
				q: "¿Qué es el color RGB?",
				a: "RGB significa Rojo, Verde, Azul — los tres canales de luz que tu pantalla mezcla para crear cada color que ves, cada uno en un rango de 0 a 255. Es un modelo de color aditivo pensado para pantallas digitales, a diferencia del modelo de mezcla de pintura que la mayoría aprende en la escuela. Your Color Picker muestra el valor RGB de cualquier píxel que muestrees de una imagen.",
			},
			{
				q: "¿Qué es el HSL en un código de color?",
				a: "HSL significa Tono (Hue), Saturación y Luminosidad — una forma alternativa de describir el mismo color que el HEX o el RGB, pero en términos más fáciles de razonar: el tono es el color base (0–360° en la rueda de color), la saturación es cuán vivo o apagado es, y la luminosidad es cuán cerca está del negro o del blanco. A menudo es más fácil ajustar un color de forma predecible en HSL — bajar la luminosidad oscurece un tono sin cambiar su matiz, por ejemplo.",
			},
		],
	},
	about: {
		title: "Sobre Nosotros — Your Color Picker",
		description:
			"Your Color Picker es un selector y buscador de color desde imagen gratuito y privado — descubre qué hace y por qué nunca se sube nada.",
		eyebrow: "Nosotros",
		heading: "Sobre Your Color Picker",
		intro: "Una herramienta pequeña y enfocada en una sola tarea: extraer valores HEX, RGB y HSL exactos de cualquier imagen, al instante y de forma privada.",
		whatHeading: "Qué hace",
		whatBody:
			"Your Color Picker es un selector de color desde imagen — sube o arrastra una foto, captura de pantalla o maqueta de diseño, y luego pasa el cursor o toca en cualquier punto para leer el color exacto de ese píxel como HEX, RGB y HSL. Haz clic en un color para copiar cualquiera de esos códigos, guardarlo en una paleta, verlo a pantalla completa, o ver colores complementarios, análogos y triádicos sugeridos junto a él. También hay un selector de color aleatorio independiente para cuando solo necesites un punto de partida.",
		whyHeading: "Por qué lo creamos",
		whyBody:
			"La mayoría de los selectores de color te dejan elegir de una muestra o escribir un código que ya conoces — pocos te dejan señalar una foto real y preguntar \"¿de qué color es exactamente eso?\". Creamos Your Color Picker para responder esa pregunta en segundos, sin pedirte instalar software, crear una cuenta o subir nada a un servidor.",
		howHeading: "Cómo funciona",
		howBody:
			"Todo se ejecuta del lado del cliente en tu navegador usando la API de Canvas de HTML. Tu imagen se decodifica y se lee localmente en tu dispositivo — nunca se transmite a ningún lado, porque no hay ningún paso de subida en el flujo. Los colores guardados viven en el almacenamiento local de tu navegador, así que permanecen en tu dispositivo y desaparecen si borras los datos de tu navegador. Consulta nuestra {{link}} para más detalles.",
		howLinkLabel: "Política de Privacidad",
		whoHeading: "Para quién es",
		whoBody:
			"Diseñadores que buscan un código HEX de una imagen de referencia, desarrolladores que extraen colores de marca de una captura de pantalla, pintores y decoradores que verifican el color de una pared o tela a partir de una foto, y cualquiera que alguna vez haya mirado algo y se haya preguntado exactamente de qué tono es.",
		questionsHeading: "¿Preguntas?",
		questionsFaqBody: "Consulta nuestras {{link}} para dudas comunes.",
		questionsFaqLinkLabel: "Preguntas Frecuentes",
		questionsContactBody: "O {{link}} directamente — leemos todos los mensajes.",
		questionsContactLinkLabel: "contáctanos",
	},
	contact: {
		title: "Contáctanos — Your Color Picker",
		description: "Ponte en contacto sobre Your Color Picker — informes de errores, ideas de funciones o comentarios generales. Leemos todos los mensajes.",
		eyebrow: "Contacto",
		heading: "Contáctanos",
		intro: "¿Encontraste un error, tienes una idea de función o simplemente quieres saludar? Envíanos un mensaje — leemos todo lo que llega.",
		emailHeading: "Escríbenos",
		sendEmailButton: "Enviar un correo",
		includeHeading: "Qué incluir",
		includeBody:
			"Para informes de errores, cuéntanos qué dispositivo y navegador estás usando y, si puedes, qué estabas haciendo justo antes de que apareciera el problema. Para ideas de funciones o comentarios generales, dinos simplemente qué te resultaría útil — leemos todos los mensajes y procuramos responder en unos días hábiles.",
		beforeHeading: "Antes de escribirnos",
		beforeFaqBody: "Las preguntas rápidas sobre cómo funciona la herramienta suelen estar ya respondidas en nuestra {{link}}.",
		beforeFaqLinkLabel: "página de preguntas frecuentes",
		beforePrivacyBody: "Para preguntas sobre cómo se manejan tus datos, consulta nuestra {{link}}.",
		beforePrivacyLinkLabel: "Política de Privacidad",
	},
	privacy: {
		title: "Política de Privacidad — Your Color Picker",
		description: "Política de privacidad de Your Color Picker: tus imágenes se procesan íntegramente en tu navegador y nunca se suben, transmiten ni almacenan en un servidor.",
		eyebrow: "Legal",
		heading: "Política de Privacidad",
		lastUpdatedPrefix: "Última actualización:",
		shortHeading: "La versión corta",
		shortBody:
			"Your Color Picker funciona íntegramente en tu navegador. Cualquier imagen que subas se lee y analiza localmente en tu dispositivo usando la API de Canvas — nunca se sube, transmite ni almacena en ningún servidor, porque este sitio no tiene ningún componente de servidor en ese flujo. Sí usamos Google Analytics para entender el tráfico general del sitio — consulta \"Cookies y rastreo\" más abajo para más detalles.",
		imagesHeading: "Imágenes que subes",
		imagesBody:
			"Cuando subes o arrastras una imagen, se decodifica y renderiza directamente en la memoria de tu navegador para hacer funcionar el selector de color. No se envía por la red a nosotros ni a terceros. Cerrar o recargar la pestaña descarta la imagen por completo.",
		storageHeading: "Qué almacenamos localmente",
		storageBody:
			"La herramienta usa el almacenamiento local de tu navegador — una tecnología web estándar, no una cookie — para recordar dos cosas en tu propio dispositivo: tu preferencia de tema claro/oscuro, y cualquier color que elijas guardar mientras usas la herramienta. Estos datos nunca salen de tu dispositivo, nunca son visibles para nosotros, y se eliminan automáticamente si borras los datos del sitio en tu navegador.",
		cookiesHeading: "Cookies y rastreo",
		cookiesBody:
			"Usamos Google Analytics para entender el tráfico general — por ejemplo, qué páginas son populares y de dónde vienen aproximadamente los visitantes. Establece cookies y puede recopilar información como tu ubicación aproximada, el tipo de dispositivo y navegador, y las páginas que visitas. Esto es completamente independiente de la herramienta de color en sí: tus imágenes y los colores que muestreas nunca se envían a Google ni a nadie más. Puedes desactivarlo con el {{optout}}, o consultar la {{privacy}} para más detalles sobre cómo Google maneja estos datos.",
		cookiesOptoutLabel: "complemento de inhabilitación para navegadores de Google Analytics",
		cookiesGooglePrivacyLabel: "Política de Privacidad de Google",
		hostingHeading: "Alojamiento y registros del servidor",
		hostingBody:
			"Como cualquier sitio web, nuestro proveedor de alojamiento puede mantener registros de acceso estándar del servidor (como dirección IP, tipo de navegador y marcas de tiempo de las solicitudes) por motivos de seguridad y fiabilidad. Estos registros los genera la propia infraestructura de alojamiento, no el código de este sitio, y no tienen relación con ningún dato de imagen o color — nada de eso llega jamás a un servidor.",
		childrenHeading: "Privacidad de los menores",
		childrenBody:
			"Your Color Picker no recopila a sabiendas información personal de nadie, incluidos los menores, porque no recopila información personal en absoluto — no hay sistema de cuentas y nada de lo que introduces se nos transmite.",
		changesHeading: "Cambios en esta política",
		changesBody:
			"Si esta política cambia, actualizaremos la fecha de \"última actualización\" de arriba. Los cambios significativos — como añadir cualquier forma de recopilación de datos — se reflejarán claramente en esta página.",
		contactHeading: "Contacto",
		contactBody: "¿Preguntas sobre esta política? Escríbenos a {{email}} o mediante nuestra {{link}}.",
		contactLinkLabel: "página de contacto",
	},
	terms: {
		title: "Términos y Condiciones — Your Color Picker",
		description: "Los términos y condiciones para usar Your Color Picker, un selector de color y buscador de color desde imagen gratuito basado en el navegador.",
		eyebrow: "Legal",
		heading: "Términos y condiciones",
		lastUpdatedPrefix: "Última actualización:",
		acceptanceHeading: "Aceptación de los términos",
		acceptanceBody: "Al usar Your Color Picker (\"la herramienta\", \"el sitio\"), aceptas estos términos. Si no estás de acuerdo con ellos, por favor no uses el sitio.",
		useHeading: "Uso del servicio",
		useBody:
			"Your Color Picker es gratuito de usar, para fines personales o comerciales, sin necesidad de registro. Aceptas usarlo solo para fines lícitos y no intentar interrumpirlo, aplicar ingeniería inversa con fines maliciosos, ni abusar del servicio de forma que perjudique a otros usuarios.",
		contentHeading: "Tus imágenes y contenido",
		contentBody:
			"Cualquier imagen que uses con la herramienta se procesa íntegramente en tu propio navegador y nunca se nos sube — nunca la recibimos, almacenamos ni tenemos acceso a ella, así que no reclamamos ningún derecho sobre ella. Eres el único responsable de asegurarte de tener derecho a usar cualquier imagen que cargues en la herramienta. Consulta nuestra {{link}} para más información sobre cómo maneja los datos la herramienta.",
		contentLinkLabel: "Política de Privacidad",
		warrantyHeading: "Sin garantía",
		warrantyBody:
			"Your Color Picker se ofrece \"tal cual\", sin garantía de ningún tipo, expresa o implícita. Aunque buscamos que los valores de color que reporta sean precisos, no garantizamos una precisión perfecta para cada imagen, dispositivo o pantalla — la calibración de pantalla, la compresión de imagen y los perfiles de color pueden afectar los valores exactos que ves. No lo uses como única fuente para decisiones donde la precisión del color sea crítica (por ejemplo, producción final de pintura o impresión) sin verificación independiente.",
		liabilityHeading: "Limitación de responsabilidad",
		liabilityBody:
			"En la máxima medida permitida por la ley, no somos responsables de ningún daño indirecto, incidental o consecuente que surja del uso o la imposibilidad de uso del sitio o la herramienta.",
		linksHeading: "Enlaces a terceros",
		linksBody: "Las páginas de este sitio pueden enlazar a recursos de terceros como contexto. No somos responsables del contenido, la precisión ni las prácticas de ningún sitio que no operemos.",
		changesHeading: "Cambios en el servicio o estos términos",
		changesBody:
			"Podemos actualizar la herramienta o estos términos en cualquier momento. El uso continuado del sitio después de publicados los cambios significa que aceptas los términos actualizados. Actualizaremos la fecha de \"última actualización\" de arriba cada vez que esta página cambie.",
		contactHeading: "Contacto",
		contactBody: "¿Preguntas sobre estos términos? Escríbenos a {{email}} o mediante nuestra {{link}}.",
		contactLinkLabel: "página de contacto",
	},
	toolsHub: {
		title: "Todas las Herramientas de Color | Your Color Picker",
		description:
			"Todas las herramientas de color gratuitas en un solo lugar: selector de color, conversor, generador de degradados, verificador de contraste, simulador de daltonismo, mezclador y más.",
		eyebrow: "Herramientas",
		heading: "Todas las herramientas",
		intro: "Todas las herramientas de color gratuitas de este sitio, en un solo lugar.",
		guidesHeading: "Guías",
		items: [
			{
				title: "Selector de Color de Imagen",
				body: "Sube una foto y lee el HEX, RGB y HSL exactos de cualquier píxel, con una lupa y extracción completa de paleta.",
			},
			{
				title: "Conversor de Color",
				body: "Convierte cualquier color entre HEX, RGB, HSL y HSV al instante — edita cualquier campo y los demás se actualizan en vivo.",
			},
			{
				title: "Generador de Degradados",
				body: "Elige dos o más colores, previsualiza un degradado CSS en vivo y copia el código terminado.",
			},
			{
				title: "Verificador de Contraste",
				body: "Comprueba la relación de contraste WCAG entre un color de texto y de fondo, con resultados AA/AAA en vivo.",
			},
			{
				title: "Simulador de Daltonismo",
				body: "Sube una imagen para verla simulada con protanopia, deuteranopia y tritanopia, una junto a otra.",
			},
			{
				title: "Mezclador de Colores",
				body: "Mezcla dos colores en cualquier proporción para encontrar el color exacto entre ellos.",
			},
			{
				title: "Generador de Tonos y Matices",
				body: "Genera una escala completa de luminosidad — tonos hacia el blanco y matices hacia el negro — a partir de un color base.",
			},
			{
				title: "Generador de Color Aleatorio",
				body: "Genera un color HEX, RGB y HSL aleatorio con un clic, con sugerencias de paleta a juego.",
			},
			{
				title: "Explorar Colores",
				body: "Explora todos los colores estándar con nombre de CSS y su código HEX — buscable, clic para copiar.",
			},
			{
				title: "Generador de Paletas",
				body: "Crea una paleta de colores completa — complementaria, análoga, triádica y monocromática — a partir de un color base, lista para exportar.",
			},
		],
	},
	games: {
		hub: {
			title: "Juegos de colores gratis — Pon a prueba tu visión del color | Your Color Picker",
			description: "Juega gratis: Color Runner, un test de visión para encontrar el color distinto y un desafío de memoria de color. Sin registro, en tu navegador.",
			eyebrow: "Juegos",
			heading: "Juegos de colores",
			intro: "Juegos rápidos y gratuitos que entrenan tu ojo para el color. Supera tu récord y vuelve cada día por una nueva ronda de Memoria de color.",
			play: "Jugar",
			newBadge: "Nuevo",
			dailyBadge: "Diario"
		},
		banner: {
			heading: "Juega a juegos de colores gratis",
			body: "Color Runner, un test para encontrar el color distinto y memoria de color: ¿qué tan fino es tu ojo?",
			cta: "Jugar ahora"
		},
		common: {
			share: "Compartir resultado",
			copied: "¡Copiado! Pégalo donde quieras.",
			playAgain: "Jugar otra vez",
			start: "Empezar",
			best: "Mejor",
			moreGames: "Más juegos de colores",
			allGames: "Todos los juegos"
		},
		odd: {
			title: "Color distinto — Juego gratis de visión del color | Your Color Picker",
			description: "Encuentra la única casilla con un tono ligeramente distinto. En cada nivel la cuadrícula crece y la diferencia se reduce: ¿hasta dónde llega tu vista?",
			eyebrow: "Juego",
			heading: "Color distinto",
			intro: "Toca la casilla que no encaja. En cada nivel la cuadrícula crece y la diferencia es menor. Tienes tres vidas.",
			cardBody: "Encuentra la casilla con un tono ligeramente distinto. Los niveles se complican hasta que solo sobreviven los ojos más finos.",
			level: "Nivel",
			lives: "Vidas",
			tileLabel: "Casilla {n}",
			gameOver: "Fin de la partida: llegaste al nivel {n}.",
			rankLabel: "Tu ojo: {rank}",
			ranks: [
				"Principiante",
				"Buen ojo",
				"Ojo agudo",
				"Ojo de águila",
				"Halcón del color",
				"Sobrehumano"
			],
			bestLevel: "Mejor: nivel {n}",
			help: {
				title: "Cómo jugar a Color distinto",
				steps: [
					{
						title: "Encuentra la casilla distinta",
						body: "Una casilla tiene un tono ligeramente diferente al resto. Tócala para pasar de nivel."
					},
					{
						title: "Cada vez más difícil",
						body: "Cada nivel añade casillas y reduce la diferencia."
					},
					{
						title: "Tres vidas",
						body: "Un toque erróneo cuesta una vida y te muestra dónde estaba la casilla. Si pierdes las tres, termina la partida."
					}
				]
			},
			explainerHeading: "Qué mide este juego",
			explainerBody: "La casilla distinta solo cambia en luminosidad, algo que casi todo el mundo percibe, incluidas las personas con deficiencias en la visión del color. Los niveles altos ponen a prueba la diferencia más pequeña que puedes notar. El brillo de la pantalla, los reflejos y la calidad del monitor influyen, así que tómalo como un reto divertido, no como un examen médico."
		},
		runner: {
			title: "Color Runner — Juego pixelado gratis de correr por colores | Your Color Picker",
			description: "¡Corre por el color correcto! Un juego de carreras infinito en pixel art: cambia entre tres carriles de colores, quédate en el color indicado y atrapa cubos dorados para 10 segundos de protección.",
			eyebrow: "Juego arcade",
			heading: "Color Runner",
			intro: "Corre, cambia de carril y quédate siempre en el color escrito arriba. Los carriles cambian sin parar y el ritmo sube: atrapa un cubo dorado para 10 segundos de protección.",
			cardBody: "Un corredor infinito pixelado: quédate en el carril del color indicado y atrapa cubos dorados para 10 segundos de oro. ¿Hasta dónde llegarás?",
			runOn: "Corre por",
			next: "Siguiente",
			goldActive: "¡Dorado!",
			distance: "{n} m",
			best: "Mejor: {n} m",
			newBest: "¡Nuevo récord! 🎉",
			controls: "← → cambia de carril · ↑ o Espacio para saltar · en el móvil, desliza",
			overColor: "¡Te saliste del camino {color}!",
			final: "Corriste {n} m",
			left: "Mover a la izquierda",
			right: "Mover a la derecha",
			jump: "Saltar",
			resume: "Continuar",
			sound: "Sonido",
			colors: {
				red: "Rojo",
				blue: "Azul",
				yellow: "Amarillo",
				green: "Verde",
				pink: "Rosa",
				orange: "Naranja",
				purple: "Morado"
			},
			help: {
				title: "Cómo jugar a Color Runner",
				steps: [
					{
						title: "Sigue el color",
						body: "El color de arriba te dice por qué carril correr. Si te sales más de un instante, la carrera termina."
					},
					{
						title: "Atento a los cambios",
						body: "Los colores de los carriles cambian mientras corres, y un aviso SIGUIENTE parpadea antes de que cambie el color objetivo. Muévete con tiempo."
					},
					{
						title: "Atrapa el oro y salta los cambios",
						body: "Los cubos dorados aparecen justo en tu camino: atrapa uno y tu corredor se vuelve dorado durante 10 segundos, sin que puedas perder. Pulsa ↑ o Espacio (o desliza hacia arriba) para saltar un tramo corto del color equivocado mientras cambias de carril."
					}
				]
			},
			explainerHeading: "Por qué cuesta cambiar de color",
			explainerBody: "Leer el nombre de un color y emparejarlo con el color real exige esfuerzo mental, sobre todo cuando los colores alrededor no paran de cambiar; es primo del famoso efecto Stroop. La velocidad lo complica: el cerebro tiene menos tiempo para comparar la palabra con los carriles, así que el juego entrena un reconocimiento del color rápido y preciso."
		},
		memory: {
			title: "Memoria de color — Recrea el color de memoria | Your Color Picker",
			description: "Mira un color durante 3 segundos y recréalo de memoria con controles de tono, saturación y luminosidad. Cinco rondas, puntuadas sobre 100.",
			eyebrow: "Juego",
			heading: "Memoria de color",
			intro: "Observa un color durante tres segundos y reconstrúyelo de memoria con controles de tono, saturación y luminosidad. Cinco rondas, puntuadas sobre 100.",
			cardBody: "Mira un color 3 segundos y recréalo de memoria. Cinco rondas: ¿llegarás a 90?",
			dailyMode: "Diario",
			practiceMode: "Práctica",
			dailyDone: "Ya jugaste la ronda diaria de hoy: prueba el modo Práctica o vuelve mañana.",
			round: "Ronda {n}/5",
			memorize: "Memoriza este color",
			recreate: "Ahora recréalo",
			hue: "Tono",
			saturation: "Saturación",
			lightness: "Luminosidad",
			submit: "Enviar",
			next: "Siguiente ronda",
			target: "Objetivo",
			yours: "El tuyo",
			roundScore: "{score} / 100",
			final: "Puntuación final: {score} / 100",
			bestScore: "Mejor: {score}",
			help: {
				title: "Cómo jugar a Memoria de color",
				steps: [
					{
						title: "Memoriza",
						body: "Un color llena el panel durante tres segundos. Obsérvalo bien."
					},
					{
						title: "Recrea",
						body: "Usa los controles de tono, saturación y luminosidad para reconstruirlo de memoria y pulsa Enviar."
					},
					{
						title: "Puntúa",
						body: "Cada ronda se puntúa sobre 100 según lo parecido que se vea tu color al original. El modo diario da a todos los mismos cinco colores."
					}
				]
			},
			explainerHeading: "Por qué cuesta recordar colores",
			explainerBody: "Recordamos los colores como categorías («azul», «turquesa») más que como valores exactos, así que la memoria tiende a la versión típica de cada color. La puntuación usa el espacio de color CIELAB, que mide la diferencia como la percibe el ojo, por lo que fallar el tono cuesta más que un pequeño error de luminosidad."
		}
	},
	moreTools: {
		heading: "Prueba más herramientas de color gratis",
		body: "Conversor, creador de degradados, verificador de contraste, generador de paletas y más: gratis, rápido y 100 % privado.",
		cta: "Ver todas las herramientas",
	},
	relatedTools: {
		heading: "Herramientas relacionadas",
	},
	colorConverterTool: {
		title: "Conversor de Color — HEX, RGB, HSL, HSV | Your Color Picker",
		description: "Convierte cualquier color entre HEX, RGB, HSL y HSV al instante. Edita cualquier campo y los demás formatos se actualizan en vivo.",
		eyebrow: "Herramienta",
		heading: "Conversor de Color",
		intro: "Escribe un color en cualquier campo de abajo — HEX, RGB, HSL o HSV — y los otros tres se actualizan en vivo. Haz clic en cualquier formato para copiarlo.",
		explainerHeading: "¿Qué diferencia hay entre HSV y HSL?",
		explainerBody:
			"Ambos describen el mismo espacio de color con tono, saturación y un tercer canal — pero el tercer valor de HSL es la luminosidad (qué tan cerca está del negro o el blanco), mientras que el de HSV es el valor (qué tan cerca está del negro, sin importar el blanco). HSV es común en selectores de color de software de diseño; HSL es más común en CSS.",
		help: {
			title: "Cómo usar el Conversor de Color",
			steps: [
				{ title: "1. Escribe un color", body: "Introduce un valor en cualquier campo — HEX, RGB, HSL o HSV." },
				{
					title: "2. Observa cómo se actualizan los demás",
					body: "Los otros tres formatos se actualizan en vivo para coincidir, así puedes leer el mismo color en cualquier formato.",
				},
				{ title: "3. Copia lo que necesites", body: "Haz clic en Copiar junto a cualquier formato para copiar ese valor exacto." },
			],
		},
	},
	gradientMakerTool: {
		title: "Generador de Degradados CSS | Your Color Picker",
		description: "Crea un degradado CSS lineal o radial a partir de dos o más colores, previsualízalo en vivo y copia el CSS exacto.",
		eyebrow: "Herramienta",
		heading: "Generador de Degradados",
		intro: "Añade colores, elige lineal o radial, y copia el degradado CSS terminado.",
		explainerHeading: "¿Por qué usar un degradado CSS?",
		explainerBody:
			"Los degradados dan profundidad a un fondo plano sin necesidad de cargar una imagen — se usan mucho en secciones hero, botones y overlays. Los degradados lineales mezclan colores en línea recta con cualquier ángulo; los radiales se expanden desde un punto central. Ajusta tus colores aquí y copia el CSS exacto, listo para pegar en cualquier hoja de estilos.",
		addColor: "+ Añadir color",
		linear: "Lineal",
		radial: "Radial",
		angle: "Ángulo",
		cssHeading: "CSS",
		copyCss: "Copiar CSS",
		remove: "Eliminar",
		help: {
			title: "Cómo usar el Generador de Degradados",
			steps: [
				{ title: "1. Añade tus colores", body: "Empieza con dos colores, o haz clic en + Añadir color hasta cinco paradas." },
				{ title: "2. Elige un estilo", body: "Elige Lineal (con ángulo ajustable) o Radial." },
				{ title: "3. Copia el CSS", body: "El CSS exacto se actualiza en vivo abajo — haz clic en Copiar CSS cuando estés listo." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Simulador de Daltonismo | Your Color Picker",
		description: "Sube una imagen y observa cómo la ven las personas con protanopia, deuteranopia o tritanopia.",
		eyebrow: "Herramienta",
		heading: "Simulador de Daltonismo",
		intro: "Sube una imagen para verla simulada con los tres tipos comunes de daltonismo, junto a la original.",
		dropHint: "Arrastra y suelta una imagen aquí, o usa el botón de abajo",
		uploadNote: "Nada se sube a ningún sitio — esto funciona íntegramente en tu navegador.",
		original: "Original",
		protanopia: "Protanopia (ceguera al rojo)",
		deuteranopia: "Deuteranopia (ceguera al verde)",
		tritanopia: "Tritanopia (ceguera al azul)",
		whyHeading: "Por qué importa",
		whyBody:
			"Aproximadamente 1 de cada 12 hombres y 1 de cada 200 mujeres tiene alguna forma de daltonismo. Simular protanopia, deuteranopia y tritanopia ayuda a los diseñadores a comprobar que gráficos, estados de interfaz y diagramas no dependan solo del color para comunicar su significado.",
		help: {
			title: "Cómo usar el Simulador de Daltonismo",
			steps: [
				{ title: "1. Sube una imagen", body: "Arrastra una foto al panel, o usa el botón de subida." },
				{
					title: "2. Compara las cuatro vistas",
					body: "Tu imagen original aparece junto a las simulaciones de protanopia, deuteranopia y tritanopia.",
				},
				{
					title: "3. Revisa tu diseño",
					body: "Busca información que solo se transmita a través del color — eso es lo que revelan estas simulaciones.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Explorar Colores con Nombre | Your Color Picker",
		description: "Explora todos los colores estándar con nombre de CSS y sus códigos HEX. Haz clic en cualquier muestra para copiar su valor HEX.",
		eyebrow: "Herramienta",
		heading: "Explorar Colores",
		introPrefix: "Todos los colores estándar de CSS con nombre (",
		introSuffix: " en total), con su código HEX. Haz clic en una muestra para copiar.",
		searchPlaceholder: "Buscar por nombre o hex…",
		empty: "Ningún color coincide con tu búsqueda.",
		help: {
			title: "Cómo usar Explorar Colores",
			steps: [
				{ title: "1. Desplázate o busca", body: "Explora toda la cuadrícula, o escribe un nombre o código hex en el buscador para filtrar." },
				{ title: "2. Haz clic para copiar", body: "Haz clic en cualquier muestra para copiar su código HEX." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Verificador de Contraste WCAG AA/AAA | Your Color Picker",
		description: "Comprueba la relación de contraste WCAG entre dos colores para un texto accesible, con resultados AA y AAA en vivo.",
		eyebrow: "Herramienta",
		heading: "Verificador de Contraste",
		intro: "Introduce un color de texto y un color de fondo para comprobar su relación de contraste WCAG.",
		explainerHeading: "Por qué importa el ratio de contraste",
		explainerBody:
			"WCAG define ratios mínimos de contraste para que el texto siga siendo legible para personas con baja visión o daltonismo: 4.5:1 para texto normal y 3:1 para texto grande en el nivel AA, subiendo a 7:1 y 4.5:1 en el nivel AAA, más estricto. Comprobar tu combinación de texto y fondo con estos umbrales es una de las formas más simples de hacer un diseño más accesible.",
		textLabel: "Texto",
		backgroundLabel: "Fondo",
		largeSample: "Muestra de texto grande (24px)",
		normalSample: "Muestra de texto normal (14px) — el veloz murciélago hindú comía feliz cardillo y kiwi.",
		enterValid: "Introduce dos colores hexadecimales válidos (p. ej. #171717) para compararlos.",
		normalTextRow: "Texto normal —",
		largeTextRow: "Texto grande —",
		pass: "aprueba",
		fail: "no aprueba",
		help: {
			title: "Cómo usar el Verificador de Contraste",
			steps: [
				{ title: "1. Define dos colores", body: "Elige un color de texto y uno de fondo con los selectores o los campos hex." },
				{ title: "2. Lee la relación", body: "La relación de contraste y la vista previa en vivo se actualizan al instante." },
				{
					title: "3. Comprueba el pase WCAG",
					body: "Ve de un vistazo si tu combinación aprueba AA o AAA para texto normal y grande.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Generador de Color Aleatorio | Your Color Picker",
		description: "Genera un color HEX, RGB y HSL aleatorio con un clic, junto con sugerencias complementarias y análogas a juego.",
		eyebrow: "Herramienta",
		heading: "Generador de Color Aleatorio",
		intro: "Haz clic en Generar para obtener un color aleatorio nuevo, con sugerencias de paleta a juego.",
		explainerHeading: "Cuándo ayuda un color aleatorio",
		explainerBody:
			"A veces lo más difícil al elegir un color es encontrar un punto de partida. Generar un código HEX, RGB y HSL al azar — junto con sus combinaciones complementarias y análogas — te da algo concreto para reaccionar y ajustar, en lugar de quedarte mirando un selector de color en blanco.",
		generate: "Generar color aleatorio",
		help: {
			title: "Cómo usar el Generador de Color Aleatorio",
			steps: [
				{ title: "1. Haz clic en Generar", body: "Obtén al instante un nuevo color HEX, RGB y HSL aleatorio." },
				{ title: "2. Copia cualquier formato", body: "Haz clic en Copiar junto al valor que necesites." },
				{
					title: "3. Explora las combinaciones",
					body: "Las sugerencias complementarias, análogas y triádicas se actualizan según tu nuevo color.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Mezclador de Colores | Your Color Picker",
		description: "Mezcla dos colores en cualquier proporción para encontrar el color entre ellos, con salida HEX, RGB y HSL en vivo.",
		eyebrow: "Herramienta",
		heading: "Mezclador de Colores",
		intro: "Elige dos colores y una proporción de mezcla para encontrar el color entre ellos.",
		explainerHeading: "Cómo funciona esta mezcla de colores",
		explainerBody:
			"Este mezclador combina dos colores en el espacio RGB según la proporción que elijas, en lugar de simular pintura o pigmento — así que un 50/50 de rojo y azul da un morado limpio, tal como se combinan los colores en pantalla. Útil para encontrar un tono intermedio entre los dos colores principales de una marca, o para previsualizar un estado hover.",
		colorA: "Color A",
		colorB: "Color B",
		blendRatio: "Proporción de mezcla",
		help: {
			title: "Cómo usar el Mezclador de Colores",
			steps: [
				{ title: "1. Elige el Color A y B", body: "Elige dos colores con los selectores o los campos hex." },
				{ title: "2. Ajusta la proporción", body: "Arrastra el control deslizante para mezclar más hacia un color u otro." },
				{
					title: "3. Copia el resultado",
					body: "El HEX, RGB y HSL del color mezclado se actualizan en vivo — copia el que necesites.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Generador de Tonos y Matices | Your Color Picker",
		description: "Genera una escala completa de tonos (hacia el blanco) y matices (hacia el negro) a partir de un color base.",
		eyebrow: "Herramienta",
		heading: "Generador de Tonos y Matices",
		intro: "Elige un color base para generar una escala completa de luminosidad — desde tonos casi blancos hasta matices casi negros.",
		explainerHeading: "Tintes vs. sombras",
		explainerBody:
			"Un tinte es tu color base mezclado hacia el blanco — más claro y suave, útil para fondos y estados hover. Una sombra es el mismo color mezclado hacia el negro — más oscuro e intenso, útil para texto o bordes que deben seguir relacionados con el color base. Generar una rampa completa de ambos te da un conjunto coherente para construir una escala de color.",
		tints: "Tonos (hacia el blanco)",
		base: "Base",
		shades: "Matices (hacia el negro)",
		help: {
			title: "Cómo usar el Generador de Tonos y Matices",
			steps: [
				{ title: "1. Elige un color base", body: "Elige cualquier color con el selector o el campo hex." },
				{
					title: "2. Lee la escala",
					body: "Los tonos (hacia el blanco) y matices (hacia el negro) se generan automáticamente alrededor de tu base.",
				},
				{ title: "3. Copia cualquier muestra", body: "Haz clic en cualquier muestra de la escala para copiar su código HEX." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Generador de Paletas — Esquemas de Color | Your Color Picker",
		description:
			"Genera una paleta de colores completa a partir de cualquier color base — esquemas complementario, análogo, triádico y monocromático, listos para exportar como CSS, Tailwind o JSON.",
		eyebrow: "Herramienta",
		heading: "Generador de Paletas",
		explainerHeading: "Complementario, análogo y triádico, explicados",
		explainerBody:
			"Son relaciones clásicas de la rueda de color: los complementarios están uno frente al otro para máximo contraste, los análogos están uno junto al otro para un look calmado y cohesivo, y los triádicos distribuyen tres colores de forma uniforme en la rueda para una variedad equilibrada. Partiendo de un color base y generando los tres, obtienes varias direcciones listas para elegir.",
		intro:
			"Elige un color base o genera uno aleatorio, luego explora paletas complementarias, análogas, triádicas y monocromáticas creadas a partir de él — exporta cualquiera cuando estés listo.",
		baseColorLabel: "Color base",
		randomize: "Aleatorio",
		exportHeading: "Exportar",
		help: {
			title: "Cómo usar el Generador de Paletas",
			steps: [
				{ title: "1. Elige un color base", body: "Elige cualquier color con el selector o el campo hex, o haz clic en Aleatorio para un punto de partida." },
				{
					title: "2. Explora los esquemas",
					body: "Las paletas complementaria, análoga, triádica y monocromática se generan automáticamente a partir de tu color base.",
				},
				{
					title: "3. Exporta o copia",
					body: "Haz clic en cualquier muestra para copiar su código HEX, o exporta toda la paleta como variables CSS, configuración de Tailwind o JSON.",
				},
			],
		},
	},
	eyedropperGuide: {
		title: "Cuentagotas Online — Elige Cualquier Color | Your Color Picker",
		description:
			"Cuentagotas online gratuito: elige cualquier color de tu pantalla o de una imagen y obtén al instante los códigos HEX, RGB y HSL. 100% privado, no se sube nada.",
		eyebrow: "Guía",
		heading: "Cuentagotas Online",
		intro: "Elige cualquier color de tu pantalla, una captura de pantalla o una foto, directamente en tu navegador — sin extensiones ni instalaciones.",
		explainerHeading: "Cómo funciona el cuentagotas",
		explainerBody:
			"Este cuentagotas usa las herramientas de selección de color integradas en tu navegador para tomar una muestra de cualquier píxel de tu pantalla, o te permite subir una imagen y hacer clic directamente sobre un píxel. En ambos casos obtienes al instante el valor exacto en HEX, RGB y HSL, listo para copiar en tu herramienta de diseño, CSS o editor de código.",
		faqHeading: "Preguntas frecuentes",
		faq: [
			{
				q: "¿Este cuentagotas funciona en el móvil?",
				a: "Elegir un color de una imagen subida funciona en cualquier dispositivo, incluidos móviles y tabletas. Elegir directamente de la pantalla usa una función del navegador (la API EyeDropper) disponible actualmente en Chrome, Edge y otros navegadores basados en Chromium en escritorio.",
			},
			{
				q: "¿Se sube algo a un servidor?",
				a: "No. Cada píxel se lee localmente en tu navegador mediante la API Canvas — tu imagen y tu pantalla nunca salen de tu dispositivo.",
			},
			{
				q: "¿Qué formatos de color obtengo?",
				a: "HEX, RGB y HSL para cada color que elijas, cada uno con un botón de copiado con un solo clic.",
			},
		],
	},
	hexFromImageGuide: {
		title: "Obtener el Código HEX de una Imagen | Your Color Picker",
		description:
			"Sube cualquier foto y obtén al instante el código HEX exacto de cualquier píxel, además de RGB, HSL y una paleta completa. Gratis y 100% privado — nada sale de tu dispositivo.",
		eyebrow: "Guía",
		heading: "Obtén el Código HEX de Cualquier Imagen",
		intro: "Sube una foto, captura de pantalla o logo y haz clic en cualquier píxel para leer su código HEX exacto, junto con RGB, HSL y una paleta de colores a juego.",
		explainerHeading: "Cómo encontrar un código HEX en una foto",
		explainerBody:
			"Suelta una imagen en la herramienta de abajo y luego haz clic o pasa el cursor sobre cualquier píxel para leer su color exacto. HEX, RGB y HSL se actualizan al instante, y puedes extraer una paleta completa de la imagen con un solo clic. Todo se ejecuta en tu navegador, así que la imagen nunca se sube a un servidor.",
		faqHeading: "Preguntas frecuentes",
		faq: [
			{
				q: "¿Puedo obtener el código HEX de una captura de pantalla?",
				a: "Sí — sube una captura de pantalla igual que subirías cualquier foto y luego haz clic en el píxel del que quieres el código HEX.",
			},
			{
				q: "¿Funciona con un logo o un PNG transparente?",
				a: "Sí, funciona con imágenes PNG, JPG y WebP, incluidos los PNG transparentes — las zonas transparentes se leen como el color del píxel subyacente.",
			},
			{
				q: "¿Se sube mi imagen a algún sitio?",
				a: "No. La imagen se decodifica y se lee completamente en tu navegador mediante la API Canvas — nunca sale de tu dispositivo.",
			},
		],
	},
	blog: {
		title: "Blog de Color — Teoría del Color y Diseño | Your Color Picker",
		description: "Guías de teoría del color, HEX/RGB/HSL, accesibilidad y diseño, con herramientas gratuitas para ponerlas en práctica.",
		eyebrow: "Blog",
		heading: "El color, explicado",
		intro: "Guías de teoría del color, accesibilidad y diseño, con las herramientas para ponerlas en práctica.",
		postTitleSuffix: "Blog de Your Color Picker",
		readyToTry: "¿Listo para probarlo tú mismo?",
		back: "← Volver al blog",
	},
	notFound: {
		title: "Página No Encontrada — Your Color Picker",
		description: "La página que buscas no existe. Vuelve a Your Color Picker para encontrar colores HEX, RGB y HSL en cualquier imagen.",
		eyebrow: "404",
		heading: "Página no encontrada",
		intro: "La página que buscas no existe, puede haberse movido, o la URL tiene un error de escritura.",
		homeButton: "Ir a la página de inicio",
		tryHeading: "O prueba una de estas",
		tryTool: "Usar la herramienta de selector de color",
		tryFaq: "Ver las preguntas frecuentes",
		tryAbout: "Sobre Your Color Picker",
		tryContact: "Contáctanos",
	},
};
