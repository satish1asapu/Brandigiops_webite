export const growthRadar = {
  badge: "AI Intelligence Suite",
  title: "GrowthRadar",
  keywordLine:
    "Pre-tender and signal-stage lead intelligence for Indian businesses",
  subtitle: "Sector-specific AI intelligence engines that surface the right prospect, at the right moment, before they go to market.",
  description: "Each Radar continuously reads public regulatory filings, procurement portals, and market signals — resolves them into scored, actionable leads — and delivers a ranked 'reach out now' list to your team.",

  radars: [
    {
      id: "peb-radar",
      name: "PEB Radar — pre-engineered building and construction project intelligence",
      shortName: "PEB Radar",
      tagline: "Construction project intelligence for PEB fabricators",
      summary: "AI reads public environmental clearances, land authority allotments, and regulatory filings to identify construction projects in your serviceable zone — before competitors even know they exist.",
      promise: "Weekly scored lead list of advancing construction projects, with signal timeline and compliance-stage alerts, filtered to your geo and capacity band.",
      deliverables: [
        "\"Reach out now\" project list — weekly",
        "Signal timeline per project (investment approval → land allotment → clearance → procurement stage)",
        "Geo + capacity-band filtering",
        "Sources: publicly available environmental, land, company, and regulatory databases"
      ],
      pricing: "₹50,000 / mo",
      pricingNote: "Custom pricing for multi-state coverage",
      accent: "#7c3aed"
    },
    {
      id: "hardware-radar",
      name: "Hardware Radar — electronics and hardware manufacturing prospects",
      shortName: "Hardware Radar",
      tagline: "Government IT procurement intelligence for OEMs and resellers",
      summary: "Monitors central and state government e-procurement portals for IT hardware tenders that match your capacity — so you bid on the right ones before deadlines close.",
      promise: "Scored open-tender list with Make-in-India compliance flags, value-band classification, and amendment alerts — every week.",
      deliverables: [
        "Scored tender list from central and state government procurement portals",
        "Make-in-India preference class compliance check per bid",
        "Value-band filtering across small, mid, and large contracts",
        "MSME eligibility flags and corrigendum tracking"
      ],
      pricing: "₹50,000 / mo",
      pricingNote: "All-India or state-specific plans available",
      accent: "#22d3ee"
    },
    {
      id: "smb-radar",
      name: "SMB Radar — small business growth signals across India",
      shortName: "SMB Radar",
      tagline: "AI market intelligence and lead generation for Indian SMBs",
      summary: "Aggregates buying signals from tender portals, company registries, business directories, and social channels into qualified leads your sales team can act on today.",
      promise: "Deduplicated lead list by company and region, with matched keywords, signal type, and contact enrichment — ready for outreach.",
      deliverables: [
        "Qualified leads from company registries, business directories, tender portals, and social signals",
        "Contact enrichment — phones, emails, decision-makers",
        "Keyword-gated signal matching per client",
        "CRM-ready export"
      ],
      pricing: "Starting ₹8,000 / mo",
      pricingNote: "Per-client configuration included",
      accent: "#10b981"
    },
    {
      id: "insurance-radar",
      name: "Insurance Radar — insurance prospect intelligence",
      shortName: "Insurance Radar",
      tagline: "Commercial insurance prospect intelligence for brokers and MGAs",
      summary: "Scans environmental tribunal orders, regulatory clearances, real estate filings, and funding announcements to surface companies with imminent insurance needs — before they issue an RFP.",
      promise: "Daily scored prospect list with policy-line mapping, risk-trigger timeline, and territory-filtered hot leads.",
      deliverables: [
        "\"Reach out now\" prospect list with mapped policy lines",
        "Sources: publicly available environmental, regulatory, real estate, and funding databases",
        "Risk-trigger timeline per company",
        "Serviceable territory + appetite filtering"
      ],
      pricing: "₹50,000 / mo",
      pricingNote: "Custom pricing for enterprise insurers",
      accent: "#ef4444"
    },
    {
      id: "custom-radar",
      name: "Build Your Own Radar — custom sector intelligence",
      shortName: "Build Your Own Radar",
      tagline: "Custom signal intelligence for any sector or use case",
      summary: "Don't see your sector? Tell us your ideal customer profile, the signals that matter in your domain, and the types of public data you want monitored — we build and run the Radar for you.",
      promise: "A production-ready custom intelligence engine, configured to your exact ICP and signal logic, live within 2 weeks — continuously monitored and refined as your needs evolve.",
      deliverables: [
        "Discovery call to map your ICP, signals, and source universe",
        "Custom signal logic + scoring model built for your sector",
        "Dedicated data pipeline from agreed public data sources",
        "Weekly scored lead list in your preferred format (CRM / Excel / API)"
      ],
      pricing: "Custom pricing",
      pricingNote: "Scoped per sector, signal complexity, and coverage",
      accent: "#e879f9"
    }
  ],

  longform: {
    meaning: {
      label: "What this is",
      title: "Pre-tender lead generation means reaching the buyer before the RFP exists.",
      paragraphs: [
        "In Indian B2B, the public tender is often the last document in a long private process — not the first. By the time an RFP is uploaded to a procurement portal, the shortlist is frequently informal: a consultant has already spoken to two fabricators, an OEM has already walked the site, a broker has already sketched cover. If your first alert is the published bid, you are competing on price against people who had months of context.",
        "GrowthRadar is BranDigiOps’s signal-stage intelligence product. Each Radar watches public regulatory filings, environmental and land records, e-procurement portals, company registries, and other open market signals. It does not scrape private inboxes or invent companies. It resolves those public events into scored prospects that match your ideal customer profile, geography, and capacity — then delivers a ranked “reach out now” list your sales team can actually use.",
        "This is not a scraped directory of 10,000 “decision makers.” Directories do not tell you who is about to buy. A clearance, a land allotment, a corrigendum, a tribunal order, or a funding disclosure does. The product is timing plus fit, not more names.",
      ],
    },
    method: {
      label: "How a Radar runs",
      title: "Read the public record. Score the fit. Hand sales a list, not a research project.",
      paragraphs: [
        "Every Radar is sector-specific because a PEB fabricator, a hardware OEM, an insurance MGA, and a general SMB seller do not share the same buying trigger. PEB Radar watches construction-related clearances and allotments in your serviceable zone. Hardware Radar watches central and state IT procurement for tenders that match capacity, Make-in-India class, and value band. Insurance Radar watches risk triggers — tribunal orders, clearances, real estate and funding events — that imply cover will be needed before a formal RFP. SMB Radar aggregates mixed signals into a deduplicated, keyword-gated list with contact enrichment. If your sector is not in that set, Build Your Own Radar is the path: we map your ICP and source universe, then run a dedicated pipeline.",
        "Week to week the motion is the same. Sources are read continuously. Events are normalised to a company or project. A score reflects recency, stage, geo, and capacity. You receive a list — weekly for most radars, daily for insurance prospects — with enough timeline context to start a conversation. Export is CRM, spreadsheet, or API. We do not dump a data swamp and call it enablement.",
        "Sales still has to sell. GrowthRadar removes the weeks of junior research that usually sit between “we should look at tenders” and “call this plant in Hosur this week.” It does not replace a relationship, a site visit, or a bid team. It makes sure those expensive hours are spent on accounts that are actually moving.",
      ],
    },
    fit: {
      label: "Who it is for",
      title: "Built for operators who lose deals they never knew were forming.",
      paragraphs: [
        "You will get value if you sell into projects, government or PSU procurement, commercial insurance, or any motion where the buyer’s intent shows up in public records before it shows up in your inbox. Coverage can be a city, a set of states, or all-India, depending on the Radar and the plan. Pricing on this page is the starting band — ₹50,000 per month for most sector radars, from ₹8,000 per month for configured SMB Radar, custom for a built-to-spec engine.",
        "You will not get value if you only want more Facebook leads, or if you cannot act on a list within the week. Signal-stage work decays. A clearance that is six months old is a history lesson. The promise is a current, filtered queue — not a one-time dump.",
      ],
      bullets: [
        "PEB and construction suppliers who need projects before the bid pack is public",
        "Hardware OEMs and resellers tracking the right government IT tenders, not every tender",
        "Brokers and MGAs who want commercial insurance prospects at the risk-trigger, not at the RFP",
        "SMB teams that need mixed public and directory signals, deduplicated, with contacts attached",
      ],
    },
    next: {
      label: "Start here",
      title: "Pick a Radar, or tell us the sector we have not listed.",
      paragraphs: [
        "Scroll the cards on this page for PEB, Hardware, SMB, Insurance, or a custom build. If you want the wider growth layer — plan, content, campaigns, analytics, AEO — that lives on SolutionStack; GrowthRadar is the lead-intelligence product inside it. For who we are and why the architecture looks like a bank’s operations stack rather than an agency moodboard, read Who We Are.",
        "The next step is a walkthrough: your geo, capacity band, and which signals actually predict a sale in your world. We will not pretend every public filing is a lead. We will show you how the scoring would work on your ICP before you pay for a month of noise.",
      ],
    },
  },
} as const;
