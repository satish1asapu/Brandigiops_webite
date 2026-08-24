/**
 * Dedicated /solutions page copy.
 * Homepage cards link here via `servicesSection.items[].href` in site.ts.
 */
import { servicesSection } from "./site";

export const solutionsPage = {
  sectionLabel: "SolutionStack",
  title: "AI marketing services for Indian SMBs",
  keywordLine:
    "Strategy, content, campaigns, analytics, and lead intelligence in one layer",
  subtitle:
    "Six connected pillars — not six disconnected vendors. Open any service below, then book a walkthrough if it fits how you sell.",
} as const;

export type SolutionRelatedLink = {
  href: string;
  label: string;
};

export type SolutionDetail = {
  slug: (typeof servicesSection.items)[number]["slug"];
  whoFor: string;
  howItWorks: string;
  outcomes: readonly string[];
  related: readonly SolutionRelatedLink[];
};

export const solutionDetails: readonly SolutionDetail[] = [
  {
    slug: "marketing-plan",
    whoFor:
      "Indian SMB owners and marketing leads who are spending on ads or agencies but cannot explain why the mix should work for their revenue model.",
    howItWorks:
      "We classify how you actually earn, map budget to the channels most likely to convert, and lock targeting before creative or media starts. The plan is the brief every other pillar executes against.",
    outcomes: [
      "A channel and budget map tied to how you make money — not a generic template",
      "Clear ICP and geo targeting for India",
      "Prioritised 90-day execution sequence",
    ],
    related: [
      {
        href: "/blogs/revenue-engine-intelligence-classification",
        label: "Revenue Engine Intelligence",
      },
      {
        href: "/blogs/ai-powered-marketing-budget-intelligence",
        label: "Marketing Budget Intelligence",
      },
    ],
  },
  {
    slug: "ecosystem-watchdog",
    whoFor:
      "Teams that find out about competitor moves, keyword gaps, or category shifts weeks late — after the window to respond has closed.",
    howItWorks:
      "Always-on monitoring across your channels and category. It flags content and keyword gaps, competitor activity, and audience signals so you can react in hours, not at the next monthly review.",
    outcomes: [
      "Keyword and content gaps you can still win",
      "Competitor move alerts in your category",
      "Audience signals fed back into the plan and content studio",
    ],
    related: [{ href: "/blogs", label: "Growth marketing insights" }],
  },
  {
    slug: "content-studio",
    whoFor:
      "Businesses stuck waiting on a designer cycle while campaigns need fresh video, imagery, and captions this week.",
    howItWorks:
      "Platform-native creative produced at campaign pace, then iterated against live performance instead of a quarterly brand refresh. Human review sits in the loop before anything goes out.",
    outcomes: [
      "Video, stills, and captions sized for the channels you actually use",
      "Faster creative iteration against real results",
      "Brand-consistent output without a six-tool production stack",
    ],
    related: [
      {
        href: "/blogs/ai-powered-execution-ready-marketing-planner",
        label: "Execution-ready marketing planner",
      },
    ],
  },
  {
    slug: "campaign-execution",
    whoFor:
      "Teams that get a strategy deck, then still have to hire someone else to launch, post, and optimise.",
    howItWorks:
      "We run the campaigns — paid, outreach, and scheduled social — and use performance data to retune creative and targeting while they are live. Execution is the product, not a slide.",
    outcomes: [
      "Campaigns launched and managed across your active channels",
      "Creative and targeting refined from live data",
      "Scheduled strategic posting, not last-minute bursts",
    ],
    related: [
      {
        href: "/blogs/ai-powered-execution-ready-marketing-planner",
        label: "Execution-ready marketing planner",
      },
    ],
  },
  {
    slug: "performance-analytics",
    whoFor:
      "Owners who still assemble a monthly PowerPoint from Google Analytics, ads, social, and spreadsheets — with no view of AI-search visibility.",
    howItWorks:
      "One dashboard across website, Google Business Profile, social, paid, and AEO: whether ChatGPT, Perplexity, and Google AI Overviews mention you. Week-on-week and competitor context included.",
    outcomes: [
      "A single live view instead of six logins",
      "GBP, web, social, and paid in one place",
      "AI-search (AEO) visibility tracked alongside classic SEO",
    ],
    related: [
      { href: "/free-aeo-audit", label: "Free AEO audit" },
    ],
  },
  {
    slug: "lead-conversion",
    whoFor:
      "B2B and project-led businesses in India that enter too late — after the RFP is public and the shortlist is already informal.",
    howItWorks:
      "Signal-stage leads matched to your ICP from public regulatory filings, procurement portals, and market signals. Contacts are enriched and followed up across channels so the first signal becomes a conversation.",
    outcomes: [
      "Prospects surfaced before they formally go to market",
      "ICP-matched lists with contact enrichment",
      "Structured multi-channel follow-up, not a dumped Excel",
    ],
    related: [
      { href: "/growth-radar", label: "GrowthRadar pre-tender lead generation" },
    ],
  },
];
