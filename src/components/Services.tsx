"use client";

import { servicesSection } from "@/content/site";
import { ArrowOutIcon } from "./icons/ArrowOutIcon";

export function Services() {
  const toggleS = (row: HTMLDivElement) => {
    const open = row.classList.contains("open");
    document.querySelectorAll(".srow.open").forEach((r) => r.classList.remove("open"));
    if (!open) row.classList.add("open");
  };

  return (
    <section className="services" id="services">
      <h2 className="stitle">{servicesSection.title}</h2>
      {servicesSection.items.map((s) => (
        <div
          key={s.num}
          className="srow"
          role="button"
          tabIndex={0}
          onClick={(e) => toggleS(e.currentTarget)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleS(e.currentTarget as HTMLDivElement);
            }
          }}
        >
          <div className="stop">
            <div className="snum">{s.num}</div>
            <div className="sname">{s.name}</div>
            <span className="stag">{s.tag}</span>
            <div className="sarrow">
              <ArrowOutIcon />
            </div>
          </div>
          <div className="sdesc">
            <p>{s.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
