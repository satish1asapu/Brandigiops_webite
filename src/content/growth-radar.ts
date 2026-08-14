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
  ]
} as const;
