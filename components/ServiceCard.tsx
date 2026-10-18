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
      className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:!border-[#3996DB] hover:shadow-[0_0_20px_rgba(57,150,219,0.15)]"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
      }}
    >
      {/* Ícone */}
      <div 
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border"
        style={{ 
          backgroundColor: 'rgba(41, 44, 52, 0.5)',
          borderColor: '#292C34',
          color: '#3996DB'
        }}
      >
        <Icon size={22} aria-hidden="true" />
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
