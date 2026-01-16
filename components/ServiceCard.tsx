"use client";

import type { ElementType } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: ElementType;
};

export default function ServiceCard({
  title,
  description,
  Icon,
}: ServiceCardProps) {
  return (
    <div 
      className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#E3646E';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(227, 100, 110, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292C34';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Ícone */}
      <div 
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border"
        style={{ 
          backgroundColor: 'rgba(41, 44, 52, 0.5)',
          borderColor: '#292C34',
          color: '#E3646E'
        }}
      >
        <Icon size={22} />
      </div>

      {/* Título */}
      <h3 className="font-asap mb-2 text-lg font-semibold" style={{ color: '#E2E4E9' }}>
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-sm leading-relaxed" style={{ color: '#878EA1' }}>
        {description}
      </p>
    </div>
  );
}
