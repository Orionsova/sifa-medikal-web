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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("contact-form", form);
    setSubmitted(true);
    setForm(initialForm);
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
              required
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
              required
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
            required
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
            required
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

      {submitted ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{siteData.contactSuccessMessage}</p>
        </div>
      ) : null}
    </div>
  );
}

