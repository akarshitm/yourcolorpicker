---
title: "Contraste de Cores WCAG: Guia Prático para Designers e Desenvolvedores"
description: "O que os requisitos de taxa de contraste da WCAG realmente significam, por que existem e como atingir AA ou AAA sem chute."
publishDate: 2026-09-06
relatedTool:
  label: "Verifique sua taxa de contraste"
  href: "/pt/contrast-checker"
---

"Garanta que seu texto tenha contraste suficiente" é um conselho fácil de dar e surpreendentemente fácil de errar, porque "suficiente" não é uma sensação — é um número, definido pelas Diretrizes de Acessibilidade para Conteúdo Web (WCAG), e é mais rigoroso do que a maioria das pessoas imagina.

## O que a taxa de contraste realmente mede

A taxa de contraste é um único número que vai de 1:1 (cores idênticas — texto branco puro sobre fundo branco) a 21:1 (contraste máximo — preto puro sobre branco puro). Ela é calculada a partir da *luminância relativa* das duas cores, um jeito chique de dizer "quanta luz cada cor reflete", ponderada de acordo com a forma como o olho humano percebe o brilho (somos mais sensíveis ao verde do que ao azul, por exemplo, então a fórmula pondera os canais de forma diferente em vez de só tirar a média dos valores RGB).

Você não precisa calcular isso à mão — qualquer [verificador de contraste](/pt/contrast-checker) faz a conta —, mas vale saber que a taxa é sobre *luminância*, e não só sobre o quanto duas cores parecem diferentes à primeira vista. Duas cores que parecem bem diferentes ainda podem reprovar se tiverem brilho parecido (uma armadilha comum: texto cinza médio sobre fundo azul médio costuma parecer ok, mas vai mal no teste).

## Os limites reais

A WCAG define dois níveis, AA e AAA, cada um com exigências diferentes para texto normal e texto grande:

| | Texto normal | Texto grande (18pt+/24px+, ou 14pt/18,66px em negrito) |
|---|---|---|
| **AA** (o padrão que a maioria dos sites busca) | 4.5:1 | 3:1 |
| **AAA** (o nível mais rigoroso, "aprimorado") | 7:1 | 4.5:1 |

O texto grande tem uma exigência menor porque letras maiores são naturalmente mais fáceis de distinguir do fundo, mesmo com menos contraste entre as duas cores.

O AA é o nível citado na maioria das exigências legais de acessibilidade (incluindo a ADA e a Seção 508 nos EUA, a EN 301 549 na UE e a Lei Brasileira de Inclusão, que remete às boas práticas da WCAG) e é o que a maioria dos sites deveria tratar como mínimo inegociável. O AAA é bem mais difícil de atingir num design system inteiro — é uma boa meta para textos críticos (como o corpo de texto de um produto focado em leitura), mas geralmente não é exigido no site todo.

## Por que isso importa além da conformidade

Contraste baixo não reprova só numa auditoria — ele falha com leitores reais. Afeta mais as pessoas com baixa visão ou [daltonismo](/pt/blog/designing-for-color-blindness), mas também qualquer pessoa lendo numa tela de baixa qualidade ou com reflexo, qualquer pessoa acima dos 40 (a sensibilidade ao contraste diminui com a idade bem antes de a maioria perceber) e, sinceramente, qualquer um apertando os olhos para o celular sob o sol. O contraste é um dos raros requisitos de acessibilidade que melhoram de forma mensurável a experiência de praticamente todo mundo, e não só do grupo para o qual foi criado.

## Formas comuns de o contraste falhar sem ninguém perceber

- **Texto de placeholder e estados desabilitados** — designers costumam clareá-los para criar hierarquia visual e acabam ficando abaixo de 4.5:1, mesmo que o texto ao redor passe tranquilamente.
- **Texto sobre imagens ou degradês** — uma cor que passa sobre um fundo liso pode reprovar no momento em que fica sobre uma parte mais clara ou carregada da imagem.
- **Cores da marca usadas como cor de texto** — um azul vibrante ou um tom pastel da marca fica ótimo como destaque, mas reprova direto como texto corrido sobre branco.
- **Modo escuro** — o contraste precisa ser verificado separadamente no modo escuro; uma combinação que passa no modo claro não passa automaticamente quando o fundo vira quase preto.

## Um fluxo de trabalho simples

1. Escolha as cores de texto e fundo como faria normalmente — se elas vierem de um mockup ou print, o [conta-gotas online](/pt/eyedropper-tool) pega os valores exatos.
2. Verifique a taxa antes de publicar, não depois de uma reclamação ou auditoria — trate isso como trataria um link quebrado.
3. Se reprovar, ajuste primeiro a *luminosidade* (em [termos de HSL](/pt/blog/hex-vs-rgb-vs-hsl)) em vez do matiz ou da saturação — é o jeito mais rápido de corrigir o contraste sem mudar a cor que as pessoas percebem.
4. Verifique o modo escuro separadamente, se o seu produto tiver um.

O contraste é uma das poucas regras de acessibilidade com um número concreto associado, o que faz dela uma das mais fáceis de acertar — não há ambiguidade quando você verifica a taxa diretamente em vez de confiar no olho.
