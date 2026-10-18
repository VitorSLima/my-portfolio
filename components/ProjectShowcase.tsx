"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github, Lock } from "lucide-react";

import TechMarquee from "./TechMarquee";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectShowcase() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const update = () => {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  };

  useEffect(() => {
    // Mantém o slide alinhado quando a largura da tela muda
    const realign = () => {
      const track = trackRef.current;
      if (track) track.scrollTo({ left: current * track.clientWidth, behavior: "instant" });
    };
    window.addEventListener("resize", realign);
    return () => window.removeEventListener("resize", realign);
  }, [current]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "rounded-full border p-2 transition-all hover:border-[#3996DB] hover:text-[#3996DB] disabled:opacity-30 disabled:hover:border-[#292C34] disabled:hover:text-[#878EA1]";

  return (
    <div>
      {/* Slides com rolagem nativa */}
      <div
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => {
          const text = t.projects[project.slug];
          const host = project.url.replace(/^https?:\/\//, "");
          const isOpen = Boolean(project.repo);

          return (
            <article
              key={project.slug}
              className="grid w-full shrink-0 snap-center items-center gap-8 px-1 py-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12"
            >
              {/* Print dentro de uma moldura de navegador */}
              <Link
                href={`/projetos/${project.slug}`}
                aria-label={text.title}
                className="group relative block"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 30% 20%, rgba(57,150,219,0.28), transparent 65%)' }}
                />
                <div
                  className="overflow-hidden rounded-xl border transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ backgroundColor: '#16181D', borderColor: '#292C34' }}
                >
                  <div
                    className="flex items-center gap-3 border-b px-4 py-2.5"
                    style={{ backgroundColor: '#1B1E24', borderColor: '#292C34' }}
                  >
                    <span className="flex gap-1.5" aria-hidden="true">
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#3A3F4B' }} />
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#3A3F4B' }} />
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#3A3F4B' }} />
                    </span>
                    <span
                      className="font-inconsolata min-w-0 flex-1 truncate rounded-md px-3 py-1 text-xs"
                      style={{ backgroundColor: '#0D0E11', color: '#878EA1' }}
                    >
                      {host}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.cover}
                      alt={text.title}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Link>

              {/* Informações */}
              <div className="min-w-0">
                <span
                  className="font-inconsolata mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: '#292C34', color: isOpen ? '#3996DB' : '#C0C4CE' }}
                >
                  {isOpen ? <Github size={12} aria-hidden="true" /> : <Lock size={12} aria-hidden="true" />}
                  {isOpen ? t.project.statusOpen : t.project.statusPrivate}
                </span>

                <h3 className="font-asap text-3xl font-bold sm:text-4xl" style={{ color: '#E2E4E9' }}>
                  {text.title}
                </h3>
                <p className="font-inconsolata mt-2 text-base" style={{ color: '#3996DB' }}>
                  {text.tagline}
                </p>
                <p className="font-maven mt-4 line-clamp-4 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
                  {text.description}
                </p>

                <div className="mt-5">
                  <TechMarquee techs={project.techs} />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#3996DB', color: '#0D0E11' }}
                  >
                    {t.project.viewDetails}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                    style={{ color: '#E2E4E9' }}
                  >
                    {t.project.viewSite}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ color: '#E2E4E9' }}
                    >
                      {t.project.viewRepo}
                      <Github size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Abas com o nome dos projetos e setas */}
      <div className="mt-8 flex items-start justify-between gap-4 border-t pt-4" style={{ borderColor: '#292C34' }}>
        <div role="tablist" className="font-inconsolata flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={index === current}
              onClick={() => goTo(index)}
              className="relative pb-1 pt-2 transition-colors hover:!text-[#E2E4E9]"
              style={{ color: index === current ? '#E2E4E9' : '#878EA1' }}
            >
              {t.projects[project.slug].title}
              <span
                aria-hidden="true"
                className="absolute -top-[17px] left-0 h-0.5 transition-all duration-300"
                style={{ width: index === current ? '100%' : '0%', backgroundColor: '#3996DB' }}
              />
            </button>
          ))}
        </div>
        <div className="flex shrink-0 gap-2" style={{ color: '#878EA1' }}>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label={t.project.previousProject}
            className={arrow}
            style={{ borderColor: '#292C34' }}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === projects.length - 1}
            aria-label={t.project.nextProjectArrow}
            className={arrow}
            style={{ borderColor: '#292C34' }}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
