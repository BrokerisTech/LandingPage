import {
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Mouse as MouseIcon,
  Speed as SpeedIcon,
  AutoAwesome as AutoAwesomeIcon,
  Analytics as AnalyticsIcon,
  Group as GroupIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Article as ArticleIcon,
  WhatsApp as WhatsAppIcon,
  Search as SearchIcon,
  AutoFixHigh as AutoFixHighIcon,
  Share as ShareIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';

export const stats = [
  {
    number: '3.5k',
    label: 'Empresas impactadas',
  },
  {
    number: 'R$1.5M',
    label: 'custo reduzido',
  },
  {
    number: '20k',
    label: 'artigos gerados',
  },
  {
    number: '2A',
    label: 'anos de mercado',
  },
];

export const benefits = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
title: '100% Automático',
  description: 'Tudo acontece automaticamente, sem necessidade de intervenção manual. Configure uma vez e deixe nossa IA trabalhar.',
  },
{
  icon: <AutoAwesomeIcon sx={ { fontSize: 40 } } />,
  title: 'IA Especializada',
    description: 'Nossa IA é especializada em SEO e criação de conteúdo, muito mais poderosa que ferramentas genéricas.',
  },
{
  icon: <AnalyticsIcon sx={ { fontSize: 40 } } />,
  title: 'Relatórios Detalhados',
    description: 'Receba relatórios semanais completos via WhatsApp com todas as métricas importantes do seu blog.',
  },
{
  icon: <GroupIcon sx={ { fontSize: 40 } } />,
  title: 'Análise de Concorrentes',
    description: 'Descubra as melhores estratégias dos seus concorrentes e use isso a seu favor automaticamente.',
  },
{
  icon: <SecurityIcon sx={ { fontSize: 40 } } />,
  title: 'Conteúdo Humanizado',
    description: 'Nossa IA cria conteúdo que parece ter sido escrito por humanos, evitando penalizações do Google.',
  },
{
  icon: <SupportIcon sx={ { fontSize: 40 } } />,
  title: 'Suporte Especializado',
    description: 'Nossa equipe está sempre disponível para ajudar você a maximizar os resultados do seu blog.',
  },
];

export const services = [
  {
    icon: <ArticleIcon sx={{ fontSize: 48 }} />,
title: 'Blog Profissional',
  description: 'Baixíssimo tempo de carregamento, design moderno, domínio customizável e otimizado para SEO... sem esforço!',
    image: '/api/placeholder/300/200',
  },
{
  icon: <WhatsAppIcon sx={ { fontSize: 48 } } />,
  title: 'Relatórios no WhatsApp',
    description: 'Receba relatórios semanais e nunca mais nem entre na ferramenta acompanhe tudo por lá!',
      image: '/api/placeholder/300/200',
  },
{
  icon: <SearchIcon sx={ { fontSize: 48 } } />,
  title: 'Análise de Concorrentes',
    description: 'Descubra os melhores artigos e palavras-chaves dos seus concorrentes - e use isso na sua estratégia!',
      image: '/api/placeholder/300/200',
  },
{
  icon: <AutoFixHighIcon sx={ { fontSize: 48 } } />,
  title: 'Conteúdo Humanizado',
    description: 'Nossa IA cria conteúdo que parece ter sido escrito por humanos, evitando penalizações do Google.',
      image: '/api/placeholder/300/200',
  },
{
  icon: <AnalyticsIcon sx={ { fontSize: 48 } } />,
  title: 'Análise de Palavra-Chave',
    description: 'Descubra as melhores palavras-chave para o seu nicho e otimize seu conteúdo automaticamente.',
      image: '/api/placeholder/300/200',
  },
{
  icon: <ShareIcon sx={ { fontSize: 48 } } />,
  title: 'Várias Formas de Criar',
    description: 'Crie conteúdo para diferentes plataformas: blog, redes sociais, e-mail marketing e muito mais.',
      image: '/api/placeholder/300/200',
  },
];

export const testimonials = [
  {
    name: 'Daniel',
    role: 'Corretor de imóveis',
    company: 'DDourado',
    avatar: '/api/placeholder/60/60',
    title: 'Daniel, Corretor de imóveis, alcançou a primeira página em 20 dias',
    description: 'Apenas 3 semanas após começar a usar a Brokeris, o site do Daniel passou a aparecer na primeira página do Google para o termo mais importante do seu negócio: "corretor de imóveis em orlando"',
    metrics: {
      type: 'chat' as const,
      content: 'Falaa Tiago, bem demais? Passando aqui pra deixar um depoimento sobre a Brokeris... Nem fechou o primeiro mês testando a plataforma com um cliente aqui da agência e já conseguimos subir A HOMEPAGE para 1a posição na principal palavra-chave dele. +425 impressões em relação ao mês passado. O que mais me deixou feliz, foi que os posts ajudaram indiretamente a subir a home do site nas pesquisas (que era nosso objetivo desde o início). Agora trabalhar para pegar o top !!',
    },
  },
  {
    name: 'Leonardo',
    role: 'Dono de software',
    company: 'Conecta Gabinete',
    avatar: '/api/placeholder/60/60',
    title: 'Leonardo, Dono de software, cresceu o seu blog sozinho, sem experiência',
    description: 'O dono do Conecta Gabinete, mesmo sem ser especialista na área, aumentou em 100x a quantidade de palavras-chave, e hoje recebe mais de 5.000 cliques por mês, aparecendo na primeira página para termos como "crm político", "gestão de gabinete", "ferramenta para político"',
    metrics: {
      type: 'chart' as const,
      title: 'Métricas de Palavras-Chave',
      data: {
        keywords: '1.667',
        growth: '+140%',
        chartData: [
          { month: 'Abr 2024', value: 200 },
          { month: 'Mai 2024', value: 400 },
          { month: 'Jun 2024', value: 600 },
          { month: 'Jul 2024', value: 800 },
          { month: 'Ago 2024', value: 1000 },
          { month: 'Set 2024', value: 1200 },
          { month: 'Out 2024', value: 1400 },
          { month: 'Nov 2024', value: 1600 },
          { month: 'Dez 2024', value: 1500 },
          { month: 'Jan 2025', value: 1700 },
          { month: 'Fev 2025', value: 1800 },
          { month: 'Mar 2025', value: 1900 },
          { month: 'Abr 2025', value: 2000 },
          { month: 'Mai 2025', value: 2100 },
          { month: 'Jun 2025', value: 2200 },
        ],
      },
    },
  },
  {
    name: 'Dr. Guilherme',
    role: 'Urologista',
    company: 'DR. GUILHERME BRAGA UROLOGISTA & ANDROLOGISTA',
    avatar: '/api/placeholder/60/60',
    title: 'Dr Guilherme, Urologista, recebe mais de 9.000 cliques/mês',
    description: 'Mesmo tendo contratado redatores profissionais, hoje 9 dos 10 melhores artigos do blog dele no Google foram escritos pela Brokeris. Se o Dr...',
    metrics: {
      type: 'stats' as const,
      data: {
        clicks: '39.845',
        clicksGrowth: '+167%',
        impressions: '2.518.335',
        ctr: '1,58%',
      },
    },
  },
];

export const plans = [
  {
    name: 'ESSENTIAL',
    description: 'Ideal para quem está começando a construir sua presença digital',
    monthlyPrice: 99,
    annualPrice: 99,
    discount: 25,
    features: [
      '1 blog automatizado',
      '5 artigos por mês',
      '50 palavras-chave',
      '1 pessoa no time',
    ],
    detailedFeatures: [
      'Blog automático com sua marca',
      'Sugestões inteligentes de conteúdo',
      'Linking interno e externo',
      'Cursos completos de SEO',
      'Análise de palavras-chave',
      'Relatórios semanais no WhatsApp',
      'Dashboard com dados do Google',
    ],
    isPopular: false,
  },
  {
    name: 'PLUS',
    description: 'Ideal para empresas que querem escalar o seu tráfego com um blog estratégico',
    monthlyPrice: 199,
    annualPrice: 149,
    discount: 25,
    features: [
      '1 blog automatizado',
      '15 artigos por mês',
      '150 palavras-chave',
      '3 pessoas no time',
    ],
    detailedFeatures: [
      'Tudo no plano Essential e mais',
      'Blog com seu próprio domínio',
      'Conexão com ferramentas de blog',
      'Sugestões avançadas de conteúdo',
      'Integração com redes sociais',
      'Clusters de Conteúdo (EM BREVE)',
      'Buscador de tendências (EM BREVE)',
    ],
    isPopular: true,
  },
  {
    name: 'SCALE',
    description: 'Ideal para agências e redes de blogs que querem aumentar seu lucro',
    monthlyPrice: 399,
    annualPrice: 299,
    discount: 25,
    features: [
      '4 blogs automatizados',
      '40 artigos por mês',
      '500 palavras-chave',
      '10 pessoas no time',
    ],
    detailedFeatures: [
      'Tudo no plano Plus e mais',
      'Programa de agência parceira',
      'Desconto em blogs e artigos',
      'Plugin WordPress white-label',
      'Gerente de conta',
      'Suporte prioritário no WhatsApp',
      'Área do cliente',
      'Relatórios com sua marca (EM BREVE)',
    ],
    isPopular: false,
  },
];

export const faqs = [
  {
    question: 'Preciso ter um blog para usar a Brokeris?',
    answer: 'Não! A Brokeris pode criar um blog completo para você do zero, ou se conectar com seu blog existente. Você escolhe a opção que melhor se adapta ao seu negócio.',
  },
  {
    question: 'A Brokeris é um plugin de WordPress?',
    answer: 'A Brokeris é uma plataforma completa de automação de conteúdo. Ela pode se conectar com WordPress e outras plataformas, mas não é apenas um plugin - é uma solução completa de marketing de conteúdo.',
  },
  {
    question: 'Quanto tempo vou precisar gastar por mês?',
    answer: 'Praticamente zero! A Brokeris foi desenvolvida para ser 100% automática. Você só precisa configurar uma vez e nossa IA cuida de tudo: criação de conteúdo, publicação, análise de concorrentes e relatórios.',
  },
  {
    question: 'O blog que vou receber é no WordPress?',
    answer: 'Sim! Nossos blogs são construídos em WordPress, a plataforma mais confiável e flexível do mercado. Isso garante máxima compatibilidade e facilidade de uso.',
  },
  {
    question: 'Consigo conectar o meu domínio?',
    answer: 'Sim! Você pode conectar seu próprio domínio personalizado ao blog criado pela Brokeris, mantendo a identidade da sua marca.',
  },
  {
    question: 'Consigo personalizar o meu blog?',
    answer: 'Sim! Nossos blogs vêm com design moderno e responsivo, mas você pode personalizar cores, fontes, layout e muito mais para combinar com a identidade da sua marca.',
  },
  {
    question: 'O Google pode me punir por usar conteúdo de IA?',
    answer: 'Não! Nossa IA cria conteúdo humanizado e otimizado para SEO. O Google valoriza conteúdo de qualidade, independente de como foi criado. Nossos clientes têm resultados excelentes sem penalizações.',
  },
  {
    question: 'SEO ainda funciona?',
    answer: 'Sim! SEO continua sendo uma das melhores estratégias de marketing digital. A Brokeris usa as técnicas mais avançadas de SEO para garantir que seu conteúdo apareça no topo do Google.',
  },
  {
    question: 'A IA vai substituir o Google? O SEO vai deixar de funcionar?',
    answer: 'Não! A IA e o Google trabalham juntos. Na verdade, o Google está investindo pesado em IA. Nossa plataforma se adapta às mudanças e sempre usa as melhores práticas de SEO.',
  },
  {
    question: 'Posso gerar artigos em vários idiomas? Ou apenas em português?',
    answer: 'Atualmente focamos no mercado brasileiro com conteúdo em português, mas estamos trabalhando para expandir para outros idiomas em breve.',
  },
  {
    question: 'Vou demorar para ter resultado?',
    answer: 'Nossos clientes começam a ver resultados em 2-4 semanas. Alguns casos mostram melhorias significativas em apenas 20 dias. O tempo varia conforme a competitividade do seu nicho.',
  },
  {
    question: 'Vocês garantem o meu resultado?',
    answer: 'Garantimos que nossa IA fará tudo que prometemos: criar conteúdo, analisar concorrentes, otimizar SEO, etc. Os resultados de tráfego dependem de vários fatores externos, mas nossos clientes têm excelentes resultados.',
  },
];

export const team = [
  {
    name: 'Ge Coelho',
    role: 'Desenvolvedor',
    avatar: '/api/placeholder/80/80',
    description: 'Especialista em desenvolvimento de soluções de automação e IA.',
  },
  {
    name: 'Equipe Brokeris',
    role: 'Especialistas em SEO',
    avatar: '/api/placeholder/80/80',
    description: 'Profissionais especializados em estratégias de conteúdo e SEO.',
  },
];

export const values = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
title: 'Inovação',
  description: 'Utilizamos as mais avançadas tecnologias de IA para criar soluções únicas no mercado.',
  },
{
  icon: <TrendingUpIcon sx={ { fontSize: 40 } } />,
  title: 'Resultados',
    description: 'Focamos em entregar resultados reais e mensuráveis para nossos clientes.',
  },
{
  icon: <GroupIcon sx={ { fontSize: 40 } } />,
  title: 'Suporte',
    description: 'Nossa equipe está sempre disponível para ajudar você a alcançar seus objetivos.',
  },
];
