import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"]
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Dietetyk Radosław Bernat | 4Slim",
  description:
    "Indywidualne plany żywieniowe, dietoterapia i wsparcie w zdrowym stylu życia od dietetyka Radosława Bernata.",
  icons: {
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "Dietetyk Radosław Bernat | 4Slim",
    description:
      "Skuteczna dietoterapia, zdrowe nawyki i holistyczne wsparcie żywieniowe.",
    url: "https://agentic-17b5233d.vercel.app",
    siteName: "4Slim",
    locale: "pl_PL",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
