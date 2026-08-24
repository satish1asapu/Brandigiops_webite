import Link from "next/link";
import { toolsSection } from "@/content/site";
import { IconSignal, IconAnalytics } from "./icons/SiteIcons";

const toolIcons = [IconSignal, IconAnalytics];

export function ToolsSection() {
  return (
    <section className="section section-alt tools-section" id="tools">
      <div className="section-header services-header">
        <div className="section-label">{toolsSection.sectionLabel}</div>
        <h2 className="section-title">{toolsSection.title}</h2>
        <p className="section-subtitle">{toolsSection.sectionSubtitle}</p>
      </div>
      <div className="tools-grid">
        {toolsSection.items.map((tool, i) => {
          const Icon = toolIcons[i];
          return (
            <article key={tool.href} className="scard reveal">
              <div className="scard-top">
                <div className={`scard-icon scard-icon--${i === 0 ? 6 : 5}`} aria-hidden>
                  {Icon && <Icon size={22} />}
                </div>
                <span className="scard-tag">{tool.tag}</span>
              </div>
              <h3 className="scard-title">{tool.name}</h3>
              <p className="scard-desc">{tool.description}</p>
              <Link href={tool.href} className="scard-cta">
                {tool.cta} →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
