export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProductGroup = {
  title: string;
  description: string;
  icon: IconName;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactAction = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export type IconName =
  | "shield"
  | "guide"
  | "phone"
  | "orthopedic"
  | "therapy"
  | "insole"
  | "compression"
  | "lymph"
  | "prosthesis"
  | "pressure"
  | "respiratory"
  | "care"
  | "location"
  | "instagram"
  | "whatsapp"
  | "menu"
  | "close"
  | "check";

export const siteData = {
  companyName: "Şifa Medikal",
  city: "Adana",
  phone: "0505 477 54 94",
  phoneHref: "tel:+905054775494",
  whatsappNumber: "905054775494",
  whatsappHref: "https://wa.me/905054775494",
  instagramHandle: "@sifa.medikal94",
  instagramHref: "https://instagram.com/sifa.medikal94",
  heroTitle: "Adana'da Güvenilir Medikal Ürün Çözümleri",
  heroDescription:
    "Şifa Medikal olarak ortopedi ürünleri, fizik tedavi destekleri, özel tabanlıklar, varis çorapları, lenfödem ve bası giysileri, meme protezi ürünleri ve medikal cihaz çözümleriyle yanınızdayız.",
  authorizedDealerText:
    "Sigvaris, Juzo ve Supportline markalarının tek yetkili bölge bayisi",
  authorizedDealerSupportText:
    "Varis çorabı, lenfödem bası giysileri ve medikal kompresyon ürünlerinde orijinal, güvenilir ve uzman destekli ürün çözümleri sunuyoruz.",
  aboutTitle: "Şifa Medikal Hakkında",
  aboutDescription:
    "Şifa Medikal, Adana'da medikal ürünler, ortopedi destek ürünleri ve fizik tedaviye yardımcı çözümler sunan bir firmadır. Kullanıcı ihtiyaçlarını doğru anlamaya, uygun ürün yönlendirmesi yapmaya ve güvenilir hizmet sunmaya odaklanır.",
  contactSuccessMessage:
    "Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçilecektir.",
  mapsHref: "https://maps.google.com/?q=Şifa+Medikal+Adana",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Şifa%20Medikal%20Adana&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const navigationItems: NavItem[] = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Ürün Grupları", href: "#urun-gruplari" },
  { label: "Öne Çıkan Çözümler", href: "#cozumler" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export const aboutCards: FeatureCard[] = [
  {
    title: "Güvenilir Ürün Desteği",
    description:
      "Medikal ihtiyaçlara uygun ürün grupları hakkında anlaşılır ve güven veren bilgilendirme.",
    icon: "shield",
  },
  {
    title: "Doğru Ürün Yönlendirmesi",
    description:
      "İhtiyaca göre uygun kategoriye yönlendirmeyi önceleyen sade ve dikkatli iletişim yaklaşımı.",
    icon: "guide",
  },
  {
    title: "Hızlı İletişim",
    description:
      "Telefon, WhatsApp ve Instagram üzerinden kolay ulaşılabilir destek kanalları.",
    icon: "phone",
  },
];

export const productGroups: ProductGroup[] = [
  {
    title: "Ortopedi Ürünleri",
    description:
      "Günlük yaşamda hareket desteği sağlayan ortopedik destek ürünleri.",
    icon: "orthopedic",
  },
  {
    title: "Fizik Tedavi Ürünleri",
    description:
      "Fizik tedavi ve rehabilitasyon süreçlerine yardımcı destek ürünleri.",
    icon: "therapy",
  },
  {
    title: "Özel Tabanlıklar",
    description:
      "Ayak yapısına ve kullanım ihtiyacına göre değerlendirilebilen tabanlık çözümleri.",
    icon: "insole",
  },
  {
    title: "Varis Çorapları",
    description:
      "Sigvaris varis çorabı seçenekleri dahil farklı kullanım ihtiyaçlarına uygun medikal kompresyon ürünleri.",
    icon: "compression",
  },
  {
    title: "Lenfödem ve Bası Giysileri",
    description:
      "Juzo lenfödem ürünleri ve farklı bası giysileri ihtiyaçlarına yönelik güvenilir ürün grupları.",
    icon: "lymph",
  },
  {
    title: "Meme Protezi ve Sütyenleri",
    description:
      "Kullanıcı konforunu ve günlük yaşam desteğini önceleyen ürün seçenekleri.",
    icon: "prosthesis",
  },
  {
    title: "Tansiyon Aletleri",
    description:
      "Ev ve profesyonel kullanım için tansiyon ölçüm cihazları.",
    icon: "pressure",
  },
  {
    title: "Solunum Cihazları",
    description:
      "Solunum desteği ihtiyaçlarına yönelik medikal cihaz seçenekleri.",
    icon: "respiratory",
  },
  {
    title: "Hasta Bakım Ürünleri",
    description:
      "Supportline medikal ürünler dahil hasta bakımı ve günlük destek süreçleri için yardımcı çözümler.",
    icon: "care",
  },
];

export const featuredSolutions: FeatureCard[] = [
  {
    title: "Varis Çorabı ve Kompresyon Ürünleri",
    description:
      "Sigvaris varis çorabı ve farklı medikal kompresyon ürünleri hakkında güvenilir bilgi almak için bizimle iletişime geçebilirsiniz.",
    icon: "compression",
  },
  {
    title: "Lenfödem ve Bası Giysileri",
    description:
      "Juzo lenfödem ürünleri, lenfödem ürünleri ve bası giysileri konusunda ürün grupları hakkında destek alabilirsiniz.",
    icon: "lymph",
  },
  {
    title: "Özel Tabanlık ve Ortopedik Destekler",
    description:
      "Ayak konforu, duruş desteği ve günlük kullanım ihtiyaçlarına yönelik özel tabanlık ve ortopedik destek ürünleri hakkında bilgi alabilirsiniz.",
    icon: "insole",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Hangi ürün gruplarında hizmet veriyorsunuz?",
    answer:
      "Ortopedi ürünleri, fizik tedavi ürünleri, özel tabanlıklar, varis çorapları, lenfödem ve bası giysileri, meme protezi ürünleri, tansiyon aletleri, solunum cihazları ve hasta bakım ürünleri alanlarında hizmet sunuyoruz.",
  },
  {
    question: "Ürünler hakkında nasıl bilgi alabilirim?",
    answer:
      "Telefon, WhatsApp veya Instagram üzerinden bizimle iletişime geçerek ürün grupları hakkında bilgi alabilirsiniz.",
  },
  {
    question: "Adana'da hizmet veriyor musunuz?",
    answer:
      "Evet, Şifa Medikal Adana'da medikal ürün ve destek çözümleri sunmaktadır.",
  },
  {
    question: "WhatsApp üzerinden ürün danışabilir miyim?",
    answer:
      "Evet, WhatsApp üzerinden ihtiyacınız olan ürün grubu hakkında bilgi alabilirsiniz.",
  },
  {
    question: "Özel tabanlık ve bası giysileri için bilgi alabilir miyim?",
    answer:
      "Evet, özel tabanlıklar, lenfödem ürünleri ve bası giysileri hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
];

export const contactActions: ContactAction[] = [
  {
    label: "WhatsApp",
    value: siteData.phone,
    href: siteData.whatsappHref,
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: siteData.instagramHandle,
    href: siteData.instagramHref,
    icon: "instagram",
  },
  {
    label: "Telefon",
    value: siteData.phone,
    href: siteData.phoneHref,
    icon: "phone",
  },
  {
    label: "Lokasyon",
    value: siteData.city,
    href: siteData.mapsHref,
    icon: "location",
  },
];
