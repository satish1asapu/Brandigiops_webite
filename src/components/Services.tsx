"use client";

import Link from "next/link";
import { servicesSection } from "@/content/site";
import {
  IconTarget,
  IconEye,
  IconSparkles,
  IconRocket,
  IconAnalytics,
  IconSignal,
} from "./icons/SiteIcons";

const serviceIcons = [
  IconTarget,
  IconEye,
  IconSparkles,
  IconRocket,
  IconAnalytics,
  IconSignal,
];

export function Services() {
  return (
    <section className="section services" id="solutions">
      <div className="section-header services-header">
        <div className="section-label services-eyebrow">{servicesSection.sectionLabel}</div>
        <h2 className="section-title">{servicesSection.title}</h2>
        <p className="section-subtitle">{servicesSection.sectionSubtitle}</p>
      </div>
      <div className="sgrid">
        {servicesSection.items.map((s, i) => {
          const Icon = serviceIcons[i];
          const isLeadConversion = s.num === "06";
          return (
            <div key={s.num} className={`scard reveal${isLeadConversion ? " scard--radar" : ""}`}>
              <div className="scard-top">
                <div className={`scard-icon scard-icon--${i + 1}`} aria-hidden>
                  {Icon && <Icon size={22} />}
                </div>
                <span className="scard-tag">{s.tag}</span>
              </div>
              <div className="scard-num">{s.num}</div>
              <h3 className="scard-title">{s.name}</h3>
              <p className="scard-desc">{s.description}</p>
              {isLeadConversion && (
                <Link href="/growth-radar" className="scard-radar-cta">
                  <IconSignal size={15} />
                  Powered by GrowthRadar
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
