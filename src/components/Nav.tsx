"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const services = [
  { name: "AI Integration",              href: "/services/ai-integration",               desc: "GPT, LLMs, generative AI in products", featured: true },
  { name: "Mobile App Development",      href: "/services/mobile-app-development",       desc: "iOS, Android, React Native, Flutter" },
  { name: "Web Application Development", href: "/services/web-app-development",          desc: "Next.js, React, Node, Rails" },
  { name: "Product Design",              href: "/services/product-design",               desc: "UX research, design systems, handover" },
  { name: "IoT & Connected Devices",     href: "/services/iot-and-connected-devices",    desc: "BLE, NFC, wearables, smart hardware" },
  { name: "Enterprise Platforms & ERP",  href: "/services/enterprise-platforms-and-erp", desc: "Custom SaaS, ERP, internal tools" },
  { name: "Staff Augmentation",          href: "/services/staff-augmentation",           desc: "Senior engineers embedded in your team" },
];

// Pages whose hero is dark (white text on dark background). Header switches
// the logo + link colors based on this. Lookup-by-Set so adding a page is
// just one line, and the check is O(1).
const DARK_HERO_PAGES = new Set<string>([
  "/",
  "/about",
  "/services",
  "/services/ai-integration",
  "/services/mobile-app-development",
  "/services/web-app-development",
  "/services/product-design",
  "/services/iot-and-connected-devices",
  "/services/enterprise-platforms-and-erp",
  "/services/staff-augmentation",
  "/case-studies",
  "/case-studies/co-manufacturer-erp",
  "/case-studies/storage-iot",
  "/case-studies/investor-saas",
  "/case-studies/real-estate-syndication",
]);

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
                    style={{ width: "400px" }}
                  >
                    <ul className="divide-y divide-neutral-100">
                      {services.map((s) => (
                        <li key={s.name}>
                          <Link
                            href={s.href}
                            className={`block px-4 py-3 rounded-lg transition-colors group ${s.featured ? "bg-brand-50/50 hover:bg-brand-50" : "hover:bg-neutral-50"}`}
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                                {s.name}
                              </div>
                              {s.featured && (
                                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 bg-brand-100 px-1.5 py-0.5 rounded">
                                  Lead
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-neutral-500 mt-0.5">{s.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
                  Services
                </div>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2.5 border-b border-neutral-100 ${s.featured ? "-mx-3 px-3 bg-brand-50/50 rounded" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-base font-semibold text-neutral-900">{s.name}</div>
                          {s.featured && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 bg-brand-100 px-1.5 py-0.5 rounded">
                              Lead
                            </span>
                          )}
                        </div>
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
