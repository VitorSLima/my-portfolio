"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
};

type CarouselProps = {
  slides: Slide[];
  previousLabel: string;
  nextLabel: string;
};

export default function Carousel({ slides, previousLabel, nextLabel }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  };

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <div>
      <div className="relative">
        {/* Trilho com rolagem nativa */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ backgroundColor: '#16181D', borderColor: '#292C34' }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative aspect-[16/10] w-full shrink-0 snap-center">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Setas */}
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={isFirst}
          aria-label={previousLabel}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80 disabled:opacity-30"
          style={{ backgroundColor: 'rgba(13, 14, 17, 0.8)', borderColor: '#292C34', color: '#E2E4E9' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={isLast}
          aria-label={nextLabel}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80 disabled:opacity-30"
          style={{ backgroundColor: 'rgba(13, 14, 17, 0.8)', borderColor: '#292C34', color: '#E2E4E9' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Legenda do slide atual */}
      <p className="font-maven mt-4 text-center text-sm" style={{ color: '#C0C4CE' }}>
        {slides[current]?.alt}
      </p>

      {/* Indicadores */}
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${index + 1} / ${slides.length}`}
            aria-current={index === current}
            className="h-2 w-2 rounded-full transition-colors"
            style={{ backgroundColor: index === current ? '#3996DB' : '#292C34' }}
          />
        ))}
      </div>
    </div>
  );
}
