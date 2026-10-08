"use client";

import Image from "next/image";
import { ChevronsDown, Download, FileText } from "lucide-react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import SocialButton from "@/components/SocialButton";
import StatCard from "@/components/StatCard";
import TechMarquee from "@/components/TechMarquee";
import { cv, projects, socials, techs } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Monitor, Database, Cloud } from "lucide-react";

// ==========================================
// DADOS DO PERFIL
// ==========================================
const NAME = "Vitor dos Santos Lima";

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
            {/* Disponibilidade */}
            <p
              className="font-inconsolata animate-rise mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs"
              style={{ borderColor: '#292C34', backgroundColor: 'rgba(22, 24, 29, 0.8)', color: '#C0C4CE' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#4ADE80' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#4ADE80' }} />
              </span>
              {t.hero.available}
            </p>

            {/* Avatar com badge dev-code.png */}
            <div className="animate-rise relative mb-8" style={{ animationDelay: '80ms' }}>
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
            <p className="font-inconsolata animate-rise mb-2 text-base" style={{ color: '#C0C4CE', animationDelay: '160ms' }}>
              {t.hero.greeting}{" "}
              <span className="font-semibold" style={{ color: '#3996DB' }}>{NAME}</span> {t.hero.role}
            </p>

            {/* Título principal */}
            <h1 className="font-asap animate-rise mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl" style={{ color: '#E2E4E9', animationDelay: '240ms' }}>
              {t.hero.title}
            </h1>

            {/* Descrição */}
            <p className="font-maven animate-rise mb-10 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: '#878EA1', animationDelay: '320ms' }}>
              {t.hero.description}
            </p>

            {/* Tech chips */}
            <div className="animate-rise mb-12 w-full max-w-4xl" style={{ animationDelay: '400ms' }}>
              <TechMarquee techs={techs} size="lg" />
            </div>

            {/* Download do currículo */}
            <a
              href={cv.href}
              download={cv.fileName}
              className="font-maven animate-rise mb-12 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#3996DB', color: '#0D0E11', animationDelay: '480ms' }}
            >
              <Download size={18} />
              {t.cv.download}
            </a>

            {/* Seta de scroll */}
            <a
              href="#work"
              className="animate-bounce transition-colors hover:opacity-80"
              style={{ color: '#878EA1' }}
              aria-label={t.hero.scrollLabel}
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
            <Reveal className="mb-12 text-center">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.work.label}
              </p>
              <h2 className="font-asap text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.work.title}
              </h2>
            </Reveal>

            {/* Grid de projetos */}
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={t.projects[project.slug].title}
                  tagline={t.projects[project.slug].tagline}
                  cover={project.cover}
                  url={project.url}
                  techs={project.techs}
                  viewSiteLabel={t.project.viewSite}
                />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            SEÇÃO EXPERIÊNCIA
            ========================================== */}
        <Section id="experience" className="py-20" style={{ backgroundColor: '#16181D' }}>
          <Container>
            {/* Cabeçalho */}
            <Reveal className="mb-12 text-center">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.experience.label}
              </p>
              <h2 className="font-asap text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.experience.title}
              </h2>
            </Reveal>

            {/* Números de destaque */}
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {t.experience.stats.map((stat, index) => (
                <Reveal key={stat.value} delay={index * 100} className="h-full">
                  <StatCard value={stat.value} title={stat.title} label={stat.label} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            SEÇÃO MEUS SERVIÇOS
            ========================================== */}
        <Section id="services" className="py-20" style={{ backgroundColor: '#0D0E11' }}>
          <Container>
            {/* Cabeçalho */}
            <Reveal className="mb-12 text-center">
              <p className="font-inconsolata mb-2 text-sm uppercase tracking-widest" style={{ color: '#3996DB' }}>
                {t.services.label}
              </p>
              <h2 className="font-asap text-2xl font-bold sm:text-3xl" style={{ color: '#E2E4E9' }}>
                {t.services.title}
              </h2>
            </Reveal>

            {/* Cards de serviços */}
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((service, index) => (
                <Reveal key={service.title} delay={index * 100}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    Icon={serviceIcons[index]}
                  />
                </Reveal>
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
              <SocialButton
                label={t.cv.download}
                href={cv.href}
                Icon={FileText}
                download={cv.fileName}
              />
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
