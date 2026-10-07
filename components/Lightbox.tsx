"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
};

type LightboxProps = {
  slides: Slide[];
  /** Índice da imagem aberta; null quando fechado */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  previousLabel: string;
  nextLabel: string;
  closeLabel: string;
};

const buttonStyle = {
  backgroundColor: 'rgba(13, 14, 17, 0.8)',
  borderColor: '#292C34',
  color: '#E2E4E9',
};

export default function Lightbox({
  slides,
  index,
  onIndexChange,
  onClose,
  previousLabel,
  nextLabel,
  closeLabel,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;

  // Abre e fecha o <dialog> nativo (cuida de foco, Esc e camada acima da página)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();

    // O dialog não trava a rolagem da página sozinho
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const slide = index !== null ? slides[index] : null;

  const go = (delta: number) => {
    if (index === null) return;
    onIndexChange((index + delta + slides.length) % slides.length);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
    >
      {slide && (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
          onClick={(e) => {
            // Clique fora da imagem e dos botões fecha
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="relative min-h-0 w-full flex-1">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="font-maven text-center text-sm" style={{ color: '#C0C4CE' }}>
            {slide.alt}
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute right-4 top-4 rounded-full border p-2 transition-opacity hover:opacity-80"
            style={buttonStyle}
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={previousLabel}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80"
            style={buttonStyle}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={nextLabel}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80"
            style={buttonStyle}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </dialog>
  );
}
