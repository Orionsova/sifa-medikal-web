"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/data/site";
import { Icon } from "@/components/site/icons";

const initialForm = {
  fullName: "",
  phone: "",
  topic: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fullName = form.fullName.trim();
    const phone = form.phone.trim();
    const topic = form.topic.trim();
    const message = form.message.trim();

    if (!fullName || !phone || !message) {
      setErrorMessage("Lütfen Ad Soyad, Telefon ve Mesaj alanlarını doldurun.");
      return;
    }

    setErrorMessage("");

    const whatsappMessage = [
      "Merhaba, web siteniz üzerinden iletişime geçiyorum.",
      "",
      `Ad Soyad: ${fullName}`,
      `Telefon: ${phone}`,
      `Konu: ${topic}`,
      `Mesaj: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    console.log("contact-form", form);
    setForm(initialForm);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="card-surface p-6 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--brand-navy)]">
              Ad Soyad
            </span>
            <input
              value={form.fullName}
              onChange={(event) =>
                setForm((current) => ({ ...current, fullName: event.target.value }))
              }
              className="input-field"
              name="fullName"
              autoComplete="name"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--brand-navy)]">
              Telefon
            </span>
            <input
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
              className="input-field"
              name="phone"
              autoComplete="tel"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--brand-navy)]">
            Ürün / Hizmet Konusu
          </span>
          <input
            value={form.topic}
            onChange={(event) =>
              setForm((current) => ({ ...current, topic: event.target.value }))
            }
            className="input-field"
            name="topic"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--brand-navy)]">
            Mesaj
          </span>
          <textarea
            rows={5}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            className="input-field min-h-32 resize-y"
            name="message"
          />
        </label>

        <button type="submit" className="btn-primary justify-center">
          Mesaj Gönder
        </button>
      </form>

      {errorMessage ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <Icon name="close" className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
}
