// Reusable SEO tail for service pages. Renders:
//   - FAQPage JSON-LD (for Google rich snippets)
//   - BreadcrumbList JSON-LD (Home > Services > <serviceName>)
//   - A visible "Related case studies" + "Related insights" block
//   - A visible expandable FAQ section using native <details> (no client state needed)
//
// Server-safe (no "use client") so the JSON-LD is in the prerendered HTML.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export type FAQ = { q: string; a: string };
export type RelatedLink = { href: string; title: string; meta?: string };

type Props = {
  serviceName: string; // for BreadcrumbList
  servicePath: string; // e.g. "/services/ai-integration"
  faqs: FAQ[];
  caseStudies?: RelatedLink[];
  insights?: RelatedLink[];
  /** Eyebrow override above the FAQ heading. */
  faqEyebrow?: string;
  /** Optional Service schema fields — when set, emits a Service JSON-LD entity. */
  service?: { name: string; description: string; serviceType?: string };
  /** Render the visible FAQ section. Set false if the page already has its
   *  own FAQ UI — JSON-LD is still emitted so rich snippets work. */
  renderFaq?: boolean;
};

export default function ServiceSeoTail({
  serviceName,
  servicePath,
  faqs,
  caseStudies = [],
  insights = [],
  faqEyebrow = "FAQ",
  service,
  renderFaq = true,
}: Props) {
  const url = `https://tackxel.com${servicePath}`;

  const ldData: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tackxel.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://tackxel.com/services" },
        { "@type": "ListItem", position: 3, name: serviceName, item: url },
      ],
    },
  ];
  if (service) {
    ldData.unshift({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.serviceType ?? service.name,
      description: service.description,
      url,
      provider: { "@type": "Organization", name: "Tackxel Ltd", url: "https://tackxel.com" },
      areaServed: ["GB", "Worldwide"],
    });
  }

  return (
    <>
      <JsonLd data={ldData} />

      {/* Related case studies + Related insights */}
      {(caseStudies.length > 0 || insights.length > 0) && (
        <section className="py-16 lg:py-20 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              {caseStudies.length > 0 && (
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-5">Related case studies</div>
                  <ul className="space-y-3">
                    {caseStudies.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 hover:border-brand-300 hover:shadow-subtle transition-all"
                        >
                          <div>
                            <div className="font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors leading-snug">
                              {c.title}
                            </div>
                            {c.meta && (
                              <div className="text-sm text-neutral-500 mt-0.5 leading-snug">{c.meta}</div>
                            )}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {insights.length > 0 && (
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-5">Related insights</div>
                  <ul className="space-y-3">
                    {insights.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 hover:border-brand-300 hover:shadow-subtle transition-all"
                        >
                          <div>
                            <div className="font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors leading-snug">
                              {p.title}
                            </div>
                            {p.meta && (
                              <div className="text-sm text-neutral-500 mt-0.5 leading-snug">{p.meta}</div>
                            )}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Frequently asked questions */}
      {renderFaq && (
      <section className="py-20 lg:py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-brand-600 uppercase mb-4">{faqEyebrow}</div>
          <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight mb-3">
            Frequently asked questions
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-10 max-w-xl">
            Quick answers to the questions buyers ask before a discovery call.
          </p>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-neutral-200 bg-white open:shadow-subtle"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 lg:p-6">
                  <span className="font-semibold text-neutral-950 text-base lg:text-lg leading-snug">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 group-open:bg-brand-50 group-open:border-brand-300 group-open:text-brand-600 transition-colors">
                    <span className="text-lg leading-none group-open:hidden">+</span>
                    <span className="text-lg leading-none hidden group-open:inline">–</span>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1 text-sm lg:text-base text-neutral-700 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
