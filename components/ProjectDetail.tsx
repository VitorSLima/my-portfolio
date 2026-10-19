"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

import Carousel from "./Carousel";
import Container from "./Container";
import TechTag from "./TechTag";
import { getProject, projects, screenshotSrc } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import type { ProjectSlug } from "@/lib/translations";

type ProjectDetailProps = {
  slug: ProjectSlug;
};

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t } = useLanguage();
  const project = getProject(slug);
  const description = t.projects[slug].description;

  // Descrição da aba no idioma escolhido
  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [description]);

  if (!project) return null;

  const text = t.projects[slug];
  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
  const slides = project.screenshots.map((key) => ({
    src: screenshotSrc(slug, key),
    alt: text.screenshots[key],
  }));

  return (
    <Container className="max-w-4xl">
      {/* Voltar */}
      <Link
        href="/#work"
        className="font-inconsolata mb-8 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
        style={{ color: '#8B93A7' }}
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {t.project.back}
      </Link>

      {/* Cabeçalho */}
      <h1 className="font-asap mb-2 text-3xl font-bold sm:text-4xl" style={{ color: '#F2F4F8' }}>
        {text.title}
      </h1>
      <p className="font-inconsolata mb-8 text-base" style={{ color: '#4DA3F0' }}>
        {text.tagline}
      </p>

      {/* Telas do sistema */}
      <Carousel
        slides={slides}
        previousLabel={t.project.previous}
        nextLabel={t.project.next}
        zoomLabel={t.project.zoom}
        closeLabel={t.project.close}
      />

      {/* Descrição */}
      <p className="font-maven mt-10 text-base leading-relaxed" style={{ color: '#B7BDCC' }}>
        {text.description}
      </p>

      {/* Funcionalidades */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#F2F4F8' }}>
        {t.project.features}
      </h2>
      <ul className="font-maven list-disc space-y-2 pl-5 text-sm" style={{ color: '#8B93A7' }}>
        {text.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Decisões técnicas */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#F2F4F8' }}>
        {t.project.decisions}
      </h2>
      <ul className="font-maven list-disc space-y-2 pl-5 text-sm" style={{ color: '#8B93A7' }}>
        {text.decisions.map((decision) => (
          <li key={decision}>{decision}</li>
        ))}
      </ul>

      {/* Tecnologias */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#F2F4F8' }}>
        {t.project.stack}
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {/* Links do projeto */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#4DA3F0', color: '#0A0C11' }}
        >
          {t.project.viewSite}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ borderColor: '#4DA3F0', color: '#4DA3F0' }}
          >
            {t.project.viewRepo}
            <Github size={16} aria-hidden="true" />
          </a>
        )}
      </div>

      {/* Próximo projeto */}
      {next.slug !== slug && (
        <Link
          href={`/projetos/${next.slug}`}
          className="mt-16 flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:!border-[#4DA3F0]"
          style={{ backgroundColor: '#10131A', borderColor: '#232833' }}
        >
          <span>
            <span className="font-inconsolata block text-xs uppercase tracking-widest" style={{ color: '#8B93A7' }}>
              {t.project.nextProject}
            </span>
            <span className="font-asap text-lg font-semibold" style={{ color: '#F2F4F8' }}>
              {t.projects[next.slug].title}
            </span>
          </span>
          <ArrowRight size={20} style={{ color: '#4DA3F0' }} aria-hidden="true" />
        </Link>
      )}
    </Container>
  );
}
