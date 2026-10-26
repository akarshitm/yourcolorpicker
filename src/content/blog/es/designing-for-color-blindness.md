---
title: "Diseñar para el Daltonismo: Tipos, Estadísticas y Soluciones Prácticas"
description: "El daltonismo afecta a una parte importante de tu público. Así se ven realmente sus distintos tipos y así puedes diseñar teniéndolos en cuenta."
publishDate: 2026-09-06
relatedTool:
  label: "Simula el daltonismo en tu imagen"
  href: "/es/color-blindness-simulator"
---

La deficiencia en la visión del color —lo que solemos llamar daltonismo— afecta aproximadamente a **1 de cada 12 hombres (alrededor del 8 %)** y a **1 de cada 200 mujeres (alrededor del 0,5 %)** de ascendencia norte-europea, con tasas algo distintas en otras poblaciones. En cualquier sitio o app razonablemente grande, eso no es un caso aislado: es una parte significativa de tu público real, la mayoría de la cual nunca te lo ha dicho y probablemente ni siquiera se considera con una "discapacidad". Simplemente se ha adaptado a toda una vida de semáforos y luces de estado rojo-verde que resultan ambiguos.

## Los tipos principales y cómo se ven realmente

"Daltónico" se usa a menudo como si fuera una sola cosa, pero abarca varias condiciones distintas:

- **Deuteranopía / deuteranomalía** (debilidad al verde): con diferencia el tipo más común. Rojos, verdes y marrones se vuelven difíciles de distinguir, y los colores de esa gama suelen verse más apagados o amarillentos de lo previsto.
- **Protanopía / protanomalía** (debilidad al rojo): confusión parecida a la deuteranopía, pero con los rojos desplazados de otra forma; los rojos pueden verse más oscuros de lo que son, a veces casi negros.
- **Tritanopía / tritanomalía** (debilidad al azul): mucho más rara, afecta a la distinción entre azul y amarillo. Azules y verdes pueden confundirse, y los amarillos pueden verse pálidos o rosados.
- **Acromatopsia** (ceguera total al color): extremadamente rara; se ve solo en escala de grises.

Un punto clave: "daltonismo rojo-verde" no significa que alguien vea el mundo en solo dos colores, sino que ciertos tonos de esa gama se vuelven difíciles de distinguir entre sí, mientras el resto del espectro apenas se ve afectado. Por eso el daltonismo es fácil de pasar por alto al hacer pruebas: un diseño puede verse perfectamente para alguien con deuteranopía de forma aislada y aun así fallar en cuanto dos colores fáciles de confundir se colocan juntos como la *única* señal de algo importante.

## Dónde rompe realmente las interfaces

- **Indicadores de estado**: rojo/verde para error/éxito es el fallo más común. Alguien con deuteranopía puede ver ambos como un color turbio parecido y no saber cuál es cuál.
- **Gráficos**: un gráfico de líneas o barras que depende solo del color para separar cinco categorías se vuelve ilegible si dos de esos colores caen en una gama confusa.
- **Validación de formularios**: un borde rojo en un campo no válido es invisible *como señal de color* para una parte importante de los usuarios, aunque el campo siga siendo distinto de otras formas.
- **Mapas y mapas de calor**: los degradados de rojo a verde (habituales en escalas de "malo a bueno") son casi la peor elección posible precisamente para la población que más necesita leerlos con precisión.

## Soluciones que funcionan de verdad

La buena noticia es que nada de esto obliga a rediseñar tu paleta desde cero; solo exige *no depender únicamente del color*:

1. **Acompaña el color con una segunda señal.** Un estado de error lleva un borde rojo *y* un icono *y* texto, no solo rojo. Un estado de éxito lleva verde *y* una marca de verificación. Una vez que hay una señal que no es de color, el color pasa a ser un complemento y no el único canal que transmite el significado.
2. **Evita el rojo-verde como único contraste de dos estados.** Si necesitas un binario claro (encendido/apagado, bueno/malo), azul y naranja (una clásica [pareja complementaria](/es/blog/color-wheel-explained)) se distinguen en todos los tipos comunes de daltonismo, mientras que rojo y verde a menudo no.
3. **Usa patrones o etiquetas en los gráficos, no solo color.** Las etiquetas directas en los segmentos o los estilos de línea distintos (continua/discontinua/punteada) junto al color mantienen legibles los gráficos de varias series sea cual sea la visión del color.
4. **Comprueba el contraste entre colores contiguos, no solo contra el fondo.** Dos colores pueden tener cada uno buen [contraste contra un fondo blanco](/es/blog/wcag-contrast-guide) y ser casi indistinguibles *entre sí*, que es justo el fallo que importa en colores de estado y series de gráficos situados uno al lado del otro.
5. **Simúlalo de verdad antes de publicar.** Es muy difícil predecir cómo verá tu paleta alguien con deuteranopía razonando en abstracto; pasar tu interfaz o imagen real por un [simulador de daltonismo](/es/color-blindness-simulator) elimina las conjeturas y a menudo revela problemas que se ven perfectamente con una visión del color típica.

Diseñar para el daltonismo no es realmente un sistema de diseño aparte: es el mismo sistema con un hábito añadido. Siempre que el color sea lo que comunica una decisión, pregúntate qué pasa si ese color no se distingue, y asegúrate de que la respuesta no sea "el usuario no sabe qué está pasando".
