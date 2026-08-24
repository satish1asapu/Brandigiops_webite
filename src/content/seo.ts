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

/** Apex domain only — never www (www has no DNS record). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandigiops.com";

/** Default Open Graph / Twitter preview — synced with `mediaAssets.heroBackground`. */
export const defaultOgImage = {
  path: mediaAssets.heroBackground.src,
  width: mediaAssets.heroBackground.width,
  height: mediaAssets.heroBackground.height,
  alt: mediaAssets.heroBackground.alt,
} as const;

export const siteConfig = {
  name: "BranDigiOps",
  title: "AI Growth Intelligence for Indian SMBs | BranDigiOps",
  titleTemplate: "%s | BranDigiOps",
  description:
    "AI-first digital marketing for Indian SMBs — strategy, content, campaigns, and pre-tender lead intelligence in one platform. Based in Bengaluru.",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  url: `${siteUrl}/`,
  logo: `${siteUrl}${mediaAssets.logo.src}`,
  image: `${siteUrl}${mediaAssets.logo.src}`,
  description: siteConfig.description,
  telephone: "+91-7993191616",
  priceRange: "INR",
  email: "tech@brandigiops.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "IN",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  sameAs: [
    "https://x.com/brandigiops",
    "https://www.linkedin.com/company/113122988",
    "https://www.facebook.com/BrandigiopsMarketing",
    "https://www.instagram.com/brandigiops.marketing",
    "https://www.youtube.com/@BranDigiOpsMarketing",
    "https://www.google.com/search?q=BranDigiOps+Marketing+:+AI+Digital+Marketing&stick=H4sIAAAAAAAA_-NgU1I1qDBOSkw1NDQ0MElLMjQ2SbW0MqgwMU-1NE02skgEyhklplgsYtVxKkrMc8lMz_QvKFbwTSzKTi3JzEtXsFJw9FQACZck5iCEAaUj6ntYAAAA&hl=en",
  ],
  knowsAbout: [
    "AI-powered digital marketing",
    "Answer Engine Optimization",
    "Growth intelligence for Indian SMBs",
    "Signal-stage lead generation",
    "Pre-tender business intelligence",
    "Government procurement intelligence India",
    "Construction project signal monitoring",
    "Lead generation before RFP",
    "Competitive intelligence before tender",
    "Performance analytics",
    "AI content creation",
    "Lead nurturing and conversion",
    "Integrated marketing platform",
    "Real-time marketing dashboard",
    "Competitive ecosystem monitoring",
    "Thought leadership content marketing",
    "Marketing execution automation",
    "Week-on-week performance benchmarking",
    "Competitor tracking and gap analysis",
    "Transparent performance reporting",
    "AI marketing strategy for Indian SMBs",
  ],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.name,
  url: `${siteUrl}/`,
  description: siteConfig.description,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: `${siteUrl}/`,
    logo: { "@type": "ImageObject", url: `${siteUrl}${mediaAssets.logo.src}` },
  },
} as const;

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#solutions`,
  name: "BranDigiOps Growth Intelligence Solutions",
  description:
    "Six integrated solution pillars covering every dimension of digital growth for Indian SMBs.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI-Driven Marketing Plan",
        description:
          "Revenue-model-first marketing strategy that maps channels, budget, and targeting to how your business actually earns.",
        url: `${siteUrl}/solutions#marketing-plan`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI-Powered Ecosystem Watchdog",
        description:
          "Always-on monitoring across channels and category — surfaces keyword gaps, competitor moves, and audience signals in hours.",
        url: `${siteUrl}/solutions#ecosystem-watchdog`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Content Studio",
        description:
          "Platform-native video, imagery, and captions produced at campaign pace — iterated against real performance data.",
        url: `${siteUrl}/solutions#content-studio`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Campaign Execution",
        description:
          "Full campaign management across digital channels — launched, optimised, and reported with live performance data.",
        url: `${siteUrl}/solutions#campaign-execution`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Performance Analytics",
        description:
          "Unified dashboard across website, Google Business Profile, social, and AI search visibility (AEO/GEO) plus competitor tracking.",
        url: `${siteUrl}/solutions#performance-analytics`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Lead Conversion Pipeline",
        description:
          "Signal-stage lead intelligence matched to your ICP — surfacing prospects from public regulatory filings, procurement portals, and market signals before they formally go to market. Leads are enriched with contact details and guided from first signal to customer with structured multi-channel follow-up.",
        url: `${siteUrl}/solutions#lead-conversion`,
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
      },
    },
  ],
} as const;

/**
 * Founder schema — E-E-A-T signal for Google's trust layer.
 * A verifiable Person entity (LinkedIn URL) connected to the Organization
 * tells crawlers and AI tools there is a real, credentialed human behind the platform.
 */
export const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#founder`,
  name: "Satish Asapu",
  jobTitle: "Founder & Enterprise Architect",
  description:
    "25-year enterprise architect with experience at Credit Suisse, UBS, and Bank of America. TOGAF 9 certified. Founder of BranDigiOps, applying mission-critical banking infrastructure discipline to AI-powered growth intelligence for Indian SMBs.",
  url: `${siteUrl}/about`,
  sameAs: ["https://www.linkedin.com/in/satish-a-71b8475/"],
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
  knowsAbout: [
    "Enterprise architecture",
    "AI agent orchestration",
    "Growth intelligence",
    "Digital marketing automation",
    "Answer Engine Optimization",
  ],
} as const;

/** Combined structured data for <script type="application/ld+json"> in root layout */
export const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, servicesJsonLd, founderJsonLd],
} as const;
