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
// As imagens estão em /public/projects/
// ==========================================
export const projects: ProjectItem[] = [
  {
    title: "Barber Shop",
    description:
      "Um sistema de agendamento e gestão de barbearia com interface intuitiva e foco em usabilidade, permitindo cadastrar serviços, horários e clientes de forma prática e eficiente.",
    image: "/projects/barber-shop.png",
  },
  {
    title: "lorem ipsum",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/projects/proj-2.png",
  },
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/projects/proj-3.png",
  },
  {
    title: "lorem ipsum",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/projects/proj-4.png",
  },
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/projects/proj-5.png",
  },
  {
    title: "lorem ipsum",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
