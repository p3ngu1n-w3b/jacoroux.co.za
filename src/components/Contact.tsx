"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      business: String(data.get("business") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        delivered?: string;
        mailto?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();

      if (result.delivered === "mailto" && result.mailto) {
        window.location.href = result.mailto;
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-pink">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build your website
          </h2>
          <p className="mt-4 text-fog-muted">
            Tell me about your business and what you need. I usually reply within
            one business day — faster on WhatsApp.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-neon-lime/30 bg-neon-lime/10 px-4 py-3 text-sm font-semibold text-neon-lime transition hover:bg-neon-lime/20"
              >
                WhatsApp {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="text-sm text-fog transition hover:text-neon-pink"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-fog transition hover:text-neon-pink"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-sm text-fog-muted">{siteConfig.location}</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-ink-border bg-ink-card/80 p-6 glow-border sm:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-1">
              <span className="mb-1.5 block text-fog-muted">Name *</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-ink-border bg-ink px-3 py-2.5 text-fog outline-none transition focus:border-neon-pink focus:shadow-[0_0_0_3px_rgba(255,43,214,0.15)]"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-fog-muted">Email *</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-ink-border bg-ink px-3 py-2.5 text-fog outline-none transition focus:border-neon-pink focus:shadow-[0_0_0_3px_rgba(255,43,214,0.15)]"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-fog-muted">Phone / WhatsApp</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-ink-border bg-ink px-3 py-2.5 text-fog outline-none transition focus:border-neon-pink focus:shadow-[0_0_0_3px_rgba(255,43,214,0.15)]"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-fog-muted">Business / project</span>
              <input
                name="business"
                className="w-full rounded-xl border border-ink-border bg-ink px-3 py-2.5 text-fog outline-none transition focus:border-neon-pink focus:shadow-[0_0_0_3px_rgba(255,43,214,0.15)]"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1.5 block text-fog-muted">How can I help? *</span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-ink-border bg-ink px-3 py-2.5 text-fog outline-none transition focus:border-neon-pink focus:shadow-[0_0_0_3px_rgba(255,43,214,0.15)]"
                placeholder="New website, redesign, landing page…"
              />
            </label>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-fog-muted">
            By submitting this form you consent to {siteConfig.name} processing
            your personal information to respond to your enquiry, in accordance
            with the Protection of Personal Information Act (POPIA). Your details
            are never shared with third parties for marketing.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-neon-pink px-6 py-3 text-sm font-semibold text-ink transition hover:shadow-[0_0_28px_rgba(255,43,214,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send enquiry"}
            </button>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-fog-muted hover:text-neon-lime sm:text-left"
            >
              Prefer WhatsApp? Chat now
            </a>
          </div>

          {status === "success" && (
            <p className="mt-4 text-sm text-neon-lime" role="status">
              Thanks — your enquiry was sent. I&apos;ll get back to you within one
              business day.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-400" role="alert">
              {error} You can still reach me on WhatsApp or{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                email
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
