"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [active, setActive] = useState("home");

  const links = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  // Destaca no menu a seção que está na tela (só na home)
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links
      .map((link) => document.getElementById(link.href.replace("/#", "")))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header 
      className="fixed top-0 z-50 w-full border-b backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(13, 14, 17, 0.8)',
        borderColor: 'rgba(41, 44, 52, 0.5)'
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-3 sm:px-6">
        {/* Spacer for balance */}
        <div className="hidden w-16 sm:block" />
        {/* Centered navigation */}
        <nav className="flex items-center sm:gap-2">
          {links.map((link) => {
            const isActive = pathname === "/" && link.href === `/#${active}`;
            return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              className="rounded-lg px-1.5 py-2 text-xs transition-colors hover:bg-white/5 sm:px-3 sm:text-sm"
              style={{ color: isActive ? '#3996DB' : '#C0C4CE' }}
            >
              {link.label}
            </Link>
            );
          })}
        </nav>
        {/* Language switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
