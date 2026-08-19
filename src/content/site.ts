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
  { href: "/#solutions", label: "Solutions" },
  { href: "/growth-radar", label: "GrowthRadar" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "Who We Are" },
  { href: "/#contact", label: "Contact" },
] as const;

export const hero = {
  badge: "Growth Intelligence Suite",
  titleLine1: "AI-powered growth intelligence,",
  titleLine2: "built for Indian businesses.",
  titleAccent: "",
  keywordLine:
    "An AI-first digital marketing agency for Indian SMBs — strategy, content, campaigns and lead generation in one platform.",
  description:
    "Grow instantly. Sustain with branding consistency, digital presence, and humanized content — at scale and speed. BranDigiOps combines AI automation with human expertise to give Indian businesses a growth engine that never sleeps.",
  ctaLabel: "Book a 20-minute walkthrough",
  ctaHref: "#contact",
  ctaSecondaryLabel: "See how it works",
  ctaSecondaryHref: "#solutions",
  marqueeItems: [
    "AI-Driven Marketing",
    "Lead Conversion",
    "Performance Analytics",
    "AI Content Studio",
    "Campaign Execution",
    "Ecosystem Watchdog",
  ],
};

export const stats = [
  { value: "AI-First", label: "Strategy & Execution" },
  { value: "Always On", label: "Growth Engine" },
  { value: "One Layer", label: "Every Channel" },
  { value: "Zero Guesswork", label: "Data-Driven Decisions" },
  { value: "No Tool Juggling", label: "Optimised · Automated · Agentic" },
] as const;

export const about = {
  sectionLabel: "Who We Are",
  sectionTitle: "The thinking, the purpose, the people.",
  keywordLine: "The AI marketing team behind BranDigiOps, Bengaluru",
  storyTitle: "Built on enterprise rigour. Driven by real growth.",
  storySubtitle:
    "25 years of mission-critical technology architecture — now applied to your growth stack.",
  mission: {
    heading: "Our Mission",
    body:
      "Most SMBs don't run one marketing system — they run six disconnected ones: a designer here, an ad account there, a spreadsheet somewhere, and no single view of what's working. BranDigiOps brings strategy, content, campaigns, analytics, and lead capture into one intelligence layer that understands your revenue model and acts on it. Less tool-juggling, more compounding growth.",
  },
  vision: {
    heading: "Our Vision",
    body:
      "We want growth to feel less like guesswork and more like operations you can see and improve. A future where an SMB owner in Bengaluru has the same calibre of growth intelligence that enterprise teams pay lakhs for — priced and packaged for how Indian businesses actually run.",
  },
};

export const servicesSection = {
  sectionLabel: "One intelligence layer. Every growth lever.",
  title: "SolutionStack",
  sectionSubtitle:
    "Six integrated solution pillars designed to cover every dimension of your digital growth.",
  items: [
    {
      num: "01",
      icon: "🎯",
      name: "AI-Driven Marketing Plan",
      tag: "Strategy",
      description:
        "Every engagement starts with a plan built around how your business earns, not a generic template. We analyse your budget, map the channels most likely to convert for your model, and define who to target and where — so spend goes where it pays back.",
    },
    {
      num: "02",
      icon: "👁️",
      name: "AI-Powered Ecosystem Watchdog",
      tag: "Monitoring",
      description:
        "Always-on monitoring across your channels and category. It surfaces keyword and content gaps you can win, flags competitor moves, and helps you respond to your audience quickly — so you're reacting to the market in hours, not weeks.",
    },
    {
      num: "03",
      icon: "✏️",
      name: "AI Content Studio",
      tag: "Content",
      description:
        "Platform-native video, imagery, and captions produced at the pace campaigns actually need. Because production is fast, your messaging stays fresh and your creative can be iterated against real performance instead of waiting on the next design cycle.",
    },
    {
      num: "04",
      icon: "🚀",
      name: "Campaign Execution",
      tag: "Campaigns",
      description:
        "We launch and run campaigns across your channels, then use performance data to refine creative and targeting as they run. Includes template and outreach campaigns plus scheduled, strategic social posting — executed, not just advised.",
    },
    {
      num: "05",
      icon: "📊",
      name: "Performance Analytics",
      tag: "Analytics",
      description:
        "One dashboard across Website, Google Business Profile, social, and — increasingly important — AI-search visibility (AEO): whether ChatGPT, Perplexity, and Google's AI Overviews mention your business. Plus competitor tracking, so you know where you stand.",
    },
    {
      num: "06",
      icon: "🔄",
      name: "Lead Conversion Pipeline",
      tag: "Conversion",
      description:
        "Targeted leads matched to your ideal customer profile, drawn from social and other channels, then guided from first touch to customer with follow-up that doesn't drop the ball. Built for multi-channel, not a single source.",
    },
  ],
};

export const socialProof = {
  sectionLabel: "Built with real businesses",
  clients: [
    { descriptor: "Bengaluru PEB construction firm" },
    { descriptor: "Bengaluru Preschool group" },
    { descriptor: "Bengaluru Electronics manufacturer" },
    { descriptor: "Industrial building-materials company" },
  ],
  note: "Named logos and results added as clients approve — e.g. \"content engine live in 3 weeks\"",
};

export const founder = {
  partLabel: "AI, Technology & Automation",
  title: "BranDigiOps",
  tagline: "Enterprise-grade AI and automation, built to run in production.",
  body:
    "BranDigiOps is the AI, technology, and automation core of the platform. Founded by Satish Asapu — 25-year enterprise architect at Credit Suisse, UBS, and Bank of America — it applies the discipline of mission-critical banking infrastructure to your growth stack. AI agents that plan, create, and execute. Automation that removes the manual bottleneck between intelligence and action. No hallucination risk, no hand-waving — the same rigour that kept financial systems at 99.99% availability.",
  points: [
    "AI agent orchestration using Anthropic Claude API — in production",
    "25+ years enterprise architecture: Credit Suisse · UBS · BofA",
    "TOGAF 9 certified — system-level rigour applied to growth",
    "Deterministic guardrails: reliable, repeatable, accountable output",
  ],
  cta: "Satish Asapu on LinkedIn →",
  linkedIn: "https://www.linkedin.com/in/satish-a-71b8475/",
};

export const fuelForBrand = {
  note:
    "AI outputs at BranDigiOps are reviewed and validated through FuelForBrand, our marketing partner, ensuring human oversight at every delivery point.",
  href: "https://fuelforbrand.com/about-us/",
};

export const footer = {
  contactTitle: "Let's see if we're a fit.",
  contactLead:
    "Book a 20-minute walkthrough, or send us your website and we'll run a free AI-visibility (AEO) snapshot on it.",
  nap: {
    name: "BranDigiOps",
    locality: "Bengaluru, Karnataka, India",
    phoneDisplay: "+91 7993191616",
    phoneHref: "tel:+917993191616",
    email: "tech@brandigiops.com",
  },
  email: "tech@brandigiops.com",
  /**
   * Google Calendar Appointment Schedule embed URL.
   * Paste the booking page URL from Google Calendar here.
   * Format: https://calendar.google.com/calendar/appointments/schedules/SCHEDULE_ID
   */
  // bookingCalendarUrl: "https://calendar.app.google/GdvfCMFZbiRUVUgPA",
  bookingCalendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2mK58tYoNzR4yZGX-nXxIlepUzsh1juVkTIlgF_QufvWt5euGyViQ5K6roF2PLsP8Oc9QrvRCs",
  bookingHref: "mailto:tech@brandigiops.com",
  whatsappHref: "https://wa.me/917993191616",
  copyright: "BranDigiOps — © 2026. All Rights Reserved.",
  social: [
    { label: "X", href: "https://x.com/brandigiops" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/113122988" },
    { label: "Facebook", href: "https://www.facebook.com/BrandigiopsMarketing" },
    { label: "Instagram", href: "https://www.instagram.com/brandigiops.marketing" },
    { label: "YouTube", href: "https://www.youtube.com/@BranDigiOpsMarketing" },
    {
      label: "Google",
      href: "https://www.google.com/search?q=BranDigiOps+Marketing+:+AI+Digital+Marketing&stick=H4sIAAAAAAAA_-NgU1I1qDBOSkw1NDQ0MElLMjQ2SbW0MqgwMU-1NE02skgEyhklplgsYtVxKkrMc8lMz_QvKFbwTSzKTi3JzEtXsFJw9FQACZck5iCEAaUj6ntYAAAA&hl=en",
    },
  ],
};
