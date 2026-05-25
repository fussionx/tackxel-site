// Server-only blog data layer. Reads markdown files from /content/blog, parses
// frontmatter (gray-matter), and renders body markdown to HTML (marked).
// To add a post: drop a new .md file in content/blog with the frontmatter
// shown in the existing posts. No code changes needed.
//
// Client-safe types/constants live in blog-types.ts (no fs) and are re-exported
// here for server consumers' convenience.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { categoryAccent, type PostMeta } from "@/lib/blog-types";

export { BLOG_CATEGORIES, formatPostDate } from "@/lib/blog-types";
export type { PostMeta } from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function fileToMeta(file: string): { meta: PostMeta; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const category = typeof data.category === "string" ? data.category : "AI";
  const slug = typeof data.slug === "string" && data.slug ? data.slug : file.replace(/\.md$/, "");
  return {
    meta: {
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
      category,
      date: data.date ? String(data.date).slice(0, 10) : "",
      readTime: typeof data.readTime === "string" ? data.readTime : "",
      image: typeof data.image === "string" && data.image ? data.image : undefined,
      accent: categoryAccent[category] ?? categoryAccent.AI,
    },
    content,
  };
}

function readDir(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPostMeta(): PostMeta[] {
  return readDir()
    .map((f) => fileToMeta(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return getAllPostMeta().map((m) => m.slug);
}

export function getLatestPosts(n: number): PostMeta[] {
  return getAllPostMeta().slice(0, n);
}

export function getRelatedPosts(slug: string, category: string, n: number): PostMeta[] {
  const others = getAllPostMeta().filter((m) => m.slug !== slug);
  const sameCat = others.filter((m) => m.category === category);
  const rest = others.filter((m) => m.category !== category);
  return [...sameCat, ...rest].slice(0, n);
}

export function getPostBySlug(slug: string): { meta: PostMeta; html: string } | null {
  const file = readDir().find((f) => fileToMeta(f).meta.slug === slug);
  if (!file) return null;
  const { meta, content } = fileToMeta(file);
  const html = marked.parse(content, { async: false, gfm: true }) as string;
  return { meta, html };
}
