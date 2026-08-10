import Image from "next/image";
import Link from "next/link";
import type { BlogArticleMeta } from "@/content/blogs";
import { blogArticlePath } from "@/content/blogs";
import { blogCardThumbById } from "@/content/media-assets";
import { ArrowOutIcon } from "./icons/ArrowOutIcon";

type BlogCardProps = {
  article: BlogArticleMeta;
};

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function BlogCard({ article }: BlogCardProps) {
  const thumb = blogCardThumbById[article.thumbId];

  return (
    <Link
      href={blogArticlePath(article.slug)}
      className="bcard"
      aria-label={`Read article: ${article.listTitle}`}
    >
      <div className="bmain">
        <span className="bcat">{article.category}</span>
        <h2 className="btitle">{article.listTitle}</h2>
        <p className="bexcerpt">{article.excerpt}</p>
        <div className="bfoot">
          <span className="bavatar" aria-hidden>
            <PersonIcon />
          </span>
          <span className="breadtime">{article.readTime}</span>
          <div className="barrow">
            <ArrowOutIcon />
          </div>
        </div>
      </div>
      <div className="bthumb">
        <Image
          src={thumb.src}
          alt={thumb.alt}
          title={thumb.title}
          width={thumb.width}
          height={thumb.height}
          sizes="200px"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
