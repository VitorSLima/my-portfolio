"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header 
      className="fixed top-0 z-50 w-full border-b backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(13, 14, 17, 0.8)',
        borderColor: 'rgba(41, 44, 52, 0.5)'
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        {/* Spacer for balance */}
        <div className="w-16" />
        {/* Centered navigation */}
        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: '#C0C4CE' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Language switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
