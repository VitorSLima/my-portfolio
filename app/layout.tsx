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

export const metadata: Metadata = {
  title: "Vitor Lima | Fullstack Developer",
  description:
    "Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia.",
  keywords: [
    "desenvolvedor",
    "fullstack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Vitor Lima" }],
  openGraph: {
    title: "Vitor Lima | Fullstack Developer",
    description:
      "Transformo necessidades em aplicações reais, envolventes e funcionais.",
    type: "website",
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
