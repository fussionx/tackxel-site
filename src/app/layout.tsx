import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tackxel.com"),
  title: {
    default: "Tackxel — Boutique product engineering studio",
    template: "%s | Tackxel",
  },
  description:
    "Tackxel Ltd is a UK-based boutique product engineering studio building mobile apps, web platforms, IoT systems, and AI-powered products for founders and product teams globally.",
  keywords: [
    "boutique software studio",
    "mobile app development",
    "web app development",
    "IoT development",
    "AI integration",
    "custom ERP",
    "product engineering",
    "Next.js development",
    "React Native development",
    "Flutter development",
    "UK software studio",
  ],
  authors: [{ name: "Tackxel Ltd" }],
  creator: "Tackxel Ltd",
  publisher: "Tackxel Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tackxel — Boutique product engineering studio",
    description:
      "A small senior team building mobile, web, IoT, and AI products for founders and product teams. UK-registered, globally remote.",
    url: "https://tackxel.com",
    siteName: "Tackxel",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tackxel — Boutique product engineering studio",
    description: "A small senior team building mobile, web, IoT, and AI products for founders and product teams.",
    creator: "@tackxel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tackxel Ltd",
  url: "https://tackxel.com",
  logo: "https://tackxel.com/logo.png",
  description:
    "Tackxel Ltd is a UK-based boutique product engineering studio building mobile apps, web platforms, IoT systems, and AI-powered products for founders and product teams globally.",
  foundingDate: "2024",
  founder: { "@type": "Person", name: "Uzair Sufi" },
  email: "contact@tackxel.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 Athol Road",
    addressLocality: "Manchester",
    postalCode: "M16 8QW",
    addressCountry: "GB",
  },
  contactPoint: [
    { "@type": "ContactPoint", email: "contact@tackxel.com", contactType: "customer support", availableLanguage: ["en"] },
  ],
  identifier: { "@type": "PropertyValue", propertyID: "CompaniesHouseNumber", value: "17212854" },
  sameAs: [
    "https://www.linkedin.com/company/tackxel",
    "https://twitter.com/tackxel",
    "https://github.com/tackxel",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-neutral-50 text-neutral-900 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
