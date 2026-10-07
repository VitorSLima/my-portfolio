export type Locale = "pt" | "en";

export type ProjectSlug = "beautydesk" | "comandei";

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
    // Rótulos da página e do card de projeto
    project: {
      viewSite: "Ver site",
      back: "Voltar aos projetos",
      features: "Funcionalidades",
      stack: "Tecnologias",
      previous: "Imagem anterior",
      next: "Próxima imagem",
    },
    // Projects
    projects: {
      beautydesk: {
        title: "BeautyDesk",
        tagline: "Agendamento online para negócios de beleza",
        description:
          "Plataforma de agendamento para barbearias, salões e outros negócios de beleza. O cliente encontra o estabelecimento e reserva um horário; o profissional gerencia agenda, serviços, equipe e financeiro em um painel próprio, com notificações e assinatura do plano.",
        features: [
          "Busca de estabelecimentos e reserva de horário online",
          "Painel do profissional com agenda, clientes e financeiro",
          "Cadastro de serviços e equipe",
          "Notificações de agendamento",
          "Assinatura de plano com Stripe",
          "Painel administrativo da plataforma",
        ],
        screenshots: {
          estabelecimento: "Página do estabelecimento com serviços e reserva",
          servicos: "Gestão de serviços no painel do profissional",
          financeiro: "Financeiro do profissional",
        },
      },
      comandei: {
        title: "Comandei",
        tagline: "Comandas para bares e restaurantes",
        description:
          "Sistema de atendimento por mesa para bares e restaurantes. O atendente escolhe a mesa e lança os itens do cardápio; o dono acompanha as contas abertas, fecha cada conta com desconto, taxa de serviço e divisão por pessoas, e consulta histórico e financeiro. Cada estabelecimento vê só os próprios dados.",
        features: [
          "Mapa de mesas com contas abertas",
          "Lançamento de pedidos pelo atendente",
          "Fechamento com desconto, taxa de serviço e divisão por pessoas",
          "Cardápio e equipe gerenciados pelo dono",
          "Histórico e financeiro",
          "Vários estabelecimentos com dados isolados",
          "Assinatura com 7 dias grátis via Stripe",
        ],
        screenshots: {
          mesas: "Mapa de mesas com contas abertas",
          pedido: "Lançamento de pedidos da mesa",
          fechamento: "Fechamento de conta",
          cardapio: "Gestão do cardápio",
          financeiro: "Resumo financeiro",
        },
      },
    },
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
    // Project page and card labels
    project: {
      viewSite: "View site",
      back: "Back to projects",
      features: "Features",
      stack: "Tech stack",
      previous: "Previous image",
      next: "Next image",
    },
    // Projects
    projects: {
      beautydesk: {
        title: "BeautyDesk",
        tagline: "Online booking for beauty businesses",
        description:
          "A booking platform for barbershops, salons and other beauty businesses. Customers find a place and book a time slot; professionals manage their schedule, services, team and revenue from their own dashboard, with notifications and plan subscriptions.",
        features: [
          "Business search and online booking",
          "Professional dashboard with schedule, clients and revenue",
          "Service and team management",
          "Booking notifications",
          "Plan subscriptions with Stripe",
          "Platform admin panel",
        ],
        screenshots: {
          estabelecimento: "Business page with services and booking",
          servicos: "Service management in the professional dashboard",
          financeiro: "Professional revenue overview",
        },
      },
      comandei: {
        title: "Comandei",
        tagline: "Tab management for bars and restaurants",
        description:
          "A table service system for bars and restaurants. Staff pick a table and add items from the menu; the owner tracks open tabs, closes each one with discounts, service charge and bill splitting, and reviews history and revenue. Each business only sees its own data.",
        features: [
          "Table map with open tabs",
          "Order entry by staff",
          "Checkout with discounts, service charge and bill splitting",
          "Menu and team managed by the owner",
          "History and revenue",
          "Multiple businesses with isolated data",
          "Subscription with a 7-day free trial via Stripe",
        ],
        screenshots: {
          mesas: "Table map with open tabs",
          pedido: "Order entry for a table",
          fechamento: "Closing a tab",
          cardapio: "Menu management",
          financeiro: "Revenue summary",
        },
      },
    },
  },
};

export type ProjectText = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  screenshots: Record<string, string>;
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
  project: {
    viewSite: string;
    back: string;
    features: string;
    stack: string;
    previous: string;
    next: string;
  };
  projects: Record<ProjectSlug, ProjectText>;
};
