import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleView } from "@/components/BlogArticleView";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import {
  blogArticles,
  blogArticlesBySlug,
  blogPostingJsonLd,
  isBlogSlug,
  type BlogSlug,
} from "@/content/blogs";
import { siteUrl } from "@/content/seo";
import { getAllBlogSlugs } from "@/lib/loadArticle";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isBlogSlug(slug)) return {};
  const article = blogArticlesBySlug[slug];
  return {
    title: article.listTitle,
    description: article.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: "article",
      url: `/blogs/${slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.dateIso,
      modifiedTime: article.dateModified ?? article.dateIso,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) notFound();
  const article = blogArticlesBySlug[slug];
  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(article, siteUrl)),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: article.listTitle },
        ]}
      />
      <HomeClientChrome />
      <Header />
      <BlogArticleView slug={slug as BlogSlug} />
      <aside className="related-reading section">
        <h2 className="related-reading-title">Related reading</h2>
        <ul className="related-reading-list">
          {related.map((a) => (
            <li key={a.slug}>
              <Link href={`/blogs/${a.slug}`}>{a.listTitle}</Link>
            </li>
          ))}
          <li>
            <Link href="/growth-radar">
              See how GrowthRadar finds pre-tender leads
            </Link>
          </li>
          <li>
            <Link href="/free-aeo-audit">Request a free AEO audit</Link>
          </li>
        </ul>
      </aside>
      <Footer />
    </>
  );
}
