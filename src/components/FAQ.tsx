"use client";

import { useState } from "react";
import { faqs } from "@/content/faq";
import { siteUrl } from "@/content/seo";
import { BookingModal } from "./BookingModal";
import { IconCalendar, IconMessageCircle, IconMail } from "./icons/SiteIcons";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="section faq-section" id="faq" aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="section-header">
        <div className="section-label">Common Questions</div>
        <h2 className="section-title">Everything you need to know</h2>
        <p className="section-subtitle">
          Answers written so AI tools — and humans — can find and cite them.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                  {faq.ctas && faq.ctas.length > 0 && (
                    <div className="faq-ctas">
                      {faq.ctas.map((cta) =>
                        cta.icon === "calendar" ? (
                          <BookingModal key={cta.label} className="faq-cta faq-cta--primary">
                            <IconCalendar size={14} />
                            {cta.label}
                          </BookingModal>
                        ) : (
                          <a
                            key={cta.label}
                            href={cta.href}
                            className={`faq-cta faq-cta--${cta.icon}`}
                            target={cta.href.startsWith("http") ? "_blank" : undefined}
                            rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {cta.icon === "whatsapp" && <IconMessageCircle size={14} />}
                            {cta.icon === "email" && <IconMail size={14} />}
                            {cta.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
