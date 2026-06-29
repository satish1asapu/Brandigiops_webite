import { blogCardThumbById, type BlogCardThumbId } from "./media-assets";

export type BlogSlug =
  | "revenue-engine-intelligence-classification"
  | "ai-powered-marketing-budget-intelligence"
  | "ai-powered-execution-ready-marketing-planner";

export type BlogArticleMeta = {
  slug: BlogSlug;
  thumbId: BlogCardThumbId;
  category: string;
  listTitle: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  dateIso: string;
  readTime: string;
  keywords: string[];
};

export const blogArticles: BlogArticleMeta[] = [
  {
    slug: "revenue-engine-intelligence-classification",
    thumbId: "p1",
    category: "Growth Intelligence",
    listTitle: "Revenue Engine Intelligence & Classification",
    title:
      "Revenue Engine Intelligence & Classification: The Smart Core of BranDigiOps Growth Intelligence Suite",
    excerpt:
      "Stop guessing how your business grows. AI-powered revenue intelligence that classifies your business model, detects growth drivers, and maps execution strategy — automatically.",
    description:
      "Discover how BranDigiOps Revenue Engine Intelligence automatically identifies your business revenue model, detects growth drivers, and converts raw business data into actionable growth strategies.",
    date: "May 2026",
    dateIso: "2026-05-01",
    readTime: "8 min read",
    keywords: [
      "Revenue Engine Intelligence",
      "BranDigiOps",
      "growth intelligence suite",
      "revenue model classification",
      "AI marketing strategy",
    ],
  },
  {
    slug: "ai-powered-marketing-budget-intelligence",
    thumbId: "p2",
    category: "Growth Intelligence",
    listTitle: "AI-Powered Marketing Budget Intelligence",
    title:
      "AI-Powered Marketing Budget Intelligence: How BranDigiOps Turns Revenue Targets Into Precision Spending Plans",
    excerpt:
      "Generate high-precision 12-month marketing budgets automatically — driven by revenue targets, ROAS logic, CAC efficiency, and margin protection. No spreadsheets.",
    description:
      "BranDigiOps Marketing Budget Intelligence automatically generates precision 12-month marketing budgets based on revenue targets, CAC efficiency, ROAS, and margin protection.",
    date: "May 2026",
    dateIso: "2026-05-15",
    readTime: "10 min read",
    keywords: [
      "AI marketing budget",
      "marketing budget intelligence",
      "BranDigiOps",
      "ROAS forecasting",
      "CAC optimization",
    ],
  },
  {
    slug: "ai-powered-execution-ready-marketing-planner",
    thumbId: "p3",
    category: "Growth Intelligence",
    listTitle: "AI-Powered Execution-Ready Marketing Planner",
    title:
      "AI-Powered Execution-Ready Marketing Planner: How BranDigiOps Turns Strategy Into a Weekly Operating System",
    excerpt:
      "Your marketing plan should tell your team exactly what to do, when, on which platform, and why. BranDigiOps makes that happen automatically — every week.",
    description:
      "BranDigiOps Execution-Ready Marketing Planner automatically generates a complete weekly marketing roadmap — multi-channel, funnel-stage-aware, budget-scaled, and JSON-ready.",
    date: "May 2026",
    dateIso: "2026-05-20",
    readTime: "12 min read",
    keywords: [
      "AI marketing planner",
      "execution-ready marketing",
      "BranDigiOps",
      "weekly marketing sprint",
      "marketing operating system",
    ],
  },
];

export const blogArticlesBySlug = Object.fromEntries(
  blogArticles.map((a) => [a.slug, a]),
) as Record<BlogSlug, BlogArticleMeta>;

export function isBlogSlug(slug: string): slug is BlogSlug {
  return slug in blogArticlesBySlug;
}

export function blogArticlePath(slug: BlogSlug) {
  return `/blogs/${slug}`;
}

export function blogPostingJsonLd(
  article: BlogArticleMeta,
  siteUrl: string,
) {
  const thumb = blogCardThumbById[article.thumbId];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.dateIso,
    author: { "@type": "Organization", name: "BranDigiOps" },
    publisher: { "@type": "Organization", name: "BranDigiOps" },
    keywords: article.keywords.join(", "),
    mainEntityOfPage: `${siteUrl}${blogArticlePath(article.slug)}`,
    image: `${siteUrl}${thumb.src}`,
  };
}
