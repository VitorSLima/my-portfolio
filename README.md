# Portfolio Next.js

Portfolio single-page em Next.js (App Router) com TailwindCSS + DaisyUI, seguindo o style guide dark e moderno.

## Stack

- Next.js + TypeScript
- TailwindCSS + DaisyUI
- Lucide Icons

## Estrutura

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Container.tsx
  Section.tsx
  TechChip.tsx
  ProjectCard.tsx
  ServiceCard.tsx
  SocialButton.tsx
  Header.tsx
lib/
  data.ts
public/
  background-intro.png
  background-contacts.png
  projects/
    proj-1.png
    proj-2.png
    proj-3.png
    proj-4.png
    proj-5.png
    proj-6.png
```

## Como rodar

```bash
npm install
npm run dev
```

## Como personalizar

### 1) Nome, textos e seções
Edite os textos diretamente em `app/page.tsx`. O nome principal esta na constante `NAME` no topo do arquivo.

### 2) Tecnologias (chips)
Edite o array `techs` em `lib/data.ts`.

### 3) Projetos
Edite o array `projects` em `lib/data.ts`.

- Thumbnails: coloque em `public/projects/` e ajuste o campo `image`
- Paths sugeridos: `/projects/proj-1.png`, `/projects/proj-2.png`, etc.

### 4) Serviços
Edite o array `services` em `lib/data.ts`.

### 5) Links sociais
Edite o array `socials` em `lib/data.ts`.

### 6) Imagens de background
As imagens usadas pelas seções Hero e Contato estao em `public/`:

- Hero: `public/background-intro.png`
- Contato: `public/background-contacts.png`

Para trocar, substitua as imagens mantendo o mesmo nome, ou altere o src em `app/page.tsx`.

## Tema DaisyUI

O tema customizado `portfolio` esta configurado em `tailwind.config.ts` e ativado por padrao em `app/layout.tsx` via `data-theme="portfolio"`.

Cores do tema:

- Primarias: `#E3646E`, `#BB72E9`, `#3996DB`, `#82BC4F`, `#EABD5F`
- Base: `#E2E4E9`, `#C0C4CE`, `#878EA1`, `#292C34`, `#16181D`, `#0D0E11`

Para alterar, edite o objeto `portfolio` em `tailwind.config.ts`.
