import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Founder } from "@/components/Founder";
import { PageLongform } from "@/components/PageLongform";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { about, fuelForBrand } from "@/content/site";
import { aboutLongform } from "@/content/about-page";
import { IconCompass, IconTelescope, IconShield } from "@/components/icons/SiteIcons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — AI Marketing Team in Bengaluru",
  description:
    "Meet the BranDigiOps AI marketing team in Bengaluru — enterprise architects building one growth-intelligence layer for Indian SMBs, with human review on every delivery.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "Who We Are — AI Marketing Team in Bengaluru | BranDigiOps",
    description:
      "Meet the BranDigiOps AI marketing team in Bengaluru — enterprise architects building one growth-intelligence layer for Indian SMBs, with human review on every delivery.",
  },
};

export default function AboutPage() {
  return (
    <>
      <HomeClientChrome />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Are", path: "/about" },
        ]}
      />
      <Header />
      <main>

        <section className="section page-hero page-hero--center">
          <div className="section-label">{about.sectionLabel}</div>
          <h1 className="section-title">{about.sectionTitle}</h1>
          <h2 className="section-keyword">{about.keywordLine}</h2>
          <p className="section-subtitle">
            BranDigiOps exists to give Indian SMBs the same calibre of growth
            intelligence that enterprise teams pay lakhs for — priced for how
            real businesses run, built by people who have operated at both ends
            of that scale.
          </p>
        </section>

        <section className="section section-alt why-us">
          <div className="wu-grid wu-grid--wide">
            <div className="wcard reveal">
              <div className="wcard-icon wcard-icon--mission" aria-hidden>
                <IconCompass size={22} />
              </div>
              <h2 className="wcard-title">{about.mission.heading}</h2>
              <h3 className="wcard-subhead">Why Indian SMBs need one growth layer</h3>
              <p className="wcard-desc">{about.mission.body}</p>
            </div>
            <div className="wcard reveal">
              <div className="wcard-icon wcard-icon--vision" aria-hidden>
                <IconTelescope size={22} />
              </div>
              <h2 className="wcard-title">{about.vision.heading}</h2>
              <h3 className="wcard-subhead">Enterprise-grade intelligence, SMB pricing</h3>
              <p className="wcard-desc">{about.vision.body}</p>
            </div>
          </div>
        </section>

        <PageLongform
          id="why-we-exist"
          label={aboutLongform.problem.label}
          title={aboutLongform.problem.title}
          paragraphs={aboutLongform.problem.paragraphs}
        />

        <PageLongform
          id="how-we-work"
          alt
          label={aboutLongform.layer.label}
          title={aboutLongform.layer.title}
          paragraphs={aboutLongform.layer.paragraphs}
        >
          <p className="page-longform-links">
            Read the six pillars on{" "}
            <Link href="/solutions">SolutionStack</Link>. Request a{" "}
            <Link href="/free-aeo-audit">free AEO audit</Link> if you want a
            snapshot of AI-search visibility first.
          </p>
        </PageLongform>

        <PageLongform
          id="who-we-serve"
          label={aboutLongform.who.label}
          title={aboutLongform.who.title}
          paragraphs={aboutLongform.who.paragraphs}
          bullets={aboutLongform.who.bullets}
        />

        <section className="section our-story">
          <div className="section-header">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">{about.storyTitle}</h2>
            <p className="section-subtitle">{about.storySubtitle}</p>
          </div>

          <Founder />

          <aside className="ffb-note">
            <span className="ffb-note-icon" aria-hidden>
              <IconShield size={15} />
            </span>
            <p>
              <strong>Technology risk mitigation:</strong>{" "}
              {fuelForBrand.note}{" "}
              <a href={fuelForBrand.href} target="_blank" rel="noopener noreferrer">
                {fuelForBrand.href.replace("https://", "")}
              </a>
            </p>
          </aside>
        </section>

        <PageLongform
          id="working-together"
          alt
          label={aboutLongform.start.label}
          title={aboutLongform.start.title}
          paragraphs={aboutLongform.start.paragraphs}
        >
          <p className="page-longform-links">
            <Link href="/solutions">SolutionStack</Link>
            {" · "}
            <Link href="/growth-radar">GrowthRadar pre-tender leads</Link>
            {" · "}
            <Link href="/free-aeo-audit">Free AEO audit</Link>
            {" · "}
            <Link href="/blogs">Growth marketing insights</Link>
            {" · "}
            <Link href="/#contact">Book a walkthrough</Link>
          </p>
        </PageLongform>

      </main>
      <Footer />
    </>
  );
}
