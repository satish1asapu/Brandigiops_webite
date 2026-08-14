"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ContactFormProps = {
  source?: string;
  className?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

function readUtm(param: string) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(param) ?? "";
}

export function ContactForm({
  source = "contact",
  className = "",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      whatsapp: String(data.get("whatsapp") ?? "").trim(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      utm_source: readUtm("utm_source"),
      utm_medium: readUtm("utm_medium"),
      utm_campaign: readUtm("utm_campaign"),
      source,
    };

    if (!payload.name || !payload.website || !payload.whatsapp) {
      setError("Please fill in name, website, and WhatsApp number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      trackEvent("form_submit", { source, page_path: window.location.pathname });
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`contact-form contact-form--success ${className}`.trim()}>
        <p>Thanks — we&apos;ll get back to you shortly on WhatsApp.</p>
      </div>
    );
  }

  return (
    <form
      className={`contact-form ${className}`.trim()}
      onSubmit={onSubmit}
      noValidate
    >
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="contact-field">
          <span>Website URL</span>
          <input
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            required
            placeholder="https://yourbusiness.in"
          />
        </label>
        <label className="contact-field">
          <span>WhatsApp number</span>
          <input
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91 9XXXXXXXXX"
          />
        </label>
      </div>
      {error ? <p className="contact-form-error">{error}</p> : null}
      <button
        type="submit"
        className="contact-form-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request free AEO snapshot"}
      </button>
    </form>
  );
}
