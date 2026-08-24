/**
 * Long-form copy for /about — target 500–1000 words of readable body.
 * Card copy (mission/vision) stays in site.ts; this file is the article layer.
 */
export const aboutLongform = {
  problem: {
    label: "Why we exist",
    title: "Indian SMBs do not have a growth system. They have fragments.",
    paragraphs: [
      "Most Indian small and mid-sized businesses do not fail at marketing because they lack effort. They fail because the work is split across people and tools that never share a picture of the business. A freelancer designs posts. A different vendor runs ads. Someone in the office updates a spreadsheet of leads. Google Analytics sits in a bookmark that gets opened when a report is due. WhatsApp is the real CRM. None of these layers talk to each other, so nobody can answer a simple question: what is actually producing revenue this month, and what should we stop?",
      "That fragmentation is expensive in two ways. First, money leaks — campaigns continue because nobody owns the full funnel. Second, time leaks — the founder becomes the integration layer, hopping between logins instead of deciding. BranDigiOps was built in Bengaluru for that operator: someone who needs enterprise-grade clarity without an enterprise marketing department.",
      "We do not sell a pile of disconnected services and call it a retainer. We run one intelligence layer that understands how you earn — project work, repeat orders, subscriptions, tenders, walk-ins — and then uses that model to plan, create, execute, measure, and capture demand. Strategy informs content. Content feeds campaigns. Campaigns produce analytics. Analytics update the plan. Lead signals do not sit in a forgotten Excel file. That loop is the product.",
    ],
  },
  layer: {
    label: "How we work",
    title: "One layer. Six pillars. Human review before anything goes out.",
    paragraphs: [
      "The layer is organised as six pillars, which you can read in full on our solutions page: an AI-driven marketing plan, always-on ecosystem monitoring, an AI content studio, campaign execution, performance analytics (including whether answer engines mention you), and a lead conversion pipeline. You do not have to buy every pillar on day one. You do have to start from how the business makes money, or the rest is decoration.",
      "The technology is not a chatbot taped onto a slide deck. BranDigiOps orchestrates AI agents in production — planning, drafting, and routing work — with deterministic guardrails so output is repeatable and accountable. That discipline comes from founder Satish Asapu’s twenty-five years as an enterprise architect at Credit Suisse, UBS, and Bank of America, including TOGAF 9 certification. Banking systems are not allowed to “mostly work.” Growth systems for SMBs should not be allowed to either.",
      "AI still makes mistakes. Every customer-facing artefact is reviewed through FuelForBrand, our marketing partner, so a human signs off before the market sees it. Speed without that check is just a faster way to ship the wrong message. Oversight is not a slogan on this site; it is the last mile of delivery.",
    ],
  },
  who: {
    label: "Who we serve",
    title: "Built for how Indian businesses actually sell.",
    paragraphs: [
      "We work with Indian SMBs that already have a real offer — manufacturing, construction and PEB, education groups, electronics, industrial materials, and similar operators who cannot pause the business to “do a rebrand.” Typical clients have a website that under-performs, some social presence, maybe an ads account, and a founder who is tired of coordinating vendors. Named logos go up only when clients approve; until then we describe the work honestly: a Bengaluru PEB construction firm, a preschool group, an electronics manufacturer, an industrial building-materials company.",
      "If you need a prestige brand film and nothing else, we are the wrong room. If you need a system that can show pipeline, channel contribution, and AI-search visibility in one place — and then act on it — we are built for that. Geography is India-first: regional procurement, WhatsApp-heavy sales motion, Google Business Profile as a real lead source, and the reality that many buyers now ask ChatGPT or Perplexity before they ask Google.",
    ],
    bullets: [
      "Operators who want one accountable layer instead of six retainers",
      "B2B and project-led firms that enter conversations too late — after the RFP is public",
      "Teams that need content and campaigns at the pace of the market, with human validation",
      "Founders who want live reporting, not a monthly PowerPoint of what already happened",
    ],
  },
  start: {
    label: "Working together",
    title: "A walkthrough, not a pitch theatre.",
    paragraphs: [
      "Engagements start with a short walkthrough: your revenue model, current channels, and where the leaks are. From there we either stand up the intelligence layer, run a focused product such as GrowthRadar for pre-tender leads, or begin with a free AEO audit so you can see how answer engines currently describe you. There is no requirement to buy a stack you will not use.",
      "If you want the people and the architecture in one sitting, this page is the right start. If you want the product map, open SolutionStack. If you want signal-stage demand before competitors see the tender, open GrowthRadar. If you want reading rather than a call, the blogs unpack revenue classification, budget intelligence, and execution planning in more depth.",
    ],
  },
} as const;
