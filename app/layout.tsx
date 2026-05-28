import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Şifa Medikal | Adana Medikal Ürünler ve Ortopedi Çözümleri",
  description:
    "Şifa Medikal, Adana'da ortopedi ürünleri, fizik tedavi ürünleri, özel tabanlık, varis çorabı, lenfödem ve bası giysileri, tansiyon aletleri ve solunum cihazları alanlarında hizmet sunar.",
  keywords: [
    "Adana medikal",
    "Şifa Medikal",
    "ortopedi ürünleri",
    "fizik tedavi ürünleri",
    "varis çorabı",
    "özel tabanlık",
    "lenfödem bası giysisi",
    "tansiyon aleti",
    "solunum cihazı",
  ],
  openGraph: {
    title: "Şifa Medikal | Adana Medikal Ürünler ve Ortopedi Çözümleri",
    description:
      "Adana'da ortopedi ürünleri, fizik tedavi destekleri, özel tabanlıklar, kompresyon ürünleri ve medikal cihaz çözümleri.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full font-sans text-[var(--text-main)]">
        {children}
      </body>
    </html>
  );
}
