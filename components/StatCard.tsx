import type { ReactNode } from "react";

type StatCardProps = {
  value: string;
  title: string;
  label: string;
  highlight?: boolean;
  children?: ReactNode;
};

export default function StatCard({ value, title, label, highlight = false, children }: StatCardProps) {
  return (
    <div className="h-full border-t pt-7" style={{ borderColor: '#232833' }}>
      <p
        className="font-asap text-6xl font-extrabold leading-none tracking-tight sm:text-7xl"
        style={{ color: highlight ? '#4DA3F0' : '#F2F4F8' }}
      >
        {value}
      </p>
      <p className="font-asap mt-5 text-lg font-semibold" style={{ color: '#F2F4F8' }}>
        {title}
      </p>
      <p className="font-maven mt-2.5 text-[15px] leading-relaxed" style={{ color: '#8B93A7' }}>
        {label}
      </p>
      {children}
    </div>
  );
}
