import type { Metadata } from "next";
import { Asap, Inconsolata, Maven_Pro } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

// Fonte para títulos
const asap = Asap({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-asap",
  display: "swap",
});

// Fonte para subtítulos e código
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inconsolata",
  display: "swap",
});

// Fonte para texto
const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-maven",
  display: "swap",
});

// Base das URLs absolutas (ex.: imagem de prévia). Na Vercel usa o domínio de produção.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vitor Lima | Engenheiro de Software",
  description:
    "Engenheiro de Software com experiência em back-end e front-end e especialização em APIs RESTful.",
  keywords: [
    "engenheiro de software",
    "software engineer",
    "fullstack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Vitor Lima" }],
  openGraph: {
    title: "Vitor Lima | Engenheiro de Software",
    description:
      "Engenheiro de Software com experiência em back-end e front-end e especialização em APIs RESTful.",
    type: "website",
    siteName: "Vitor Lima",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Lima | Engenheiro de Software",
    description:
      "Engenheiro de Software com experiência em back-end e front-end e especialização em APIs RESTful.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="portfolio"
      className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" style={{ backgroundColor: '#0D0E11', color: '#E2E4E9' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
