/**
 * FAQ content for AEO (Answer Engine Optimization).
 * Used by FAQ.tsx component which injects FAQPage JSON-LD structured data.
 * Questions mirror how buyers phrase queries to ChatGPT, Perplexity, and Google AI Overviews.
 *
 * Optional `ctas` field: array of { label, href, icon? } rendered as action links below the answer.
 * The `answer` text (used for JSON-LD) should remain plain text — no HTML.
 */

export type FaqCta = {
  label: string;
  href: string;
  icon: "calendar" | "whatsapp" | "email";
};

export type Faq = {
  question: string;
  answer: string;
  ctas?: FaqCta[];
};

export const faqs: Faq[] = [
  {
    question: "What is BranDigiOps and what does it do?",
    answer:
      "BranDigiOps is an AI-powered growth intelligence platform built for Indian SMBs. It plans, creates, and runs marketing across search, social, and AI answer engines — in one integrated layer. Instead of juggling six disconnected tools, you get strategy, content, campaigns, analytics, and lead capture under a single system that understands how your business earns.",
  },
  {
    question: "How is BranDigiOps different from a regular digital marketing agency?",
    answer:
      "Most agencies start with channels. BranDigiOps starts with your revenue model — footfall, leads, subscriptions, or high-ticket deals — and builds the plan around that. AI reads your category in real time, generates content at campaign pace, and tracks results including visibility in AI search tools like ChatGPT and Perplexity. It combines the strategic depth of an enterprise growth team with pricing built for Indian SMBs.",
  },
  {
    question: "What is Answer Engine Optimization (AEO) and why does it matter?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of structuring your content so it is cited and surfaced by AI tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini. Increasingly, buyers ask AI assistants — not just Google — for business recommendations. If your business is not in the AI's training and retrieval layer, you are invisible to that audience. BranDigiOps tracks your AEO visibility and produces content designed to earn AI citations.",
  },
  {
    question: "What is GrowthRadar?",
    answer:
      "GrowthRadar is BranDigiOps's suite of sector-specific AI intelligence engines. Each Radar continuously reads public regulatory filings, procurement portals, and market signals, then resolves them into scored, actionable leads — delivered as a ranked 'reach out now' list. The key difference from a standard lead list is timing: GrowthRadar surfaces signals before a tender or RFP is formally issued, giving you the window to build familiarity and trust before competitors even know the opportunity exists. Available radars cover: PEB construction, government IT hardware tenders, general SMB leads, and commercial insurance prospects.",
  },
  {
    question: "Which sectors does GrowthRadar cover?",
    answer:
      "GrowthRadar currently covers four ready-to-deploy sectors plus a fully custom option: (1) PEB Radar — for pre-engineered building fabricators, reading public environmental clearances, land authority allotments, and regulatory filings to identify advancing construction projects; (2) Hardware Radar — government IT tender intelligence from central and state e-procurement portals; (3) SMB Radar — general lead generation aggregating signals from company registries, business directories, tender portals, and social channels; (4) Insurance Radar — commercial insurance prospect intelligence from publicly available environmental, regulatory, real estate, and funding databases; (5) Build Your Own Radar — a fully custom intelligence engine scoped to any sector, ICP, and signal universe, live within 2 weeks.",
  },
  {
    question: "How does AI-powered marketing planning work?",
    answer:
      "BranDigiOps begins every engagement by mapping your revenue model — how your business actually earns — not a generic template. AI analyses your budget, identifies the channels most likely to convert for your specific model, and defines target audiences. The plan is updated continuously as campaign performance data comes in, so strategy evolves with the market rather than staying fixed at the point of signing.",
  },
  {
    question: "What does the AI Content Studio produce?",
    answer:
      "The AI Content Studio produces platform-native video, imagery, and captions at the pace campaigns actually need. Because AI production is faster than a traditional design cycle, messaging stays fresh and creative is iterated against real performance data — not on a monthly release schedule. Content is optimised for each platform's native format: Reels for Instagram, Shorts for YouTube, carousel posts for LinkedIn, and so on.",
  },
  {
    question: "How does BranDigiOps track AI search visibility?",
    answer:
      "BranDigiOps's Performance Analytics dashboard includes an AEO (Answer Engine Optimization) module that monitors whether ChatGPT, Perplexity, Google AI Overviews, and Gemini mention your business for relevant category queries. It surfaces visibility gaps and competitor mentions, and feeds that signal back into content strategy — so your AEO footprint grows over time.",
  },
  {
    question: "Is BranDigiOps suitable for small businesses in India?",
    answer:
      "Yes — BranDigiOps is built specifically for Indian SMBs. The pricing is designed for how Indian businesses budget, and the platform understands local channels: Google Business Profile, WhatsApp, regional procurement portals, and Indian regulatory data sources. Clients include a Bengaluru PEB construction firm, a Marathahalli preschool group, an electronics manufacturer, and an industrial building-materials company.",
  },
  {
    question: "What results can I expect from BranDigiOps?",
    answer:
      "Outcomes depend on your industry and revenue model, but the platform is designed to deliver: increased organic and AI search visibility (including citations in ChatGPT, Perplexity, and Google AI Overviews), a consistent pipeline of qualified leads, reduced cost-per-lead through performance-optimised campaigns, and a single unified view of what is working across all channels — without juggling six disconnected tools.",
  },
  {
    question: "How do I generate leads before a tender or RFP is published?",
    answer:
      "By the time a tender is formally published, most buyers have already informally shortlisted one or two vendors. The window that matters is earlier — at the signal stage, when a project clears a regulatory hurdle, secures land allotment, or a company receives funding. These events are publicly recorded in regulatory databases, environmental clearance portals, and company filings, but most vendors never check them. GrowthRadar monitors these signals continuously and surfaces a scored 'reach out now' list weeks or months before the formal procurement cycle begins — giving you time to build a relationship and establish credibility before competitors see the tender.",
  },
  {
    question: "Why do competitors often win tenders even with higher prices?",
    answer:
      "Because tender outcomes are rarely decided at the tender stage. By the time an RFP or tender is issued, buyers have often already built trust with one or two vendors through earlier touchpoints — a site visit, a referral conversation, a proposal shared informally. The vendor who reached out when the project was first approved, when the land allotment was cleared, or when the budget was sanctioned, starts the formal procurement already trusted. Reaching a prospect at the transactional tender stage means competing on price with everyone else who can read the same portal. Reaching them at the signal stage means arriving as a known, credible option before the competition begins.",
  },
  {
    question: "What is signal-stage lead generation?",
    answer:
      "Signal-stage lead generation identifies prospects at the earliest detectable moment of intent — before they go to market with a formal tender, RFP, or quote request. Signals include regulatory clearances, environmental approvals, land allotments, company funding announcements, procurement portal registrations, and expansion filings. Acting on signals rather than tenders means you reach prospects while they are still in discovery and relationship mode, not price-comparison mode. GrowthRadar is built on this model: it reads public databases continuously and converts raw signals into a prioritised contact list your team can act on immediately.",
  },
  {
    question: "How can Indian SMBs compete with larger companies for government tenders?",
    answer:
      "Large companies win government tenders partly because they have dedicated teams watching procurement portals full-time, and partly because they have pre-existing relationships from earlier projects. GrowthRadar addresses both: it monitors central and state government e-procurement portals for IT hardware tenders — filtered to your capacity, MSME eligibility, and Make-in-India preference class — and alerts you before deadlines close. More importantly, it also surfaces pre-tender signals such as budget approvals and departmental procurement registrations, so SMBs can initiate contact before the tender, building the same early-relationship advantage that larger players rely on.",
  },
  {
    question: "How does early engagement before a tender improve win rates?",
    answer:
      "Trust cannot be built in the time between a tender being published and a bid being submitted. The vendors who consistently win procurement cycles are those who were already known and credible to the buyer before the formal process started. Early engagement — before the quote or tender — allows you to understand the buyer's specific constraints, tailor your positioning accordingly, and demonstrate capability in a low-pressure context. By the time the tender is published, you are not an unknown bidder: you are the vendor the buyer is already familiar with. GrowthRadar is designed to surface the signals that create this early-engagement window.",
  },
  {
    question: "How do I find and reach business contacts before they go to market?",
    answer:
      "The most reliable method is to monitor the public signals that precede a buying decision — regulatory clearances, land allotments, funding announcements, company formation filings, and procurement portal activity — and use those signals to identify the right person to contact at the right company at the right moment. GrowthRadar does this automatically: it reads public databases, scores the signals by urgency and fit, enriches the leads with contact information including phone numbers, email addresses, and decision-maker names, and delivers a CRM-ready list your team can act on the same day.",
  },
  {
    question: "What are the most common problems with digital marketing agencies in India?",
    answer:
      "The most common complaints Indian businesses report about digital marketing agencies are: upfront retainer payments with no performance accountability; results that depend entirely on one account manager who may leave or go on leave; strategy delivered as a PowerPoint that never gets executed; content and campaigns managed in separate tools with no unified view; and monthly reviews that recap the past without a clear plan for the next cycle. The core structural issue is that traditional agencies sell time and effort, not outcomes — so the incentive is to look busy, not to drive measurable growth.",
  },
  {
    question: "How do I stop depending on a marketing agency for every small task?",
    answer:
      "Dependency on an agency for every task — a caption change, a campaign pause, a report — usually stems from a workflow where the agency controls all the tools and the business owner has no direct visibility. The alternative is a system where strategy, content, campaign execution, and analytics are connected in one layer that the business owner can see in real time, without having to request a report or wait for a weekly call. AI-driven marketing platforms like BranDigiOps are built on this model: the system runs continuously, outputs are visible at any time, and human effort is applied to decisions rather than to routine execution.",
  },
  {
    question: "Why do digital marketing agencies ask for upfront payment and long-term contracts?",
    answer:
      "Traditional agencies structure contracts around the team and tools they must dedicate to your account — copywriters, designers, ad managers — before any output is produced. Because their cost is front-loaded, their fee is too. The problem is that you bear the financial risk while the agency is protected regardless of results. Performance-linked or outcome-oriented models, where the engagement is structured around deliverables and measurable results rather than monthly retainers, shift that risk balance. AI-powered platforms can offer shorter cycles and clearer deliverables because AI reduces the human labour cost that drives traditional retainer pricing.",
  },
  {
    question: "How do I get transparent marketing reporting without PowerPoint presentations?",
    answer:
      "Effective marketing reporting should be live, not monthly. A proper performance layer shows: website traffic and conversion trends; Google Business Profile views, calls, and direction requests; social reach and engagement by platform; paid campaign spend, impressions, and cost-per-lead; and — increasingly important — AI search visibility (whether ChatGPT, Perplexity, or Google AI Overviews mention your business). All of this should be visible in a single dashboard, updated continuously, with week-on-week and month-on-month comparisons against your own historical performance and against competitors. A PowerPoint prepared once a month is a snapshot of what already happened — a live dashboard lets you act before a trend becomes a problem.",
  },
  {
    question: "How do I compare my marketing performance against competitors week on week?",
    answer:
      "Competitive benchmarking in digital marketing requires continuous monitoring across your category — not a one-time audit. You need to track: which keywords competitors rank for that you do not; when they publish new content and what topics they are targeting; how their social engagement compares to yours week on week; and whether they are gaining or losing visibility in AI search tools. BranDigiOps's Ecosystem Watchdog does this automatically — scanning your category continuously and surfacing gaps and competitor moves in a format your team can act on within hours, not at the next monthly review.",
  },
  {
    question: "What is an AI ecosystem watchdog for digital marketing?",
    answer:
      "An AI ecosystem watchdog is a continuous monitoring system that reads your competitive category — keyword rankings, content publication, social signals, and AI search citations — and alerts you to changes that require a response. Instead of discovering a competitor has dominated a new keyword category at your quarterly review, the watchdog surfaces it the week it happens. It also identifies content gaps your brand should fill, audience questions that are being answered by competitors but not by you, and emerging topics in your sector that represent an opportunity to publish first and establish authority. BranDigiOps's Ecosystem Watchdog runs continuously across your channels and category.",
  },
  {
    question: "How does thought leadership content help an Indian SMB grow?",
    answer:
      "Thought leadership content — articles, posts, and videos that express a point of view on your industry, not just promote your product — builds trust and visibility in a way that paid advertising cannot. When a prospect is researching their options, the businesses they find through organic search, AI tools, and social sharing are the ones that have published credible, useful content consistently. For Indian SMBs, the opportunity is that most competitors are not doing this systematically — the bar to be the most visible and credible voice in a local sector category is lower than it appears. BranDigiOps's AI Content Studio produces thought leadership content at campaign pace, distributing across the platforms where your buyers spend time and tracking whether that content is being cited by AI tools.",
  },
  {
    question: "Is there a digital marketing platform that integrates strategy, content, campaigns, and reporting in one place?",
    answer:
      "Most Indian SMBs run their marketing across five or six disconnected systems: a freelance designer for content, a separate agency for ads, Google Analytics for website data, a social scheduling tool, and a spreadsheet for leads. None of these talk to each other, so there is no unified view of what is working, and switching between them wastes time that should go into decisions. BranDigiOps is built as a single intelligence layer that connects strategy, content production, campaign execution, performance analytics, AI search visibility, and lead intelligence. The plan informs the content. The content feeds the campaigns. The campaigns generate the analytics. The analytics update the plan. All in one place, updated continuously, with no coordination overhead between disconnected tools.",
  },
  {
    question: "How do I get marketing execution, not just a strategy document?",
    answer:
      "A strategy document tells you what to do. Execution is doing it — publishing the content, running the campaigns, monitoring the results, and adjusting in real time. Many businesses receive a marketing plan and then struggle to find the bandwidth, tools, or skills to execute it. BranDigiOps is structured around execution: AI agents plan, generate content, and run campaigns; the Ecosystem Watchdog monitors performance and competitor moves; and the Lead Conversion Pipeline converts visibility into prospect contact. The output is not a slide deck — it is content published, campaigns live, and a ranked list of leads ready for outreach.",
  },
  {
    question: "How do I get started with BranDigiOps?",
    answer:
      "Book a 20-minute walkthrough via the contact section on our website, or send your website URL to tech@brandigiops.com and we will run a free AI-visibility (AEO) snapshot to show where you stand today. You can also reach us directly on WhatsApp at +91 7993191616.",
    ctas: [
      {
        label: "Book a 20-min Walkthrough",
        href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2mK58tYoNzR4yZGX-nXxIlepUzsh1juVkTIlgF_QufvWt5euGyViQ5K6roF2PLsP8Oc9QrvRCs",
        icon: "calendar",
      },
      {
        label: "WhatsApp us",
        href: "https://wa.me/917993191616",
        icon: "whatsapp",
      },
      {
        label: "tech@brandigiops.com",
        href: "mailto:tech@brandigiops.com",
        icon: "email",
      },
    ],
  },
  {
    question: "Where is BranDigiOps based?",
    answer:
      "BranDigiOps is based in Bengaluru, Karnataka, India, and serves SMBs across India. GrowthRadar products can be configured for specific geographies — from a single city to all-India coverage.",
  },
] as const;
