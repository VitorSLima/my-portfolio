"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import Lightbox from "./Lightbox";

type Slide = {
  src: string;
  alt: string;
};

type CarouselProps = {
  slides: Slide[];
  previousLabel: string;
  nextLabel: string;
  zoomLabel: string;
  closeLabel: string;
};

export default function Carousel({
  slides,
  previousLabel,
  nextLabel,
  zoomLabel,
  closeLabel,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  // Ao fechar o modal, o carrossel acompanha a imagem que estava aberta
  const handleCloseZoom = () => {
    const track = trackRef.current;
    if (track && zoomIndex !== null) {
      track.scrollTo({ left: zoomIndex * track.clientWidth, behavior: "instant" });
    }
    setZoomIndex(null);
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
          style={{ backgroundColor: '#10131A', borderColor: '#232833' }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative aspect-[16/10] w-full shrink-0 snap-center">
              <button
                type="button"
                onClick={() => setZoomIndex(index)}
                aria-label={`${zoomLabel}: ${slide.alt}`}
                className="group absolute inset-0 block cursor-zoom-in"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-contain"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-3 rounded-full border p-2 opacity-70 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: 'rgba(10, 12, 17, 0.8)', borderColor: '#232833', color: '#F2F4F8' }}
                >
                  <Maximize2 size={16} />
                </span>
              </button>
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
          style={{ backgroundColor: 'rgba(10, 12, 17, 0.8)', borderColor: '#232833', color: '#F2F4F8' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={isLast}
          aria-label={nextLabel}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80 disabled:opacity-30"
          style={{ backgroundColor: 'rgba(10, 12, 17, 0.8)', borderColor: '#232833', color: '#F2F4F8' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Legenda do slide atual */}
      <p className="font-maven mt-4 text-center text-sm" style={{ color: '#B7BDCC' }}>
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
            style={{ backgroundColor: index === current ? '#4DA3F0' : '#232833' }}
          />
        ))}
      </div>

      <Lightbox
        slides={slides}
        index={zoomIndex}
        onIndexChange={setZoomIndex}
        onClose={handleCloseZoom}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        closeLabel={closeLabel}
      />
    </div>
  );
}
