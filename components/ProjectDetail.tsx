"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import Carousel from "./Carousel";
import Container from "./Container";
import TechTag from "./TechTag";
import { getProject, screenshotSrc } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import type { ProjectSlug } from "@/lib/translations";

type ProjectDetailProps = {
  slug: ProjectSlug;
};

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t } = useLanguage();
  const project = getProject(slug);

  if (!project) return null;

  const text = t.projects[slug];
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
        style={{ color: '#878EA1' }}
      >
        <ArrowLeft size={16} />
        {t.project.back}
      </Link>

      {/* Cabeçalho */}
      <h1 className="font-asap mb-2 text-3xl font-bold sm:text-4xl" style={{ color: '#E2E4E9' }}>
        {text.title}
      </h1>
      <p className="font-inconsolata mb-8 text-base" style={{ color: '#3996DB' }}>
        {text.tagline}
      </p>

      {/* Telas do sistema */}
      <Carousel
        slides={slides}
        previousLabel={t.project.previous}
        nextLabel={t.project.next}
      />

      {/* Descrição */}
      <p className="font-maven mt-10 text-base leading-relaxed" style={{ color: '#C0C4CE' }}>
        {text.description}
      </p>

      {/* Funcionalidades */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#E2E4E9' }}>
        {t.project.features}
      </h2>
      <ul className="font-maven list-disc space-y-2 pl-5 text-sm" style={{ color: '#878EA1' }}>
        {text.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Tecnologias */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#E2E4E9' }}>
        {t.project.stack}
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {/* Link do site */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#3996DB', color: '#0D0E11' }}
      >
        {t.project.viewSite}
        <ExternalLink size={16} />
      </a>
    </Container>
  );
}
