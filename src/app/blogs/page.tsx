import type { Metadata } from "next";
import Link from "next/link";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogArticles } from "@/content/blogs";
import { siteConfig, siteUrl } from "@/content/seo";

const blogsDescription =
  "Insights on BranDigiOps Growth Intelligence Suite — revenue engine intelligence, marketing budget planning, and execution-ready marketing operations.";

export const metadata: Metadata = {
  title: "Blogs",
  description: blogsDescription,
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: `Blogs | ${siteConfig.name}`,
    description: blogsDescription,
  },
};

export default function BlogsPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blogs`,
    url: `${siteUrl}/blogs`,
    description: blogsDescription,
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
      <main className="blogs-page">
        <h1 className="stitle">Blogs</h1>
        <p className="blogs-page-lead">{blogsDescription}</p>
        <div className="blist blogs-page-all">
          {blogArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
        <p className="blogs-page-lead" style={{ marginTop: "3rem" }}>
          <Link href="/#contact" style={{ color: "var(--purple)" }}>
            Get in touch
          </Link>{" "}
          to see how these modules work for your business.
        </p>
      </main>
      <Footer />
    </>
  );
}
