"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { footer } from "@/content/site";
import { IconCalendar } from "./icons/SiteIcons";

interface BookingModalProps {
  className?: string;
  children?: ReactNode;
}

/** Returns true for short links (calendar.app.google) that block iframe embedding */
function isShortUrl(url: string) {
  return url.includes("calendar.app.google");
}

export function BookingModal({ className, children }: BookingModalProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const calUrl = footer.bookingCalendarUrl;

  /* No URL set — go straight to email */
  if (!calUrl) {
    return (
      <a className={className} href={footer.bookingHref}>
        {children ?? <><IconCalendar size={17} />Book a walkthrough</>}
      </a>
    );
  }

  /* Short URL (calendar.app.google) — opens Google's own booking page in new tab */
  if (isShortUrl(calUrl)) {
    return (
      <a className={className} href={calUrl} target="_blank" rel="noopener noreferrer">
        {children ?? <><IconCalendar size={17} />Book a walkthrough</>}
      </a>
    );
  }

  /* Full appointment schedule URL — embeds in our modal */
  return (
    <>
      <button className={className} onClick={() => setOpen(true)} type="button">
        {children ?? <><IconCalendar size={17} />Book a walkthrough</>}
      </button>

      {open && (
        <div
          className="bm-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Book a 20-minute walkthrough with BranDigiOps"
        >
          <div className="bm-panel" onClick={(e) => e.stopPropagation()}>

            <div className="bm-header">
              <div className="bm-header-brand">
                <span className="bm-header-dot" aria-hidden />
                <IconCalendar size={15} />
                <span>Book a 20-min Walkthrough</span>
              </div>
              <button className="bm-close" onClick={close} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bm-body">
              <iframe
                src={`${calUrl}?gv=true`}
                title="Book a walkthrough — BranDigiOps"
                frameBorder="0"
                className="bm-iframe"
                loading="lazy"
              />
            </div>

            <div className="bm-footer">
              <a href={calUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Calendar
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
