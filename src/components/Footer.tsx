import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight, Linkedin, Twitter, Github } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI Integration", href: "/services/ai-integration" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web App Development", href: "/services/web-app-development" },
      { label: "Product Design", href: "/services/product-design" },
      { label: "IoT & Connected Devices", href: "/services/iot-and-connected-devices" },
      { label: "Enterprise Platforms & ERP", href: "/services/enterprise-platforms-and-erp" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
    ],
  },
  {
    title: "Case studies",
    links: [
      { label: "Lexa — AI legal chatbot", href: "/case-studies/lexa" },
      { label: "ShiftERP", href: "/case-studies/shifterp" },
      { label: "LuxeLocker", href: "/case-studies/luxelocker" },
      { label: "PropMetrics", href: "/case-studies/propmetrics" },
      { label: "All 11 case studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-100">
      {/* CTA */}
      <section className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
            <div>
              <span className="badge-dark mb-6">
                <span className="dot-pulse" />
                Ready when you are
              </span>
              <h2 className="font-display text-display-md lg:text-display-lg text-white mt-6 max-w-2xl">
                Engineering capacity, on your terms.
              </h2>
              <p className="text-lg text-neutral-400 mt-6 max-w-xl leading-relaxed">
                Get a senior engineering lead on a 30-minute call. Walk away with a written technical assessment and delivery estimate — no pitch deck, no follow-up loops.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn-brand w-full justify-center">
                Book a technical call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="btn-ghost-light w-full justify-center"
              >
                Explore the platform
              </Link>
              <p className="text-xs text-neutral-500 mt-2 text-center">
                Average response time: 4 hours · NDA on request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12">
          <div>
            <Logo variant="light" className="h-7 w-auto mb-6" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-8">
              Engineering teams that ship product. UK-based, globally remote.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 border border-neutral-800 rounded-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-neutral-800 rounded-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-neutral-800 rounded-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Tackxel Ltd · Registered in England &amp; Wales · Company No. 17212854
            </p>
            <div className="flex gap-6 text-xs text-neutral-500">
              <Link href="/" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            19 Athol Road, Manchester, M16 8QW, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
