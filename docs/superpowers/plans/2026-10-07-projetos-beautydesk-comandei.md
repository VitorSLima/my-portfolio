# Projetos BeautyDesk e Comandei — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A seção "Meu trabalho" mostra BeautyDesk e Comandei em cards enxutos, e cada projeto ganha uma página `/projetos/[slug]` com carrossel de telas, descrição, funcionalidades, stack e link para o site.

**Architecture:** Os dados estruturais de cada projeto (slug, capa, URL, stack, lista de telas) ficam em `lib/data.ts`; os textos em PT e EN ficam em `lib/translations.ts`, indexados pelo slug. A página de detalhe é uma rota estática do App Router que renderiza um componente client (`ProjectDetail`), porque o idioma vem do `LanguageContext`. O carrossel usa rolagem nativa com `scroll-snap`, sem biblioteca.

**Tech Stack:** Next.js 16.1 (App Router), React 19, TypeScript, Tailwind CSS 4, lucide-react.

**Spec:** `docs/superpowers/specs/2026-10-07-projetos-beautydesk-comandei-design.md`

**Branch:** `feat/projetos-beautydesk-comandei` (já criada; todos os commits vão nela).

## Notas para quem executa

- **Sem testes automatizados.** O projeto não tem framework de teste e a spec não pede um. A verificação de cada tarefa é `npm run lint`, `npm run build` e conferência no navegador. Não instale Vitest/Jest.
- **Estilo do código existente:** cores em `style={{ ... }}` com hex literal, classes utilitárias do Tailwind para layout, fontes pelas classes `font-asap` (títulos), `font-inconsolata` (rótulos/código) e `font-maven` (texto). Siga esse padrão.
- **Paleta:** fundo `#0D0E11`, superfície `#16181D`, borda `#292C34`, destaque `#3996DB`, título `#E2E4E9`, texto claro `#C0C4CE`, texto apagado `#878EA1`.
- **Next 16:** em rotas dinâmicas, `params` é uma `Promise` e precisa de `await`.
- **O nome "saideira" não pode aparecer** em `app/`, `components/`, `lib/` nem `public/`.
- **Imagens ausentes até a Tarefa 6.** Entre as Tarefas 2 e 5 os arquivos em `public/projects/<slug>/` ainda não existem; o build passa e o navegador mostra imagem quebrada. Isso é esperado.
- Todo commit termina com a linha `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Se `node_modules` não existir, rode `npm install` antes da primeira verificação.

## Estrutura de arquivos

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `components/TechTag.tsx` | criar | Etiqueta de texto de uma tecnologia |
| `lib/translations.ts` | modificar | Textos dos projetos por slug e rótulos de interface |
| `lib/data.ts` | modificar | Dados estruturais dos projetos, `getProject`, `screenshotSrc` |
| `components/ProjectCard.tsx` | reescrever | Card enxuto com link para a página e botão "Ver site" |
| `app/page.tsx` | modificar | Grade iterando `projects` |
| `public/projects/barber-shop.png` | remover | Capa da marca antiga |
| `components/Header.tsx` | modificar | Links absolutos (`/#work`) com `next/link` |
| `components/Carousel.tsx` | criar | Carrossel de imagens com setas, indicadores e legenda |
| `components/ProjectDetail.tsx` | criar | Conteúdo da página de um projeto |
| `app/projetos/[slug]/page.tsx` | criar | Rota estática, metadata e 404 |
| `components/index.ts` | modificar | Exportar os componentes novos |
| `public/projects/beautydesk/*.png` | criar | Capa e 3 telas |
| `public/projects/comandei/*.png` | criar | Capa e 5 telas |

---

### Task 1: Componente TechTag

**Files:**
- Create: `components/TechTag.tsx`
- Modify: `components/index.ts`

- [ ] **Step 1: Criar o componente**

`components/TechTag.tsx`:

```tsx
type TechTagProps = {
  label: string;
};

export default function TechTag({ label }: TechTagProps) {
  return (
    <span
      className="font-inconsolata rounded-md border px-2 py-0.5 text-xs"
      style={{
        borderColor: '#292C34',
        color: '#C0C4CE',
      }}
    >
      {label}
    </span>
  );
}
```

- [ ] **Step 2: Exportar no índice**

Em `components/index.ts`, adicionar ao final:

```ts
export { default as TechTag } from "./TechTag";
```

- [ ] **Step 3: Verificar**

Run: `npm run lint`
Expected: termina sem erros.

- [ ] **Step 4: Commit**

```bash
git add components/TechTag.tsx components/index.ts
git commit -m "feat: add TechTag component

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Dados dos projetos, card enxuto e grade

As quatro mudanças vão no mesmo commit porque a troca do formato de `projects` nas traduções quebra `app/page.tsx` até ele ser atualizado.

**Files:**
- Modify: `lib/translations.ts`
- Modify: `lib/data.ts`
- Rewrite: `components/ProjectCard.tsx`
- Modify: `app/page.tsx`
- Delete: `public/projects/barber-shop.png`

- [ ] **Step 1: Traduções — tipo do slug**

Em `lib/translations.ts`, logo abaixo de `export type Locale = "pt" | "en";`, adicionar:

```ts
export type ProjectSlug = "beautydesk" | "comandei";
```

- [ ] **Step 2: Traduções — bloco `pt`**

Em `lib/translations.ts`, dentro de `pt`, substituir todo o trecho que vai de `// Projects` até o `],` que fecha o array `projects` por:

```ts
    // Rótulos da página e do card de projeto
    project: {
      viewSite: "Ver site",
      back: "Voltar aos projetos",
      features: "Funcionalidades",
      stack: "Tecnologias",
      previous: "Imagem anterior",
      next: "Próxima imagem",
    },
    // Projects
    projects: {
      beautydesk: {
        title: "BeautyDesk",
        tagline: "Agendamento online para negócios de beleza",
        description:
          "Plataforma de agendamento para barbearias, salões e outros negócios de beleza. O cliente encontra o estabelecimento e reserva um horário; o profissional gerencia agenda, serviços, equipe e financeiro em um painel próprio, com notificações e assinatura do plano.",
        features: [
          "Busca de estabelecimentos e reserva de horário online",
          "Painel do profissional com agenda, clientes e financeiro",
          "Cadastro de serviços e equipe",
          "Notificações de agendamento",
          "Assinatura de plano com Stripe",
          "Painel administrativo da plataforma",
        ],
        screenshots: {
          estabelecimento: "Página do estabelecimento com serviços e reserva",
          servicos: "Gestão de serviços no painel do profissional",
          financeiro: "Financeiro do profissional",
        },
      },
      comandei: {
        title: "Comandei",
        tagline: "Comandas para bares e restaurantes",
        description:
          "Sistema de atendimento por mesa para bares e restaurantes. O atendente escolhe a mesa e lança os itens do cardápio; o dono acompanha as contas abertas, fecha cada conta com desconto, taxa de serviço e divisão por pessoas, e consulta histórico e financeiro. Cada estabelecimento vê só os próprios dados.",
        features: [
          "Mapa de mesas com contas abertas",
          "Lançamento de pedidos pelo atendente",
          "Fechamento com desconto, taxa de serviço e divisão por pessoas",
          "Cardápio e equipe gerenciados pelo dono",
          "Histórico e financeiro",
          "Vários estabelecimentos com dados isolados",
          "Assinatura com 7 dias grátis via Stripe",
        ],
        screenshots: {
          mesas: "Mapa de mesas com contas abertas",
          pedido: "Lançamento de pedidos da mesa",
          fechamento: "Fechamento de conta",
          cardapio: "Gestão do cardápio",
          financeiro: "Resumo financeiro",
        },
      },
    },
```

- [ ] **Step 3: Traduções — bloco `en`**

Dentro de `en`, substituir do mesmo modo o trecho de `// Projects` até o `],` que fecha o array por:

```ts
    // Project page and card labels
    project: {
      viewSite: "View site",
      back: "Back to projects",
      features: "Features",
      stack: "Tech stack",
      previous: "Previous image",
      next: "Next image",
    },
    // Projects
    projects: {
      beautydesk: {
        title: "BeautyDesk",
        tagline: "Online booking for beauty businesses",
        description:
          "A booking platform for barbershops, salons and other beauty businesses. Customers find a place and book a time slot; professionals manage their schedule, services, team and revenue from their own dashboard, with notifications and plan subscriptions.",
        features: [
          "Business search and online booking",
          "Professional dashboard with schedule, clients and revenue",
          "Service and team management",
          "Booking notifications",
          "Plan subscriptions with Stripe",
          "Platform admin panel",
        ],
        screenshots: {
          estabelecimento: "Business page with services and booking",
          servicos: "Service management in the professional dashboard",
          financeiro: "Professional revenue overview",
        },
      },
      comandei: {
        title: "Comandei",
        tagline: "Tab management for bars and restaurants",
        description:
          "A table service system for bars and restaurants. Staff pick a table and add items from the menu; the owner tracks open tabs, closes each one with discounts, service charge and bill splitting, and reviews history and revenue. Each business only sees its own data.",
        features: [
          "Table map with open tabs",
          "Order entry by staff",
          "Checkout with discounts, service charge and bill splitting",
          "Menu and team managed by the owner",
          "History and revenue",
          "Multiple businesses with isolated data",
          "Subscription with a 7-day free trial via Stripe",
        ],
        screenshots: {
          mesas: "Table map with open tabs",
          pedido: "Order entry for a table",
          fechamento: "Closing a tab",
          cardapio: "Menu management",
          financeiro: "Revenue summary",
        },
      },
    },
```

- [ ] **Step 4: Traduções — tipo `Translations`**

No final de `lib/translations.ts`, dentro de `export type Translations = { ... }`, substituir:

```ts
  projects: Array<{
    title: string;
    description: string;
  }>;
```

por:

```ts
  project: {
    viewSite: string;
    back: string;
    features: string;
    stack: string;
    previous: string;
    next: string;
  };
  projects: Record<ProjectSlug, ProjectText>;
```

e, imediatamente antes de `export type Translations`, adicionar:

```ts
export type ProjectText = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  screenshots: Record<string, string>;
};
```

- [ ] **Step 5: Dados — tipos e lista de projetos**

Em `lib/data.ts`, adicionar abaixo do import do `lucide-react`:

```ts
import type { ProjectSlug } from "./translations";
```

Substituir o tipo `ProjectItem` por:

```ts
type ScreenshotKey = string;

type ProjectItem = {
  slug: ProjectSlug;
  cover: string;
  url: string;
  techs: string[];
  screenshots: ScreenshotKey[];
};
```

Substituir todo o bloco que vai do comentário `// PROJETOS` (incluindo as linhas `// ===` em volta) até o `];` que fecha `projects` por:

```ts
// ==========================================
// PROJETOS
// Imagens em /public/projects/<slug>/
// Textos em lib/translations.ts, pelo slug
// ==========================================
export const projects: ProjectItem[] = [
  {
    slug: "beautydesk",
    cover: "/projects/beautydesk/cover.png",
    url: "https://beautydesk-manager.vercel.app",
    techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    screenshots: ["estabelecimento", "servicos", "financeiro"],
  },
  {
    slug: "comandei",
    cover: "/projects/comandei/cover.png",
    url: "https://comandei.vercel.app",
    techs: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Stripe"],
    screenshots: ["mesas", "pedido", "fechamento", "cardapio", "financeiro"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function screenshotSrc(slug: ProjectSlug, key: ScreenshotKey) {
  return `/projects/${slug}/${key}.png`;
}
```

- [ ] **Step 6: Reescrever o ProjectCard**

Conteúdo completo de `components/ProjectCard.tsx`:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import TechTag from "./TechTag";

type ProjectCardProps = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  url: string;
  techs: string[];
  viewSiteLabel: string;
};

export default function ProjectCard({
  slug,
  title,
  tagline,
  cover,
  url,
  techs,
  viewSiteLabel,
}: ProjectCardProps) {
  return (
    <div 
      className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3996DB';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 150, 219, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292C34';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Link href={`/projetos/${slug}`} className="block">
        <figure className="relative h-44 w-full overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        <h3 className="font-asap px-4 pt-4 text-lg font-semibold" style={{ color: '#E2E4E9' }}>
          {title}
        </h3>
      </Link>
      <div className="px-4 pb-4 pt-2">
        <p className="mb-3 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
          {tagline}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: '#3996DB' }}
        >
          {viewSiteLabel}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Atualizar a grade em `app/page.tsx`**

Trocar o import:

```tsx
import { socials, techs } from "@/lib/data";
```

por:

```tsx
import { projects, socials, techs } from "@/lib/data";
```

Remover o bloco inteiro:

```tsx
// Imagens dos projetos
const projectImages = [
  "/projects/barber-shop.png",
  "/projects/proj-2.png",
  "/projects/proj-3.png",
  "/projects/proj-4.png",
  "/projects/proj-5.png",
  "/projects/proj-6.png",
];

```

Substituir:

```tsx
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={projectImages[index]}
                />
              ))}
            </div>
```

por:

```tsx
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={t.projects[project.slug].title}
                  tagline={t.projects[project.slug].tagline}
                  cover={project.cover}
                  url={project.url}
                  techs={project.techs}
                  viewSiteLabel={t.project.viewSite}
                />
              ))}
            </div>
```

- [ ] **Step 8: Remover a capa antiga**

```bash
git rm -q public/projects/barber-shop.png
```

- [ ] **Step 9: Verificar**

Run: `npm run lint && npm run build`
Expected: os dois terminam sem erros. O build ainda lista só a rota `/` (e `/_not-found`).

Run: `grep -rn "barber-shop\|lorem\|proj-[0-9]" app components lib`
Expected: nenhuma saída.

- [ ] **Step 10: Commit**

```bash
git add lib/translations.ts lib/data.ts components/ProjectCard.tsx app/page.tsx
git commit -m "feat: replace placeholder projects with BeautyDesk and Comandei cards

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Links do cabeçalho funcionando fora da home

**Files:**
- Modify: `components/Header.tsx` (hrefs absolutos e `next/link`)

- [ ] **Step 1: Trocar os hrefs**

Em `components/Header.tsx`, substituir:

```tsx
    { label: t.nav.home, href: "#home" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
```

por:

```tsx
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.contact, href: "/#contact" },
```

- [ ] **Step 2: Trocar `<a>` por `next/link`**

A regra de lint `@next/next/no-html-link-for-pages` rejeita `<a>` apontando para uma página interna. Adicionar no topo do arquivo, abaixo de `"use client";`:

```tsx
import Link from "next/link";
```

e, dentro do `<nav>`, substituir:

```tsx
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: '#C0C4CE' }}
            >
              {link.label}
            </a>
```

por:

```tsx
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: '#C0C4CE' }}
            >
              {link.label}
            </Link>
```

- [ ] **Step 3: Verificar**

Run: `npm run lint`
Expected: sem erros.

Run: `npm run dev`, abrir `http://localhost:3000` e clicar em cada item do cabeçalho.
Expected: a página rola até a seção correspondente sem recarregar.

- [ ] **Step 4: Commit**

```bash
git add components/Header.tsx
git commit -m "fix: make header links work from pages other than home

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Componente Carousel

**Files:**
- Create: `components/Carousel.tsx`
- Modify: `components/index.ts`

- [ ] **Step 1: Criar o componente**

`components/Carousel.tsx`:

```tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
};

type CarouselProps = {
  slides: Slide[];
  previousLabel: string;
  nextLabel: string;
};

export default function Carousel({ slides, previousLabel, nextLabel }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
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
          style={{ backgroundColor: '#16181D', borderColor: '#292C34' }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative aspect-[16/10] w-full shrink-0 snap-center">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
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
          style={{ backgroundColor: 'rgba(13, 14, 17, 0.8)', borderColor: '#292C34', color: '#E2E4E9' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={isLast}
          aria-label={nextLabel}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border p-2 transition-opacity hover:opacity-80 disabled:opacity-30"
          style={{ backgroundColor: 'rgba(13, 14, 17, 0.8)', borderColor: '#292C34', color: '#E2E4E9' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Legenda do slide atual */}
      <p className="font-maven mt-4 text-center text-sm" style={{ color: '#C0C4CE' }}>
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
            style={{ backgroundColor: index === current ? '#3996DB' : '#292C34' }}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Exportar no índice**

Em `components/index.ts`, adicionar ao final:

```ts
export { default as Carousel } from "./Carousel";
```

- [ ] **Step 3: Verificar**

Run: `npm run lint`
Expected: sem erros. (O comportamento é conferido no navegador na Tarefa 5, quando o componente passa a ser usado.)

- [ ] **Step 4: Commit**

```bash
git add components/Carousel.tsx components/index.ts
git commit -m "feat: add scroll-snap Carousel component

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Página do projeto

**Files:**
- Create: `components/ProjectDetail.tsx`
- Create: `app/projetos/[slug]/page.tsx`
- Modify: `components/index.ts`

- [ ] **Step 1: Criar o ProjectDetail**

`components/ProjectDetail.tsx`:

```tsx
"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import Carousel from "./Carousel";
import Container from "./Container";
import TechTag from "./TechTag";
import { getProject, screenshotSrc } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import type { ProjectSlug } from "@/lib/translations";

type ProjectDetailProps = {
  slug: ProjectSlug;
};

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t } = useLanguage();
  const project = getProject(slug);

  if (!project) return null;

  const text = t.projects[slug];
  const slides = project.screenshots.map((key) => ({
    src: screenshotSrc(slug, key),
    alt: text.screenshots[key],
  }));

  return (
    <Container className="max-w-4xl">
      {/* Voltar */}
      <Link
        href="/#work"
        className="font-inconsolata mb-8 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
        style={{ color: '#878EA1' }}
      >
        <ArrowLeft size={16} />
        {t.project.back}
      </Link>

      {/* Cabeçalho */}
      <h1 className="font-asap mb-2 text-3xl font-bold sm:text-4xl" style={{ color: '#E2E4E9' }}>
        {text.title}
      </h1>
      <p className="font-inconsolata mb-8 text-base" style={{ color: '#3996DB' }}>
        {text.tagline}
      </p>

      {/* Telas do sistema */}
      <Carousel
        slides={slides}
        previousLabel={t.project.previous}
        nextLabel={t.project.next}
      />

      {/* Descrição */}
      <p className="font-maven mt-10 text-base leading-relaxed" style={{ color: '#C0C4CE' }}>
        {text.description}
      </p>

      {/* Funcionalidades */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#E2E4E9' }}>
        {t.project.features}
      </h2>
      <ul className="font-maven list-disc space-y-2 pl-5 text-sm" style={{ color: '#878EA1' }}>
        {text.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Tecnologias */}
      <h2 className="font-asap mb-4 mt-10 text-xl font-semibold" style={{ color: '#E2E4E9' }}>
        {t.project.stack}
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {/* Link do site */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#3996DB', color: '#0D0E11' }}
      >
        {t.project.viewSite}
        <ExternalLink size={16} />
      </a>
    </Container>
  );
}
```

O link "voltar" usa `next/link`, igual aos do cabeçalho; o Next rola até a âncora `#work` ao chegar na home.

- [ ] **Step 2: Criar a rota**

`app/projetos/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, projects } from "@/lib/data";
import { translations } from "@/lib/translations";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Só os slugs conhecidos existem; qualquer outro dá 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const text = translations.pt.projects[project.slug];

  return {
    title: `${text.title} | Vitor Lima`,
    description: text.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0E11' }}>
      <Header />
      <main className="pb-20 pt-28">
        <ProjectDetail slug={project.slug} />
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Exportar no índice**

Em `components/index.ts`, adicionar ao final:

```ts
export { default as ProjectDetail } from "./ProjectDetail";
```

- [ ] **Step 4: Verificar lint e build**

Run: `npm run lint && npm run build`
Expected: sem erros. A tabela de rotas do build mostra `/projetos/[slug]` como SSG (`●`) com `/projetos/beautydesk` e `/projetos/comandei` listados abaixo.

- [ ] **Step 5: Verificar no navegador**

Run: `npm run dev`

- `http://localhost:3000/projetos/comandei` e `/projetos/beautydesk` abrem com título, frase, carrossel (imagens quebradas por enquanto), descrição, funcionalidades, etiquetas e botão.
- Trocar o idioma no cabeçalho muda todos os textos da página.
- As setas e os pontos trocam de slide e a legenda acompanha; a seta anterior fica desabilitada no primeiro slide e a próxima no último.
- "Voltar aos projetos" e os links do cabeçalho levam às seções da home.
- Na home, clicar na capa ou no nome de um card abre a página do projeto.
- `http://localhost:3000/projetos/qualquer-coisa` mostra a página 404.

- [ ] **Step 6: Commit**

```bash
git add components/ProjectDetail.tsx components/index.ts "app/projetos/[slug]/page.tsx"
git commit -m "feat: add project detail page with screenshot carousel

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Capturas de tela

Depende do usuário: ele precisa estar logado nas contas de demonstração no Chrome. **Não rodar `seed` nem `migrate`, não criar, editar ou apagar nada nos sistemas: só navegar e capturar.**

**Files:**
- Create: `public/projects/beautydesk/{cover,estabelecimento,servicos,financeiro}.png`
- Create: `public/projects/comandei/{cover,mesas,pedido,fechamento,cardapio,financeiro}.png`

- [ ] **Step 1: Pedir o login ao usuário**

Pedir que ele entre, no Chrome, na conta demo de profissional em `https://beautydesk-manager.vercel.app` e na conta demo de dono em `https://comandei.vercel.app`, e avise quando estiver pronto. Nenhuma senha deve ser enviada pela conversa.

- [ ] **Step 2: Preparar pastas e navegador**

```bash
mkdir -p public/projects/beautydesk public/projects/comandei
```

Carregar as ferramentas do Chrome em uma chamada (`tabs_context_mcp`, `tabs_create_mcp`, `navigate`, `computer`, `resize_window`, `read_page`), chamar `tabs_context_mcp`, criar uma aba nova e redimensionar a janela para 1440×900.

- [ ] **Step 3: Capturar o BeautyDesk**

Navegar e capturar a área visível de cada tela, salvando com o nome indicado em `public/projects/beautydesk/`:

| Arquivo | URL |
|---|---|
| `home.png` | `https://beautydesk-manager.vercel.app/` |
| `estabelecimento.png` | abrir `/establishments`, clicar no primeiro estabelecimento da lista (`/establishments/<id>`) |
| `painel.png` | `/profissional` |
| `agendamentos.png` | `/profissional/agendamentos` |
| `servicos.png` | `/profissional/servicos` |
| `financeiro.png` | `/profissional/financeiro` |

- [ ] **Step 4: Capturar o Comandei**

Salvar em `public/projects/comandei/`:

| Arquivo | URL |
|---|---|
| `mesas.png` | `https://comandei.vercel.app/mesas` |
| `pedido.png` | clicar em uma mesa com conta aberta (`/mesas/<id>`) |
| `fechamento.png` | abrir `/admin/mesas`, clicar na mesma mesa (`/admin/mesas/<id>`), que mostra o fechamento da conta; **não confirmar o fechamento** |
| `cardapio.png` | `/admin/cardapio` |
| `financeiro.png` | `/admin/financeiro` |

- [ ] **Step 5: Conferir o conteúdo de cada captura**

Abrir cada PNG com a ferramenta Read. Descartar e refazer (ou retirar da lista em `lib/data.ts` e das legendas em `lib/translations.ts`) qualquer captura que mostre nome, telefone ou e-mail de pessoa real, ou que esteja em estado de erro ou carregamento. Em caso de dúvida sobre um dado ser real, perguntar ao usuário.

- [ ] **Step 6: Se a ferramenta não salvar o arquivo em disco**

Se a captura do Chrome não puder ser gravada como arquivo no projeto, pedir ao usuário que salve as 11 telas com os nomes exatos das tabelas acima, nas duas pastas, e seguir do Step 7.

- [ ] **Step 7: Capas e tamanho**

```bash
cp public/projects/beautydesk/home.png public/projects/beautydesk/cover.png
cp public/projects/comandei/mesas.png public/projects/comandei/cover.png
for f in public/projects/beautydesk/*.png public/projects/comandei/*.png; do
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/ {print $2}')
  if [ "$w" -gt 1600 ]; then sips --resampleWidth 1600 "$f" >/dev/null; fi
done
ls -lh public/projects/beautydesk public/projects/comandei
```

Expected: 7 arquivos em `beautydesk/` e 6 em `comandei/`, nenhum com mais de 1600 px de largura.

- [ ] **Step 8: Mostrar ao usuário e esperar o ok**

Listar os arquivos e pedir que o usuário confira as imagens (ou a página rodando em `npm run dev`) antes do commit. Só seguir com a aprovação dele.

- [ ] **Step 9: Commit**

```bash
git add public/projects/beautydesk public/projects/comandei
git commit -m "feat: add BeautyDesk and Comandei screenshots

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Verificação final

**Files:** nenhum arquivo novo; correções pontuais se algo falhar.

- [ ] **Step 1: Lint e build**

Run: `npm run lint && npm run build`
Expected: sem erros; `/projetos/beautydesk` e `/projetos/comandei` listados como páginas estáticas.

- [ ] **Step 2: Nome antigo e sobras**

Run: `grep -rni "saideira\|barber-shop\|lorem" app components lib public`
Expected: nenhuma saída.

Run: `for s in beautydesk comandei; do ls public/projects/$s; done`
Expected: cada arquivo citado em `screenshots` de `lib/data.ts` existe como `<chave>.png`, mais `cover.png`.

- [ ] **Step 3: Conferência no navegador**

Run: `npm run dev`. Em PT e em EN, em 1440 px e em 390 px de largura:

- Home: dois cards com capa, nome, frase, etiquetas e "Ver site"; nenhum card "lorem ipsum".
- Capa e nome abrem `/projetos/<slug>`; "Ver site" abre em nova aba `https://beautydesk-manager.vercel.app` e `https://comandei.vercel.app`, respectivamente.
- Página do projeto: todas as imagens do carrossel carregam inteiras, sem corte; setas, pontos e arraste trocam de slide; a legenda acompanha e muda com o idioma.
- Em 390 px: nada estoura a largura da tela; o cabeçalho continua utilizável.
- Console do navegador sem erros.

- [ ] **Step 4: Commit de correções, se houver**

Se algum passo exigiu ajuste, commitar com mensagem que descreva a correção. Se não, não há commit nesta tarefa.

- [ ] **Step 5: Encerrar a branch**

Usar a skill `superpowers:finishing-a-development-branch` para decidir com o usuário entre merge em `main`, PR ou manter a branch.
