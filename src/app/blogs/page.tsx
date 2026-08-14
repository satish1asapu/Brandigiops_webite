import type { Metadata } from "next";
import Link from "next/link";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ContactForm } from "@/components/ContactForm";
import { blogArticles } from "@/content/blogs";
import { siteConfig, siteUrl } from "@/content/seo";

const PAGE_TITLE = "Growth Marketing Insights India";
const PAGE_DESCRIPTION =
  "Guides on AI marketing budgets, revenue engines, and weekly campaign ops for Indian SMBs — practical growth marketing insights from BranDigiOps.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: `${PAGE_TITLE} | ${siteConfig.name}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function BlogsPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blogs`,
    url: `${siteUrl}/blogs`,
    description: PAGE_DESCRIPTION,
    blogPost: blogArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${siteUrl}/blogs/${a.slug}`,
      datePublished: a.dateIso,
      dateModified: a.dateModified ?? a.dateIso,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ]}
      />
      <HomeClientChrome />
      <Header />
      <main>

        <section className="section page-hero">
          <div className="section-label">Insights</div>
          <h1 className="section-title">{PAGE_TITLE}</h1>
          <p className="section-subtitle">{PAGE_DESCRIPTION}</p>
          <p className="blogs-intro">
            These articles unpack how BranDigiOps turns revenue models into budgets,
            plans, and weekly execution for Indian SMBs. Start with revenue
            classification if you are clarifying how you earn; move to budget
            intelligence when spend needs a model; use the execution planner when
            strategy must become a weekly operating system. For product depth, see{" "}
            <Link href="/growth-radar">
              pre-tender lead generation with GrowthRadar
            </Link>
            .
          </p>
        </section>

        <section className="section blogs-page-body">
          <h2 className="blogs-group-title">Growth Intelligence Suite</h2>
          <div className="blist">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="blogs-page-cta">
            <h2 className="blogs-subscribe-title">Get a free AEO snapshot</h2>
            <p className="blogs-page-cta-text">
              Share your site and WhatsApp number — we&apos;ll show where you stand in AI search.
            </p>
            <ContactForm source="blogs" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
