"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border px-1 py-0.5 sm:gap-1 sm:px-2 sm:py-1" style={{ borderColor: '#232833' }}>
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-label="Português"
        aria-pressed={locale === "pt"}
        className={`rounded px-1.5 py-1 text-xs sm:px-2 font-medium transition-colors ${
          locale === "pt" 
            ? "bg-primary text-white" 
            : "text-gray-400 hover:text-white"
        }`}
        style={locale === "pt" ? { backgroundColor: '#4DA3F0' } : {}}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label="English"
        aria-pressed={locale === "en"}
        className={`rounded px-1.5 py-1 text-xs sm:px-2 font-medium transition-colors ${
          locale === "en" 
            ? "bg-primary text-white" 
            : "text-gray-400 hover:text-white"
        }`}
        style={locale === "en" ? { backgroundColor: '#4DA3F0' } : {}}
      >
        EN
      </button>
    </div>
  );
}
