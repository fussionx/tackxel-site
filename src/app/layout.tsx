import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tackxel.com"),
  title: {
    default: "Tackxel — UK boutique software studio · AI, mobile, web, IoT, ERP",
    template: "%s | Tackxel",
  },
  description:
    "UK boutique software studio. AI integration, mobile app development, web platforms, IoT, product design and custom ERP — by a senior team. Staff augmentation available.",
  keywords: [
    "boutique software studio UK",
    "AI integration agency UK",
    "AI development company UK",
    "mobile app development UK",
    "React Native development UK",
    "Next.js development agency",
    "product design agency UK",
    "IoT development UK",
    "custom ERP development UK",
    "staff augmentation UK",
    "LLM integration services",
    "AI chatbot development",
  ],
  authors: [{ name: "Tackxel Ltd" }],
  creator: "Tackxel Ltd",
  publisher: "Tackxel Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tackxel — UK boutique software studio · AI, mobile, web, IoT, ERP",
    description:
      "UK boutique software studio. A senior team building AI integrations, mobile apps, web platforms, IoT systems and custom ERPs for founders and product teams globally.",
    url: "https://www.tackxel.com",
    siteName: "Tackxel",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tackxel — UK boutique software studio",
    description: "AI integration, mobile, web, IoT, design and custom ERP. By a senior boutique team in the UK, serving founders globally.",
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
  url: "https://www.tackxel.com",
  logo: "https://www.tackxel.com/logo/tackxel.svg",
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
        <StickyCta />
      </body>
    </html>
  );
}
