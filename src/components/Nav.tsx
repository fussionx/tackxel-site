"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Menu, X,
  Sparkles, Database, Zap, MessageSquare, FileText, Bot, Boxes,
  Smartphone, Code2, Palette, Users,
  Cloud, GitBranch, Container, ShieldCheck, Settings, RefreshCw, ArrowRightLeft,
  type LucideIcon,
} from "lucide-react";
import Logo from "./Logo";

type MenuItem = { name: string; href: string; desc: string; Icon: LucideIcon };

const aiServices: MenuItem[] = [
  { name: "AI Consulting", href: "/services/ai-consulting", desc: "AI strategy, roadmaps & feasibility", Icon: Sparkles },
  { name: "AI & ML Development", href: "/services/ai-ml-development", desc: "Custom models & predictive analytics", Icon: Database },
  { name: "AI App Development", href: "/services/ai-app-development", desc: "AI-powered mobile & web apps", Icon: Zap },
  { name: "Chatbot Development", href: "/services/chatbot-development", desc: "Conversational AI like Lexa", Icon: MessageSquare },
  { name: "Generative AI", href: "/services/generative-ai", desc: "GenAI, RAG & content systems", Icon: FileText },
  { name: "AI Agents", href: "/services/ai-agents", desc: "Autonomous task agents", Icon: Bot },
  { name: "Agentic AI", href: "/services/agentic-ai", desc: "Multi-agent systems & orchestration", Icon: Boxes },
];

const engineeringServices: MenuItem[] = [
  { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "iOS, Android, Flutter, React Native", Icon: Smartphone },
  { name: "Web & Product Engineering", href: "/services/web-app-development", desc: "Next.js, React, Node", Icon: Code2 },
  { name: "Product Design", href: "/services/product-design", desc: "UI/UX & product discovery", Icon: Palette },
  { name: "Staff Augmentation", href: "/services/staff-augmentation", desc: "Embed senior engineers in 2 weeks", Icon: Users },
];

const cloudServices: MenuItem[] = [
  { name: "Cloud Native Journey", href: "/services/cloud-native-journey", desc: "End-to-end cloud transformation", Icon: Cloud },
  { name: "DevOps & Platform Engineering", href: "/services/devops-platform-engineering", desc: "CI/CD & automation", Icon: GitBranch },
  { name: "Kubernetes Consultancy", href: "/services/kubernetes-consultancy", desc: "Container orchestration experts", Icon: Container },
  { name: "Supply Chain Security", href: "/services/supply-chain-security", desc: "Secure your build pipeline", Icon: ShieldCheck },
  { name: "Managed Services", href: "/services/managed-services", desc: "Ongoing cloud operations", Icon: Settings },
  { name: "Application Modernization", href: "/services/application-modernization", desc: "Modernize legacy systems", Icon: RefreshCw },
  { name: "Cloud Migration", href: "/services/cloud-migration", desc: "Move to AWS, GCP, Azure", Icon: ArrowRightLeft },
];

const mobileGroups = [
  { title: "Artificial Intelligence", items: aiServices },
  { title: "Engineering", items: engineeringServices },
  { title: "Cloud Native", items: cloudServices },
];

// Every page uses a light/warm hero, so the header logo stays dark everywhere.
const DARK_HERO_PAGES = new Set<string>([]);

function MenuColumn({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div>
      <div className="px-3 mb-1.5 text-[10px] font-mono uppercase tracking-widest text-brand-600">{title}</div>
      <ul>
        {items.map((s) => (
          <li key={s.name}>
            <Link href={s.href} className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-brand-50/60 transition-colors group/item">
              <span className="mt-0.5 flex w-7 h-7 items-center justify-center rounded-lg bg-neutral-50 border border-neutral-200 group-hover/item:border-brand-200 group-hover/item:bg-white transition-colors flex-shrink-0">
                <s.Icon className="w-3.5 h-3.5 text-brand-600" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-neutral-900 group-hover/item:text-brand-600 transition-colors leading-tight">{s.name}</span>
                <span className="block text-[11px] text-neutral-500 mt-0.5 leading-snug">{s.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>("Artificial Intelligence");

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
              className="static"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${linkClass}`}>
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 8, x: "-50%" }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed left-1/2 top-16 z-50 w-[min(1080px,calc(100vw-2rem))] pt-2"
                  >
                    <div className="rounded-2xl border border-neutral-200/80 bg-white/90 backdrop-blur-xl shadow-2xl p-5">
                      <div className="grid grid-cols-[1.1fr_0.82fr_1.1fr_0.92fr] gap-5">
                        <MenuColumn title="Artificial Intelligence" items={aiServices} />
                        <MenuColumn title="Engineering" items={engineeringServices} />
                        <MenuColumn title="Cloud Native" items={cloudServices} />

                        {/* Featured — Lexa */}
                        <div className="pl-5 border-l border-neutral-200/70">
                          <div className="px-1 mb-1.5 text-[10px] font-mono uppercase tracking-widest text-brand-600">Featured work</div>
                          <Link href="/case-studies/lexa" className="group block rounded-xl overflow-hidden border border-neutral-200 bg-white/70 backdrop-blur card-lift">
                            <div className="relative h-28 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 via-brand-500/15 to-sky-400/20" />
                              <div className="absolute inset-0 grid-bg-light opacity-50" />
                              <div className="absolute top-2.5 left-3 flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                              </div>
                              <span className="absolute top-2.5 right-3 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-widest text-brand-700">
                                Flagship
                              </span>
                              <div className="relative h-full flex items-center justify-center">
                                <span className="font-display text-3xl font-bold tracking-display text-neutral-900/80">Lx</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">Lexa</div>
                              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                                Pakistan&apos;s first AI legal chatbot — built by Tackxel.
                              </p>
                              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                                Read the case study
                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

      {/* MOBILE — accordion */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-20">
          <div className="px-6 py-8 overflow-y-auto h-full">
            <div className="space-y-3">
              {mobileGroups.map((g) => {
                const open = openGroup === g.title;
                return (
                  <div key={g.title} className="border-b border-neutral-100 pb-3">
                    <button
                      onClick={() => setOpenGroup(open ? null : g.title)}
                      className="w-full flex items-center justify-between py-2 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{g.title}</span>
                      <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {g.items.map((s) => (
                            <li key={s.name}>
                              <Link
                                href={s.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 py-2.5"
                              >
                                <span className="flex w-8 h-8 items-center justify-center rounded-lg bg-neutral-50 border border-neutral-200 flex-shrink-0">
                                  <s.Icon className="w-4 h-4 text-brand-600" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-neutral-900 leading-tight">{s.name}</span>
                                  <span className="block text-xs text-neutral-500 leading-snug">{s.desc}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="space-y-3 pt-4">
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
