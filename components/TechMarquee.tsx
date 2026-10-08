import type { CSSProperties } from "react";

import TechTag from "./TechTag";

type TechMarqueeProps = {
  techs: string[];
  size?: "sm" | "lg";
};

// Segundos por etiqueta: mantém a velocidade parecida em listas de tamanhos diferentes
const SECONDS_PER_TAG = 4;

export default function TechMarquee({ techs, size = "sm" }: TechMarqueeProps) {
  const style = {
    "--marquee-duration": `${techs.length * SECONDS_PER_TAG}s`,
  } as CSSProperties;

  return (
    <div className="marquee" style={style}>
      <div className="marquee-track">
        {[false, true].map((isCopy) => (
          <div
            key={isCopy ? "copy" : "original"}
            className={`marquee-copy flex shrink-0 ${size === "lg" ? "gap-3 pr-3" : "gap-2 pr-2"}`}
            aria-hidden={isCopy || undefined}
          >
            {techs.map((tech) => (
              <TechTag key={tech} label={tech} size={size} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
