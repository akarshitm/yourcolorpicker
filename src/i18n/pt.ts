import type { Dictionary } from "./en";

// Brazilian Portuguese — Brazil is the bulk of Portuguese search volume, so
// titles and descriptions lead with pt-BR terms (seletor de cores, conta-gotas,
// pegar cor de imagem, degradê) while staying readable in Portugal.
export const pt: Dictionary = {
	brandName: "Your Color Picker",
	nav: {
		tool: "Seletor de Cores de Imagem",
		tools: "Ferramentas",
		whyUs: "Por que nós",
		faq: "Perguntas",
		blog: "Blog",
		about: "Sobre",
		contact: "Contato",
		howToUse: "Como usar",
		openMenu: "Abrir menu",
		uploadImage: "Enviar imagem",
		language: "Idioma",
		games: "Jogos",
	},
	footer: {
		privacyHeading: "Privacidade",
		privacyBlurb:
			"O Your Color Picker funciona inteiramente no lado do cliente para a ferramenta de cores em si. Cada pixel que você inspeciona, cada paleta que extrai e cada cor que salva é calculada e armazenada diretamente no seu navegador usando a API Canvas e o armazenamento local — sua imagem nunca é enviada, transmitida ou vista por nenhum servidor, porque não existe nenhum nesse fluxo. Usamos o Google Analytics para entender o tráfego geral do site, mas nenhuma imagem ou dado de cor é rastreado ou compartilhado, e limpar os dados do navegador apaga tudo o que foi salvo localmente.",
		readFullPolicy: "Leia a {{link}} completa.",
		privacyPolicyLabel: "Política de Privacidade",
		aboutUs: "Sobre Nós",
		tools: "Todas as Ferramentas",
		faq: "Perguntas Frequentes",
		contactUs: "Fale Conosco",
		privacyPolicy: "Política de Privacidade",
		termsAndConditions: "Termos e Condições",
		copyrightSuffix: "yourcolorpicker.com",
	},
	hero: {
		metaTitle: "Seletor de Cores Online — Código HEX e RGB do Espectro ou Imagem",
		metaDescription:
			"Seletor de cores online grátis: arraste pelo espectro ou pegue qualquer cor de uma imagem e copie o código HEX, RGB e HSL exato. Sem cadastro e nada é enviado.",
		eyebrow: "Seletor de cores grátis · Sem cadastro · Nada é enviado",
		heading: "Seletor de cores online grátis: escolha no espectro ou em qualquer imagem",
		subhead:
			"Um identificador de cores de imagem que mostra cada código HEX, RGB e HSL com precisão de pixel — com um buscador de cores complementares integrado e um gerador de cor aleatória para quando você só precisa de um ponto de partida.",
		ctaPrimary: "Enviar uma imagem",
		ctaSecondary: "Veja o que o torna diferente",
	},
	features: {
		heading: "Um seletor de cores feito para precisão, não só para extrair",
		items: [
			{
				title: "Um seletor de cores de imagem, pixel por pixel",
				body: "Passe o cursor sobre a imagem e uma lupa ampliada mostra cada pixel ao redor do cursor, com o pixel exato destacado — assim este seletor de cores escolhe exatamente o que você quer, e não uma média dos vizinhos.",
			},
			{
				title: "Código hexadecimal e cor RGB, juntos",
				body: "Cada pixel funciona ao mesmo tempo como buscador de código hexadecimal, buscador de cor RGB e leitor HSL — com o nome de cor padrão mais próximo identificado em um clique.",
			},
			{
				title: "Buscador de cores complementares integrado",
				body: "Paletas complementares, análogas, triádicas e monocromáticas se atualizam ao vivo conforme a cor que você está apontando — combinações de cores prontas, sem precisar saber teoria das cores.",
			},
			{
				title: "Um gerador de cor aleatória, quando precisar",
				body: "Sem imagem à mão? Clique em cor aleatória para receber um novo código HEX, RGB e HSL como ponto de partida — depois salve ou use para gerar uma paleta combinando.",
			},
			{
				title: "Verificador de contraste integrado",
				body: "Compare duas cores quaisquer da sua imagem com os limites WCAG AA/AAA para texto normal e grande — sem precisar de outra ferramenta.",
			},
			{
				title: "Exporte, não apenas copie",
				body: "Exporte sua paleta como variáveis CSS, configuração do Tailwind, JSON ou uma faixa de amostras PNG para baixar — ou salve as cores localmente sem precisar de conta.",
			},
		],
	},
	cta: {
		heading: "Pronto para descobrir suas cores?",
	},
	cookieConsent: {
		message: "Usamos cookies (via Google Analytics) para entender como os visitantes usam este site. Veja nossa {{link}} para mais detalhes.",
		linkLabel: "Política de Privacidade",
		accept: "Aceitar",
		decline: "Recusar",
	},
	trust: {
		points: [
			"100% no navegador — sua imagem nunca sai do seu dispositivo",
			"Sem conta, sem cadastro, sem marca d'água",
			"Funciona offline depois que a página carrega",
		],
	},
	help: {
		title: "Como usar o Your Color Picker",
		close: "Fechar",
		done: "Entendi",
		steps: [
			{
				title: "1. Envie uma imagem",
				body: "Clique na área de envio, arraste um arquivo até ela ou cole uma imagem direto da área de transferência.",
			},
			{
				title: "2. Inspecione qualquer pixel",
				body: "Passe o cursor sobre a imagem e uma lupa mostra cada pixel ao redor, ampliado e com o pixel exato destacado — o RGB, HEX e HSL se atualizam ao vivo à direita. Você também pode focar a imagem e usar as setas do teclado.",
			},
			{
				title: "3. Clique para ver as opções",
				body: "Clique em um pixel — ou pressione Enter com ele em foco — para abrir as opções: salvar, ver em tela cheia (útil para comparar com um objeto real aproximando o celular), copiar todos os valores de uma vez, ver o nome de cor mais próximo ou conferir se ele fica mais legível com texto preto ou branco.",
			},
			{
				title: "4. Veja sugestões, paleta e qualidade",
				body: "\"Combina com\" se atualiza ao vivo com amostras complementares, análogas, triádicas e monocromáticas para a cor atual. \"Cores dominantes\" extrai as cores principais da imagem inteira. A área de qualidade abaixo da imagem indica se ela é Baixa, Média, Alta ou HD — para você saber o quanto confiar no que está selecionando.",
			},
			{
				title: "5. Salve, exporte ou compartilhe",
				body: "As cores salvas aparecem em uma fileira simples de marcadores — clique em uma para voltar a exibi-la na leitura ao vivo. As paletas são exportadas como variáveis CSS, configuração do Tailwind, JSON ou faixa PNG, e podem ser salvas localmente ou compartilhadas por link.",
			},
		],
	},
	tool: {
		eyebrow: "Seletor de cores online",
		heading: "Escolha uma cor no espectro ou em uma imagem",
		intro:
			"Arraste pelo espectro de cores, digite um código HEX ou mova o cursor sobre a foto de exemplo abaixo — depois envie sua própria imagem para pegar as cores dela. Cada cor traz os códigos HEX, RGB e HSL, e nada é enviado para lugar nenhum: as imagens são lidas e analisadas no seu navegador.",
		uploadButton: "Enviar imagem",
		pickFromScreen: "Pegar cor da tela",
		captureScreenshot: "Capturar tela",
		miniPicker: "Janela de seletor flutuante",
		dragHint: "ou arraste e solte um arquivo no painel acima, ou cole com Ctrl/Cmd+V",
		canvasAriaLabel: "Tela da imagem — passe o cursor para inspecionar a cor de um pixel, clique ou pressione Enter para abrir as opções de salvar, tela cheia e copiar",
		qualityHeading: "Qualidade da imagem",
		qualityLow: "Baixa",
		qualityMedium: "Média",
		qualityHigh: "Alta",
		qualityHD: "HD",
		contrastHeading: "Verificador de contraste",
		colorA: "Cor A",
		colorB: "Cor B",
		contrastPlaceholder: "Escolha duas cores da imagem (pelo menu de opções) ou cole códigos hexadecimais para compará-las.",
		pickerHeading: "Seletor de cores",
		spectrumAriaLabel: "Saturação e brilho — arraste ou use as setas do teclado",
		hueAriaLabel: "Matiz",
		hexInputAriaLabel: "Digite um código de cor HEX",
		randomColor: "Cor aleatória",
		hex: "HEX",
		rgb: "RGB",
		hsl: "HSL",
		copy: "Copiar",
		saveColor: "Salvar cor",
		goesWellWith: "Combina com",
		goesWellWithSub: "Paletas geradas ao vivo a partir da cor que você está apontando — clique em uma amostra para copiá-la.",
		complementary: "Complementar",
		analogous: "Análoga",
		triadic: "Triádica",
		monochromatic: "Monocromática",
		dominantColors: "Cores dominantes",
		colorsUnit: "cores",
		paletteCountAriaLabel: "Número de cores da paleta",
		savedColors: "Cores salvas",
		savedColorsSub: "Clique na imagem, ou foque nela e pressione Enter, para ver as opções de cor — incluindo salvar uma aqui.",
		exportHeading: "Exportar",
		exportCss: "Variáveis CSS",
		exportTailwind: "Configuração do Tailwind",
		exportJson: "JSON",
		exportPng: "Baixar faixa PNG",
		historyHeading: "Histórico",
		paletteNamePlaceholder: "Nome da paleta",
		save: "Salvar",
		copyLink: "Copiar link",
	},
	faq: {
		pageEyebrow: "Perguntas frequentes",
		pageHeading: "Perguntas frequentes",
		pageIntro:
			"Tudo o que nos perguntam sobre como pegar cores de uma imagem, ler códigos HEX e RGB e criar uma paleta de cores — além de algumas dúvidas sobre cores que aparecem pelo caminho.",
		metaDescription:
			"Respostas sobre como pegar a cor de uma imagem, descobrir o código HEX e RGB e criar uma paleta de cores — e outras dúvidas frequentes sobre cores.",
		sectionHeading: "Seletor de cores — perguntas frequentes",
		viewAll: "Ver todas as perguntas",
		items: [
			{
				q: "Qual a diferença entre isto e o seletor de cores do Google?",
				a: "O seletor de cores integrado do Google permite escolher uma cor de uma paleta ou digitar um código HEX, mas não consegue ler cores de uma foto. O Your Color Picker é um seletor de cores de imagem — envie ou arraste qualquer foto e leia o HEX, RGB e HSL exatos de qualquer pixel dela.",
			},
			{
				q: "Como descubro o código HEX de uma cor em uma imagem?",
				a: "Envie a imagem e passe o cursor — ou arraste o dedo no celular — sobre qualquer pixel. O buscador de código hexadecimal se atualiza ao vivo enquanto você se move, e clicar no pixel abre opções para copiar o HEX, RGB ou HSL, salvar a cor ou vê-la em tela cheia.",
			},
			{
				q: "O que é um buscador de cores complementares?",
				a: "Um buscador de cores complementares mostra a cor diretamente oposta à escolhida no círculo cromático — a combinação que os designers testam primeiro. O nosso se atualiza ao vivo junto com sugestões análogas, triádicas e monocromáticas para a cor que você está vendo.",
			},
			{
				q: "Posso gerar uma cor aleatória?",
				a: "Sim — o gerador de cor aleatória integrado à ferramenta cria uma nova cor HEX, RGB e HSL sempre que você precisar de um ponto de partida, com suas próprias sugestões de paleta combinando.",
			},
			{
				q: "Este seletor de cores é gratuito e privado?",
				a: "Sim. É grátis, sem cadastro, e funciona 100% no navegador — sua imagem é lida e analisada no seu dispositivo e nunca é enviada a um servidor.",
			},
			{
				q: "O que é uma ferramenta de seletor de cores?",
				a: "Uma ferramenta de seletor de cores permite escolher ou identificar uma cor e obter seu valor digital — geralmente como código HEX, RGB ou HSL — para reutilizar no seu trabalho de design. O Your Color Picker é um seletor de cores de imagem: envie qualquer foto e clique em um pixel para ler na hora os valores exatos da cor.",
			},
			{
				q: "Como uso o atalho do seletor de cores?",
				a: "Atalhos do sistema, como Win + Shift + C no Windows (Seletor de Cores do PowerToys) ou o Medidor de Cores Digital do macOS, permitem capturar a cor de qualquer pixel da tela. Se preferir não instalar nada, envie sua imagem direto para o Your Color Picker e passe o cursor sobre ela no navegador — sem atalhos e sem programas.",
			},
			{
				q: "Como uso um identificador de cores?",
				a: "Arraste ou envie uma imagem para a ferramenta e mova o cursor (ou o dedo, no celular) sobre qualquer parte dela. O identificador acompanha sua posição ao vivo, mostrando o HEX, RGB e HSL daquele pixel exato — clique para copiar o código ou salvar a cor.",
			},
			{
				q: "Como mudo a cor do Finder no Mac?",
				a: "Se você se refere ao app Finder do macOS, vá em Ajustes do Sistema → Aparência e altere a Cor de Destaque, que muda a barra lateral, as janelas e os destaques do Finder — não existe uma configuração de cor só para o Finder. Se, em vez disso, você quer identificar uma cor que viu em uma foto, é para isso que serve o Your Color Picker — envie a imagem e clique em qualquer pixel para obter o código exato.",
			},
			{
				q: "Como uso um buscador de true color?",
				a: "\"True color\" (cor verdadeira) significa profundidade de cor completa de 24 bits — mais de 16 milhões de tons, o mesmo que sua tela realmente exibe. O Your Color Picker lê os pixels com precisão true color, então os valores HEX e RGB que você obtém correspondem exatamente ao tom da sua imagem, e não a uma aproximação arredondada.",
			},
			{
				q: "Que cor é esta?",
				a: "Envie uma foto do objeto — ou um print, se estiver na sua tela — para o Your Color Picker e passe o cursor (ou o dedo, no celular) sobre o ponto exato. A ferramenta mostra o HEX, RGB e HSL daquele pixel ao vivo, e você pode clicar para copiar ou salvar. Para uma imagem inteira em vez de um ponto, capture algumas das áreas mais marcantes para ter uma ideia da cor geral.",
			},
			{
				q: "Que cor é o taupe?",
				a: "Taupe é um marrom acinzentado suave, entre o cinza e o marrom, com um fundo quente — geralmente perto de HEX #8B8589 a #B38B6D, dependendo do tom. Tintas e tecidos taupe variam bastante, então se você tiver uma amostra ou foto, envie aqui para obter o código HEX exato em vez de depender de uma estimativa.",
			},
			{
				q: "Como descubro minha paleta de cores?",
				a: "\"Paleta de cores\" pode significar duas coisas. Se você fala dos tons que valorizam você, isso é a coloração pessoal (Primavera, Verão, Outono, Inverno e suas subcartelas) — feita aproximando tecidos coloridos do rosto sob luz natural para ver o que combina com sua pele, cabelo e olhos, com uma consultora ou um teste online. Se você fala de uma paleta de design, o caminho mais preciso é capturar cores reais de uma foto de referência — envie uma para o Your Color Picker e escolha alguns pixels; cada um vem com sugestões complementares, análogas e triádicas para completar o conjunto.",
			},
			{
				q: "Como crio uma paleta de cores?",
				a: "Comece com uma imagem de referência — uma foto, uma obra de arte ou um moodboard — e capture algumas cores dela com o Your Color Picker. Cada cor escolhida vem com sugestões complementares, análogas e triádicas integradas, para você montar uma paleta coerente a partir de um tom inicial em vez de adivinhar combinações.",
			},
			{
				q: "Como se descobre a cor da aura?",
				a: "A cor da aura é um conceito de práticas espirituais e de cura energética, não uma propriedade física mensurável — normalmente é avaliada por fotografia de aura (como a fotografia Kirlian) ou por praticantes que a leem intuitivamente. Não tem relação com valores HEX ou RGB, que medem comprimentos de onda de luz e não campos de energia.",
			},
			{
				q: "Como identifico a cor da tinta de uma parede?",
				a: "Tire uma foto da parede com luz natural e uniforme, de dia — evite sombras e luz artificial, que alteram a leitura da cor — e envie para o Your Color Picker, capturando a área da parede para obter o HEX e RGB. Telas e iluminação fazem disso uma correspondência bem próxima, não uma garantia de igualdade com a amostra, então leve o HEX a uma loja de tintas para encontrarem a fórmula mais parecida.",
			},
			{
				q: "Qual a melhor ferramenta grátis para inverter as cores de uma imagem?",
				a: "O Your Color Picker foi feito para identificar e capturar cores de uma imagem, não para invertê-las, mas inverter cores é fácil e grátis — a maioria dos apps de fotos (Pré-Visualização no macOS, Fotos no Windows) tem um filtro de inversão, e editores gratuitos como GIMP ou Photopea (no navegador, sem instalar) também oferecem isso em um clique.",
			},
			{
				q: "Como combino a cor do cinto?",
				a: "A regra clássica é combinar o cinto com os sapatos — cinto marrom com sapato marrom, preto com preto — e não com a calça ou a camisa. Para uma combinação exata entre dois itens específicos, como um tom de couro, fotografe ambos sob a mesma luz e compare os códigos HEX no Your Color Picker em vez de confiar só no olho.",
			},
			{
				q: "O que é cor RGB?",
				a: "RGB significa Red, Green, Blue (Vermelho, Verde, Azul) — os três canais de luz que sua tela mistura para criar cada cor que você vê, cada um de 0 a 255. É um modelo de cor aditivo, feito para telas digitais, diferente da mistura de tintas que aprendemos na escola. O Your Color Picker mostra o valor RGB de qualquer pixel capturado de uma imagem.",
			},
			{
				q: "O que é HSL em um código de cor?",
				a: "HSL significa Hue, Saturation, Lightness (Matiz, Saturação e Luminosidade) — outra forma de descrever a mesma cor que o HEX ou o RGB, mas em termos mais intuitivos: o matiz é a cor base (0–360° no círculo cromático), a saturação é o quão viva ou apagada ela é, e a luminosidade é o quão perto está do preto ou do branco. Costuma ser mais fácil ajustar uma cor de forma previsível em HSL — baixar a luminosidade escurece a cor sem mudar o matiz, por exemplo.",
			},
		],
	},
	about: {
		title: "Sobre Nós — Your Color Picker",
		description:
			"O Your Color Picker é um seletor de cores de imagem grátis e privado — descubra o que ele faz e por que nada é enviado a um servidor.",
		eyebrow: "Sobre",
		heading: "Sobre o Your Color Picker",
		intro: "Uma ferramenta pequena e focada em uma tarefa: extrair valores HEX, RGB e HSL exatos de qualquer imagem, na hora e com privacidade.",
		whatHeading: "O que ele faz",
		whatBody:
			"O Your Color Picker é um seletor de cores de imagem — envie ou arraste uma foto, print ou mockup de design e passe o cursor ou toque em qualquer ponto para ler a cor exata daquele pixel em HEX, RGB e HSL. Clique em uma cor para copiar qualquer um desses códigos, salvá-la em uma paleta, vê-la em tela cheia ou ver cores complementares, análogas e triádicas sugeridas ao lado. Também há um gerador de cor aleatória para quando você só precisa de um ponto de partida.",
		whyHeading: "Por que o criamos",
		whyBody:
			"A maioria dos seletores de cores deixa você escolher em uma amostra ou digitar um código que já conhece — poucos deixam você apontar para uma foto real e perguntar \"que cor é exatamente essa?\". Criamos o Your Color Picker para responder essa pergunta em segundos, sem instalar programas, criar conta ou enviar nada a um servidor.",
		howHeading: "Como funciona",
		howBody:
			"Tudo roda no seu navegador usando a API Canvas do HTML. Sua imagem é decodificada e lida localmente no seu dispositivo — nunca é transmitida, porque não existe etapa de envio no fluxo. As cores salvas ficam no armazenamento local do navegador, então permanecem no seu dispositivo e somem se você limpar os dados do navegador. Veja nossa {{link}} para mais detalhes.",
		howLinkLabel: "Política de Privacidade",
		whoHeading: "Para quem é",
		whoBody:
			"Designers que buscam o código HEX de uma imagem de referência, desenvolvedores que extraem cores de marca de um print, pintores e decoradores que conferem a cor de uma parede ou tecido a partir de uma foto, e qualquer pessoa que já olhou para algo e se perguntou qual é exatamente aquele tom.",
		questionsHeading: "Dúvidas?",
		questionsFaqBody: "Veja nossas {{link}} para as dúvidas mais comuns.",
		questionsFaqLinkLabel: "Perguntas Frequentes",
		questionsContactBody: "Ou {{link}} diretamente — lemos todas as mensagens.",
		questionsContactLinkLabel: "fale conosco",
	},
	contact: {
		title: "Fale Conosco — Your Color Picker",
		description: "Entre em contato sobre o Your Color Picker — relatos de erros, ideias de recursos ou comentários gerais. Lemos todas as mensagens.",
		eyebrow: "Contato",
		heading: "Fale conosco",
		intro: "Encontrou um erro, tem uma ideia de recurso ou só quer dizer oi? Mande uma mensagem — lemos tudo o que chega.",
		emailHeading: "Escreva para nós",
		sendEmailButton: "Enviar um e-mail",
		includeHeading: "O que incluir",
		includeBody:
			"Para relatos de erros, diga qual dispositivo e navegador você está usando e, se puder, o que estava fazendo logo antes do problema aparecer. Para ideias de recursos ou comentários gerais, conte o que seria útil para você — lemos todas as mensagens e tentamos responder em poucos dias úteis.",
		beforeHeading: "Antes de escrever",
		beforeFaqBody: "Dúvidas rápidas sobre como a ferramenta funciona geralmente já estão respondidas na nossa {{link}}.",
		beforeFaqLinkLabel: "página de perguntas frequentes",
		beforePrivacyBody: "Para dúvidas sobre como seus dados são tratados, veja nossa {{link}}.",
		beforePrivacyLinkLabel: "Política de Privacidade",
	},
	privacy: {
		title: "Política de Privacidade — Your Color Picker",
		description: "Política de privacidade do Your Color Picker: suas imagens são processadas inteiramente no navegador e nunca são enviadas, transmitidas ou armazenadas em um servidor.",
		eyebrow: "Legal",
		heading: "Política de Privacidade",
		lastUpdatedPrefix: "Última atualização:",
		shortHeading: "A versão curta",
		shortBody:
			"O Your Color Picker funciona inteiramente no seu navegador. Qualquer imagem que você envia é lida e analisada localmente no seu dispositivo usando a API Canvas — nunca é enviada, transmitida ou armazenada em nenhum servidor, porque este site não tem nenhum componente de servidor nesse fluxo. Usamos o Google Analytics para entender o tráfego geral do site — veja \"Cookies e rastreamento\" abaixo para mais detalhes.",
		imagesHeading: "Imagens que você envia",
		imagesBody:
			"Quando você envia ou arrasta uma imagem, ela é decodificada e renderizada diretamente na memória do navegador para fazer o seletor de cores funcionar. Ela não é enviada pela rede para nós nem para terceiros. Fechar ou recarregar a aba descarta a imagem por completo.",
		storageHeading: "O que armazenamos localmente",
		storageBody:
			"A ferramenta usa o armazenamento local do navegador — uma tecnologia web padrão, não um cookie — para lembrar duas coisas no seu próprio dispositivo: sua preferência de tema claro/escuro e as cores que você escolher salvar. Esses dados nunca saem do seu dispositivo, nunca ficam visíveis para nós e são apagados automaticamente se você limpar os dados do site no navegador.",
		cookiesHeading: "Cookies e rastreamento",
		cookiesBody:
			"Usamos o Google Analytics para entender o tráfego geral — por exemplo, quais páginas são populares e de onde vêm aproximadamente os visitantes. Ele define cookies e pode coletar informações como sua localização aproximada, tipo de dispositivo e navegador e as páginas que você visita. Isso é totalmente separado da ferramenta de cores: suas imagens e as cores que você captura nunca são enviadas ao Google nem a ninguém. Você pode desativar com o {{optout}} ou ver a {{privacy}} para saber como o Google trata esses dados.",
		cookiesOptoutLabel: "complemento de desativação do Google Analytics para navegadores",
		cookiesGooglePrivacyLabel: "Política de Privacidade do Google",
		hostingHeading: "Hospedagem e registros do servidor",
		hostingBody:
			"Como qualquer site, nosso provedor de hospedagem pode manter registros de acesso padrão (como endereço IP, tipo de navegador e horário das solicitações) por motivos de segurança e confiabilidade. Esses registros são gerados pela própria infraestrutura de hospedagem, não pelo código deste site, e não têm relação com nenhum dado de imagem ou cor — nada disso chega a um servidor.",
		childrenHeading: "Privacidade de crianças",
		childrenBody:
			"O Your Color Picker não coleta intencionalmente informações pessoais de ninguém, incluindo crianças, porque não coleta informações pessoais de forma alguma — não há sistema de contas e nada do que você insere é transmitido para nós.",
		changesHeading: "Alterações nesta política",
		changesBody:
			"Se esta política mudar, atualizaremos a data de \"última atualização\" acima. Mudanças significativas — como adicionar qualquer forma de coleta de dados — serão indicadas claramente nesta página.",
		contactHeading: "Contato",
		contactBody: "Dúvidas sobre esta política? Escreva para {{email}} ou use nossa {{link}}.",
		contactLinkLabel: "página de contato",
	},
	terms: {
		title: "Termos e Condições — Your Color Picker",
		description: "Os termos e condições de uso do Your Color Picker, um seletor de cores de imagem grátis que funciona no navegador.",
		eyebrow: "Legal",
		heading: "Termos e condições",
		lastUpdatedPrefix: "Última atualização:",
		acceptanceHeading: "Aceitação dos termos",
		acceptanceBody: "Ao usar o Your Color Picker (\"a ferramenta\", \"o site\"), você concorda com estes termos. Se não concordar, por favor não use o site.",
		useHeading: "Uso do serviço",
		useBody:
			"O Your Color Picker é gratuito para uso pessoal ou comercial, sem necessidade de cadastro. Você concorda em usá-lo apenas para fins lícitos e em não tentar interrompê-lo, fazer engenharia reversa com fins maliciosos ou abusar do serviço de forma que prejudique outros usuários.",
		contentHeading: "Suas imagens e conteúdo",
		contentBody:
			"Qualquer imagem usada com a ferramenta é processada inteiramente no seu navegador e nunca é enviada para nós — nunca a recebemos, armazenamos ou acessamos, então não reivindicamos nenhum direito sobre ela. Você é o único responsável por garantir que tem o direito de usar as imagens que carregar na ferramenta. Veja nossa {{link}} para saber mais sobre como a ferramenta trata os dados.",
		contentLinkLabel: "Política de Privacidade",
		warrantyHeading: "Sem garantia",
		warrantyBody:
			"O Your Color Picker é oferecido \"como está\", sem garantia de qualquer tipo, expressa ou implícita. Embora busquemos valores de cor precisos, não garantimos precisão perfeita para toda imagem, dispositivo ou tela — calibração de tela, compressão de imagem e perfis de cor podem afetar os valores exatos que você vê. Não use como única fonte para decisões em que a precisão da cor seja crítica (por exemplo, produção final de tinta ou impressão) sem verificação independente.",
		liabilityHeading: "Limitação de responsabilidade",
		liabilityBody:
			"Na máxima extensão permitida por lei, não somos responsáveis por danos indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso do site ou da ferramenta.",
		linksHeading: "Links de terceiros",
		linksBody: "As páginas deste site podem ter links para recursos de terceiros como referência. Não somos responsáveis pelo conteúdo, precisão ou práticas de sites que não operamos.",
		changesHeading: "Alterações no serviço ou nestes termos",
		changesBody:
			"Podemos atualizar a ferramenta ou estes termos a qualquer momento. Continuar usando o site depois da publicação das mudanças significa que você aceita os termos atualizados. Atualizaremos a data de \"última atualização\" acima sempre que esta página mudar.",
		contactHeading: "Contato",
		contactBody: "Dúvidas sobre estes termos? Escreva para {{email}} ou use nossa {{link}}.",
		contactLinkLabel: "página de contato",
	},
	toolsHub: {
		title: "Ferramentas de Cores Online Grátis | Your Color Picker",
		description:
			"Todas as ferramentas de cores grátis em um só lugar: seletor de cores, conversor HEX/RGB, gerador de degradê, verificador de contraste, simulador de daltonismo e mais.",
		eyebrow: "Ferramentas",
		heading: "Todas as ferramentas",
		intro: "Todas as ferramentas de cores gratuitas deste site, em um só lugar.",
		guidesHeading: "Guias",
		items: [
			{
				title: "Seletor de Cores de Imagem",
				body: "Envie uma foto e leia o HEX, RGB e HSL exatos de qualquer pixel, com lupa e extração completa de paleta.",
			},
			{
				title: "Conversor de Cores",
				body: "Converta qualquer cor entre HEX, RGB, HSL e HSV na hora — edite qualquer campo e os outros se atualizam ao vivo.",
			},
			{
				title: "Gerador de Degradê",
				body: "Escolha duas ou mais cores, veja um gradiente CSS ao vivo e copie o código pronto.",
			},
			{
				title: "Verificador de Contraste",
				body: "Confira a taxa de contraste WCAG entre a cor do texto e do fundo, com resultados AA/AAA ao vivo.",
			},
			{
				title: "Simulador de Daltonismo",
				body: "Envie uma imagem para vê-la simulada com protanopia, deuteranopia e tritanopia, lado a lado.",
			},
			{
				title: "Misturador de Cores",
				body: "Misture duas cores em qualquer proporção para encontrar a cor exata entre elas.",
			},
			{
				title: "Gerador de Tons de Cores",
				body: "Gere uma escala completa de luminosidade — tons claros rumo ao branco e tons escuros rumo ao preto — a partir de uma cor base.",
			},
			{
				title: "Gerador de Cor Aleatória",
				body: "Gere uma cor HEX, RGB e HSL aleatória com um clique, com sugestões de paleta combinando.",
			},
			{
				title: "Nomes das Cores",
				body: "Explore todas as cores com nome do CSS e seus códigos HEX — com busca e clique para copiar.",
			},
			{
				title: "Gerador de Paleta de Cores",
				body: "Crie uma paleta de cores completa — complementar, análoga, triádica e monocromática — a partir de uma cor base, pronta para exportar.",
			},
		],
	},
	games: {
		hub: {
			title: "Jogos de Cores Grátis — Teste Sua Visão de Cores | Your Color Picker",
			description: "Jogue grátis: Color Runner, um teste de visão para achar a cor diferente e um desafio de memória de cores. Sem cadastro, direto no navegador.",
			eyebrow: "Jogos",
			heading: "Jogos de cores",
			intro: "Jogos rápidos e gratuitos que treinam seu olho para cores. Bata seu recorde e volte todo dia para uma nova rodada de Memória de cores.",
			play: "Jogar",
			newBadge: "Novo",
			dailyBadge: "Diário"
		},
		banner: {
			heading: "Jogue jogos de cores grátis",
			body: "Color Runner, um teste para achar a cor diferente e memória de cores: quão bom é o seu olho?",
			cta: "Jogar agora"
		},
		common: {
			share: "Compartilhar resultado",
			copied: "Copiado! Cole onde quiser.",
			playAgain: "Jogar de novo",
			start: "Começar",
			best: "Melhor",
			moreGames: "Mais jogos de cores",
			allGames: "Todos os jogos"
		},
		odd: {
			title: "Ache a Cor Diferente — Teste de Visão de Cores Grátis | Your Color Picker",
			description: "Encontre o único quadrado com um tom levemente diferente. A cada nível a grade cresce e a diferença diminui — até onde vai a sua visão?",
			eyebrow: "Jogo",
			heading: "Ache a cor diferente",
			intro: "Toque no quadrado que não combina. A cada nível a grade cresce e a diferença fica menor. Você tem três vidas.",
			cardBody: "Encontre o quadrado com um tom levemente diferente. Os níveis ficam mais difíceis até só os olhos mais afiados sobreviverem.",
			level: "Nível",
			lives: "Vidas",
			tileLabel: "Quadrado {n}",
			gameOver: "Fim de jogo: você chegou ao nível {n}.",
			rankLabel: "Seu olho: {rank}",
			ranks: [
				"Iniciante",
				"Bom olho",
				"Olho afiado",
				"Olho de águia",
				"Falcão das cores",
				"Sobre-humano"
			],
			bestLevel: "Melhor: nível {n}",
			help: {
				title: "Como jogar Ache a cor diferente",
				steps: [
					{
						title: "Ache o quadrado diferente",
						body: "Um quadrado tem um tom levemente diferente dos outros. Toque nele para passar de nível."
					},
					{
						title: "Cada vez mais difícil",
						body: "Cada nível adiciona quadrados e diminui a diferença."
					},
					{
						title: "Três vidas",
						body: "Um toque errado custa uma vida e mostra onde estava o quadrado. Perdeu as três, o jogo termina."
					}
				]
			},
			explainerHeading: "O que este jogo mede",
			explainerBody: "O quadrado diferente muda apenas na luminosidade, algo que quase todo mundo percebe, incluindo pessoas com deficiência na visão de cores. Os níveis altos testam a menor diferença que você consegue notar. O brilho da tela, reflexos e a qualidade do monitor influenciam, então encare como um desafio divertido, não como um exame médico."
		},
		runner: {
			title: "Color Runner — Jogo de Corrida Pixelado Grátis | Your Color Picker",
			description: "Corra pela cor certa! Um jogo de corrida infinita em pixel art: troque entre três faixas coloridas, fique na cor indicada e pegue cubos dourados para 10 segundos de proteção.",
			eyebrow: "Jogo arcade",
			heading: "Color Runner",
			intro: "Corra, troque de faixa e fique sempre na cor escrita no topo. As faixas mudam sem parar e o ritmo aumenta: pegue um cubo dourado para 10 segundos de proteção.",
			cardBody: "Uma corrida infinita pixelada: fique na faixa da cor indicada e pegue cubos dourados para 10 segundos de ouro. Até onde você chega?",
			runOn: "Corra no",
			next: "Próxima",
			goldActive: "Dourado!",
			distance: "{n} m",
			best: "Melhor: {n} m",
			newBest: "Novo recorde! 🎉",
			controls: "← → troca de faixa · ↑ ou Espaço para pular · no celular, deslize",
			overColor: "Você saiu do caminho {color}!",
			final: "Você correu {n} m",
			left: "Mover para a esquerda",
			right: "Mover para a direita",
			jump: "Pular",
			resume: "Continuar",
			sound: "Som",
			colors: {
				red: "Vermelho",
				blue: "Azul",
				yellow: "Amarelo",
				green: "Verde",
				pink: "Rosa",
				orange: "Laranja",
				purple: "Roxo"
			},
			help: {
				title: "Como jogar Color Runner",
				steps: [
					{
						title: "Siga a cor",
						body: "A cor no topo diz em qual faixa correr. Se você sair dela por mais de um instante, a corrida acaba."
					},
					{
						title: "Fique de olho nas mudanças",
						body: "As cores das faixas mudam enquanto você corre, e um aviso PRÓXIMA pisca antes da cor-alvo mudar. Mude com antecedência."
					},
					{
						title: "Pegue o ouro e pule as trocas",
						body: "Cubos dourados aparecem bem no seu caminho: pegue um e seu corredor fica dourado por 10 segundos, sem poder perder. Pressione ↑ ou Espaço (ou deslize para cima) para pular um trecho curto da cor errada enquanto troca de faixa."
					}
				]
			},
			explainerHeading: "Por que é difícil trocar de cor",
			explainerBody: "Ler o nome de uma cor e associá-lo à cor real exige esforço mental, principalmente quando as cores ao redor não param de mudar — é parente do famoso efeito Stroop. A velocidade complica: o cérebro tem menos tempo para comparar a palavra com as faixas, então o jogo treina um reconhecimento de cores rápido e preciso."
		},
		memory: {
			title: "Memória de Cores — Recrie a Cor de Memória | Your Color Picker",
			description: "Veja uma cor por 3 segundos e recrie-a de memória com controles de matiz, saturação e luminosidade. Cinco rodadas, pontuação de 0 a 100.",
			eyebrow: "Jogo",
			heading: "Memória de cores",
			intro: "Observe uma cor por três segundos e reconstrua-a de memória com controles de matiz, saturação e luminosidade. Cinco rodadas, pontuação de 0 a 100.",
			cardBody: "Veja uma cor por 3 segundos e recrie-a de memória. Cinco rodadas: você chega a 90?",
			dailyMode: "Diário",
			practiceMode: "Treino",
			dailyDone: "Você já jogou a rodada diária de hoje: experimente o modo Treino ou volte amanhã.",
			round: "Rodada {n}/5",
			memorize: "Memorize esta cor",
			recreate: "Agora recrie",
			hue: "Matiz",
			saturation: "Saturação",
			lightness: "Luminosidade",
			submit: "Enviar",
			next: "Próxima rodada",
			target: "Alvo",
			yours: "A sua",
			roundScore: "{score} / 100",
			final: "Pontuação final: {score} / 100",
			bestScore: "Melhor: {score}",
			help: {
				title: "Como jogar Memória de cores",
				steps: [
					{
						title: "Memorize",
						body: "Uma cor preenche o painel por três segundos. Observe bem."
					},
					{
						title: "Recrie",
						body: "Use os controles de matiz, saturação e luminosidade para reconstruí-la de memória e toque em Enviar."
					},
					{
						title: "Pontue",
						body: "Cada rodada vale até 100 pontos, conforme o quanto sua cor se parece com a original. O modo diário dá a todos as mesmas cinco cores."
					}
				]
			},
			explainerHeading: "Por que é difícil lembrar cores",
			explainerBody: "Lembramos as cores como categorias (\"azul\", \"turquesa\") mais do que como valores exatos, então a memória tende à versão típica de cada cor. A pontuação usa o espaço de cor CIELAB, que mede a diferença como o olho a percebe, por isso errar o matiz custa mais do que um pequeno erro de luminosidade."
		}
	},
	moreTools: {
		heading: "Experimente mais ferramentas de cores grátis",
		body: "Conversor, gerador de degradê, verificador de contraste, gerador de paletas e mais: grátis, rápido e 100% privado.",
		cta: "Ver todas as ferramentas",
	},
	relatedTools: {
		heading: "Ferramentas relacionadas",
	},
	colorConverterTool: {
		title: "Conversor de Cores HEX para RGB, HSL e HSV | Your Color Picker",
		description: "Converta cores de HEX para RGB, HSL e HSV (e vice-versa) na hora. Edite qualquer campo e os outros formatos se atualizam ao vivo. Grátis.",
		eyebrow: "Ferramenta",
		heading: "Conversor de Cores",
		intro: "Digite uma cor em qualquer campo abaixo — HEX, RGB, HSL ou HSV — e os outros três se atualizam ao vivo. Clique em qualquer formato para copiá-lo.",
		explainerHeading: "Qual a diferença entre HSV e HSL?",
		explainerBody:
			"Ambos descrevem o mesmo espaço de cor com matiz, saturação e um terceiro canal — mas o terceiro valor do HSL é a luminosidade (o quão perto do preto ou do branco), enquanto o do HSV é o valor (o quão perto do preto, independentemente do branco). O HSV é comum nos seletores de cores de programas de design; o HSL é mais comum no CSS.",
		help: {
			title: "Como usar o Conversor de Cores",
			steps: [
				{ title: "1. Digite uma cor", body: "Insira um valor em qualquer campo — HEX, RGB, HSL ou HSV." },
				{
					title: "2. Veja os outros se atualizarem",
					body: "Os outros três formatos se atualizam ao vivo, então você lê a mesma cor em qualquer formato.",
				},
				{ title: "3. Copie o que precisar", body: "Clique em Copiar ao lado de qualquer formato para copiar o valor exato." },
			],
		},
	},
	gradientMakerTool: {
		title: "Gerador de Degradê CSS Online Grátis | Your Color Picker",
		description: "Crie um degradê (gradiente) CSS linear ou radial com duas ou mais cores, veja a prévia ao vivo e copie o código CSS pronto.",
		eyebrow: "Ferramenta",
		heading: "Gerador de Degradê",
		intro: "Adicione cores, escolha linear ou radial e copie o gradiente CSS pronto.",
		explainerHeading: "Por que usar um degradê CSS?",
		explainerBody:
			"Degradês dão profundidade a um fundo chapado sem precisar carregar uma imagem — muito usados em seções de destaque, botões e sobreposições. O gradiente linear mistura as cores em linha reta em qualquer ângulo; o radial se expande a partir de um ponto central. Ajuste suas cores aqui e copie o CSS exato, pronto para colar em qualquer folha de estilos.",
		addColor: "+ Adicionar cor",
		linear: "Linear",
		radial: "Radial",
		angle: "Ângulo",
		cssHeading: "CSS",
		copyCss: "Copiar CSS",
		remove: "Remover",
		help: {
			title: "Como usar o Gerador de Degradê",
			steps: [
				{ title: "1. Adicione suas cores", body: "Comece com duas cores ou clique em + Adicionar cor até cinco paradas." },
				{ title: "2. Escolha um estilo", body: "Escolha Linear (com ângulo ajustável) ou Radial." },
				{ title: "3. Copie o CSS", body: "O CSS exato se atualiza ao vivo abaixo — clique em Copiar CSS quando estiver pronto." },
			],
		},
	},
	colorBlindnessTool: {
		title: "Simulador de Daltonismo Online — Teste Imagens | Your Color Picker",
		description: "Envie uma imagem e veja como pessoas com daltonismo a enxergam: protanopia, deuteranopia e tritanopia lado a lado. Grátis e privado.",
		eyebrow: "Ferramenta",
		heading: "Simulador de Daltonismo",
		intro: "Envie uma imagem para vê-la simulada com os três tipos comuns de daltonismo, ao lado da original.",
		dropHint: "Arraste e solte uma imagem aqui ou use o botão abaixo",
		uploadNote: "Nada é enviado para lugar nenhum — tudo funciona no seu navegador.",
		original: "Original",
		protanopia: "Protanopia (cegueira para o vermelho)",
		deuteranopia: "Deuteranopia (cegueira para o verde)",
		tritanopia: "Tritanopia (cegueira para o azul)",
		whyHeading: "Por que isso importa",
		whyBody:
			"Cerca de 1 em cada 12 homens e 1 em cada 200 mulheres tem algum tipo de daltonismo. Simular protanopia, deuteranopia e tritanopia ajuda designers a garantir que gráficos, estados de interface e diagramas não dependam só da cor para transmitir significado.",
		help: {
			title: "Como usar o Simulador de Daltonismo",
			steps: [
				{ title: "1. Envie uma imagem", body: "Arraste uma foto para o painel ou use o botão de envio." },
				{
					title: "2. Compare as quatro visões",
					body: "Sua imagem original aparece ao lado das simulações de protanopia, deuteranopia e tritanopia.",
				},
				{
					title: "3. Revise seu design",
					body: "Procure informações transmitidas apenas pela cor — é isso que essas simulações revelam.",
				},
			],
		},
	},
	colorNamesTool: {
		title: "Nomes das Cores e Códigos HEX — Tabela CSS | Your Color Picker",
		description: "Tabela com todos os nomes de cores do CSS e seus códigos HEX. Pesquise por nome ou código e clique em qualquer amostra para copiar.",
		eyebrow: "Ferramenta",
		heading: "Nomes das Cores",
		introPrefix: "Todas as cores com nome padrão do CSS (",
		introSuffix: " no total), com seu código HEX. Clique em uma amostra para copiar.",
		searchPlaceholder: "Buscar por nome ou hex…",
		empty: "Nenhuma cor corresponde à sua busca.",
		help: {
			title: "Como usar Nomes das Cores",
			steps: [
				{ title: "1. Role ou pesquise", body: "Explore a grade inteira ou digite um nome ou código hex na busca para filtrar." },
				{ title: "2. Clique para copiar", body: "Clique em qualquer amostra para copiar o código HEX." },
			],
		},
	},
	contrastCheckerTool: {
		title: "Verificador de Contraste de Cores WCAG AA/AAA | Your Color Picker",
		description: "Verifique a taxa de contraste WCAG entre duas cores para um texto acessível, com resultados AA e AAA ao vivo. Grátis.",
		eyebrow: "Ferramenta",
		heading: "Verificador de Contraste",
		intro: "Informe uma cor de texto e uma cor de fundo para verificar a taxa de contraste WCAG.",
		explainerHeading: "Por que a taxa de contraste importa",
		explainerBody:
			"A WCAG define taxas mínimas de contraste para que o texto continue legível para pessoas com baixa visão ou daltonismo: 4.5:1 para texto normal e 3:1 para texto grande no nível AA, subindo para 7:1 e 4.5:1 no nível AAA, mais rigoroso. Conferir sua combinação de texto e fundo com esses limites é uma das formas mais simples de tornar um design mais acessível.",
		textLabel: "Texto",
		backgroundLabel: "Fundo",
		largeSample: "Amostra de texto grande (24px)",
		normalSample: "Amostra de texto normal (14px) — um pequeno jabuti xereta viu dez cegonhas felizes.",
		enterValid: "Insira duas cores hexadecimais válidas (ex.: #171717) para compará-las.",
		normalTextRow: "Texto normal —",
		largeTextRow: "Texto grande —",
		pass: "aprovado",
		fail: "reprovado",
		help: {
			title: "Como usar o Verificador de Contraste",
			steps: [
				{ title: "1. Defina duas cores", body: "Escolha uma cor de texto e uma de fundo com os seletores ou os campos hex." },
				{ title: "2. Leia a taxa", body: "A taxa de contraste e a prévia ao vivo se atualizam na hora." },
				{
					title: "3. Confira a aprovação WCAG",
					body: "Veja de relance se sua combinação passa no AA ou AAA para texto normal e grande.",
				},
			],
		},
	},
	randomColorTool: {
		title: "Gerador de Cores Aleatórias — HEX, RGB e HSL | Your Color Picker",
		description: "Gere uma cor aleatória em HEX, RGB e HSL com um clique, com sugestões de cores complementares e análogas que combinam.",
		eyebrow: "Ferramenta",
		heading: "Gerador de Cor Aleatória",
		intro: "Clique em Gerar para receber uma nova cor aleatória, com sugestões de paleta combinando.",
		explainerHeading: "Quando uma cor aleatória ajuda",
		explainerBody:
			"Às vezes, a parte mais difícil de escolher uma cor é achar um ponto de partida. Gerar um código HEX, RGB e HSL aleatório — junto com suas combinações complementares e análogas — dá algo concreto para reagir e ajustar, em vez de encarar um seletor de cores em branco.",
		generate: "Gerar cor aleatória",
		help: {
			title: "Como usar o Gerador de Cor Aleatória",
			steps: [
				{ title: "1. Clique em Gerar", body: "Receba na hora uma nova cor HEX, RGB e HSL aleatória." },
				{ title: "2. Copie qualquer formato", body: "Clique em Copiar ao lado do valor que precisar." },
				{
					title: "3. Explore as combinações",
					body: "As sugestões complementares, análogas e triádicas se atualizam conforme a nova cor.",
				},
			],
		},
	},
	colorMixerTool: {
		title: "Misturador de Cores Online — Misture Duas Cores | Your Color Picker",
		description: "Misture duas cores em qualquer proporção e descubra a cor resultante, com HEX, RGB e HSL ao vivo. Grátis e no navegador.",
		eyebrow: "Ferramenta",
		heading: "Misturador de Cores",
		intro: "Escolha duas cores e uma proporção de mistura para encontrar a cor entre elas.",
		explainerHeading: "Como funciona esta mistura de cores",
		explainerBody:
			"Este misturador combina duas cores no espaço RGB conforme a proporção escolhida, em vez de simular tinta ou pigmento — então 50/50 de vermelho e azul dá um roxo limpo, do jeito que as cores se combinam na tela. Útil para achar um tom intermediário entre as duas cores principais de uma marca ou para prever um estado hover.",
		colorA: "Cor A",
		colorB: "Cor B",
		blendRatio: "Proporção da mistura",
		help: {
			title: "Como usar o Misturador de Cores",
			steps: [
				{ title: "1. Escolha a Cor A e B", body: "Escolha duas cores com os seletores ou os campos hex." },
				{ title: "2. Ajuste a proporção", body: "Arraste o controle deslizante para misturar mais para uma cor ou outra." },
				{
					title: "3. Copie o resultado",
					body: "O HEX, RGB e HSL da cor misturada se atualizam ao vivo — copie o que precisar.",
				},
			],
		},
	},
	shadesTintsTool: {
		title: "Gerador de Tons de Cores — Claros e Escuros | Your Color Picker",
		description: "Gere uma escala completa de tons claros (rumo ao branco) e tons escuros (rumo ao preto) a partir de qualquer cor base, com códigos HEX.",
		eyebrow: "Ferramenta",
		heading: "Gerador de Tons de Cores",
		intro: "Escolha uma cor base para gerar uma escala completa de luminosidade — de tons quase brancos a tons quase pretos.",
		explainerHeading: "Tons claros vs. tons escuros",
		explainerBody:
			"Um tom claro (tint) é a cor base misturada com branco — mais leve e suave, útil para fundos e estados hover. Um tom escuro (shade) é a mesma cor misturada com preto — mais profunda e intensa, útil para textos ou bordas que precisam continuar ligados à cor base. Gerar uma escala completa dos dois dá um conjunto coerente para montar uma escala de cores.",
		tints: "Tons claros (rumo ao branco)",
		base: "Base",
		shades: "Tons escuros (rumo ao preto)",
		help: {
			title: "Como usar o Gerador de Tons de Cores",
			steps: [
				{ title: "1. Escolha uma cor base", body: "Escolha qualquer cor com o seletor ou o campo hex." },
				{
					title: "2. Leia a escala",
					body: "Os tons claros (rumo ao branco) e escuros (rumo ao preto) são gerados automaticamente em torno da base.",
				},
				{ title: "3. Copie qualquer amostra", body: "Clique em qualquer amostra da escala para copiar o código HEX." },
			],
		},
	},
	paletteGeneratorTool: {
		title: "Gerador de Paleta de Cores Online Grátis | Your Color Picker",
		description:
			"Gere uma paleta de cores completa a partir de qualquer cor — esquemas complementar, análogo, triádico e monocromático, prontos para exportar em CSS, Tailwind ou JSON.",
		eyebrow: "Ferramenta",
		heading: "Gerador de Paleta de Cores",
		explainerHeading: "Complementar, análoga e triádica, explicadas",
		explainerBody:
			"São relações clássicas do círculo cromático: as complementares ficam uma de frente para a outra para máximo contraste, as análogas ficam lado a lado para um visual calmo e coeso, e as triádicas distribuem três cores igualmente pelo círculo para uma variedade equilibrada. Partindo de uma cor base e gerando as três, você tem várias direções prontas para escolher.",
		intro:
			"Escolha uma cor base ou gere uma aleatória e explore paletas complementares, análogas, triádicas e monocromáticas criadas a partir dela — exporte qualquer uma quando estiver pronto.",
		baseColorLabel: "Cor base",
		randomize: "Aleatória",
		exportHeading: "Exportar",
		help: {
			title: "Como usar o Gerador de Paleta de Cores",
			steps: [
				{ title: "1. Escolha uma cor base", body: "Escolha qualquer cor com o seletor ou o campo hex, ou clique em Aleatória para um ponto de partida." },
				{
					title: "2. Explore os esquemas",
					body: "As paletas complementar, análoga, triádica e monocromática são geradas automaticamente a partir da cor base.",
				},
				{
					title: "3. Exporte ou copie",
					body: "Clique em qualquer amostra para copiar o código HEX ou exporte a paleta inteira como variáveis CSS, configuração do Tailwind ou JSON.",
				},
			],
		},
	},
	eyedropperGuide: {
		title: "Conta-Gotas Online — Pegue Qualquer Cor da Tela | Your Color Picker",
		description:
			"Conta-gotas online grátis: pegue qualquer cor da tela ou de uma imagem e receba na hora os códigos HEX, RGB e HSL. 100% privado, nada é enviado.",
		eyebrow: "Guia",
		heading: "Conta-Gotas Online",
		intro: "Pegue qualquer cor da sua tela, de um print ou de uma foto, direto no navegador — sem extensões e sem instalar nada.",
		explainerHeading: "Como funciona o conta-gotas",
		explainerBody:
			"Este conta-gotas usa as ferramentas de seleção de cor integradas ao seu navegador para capturar qualquer pixel da tela, ou permite enviar uma imagem e clicar direto em um pixel. Nos dois casos você recebe na hora o valor exato em HEX, RGB e HSL, pronto para copiar para sua ferramenta de design, CSS ou editor de código.",
		faqHeading: "Perguntas frequentes",
		faq: [
			{
				q: "Este conta-gotas funciona no celular?",
				a: "Pegar uma cor de uma imagem enviada funciona em qualquer dispositivo, incluindo celulares e tablets. Pegar direto da tela usa um recurso do navegador (a API EyeDropper), disponível hoje no Chrome, Edge e outros navegadores baseados em Chromium no computador.",
			},
			{
				q: "Algo é enviado para um servidor?",
				a: "Não. Cada pixel é lido localmente no navegador pela API Canvas — sua imagem e sua tela nunca saem do seu dispositivo.",
			},
			{
				q: "Quais formatos de cor eu recebo?",
				a: "HEX, RGB e HSL para cada cor escolhida, cada um com um botão de copiar em um clique.",
			},
		],
	},
	hexFromImageGuide: {
		title: "Descobrir o Código HEX de uma Imagem Online | Your Color Picker",
		description:
			"Envie qualquer foto e descubra na hora o código HEX exato de qualquer pixel, além de RGB, HSL e uma paleta completa. Grátis e 100% privado.",
		eyebrow: "Guia",
		heading: "Descubra o Código HEX de Qualquer Imagem",
		intro: "Envie uma foto, print ou logo e clique em qualquer pixel para ler o código HEX exato, junto com RGB, HSL e uma paleta de cores combinando.",
		explainerHeading: "Como descobrir o código HEX de uma foto",
		explainerBody:
			"Solte uma imagem na ferramenta abaixo e clique ou passe o cursor sobre qualquer pixel para ler a cor exata. HEX, RGB e HSL se atualizam na hora, e você pode extrair uma paleta completa da imagem com um clique. Tudo roda no navegador, então a imagem nunca é enviada a um servidor.",
		faqHeading: "Perguntas frequentes",
		faq: [
			{
				q: "Posso pegar o código HEX de um print?",
				a: "Sim — envie o print como enviaria qualquer foto e clique no pixel do qual você quer o código HEX.",
			},
			{
				q: "Funciona com logo ou PNG transparente?",
				a: "Sim, funciona com imagens PNG, JPG e WebP, incluindo PNGs transparentes — as áreas transparentes são lidas como a cor do pixel subjacente.",
			},
			{
				q: "Minha imagem é enviada para algum lugar?",
				a: "Não. A imagem é decodificada e lida inteiramente no navegador pela API Canvas — ela nunca sai do seu dispositivo.",
			},
		],
	},
	blog: {
		title: "Blog de Cores — Teoria das Cores e Design | Your Color Picker",
		description: "Guias sobre teoria das cores, HEX/RGB/HSL, acessibilidade e design, com ferramentas grátis para colocar tudo em prática.",
		eyebrow: "Blog",
		heading: "Cores, explicadas",
		intro: "Guias sobre teoria das cores, acessibilidade e design, com as ferramentas para colocar em prática.",
		postTitleSuffix: "Blog do Your Color Picker",
		readyToTry: "Pronto para testar você mesmo?",
		back: "← Voltar ao blog",
	},
	notFound: {
		title: "Página Não Encontrada — Your Color Picker",
		description: "A página que você procura não existe. Volte ao Your Color Picker para descobrir cores HEX, RGB e HSL em qualquer imagem.",
		eyebrow: "404",
		heading: "Página não encontrada",
		intro: "A página que você procura não existe, pode ter sido movida ou a URL tem um erro de digitação.",
		homeButton: "Ir para a página inicial",
		tryHeading: "Ou experimente uma destas",
		tryTool: "Usar o seletor de cores",
		tryFaq: "Ver as perguntas frequentes",
		tryAbout: "Sobre o Your Color Picker",
		tryContact: "Fale conosco",
	},
};
