import Link from "next/link";
import { blogArticles } from "@/content/blogs";
import { BlogCard } from "./BlogCard";

export function BlogsSection() {
  return (
    <section className="blog" id="blogs">
      <div className="blogs-section-head">
        <h2 className="stitle">Blogs</h2>
        <Link href="/blogs" className="blogs-view-all">
          View all articles
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
