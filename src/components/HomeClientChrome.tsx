"use client";

import { useEffect } from "react";

/**
 * Custom cursor, nav section highlight, intersection reveal.
 * Throttled handlers + passive scroll reduce main-thread work; listeners are
 * skipped when the user prefers reduced motion (CSS also disables the cursor).
 */
export function HomeClientChrome() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".srow,.acol,.bcard")
        .forEach((el) => el.classList.add("show"));
      return;
    }

    const cur = document.getElementById("cursor");
    const clabel = document.getElementById("clabel");
    if (!cur || !clabel) return;

    let moveRaf = 0;
    let lastX = 0;
    let lastY = 0;
    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (moveRaf) return;
      moveRaf = requestAnimationFrame(() => {
        moveRaf = 0;
        cur.style.left = `${lastX}px`;
        cur.style.top = `${lastY}px`;
      });
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    const bcards = document.querySelectorAll(".bcard");
    const onCardEnter = () => {
      cur.classList.add("big");
      clabel.innerHTML = "Read<br/>More";
    };
    const onCardLeave = () => {
      cur.classList.remove("big");
    };
    bcards.forEach((el) => {
      el.addEventListener("mouseenter", onCardEnter);
      el.addEventListener("mouseleave", onCardLeave);
    });

    const srows = document.querySelectorAll(".srow");
    const onRowEnter = () => {
      cur.classList.add("big");
      clabel.innerHTML = "View";
    };
    const onRowLeave = () => {
      cur.classList.remove("big");
    };
    srows.forEach((el) => {
      el.addEventListener("mouseenter", onRowEnter);
      el.addEventListener("mouseleave", onRowLeave);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("show"), i * 80);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".srow,.acol,.bcard").forEach((el) => io.observe(el));

    const secs = document.querySelectorAll("section[id],footer[id]");
    const navAs = document.querySelectorAll(".nav a");
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
        el.style.color = isActive ? "var(--fg)" : "";
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
      if (moveRaf) cancelAnimationFrame(moveRaf);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      bcards.forEach((el) => {
        el.removeEventListener("mouseenter", onCardEnter);
        el.removeEventListener("mouseleave", onCardLeave);
      });
      srows.forEach((el) => {
        el.removeEventListener("mouseenter", onRowEnter);
        el.removeEventListener("mouseleave", onRowLeave);
      });
    };
  }, []);

  return (
    <div id="cursor">
      <div id="clabel">
        Read
        <br />
        More
      </div>
    </div>
  );
}
