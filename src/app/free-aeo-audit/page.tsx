import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { ContactForm } from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { siteConfig, siteUrl } from "@/content/seo";

export const metadata: Metadata = {
  title: "Free AEO Audit — AI Visibility Check India",
  description:
    "Request a free AEO audit for your Indian business website — see how ChatGPT, Perplexity and AI Overviews see you today.",
  alternates: { canonical: "/free-aeo-audit" },
  openGraph: {
    type: "website",
    url: "/free-aeo-audit",
    title: "Free AEO Audit — AI Visibility Check India | BranDigiOps",
    description:
      "Request a free AEO audit for your Indian business website — see how ChatGPT, Perplexity and AI Overviews see you today.",
  },
};

export default function FreeAeoAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free AEO Audit",
    description:
      "Free AI-visibility snapshot showing how answer engines currently cite or miss your business.",
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
    },
    areaServed: "IN",
    url: `${siteUrl}/free-aeo-audit`,
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
          { name: "Free AEO Audit", path: "/free-aeo-audit" },
        ]}
      />
      <HomeClientChrome />
      <Header />
      <main>
        <section className="section page-hero">
          <div className="section-label">Free offer</div>
          <h1 className="section-title">Free AEO audit for Indian businesses</h1>
          <p className="section-subtitle">
            Send your website URL and WhatsApp number. We run a short AI-visibility
            snapshot and show where answer engines mention — or miss — your brand.
          </p>
          <ContactForm source="free-aeo-audit" className="audit-form" />
        </section>
      </main>
      <Footer />
    </>
  );
}
