---
title: "Design para Daltonismo: Tipos, Estatísticas e Soluções Práticas"
description: "O daltonismo afeta uma parte importante do seu público. Veja como os diferentes tipos realmente enxergam e como criar designs que funcionem para todos."
publishDate: 2026-09-06
relatedTool:
  label: "Simule o daltonismo na sua imagem"
  href: "/pt/color-blindness-simulator"
---

A deficiência na visão de cores — comumente chamada de daltonismo — afeta cerca de **1 em cada 12 homens (por volta de 8%)** e **1 em cada 200 mulheres (por volta de 0,5%)** de ascendência norte-europeia, com taxas um pouco diferentes em outras populações. Em qualquer site ou app de tamanho razoável, isso não é um caso raro — é uma fração significativa do seu público real, e a maioria nunca contou isso a você e provavelmente nem se vê como alguém com uma "deficiência". Essas pessoas simplesmente se adaptaram a uma vida inteira de semáforos e indicadores vermelho-verde ambíguos.

## Os principais tipos, e como eles realmente enxergam

"Daltônico" é muitas vezes usado como se fosse uma coisa só, mas abrange várias condições diferentes:

- **Deuteranopia / deuteranomalia** (fraqueza para o verde) — de longe o tipo mais comum. Vermelhos, verdes e marrons ficam difíceis de diferenciar, e as cores dessa faixa costumam parecer mais apagadas ou amareladas do que deveriam.
- **Protanopia / protanomalia** (fraqueza para o vermelho) — confusão parecida com a deuteranopia, mas com os vermelhos deslocados de outro jeito; os vermelhos podem parecer mais escuros do que são, às vezes quase pretos.
- **Tritanopia / tritanomalia** (fraqueza para o azul) — bem mais rara, afeta a distinção entre azul e amarelo. Azuis e verdes podem ser confundidos, e amarelos podem parecer pálidos ou rosados.
- **Acromatopsia** (cegueira total para cores) — extremamente rara; a pessoa enxerga apenas em tons de cinza.

Um ponto crucial: "daltonismo vermelho-verde" não significa que a pessoa vê o mundo em apenas duas cores — significa que certos matizes dessa faixa ficam difíceis de distinguir entre si, enquanto o resto do espectro quase não é afetado. É por isso que o daltonismo passa fácil despercebido nos testes: um design pode parecer perfeito para alguém com deuteranopia isoladamente e ainda assim falhar no momento em que duas cores fáceis de confundir ficam lado a lado como o *único* sinal de algo importante.

## Onde isso realmente quebra interfaces

- **Indicadores de status** — vermelho/verde para erro/sucesso é a falha mais comum. Alguém com deuteranopia pode ver as duas como uma cor turva parecida e não saber qual é qual.
- **Gráficos** — um gráfico de linhas ou barras que depende só da cor para separar cinco categorias fica ilegível se duas dessas cores caírem numa faixa confusa.
- **Validação de formulários** — uma borda vermelha num campo inválido é invisível *como sinal de cor* para uma parte importante dos usuários, mesmo que o campo continue diferente de outras formas.
- **Mapas e mapas de calor** — degradês de vermelho para verde (comuns em escalas de "ruim a bom") são quase a pior escolha possível justamente para o público que mais precisa lê-los com precisão.

## Soluções que realmente funcionam

A boa notícia é que nada disso exige redesenhar a paleta do zero — exige *não depender só da cor*:

1. **Combine a cor com um segundo sinal.** Um estado de erro ganha borda vermelha *e* ícone *e* texto, não só vermelho. Um estado de sucesso ganha verde *e* um sinal de check. Quando existe um sinal que não é cor, a cor vira um bônus, e não o único canal que carrega o significado.
2. **Evite vermelho-verde como único contraste entre dois estados.** Se você precisa de um binário claro (ligado/desligado, bom/ruim), azul e laranja (um clássico [par complementar](/pt/blog/color-wheel-explained)) são distinguíveis em todos os tipos comuns de daltonismo, enquanto vermelho e verde muitas vezes não são.
3. **Use padrões ou rótulos nos gráficos, não só cor.** Rótulos diretos nos segmentos, ou estilos de linha diferentes (contínua/tracejada/pontilhada) junto com a cor, mantêm gráficos de várias séries legíveis para qualquer visão de cores.
4. **Verifique o contraste entre cores vizinhas, não só contra o fundo.** Duas cores podem ter, cada uma, bom [contraste contra um fundo branco](/pt/blog/wcag-contrast-guide) e mesmo assim ser quase indistinguíveis *entre si* — exatamente a falha que importa para cores de status e séries de gráficos lado a lado.
5. **Simule de verdade antes de publicar.** É muito difícil prever como sua paleta vai parecer para alguém com deuteranopia só raciocinando — passar sua interface ou imagem real por um [simulador de daltonismo](/pt/color-blindness-simulator) acaba com o chute e muitas vezes revela problemas que parecem perfeitos para uma visão de cores típica.

Fazer design para daltonismo não é um design system à parte — é o mesmo design system com um hábito a mais: sempre que a cor for o que comunica uma decisão, pergunte o que acontece se essa cor não for distinguível, e garanta que a resposta não seja "o usuário não entende o que está acontecendo".
