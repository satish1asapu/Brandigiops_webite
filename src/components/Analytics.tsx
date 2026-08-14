"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const path = window.location.pathname;
      if (!path.startsWith("/blogs/")) return;
      const doc = document.documentElement;
      const scrolled =
        (window.scrollY + window.innerHeight) / Math.max(doc.scrollHeight, 1);
      if (scrolled >= 0.75) {
        fired = true;
        trackEvent("blog_scroll_75", { page_path: path });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  );
}
