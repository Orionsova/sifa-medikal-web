"use client";

import { useState } from "react";
import { navigationItems, siteData } from "@/data/site";
import { Icon } from "@/components/site/icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/90 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a href="#ana-sayfa" className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-xl">
              {siteData.companyName}
            </span>
            <span className="text-sm text-[var(--text-soft)]">
              Medikal ve ortopedik çözümler
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[var(--text-main)] transition hover:text-[var(--brand-blue)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={siteData.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {"WhatsApp'tan Bilgi Al"}
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line-strong)] bg-white text-[var(--brand-navy)] lg:hidden"
          >
            <Icon name={isOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-[var(--line-soft)] py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-[var(--text-main)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--brand-blue)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                {"WhatsApp'tan Bilgi Al"}
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
