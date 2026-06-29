import Image from "next/image";
import Link from "next/link";
import type { BlogArticleMeta } from "@/content/blogs";
import { blogArticlePath } from "@/content/blogs";
import { blogCardThumbById } from "@/content/media-assets";
import { ArrowOutIcon } from "./icons/ArrowOutIcon";

type BlogCardProps = {
  article: BlogArticleMeta;
};

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
            👤
          </span>
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
