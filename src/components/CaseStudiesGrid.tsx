"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import { caseStudies, FILTERS } from "@/lib/case-studies";

const tabs = ["All", ...FILTERS] as const;

export default function CaseStudiesGrid() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <div>
      {/* Filter chips */}
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
              <motion.span
                layoutId="cs-active-filter"
                className="absolute inset-0 bg-neutral-950 rounded-full"
                transition={{ type: "spring", duration: 0.4, bounce: 0.18 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
        Showing {filtered.length} of {caseStudies.length}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/case-studies/${c.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white card-lift">
                  <div className="relative aspect-[16/10]">
                    {c.heroImage ? (
                      <Image src={c.heroImage} alt={`${c.name} live site screenshot`} width={1280} height={960} loading="lazy" className="w-full h-full object-cover object-top" />
                    ) : (
                      <CaseStudyVisual monogram={c.monogram} accent={c.accent} name={c.name} />
                    )}
                    {c.liveUrl && (
                      <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/85 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 font-semibold mb-3">
                      {c.industry}
                    </div>
                    <h3 className="font-display text-h3 text-neutral-950 leading-snug mb-2">{c.name}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-1">{c.oneLiner}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
                      <span className="text-xs font-medium text-neutral-500">{c.builtByLabel}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-brand-600">
                        Read case
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
