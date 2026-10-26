---
title: "Pesquisas Sobre Cores em 2026: O que a Ciência Descobriu Este Ano"
description: "De uma teoria de Schrödinger de 100 anos finalmente concluída a por que telas de gama ampla parecem diferentes para cada pessoa: as descobertas da ciência das cores de 2026 que importam para designers."
publishDate: 2026-10-24
relatedTool:
  label: "Experimente o simulador de daltonismo"
  href: "/pt/color-blindness-simulator"
---

A cor parece um problema resolvido. Temos códigos hex, círculos cromáticos e fórmulas de contraste, e na maior parte do tempo eles funcionam. Mas 2026 foi um ano agitado para a ciência das cores, e várias descobertas mudam a forma como pensamos algo que designers lidam todos os dias: como as pessoas realmente enxergam as cores.

Estes são os avanços que vale a pena conhecer, e o que cada um significa se você trabalha com cores.

## 1. Sua tela "calibrada" pode não parecer igual para todo mundo

Em outubro de 2026, os pesquisadores Andy Rider e Andrew Stockman, do Instituto de Oftalmologia da University College London, publicaram na *Optics Express* um estudo que explica uma frustração conhecida de muita gente do cinema e do design. Duas telas são calibradas para ficarem iguais e, mesmo assim, parecem diferentes — e pessoas diferentes discordam sobre qual delas está "certa".

A equipe criou um modelo computacional da visão de cores humana que leva em conta as **diferenças individuais** entre observadores. Algumas dessas diferenças são deficiências leves na visão vermelho-verde. Outras vêm da idade, porque o cristalino do olho filtra mais luz azul conforme envelhecemos. Depois, eles rodaram 16 telas pelo modelo, de TVs comuns a monitores profissionais de cinema e projetores de sala.

A descoberta: **telas modernas de gama ampla variam mais de pessoa para pessoa do que as antigas.** Telas de gama ampla usam fontes de luz vermelha, verde e azul de banda muito estreita. Essas fontes conseguem mostrar cores mais vivas, mas também ampliam pequenas diferenças entre os olhos de quem assiste. O primário azul é o que mais gera discordância entre pessoas mais velhas e mais jovens; os primários vermelho e verde afetam principalmente pessoas com diferentes tipos de deficiência vermelho-verde.

Parte do problema é que a maioria das ferramentas de calibração se baseia em padrões de correspondência de cores de cerca de um século atrás, que não representam bem a visão típica. Como disse Rider, isso "pode fazer telas modernas parecerem erradas mesmo quando foram calibradas para parecerem iguais".

**O que isso significa para você:** uma cor que parece perfeita no seu monitor é a visão de uma pessoa em um aparelho. Os pesquisadores observam que suas previsões ainda precisam ser testadas com observadores reais. Mesmo assim, os hábitos mais seguros são os que designers já conhecem: confira as cores importantes em mais de um aparelho e não deixe o significado depender só de diferenças sutis de matiz.

## 2. A teoria das cores de Schrödinger finalmente está completa

Há cerca de um século, o físico Erwin Schrödinger, mais conhecido pelo seu gato, propôs que as qualidades que percebemos numa cor poderiam ser descritas de forma puramente matemática. Essas qualidades são o **matiz**, a **saturação** e a **luminosidade**. Mas o modelo tinha uma lacuna: ele nunca definiu formalmente o **eixo neutro**, a linha de cinzas que vai do preto ao branco. Sem ele, as definições de matiz e saturação não se sustentavam.

Uma equipe do Laboratório Nacional de Los Alamos liderada por Roxana Bujack preencheu essa lacuna. O trabalho foi apresentado na Eurographics Conference on Visualization e publicado na *Computer Graphics Forum*. Eles definiram o eixo neutro geometricamente e também consideraram duas peculiaridades conhecidas da visão humana:

- **O efeito Bezold–Brücke:** o matiz percebido de uma cor muda quando ela fica mais clara ou mais escura.
- **Retornos decrescentes:** grandes diferenças de cor são percebidas como menores do que a soma dos pequenos passos que as formam.

A conclusão é que matiz, saturação e luminosidade "não surgem de construções externas adicionais, como experiências culturais ou aprendidas". Eles vêm da geometria de como percebemos a distância entre cores.

**O que isso significa para você:** esta é a teoria por trás da existência dos espaços de cor perceptuais. Se você já reparou que a luminosidade do HSL não bate com o quão claras as cores realmente parecem, você esbarrou no problema que esta pesquisa aborda. (Nosso guia [HEX vs RGB vs HSL](/pt/blog/hex-vs-rgb-vs-hsl) cobre o lado prático.) Modelos matemáticos melhores da percepção levam, com o tempo, a espaços de cor, degradês e paletas de visualização de dados melhores.

## 3. Modelos de visão de IA não enxergam cores como nós

Com a popularização das ferramentas de imagem com IA, surge uma pergunta natural: elas "enxergam" as cores como as pessoas? Um preprint de julho de 2026 no arXiv, *Do Vision Encoders Exhibit Human-like Color Thresholds?*, testou isso diretamente.

Os pesquisadores avaliaram mais de 50 modelos de visão pré-treinados, incluindo redes convolucionais e vision transformers. Eles mediram a menor diferença de cor que cada modelo conseguia detectar e compararam com os limiares de discriminação humanos medidos em décadas de experimentos de laboratório.

A resposta foi um claro **não**. O alinhamento com a sensibilidade humana às cores foi fraco em todas as famílias de modelos. Modelos treinados sem rótulos (autossupervisionados) se saíram um pouco melhor do que os supervisionados convencionais. Modelos treinados com imagens pareadas com texto apareceram tanto no topo quanto na base do ranking. Os autores concluem que uma sensibilidade às cores parecida com a humana não surge sozinha com os métodos de treinamento atuais.

**O que isso significa para você:** cuidado ao confiar em ferramentas de IA para julgamentos críticos de cor, como saber se dois tons são distinguíveis ou se uma paleta funciona para todos. Para perguntas com resposta mensurável, use uma medição. Um [verificador de contraste](/pt/contrast-checker) dá uma taxa exata, e um seletor de cores dá um valor exato. Vale lembrar que este artigo é um preprint e ainda não passou por revisão por pares.

## 4. O contraste chegou ao próprio CSS

No lado prático, uma das maiores mudanças do ano para designers web veio dos navegadores, e não dos laboratórios. Em abril de 2026, a função CSS `contrast-color()` atingiu o status **Baseline**, o que significa que agora funciona em todos os principais motores de navegador.

```css
.badge {
	background: var(--brand);
	color: contrast-color(var(--brand));
}
```

Você passa uma cor de fundo e ela devolve preto ou branco, o que tiver mais contraste. Matematicamente, a melhor opção entre preto e branco sempre chega a pelo menos cerca de 4.5:1. Isso significa que o resultado passa no WCAG AA para texto normal, mas não necessariamente no nível AAA, mais rigoroso, de 7:1. Ela não leva em conta as outras cores da sua marca, então é uma rede de segurança, não uma decisão de design.

Enquanto isso, o método de contraste **APCA**, muito comentado, continua experimental. A WCAG 3 ainda é um rascunho, e uma Recomendação final do W3C não é esperada antes de 2028. Para conformidade hoje, as taxas da WCAG 2 continuam sendo o padrão. Nosso [guia de contraste WCAG](/pt/blog/wcag-contrast-guide) explica cada uma.

## O panorama geral

As pesquisas de 2026 apontam numa direção: **não existe um único jeito "certo" de uma cor parecer.** As cores variam com os olhos, a idade e a tela de cada pessoa, e a matemática que descreve a percepção é mais sutil do que os números RGB que digitamos numa folha de estilos.

Isso não é motivo para abrir mão da precisão. É motivo para usá-la onde importa. Confira valores exatos, teste o contraste com números reais e visualize sua paleta do jeito que pessoas com deficiência na visão de cores vão vê-la. Cerca de 1 em cada 12 homens e 1 em cada 200 mulheres têm algum tipo de deficiência na visão de cores, e o estudo da UCL sugere que telas modernas podem ampliar essas diferenças. Para saber mais sobre como criar para esse público, veja nosso guia de [design para daltonismo](/pt/blog/designing-for-color-blindness).

### Fontes

- Rider, Frith e Stockman, *Optics Express* 34, 38458–38481 (2026), via [comunicado de imprensa da Optica](https://www.optica.org/about/newsroom/news_releases/2026/new_research_reveals_why_modern_display_colors_can_look_different_to_different_people/)
- Bujack et al., Laboratório Nacional de Los Alamos, via [ScienceDaily](https://www.sciencedaily.com/releases/2026/02/260222092302.htm)
- Ehab et al., [*Do Vision Encoders Exhibit Human-like Color Thresholds?*](https://arxiv.org/abs/2607.16540), arXiv, julho de 2026
- [New to the web platform in April](https://web.dev/blog/web-platform-04-2026), web.dev
