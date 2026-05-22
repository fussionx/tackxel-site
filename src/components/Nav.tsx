"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

// AI is the lead category: the AI Integration hub plus its 7 sub-services.
const aiHub = {
  name: "AI Integration",
  href: "/services/ai-integration",
  desc: "The hub — GPT, LLMs, RAG & agents in production",
};

const aiSubServices = [
  { name: "AI Consulting",        href: "/services/ai-consulting" },
  { name: "AI & ML Development",  href: "/services/ai-ml-development" },
  { name: "AI App Development",   href: "/services/ai-app-development" },
  { name: "Chatbot Development",  href: "/services/chatbot-development" },
  { name: "Generative AI",        href: "/services/generative-ai" },
  { name: "AI Agents",            href: "/services/ai-agents" },
  { name: "Agentic AI",           href: "/services/agentic-ai" },
];

const otherServices = [
  { name: "Mobile App Development",     href: "/services/mobile-app-development",       desc: "iOS, Android, React Native, Flutter" },
  { name: "Web & Product Engineering",  href: "/services/web-app-development",          desc: "Next.js, React, Node, Rails" },
  { name: "Product Design",             href: "/services/product-design",               desc: "UX research, design systems, handover" },
  { name: "IoT & Connected Devices",    href: "/services/iot-and-connected-devices",    desc: "BLE, NFC, wearables, smart hardware" },
  { name: "Enterprise Platforms & ERP", href: "/services/enterprise-platforms-and-erp", desc: "Custom SaaS, ERP, internal tools" },
  { name: "Staff Augmentation",         href: "/services/staff-augmentation",           desc: "Senior engineers embedded in your team" },
];

// Pages whose hero is dark (white text on dark background). Header switches
// the logo + link colors based on this. Lookup-by-Set so adding a page is
// just one line, and the check is O(1).
// Every page now uses a light/warm hero, so the header logo stays dark
// everywhere. Add a pathname here if a page is ever given a dark hero again.
const DARK_HERO_PAGES = new Set<string>([]);

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onDark = DARK_HERO_PAGES.has(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = onDark
    ? "text-neutral-200 hover:text-white"
    : "text-neutral-700 hover:text-neutral-950";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          onDark
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-md border-b border-neutral-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-10">
            <Logo className="h-7 w-auto" variant={onDark ? "light" : "dark"} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${linkClass}`}>
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div
                    className="bg-white border border-neutral-200 rounded-xl shadow-2xl p-3"
                    style={{ width: "680px" }}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {/* AI category — hub + 7 sub-services */}
                      <div className="rounded-lg bg-brand-50/40 p-2">
                        <Link href={aiHub.href} className="block px-3 py-2.5 rounded-lg hover:bg-brand-50 transition-colors group">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                              {aiHub.name}
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 bg-brand-100 px-1.5 py-0.5 rounded">
                              Lead
                            </span>
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">{aiHub.desc}</div>
                        </Link>
                        <ul className="mt-1 border-t border-brand-100/70 pt-1">
                          {aiSubServices.map((s) => (
                            <li key={s.name}>
                              <Link href={s.href} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white transition-colors group">
                                <span className="w-1 h-1 rounded-full bg-brand-300 flex-shrink-0" />
                                <span className="text-[13px] font-medium text-neutral-700 group-hover:text-brand-600 transition-colors">{s.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Other services */}
                      <div className="p-1">
                        <div className="px-3 pt-2 pb-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          More services
                        </div>
                        <ul>
                          {otherServices.map((s) => (
                            <li key={s.name}>
                              <Link href={s.href} className="block px-3 py-2 rounded-md hover:bg-neutral-50 transition-colors group">
                                <div className="text-[13px] font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">{s.name}</div>
                                <div className="text-[11px] text-neutral-500 mt-0.5">{s.desc}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className={`px-4 py-2 text-sm font-medium transition-colors ${linkClass}`}>
              Case studies
            </Link>

            <Link href="/about" className={`px-4 py-2 text-sm font-medium transition-colors ${linkClass}`}>
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-get-in-touch group">
              <span>Get in touch</span>
              <span className="btn-arrow-wrap">
                <ArrowRight className="w-3.5 h-3.5 btn-arrow-1" />
                <ArrowRight className="w-3.5 h-3.5 btn-arrow-2" />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${onDark ? "text-white" : "text-neutral-900"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-20">
          <div className="px-6 py-8 overflow-y-auto h-full">
            <div className="space-y-8">
              <div>
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">
                  AI Services
                </div>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href={aiHub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 -mx-3 px-3 bg-brand-50/50 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-base font-semibold text-neutral-900">{aiHub.name}</div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 bg-brand-100 px-1.5 py-0.5 rounded">
                          Lead
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">{aiHub.desc}</div>
                    </Link>
                  </li>
                  {aiSubServices.map((s) => (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 py-2.5 pl-3 border-b border-neutral-100"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
                        <span className="text-sm font-medium text-neutral-700">{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">
                  More services
                </div>
                <ul className="space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 border-b border-neutral-100"
                      >
                        <div className="text-base font-semibold text-neutral-900">{s.name}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{s.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-neutral-900">
                  Case studies
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-neutral-900">
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-get-in-touch w-full justify-center mt-4"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
