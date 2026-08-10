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
  name: "BranDigiOps",
  title: "BranDigiOps — AI-Powered Growth Intelligence for Indian SMBs",
  titleTemplate: "%s | BranDigiOps",
  description:
    "BranDigiOps is India's AI-powered growth intelligence platform for SMBs. We plan, create, and run marketing across search, social, and AI answer engines — so your business grows faster with less guesswork. Based in Bengaluru.",
  keywords: [
    // Core brand
    "BranDigiOps",
    "growth intelligence platform",
    "AI-powered marketing India",
    // Service pillars
    "AI marketing plan",
    "AI content studio",
    "campaign execution",
    "performance analytics",
    "lead conversion pipeline",
    "ecosystem watchdog",
    // AEO / AI search
    "AEO marketing",
    "answer engine optimization",
    "AI overview visibility",
    "ChatGPT visibility India",
    "Perplexity SEO",
    // GrowthRadar — signal-stage intelligence
    "GrowthRadar",
    "PEB radar",
    "construction project intelligence India",
    "government IT tender intelligence",
    "custom radar intelligence",
    "insurance prospect intelligence",
    "SMB lead generation India",
    "pre-tender lead generation India",
    "signal-stage lead generation",
    "tender intelligence India",
    "procurement signals India",
    "leads before RFP India",
    "business contacts before tender",
    "government procurement intelligence India",
    "construction project signals India",
    "competitive intelligence procurement India",
    "lead nurturing India",
    "business development before tender",
    "engage before procurement India",
    // Agency pain points — indexed for buyers researching alternatives
    "digital marketing agency problems India",
    "marketing agency upfront payment India",
    "transparent digital marketing India",
    "marketing reporting dashboard India",
    "week on week marketing performance India",
    "competitor tracking digital marketing India",
    "marketing execution not just strategy India",
    "all-in-one digital marketing platform India",
    "AI marketing platform India",
    "marketing without PowerPoint India",
    "real-time marketing analytics India",
    "marketing agency alternative India",
    "thought leadership content India",
    "AI content marketing India",
    "integrated marketing platform India",
    "marketing watchdog India",
    "ecosystem monitoring digital marketing",
    // Audience
    "digital marketing for Indian SMBs",
    "SMB marketing Bengaluru",
    "marketing agency Bengaluru",
    "marketing automation India",
    "growth marketing agency India",
  ],
  locale: "en_US",
  themeColor: "#7c3aed",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  url: `${siteUrl}/`,
  logo: `${siteUrl}${mediaAssets.logo.src}`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "IN",
  email: "tech@brandigiops.com",
  sameAs: [
    "https://x.com/brandigiops",
    "https://www.linkedin.com/company/113122988",
    "https://www.facebook.com/BrandigiopsMarketing",
    "https://www.instagram.com/brandigiops.marketing",
    "https://www.youtube.com/@BranDigiOpsMarketing",
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
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: `${siteUrl}/`,
    logo: { "@type": "ImageObject", url: `${siteUrl}${mediaAssets.logo.src}` },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blogs?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
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
  sameAs: ["https://linkedin.com/in/satish-asapu-71b8475"],
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
