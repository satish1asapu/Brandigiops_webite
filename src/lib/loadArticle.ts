import fs from "node:fs";
import path from "node:path";
import { isBlogSlug, type BlogSlug } from "@/content/blogs";

const articlesDir = path.join(process.cwd(), "src/content/articles");

export function getArticleHtml(slug: BlogSlug): string {
  return fs.readFileSync(path.join(articlesDir, `${slug}.html`), "utf8");
}

export function getAllBlogSlugs(): BlogSlug[] {
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .filter(isBlogSlug);
}
