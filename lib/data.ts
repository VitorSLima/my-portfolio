import type { ElementType } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  Database,
  Cloud,
} from "lucide-react";

type TechItem = {
  label: string;
  image: string;
};

type ProjectItem = {
  title: string;
  description: string;
  image: string;
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
// Coloque suas imagens em /public/projects/
// ==========================================
export const projects: ProjectItem[] = [
  {
    title: "Travelgram",
    description:
      "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo",
    image: "/projects/proj-1.png",
  },
  {
    title: "Tech News",
    description:
      "Homepage de um portal de notícias sobre a área de tecnologia",
    image: "/projects/proj-2.png",
  },
  {
    title: "Página de receita",
    description: "Página com o passo a passo de uma receita para cupcakes",
    image: "/projects/proj-3.png",
  },
  {
    title: "Zingen",
    description:
      "Landing Page completa e responsiva de um aplicativo de Karaokê",
    image: "/projects/proj-4.png",
  },
  {
    title: "Refund",
    description: "Um sistema para pedido e acompanhamento de reembolso",
    image: "/projects/proj-5.png",
  },
  {
    title: "Página de turismo",
    description:
      "Página com as principais informações para quem quer viajar para Busan",
    image: "/projects/proj-6.png",
  },
];

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
