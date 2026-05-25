import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import BlogGrid from "@/components/BlogGrid";
import { getAllPostMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Development, Product Engineering & Shipping Software",
  description:
    "Insights on AI development, product engineering, and shipping software that works — practical lessons from the senior team at Tackxel.",
  keywords: [
    "AI development blog",
    "AI engineering blog",
    "product engineering blog",
    "software development blog UK",
    "Tackxel blog",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Tackxel",
    description: "Insights on AI, product engineering, and shipping software that works.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostMeta();

  return (
    <>
      {/* HERO — warm */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-24 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-20 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[30rem] h-[30rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">Blog</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-3xl">
              <span className="badge mb-6">
                <span className="dot-pulse" />
                The Tackxel blog
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                Insights on AI, product engineering, and shipping software that works.
              </h1>
              <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                Practical lessons from building and shipping real products — no hype, just what actually works in production.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-28 bg-neutral-950 text-white overflow-hidden">
        <Parallax speed={0.1} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none">
          <div className="w-[30rem] h-[30rem] rounded-full bg-orange-500/15 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute -bottom-20 -left-20 hidden lg:block pointer-events-none">
          <div className="w-[28rem] h-[28rem] rounded-full bg-brand-500/20 blur-3xl" />
        </Parallax>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="text-eyebrow text-brand-300 uppercase mb-4">Build with us</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Reading is good. Shipping is better.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                Got something to build? Tell us about it — we&apos;ll handle the rest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <Link href="/contact" className="btn-brand">Book a call<ArrowRight className="w-4 h-4" /></Link>
                <Link href="/case-studies" className="btn-ghost-light">See our work<ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
