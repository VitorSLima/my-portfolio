export type Locale = "pt" | "en";

export type ProjectSlug = "beautydesk" | "comandei";

export const translations = {
  pt: {
    // Header
    nav: {
      home: "Home",
      work: "Trabalho",
      experience: "Experiência",
      services: "Serviços",
      contact: "Contato",
    },
    // Metadados da página (título e descrição da aba)
    meta: {
      title: "Vitor Lima | Engenheiro de Software",
      description:
        "Engenheiro de Software com experiência em back-end e front-end e especialização em APIs RESTful.",
    },
    // Hero
    hero: {
      greeting: "Hello World! Meu nome é",
      role: "e sou",
      title: "Engenheiro de Software",
      scrollLabel: "Rolar para os projetos",
      available: "Disponível para novos projetos",
      description:
        "Sou de Três Lagoas, MS, com experiência em back-end e front-end e especialização em APIs RESTful. Já atuei com otimização de sistemas, integração de serviços e melhoria contínua, sempre focado em entregar soluções de qualidade que gerem resultados. Também fui professor de desenvolvimento web e hoje oriento agentes de IA no meu fluxo de trabalho.",
    },
    // Work
    work: {
      label: "Meu trabalho",
      title: "Veja os projetos em destaque",
    },
    // Experience
    experience: {
      label: "Experiência",
      title: "Experiência em números",
      stats: [
        { value: "3+", title: "anos de experiência", label: "Trabalhando com desenvolvimento web profissionalmente desde 05/2023." },
        { value: "−70%", title: "menos custo de infraestrutura", label: "Reduzi o gasto mensal do ambiente de testes de US$ 66 para US$ 19 ao achar a causa: logs acumulados sem limpeza." },
        { value: "IA", title: "orquestração de agentes no desenvolvimento", label: "Oriento agentes de IA (Claude Code) a implementar funcionalidades a partir de planos técnicos que eu especifico, com revisão de código e TDD." },
      ],
    },
    // Services
    services: {
      label: "Meus serviços",
      title: "Como posso ajudar o seu negócio",
      items: [
        {
          title: "Websites e Aplicativos",
          description:
            "Interfaces web com React e Next.js, como as do BeautyDesk e do Comandei.",
        },
        {
          title: "API e banco de dados",
          description:
            "APIs com Node.js, Express, Fastify, NestJS e AdonisJS, bancos PostgreSQL, MySQL e MongoDB, cache com Redis e pagamentos com Stripe.",
        },
        {
          title: "DevOps",
          description:
            "Pipelines de CI/CD, containers com Docker e armazenamento de arquivos no Amazon S3 e no Cloudflare R2.",
        },
      ],
    },
    // Contact
    contact: {
      label: "Contato",
      title: "Gostou do meu trabalho?",
      description: "Entre em contato ou acompanhe as minhas redes sociais!",
    },
    // Currículo
    cv: {
      download: "Baixar CV",
    },
    // Rótulos da página e do card de projeto
    project: {
      viewSite: "Ver site",
      back: "Voltar aos projetos",
      features: "Funcionalidades",
      decisions: "Decisões técnicas",
      nextProject: "Próximo projeto",
      stack: "Tecnologias",
      previous: "Imagem anterior",
      next: "Próxima imagem",
      zoom: "Ampliar imagem",
      close: "Fechar",
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
        decisions: [
          "Deixou de ser exclusivo para barbearias e passou a atender qualquer negócio de beleza.",
          "Notificações de agendamento.",
          "Assinatura de plano integrada ao Stripe.",
          "Painel administrativo da plataforma, com triagem do log de erros.",
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
        decisions: [
          "Cada estabelecimento tem dados isolados; o login usa o formato usuario@identificador.",
          "As regras de fechamento de conta (desconto, taxa de serviço, divisão por pessoas) ficam em um módulo próprio, coberto por testes.",
          "Toda escrita passa por Server Actions, e a permissão de cada papel (atendente ou dono) é checada no servidor, não só escondida na interface.",
          "Assinatura no Stripe com 7 dias grátis; uma disputa de pagamento suspende o estabelecimento.",
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
      experience: "Experience",
      services: "Services",
      contact: "Contact",
    },
    // Page metadata (tab title and description)
    meta: {
      title: "Vitor Lima | Software Engineer",
      description:
        "Software Engineer with experience in back-end and front-end development and a specialty in RESTful APIs.",
    },
    // Hero
    hero: {
      greeting: "Hello World! My name is",
      role: "and I'm a",
      title: "Software Engineer",
      scrollLabel: "Scroll to projects",
      available: "Available for new projects",
      description:
        "I'm from Três Lagoas, Brazil, with experience in back-end and front-end development and a specialty in RESTful APIs. I have worked on system optimization, service integration and continuous improvement, always focused on delivering quality solutions that produce results. I was also a web development teacher, and today I direct AI agents in my workflow.",
    },
    // Work
    work: {
      label: "My work",
      title: "See featured projects",
    },
    // Experience
    experience: {
      label: "Experience",
      title: "Experience in numbers",
      stats: [
        { value: "3+", title: "years of experience", label: "Working with web development professionally since 05/2023." },
        { value: "−70%", title: "lower infrastructure cost", label: "Cut the monthly cost of the testing environment from US$ 66 to US$ 19 by finding the cause: logs piling up with no cleanup." },
        { value: "AI", title: "AI agent orchestration in development", label: "I direct AI agents (Claude Code) to implement features from technical plans that I specify, with code review and TDD." },
      ],
    },
    // Services
    services: {
      label: "My services",
      title: "How I can help your business",
      items: [
        {
          title: "Websites & Apps",
          description:
            "Web interfaces with React and Next.js, like those of BeautyDesk and Comandei.",
        },
        {
          title: "API & Database",
          description:
            "APIs with Node.js, Express, Fastify, NestJS and AdonisJS, PostgreSQL, MySQL and MongoDB databases, Redis caching and Stripe payments.",
        },
        {
          title: "DevOps",
          description:
            "CI/CD pipelines, Docker containers and file storage on Amazon S3 and Cloudflare R2.",
        },
      ],
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Liked my work?",
      description: "Get in touch or follow my social media!",
    },
    // Resume
    cv: {
      download: "Download CV",
    },
    // Project page and card labels
    project: {
      viewSite: "View site",
      back: "Back to projects",
      features: "Features",
      decisions: "Technical decisions",
      nextProject: "Next project",
      stack: "Tech stack",
      previous: "Previous image",
      next: "Next image",
      zoom: "Enlarge image",
      close: "Close",
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
        decisions: [
          "It stopped being barbershop-only and now serves any beauty business.",
          "Booking notifications.",
          "Plan subscription integrated with Stripe.",
          "Platform admin panel, with triage of the error log.",
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
        decisions: [
          "Each business has isolated data; login uses a username@identifier format.",
          "Tab closing rules (discount, service charge, bill splitting) live in their own module, covered by tests.",
          "Every write goes through Server Actions, and each role (staff or owner) is checked on the server, not just hidden in the UI.",
          "Stripe subscription with a 7-day trial; a payment dispute suspends the business.",
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
  decisions: string[];
  screenshots: Record<string, string>;
};

export type Translations = {
  nav: {
    home: string;
    work: string;
    experience: string;
    services: string;
    contact: string;
  };
  meta: {
    title: string;
    description: string;
  };
  hero: {
    greeting: string;
    role: string;
    title: string;
    scrollLabel: string;
    available: string;
    description: string;
  };
  work: {
    label: string;
    title: string;
  };
  experience: {
    label: string;
    title: string;
    stats: Array<{ value: string; title: string; label: string }>;
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
  cv: {
    download: string;
  };
  project: {
    viewSite: string;
    back: string;
    features: string;
    decisions: string;
    nextProject: string;
    stack: string;
    previous: string;
    next: string;
    zoom: string;
    close: string;
  };
  projects: Record<ProjectSlug, ProjectText>;
};
