---
title: "Investigación sobre el Color en 2026: Lo que la Ciencia Descubrió Este Año"
description: "Desde una teoría de Schrödinger de hace 100 años por fin completada hasta por qué las pantallas de gama amplia se ven distinto según la persona: los hallazgos de la ciencia del color de 2026 que importan a los diseñadores."
publishDate: 2026-10-24
relatedTool:
  label: "Prueba el simulador de daltonismo"
  href: "/es/color-blindness-simulator"
---

El color parece un problema resuelto. Tenemos códigos hex, círculos cromáticos y fórmulas de contraste, y casi siempre funcionan. Pero 2026 ha sido un año intenso para la ciencia del color, y varios hallazgos cambian nuestra forma de entender algo que los diseñadores manejan a diario: cómo ve realmente el color la gente.

Estos son los avances que vale la pena conocer y lo que significa cada uno si trabajas con color.

## 1. Tu pantalla "calibrada" puede no verse igual para todos

En octubre de 2026, los investigadores Andy Rider y Andrew Stockman, del Instituto de Oftalmología del University College London, publicaron en *Optics Express* un estudio que explica una frustración que mucha gente del cine y el diseño conoce bien. Dos pantallas se calibran para coincidir y, aun así, se ven distintas, y diferentes observadores no se ponen de acuerdo sobre cuál es la "correcta".

El equipo creó un modelo computacional de la visión humana del color que tiene en cuenta las **diferencias individuales** entre observadores. Algunas de esas diferencias son deficiencias leves de visión rojo-verde. Otras se deben a la edad, porque el cristalino filtra más luz azul a medida que envejecemos. Después pasaron 16 pantallas por el modelo, desde televisores de consumo hasta monitores profesionales de cine y proyectores de sala.

El hallazgo: **las pantallas modernas de gama amplia varían más de una persona a otra que las antiguas.** Las pantallas de gama amplia usan fuentes de luz roja, verde y azul de banda muy estrecha. Esas fuentes pueden mostrar colores más vivos, pero también amplifican pequeñas diferencias entre los ojos de los observadores. El primario azul es el que más provoca desacuerdos entre personas mayores y jóvenes; los primarios rojo y verde afectan sobre todo a personas con distintos tipos de deficiencia rojo-verde.

Parte del problema es que la mayoría de las herramientas de calibración se basan en estándares de igualación de color de hace aproximadamente un siglo, y esos estándares no representan bien la visión típica. Como dijo Rider, esto "puede hacer que las pantallas modernas se vean mal incluso cuando se han calibrado para verse iguales".

**Qué significa para ti:** un color que se ve perfecto en tu monitor es la visión de una persona en un dispositivo. Los investigadores señalan que sus predicciones aún deben probarse con observadores reales. Aun así, los hábitos más seguros son los que los diseñadores ya conocen: revisa los colores importantes en más de un dispositivo y no hagas que el significado dependa solo de diferencias sutiles de tono.

## 2. La teoría del color de Schrödinger por fin está completa

Hace aproximadamente un siglo, el físico Erwin Schrödinger, más conocido por su gato, propuso que las cualidades que percibimos en un color podían describirse de forma puramente matemática. Esas cualidades son el **tono**, la **saturación** y la **luminosidad**. Pero su modelo tenía un hueco: nunca definió formalmente el **eje neutro**, la línea de grises que va del negro al blanco. Sin él, las definiciones de tono y saturación no encajaban.

Un equipo del Laboratorio Nacional de Los Álamos dirigido por Roxana Bujack ha llenado ese hueco. Su trabajo se presentó en la Eurographics Conference on Visualization y se publicó en *Computer Graphics Forum*. Definieron el eje neutro de forma geométrica y además tuvieron en cuenta dos peculiaridades conocidas de la visión humana:

- **El efecto Bezold–Brücke:** el tono percibido de un color cambia cuando se vuelve más brillante o más tenue.
- **Rendimientos decrecientes:** las grandes diferencias de color se perciben como menores que la suma de los pequeños pasos que las forman.

Su conclusión es que el tono, la saturación y la luminosidad "no surgen de construcciones externas adicionales, como experiencias culturales o aprendidas". Surgen de la geometría de cómo percibimos la distancia entre colores.

**Qué significa para ti:** esta es la teoría que explica por qué existen los espacios de color perceptuales. Si has notado que la luminosidad de HSL no coincide con lo brillantes que se ven los colores, te has topado con el problema que aborda esta investigación. (Nuestra guía sobre [HEX vs RGB vs HSL](/es/blog/hex-vs-rgb-vs-hsl) cubre la parte práctica.) Mejores modelos matemáticos de la percepción conducen, con el tiempo, a mejores espacios de color, degradados y paletas para visualización de datos.

## 3. Los modelos de visión de IA no ven el color como nosotros

A medida que se extienden las herramientas de imagen con IA, surge una pregunta natural: ¿"ven" el color como las personas? Un preprint de julio de 2026 en arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, lo puso a prueba directamente.

Los investigadores evaluaron más de 50 modelos de visión preentrenados, incluidas redes convolucionales y vision transformers. Midieron la diferencia de color más pequeña que cada modelo podía detectar y la compararon con los umbrales de discriminación humanos medidos durante décadas de experimentos de laboratorio.

La respuesta fue un claro **no**. La alineación con la sensibilidad humana al color fue débil en todas las familias de modelos. Los modelos entrenados sin etiquetas (autosupervisados) lo hicieron algo mejor que los supervisados convencionales. Los modelos entrenados con imágenes emparejadas con texto aparecieron tanto en lo más alto como en lo más bajo del ranking. Los autores concluyen que la sensibilidad al color similar a la humana no surge por sí sola con los métodos de entrenamiento actuales.

**Qué significa para ti:** ten cuidado al confiar en herramientas de IA para juicios críticos sobre el color, como si dos tonos se distinguen o si una paleta funciona para todos los observadores. Para preguntas con una respuesta medible, usa una medición. Un [verificador de contraste](/es/contrast-checker) te da un ratio exacto y un selector de color te da un valor exacto. Ten en cuenta que este artículo es un preprint y aún no ha pasado revisión por pares.

## 4. El contraste llegó al propio CSS

En el lado práctico, uno de los mayores cambios del año para los diseñadores web vino de los navegadores, no de los laboratorios. En abril de 2026, la función CSS `contrast-color()` alcanzó el estado **Baseline**, lo que significa que ya funciona en todos los motores de navegador principales.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

Le das un color de fondo y devuelve negro o blanco, el que tenga más contraste. Matemáticamente, la mejor opción entre negro y blanco siempre alcanza al menos unos 4.5:1. Eso significa que el resultado cumple WCAG AA para texto normal, aunque no necesariamente el nivel AAA, más estricto, de 7:1. No tiene en cuenta los demás colores de tu marca, así que es una red de seguridad, no una decisión de diseño.

Mientras tanto, el método de contraste **APCA**, del que tanto se habla, sigue siendo exploratorio. WCAG 3 sigue en borrador, y no se espera una Recomendación final del W3C antes de 2028. Para el cumplimiento actual, los ratios de WCAG 2 siguen siendo el estándar. Nuestra [guía de contraste WCAG](/es/blog/wcag-contrast-guide) los explica.

## La visión de conjunto

La investigación de 2026 apunta en una dirección: **no existe una única forma "correcta" en que se ve un color.** Los colores varían según los ojos, la edad y la pantalla de cada persona, y las matemáticas que describen la percepción son más sutiles que los números RGB que escribimos en una hoja de estilos.

Eso no es motivo para renunciar a la precisión. Es motivo para usarla donde importa. Comprueba los valores exactos, mide el contraste con números reales y previsualiza tu paleta como la verán las personas con deficiencias en la visión del color. Aproximadamente 1 de cada 12 hombres y 1 de cada 200 mujeres tienen algún tipo de deficiencia en la visión del color, y el estudio de la UCL sugiere que las pantallas modernas pueden ampliar esas diferencias. Para saber más sobre cómo diseñar para este público, consulta nuestra guía sobre [diseñar para el daltonismo](/es/blog/designing-for-color-blindness).

### Fuentes

- Rider, Frith y Stockman, *Optics Express* 34, 38458–38481 (2026), vía el [comunicado de prensa de Optica](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Laboratorio Nacional de Los Álamos, vía [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, julio de 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
