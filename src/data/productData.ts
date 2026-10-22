export interface MoldeItem {
  id: string;
  title: string;
  category: 'cartoes' | 'enfeites' | 'tags' | 'estrelas';
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  timeMin: number;
  image: string;
  description: string;
  palette: string[];
  holesCount: number;
  stitchType: string;
}

export interface CollectionCategory {
  id: string;
  name: string;
  count: number;
  description: string;
  highlights: string[];
}

export interface BonusItem {
  id: string;
  title: string;
  tag: string;
  originalPrice: string;
  image: string;
  description: string;
  benefits: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  originalPrice: string;
  installments?: string;
  popularityNote?: string;
  description: string;
  features: string[];
  ctaText: string;
  checkoutUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COLLECTIONS: CollectionCategory[] = [
  {
    id: 'cartoes',
    name: 'Cartões Natalinos Dobráveis',
    count: 65,
    description: 'Modelos clássicos e contemporâneos dobráveis em formato A5 e 15x15cm, perfeitos para presentear familiares e clientes.',
    highlights: ['Pinheiros geométricos minimalistas', 'Estrelas de Belém em fios metalizados', 'Velas e arabescos natalinos', 'Poinsettias e ramos de azevinho'],
  },
  {
    id: 'enfeites',
    name: 'Enfeites Circulares para Árvore',
    count: 55,
    description: 'Pingentes de papel estruturado e papel kraft para pendurar na árvore de Natal com cordão de juta ou fita de cetim.',
    highlights: ['Bolas de Natal facetadas', 'Mandalas geométricas natalinas', 'Anjos estilizados e sinos vazados', 'Globo de neve com microfuração'],
  },
  {
    id: 'tags',
    name: 'Tags e Etiquetas de Presente',
    count: 45,
    description: 'Etiquetas delicadas de "De/Para" com furação exata para valorizar qualquer embalagem de presente artesanal.',
    highlights: ['Mini pinheiros bordados', 'Renas delicadas com nariz vermelho', 'Flocos de neve rápidos (10 min)', 'Formatos retangulares, ovais e festonados'],
  },
  {
    id: 'marcadores',
    name: 'Marcadores de Livro Festivos',
    count: 30,
    description: 'Lembrancinhas elegantes e práticas para presentear amigos, colegas de trabalho e professores no final de ano.',
    highlights: ['Padrões verticais lineares', 'Franjas de tassel na extremidade', 'Versículos e mensagens natalinas', 'Dimensão padrão 5x18cm'],
  },
  {
    id: 'presepio',
    name: 'Coleção Especial: Presépio Sagrado',
    count: 20,
    description: 'Silhuetas sagradas do Presépio desenhadas com linhas puras para quadros decorativos e cartões de luxo.',
    highlights: ['Sagrada Família minimalista', 'Três Reis Magos seguindo a estrela', 'Manjedoura e animais em traços finos', 'Ideal para molduras 15x21cm e 20x20cm'],
  },
  {
    id: 'alfabeto',
    name: 'Alfabeto Natalino Completo (A a Z)',
    count: 26,
    description: 'Letras maiúsculas decoradas com motivos natalinos para você personalizar nomes e iniciais de presentes.',
    highlights: ['26 letras com furação simétrica', 'Acentos e caracteres especiais', 'Excelente para monogramas personalizados', 'Guia de combinações de cores'],
  },
  {
    id: 'flocos',
    name: 'Flocos de Neve & Cristais de Gelo',
    count: 35,
    description: 'Padrões radiais com simetria hexagonal perfeita. Fáceis de bordar e com visual hipnotizante em papel escuro.',
    highlights: ['Variações de 6 e 8 pontas', 'Padrões para iniciantes e avançados', 'Lindos com fios brancos, prata e dourado', 'Efeito 3D com sobreposição de camadas'],
  },
];

export const CAROUSEL_PROJECTS: MoldeItem[] = [
  {
    id: 'p1',
    title: 'Bola Natalina Facetada Ouro & Esmeralda',
    category: 'cartoes',
    difficulty: 'Intermediário',
    timeMin: 25,
    image: '/src/assets/images/carrossel_cartao_detalhe_1792343773588.jpg',
    description: 'Geometria refinada com linhas que convergem criando relevo ótico sobre papel linho texturizado 240g.',
    palette: ['#047857', '#D97706', '#FAF5FF'],
    holesCount: 84,
    stitchType: 'Ponto String Art com fio metalizado 2 dobras',
  },
  {
    id: 'p2',
    title: 'Pingente Circular Estrela de Gelo',
    category: 'enfeites',
    difficulty: 'Iniciante',
    timeMin: 18,
    image: '/src/assets/images/carrossel_enfeite_ornamento_1792343774291.jpg',
    description: 'Ornamento de árvore com furos concêntricos e fio rubi com dourado, preso por fio rústico de juta natural.',
    palette: ['#991B1B', '#EAB308', '#F5F5F4'],
    holesCount: 62,
    stitchType: 'Ponto Radial cruzado',
  },
  {
    id: 'p3',
    title: 'Coleção Cartões de Boas Festas & Rena',
    category: 'cartoes',
    difficulty: 'Iniciante',
    timeMin: 20,
    image: '/src/assets/images/moldes_cards_collection_1792343772801.jpg',
    description: 'Composição de 4 moldes campeões: Árvore geométrica, Anjo da Paz, Rena dourada e Poinsettia festiva.',
    palette: ['#15803D', '#B45309', '#B91C1C'],
    holesCount: 96,
    stitchType: 'Linhas retas e preenchimento triangular',
  },
  {
    id: 'p4',
    title: 'Estrela Guia & Pinheiro em Algodão',
    category: 'estrelas',
    difficulty: 'Iniciante',
    timeMin: 15,
    image: '/src/assets/images/hero_paper_embroidery_1792343772445.jpg',
    description: 'Estrela de cinco pontas com preenchimento cruzado em papel algodão artesanal com bordas rústicas desfiadas.',
    palette: ['#D97706', '#1E3A8A', '#FEF3C7'],
    holesCount: 50,
    stitchType: 'Ponto teia e contorno',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'b1',
    title: 'Checklist de Materiais',
    tag: 'PDF Prático',
    originalPrice: 'R$ 27,00',
    image: '/assets/aistudio/Checklist_natal_com_bordado_artesanal_9478233d.png',
    description: 'Guia completo com os papéis, gramaturas, agulhas e linhas ideais para você começar sem gastar à toa.',
    benefits: ['Gramaturas recomendadas de papel', 'Agulhas e ferramentas caseiras', 'Como evitar desperdício de material'],
  },
  {
    id: 'b2',
    title: 'Guia de Pontos Para Iniciantes',
    tag: 'Passo a Passo',
    originalPrice: 'R$ 37,00',
    image: '/assets/aistudio/Guia_de_Bordado_em_Clima_Natalino_e408b816.png',
    description: 'Aprenda os pontos essenciais do bordado em papel com ilustrações detalhadas e sequências numeradas ponto a ponto.',
    benefits: ['Pontos lineares e geométricos', 'Segredo da tensão correta da linha', 'Como arrematar sem deixar marcas'],
  },
  {
    id: 'b3',
    title: 'Manual Criativo de Bordados Natalinos',
    tag: 'Guia Criativo',
    originalPrice: 'R$ 47,00',
    image: '/assets/aistudio/Cart_o_Natalino_Bordado___M_o_472dbf7d.png',
    description: 'Ideias e técnicas para combinar fios metalizados, nomes, datas especiais e acabamentos únicos em cada peça.',
    benefits: ['Monogramas e nomes bordados', 'Combinações de cores festivas', 'Detalhes com fios ouro e prata'],
  },
  {
    id: 'b4',
    title: 'Como Fazer Presente Feito a Mão',
    tag: 'E-book Especial',
    originalPrice: 'R$ 49,00',
    image: '/assets/aistudio/Ateli__Natalino_de_Artesanato_a382ffcc.png',
    description: 'Técnicas para transformar seus bordados em cartões de luxo, pequenos quadros e lembrancinhas de alto valor afetivo.',
    benefits: ['Montagem de cartões duplos', 'Ideias de molduras econômicas', 'Embalagens que valorizam o trabalho'],
  },
  {
    id: 'b5',
    title: '+80 Etiquetas Personalizavéis para Presentes',
    tag: 'Gabaritos Prontos',
    originalPrice: 'R$ 39,00',
    image: '/assets/aistudio/Etiquetas_Natalinas_Bordadas___M_o_780e906a.png',
    description: 'Tags e etiquetas natalinas exclusivas prontas para imprimir, bordar e amarrar nos seus presentes e encomendas.',
    benefits: ['Modelos variados de De/Para', 'Furação guia pré-marcada', 'Perfeitas para presentes e vendas'],
  },
];

export const CHECKOUT_URL = 'https://pay.wiapy.com/8mJj6lBTqYZo';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'premium',
    name: 'Pacote Premium + Videos',
    badge: 'OFERTA EXCLUSIVA',
    isPopular: true,
    price: 'R$ 10,00',
    originalPrice: 'R$ 197,00',
    popularityNote: 'COMPRADO POR +1276 PESSOAS',
    description: 'A coleção definitiva com todos os 250+ moldes, +30 videoaulas de ponto-guia e todos os 5 bônus inclusos.',
    features: [
      '+250 Moldes Natalinos Completos',
      '+30 Videoaulas de Ponto-Guia',
      'Arquivos em PDF Alta Definição',
      'Bônus 1: Checklist de Materiais (R$ 27)',
      'Bônus 2: Guia de Pontos Para Iniciantes (R$ 37)',
      'Bônus 3: Manual Criativo de Bordados Natalinos (R$ 47)',
      'Bônus 4: Como Fazer Presente Feito a Mão (R$ 49)',
      'Bônus 5: +80 Etiquetas Personalizavéis para Presentes (R$ 39)',
      'Acesso Vitalício + Atualizações Gratuitas de 2026',
      'Acesso Imediato no seu E-mail após o pagamento',
      'Suporte Prioritário',
      'Garantia de 7 dias',
    ],
    ctaText: 'QUERO MEU PACOTE PREMIUM',
    checkoutUrl: CHECKOUT_URL,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como eu recebo o acesso aos moldes após a compra?',
    answer: 'O envio é 100% digital e imediato! Assim que o seu pagamento for aprovado (no PIX ou Cartão é na hora), você receberá um e-mail com os dados de acesso para baixar todos os moldes em PDF organizados em pastas.',
  },
  {
    question: 'Nunca fiz bordado em papel, vou conseguir fazer?',
    answer: 'Com certeza! Essa técnica é incrivelmente simples e relaxante. Todos os nossos moldes contam com a furação marcada ponto a ponto. Além disso, nosso Guia do Furo Perfeito ensina cada detalhe, desde o primeiro furo até o nó final.',
  },
  {
    question: 'Qual papel e linha eu preciso para começar?',
    answer: 'Você pode começar com o que já tem em casa! Recomendamos folhas de papel com gramatura a partir de 180g (como papel Offset, Kraft, Canson ou Papel Linho). Para as linhas, serve qualquer meada comum de bordado (Mouliné), linha de crochê fina ou linhas metalizadas dourada e prateada.',
  },
  {
    question: 'Preciso de alguma impressora ou máquina especial?',
    answer: 'Não! Os moldes foram diagramados no tamanho de folha padrão A4. Você pode imprimir em qualquer impressora caseira ou levar em uma gráfica rápida/papelaria da sua rua por centavos. O recorte pode ser feito na tesoura comum ou estilete.',
  },
  {
    question: 'Posso vender os cartões e enfeites que eu fizer?',
    answer: 'Sim, com certeza! Você pode produzir e vender quantas peças físicas desejar — cartões, enfeites, tags e lembrancinhas — em feiras, bazares, encomendas personalizadas ou redes sociais, sem qualquer problema.',
  },
  {
    question: 'Por quanto tempo tenho acesso aos materiais?',
    answer: 'O seu acesso é vitalício! Você poderá baixar os arquivos para o seu computador, tablet ou celular e consultá-los para sempre, incluindo as novidades das próximas festas de fim de ano.',
  },
  {
    question: 'E se eu não gostar ou achar difícil?',
    answer: 'Você está 100% protegida pela nossa Garantia Incondicional de 7 dias. Se por qualquer motivo você abrir os arquivos e achar que não são para você, basta nos enviar um único e-mail e devolveremos todo o seu dinheiro na hora, sem perguntas.',
  },
  {
    question: 'Como funciona a garantia e o suporte?',
    answer: 'Nosso time de atendimento está pronto para tirar qualquer dúvida sobre download, impressão ou escolha de materiais. A segurança é intermediada por plataforma de pagamento criptografada e homologada.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Helena Vasconcelos',
    city: 'Curitiba, PR',
    text: 'Fiz 40 cartões para o bazar da escola dos meus filhos usando o molde do pinheiro geométrico e da bolinha facetada. Vendi todos a R$ 22 cada! Os moldes são perfeitos, os furos batem certinho.',
    rating: 5,
    highlight: 'R$ 880 em vendas no primeiro fim de semana',
  },
  {
    name: 'Mariana Duarte',
    city: 'Belo Horizonte, MG',
    text: 'Eu nunca tinha pegado numa agulha para bordar papel. O guia do furo perfeito me salvou, porque eu tinha medo de rasgar. Ficou parecendo papelaria fina importada, a família inteira elogiou na ceia!',
    rating: 5,
    highlight: 'Fácil até para quem é iniciante do zero',
  },
  {
    name: 'Claudia Silveira',
    city: 'São Paulo, SP',
    text: 'A variedade de +250 moldes é surreal. Tem desde modelos rápidos de 15 minutos até presépios cheios de detalhes para emoldurar. O melhor investimento de artesanato que fiz esse ano.',
    rating: 5,
    highlight: 'Material riquíssimo e de bom gosto',
  },
];
