import type { ReactNode, CSSProperties } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function Section({ id, children, className = "", style }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`} style={style}>
      {children}
    </section>
  );
}
