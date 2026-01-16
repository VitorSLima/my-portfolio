"use client";

import Image from "next/image";
import { ChevronsDown } from "lucide-react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import SocialButton from "@/components/SocialButton";
import TechChip from "@/components/TechChip";
import { socials, techs } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Monitor, Database, Cloud } from "lucide-react";

// ==========================================
// DADOS DO PERFIL
// ==========================================
const NAME = "Vitor dos Santos Lima";

// Imagens dos projetos
const projectImages = [
  "/projects/proj-1.png",
  "/projects/proj-2.png",
  "/projects/proj-3.png",
  "/projects/proj-4.png",
  "/projects/proj-5.png",
  "/projects/proj-6.png",
];

// Ícones dos serviços
const serviceIcons = [Monitor, Database, Cloud];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0E11' }}>
      {/* Header */}
      <Header />

      <main>
        {/* ==========================================
            SEÇÃO HERO
            ========================================== */}
        <Section id="home" className="relative min-h-screen">
          {/* Background com linhas coloridas */}
          <div className="absolute inset-0">
            <Image
              src="/background-intro.png"
              alt="Background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center py-20 text-center">
            {/* Avatar com badge dev-code.png */}
            <div className="relative mb-8">
              <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-gray-600">
                <Image
                  src="/profile.jpeg"
                  alt="Vitor Lima"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Badge de código usando dev-code.png */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <Image
                  src="/dev-code.png"
                  alt="Dev Code"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Texto de introdução */}
            <p className="font-inconsolata mb-2 text-base" style={{ color: '#C0C4CE' }}>
              {t.hero.greeting}{" "}
              <span className="font-semibold" style={{ color: '#3996DB' }}>{NAME}</span> {t.hero.role}
            </p>

            {/* Título principal */}
            <h1 className="font-asap mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl" style={{ color: '#E2E4E9' }}>
              {t.hero.title}
            </h1>

            {/* Descrição */}
            <p className="font-maven mb-10 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: '#878EA1' }}>
              {t.hero.description}
            </p>

            {/* Tech chips */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {techs.map((tech) => (
                <TechChip key={tech.label} label={tech.label} image={tech.image} />
              ))}
            </div>

            {/* Seta de scroll */}
            <a
              href="#work"
              className="animate-bounce transition-colors hover:opacity-80"
              style={{ color: '#878EA1' }}
              aria-label="Scroll para projetos"
            >
              <ChevronsDown size={32} />
            </a>
          </Container>
        </Section>

        {/* ==========================================
            SEÇÃO MEU TRABALHO
            ========================================== */}
        <Section id="work" className="py-20" style={{ backgroundColor: '#0D0E11' }}>
          <Container>
            {/* Cabeçalho */}
            <div className="mb-12 text-center">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.work.label}
              </p>
              <h2 className="font-asap text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.work.title}
              </h2>
            </div>

            {/* Grid de projetos */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={projectImages[index]}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            SEÇÃO MEUS SERVIÇOS
            ========================================== */}
        <Section id="services" className="py-20" style={{ backgroundColor: '#16181D' }}>
          <Container>
            {/* Cabeçalho */}
            <div className="mb-12 text-center">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.services.label}
              </p>
              <h2 className="font-asap text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.services.title}
              </h2>
            </div>

            {/* Cards de serviços */}
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  Icon={serviceIcons[index]}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            SEÇÃO CONTATO
            ========================================== */}
        <Section id="contact" className="relative py-20">
          {/* Background com linhas coloridas */}
          <div className="absolute inset-0">
            <Image
              src="/background-contacts.png"
              alt="Background contato"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <Container className="relative z-10 flex flex-col items-center text-center">
            {/* Cabeçalho */}
            <div className="mb-10">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.contact.label}
              </p>
              <h2 className="font-asap mb-4 text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.contact.title}
              </h2>
              <p className="font-maven text-sm" style={{ color: '#878EA1' }}>
                {t.contact.description}
              </p>
            </div>

            {/* Botões sociais */}
            <div className="flex w-full max-w-sm flex-col gap-3">
              {socials.map((social) => (
                <SocialButton
                  key={social.label}
                  label={social.label}
                  href={social.href}
                  Icon={social.Icon}
                />
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
