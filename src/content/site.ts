/**
 * Site copy + media paths (non-blog).
 * Image SEO (alt, title, dimensions): `src/content/media-assets.ts`.
 * Replace files in /public/images/ and update `mediaAssets` when filenames or sizes change.
 */
import { mediaAssets } from "./media-assets";

/** Shorthand paths — prefer `mediaAssets` in components when you need alt/title/width/height. */
export const siteImages = {
  heroBackground: mediaAssets.heroBackground.src,
  logo: mediaAssets.logo.src,
  aboutMission: mediaAssets.aboutMission.src,
  aboutVision: mediaAssets.aboutVision.src,
  blogThumb1: mediaAssets.blogThumb1.src,
  blogThumb2: mediaAssets.blogThumb2.src,
  blogThumb3: mediaAssets.blogThumb3.src,
} as const;

export const navigation = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#contact", label: "Contact" },
] as const;

export const hero = {
  wordLeft: "Growth",
  wordRight: "Surge",
  title: "AI-Powered Digital Marketing & Growth Operations",
  description:
    "We don't just aim for growth — we engineer it. AI-powered digital marketing that guarantees seamless lead conversion and maximum ROI.",
  ctaLabel: "Our Services",
  ctaHref: "#services",
  taglineLines: ["Precision With", "Every Step."],
  marqueeItems: [
    "AI-Driven Marketing",
    "Lead Conversion",
    "Performance Analytics",
    "Content Studio",
    "Campaign Execution",
    "Ecosystem Watchdog",
  ],
};

export const about = {
  sectionTitle: "Who We Are",
  mission: {
    headingLines: ["Our", "Mission"],
    body:
      "We transform fragmented marketing into a unified, high-converting revenue ecosystem. Our AI-powered platform permanently bridges customer acquisition with flawless operational execution, engineering scalable backend infrastructures that effortlessly process data-driven traffic. We eradicate operational chaos — arming you with the intelligent automation to outright dominate your market.",
  },
  vision: {
    headingLines: ["Our", "Vision"],
    body:
      "Our vision is to engineer a future where digital growth is a mathematical certainty. We empower ambitious brands with a predictive, future-proof ecosystem that completely eliminates operational limitations. By permanently erasing the boundaries between high-intent traffic generation and flawless backend execution, we are setting the global standard for automated customer acquisition.",
  },
};

export const servicesSection = {
  title: "Services",
  items: [
    {
      num: "01",
      name: "AI-Driven Marketing Plan",
      tag: "Strategy",
      description:
        "Every successful campaign is anchored by our bespoke Marketing Plan, designed to safeguard your investment and accelerate expansion. We conduct rigorous budget analyses to strategically allocate resources for maximum return on investment. Our data-driven approach identifies high-converting channels and pinpoints your exact target audience.",
    },
    {
      num: "02",
      name: "AI-Powered Ecosystem Watchdog",
      tag: "Monitoring",
      description:
        "We deploy an intelligent digital Watchdog across your platforms to keep your brand at the forefront of industry trends. This active monitoring system identifies lucrative keyword gaps for untapped market share and delivers real-time updates. It also acts as a frontline community management tool, generating strategic responses to ensure highly responsive audience engagement.",
    },
    {
      num: "03",
      name: "High-Converting AI Content Studio",
      tag: "Content",
      description:
        "To fuel your strategy with high-converting creatives, our Content Studio rapidly produces platform-native video ads, striking custom imagery, and compelling captions at scale. By streamlining production, your campaigns launch swiftly, messaging stays remarkably fresh, and creatives iterate instantly based on real-time performance data.",
    },
    {
      num: "04",
      name: "Performance-Driven Campaign Execution",
      tag: "Campaigns",
      description:
        "We drive your growth strategy forward by ensuring your targeted campaigns launch faster and your brand messaging remains consistently fresh. By leveraging real-time performance data, we instantly iterate and optimize your campaign assets to maximize audience engagement and ROI. Our comprehensive execution encompasses highly effective template and contact campaigns, seamlessly integrated with proactive, strategic social media posting.",
    },
    {
      num: "05",
      name: "Strategic Performance Analytics",
      tag: "Analytics",
      description:
        "We empower your brand with transparent, strategic performance analytics ensuring every initiative aligns with your bottom line. Our comprehensive dashboard delivers deep insights across Website, Google My Business, Social Media, and advanced AIPO tracking for AI-driven search engines. We also provide robust Competitor Analysis to keep you actively ahead of the market.",
    },
    {
      num: "06",
      name: "Intelligent Lead Conversion Pipeline",
      tag: "Conversion",
      description:
        "To fuel your sales funnel and drive sustainable revenue, we deliver highly targeted client leads tailored to your ideal customer profile. We specialize in generating impactful Social Media Leads and high-quality Legacy Leads for a comprehensive, multi-channel approach. By seamlessly guiding your audience from initial prospect to loyal customer, we help you maximize conversions and rapidly accelerate your business expansion.",
    },
  ],
};

export const footer = {
  contactTitle: "Get In Touch",
  contactLead:
    "Ready to elevate your brand's digital operations? Contact our team today.",
  email: "tech@brandigiops.com",
  copyright: "Brandigiops — © 2026. All Rights Reserved.",
  social: [
    { label: "X", href: "https://x.com/brandigiops" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/113122988" },
    { label: "Facebook", href: "https://www.facebook.com/BrandigiopsMarketing" },
    { label: "Instagram", href: "https://www.instagram.com/brandigiops.marketing" },
    { label: "YouTube", href: "https://www.youtube.com/@BranDigiOpsMarketing" },
],
};
