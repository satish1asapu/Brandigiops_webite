/**
 * Image SEO + performance hints (single source of truth for paths, alt, titles, intrinsic size).
 * Edit copy here when you swap assets under public/images/.
 */
export type MediaAsset = {
  /** Path under public/ */
  src: string;
  /** Descriptive alt for search & accessibility (empty string only if purely decorative). */
  alt: string;
  /** Optional title attribute — supplements context for some UAs; keep concise. */
  title?: string;
  /** Intrinsic dimensions reduce layout shift (CLS); update if you replace the file. */
  width: number;
  height: number;
};

export const mediaAssets = {
  heroBackground: {
    src: "/images/hero-bg-82eb34d8.jpg",
    alt: "Bold abstract visual representing AI-powered digital marketing, performance growth, and brand scale for BranDigiOps clients.",
    title: "BranDigiOps — AI digital marketing",
    width: 1920,
    height: 1080,
  },
  logo: {
    src: "/images/logo-b788b4d5.png",
    alt: "BranDigiOps — logo for AI-powered digital marketing and growth operations",
    title: "BranDigiOps home",
    width: 620,
    height: 200,
  },
  aboutMission: {
    src: "/images/about-photo-1-75b4d569.jpg",
    alt: "BranDigiOps mission: transforming fragmented marketing into a unified, high-converting revenue ecosystem with AI and automation.",
    title: "Our mission — unified marketing operations",
    width: 1200,
    height: 1600,
  },
  aboutVision: {
    src: "/images/about-photo-2-aa2c4473.jpg",
    alt: "BranDigiOps vision: predictive digital growth, transparent analytics, and automated acquisition for ambitious brands worldwide.",
    title: "Our vision — future-proof growth",
    width: 1200,
    height: 1600,
  },
  blogThumb1: {
    src: "/images/blog-thumb-1-87b9eb5d.jpg",
    alt: "Revenue engine intelligence — classifying how Indian SMBs earn and grow",
    title: "Blogs — revenue engine intelligence",
    width: 1200,
    height: 780,
  },
  blogThumb2: {
    src: "/images/blog-thumb-2-f90c430e.jpg",
    alt: "AI marketing budget allocation chart for Indian SMB revenue targets",
    title: "Blogs — marketing budget intelligence",
    width: 1200,
    height: 780,
  },
  blogThumb3: {
    src: "/images/blog-thumb-3-e3c03aea.jpg",
    alt: "Execution-ready weekly marketing planner for campaign operations",
    title: "Blogs — execution-ready marketing planner",
    width: 1200,
    height: 780,
  },
} as const satisfies Record<string, MediaAsset>;

export type MediaAssetKey = keyof typeof mediaAssets;

/** Resolve blog card id → thumbnail asset (aligned with `blogArticles` in blogs.ts). */
export const blogCardThumbById = {
  p1: mediaAssets.blogThumb1,
  p2: mediaAssets.blogThumb2,
  p3: mediaAssets.blogThumb3,
} as const;

export type BlogCardThumbId = keyof typeof blogCardThumbById;
