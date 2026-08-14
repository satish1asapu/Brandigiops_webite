import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Founder } from "@/components/Founder";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { about, fuelForBrand } from "@/content/site";
import { IconCompass, IconTelescope, IconShield } from "@/components/icons/SiteIcons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — AI Marketing Team in Bengaluru",
  description:
    "Meet the BranDigiOps AI marketing team in Bengaluru — enterprise architects building growth intelligence for Indian SMBs.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "Who We Are — AI Marketing Team in Bengaluru | BranDigiOps",
    description:
      "Meet the BranDigiOps AI marketing team in Bengaluru — enterprise architects building growth intelligence for Indian SMBs.",
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

        {/* Page hero */}
        <section className="section page-hero">
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

        {/* Mission + Vision */}
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

        {/* Our Story */}
        <section className="section our-story">
          <div className="section-header">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">{about.storyTitle}</h2>
            <p className="section-subtitle">{about.storySubtitle}</p>
          </div>

          <Founder />

          <p className="about-related">
            See how{" "}
            <Link href="/growth-radar">
              GrowthRadar finds pre-tender leads for Indian businesses
            </Link>{" "}
            — or read our{" "}
            <Link href="/blogs">growth marketing insights for India</Link>.
          </p>

          {/* Human oversight note — subtle trust signal, not a feature */}
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

      </main>
      <Footer />
    </>
  );
}
