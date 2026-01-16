"use client";

import type { ElementType } from "react";
import { ArrowUpRight } from "lucide-react";

type SocialButtonProps = {
  label: string;
  href: string;
  Icon: ElementType;
};

export default function SocialButton({
  label,
  href,
  Icon,
}: SocialButtonProps) {
  return (
    <a
      className="group flex w-full items-center justify-between rounded-lg border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
        color: '#E2E4E9'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3996DB';
        e.currentTarget.style.backgroundColor = 'rgba(57, 150, 219, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292C34';
        e.currentTarget.style.backgroundColor = '#16181D';
      }}
    >
      <span className="flex items-center gap-3">
        <Icon size={20} style={{ color: '#3996DB' }} />
        <span className="font-medium">{label}</span>
      </span>
      <ArrowUpRight
        size={18}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ color: '#3996DB' }}
      />
    </a>
  );
}
