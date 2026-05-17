"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const serviceMenu = {
  "Engineering & Development": [
    { name: "Software Development", href: "/services" },
    { name: "Web App Development", href: "/services" },
    { name: "Ruby on Rails Development", href: "/services" },
    { name: "MERN Stack Development", href: "/services" },
    { name: "Golang Development", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "Frontend Development", href: "/services" },
    { name: "Backend Development", href: "/services" },
    { name: "Blockchain", href: "/services" },
    { name: "Internet of Things", href: "/services" },
  ],
  "Product & Startup Services": [
    { name: "Product Strategy", href: "/services" },
    { name: "Product Design", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Discovery Workshop", href: "/services" },
    { name: "POC/MVP Development", href: "/services" },
  ],
  "Artificial Intelligence": [
    { name: "AI Consulting", href: "/services" },
    { name: "AI and ML", href: "/services" },
    { name: "AI Apps", href: "/services" },
    { name: "Chatbots", href: "/services" },
    { name: "Generative AI", href: "/services" },
    { name: "AI Agents", href: "/services" },
    { name: "Agentic AI", href: "/services" },
  ],
  "Strategic Services": [
    { name: "Digital Transformation", href: "/services" },
    { name: "Legacy Software Modernization", href: "/services" },
    { name: "QA and Testing", href: "/services" },
  ],
  "Cloud & DevOps": [
    { name: "Cloud Migration", href: "/services" },
    { name: "Cloud Engineering", href: "/services" },
    { name: "DevOps", href: "/services" },
    { name: "AWS", href: "/services" },
  ],
  "Engagement Models": [
    { name: "Fixed Price", href: "/services" },
    { name: "Staff Augmentation", href: "/services" },
    { name: "Dedicated Teams", href: "/services" },
  ],
};

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Pages with dark hero (white text on dark)
  const isDarkHero = pathname === "/" || pathname === "/about" || pathname === "/services";
  // When not scrolled and on dark hero, use light text/logo. Otherwise dark.
  const onDark = isDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  onDark
                    ? "text-neutral-200 hover:text-white"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div
                    className="bg-white border border-neutral-200 rounded-xl shadow-2xl p-8 grid grid-cols-3 gap-x-10 gap-y-6"
                    style={{ width: "880px" }}
                  >
                    {Object.entries(serviceMenu).map(([category, items]) => (
                      <div key={category}>
                        <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3 pb-2 border-b border-neutral-100">
                          {category}
                        </div>
                        <ul className="space-y-1.5">
                          {items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block text-sm text-neutral-700 hover:text-brand-600 transition-colors py-0.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                onDark
                  ? "text-neutral-200 hover:text-white"
                  : "text-neutral-700 hover:text-neutral-950"
              }`}
            >
              Company
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                onDark
                  ? "text-neutral-200 hover:text-white"
                  : "text-neutral-700 hover:text-neutral-950"
              }`}
            >
              Resources
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-get-in-touch group">
              <span>Get in Touch</span>
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
            <div className="space-y-6">
              {Object.entries(serviceMenu).map(([category, items]) => (
                <div key={category}>
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">
                    {category}
                  </div>
                  <ul className="space-y-2 pl-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-neutral-700 py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-6 border-t border-neutral-200 space-y-3">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-neutral-900">Company</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-neutral-900">Resources</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-get-in-touch w-full justify-center mt-4">
                  <span>Get in Touch</span>
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
