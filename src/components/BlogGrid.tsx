"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import BlogVisual from "@/components/BlogVisual";
import { BLOG_CATEGORIES, type PostMeta } from "@/lib/blog-types";

const tabs = ["All", ...BLOG_CATEGORIES] as const;

function fmt(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              active === tab ? "text-white" : "text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-200"
            }`}
          >
            {active === tab && (
              <motion.span layoutId="blog-active-filter" className="absolute inset-0 bg-neutral-950 rounded-full" transition={{ type: "spring", duration: 0.4, bounce: 0.18 }} />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500">No posts in this category yet — check back soon.</p>
      ) : (
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/blog/${p.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white card-lift">
                    <div className="relative aspect-[16/10]">
                      {p.image ? (
                        <Image src={p.image} alt={p.title} width={1200} height={750} loading="lazy" className="w-full h-full object-cover" />
                      ) : (
                        <BlogVisual accent={p.accent} category={p.category} />
                      )}
                      <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-brand-700 backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-h3 text-neutral-950 leading-snug mb-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed flex-1">{p.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {p.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          {fmt(p.date)}
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-600 transition-colors" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
