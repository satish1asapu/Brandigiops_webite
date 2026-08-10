import type { Metadata } from "next";
import Link from "next/link";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogArticles } from "@/content/blogs";
import { siteConfig, siteUrl } from "@/content/seo";

const PAGE_TITLE = "Blogs & Articles";
const PAGE_DESCRIPTION =
  "Practical thinking on AI-powered growth intelligence — revenue engine classification, smarter marketing budgets, and execution-ready campaign operations for Indian SMBs.";

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
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <HomeClientChrome />
      <Header />
      <main>

        {/* Page hero */}
        <section className="section page-hero">
          <div className="section-label">Insights</div>
          <h1 className="section-title">{PAGE_TITLE}</h1>
          <p className="section-subtitle">{PAGE_DESCRIPTION}</p>
        </section>

        {/* Article list */}
        <section className="section blogs-page-body">
          <div className="blist">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="blogs-page-cta">
            <p className="blogs-page-cta-text">
              See how these ideas apply to your business.
            </p>
            <Link href="/#contact" className="hbtn-primary">
              Book a walkthrough
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
