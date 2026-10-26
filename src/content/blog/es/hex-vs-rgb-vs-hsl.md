---
title: "HEX vs RGB vs HSL: Diferencias y Cuándo Usar Cada Código de Color"
description: "HEX, RGB y HSL describen los mismos colores, pero están pensados para tareas distintas. Esto es lo que significa cada formato y cuándo conviene usarlo."
publishDate: 2026-09-06
relatedTool:
  label: "Convierte un color ahora"
  href: "/es/color-converter"
---

Si alguna vez has copiado un color de una herramienta de diseño, probablemente lo hayas visto escrito de tres formas distintas: `#3B82F6`, `rgb(59, 130, 246)` y `hsl(217, 91%, 60%)`. No son tres colores diferentes: es exactamente el mismo azul, descrito por tres sistemas distintos. Saber cuál usar (y por qué existen) facilita muchas decisiones de CSS y de diseño.

## HEX: compacto y fácil de copiar

HEX es la abreviatura de hexadecimal, un sistema numérico en base 16 que condensa un color en un código de seis caracteres como `#3B82F6`. Los seis caracteres se dividen en tres pares, uno para el rojo, otro para el verde y otro para el azul, y cada par va de `00` (nada de ese canal) a `FF` (el máximo, 255 en decimal).

Todo el atractivo de HEX es lo compacto que es. Es el formato que verás en entregas de diseño, manuales de marca y en casi todo el CSS que copias de internet, porque es lo bastante corto para leerlo y escribirlo sin fricción. La contrapartida es que no es muy *humano*: nadie mira `#3B82F6` e imagina de inmediato ese azul. Tienes que memorizar los códigos comunes o pegarlo en algún sitio para verlo, o, si el color sale de una foto, [obtener el código HEX directamente de la imagen](/es/hex-code-from-image).

## RGB: el formato que refleja cómo funcionan las pantallas

RGB (rojo, verde, azul) expresa la misma información como tres números simples de 0 a 255: `rgb(59, 130, 246)`. En realidad son los pares de HEX convertidos a decimal: `3B` en hexadecimal es `59` en decimal, y así sucesivamente.

RGB existe como formato propio, y no todo el mundo usa solo HEX, porque las pantallas están físicamente construidas con subpíxeles rojos, verdes y azules. RGB describe el color tal como lo produce el hardware, lo que lo convierte en el formato natural para cualquier cálculo con colores: mezclar dos colores, ajustar el brillo por código o generar un degradado. También admite un cuarto canal, alfa (`rgba(59, 130, 246, 0.5)`), para la transparencia, algo que HEX solo admite desde hace poco (`#3B82F680`) y que se usa mucho menos en la práctica.

## HSL: el formato que refleja cómo *pensamos* el color

HSL (tono, saturación, luminosidad) es el diferente, porque en lugar de canales de luz describe un color como lo harías en una conversación: el **tono** es el color base en un círculo de 0–360° (0 es rojo, 120 es verde, 240 es azul), la **saturación** es lo vivo o gris que es (0 % es gris, 100 % totalmente saturado) y la **luminosidad** es lo cerca que está del negro o del blanco (0 % es negro, 100 % es blanco, 50 % es la versión "pura" del tono).

Es el formato ideal cuando quieres *ajustar* un color en lugar de solo registrarlo. ¿Necesitas una versión más oscura del azul de tu marca para un estado hover? En HSL basta con bajar la luminosidad —de `hsl(217, 91%, 60%)` a `hsl(217, 91%, 45%)`— y el tono y la saturación no cambian, así que la familia de color se mantiene coherente. (Así es exactamente como se construyen los [tintes y sombras](/es/blog/tints-tones-shades).) Hacer el mismo ajuste en RGB o HEX obliga a recalcular los tres canales a mano, algo mucho menos intuitivo.

## Una forma rápida de decidir

- **Copiar o guardar un color, o igualar exactamente un manual de marca** → HEX
- **Hacer cálculos con colores o trabajar con transparencia** → RGB / RGBA
- **Ajustar a mano el brillo o la intensidad de un color** → HSL
- **No estás seguro o necesitas pasar de uno a otro constantemente** → ten abierto un [conversor de color](/es/color-converter) en vez de hacer las cuentas a mano

En la práctica, la mayoría de los proyectos acaban usando una mezcla de los tres: HEX para los valores que no cambian, HSL para los que estás ajustando y RGB cuando el código necesita manipular un color directamente. No hay un formato objetivamente "correcto"; son tres lentes sobre el mismo color.
