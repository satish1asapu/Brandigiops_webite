"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal animations + active nav highlight.
 * Uses IntersectionObserver to fade-in `.reveal` cards on scroll.
 */
export function HomeClientChrome() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal,.wcard,.tcard,.scard,.bcard")
        .forEach((el) => el.classList.add("show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("show"), i * 80);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal,.wcard,.tcard,.scard,.bcard")
      .forEach((el) => io.observe(el));

    const secs = document.querySelectorAll("section[id],footer[id]");
    const navAs = document.querySelectorAll(".nav a:not(.nav-cta)");
    let scrollRaf = 0;
    const updateNav = () => {
      let c = "";
      secs.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) {
          c = s.id;
        }
      });
      navAs.forEach((a) => {
        const el = a as HTMLAnchorElement;
        const href = el.getAttribute("href") ?? "";
        const isActive =
          href === `/#${c}` ||
          (c === "blogs" && window.location.pathname.startsWith("/blogs"));
        el.style.color = isActive ? "var(--primary)" : "";
      });
    };
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        updateNav();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateNav();

    return () => {
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
