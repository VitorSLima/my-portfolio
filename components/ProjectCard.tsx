"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import TechMarquee from "./TechMarquee";

type ProjectCardProps = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  url: string;
  techs: string[];
  viewSiteLabel: string;
};

export default function ProjectCard({
  slug,
  title,
  tagline,
  cover,
  url,
  techs,
  viewSiteLabel,
}: ProjectCardProps) {
  return (
    <div
      className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: '#16181D',
        borderColor: '#292C34',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3996DB';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 150, 219, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292C34';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Link href={`/projetos/${slug}`} className="block">
        <figure className="relative h-44 w-full overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        <h3 className="font-asap px-4 pt-4 text-lg font-semibold" style={{ color: '#E2E4E9' }}>
          {title}
        </h3>
      </Link>
      <div className="px-4 pb-4 pt-2">
        <p className="mb-3 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
          {tagline}
        </p>
        <div className="mb-4">
          <TechMarquee techs={techs} />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: '#3996DB' }}
        >
          {viewSiteLabel}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
