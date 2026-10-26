---
title: "HEX vs RGB vs HSL: Qual a Diferença e Quando Usar Cada Código de Cor"
description: "HEX, RGB e HSL descrevem as mesmas cores, mas foram feitos para tarefas diferentes. Veja o que cada formato significa e quando usar cada um."
publishDate: 2026-09-06
relatedTool:
  label: "Converta uma cor agora"
  href: "/pt/color-converter"
---

Se você já copiou uma cor de uma ferramenta de design, provavelmente a viu escrita de três jeitos: `#3B82F6`, `rgb(59, 130, 246)` e `hsl(217, 91%, 60%)`. Não são três cores diferentes — é exatamente o mesmo azul, descrito por três sistemas diferentes. Saber qual usar (e por que eles existem) facilita muitas decisões de CSS e de design.

## HEX: compacto e fácil de copiar e colar

HEX é a abreviação de hexadecimal — um sistema numérico de base 16 que condensa uma cor em um código de seis caracteres como `#3B82F6`. Os seis caracteres se dividem em três pares, um para o vermelho, um para o verde e um para o azul, e cada par vai de `00` (nada daquele canal) a `FF` (o máximo, 255 em decimal).

Toda a graça do HEX está em ser compacto. É o formato que você vê em entregas de design, manuais de marca e na maior parte do CSS copiado da internet, porque é curto o bastante para ler e digitar sem esforço. A desvantagem é que ele não é muito *humano*: ninguém olha para `#3B82F6` e imagina na hora aquele azul. É preciso decorar os códigos mais comuns ou colar em algum lugar para ver — ou, se a cor veio de uma foto, [descobrir o código HEX direto da imagem](/pt/hex-code-from-image).

## RGB: o formato que reflete como as telas funcionam

RGB (vermelho, verde, azul, em inglês red, green, blue) escreve a mesma informação como três números simples de 0 a 255: `rgb(59, 130, 246)`. Na verdade, são só os pares do HEX convertidos para decimal — `3B` em hexadecimal é `59` em decimal, e assim por diante.

O RGB existe como formato próprio, em vez de todo mundo usar só HEX, porque as telas são fisicamente formadas por subpixels vermelhos, verdes e azuis. O RGB descreve a cor do jeito que o hardware a produz, o que o torna o formato natural para qualquer cálculo com cores — misturar duas cores, ajustar o brilho via código ou gerar um degradê. Ele também aceita um quarto canal, alfa (`rgba(59, 130, 246, 0.5)`), para transparência, algo que o HEX só passou a suportar recentemente (`#3B82F680`) e que é bem menos usado na prática.

## HSL: o formato que reflete como as *pessoas* pensam a cor

HSL (matiz, saturação, luminosidade) é o diferente, porque, em vez de canais de luz, descreve a cor do jeito que você faria numa conversa: o **matiz** é a cor base num círculo de 0–360° (0 é vermelho, 120 é verde, 240 é azul), a **saturação** é o quão viva ou acinzentada ela é (0% é cinza, 100% é totalmente saturada) e a **luminosidade** é o quão perto ela está do preto ou do branco (0% é preto, 100% é branco, 50% é a versão "pura" do matiz).

É o formato ideal quando você quer *ajustar* uma cor, e não só registrá-la. Precisa de uma versão mais escura do azul da sua marca para um estado hover? Em HSL, é só baixar a luminosidade — de `hsl(217, 91%, 60%)` para `hsl(217, 91%, 45%)` — e o matiz e a saturação continuam iguais, mantendo a família de cores consistente. (É exatamente assim que se criam [tons claros e escuros](/pt/blog/tints-tones-shades).) Fazer o mesmo ajuste em RGB ou HEX exige recalcular os três canais à mão, o que é bem menos intuitivo.

## Um jeito rápido de decidir

- **Copiar ou guardar uma cor, ou seguir um manual de marca à risca** → HEX
- **Fazer cálculos com cores ou trabalhar com transparência** → RGB / RGBA
- **Ajustar manualmente o brilho ou a intensidade de uma cor** → HSL
- **Na dúvida, ou precisando alternar entre eles o tempo todo** → deixe um [conversor de cores](/pt/color-converter) aberto em vez de fazer as contas à mão

Na prática, a maioria dos projetos acaba usando os três — HEX para os valores que não mudam, HSL para os que você está ajustando e RGB quando o código precisa manipular uma cor diretamente. Não existe formato objetivamente "certo"; são só três lentes para a mesma cor.
