/**
 * Central SEO + social preview configuration.
 * Used by src/app/layout.tsx (metadata) and README points here first.
 *
 * Optional verification tokens (add when you have them from Search Console / Bing):
 * - google: "google-site-verification=..."
 * - yandex: "..."
 * - other: { "me": "https://..." }
 */
import { mediaAssets } from "./media-assets";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brandigiops.com";

/** Default Open Graph / Twitter preview — synced with `mediaAssets.heroBackground`. */
export const defaultOgImage = {
  path: mediaAssets.heroBackground.src,
  width: mediaAssets.heroBackground.width,
  height: mediaAssets.heroBackground.height,
  alt: mediaAssets.heroBackground.alt,
} as const;

export const siteConfig = {
  name: "Brandigiops",
  title: "Brandigiops - AI-Powered Digital Marketing",
  titleTemplate: "%s | Brandigiops",
  description:
    "Brandigiops helps brands grow with AI-powered digital marketing, performance analytics, SEO, content studio, and conversion-focused campaigns that maximize ROI.",
  /** Used in keywords meta + documentation for content team */
  keywords: [
    "AI digital marketing",
    "performance analytics",
    "SEO",
    "content studio",
    "lead conversion",
    "marketing automation",
    "Brandigiops",
    "growth marketing",
    "campaign execution",
    "digital advertising",
    "marketing analytics",
    "brand strategy",
    "conversion rate optimization",
  ],
  locale: "en_US",
  themeColor: "#0a0a0f",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: `${siteUrl}/`,
  logo: `${siteUrl}${mediaAssets.logo.src}`,
  description: siteConfig.description,
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: `${siteUrl}/`,
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: `${siteUrl}/`,
    logo: { "@type": "ImageObject", url: `${siteUrl}${mediaAssets.logo.src}` },
  },
} as const;

/** Combined structured data for <script type="application/ld+json"> */
export const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd],
} as const;
