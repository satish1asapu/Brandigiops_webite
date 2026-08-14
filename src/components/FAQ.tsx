"use client";

import { faqs } from "@/content/faq";
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
        {faqs.map((faq, i) => (
          <details key={faq.question} className="faq-item" open={i < 5}>
            <summary className="faq-question">
              <h3 className="faq-question-text">{faq.question}</h3>
              <span className="faq-icon" aria-hidden>
                +
              </span>
            </summary>
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
                    ),
                  )}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
