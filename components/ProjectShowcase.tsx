"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    "rounded-full border p-3 transition-all hover:border-[#4DA3F0] hover:text-[#4DA3F0] disabled:opacity-30 disabled:hover:border-[#232833] disabled:hover:text-[#8B93A7]";

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
              className="grid w-full shrink-0 snap-center items-center gap-10 px-1 py-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14"
            >
              {/* Print dentro de uma moldura de navegador */}
              <Link
                href={`/projetos/${project.slug}`}
                aria-label={text.title}
                className="group relative block"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 -z-10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(77,163,240,0.25), transparent 65%)' }}
                />
                <div
                  className="overflow-hidden rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 group-hover:!border-[#4DA3F0]"
                  style={{ backgroundColor: '#10131A', borderColor: '#232833' }}
                >
                  <div
                    className="flex items-center gap-3 border-b px-4 py-2.5"
                    style={{ backgroundColor: '#141821', borderColor: '#232833' }}
                  >
                    <span className="flex gap-1.5" aria-hidden="true">
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#2A3040' }} />
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#2A3040' }} />
                      <i className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#2A3040' }} />
                    </span>
                    <span className="font-inconsolata truncate text-xs" style={{ color: '#8B93A7' }}>
                      {host}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.cover}
                      alt={text.title}
                      fill
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Link>

              {/* Informações */}
              <div className="min-w-0">
                <p className="mb-4 flex items-center gap-2.5 text-sm" style={{ color: '#8B93A7' }}>
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={
                      isOpen
                        ? { backgroundColor: '#4DA3F0' }
                        : { border: '1.5px solid #8B93A7' }
                    }
                  />
                  {isOpen ? t.project.statusOpen : t.project.statusPrivate}
                </p>

                <h3 className="font-asap text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl" style={{ color: '#F2F4F8' }}>
                  {text.title}
                </h3>
                <p className="font-inconsolata mt-3 text-sm" style={{ color: '#4DA3F0' }}>
                  {text.tagline}
                </p>
                <p className="font-maven mt-4 text-base leading-relaxed sm:text-[17px]" style={{ color: '#8B93A7' }}>
                  {text.description}
                </p>

                <div className="mt-5">
                  <TechMarquee techs={project.techs} />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px] font-semibold">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-5 py-3 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#4DA3F0', color: '#06121F' }}
                  >
                    {t.project.viewSite}
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b pb-0.5 transition-colors hover:!border-[#4DA3F0] hover:!text-[#4DA3F0]"
                      style={{ color: '#F2F4F8', borderColor: '#2A3040' }}
                    >
                      {t.project.viewRepo}
                    </a>
                  )}
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="border-b pb-0.5 transition-colors hover:!border-[#4DA3F0] hover:!text-[#4DA3F0]"
                    style={{ color: '#F2F4F8', borderColor: '#2A3040' }}
                  >
                    {t.project.viewDetails}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Abas com o nome dos projetos e setas */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-4" style={{ borderColor: '#1B2029' }}>
        <div role="group" className="flex flex-wrap gap-x-7 gap-y-1">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-pressed={index === current}
              className="border-b-2 py-2.5 text-[15px] transition-colors hover:!text-[#F2F4F8]"
              style={{
                color: index === current ? '#F2F4F8' : '#8B93A7',
                borderColor: index === current ? '#4DA3F0' : 'transparent',
              }}
            >
              {t.projects[project.slug].title}
            </button>
          ))}
        </div>
        <div className="flex gap-2.5" style={{ color: '#8B93A7' }}>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label={t.project.previousProject}
            className={arrow}
            style={{ borderColor: '#232833' }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === projects.length - 1}
            aria-label={t.project.nextProjectArrow}
            className={arrow}
            style={{ borderColor: '#232833' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
