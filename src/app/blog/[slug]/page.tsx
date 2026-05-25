import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Clock, Calendar, User } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import BlogVisual from "@/components/BlogVisual";
import ShareButtons from "@/components/ShareButtons";
import JsonLd from "@/components/JsonLd";
import { getPostBySlug, getAllSlugs, getRelatedPosts, formatPostDate } from "@/lib/blog";

const BASE = "https://tackxel.com";
const AUTHOR = "Tackxel Team";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.meta.title, description: post.meta.excerpt, url, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { meta, html } = post;
  const related = getRelatedPosts(slug, meta.category, 3);
  const url = `${BASE}/blog/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      description: meta.excerpt,
      datePublished: meta.date,
      author: { "@type": "Organization", name: AUTHOR, url: BASE },
      publisher: {
        "@type": "Organization",
        name: "Tackxel Ltd",
        logo: { "@type": "ImageObject", url: `${BASE}/logo/tackxel.svg` },
      },
      mainEntityOfPage: url,
      articleSection: meta.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        { "@type": "ListItem", position: 3, name: meta.title, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative hero-warm pt-32 pb-12 overflow-hidden border-b border-neutral-200">
        <Parallax speed={0.06} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[22rem] h-[22rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600 truncate max-w-[16rem]">{meta.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <span className="inline-flex items-center rounded-full bg-white border border-neutral-200 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-brand-700 mb-5">
              {meta.category}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.08]">
              {meta.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4 text-neutral-400" />{AUTHOR}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-neutral-400" />{formatPostDate(meta.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-neutral-400" />{meta.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED VISUAL */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-2">
          <Reveal>
            <div className="aspect-[2/1] rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated mt-8">
              {meta.image ? (
                <Image src={meta.image} alt={meta.title} width={1280} height={640} priority className="w-full h-full object-cover" />
              ) : (
                <BlogVisual accent={meta.accent} category={meta.category} />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center justify-between gap-4 flex-wrap">
            <ShareButtons url={url} title={meta.title} />
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
              <ArrowUpRight className="w-4 h-4 rotate-180" />
              All posts
            </Link>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-orange-50 border border-neutral-200 p-8 lg:p-10 text-center">
              <h2 className="font-display text-h3 lg:text-h2 text-neutral-950 tracking-display-tight mb-3">
                Need help building this?
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-6 max-w-md mx-auto">
                Tell us what you&apos;re trying to ship — a 30-minute call with the founder, no sales reps.
              </p>
              <Link href="/contact" className="btn-brand">
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-h2 text-neutral-950 tracking-display-tight leading-tight mb-10">
                Related posts
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 70}>
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
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                          Read post
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
