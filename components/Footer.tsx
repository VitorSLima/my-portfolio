"use client";

import { ArrowUp } from "lucide-react";

import Container from "./Container";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t" style={{ borderColor: '#1B2029' }}>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7 text-sm">
        <p style={{ color: '#8B93A7' }}>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 transition-colors hover:!text-[#F2F4F8]"
          style={{ color: '#8B93A7' }}
        >
          {t.footer.backToTop}
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
