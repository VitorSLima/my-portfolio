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
        title: "lorem ipsum",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
        title: "lorem ipsum",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  },
};

export type Translations = {
  nav: {
    home: string;
    work: string;
    services: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    title: string;
    description: string;
  };
  work: {
    label: string;
    title: string;
  };
  services: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
  };
  projects: Array<{
    title: string;
    description: string;
  }>;
};
