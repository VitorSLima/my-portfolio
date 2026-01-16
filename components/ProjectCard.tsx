"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#E3646E';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(227, 100, 110, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292C34';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <figure className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="p-4">
        <h3 className="font-asap mb-2 text-lg font-semibold" style={{ color: '#E2E4E9' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#878EA1' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
