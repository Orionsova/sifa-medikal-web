import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Şifa Medikal | Sigvaris, Juzo, Supportline Yetkili Bayi",
  description:
    "Şifa Medikal; Sigvaris, Juzo ve Supportline markalarının tek yetkili bölge bayisi olarak varis çorabı, lenfödem bası giysileri ve medikal kompresyon ürünlerinde güvenilir çözümler sunar.",
  keywords: [
    "Adana medikal",
    "Şifa Medikal",
    "Sigvaris varis çorabı",
    "Juzo lenfödem ürünleri",
    "Supportline medikal ürünler",
    "ortopedi ürünleri",
    "fizik tedavi ürünleri",
    "varis çorabı",
    "bası giysileri",
    "lenfödem ürünleri",
    "medikal kompresyon ürünleri",
    "özel tabanlık",
    "lenfödem bası giysisi",
    "tansiyon aleti",
    "solunum cihazı",
  ],
  openGraph: {
    title: "Şifa Medikal | Sigvaris, Juzo, Supportline Yetkili Bayi",
    description:
      "Sigvaris, Juzo ve Supportline markalarının yetkili bölge bayisi olarak varis çorabı, lenfödem ürünleri ve medikal kompresyon çözümleri sunuyoruz.",
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
