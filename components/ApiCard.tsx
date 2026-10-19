"use client";

import Image from "next/image";

import { useLanguage } from "@/lib/LanguageContext";

const NAME = "Vitor dos Santos Lima";

const key = "#4DA3F0";
const str = "#E8C27A";

// Cartão do hero: o perfil apresentado como a resposta de uma chamada de API
export default function ApiCard() {
  const { t } = useLanguage();
  const card = t.hero.card;

  return (
    <div
      className="w-full max-w-lg rounded-2xl border p-7"
      style={{
        backgroundColor: '#10131A',
        borderColor: '#232833',
        boxShadow: '0 30px 80px -40px rgba(77, 163, 240, 0.35)',
      }}
    >
      <p className="font-inconsolata mb-6 flex justify-between text-sm" style={{ color: '#8B93A7' }}>
        <span>
          <span style={{ color: key }}>GET</span> /vitor-lima
        </span>
        <span style={{ color: '#4ADE80' }}>200 OK</span>
      </p>

      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpeg"
          alt={NAME}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
        <div>
          <p className="font-asap text-lg font-bold" style={{ color: '#F2F4F8' }}>
            {NAME}
          </p>
          <p className="text-sm" style={{ color: '#8B93A7' }}>
            {card.location}
          </p>
        </div>
      </div>

      <pre
        className="font-inconsolata mt-6 overflow-x-auto whitespace-pre-wrap text-[13px] sm:whitespace-pre leading-[1.85] sm:text-sm"
        style={{ color: '#B7BDCC' }}
      >
        {"{\n  "}
        <span style={{ color: key }}>{`"${card.focusKey}"`}</span>
        {": "}
        <span style={{ color: str }}>{`"${card.focus}"`}</span>
        {",\n  "}
        <span style={{ color: key }}>{`"${card.stackKey}"`}</span>
        {": ["}
        <span style={{ color: str }}>&quot;Next.js&quot;</span>
        {", "}
        <span style={{ color: str }}>&quot;NestJS&quot;</span>
        {", "}
        <span style={{ color: str }}>&quot;PostgreSQL&quot;</span>
        {"],\n  "}
        <span style={{ color: key }}>{`"${card.projectsKey}"`}</span>
        {": "}
        <span style={{ color: str }}>3</span>
        {"\n}"}
      </pre>
    </div>
  );
}
