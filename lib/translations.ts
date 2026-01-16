export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Header
    nav: {
      home: "Home",
      work: "Trabalho",
      services: "Serviços",
      contact: "Contato",
    },
    // Hero
    hero: {
      greeting: "Hello World! Meu nome é",
      role: "e sou",
      title: "Desenvolvedor Fullstack",
      description:
        "Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.",
    },
    // Work
    work: {
      label: "Meu trabalho",
      title: "Veja os projetos em destaque",
    },
    // Services
    services: {
      label: "Meus serviços",
      title: "Como posso ajudar o seu negócio",
      items: [
        {
          title: "Websites e Aplicativos",
          description: "Desenvolvimento de interfaces",
        },
        {
          title: "API e banco de dados",
          description: "Criação de serviços do sistema",
        },
        {
          title: "DevOps",
          description: "Gestão e infraestrutura da aplicação",
        },
      ],
    },
    // Contact
    contact: {
      label: "Contato",
      title: "Gostou do meu trabalho?",
      description: "Entre em contato ou acompanhe as minhas redes sociais!",
    },
    // Projects
    projects: [
      {
        title: "Travelgram",
        description:
          "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo",
      },
      {
        title: "Tech News",
        description:
          "Homepage de um portal de notícias sobre a área de tecnologia",
      },
      {
        title: "Página de receita",
        description: "Página com o passo a passo de uma receita para cupcakes",
      },
      {
        title: "Zingen",
        description:
          "Landing Page completa e responsiva de um aplicativo de Karaokê",
      },
      {
        title: "Refund",
        description: "Um sistema para pedido e acompanhamento de reembolso",
      },
      {
        title: "Página de turismo",
        description:
          "Página com as principais informações para quem quer viajar para Busan",
      },
    ],
  },
  en: {
    // Header
    nav: {
      home: "Home",
      work: "Work",
      services: "Services",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello World! My name is",
      role: "and I'm a",
      title: "Fullstack Developer",
      description:
        "I transform needs into real, engaging and functional applications. I develop systems through my passion for technology, contributing with innovative and effective solutions for complex challenges.",
    },
    // Work
    work: {
      label: "My work",
      title: "See featured projects",
    },
    // Services
    services: {
      label: "My services",
      title: "How I can help your business",
      items: [
        {
          title: "Websites & Apps",
          description: "Interface development",
        },
        {
          title: "API & Database",
          description: "System services creation",
        },
        {
          title: "DevOps",
          description: "Application management and infrastructure",
        },
      ],
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Liked my work?",
      description: "Get in touch or follow my social media!",
    },
    // Projects
    projects: [
      {
        title: "Travelgram",
        description:
          "Social network where people share their travel experiences around the world",
      },
      {
        title: "Tech News",
        description: "Homepage of a tech news portal",
      },
      {
        title: "Recipe Page",
        description: "Step-by-step page for a cupcake recipe",
      },
      {
        title: "Zingen",
        description: "Complete and responsive Landing Page for a Karaoke app",
      },
      {
        title: "Refund",
        description: "A system for refund requests and tracking",
      },
      {
        title: "Tourism Page",
        description: "Page with key information for traveling to Busan",
      },
    ],
  },
} as const;

export type Translations = typeof translations.pt;
