import { ContactForm } from "@/components/site/contact-form";
import { Header } from "@/components/site/header";
import { Icon } from "@/components/site/icons";
import { SectionHeading } from "@/components/site/section-heading";
import {
  aboutCards,
  contactActions,
  faqItems,
  featuredSolutions,
  navigationItems,
  productGroups,
  siteData,
} from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteData.companyName,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteData.city,
    addressCountry: "TR",
  },
  telephone: siteData.phone,
  sameAs: [siteData.instagramHref, siteData.whatsappHref],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Header />

        <main>
          <section id="ana-sayfa" className="section-shell overflow-hidden">
            <div className="container-shell">
              <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                  <div className="inline-flex rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--brand-navy)]">
                    {"Adana'da medikal destek ve kurumsal danışmanlık yaklaşımı"}
                  </div>
                  <div className="space-y-5">
                    <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">
                      {siteData.heroTitle}
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                      {siteData.heroDescription}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="#urun-gruplari" className="btn-primary justify-center">
                      Ürün Gruplarını İncele
                    </a>
                    <a
                      href={siteData.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary justify-center"
                    >
                      <Icon name="whatsapp" className="h-5 w-5" />
                      {"WhatsApp'tan Bilgi Al"}
                    </a>
                  </div>
                  <div className="card-surface flex flex-col gap-4 border-[var(--line-strong)] bg-white/88 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex rounded-2xl bg-[var(--surface-blue)] p-3 text-[var(--brand-blue)]">
                        <Icon name="shield" className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
                          Yetkili Bölge Bayisi
                        </p>
                        <p className="mt-2 text-base font-extrabold text-[var(--brand-navy)] sm:text-lg">
                          {siteData.authorizedDealerText}
                        </p>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-soft)]">
                          {siteData.authorizedDealerSupportText}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-[var(--surface-mint)] px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]">
                      Orijinal ve güvenilir ürün odağı
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {aboutCards.map((item) => (
                      <div key={item.title} className="card-surface p-5">
                        <div className="mb-3 inline-flex rounded-2xl bg-[var(--surface-blue)] p-3 text-[var(--brand-blue)]">
                          <Icon name={item.icon} className="h-6 w-6" />
                        </div>
                        <h2 className="text-base font-extrabold text-[var(--brand-navy)]">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[var(--brand-mint)]/30 blur-3xl" />
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[var(--brand-blue)]/20 blur-3xl" />
                  <div className="card-surface relative p-6 sm:p-8">
                    <div className="grid gap-4">
                      <div className="rounded-[26px] bg-[linear-gradient(135deg,rgba(46,125,183,0.12),rgba(141,203,181,0.22))] p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                              Kaliteli ve Güvenilir Ürün
                            </p>
                            <h2 className="mt-3 text-2xl font-extrabold text-[var(--brand-navy)]">
                              Orijinal ürün seçimi ve güvenilir medikal çözümler
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                              Varis çorabı, bası giysileri ve lenfödem ürünleri dahil
                              ihtiyaç duyulan alanlarda kaliteli, güvenilir ve doğru ürün
                              seçimine odaklanıyoruz.
                            </p>
                          </div>
                          <div className="rounded-2xl bg-white/90 p-3 text-[var(--brand-blue)] shadow-sm">
                            <Icon name="shield" className="h-7 w-7" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[24px] border border-[var(--line-soft)] bg-white p-5">
                          <div className="mb-3 inline-flex rounded-2xl bg-[var(--surface-mint)] p-3 text-emerald-700">
                            <Icon name="orthopedic" className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-extrabold text-[var(--brand-navy)]">
                            Ortopedi Destekleri
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                            Günlük yaşam desteği için sade ve anlaşılır ürün grubu sunumu.
                          </p>
                        </div>
                        <div className="rounded-[24px] border border-[var(--line-soft)] bg-white p-5">
                          <div className="mb-3 inline-flex rounded-2xl bg-[var(--surface-blue)] p-3 text-[var(--brand-blue)]">
                            <Icon name="phone" className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-extrabold text-[var(--brand-navy)]">
                            Hızlı İletişim
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                            Telefon ve WhatsApp üzerinden kolay erişim imkanı.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-dashed border-[var(--line-strong)] bg-white/75 p-5">
                        <div className="flex flex-wrap gap-3 text-sm font-semibold text-[var(--brand-navy)]">
                          <span className="rounded-full bg-[var(--surface-blue)] px-3 py-2">
                            Özel tabanlıklar
                          </span>
                          <span className="rounded-full bg-[var(--surface-mint)] px-3 py-2">
                            Sigvaris varis çorabı
                          </span>
                          <span className="rounded-full bg-[var(--surface-blue)] px-3 py-2">
                            Juzo lenfödem ürünleri
                          </span>
                          <span className="rounded-full bg-[var(--surface-mint)] px-3 py-2">
                            Supportline medikal ürünler
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="hakkimizda" className="section-shell">
            <div className="container-shell">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <SectionHeading
                  eyebrow="Hakkımızda"
                  title={siteData.aboutTitle}
                  description={siteData.aboutDescription}
                />
                <div className="grid gap-4 sm:grid-cols-3">
                  {aboutCards.map((item) => (
                    <article key={item.title} className="card-surface p-6">
                      <div className="mb-4 inline-flex rounded-2xl bg-[var(--surface-blue)] p-3 text-[var(--brand-blue)]">
                        <Icon name={item.icon} className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[var(--brand-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="urun-gruplari" className="section-shell">
            <div className="container-shell">
              <SectionHeading
                eyebrow="Ürün Grupları"
                title="İhtiyaca göre düzenlenmiş medikal ürün kategorileri"
                description="Kurumsal tanıtım odaklı bu sayfada, ürün gruplarını sade kart yapısıyla inceleyebilir ve doğrudan WhatsApp üzerinden bilgi alabilirsiniz."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {productGroups.map((item) => (
                  <article key={item.title} className="card-surface flex flex-col p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,rgba(46,125,183,0.12),rgba(141,203,181,0.24))] text-[var(--brand-blue)]">
                      <Icon name={item.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[var(--brand-navy)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-7 text-[var(--text-soft)]">
                      {item.description}
                    </p>
                    <a
                      href={siteData.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary mt-6 justify-center"
                    >
                      Bilgi Al
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="cozumler" className="section-shell">
            <div className="container-shell">
              <SectionHeading
                eyebrow="Öne Çıkan Çözümler"
                title="Sık sorulan ihtiyaçlar için öne çıkan ürün grupları"
                description="Kesin tedavi vaadi sunmadan, ürün grupları ve kullanım seçenekleri hakkında güvenilir bilgi alabileceğiniz alanlar."
              />
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {featuredSolutions.map((item) => (
                  <article
                    key={item.title}
                    className="card-surface relative overflow-hidden p-8"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />
                    <div className="relative">
                      <div className="mb-5 inline-flex rounded-2xl bg-[var(--surface-blue)] p-3 text-[var(--brand-blue)]">
                        <Icon name={item.icon} className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[var(--brand-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                        {item.description}
                      </p>
                      <a
                        href={siteData.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-6"
                      >
                        WhatsApp ile Sorun
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="sss" className="section-shell">
            <div className="container-shell">
              <SectionHeading
                eyebrow="SSS"
                title="Sık Sorulan Sorular"
                description="Ürün grupları ve iletişim süreçleri hakkında temel sorulara hızlı cevaplar."
              />
              <div className="mt-10 grid gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="card-surface group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-extrabold text-[var(--brand-navy)]">
                      {item.question}
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--brand-blue)] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--text-soft)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="iletisim" className="section-shell">
            <div className="container-shell">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="İletişim"
                    title="Bizimle İletişime Geçin"
                    description="Telefon, WhatsApp veya Instagram üzerinden bize ulaşabilir; form aracılığıyla talebinizi iletebilirsiniz."
                  />
                  <div className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {contactActions.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.icon === "phone" ? undefined : "_blank"}
                          rel={
                            item.icon === "phone"
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="card-surface group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
                        >
                          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                            <Icon name={item.icon} className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
                              {item.label}
                            </span>
                            <span className="mt-1 block truncate text-lg font-extrabold text-[var(--brand-navy)]">
                              {item.value}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                    <div className="card-surface overflow-hidden p-3">
                      <div className="mb-3 flex items-center justify-between gap-4 px-2 pt-2">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
                            Google Maps
                          </p>
                          <p className="mt-1 text-sm text-[var(--text-soft)]">
                            Gerekirse <code>data/site.ts</code> içindeki{" "}
                            <code>mapEmbedSrc</code> ve <code>mapsHref</code>{" "}
                            alanlarını güncelleyin.
                          </p>
                        </div>
                        <a
                        href={siteData.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary shrink-0"
                        >
                          <Icon name="location" className="h-4 w-4" />
                          Yol Tarifi
                        </a>
                      </div>
                      <div className="overflow-hidden rounded-[22px] border border-[var(--line-soft)] bg-white">
                        <iframe
                          title="Şifa Medikal Google Maps konumu"
                          src={siteData.mapEmbedSrc}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="h-72 w-full md:h-80"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--line-soft)] bg-white/85 py-12">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1fr]">
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--brand-navy)]">
                {siteData.companyName}
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-[var(--text-soft)]">
                {"Adana'da medikal ürünler, ortopedi destekleri, özel tabanlıklar ve"}
                {" danışmanlık odaklı ürün grubu yönlendirmesi sunan kurumsal tanıtım sitesi."}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                Menü
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base text-[var(--text-soft)] transition hover:text-[var(--brand-blue)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                Ürün Grupları
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {productGroups.slice(0, 5).map((item) => (
                  <p key={item.title} className="text-base text-[var(--text-soft)]">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                İletişim ve Politikalar
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-base text-[var(--text-soft)]">
                <a href={siteData.phoneHref}>{siteData.phone}</a>
                <a href={siteData.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={siteData.instagramHref} target="_blank" rel="noopener noreferrer">
                  {siteData.instagramHandle}
                </a>
                <a href="#!" aria-disabled="true">
                  KVKK
                </a>
                <a href="#!" aria-disabled="true">
                  Gizlilik Politikası
                </a>
                <a href="#!" aria-disabled="true">
                  Çerez Politikası
                </a>
              </div>
            </div>
          </div>
        </footer>

        <a
          href={siteData.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"WhatsApp'tan bilgi al"}
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-105"
        >
          <Icon name="whatsapp" className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}
