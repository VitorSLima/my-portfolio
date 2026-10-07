# Projetos BeautyDesk e Comandei no portfólio — Design

## Contexto

A seção "Meu trabalho" mostra 6 cards: um real ("Barber Shop") e cinco "lorem ipsum" que apontam para imagens inexistentes (`/projects/proj-2.png` a `proj-6.png`). Desde então:

- O Barber Shop virou **BeautyDesk**: deixou de ser exclusivo para barbearias e ganhou assinatura, notificações e painel administrativo.
- O **Comandei** (sistema de comandas para bares e restaurantes) foi criado e está no ar. O projeto se chamava "saideira-bar"; esse nome não deve aparecer em lugar nenhum do portfólio.

Os dois sistemas ficam atrás de login, e o Comandei não tem página de apresentação (a raiz redireciona para `/login`). Quem só recebe o link do site não vê o produto.

Os cards hoje não levam a lugar nenhum (têm `cursor-pointer`, mas não são links) e não mostram a stack.

Os dados de projeto estão em três lugares: `lib/data.ts` (`projects`, não usado pela página), `lib/translations.ts` (título e descrição por idioma) e `projectImages` em `app/page.tsx`. Texto e imagem são casados pelo índice do array.

## Objetivo

1. A grade passa a mostrar dois projetos reais, BeautyDesk e Comandei, em cards enxutos: capa, nome, uma frase, etiquetas de stack e botão para o site.
2. Cada projeto ganha uma página própria, com carrossel de telas do sistema, descrição completa, funcionalidades, stack e link para o site.

## Decisões

1. **Página de detalhe em `/projetos/[slug]`**, gerada estaticamente para os dois slugs.
2. **Fonte única dos dados em `lib/data.ts`.** Cada projeto tem `slug`, `cover`, `url`, `techs` e `screenshots`. As traduções guardam os textos, indexados pelo `slug`. Alternativas descartadas: repetir imagem, link e stack nos dois idiomas em `translations.ts`; manter o casamento por índice com listas paralelas, que troca o link de um projeto pelo de outro, sem erro, ao reordenar.
3. **Card com dois destinos.** A capa e o nome levam à página do projeto; um botão separado "Ver site" abre a hospedagem em nova aba. O card não é um link único porque um link não pode conter outro.
4. **O card mantém uma frase curta.** Só o nome e as etiquetas não dizem o que o sistema é; a descrição longa fica na página.
5. **Link só para o site.** Os dois repositórios são privados no GitHub, então não há link "ver código".
6. **Carrossel sem biblioteca nova**, com rolagem nativa (`scroll-snap`), setas e indicadores.
7. **Grade de 2 colunas centralizada**, já que são dois cards.

## Dados

`lib/data.ts`:

```ts
type ProjectItem = {
  slug: ProjectSlug;
  cover: string;
  url: string;
  techs: string[];
  screenshots: ScreenshotKey[];
};
```

| Slug | `url` | `techs` |
|---|---|---|
| `beautydesk` | `https://beautydesk-manager.vercel.app` | Next.js, TypeScript, Prisma, PostgreSQL, Stripe |
| `comandei` | `https://comandei.vercel.app` | Next.js, TypeScript, Drizzle, PostgreSQL, Stripe |

`cover` é `/projects/<slug>/cover.png`. Cada item de `screenshots` é o nome de um arquivo sem extensão; a imagem fica em `/projects/<slug>/<chave>.png` e a legenda em `t.projects[slug].screenshots[chave]`.

`ProjectSlug` é `"beautydesk" | "comandei"`, exportado de `lib/translations.ts`. Exporta-se também `getProject(slug)`, que devolve o projeto ou `undefined`.

`lib/translations.ts`: `projects` deixa de ser array e vira `Record<ProjectSlug, ProjectText>` em `pt` e `en`:

```ts
type ProjectText = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  screenshots: Record<string, string>;
};
```

Entram também os rótulos de interface em `t.project`: `viewSite` ("Ver site" / "View site"), `back` ("Voltar aos projetos" / "Back to projects"), `features` ("Funcionalidades" / "Features"), `stack` ("Tecnologias" / "Tech stack"), `previous` e `next` (rótulos acessíveis das setas). O tipo `Translations` acompanha.

### Textos

| Slug | Campo | pt | en |
|---|---|---|---|
| `beautydesk` | `tagline` | Agendamento online para negócios de beleza | Online booking for beauty businesses |
| `beautydesk` | `description` | Plataforma de agendamento para barbearias, salões e outros negócios de beleza. O cliente encontra o estabelecimento e reserva um horário; o profissional gerencia agenda, serviços, equipe e financeiro em um painel próprio, com notificações e assinatura do plano. | A booking platform for barbershops, salons and other beauty businesses. Customers find a place and book a time slot; professionals manage their schedule, services, team and revenue from their own dashboard, with notifications and plan subscriptions. |
| `comandei` | `tagline` | Comandas para bares e restaurantes | Tab management for bars and restaurants |
| `comandei` | `description` | Sistema de atendimento por mesa para bares e restaurantes. O atendente escolhe a mesa e lança os itens do cardápio; o dono acompanha as contas abertas, fecha cada conta com desconto, taxa de serviço e divisão por pessoas, e consulta histórico e financeiro. Cada estabelecimento vê só os próprios dados. | A table service system for bars and restaurants. Staff pick a table and add items from the menu; the owner tracks open tabs, closes each one with discounts, service charge and bill splitting, and reviews history and revenue. Each business only sees its own data. |

`features` (pt; o inglês é a tradução direta):

- **BeautyDesk**: Busca de estabelecimentos e reserva de horário online · Painel do profissional com agenda, clientes e financeiro · Cadastro de serviços e equipe · Notificações de agendamento · Assinatura de plano com Stripe · Painel administrativo da plataforma
- **Comandei**: Mapa de mesas com contas abertas · Lançamento de pedidos pelo atendente · Fechamento com desconto, taxa de serviço e divisão por pessoas · Cardápio e equipe gerenciados pelo dono · Histórico e financeiro · Vários estabelecimentos com dados isolados · Assinatura com 7 dias grátis via Stripe

## Componentes

**`components/ProjectCard.tsx`**

- Recebe `slug`, `title`, `tagline`, `cover`, `url`, `techs` e `viewSiteLabel`.
- Raiz continua `<div>` com o hover atual (borda `#3996DB`, brilho, leve subida).
- Capa e nome ficam dentro de um `next/link` para `/projetos/<slug>`.
- Abaixo: a `tagline`, depois a linha de etiquetas de stack, depois o botão "Ver site" (`<a target="_blank" rel="noopener noreferrer">` com o ícone `ExternalLink` do `lucide-react`).

**`components/TechTag.tsx`** (novo)

- Etiqueta só de texto: `font-inconsolata`, texto pequeno, cor `#C0C4CE`, borda `#292C34`, cantos arredondados. Usada no card e na página. O `TechChip` do hero exige imagem e não é reutilizado.

**`components/Carousel.tsx`** (novo, client)

- Recebe `slides: { src: string; alt: string }[]` e os rótulos das setas.
- Trilho horizontal com `overflow-x-auto`, `snap-x snap-mandatory` e um slide por vez em proporção 16:10, com `next/image` e `object-contain` sobre fundo `#16181D`, para não cortar telas.
- Setas anterior/próximo que rolam o trilho com `scrollTo`; ficam desabilitadas nas pontas.
- Indicadores (um ponto por slide) que mostram o slide atual, calculado no evento de `scroll`, e levam ao slide ao clicar.
- A legenda do slide atual aparece abaixo do trilho.
- Arrastar com o dedo e as setas do teclado funcionam pela rolagem nativa; o trilho recebe foco (`tabIndex={0}`).

**`components/ProjectDetail.tsx`** (novo, client)

- Recebe `slug`, lê o projeto com `getProject` e os textos com `useLanguage`.
- Estrutura: link "Voltar aos projetos" para `/#work` · nome e `tagline` · `Carousel` · `description` · lista de `features` · etiquetas de stack · botão "Ver site".

**`components/Header.tsx`**

- Os links passam de `#home`, `#work`, `#services`, `#contact` para `/#home` etc., para funcionarem também a partir da página do projeto.

`components/index.ts` exporta os três componentes novos.

## Páginas

**`app/projetos/[slug]/page.tsx`** (server)

- `generateStaticParams` devolve os dois slugs; `dynamicParams = false`, de modo que qualquer outro slug dá 404.
- `generateMetadata` define o título como `<Nome> | Vitor Lima`.
- Renderiza `Header` e `ProjectDetail` dentro do mesmo fundo `#0D0E11`, com espaço no topo para o cabeçalho fixo.

**`app/page.tsx`**

- Remove a constante `projectImages`.
- Importa `projects` de `lib/data` e itera sobre ele, lendo os textos em `t.projects[project.slug]`. A `key` passa a ser o `slug`.
- A grade passa de `sm:grid-cols-2 lg:grid-cols-3` para `mx-auto max-w-4xl sm:grid-cols-2`.

## Imagens

Ficam em `public/projects/<slug>/`. `public/projects/barber-shop.png` é removido.

| Projeto | Capa | Telas do carrossel |
|---|---|---|
| BeautyDesk | home pública | home · página de um estabelecimento com reserva · painel do profissional · agendamentos · serviços · financeiro |
| Comandei | mapa de mesas | mapa de mesas · pedido de uma mesa · fechamento de conta · cardápio · financeiro |

**Origem das capturas.** Vêm das contas de demonstração que já existem em cada sistema em produção. O usuário entra na conta demo no próprio Chrome e as capturas são feitas nessa sessão, em janela de 1440×900; nenhuma senha passa pela conversa. Nada é gravado: as telas são só visitadas, e nenhum `seed` ou `migrate` é executado. Se alguma tela mostrar dado de cliente real (nome, telefone, e-mail), essa captura é descartada. Todas as imagens são mostradas ao usuário antes do commit.

## Fora do escopo

- Hero, chips de tecnologia, seção de serviços e contato.
- Outros projetos além dos dois.
- Ampliar a imagem em tela cheia e reprodução automática no carrossel.
- URLs separadas por idioma (o idioma continua vindo do seletor, como na home).
- Alterações nos repositórios do BeautyDesk e do Comandei.

## Verificação

O projeto não tem testes automatizados.

- `npm run lint` e `npm run build` sem erros; o build lista `/projetos/beautydesk` e `/projetos/comandei` como páginas estáticas.
- No navegador, em PT e EN, em largura de desktop e de celular:
  - home com dois cards, capa carregando, etiquetas visíveis;
  - capa e nome levam à página do projeto; "Ver site" abre o site certo em nova aba;
  - na página do projeto, setas, indicadores e arraste trocam de slide, e a legenda acompanha;
  - os links do cabeçalho voltam para as seções da home;
  - `/projetos/qualquer-coisa` dá 404.
- `grep -ri saideira` em `app/`, `components/`, `lib/` e `public/` não retorna nada (a única menção fica no contexto desta spec).
