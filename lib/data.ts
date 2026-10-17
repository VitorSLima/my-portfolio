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

type ScreenshotKey = string;

type ProjectItem = {
  slug: ProjectSlug;
  cover: string;
  url: string;
  repo?: string;
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
export const techs: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "Fastify",
  "NestJS",
  "AdonisJS",
  "Prisma",
  "Drizzle",
  "Swagger",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "Docker",
  "AWS",
  "Cloudflare",
  "GitHub Actions",
  "Git",
  "GitHub",
  "Python",
  "Stripe",
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
    screenshots: ["estabelecimento", "servicos", "financeiro"],
  },
  {
    slug: "comandei",
    cover: "/projects/comandei/cover.png",
    url: "https://comandei.vercel.app",
    techs: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Stripe"],
    screenshots: ["mesas", "pedido", "fechamento", "cardapio", "financeiro"],
  },
  {
    slug: "torcida-veste",
    cover: "/projects/torcida-veste/cover.png",
    url: "https://torcida-veste-app.vercel.app",
    repo: "https://github.com/VitorSLima/torcida-veste",
    techs: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Stripe"],
    screenshots: ["inicio", "catalogo", "produto", "carrinho"],
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
// CURRÍCULO
// Arquivo em /public/
// ==========================================
export const cv = {
  pt: {
    href: "/Vitor_dos_Santos_Lima_CV.pdf",
    fileName: "Vitor_dos_Santos_Lima_CV.pdf",
  },
  en: {
    href: "/Vitor_dos_Santos_Lima_CV_EN.pdf",
    fileName: "Vitor_dos_Santos_Lima_CV_EN.pdf",
  },
};

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
