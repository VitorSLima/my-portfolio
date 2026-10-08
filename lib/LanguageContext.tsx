"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Locale, Translations } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const pathname = usePathname();

  useEffect(() => {
    // Idioma salvo no localStorage; sem preferência salva, segue o do navegador
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "pt" || saved === "en")) {
      setLocaleState(saved);
    } else if (navigator.language.toLowerCase().startsWith("pt")) {
      setLocaleState("pt");
    }
  }, []);

  // Atualizar o atributo lang do HTML quando o idioma mudar
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  // Título e descrição da aba acompanham o idioma (a página de projeto define os próprios).
  // O Next reaplica o título estático depois da hidratação, então o observador o corrige.
  useEffect(() => {
    if (pathname !== "/") return;
    const meta = translations[locale].meta;
    const apply = () => {
      if (document.title !== meta.title) document.title = meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    };
    apply();
    const titleEl = document.querySelector("title");
    if (!titleEl) return;
    const observer = new MutationObserver(apply);
    observer.observe(titleEl, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [locale, pathname]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
