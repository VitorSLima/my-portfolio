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
    // Hero
    hero: {
      greeting: "Hello World! Meu nome é",
      role: "e sou",
      title: "Desenvolvedor Fullstack",
      available: "Disponível para novos projetos",
      description:
        "Construo produtos web completos, do front-end em React e Next.js à API, ao banco de dados e ao deploy. Transformo uma necessidade de negócio em um sistema no ar, como o BeautyDesk e o Comandei, que estão em produção.",
    },
    // Work
    work: {
      label: "Meu trabalho",
      title: "Veja os projetos em destaque",
    },
    // Experience
    experience: {
      label: "Experiência",
      title: "Por onde já passei",
      present: "atual",
      stats: [
        { value: "3+", label: "anos de experiência profissional" },
        { value: "−70%", label: "no custo da infraestrutura de homologação" },
        { value: "~400", label: "usuários ativos em um sistema que mantive" },
      ],
      items: [
        {
          company: "HeadTech Sistemas",
          role: "Engenheiro de Software",
          period: "06/2026",
          current: true,
          bullets: [
            "Oriento agentes de IA (Claude Code) na implementação de funcionalidades a partir de planos técnicos que eu mesmo especifico, com revisão de código e Test-Driven Development.",
            "Reduzi cerca de 70% do custo da infraestrutura de homologação (de US$ 66 para US$ 19 por mês) ao investigar a causa raiz: 98% do banco eram logs sem política de retenção. Automatizei a retenção em Python, dentro do pipeline de CI/CD.",
          ],
        },
        {
          company: "Instituto Federal do Mato Grosso do Sul",
          role: "Professor Substituto de Desenvolvimento Web",
          period: "07/2025 – 06/2026",
          current: false,
          bullets: [
            "Aulas de HTML, CSS, JavaScript, TypeScript, React, PostgreSQL e NestJS para turmas do 1º ao 3º ano do ensino médio, até o desenvolvimento de aplicações full stack.",
          ],
        },
        {
          company: "4C Foresee",
          role: "Desenvolvedor Full Stack (contrato)",
          period: "08/2025 – 12/2025",
          current: false,
          bullets: [
            "Plataforma SaaS de multiatendimento para WhatsApp: migrei o armazenamento de arquivos para o Amazon S3 e implementei cache com Redis antes do lançamento.",
            "Referência técnica da equipe em escolhas de ferramentas e trade-offs de arquitetura, com as decisões documentadas.",
          ],
        },
        {
          company: "Zukt Labs",
          role: "Desenvolvedor Back End",
          period: "08/2024 – 07/2025",
          current: false,
          bullets: [
            "NestJS, Prisma e PostgreSQL em uma plataforma com cerca de 100 usuários; assumi o deploy em produção e os pipelines de CI/CD.",
            "Projetei o upload de arquivos com Cloudflare R2 e liderei uma refatoração baseada em Clean Architecture, reduzindo o acoplamento entre módulos.",
          ],
        },
        {
          company: "ArloesiTech",
          role: "Desenvolvedor Full Stack",
          period: "05/2023 – 08/2024",
          current: false,
          bullets: [
            "Evoluí um sistema legado em Node.js e Express com cerca de 400 usuários ativos e integrei gateways de pagamento ao checkout.",
            "Otimizei consultas MongoDB, criei APIs em NestJS com Prisma, PostgreSQL e Redis e contribuí para um ERP (NestJS e React).",
          ],
        },
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
            "Interfaces rápidas e responsivas com React e Next.js, de landing pages a painéis completos, com atenção a acessibilidade e SEO.",
        },
        {
          title: "API e banco de dados",
          description:
            "APIs com Node.js e NestJS, modelagem em PostgreSQL e MongoDB, cache com Redis e integrações como pagamentos com Stripe.",
        },
        {
          title: "DevOps",
          description:
            "Pipelines de CI/CD, containers com Docker, deploy na AWS e armazenamento em Cloudflare R2, com foco em custo e estabilidade.",
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
          "Evoluiu de um app só para barbearias para uma plataforma genérica de negócios de beleza, sem reescrever o fluxo de agendamento.",
          "Notificações de novos agendamentos para o profissional, para ele não depender de abrir o painel.",
          "Assinatura de plano integrada ao Stripe, com a cobrança conectada ao acesso do estabelecimento.",
          "Painel administrativo separado, com triagem do log de erros da plataforma.",
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
          "Cada estabelecimento tem dados isolados, e o login usa o formato usuario@identificador para separar equipes de lugares diferentes.",
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
    // Hero
    hero: {
      greeting: "Hello World! My name is",
      role: "and I'm a",
      title: "Fullstack Developer",
      available: "Available for new projects",
      description:
        "I build complete web products, from the React and Next.js front end to the API, the database and the deploy. I turn a business need into a live system, like BeautyDesk and Comandei, both in production.",
    },
    // Work
    work: {
      label: "My work",
      title: "See featured projects",
    },
    // Experience
    experience: {
      label: "Experience",
      title: "Where I've worked",
      present: "present",
      stats: [
        { value: "3+", label: "years of professional experience" },
        { value: "−70%", label: "staging infrastructure cost" },
        { value: "~400", label: "active users on a system I maintained" },
      ],
      items: [
        {
          company: "HeadTech Sistemas",
          role: "Software Engineer",
          period: "06/2026",
          current: true,
          bullets: [
            "I direct AI agents (Claude Code) to implement features from technical plans that I specify myself, with code review and Test-Driven Development.",
            "Cut staging infrastructure costs by about 70% (from US$ 66 to US$ 19 a month) by investigating the root cause: 98% of the database was logs with no retention policy. I automated retention in Python, inside the CI/CD pipeline.",
          ],
        },
        {
          company: "Instituto Federal do Mato Grosso do Sul",
          role: "Substitute Professor, Web Development",
          period: "07/2025 – 06/2026",
          current: false,
          bullets: [
            "Taught HTML, CSS, JavaScript, TypeScript, React, PostgreSQL and NestJS to 1st through 3rd year high school classes, up to full stack application development.",
          ],
        },
        {
          company: "4C Foresee",
          role: "Full Stack Developer (contract)",
          period: "08/2025 – 12/2025",
          current: false,
          bullets: [
            "WhatsApp multi-agent support SaaS platform: migrated file storage to Amazon S3 and added Redis caching before launch.",
            "Team's technical reference for tooling choices and architecture trade-offs, with decisions documented.",
          ],
        },
        {
          company: "Zukt Labs",
          role: "Back End Developer",
          period: "08/2024 – 07/2025",
          current: false,
          bullets: [
            "NestJS, Prisma and PostgreSQL on a platform with about 100 users; took ownership of production deploys and CI/CD pipelines.",
            "Designed file uploads on Cloudflare R2 and led a Clean Architecture refactor that reduced coupling between modules.",
          ],
        },
        {
          company: "ArloesiTech",
          role: "Full Stack Developer",
          period: "05/2023 – 08/2024",
          current: false,
          bullets: [
            "Evolved a legacy Node.js and Express system with about 400 active users and integrated payment gateways into checkout.",
            "Optimized MongoDB queries, built NestJS APIs with Prisma, PostgreSQL and Redis, and contributed to an ERP (NestJS and React).",
          ],
        },
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
            "Fast, responsive interfaces with React and Next.js, from landing pages to full dashboards, with attention to accessibility and SEO.",
        },
        {
          title: "API & Database",
          description:
            "APIs with Node.js and NestJS, PostgreSQL and MongoDB modeling, Redis caching and integrations such as Stripe payments.",
        },
        {
          title: "DevOps",
          description:
            "CI/CD pipelines, Docker containers, AWS deploys and Cloudflare R2 storage, with a focus on cost and stability.",
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
          "It grew from a barbershop-only app into a generic beauty-business platform without rewriting the booking flow.",
          "Booking notifications for the professional, so they do not depend on opening the dashboard.",
          "Plan subscription integrated with Stripe, with billing tied to the business access.",
          "A separate admin panel, with triage of the platform error log.",
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
          "Each business has isolated data, and login uses a username@identifier format to keep teams from different places apart.",
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
  hero: {
    greeting: string;
    role: string;
    title: string;
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
    present: string;
    stats: Array<{ value: string; label: string }>;
    items: Array<{
      company: string;
      role: string;
      period: string;
      current: boolean;
      bullets: string[];
    }>;
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
