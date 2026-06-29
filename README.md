# Brandigiops — Next.js app (`xbdo-site`)

**Full documentation** (content vs styling vs SEO, examples, and next steps): **[`../README.md`](../README.md)** in the repository root.

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in development.

## Quick file map

| Area | Path |
|------|------|
| Page copy, nav, footer links, hero/services/about | `src/content/site.ts` |
| Image paths, alt, dimensions | `src/content/media-assets.ts` + `public/images/` |
| Blogs metadata | `src/content/blogs.ts` |
| Article HTML + scoped styles | `src/content/articles/*.html`, `*.scss` |
| Blogs list & articles | `src/app/blogs/`, `src/app/blogs/[slug]/` |
| Privacy Policy | `src/app/privacy-policy/`, `src/content/privacy-policy.ts` |
| Titles, keywords, JSON-LD, `siteUrl` | `src/content/seo.ts` |
| Main CSS | `src/styles/main.scss` (via `globals.scss`) |
| App metadata, fonts | `src/app/layout.tsx`, `src/lib/fonts.ts` |
| `robots.txt` / `sitemap.xml` | `src/app/robots.ts`, `src/app/sitemap.ts` |

Set **`NEXT_PUBLIC_SITE_URL`** in production (no trailing slash).

See the [root README](../README.md) for examples and architecture detail.
