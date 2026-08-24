import Link from "next/link";
import { about } from "@/content/site";
import { IconCompass, IconTelescope } from "./icons/SiteIcons";

export function About() {
  return (
    <section className="section section-alt why-us" id="about">
      <div className="section-header">
        <div className="section-label">{about.sectionLabel}</div>
        <h2 className="section-title">{about.sectionTitle}</h2>
        <h3 className="section-keyword">{about.keywordLine}</h3>
      </div>
      <div className="wu-grid">
        <div className="wcard reveal">
          <div className="wcard-icon wcard-icon--mission" aria-hidden>
            <IconCompass size={22} />
          </div>
          <h3 className="wcard-title">{about.mission.heading}</h3>
          <p className="wcard-desc">{about.mission.body}</p>
        </div>
        <div className="wcard reveal">
          <div className="wcard-icon wcard-icon--vision" aria-hidden>
            <IconTelescope size={22} />
          </div>
          <h3 className="wcard-title">{about.vision.heading}</h3>
          <p className="wcard-desc">{about.vision.body}</p>
        </div>
      </div>
      <p className="about-home-cta">
        <Link href={about.ctaHref} className="scard-cta">
          {about.ctaLabel} →
        </Link>
      </p>
    </section>
  );
}
