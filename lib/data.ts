import type { ElementType } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  Database,
  Cloud,
} from "lucide-react";
import type { ProjectSlug } from "./translations";

type TechItem = {
  label: string;
  image: string;
};

type ScreenshotKey = string;

type ProjectItem = {
  slug: ProjectSlug;
  cover: string;
  url: string;
  techs: string[];
  screenshots: ScreenshotKey[];
};

type ServiceItem = {
  title: string;
  description: string;
  Icon: ElementType;
};

type SocialItem = {
  label: string;
  href: string;
  Icon: ElementType;
};

// ==========================================
// TECNOLOGIAS (chips do hero)
// Usando imagens da pasta /public/
// ==========================================
export const techs: TechItem[] = [
  { label: "Node.js", image: "/node.png" },
  { label: "React", image: "/react.png" },
  { label: "TypeScript", image: "/typescript.png" },
  { label: "PostgreSQL", image: "/postgresql.png" },
  { label: "MongoDB", image: "/mongodb.png" },
  { label: "Docker", image: "/docker.png" },
];

// ==========================================
// PROJETOS
// Imagens em /public/projects/<slug>/
// Textos em lib/translations.ts, pelo slug
// ==========================================
export const projects: ProjectItem[] = [
  {
    slug: "beautydesk",
    cover: "/projects/beautydesk/cover.png",
    url: "https://beautydesk-manager.vercel.app",
    techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    screenshots: [
      "home",
      "estabelecimento",
      "painel",
      "agendamentos",
      "servicos",
      "financeiro",
    ],
  },
  {
    slug: "comandei",
    cover: "/projects/comandei/cover.png",
    url: "https://comandei.vercel.app",
    techs: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Stripe"],
    screenshots: ["mesas", "pedido", "fechamento", "cardapio", "financeiro"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function screenshotSrc(slug: ProjectSlug, key: ScreenshotKey) {
  return `/projects/${slug}/${key}.png`;
}

// ==========================================
// SERVIÇOS
// ==========================================
export const services: ServiceItem[] = [
  {
    title: "Websites e Aplicativos",
    description: "Desenvolvimento de interfaces",
    Icon: Monitor,
  },
  {
    title: "API e banco de dados",
    description: "Criação de serviços do sistema",
    Icon: Database,
  },
  {
    title: "DevOps",
    description: "Gestão e infraestrutura da aplicação",
    Icon: Cloud,
  },
];

// ==========================================
// REDES SOCIAIS
// ==========================================
export const socials: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vitors-lima/",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/VitorSLima",
    Icon: Github,
  },
  {
    label: "E-mail",
    href: "mailto:dev.vitorlima@gmail.com",
    Icon: Mail,
  },
];
