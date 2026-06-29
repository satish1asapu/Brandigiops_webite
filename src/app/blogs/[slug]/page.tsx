import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleView } from "@/components/BlogArticleView";
import {
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
    keywords: article.keywords,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: "article",
      url: `/blogs/${slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.dateIso,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(article, siteUrl)),
        }}
      />
      <HomeClientChrome />
      <Header />
      <BlogArticleView slug={slug as BlogSlug} />
      <Footer />
    </>
  );
}
