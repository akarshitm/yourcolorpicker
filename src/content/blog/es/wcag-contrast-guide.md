---
title: "Contraste de Color WCAG: Guía Práctica para Diseñadores y Desarrolladores"
description: "Qué significan realmente los requisitos de ratio de contraste WCAG, por qué existen y cómo cumplir AA o AAA sin adivinar."
publishDate: 2026-09-06
relatedTool:
  label: "Comprueba tu ratio de contraste"
  href: "/es/contrast-checker"
---

"Asegúrate de que tu texto tenga suficiente contraste" es un consejo fácil de dar y sorprendentemente fácil de aplicar mal, porque "suficiente" no es una sensación: es un número, definido por las Pautas de Accesibilidad para el Contenido Web (WCAG), y es más estricto de lo que la mayoría intuye.

## Qué mide realmente el ratio de contraste

El ratio de contraste es un único número que va de 1:1 (colores idénticos: texto blanco puro sobre fondo blanco) a 21:1 (contraste máximo: negro puro sobre blanco puro). Se calcula a partir de la *luminancia relativa* de los dos colores, que es una forma elegante de decir "cuánta luz refleja cada color", ponderada según cómo percibe el ojo humano el brillo (somos más sensibles al verde que al azul, por ejemplo, así que la fórmula pondera cada canal de forma distinta en lugar de promediar los valores RGB).

No necesitas calcularlo a mano —cualquier [verificador de contraste](/es/contrast-checker) hace las cuentas por ti—, pero conviene saber que el ratio trata de *luminancia*, no solo de lo distintos que te parecen dos colores a simple vista. Dos colores que se ven bastante diferentes pueden suspender si tienen un brillo parecido (una trampa común: texto gris medio sobre fondo azul medio suele verse bien pero da un mal resultado).

## Los umbrales reales

WCAG define dos niveles, AA y AAA, cada uno con requisitos distintos para texto normal y texto grande:

| | Texto normal | Texto grande (18pt+/24px+, o 14pt/18,66px en negrita) |
|---|---|---|
| **AA** (el estándar que busca la mayoría de sitios) | 4.5:1 | 3:1 |
| **AAA** (el nivel más estricto, "mejorado") | 7:1 | 4.5:1 |

El texto grande tiene un listón más bajo porque las letras más grandes son por naturaleza más fáciles de distinguir del fondo, incluso con menos contraste entre ambos colores.

AA es el nivel al que hacen referencia la mayoría de los requisitos legales de accesibilidad (incluidos la ADA y la Sección 508 en EE. UU. y la norma EN 301 549 en la UE) y es lo que la mayoría de los sitios deberían tratar como mínimo innegociable. AAA es bastante más difícil de cumplir en todo un sistema de diseño: es un buen objetivo para el texto crítico (como el cuerpo de texto en un producto de mucha lectura), pero no suele exigirse en todo el sitio.

## Por qué importa más allá del cumplimiento

El bajo contraste no solo suspende una auditoría: falla a lectores reales. Afecta sobre todo a personas con baja visión o [daltonismo](/es/blog/designing-for-color-blindness), pero también a cualquiera que lea en una pantalla de baja calidad o con reflejos, a cualquier persona mayor de 40 años (la sensibilidad al contraste disminuye con la edad mucho antes de que la mayoría lo note) y, sinceramente, a cualquiera que entrecierre los ojos ante el móvil a pleno sol. El contraste es uno de los pocos requisitos de accesibilidad que mejora de forma medible la experiencia de prácticamente todo el mundo, no solo del grupo para el que se escribió.

## Formas habituales en que el contraste falla sin que nadie lo note

- **Texto de marcador de posición y estados desactivados**: los diseñadores suelen aclararlos para la jerarquía visual y, sin querer, bajan de 4.5:1, aunque el texto de alrededor cumpla sin problema.
- **Texto sobre imágenes o degradados**: un color que cumple sobre un fondo plano puede suspender en cuanto se coloca sobre una zona recargada o más clara de una imagen.
- **Colores de marca usados como color de texto**: un azul de marca vibrante o un tono pastel suelen quedar genial como acento, pero suspenden directamente como cuerpo de texto sobre blanco.
- **Modo oscuro**: el contraste debe comprobarse por separado en modo oscuro; una combinación que cumple en modo claro no cumple automáticamente cuando el fondo pasa a ser casi negro.

## Un flujo de trabajo sencillo

1. Elige los colores de texto y fondo como lo harías normalmente; si salen de una maqueta o captura de pantalla, la [herramienta cuentagotas](/es/eyedropper-tool) obtiene los valores exactos.
2. Comprueba el ratio antes de publicar, no después de una queja o una auditoría: trátalo igual que un enlace roto.
3. Si suspende, ajusta primero la *luminosidad* (en [términos de HSL](/es/blog/hex-vs-rgb-vs-hsl)) en lugar del tono o la saturación: es la forma más rápida de arreglar el contraste sin cambiar el color que se percibe.
4. Vuelve a comprobar el modo oscuro por separado si tu producto lo tiene.

El contraste es una de las pocas reglas de accesibilidad con un número concreto asociado, lo que la convierte en una de las más fáciles de cumplir: no hay ambigüedad cuando compruebas el ratio directamente en lugar de calcularlo a ojo.
