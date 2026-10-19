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
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      style={{ backgroundColor: 'rgba(10, 12, 17, 0.75)' }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/#home"
          className="font-asap hidden text-base font-bold tracking-tight sm:block"
          style={{ color: '#F2F4F8' }}
        >
          Vitor Lima
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
          {links.map((link) => {
            const isActive = pathname === "/" && link.href === `/#${active}`;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className="rounded-lg px-2 py-2 text-xs transition-colors hover:!text-[#F2F4F8] sm:px-3 sm:text-sm"
                style={{ color: isActive ? '#4DA3F0' : '#8B93A7' }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
