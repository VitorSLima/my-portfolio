"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border px-2 py-1" style={{ borderColor: '#292C34' }}>
      <button
        onClick={() => setLocale("pt")}
        className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
          locale === "pt" 
            ? "bg-primary text-white" 
            : "text-gray-400 hover:text-white"
        }`}
        style={locale === "pt" ? { backgroundColor: '#3996DB' } : {}}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
          locale === "en" 
            ? "bg-primary text-white" 
            : "text-gray-400 hover:text-white"
        }`}
        style={locale === "en" ? { backgroundColor: '#3996DB' } : {}}
      >
        EN
      </button>
    </div>
  );
}
