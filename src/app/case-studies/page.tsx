import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Case Studies — 11 shipped products",
  description:
    "Eleven products shipped by Tackxel and its founder: Lexa (AI legal chatbot), ShiftERP, LuxeLocker, PropMetrics, MultiUnitX, Sukuk, YallaGrub and more — across AI, real estate, fintech, mobile, IoT and enterprise.",
  keywords: [
    "Tackxel case studies",
    "AI legal chatbot case study",
    "ERP case study",
    "IoT case study",
    "fintech app case study",
    "real estate proptech case study",
    "Flutter app case study",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Tackxel",
    description:
      "Eleven shipped products across AI, real estate, fintech, mobile, IoT and enterprise. Real names, real systems, in production.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      {/* HERO — warm, homepage style */}
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
              <span className="text-brand-600">Case studies</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-3xl">
              <span className="badge mb-6">
                <span className="dot-pulse" />
                Selected work
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                Eleven products. <span className="text-brand-600">All shipped.</span>
              </h1>
              <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                AI, real estate, fintech, mobile, IoT, and enterprise — built by Tackxel and, before it, by the founder at Clustox. Real names, real systems, in production. Filter by what you&apos;re building.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">
                  Discuss your project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  See what we build
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CaseStudiesGrid />
        </div>
      </section>

      {/* FINAL CTA — dark, homepage style */}
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
              <div className="text-eyebrow text-brand-300 uppercase mb-4">Build something similar</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Got a project in your head? Let&apos;s talk.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                A 30-minute call with the founder. No slide decks, no sales reps — just an engineer thinking through your problem with you.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <Link href="/contact" className="btn-brand">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-ghost-light">
                  See what we build
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
