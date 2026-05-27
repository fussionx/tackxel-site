// Client-safe blog types and constants (no filesystem imports). Both client
// components and the server-only blog.ts import from here.

export const BLOG_CATEGORIES = [
  "AI",
  "AI/ML",
  "Web Dev",
  "Software Dev",
  "Product Design",
  "SaaS",
] as const;

// Each category maps to a warm brand gradient for the placeholder visual.
export const categoryAccent: Record<string, string> = {
  AI: "from-brand-100/70 via-white to-sky-50",
  "AI/ML": "from-cyan-100/60 via-white to-brand-50",
  "Web Dev": "from-orange-50 via-white to-brand-50",
  "Software Dev": "from-slate-100/60 via-white to-brand-50",
  "Product Design": "from-violet-100/60 via-white to-brand-50",
  SaaS: "from-emerald-50 via-white to-brand-50",
};

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
  image?: string; // optional real image path; otherwise a gradient placeholder is used
  accent: string; // derived from category
};

export function formatPostDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}
