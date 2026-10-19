import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

// Fonte para títulos e texto
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

// Fonte para detalhes técnicos (rótulos, código, etiquetas)
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
      className={`${schibsted.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" style={{ backgroundColor: '#0A0C11', color: '#F2F4F8' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
