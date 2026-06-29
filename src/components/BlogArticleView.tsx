import Link from "next/link";
import type { BlogSlug } from "@/content/blogs";
import { getArticleHtml } from "@/lib/loadArticle";

type BlogArticleViewProps = {
  slug: BlogSlug;
};

export function BlogArticleView({ slug }: BlogArticleViewProps) {
  const html = getArticleHtml(slug);

  return (
    <article className="blog-article-page">
      <Link href="/blogs" className="blog-article-back">
        ← Back to Blogs
      </Link>
      <div
        className="blog-article-wrap"
        data-article={slug}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
