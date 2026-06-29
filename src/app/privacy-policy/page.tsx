import type { Metadata } from "next";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import { privacyPolicyMeta } from "@/content/privacy-policy";
import { siteConfig, siteUrl } from "@/content/seo";

export const metadata: Metadata = {
  title: privacyPolicyMeta.title,
  description: privacyPolicyMeta.description,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/privacy-policy",
    title: `${privacyPolicyMeta.title} | ${siteConfig.name}`,
    description: privacyPolicyMeta.description,
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: privacyPolicyMeta.title,
    description: privacyPolicyMeta.description,
    url: `${siteUrl}/privacy-policy`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  return (
    <> 
      <HomeClientChrome />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="privacy-simple-page">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
