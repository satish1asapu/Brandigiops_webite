import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { servicesSection } from "@/content/site";
import { solutionDetails, solutionsPage } from "@/content/solutions";
import { siteConfig, siteUrl } from "@/content/seo";
import {
  IconTarget,
  IconEye,
  IconSparkles,
  IconRocket,
  IconAnalytics,
  IconSignal,
} from "@/components/icons/SiteIcons";

export const metadata: Metadata = {
  title: "SolutionStack — AI Marketing Services for Indian SMBs",
  description:
    "Six BranDigiOps solution pillars for Indian SMBs: marketing plan, ecosystem monitoring, content studio, campaign execution, performance analytics, and lead conversion.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    url: "/solutions",
    title: "SolutionStack — AI Marketing Services | BranDigiOps",
    description:
      "Six connected growth pillars — strategy, content, campaigns, analytics, and pre-tender lead intelligence — for Indian SMBs.",
  },
};

const serviceIcons = [
  IconTarget,
  IconEye,
  IconSparkles,
  IconRocket,
  IconAnalytics,
  IconSignal,
];

const detailsBySlug = Object.fromEntries(
  solutionDetails.map((d) => [d.slug, d]),
);

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BranDigiOps SolutionStack",
    description: servicesSection.sectionSubtitle,
    url: `${siteUrl}/solutions`,
    itemListElement: servicesSection.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        url: `${siteUrl}${item.href}`,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: siteConfig.name,
        },
        areaServed: "IN",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      />
      <HomeClientChrome />
      <Header />
      <main>
        <section className="section page-hero page-hero--center sol-page">
          <div className="section-header services-header">
            <div className="section-label">{solutionsPage.sectionLabel}</div>
            <h1 className="section-title">{servicesSection.title}</h1>
            <p className="section-subtitle">{servicesSection.sectionSubtitle}</p>
          </div>

          <div className="sol-page-grid">
            {servicesSection.items.map((item, i) => {
              const Icon = serviceIcons[i];
              const detail = detailsBySlug[item.slug];
              const isLeadConversion = item.num === "06";
              return (
                <article
                  key={item.slug}
                  id={item.slug}
                  className={`scard reveal${isLeadConversion ? " scard--radar" : ""}`}
                >
                  <div className="scard-top">
                    <div className={`scard-icon scard-icon--${i + 1}`} aria-hidden>
                      {Icon && <Icon size={22} />}
                    </div>
                    <span className="scard-tag">{item.tag}</span>
                  </div>
                  <div className="scard-num">{item.num}</div>
                  <h2 className="scard-title">{item.name}</h2>
                  <p className="scard-desc">{item.description}</p>
                  {detail && (
                    <details className="sol-card-more">
                      <summary>More detail</summary>
                      <h3 className="wcard-subhead">Who this is for</h3>
                      <p className="sol-block-copy">{detail.whoFor}</p>
                      <h3 className="wcard-subhead">How it works</h3>
                      <p className="sol-block-copy">{detail.howItWorks}</p>
                      <h3 className="wcard-subhead">What you get</h3>
                      <ul className="sol-outcomes">
                        {detail.outcomes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      {detail.related.length > 0 && (
                        <p className="sol-related">
                          Related:{" "}
                          {detail.related.map((link, idx) => (
                            <span key={link.href}>
                              {idx > 0 && " · "}
                              <Link href={link.href}>{link.label}</Link>
                            </span>
                          ))}
                        </p>
                      )}
                    </details>
                  )}
                  <div className="scard-ctas">
                    <Link href="/#contact" className="scard-cta">
                      Book a walkthrough
                    </Link>
                    {"extraCta" in item && item.extraCta && (
                      <Link href={item.extraCta.href} className="scard-cta">
                        <IconSignal size={15} />
                        {item.extraCta.label}
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
