# Projetos BeautyDesk e Comandei no portfólio — Design

## Contexto

A seção "Meu trabalho" mostra 6 cards: um real ("Barber Shop") e cinco "lorem ipsum" que apontam para imagens inexistentes (`/projects/proj-2.png` a `proj-6.png`). Desde então:

- O Barber Shop virou **BeautyDesk**: deixou de ser exclusivo para barbearias e ganhou assinatura, notificações e painel administrativo.
- O **Comandei** (sistema de comandas para bares e restaurantes) foi criado e está no ar. O projeto se chamava "saideira-bar"; esse nome não deve aparecer em lugar nenhum do portfólio.

Os cards hoje não levam a lugar nenhum (têm `cursor-pointer`, mas não são links) e não mostram a stack.

Os dados de projeto estão em três lugares: `lib/data.ts` (`projects`, não usado pela página), `lib/translations.ts` (título e descrição por idioma) e `projectImages` em `app/page.tsx`. Texto e imagem são casados pelo índice do array.

## Objetivo

A grade passa a mostrar dois projetos reais, BeautyDesk e Comandei, cada um com imagem atual, descrição em PT e EN, etiquetas de stack e link para o site no ar.

## Decisões

1. **Fonte única dos dados em `lib/data.ts`.** Cada projeto tem `slug`, `image`, `url` e `techs`. As traduções guardam só `title` e `description`, indexados pelo `slug`. Alternativas descartadas: repetir imagem, link e stack nos dois idiomas em `translations.ts`; manter o casamento por índice com listas paralelas, que troca o link de um projeto pelo de outro, sem erro, ao reordenar.
2. **Link só para o site.** Os dois repositórios são privados no GitHub, então não há link "ver código".
3. **O card inteiro é o link**, abrindo em nova aba.
4. **Grade de 2 colunas centralizada**, já que são dois cards.

## Dados

`lib/data.ts`:

```ts
type ProjectItem = {
  slug: ProjectSlug;
  image: string;
  url: string;
  techs: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "beautydesk",
    image: "/projects/beautydesk.png",
    url: "https://beautydesk-manager.vercel.app",
    techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    slug: "comandei",
    image: "/projects/comandei.png",
    url: "https://comandei.vercel.app",
    techs: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Stripe"],
  },
];
```

`ProjectSlug` é `"beautydesk" | "comandei"`, exportado de `lib/translations.ts` e usado nos dois arquivos, de modo que um slug sem tradução vira erro de tipo.

`lib/translations.ts`: `projects` deixa de ser array e vira `Record<ProjectSlug, { title: string; description: string }>` em `pt` e `en`. O tipo `Translations` acompanha.

| Slug | Idioma | Título | Descrição |
|---|---|---|---|
| `beautydesk` | pt | BeautyDesk | Plataforma de agendamento para barbearias, salões e outros negócios de beleza: reserva online, gestão de serviços e profissionais, notificações e assinatura. |
| `beautydesk` | en | BeautyDesk | A booking platform for barbershops, salons and other beauty businesses: online scheduling, service and staff management, notifications and subscriptions. |
| `comandei` | pt | Comandei | Sistema de comandas para bares e restaurantes: o atendente lança pedidos por mesa e o dono fecha contas, gerencia cardápio e equipe e acompanha o financeiro. |
| `comandei` | en | Comandei | A tab management system for bars and restaurants: staff add orders per table while the owner closes tabs, manages the menu and team, and tracks revenue. |

## Componentes

**`components/ProjectCard.tsx`**

- Recebe `title`, `description`, `image`, `url` e `techs`.
- O elemento raiz passa de `<div>` para `<a href={url} target="_blank" rel="noopener noreferrer">`, com `block` para manter o layout. O hover atual (borda `#3996DB`, brilho, leve subida) não muda.
- Abaixo da descrição, uma linha `flex flex-wrap gap-2` com uma etiqueta por tecnologia: texto pequeno em `font-inconsolata`, cor `#C0C4CE`, borda `#292C34`, cantos arredondados. São só texto, sem ícone; o `TechChip` do hero exige imagem e não é reutilizado.

**`app/page.tsx`**

- Remove a constante `projectImages`.
- Importa `projects` de `lib/data` e itera sobre ele, lendo o texto em `t.projects[project.slug]`. A `key` passa a ser o `slug`.
- A grade passa de `sm:grid-cols-2 lg:grid-cols-3` para `mx-auto max-w-4xl sm:grid-cols-2`.

## Imagens

- `public/projects/beautydesk.png`: captura da home pública de `https://beautydesk-manager.vercel.app`.
- `public/projects/comandei.png`: captura do mapa de mesas. O Comandei não tem página de apresentação (a raiz redireciona para `/login`), então a captura é feita com o projeto rodando localmente, logado como o dono do estabelecimento de seed.
- `public/projects/barber-shop.png` é removido.
- As capturas têm proporção larga, compatível com a figura do card (`h-44`, `object-cover`), e são mostradas ao usuário antes do commit.

**Cuidado com o banco do Comandei.** O `.env.local` do projeto foi gerado pela Vercel CLI e aponta para um banco Neon que pode ser o de produção. Por isso `pnpm db:seed` e `pnpm db:migrate` não são executados. A captura só é usada se a tela mostrar dados de demonstração; se aparecerem dados de um cliente real, a captura é descartada e a decisão volta para o usuário.

## Fora do escopo

- Hero, chips de tecnologia, seção de serviços e contato.
- Outros projetos além dos dois.
- Página de detalhe por projeto.
- Alterações nos repositórios do BeautyDesk e do Comandei.

## Verificação

O projeto não tem testes automatizados.

- `npm run lint` e `npm run build` sem erros.
- No navegador, em PT e EN, em largura de desktop e de celular: dois cards, imagens carregando, etiquetas de stack visíveis, e cada card abrindo o site certo em nova aba.
- `grep -ri saideira` em `app/`, `components/`, `lib/` e `public/` não retorna nada (a única menção fica no contexto desta spec).
