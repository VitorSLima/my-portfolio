"use client";

import { ArrowRight } from "lucide-react";

import ApiCard from "@/components/ApiCard";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import TechMarquee from "@/components/TechMarquee";
import { cv, socials, techs } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const EMAIL = "dev.vitorlima@gmail.com";

const linkClass =
  "border-b pb-0.5 transition-colors hover:!border-[#4DA3F0] hover:!text-[#4DA3F0]";

// Cabeçalho padrão das seções
function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className="font-inconsolata mb-3.5 text-sm" style={{ color: '#4DA3F0' }}>
        {label}
      </p>
      <h2 className="font-asap max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl" style={{ color: '#F2F4F8' }}>
        {title}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  const { t, locale } = useLanguage();
  const resume = cv[locale];
  const links = socials.filter((social) => social.label !== "E-mail");

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0A0C11' }}>
      <Header />

      <main>
        {/* ==========================================
            HERO
            ========================================== */}
        <div className="relative overflow-hidden">
          {/* Brilho e grade ao fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 55% at 78% 8%, rgba(77,163,240,0.20), transparent 70%), radial-gradient(40% 40% at 8% 60%, rgba(187,114,233,0.10), transparent 70%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              WebkitMaskImage: 'radial-gradient(70% 70% at 60% 30%, #000, transparent)',
              maskImage: 'radial-gradient(70% 70% at 60% 30%, #000, transparent)',
            }}
          />

          <Section id="home" className="relative">
            <Container className="relative flex flex-col items-center gap-14 pb-20 pt-36 lg:flex-row lg:gap-16 lg:pt-40">
              <div className="min-w-0 flex-1">
                <p
                  className="animate-rise mb-7 flex items-center gap-2.5 text-[15px]"
                  style={{ color: '#8B93A7' }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#4ADE80' }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#4ADE80' }} />
                  </span>
                  {t.hero.available}
                </p>

                <h1
                  className="font-asap animate-rise text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
                  style={{ color: '#F2F4F8', animationDelay: '80ms' }}
                >
                  {t.hero.title}
                  <span style={{ color: '#4DA3F0' }}>.</span>
                </h1>

                <p
                  className="font-maven animate-rise mt-7 max-w-lg text-lg leading-relaxed"
                  style={{ color: '#8B93A7', animationDelay: '160ms' }}
                >
                  {t.hero.summary}
                </p>

                <div
                  className="animate-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                  style={{ animationDelay: '240ms' }}
                >
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#4DA3F0', color: '#06121F' }}
                  >
                    {t.hero.viewProjects}
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={resume.href}
                    download={resume.fileName}
                    className={`${linkClass} text-base font-semibold`}
                    style={{ color: '#F2F4F8', borderColor: '#2A3040' }}
                  >
                    {t.cv.download}
                  </a>
                </div>
              </div>

              <div className="animate-rise flex w-full flex-1 justify-center lg:justify-end" style={{ animationDelay: '200ms' }}>
                <ApiCard />
              </div>
            </Container>
          </Section>

          {/* Faixa de tecnologias, na largura do conteúdo */}
          <Container className="relative pb-28">
            <div className="animate-rise" style={{ animationDelay: '320ms' }}>
              <TechMarquee techs={techs} size="lg" />
            </div>
          </Container>
        </div>

        {/* ==========================================
            TRABALHO
            ========================================== */}
        <Section id="work" className="pb-28">
          <Container>
            <SectionHeading label={t.work.label} title={t.work.title} />
            <Reveal>
              <ProjectShowcase />
            </Reveal>
          </Container>
        </Section>

        {/* ==========================================
            EXPERIÊNCIA
            ========================================== */}
        <Section id="experience" className="pb-28">
          <Container>
            <SectionHeading label={t.experience.label} title={t.experience.title} />
            <div className="grid gap-12 md:grid-cols-3 md:gap-14">
              {t.experience.stats.map((stat, index) => (
                <Reveal key={stat.value} delay={index * 100} className="h-full">
                  <StatCard value={stat.value} title={stat.title} label={stat.label} highlight={index === 1}>
                    {index === 1 && (
                      <div className="mt-5 flex flex-col gap-2.5 text-[13px]" style={{ color: '#B7BDCC' }}>
                        <div className="flex items-center gap-3">
                          <span className="w-14" style={{ color: '#8B93A7' }}>{t.experience.bars.before}</span>
                          <span className="h-2 flex-1 rounded-full" style={{ backgroundColor: '#3A4153' }} />
                          <span className="w-14 text-right">US$ 66</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-14" style={{ color: '#8B93A7' }}>{t.experience.bars.after}</span>
                          <span className="flex flex-1">
                            <span className="h-2 rounded-full" style={{ width: '29%', backgroundColor: '#4DA3F0' }} />
                          </span>
                          <span className="w-14 text-right" style={{ color: '#4DA3F0' }}>US$ 19</span>
                        </div>
                      </div>
                    )}
                  </StatCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            SERVIÇOS
            ========================================== */}
        <Section id="services" className="pb-28">
          <Container>
            <SectionHeading label={t.services.label} title={t.services.title} />
            <div className="grid gap-12 md:grid-cols-3 md:gap-14">
              {t.services.items.map((service, index) => (
                <Reveal key={service.title} delay={index * 100}>
                  <div className="h-full border-t pt-7" style={{ borderColor: '#232833' }}>
                    <h3 className="font-asap text-2xl font-bold leading-tight" style={{ color: '#F2F4F8' }}>
                      {service.title}
                    </h3>
                    <p className="font-maven mt-3.5 text-base leading-relaxed" style={{ color: '#8B93A7' }}>
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            CONTATO
            ========================================== */}
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 70% at 20% 100%, rgba(77,163,240,0.16), transparent 70%), radial-gradient(40% 60% at 90% 80%, rgba(187,114,233,0.10), transparent 70%)',
            }}
          />
          <Section id="contact" className="relative pb-28">
            <Container>
              <div className="border-t pt-24" style={{ borderColor: '#1B2029' }}>
                <Reveal>
                  <h2
                    className="font-asap max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
                    style={{ color: '#F2F4F8' }}
                  >
                    {t.contact.title}
                    <span style={{ color: '#4DA3F0' }}>.</span>
                  </h2>
                  <a
                    href={`mailto:${EMAIL}`}
                    className={`${linkClass} mt-10 inline-block text-xl font-semibold sm:text-3xl`}
                    style={{ color: '#F2F4F8', borderColor: '#2A3040' }}
                  >
                    {EMAIL}
                  </a>
                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-base font-semibold">
                    <a
                      href={resume.href}
                      download={resume.fileName}
                      className="rounded-xl px-6 py-3.5 font-bold transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#4DA3F0', color: '#06121F' }}
                    >
                      {t.cv.download}
                    </a>
                    {links.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                        style={{ color: '#F2F4F8', borderColor: '#2A3040' }}
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </Container>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
