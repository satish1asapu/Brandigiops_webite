import Link from "next/link";
import { blogArticles } from "@/content/blogs";
import { BlogCard } from "./BlogCard";

export function BlogsSection() {
  return (
    <section className="blog section-alt" id="blogs">
      <div className="blogs-section-head">
        <div>
          <div className="section-label">Insights</div>
          <h2 className="section-title" style={{ margin: 0 }}>
            Blogs &amp; Articles
          </h2>
        </div>
        <Link href="/blogs" className="blogs-view-all">
          View all articles →
        </Link>
      </div>
      <div className="blist">
        {blogArticles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
