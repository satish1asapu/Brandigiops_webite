import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { PageLongform } from "@/components/PageLongform";
import { growthRadar } from "@/content/growth-radar";
import {
  IconBuilding,
  IconCpu,
  IconSignal,
  IconShield,
  IconSliders,
} from "@/components/icons/SiteIcons";
import Link from "next/link";

export const metadata = {
  title: "Pre-Tender Lead Generation India — GrowthRadar",
  description:
    "Pre-tender lead generation for Indian businesses — PEB, government IT tenders, insurance prospects and custom sector intelligence before RFPs go live.",
  alternates: { canonical: "/growth-radar" },
  openGraph: {
    type: "website",
    url: "/growth-radar",
    title: "Pre-Tender Lead Generation India — GrowthRadar | BranDigiOps",
    description:
      "Pre-tender lead generation for Indian businesses — PEB, government IT tenders, insurance prospects and custom sector intelligence before RFPs go live.",
  },
};

const radarIcons = [IconBuilding, IconCpu, IconSignal, IconShield, IconSliders];

export default function GrowthRadarPage() {
  const { longform } = growthRadar;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "GrowthRadar", path: "/growth-radar" },
        ]}
      />
      <HomeClientChrome />
      <Header />
      <main className="gr-main">
        <section className="section page-hero gr-hero">
          <div className="section-label">{growthRadar.badge}</div>
          <h1 className="section-title gr-hero-title">{growthRadar.title}</h1>
          <h2 className="section-keyword">{growthRadar.keywordLine}</h2>
          <p className="section-subtitle gr-hero-sub">{growthRadar.subtitle}</p>
          <p className="gr-hero-desc">{growthRadar.description}</p>
        </section>

        <PageLongform
          id="what-pre-tender-means"
          label={longform.meaning.label}
          title={longform.meaning.title}
          paragraphs={longform.meaning.paragraphs}
        />

        <section className="section section-alt">
          <div className="section-header services-header">
            <div className="section-label">Sector radars</div>
            <h2 className="section-title">Pick the engine that matches how you sell</h2>
            <p className="section-subtitle">
              Each Radar is a live product with its own sources, scoring, and price band — not a renamed spreadsheet.
            </p>
          </div>
          <div className="gr-grid">
            {growthRadar.radars.map((r, i) => {
              const Icon = radarIcons[i];
              const isCustom = r.id === "custom-radar";
              return (
                <div
                  key={r.id}
                  id={r.id}
                  className={`gr-card gr-card--${i + 1}${isCustom ? " gr-card--custom" : ""}`}
                >
                  <div className="gr-card-header">
                    <span className="gr-card-icon" aria-hidden>
                      {Icon && <Icon size={24} />}
                    </span>
                    <span className={`gr-card-pricing${isCustom ? " gr-card-pricing--custom" : ""}`}>
                      {r.pricing}
                    </span>
                  </div>
                  <h2 className="gr-card-name">{r.name}</h2>
                  <h3 className="gr-card-h3">What signals we track</h3>
                  <p className="gr-card-tagline">{r.tagline}</p>
                  <h3 className="gr-card-h3">How early the signal appears</h3>
                  <p className="gr-card-summary">{r.summary}</p>
                  <div className="gr-card-deliverables">
                    <h3 className="gr-deliverables-label">
                      {isCustom ? "How it works" : "Who this is for"}
                    </h3>
                    <ul>
                      {r.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`gr-card-promise${isCustom ? " gr-card-promise--custom" : ""}`}>
                    <span className="gr-promise-label">Our promise</span>
                    <p>{r.promise}</p>
                  </div>
                  <div className="gr-card-footer">
                    <p className="gr-pricing-note">{r.pricingNote}</p>
                    <Link
                      href="/#contact"
                      className={`gr-cta${isCustom ? " gr-cta--custom" : ""}`}
                    >
                      {isCustom
                        ? "Design a custom sector intelligence radar →"
                        : "See how GrowthRadar finds pre-tender leads →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <PageLongform
          id="how-a-radar-runs"
          label={longform.method.label}
          title={longform.method.title}
          paragraphs={longform.method.paragraphs}
        />

        <PageLongform
          id="who-growthradar-is-for"
          alt
          label={longform.fit.label}
          title={longform.fit.title}
          paragraphs={longform.fit.paragraphs}
          bullets={longform.fit.bullets}
        />

        <PageLongform
          id="start-growthradar"
          label={longform.next.label}
          title={longform.next.title}
          paragraphs={longform.next.paragraphs}
        >
          <p className="page-longform-links">
            <Link href="/solutions#lead-conversion">Lead conversion on SolutionStack</Link>
            {" · "}
            <Link href="/about">Who we are</Link>
            {" · "}
            <Link href="/free-aeo-audit">Free AEO audit</Link>
            {" · "}
            <Link href="/#contact">Book a walkthrough</Link>
          </p>
        </PageLongform>
      </main>
      <Footer />
    </>
  );
}
