import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tackxel.com"),
  title: {
    default: "Tackxel — Custom Software Development & AI Engineering Company",
    template: "%s | Tackxel",
  },
  description:
    "Tackxel is a senior software engineering firm helping startups, scaleups, and enterprises build, automate, and scale digital products. Custom software, mobile apps, AI, cloud, and DevOps — delivered by top 3% engineers across the US, Canada, Australia, and Pakistan.",
  keywords: [
    "custom software development", "software development company",
    "mobile app development", "web app development",
    "AI development services", "generative AI consulting",
    "cloud migration", "DevOps services", "AWS partner",
    "staff augmentation", "dedicated development team",
    "MVP development", "digital transformation", "legacy software modernization",
    "Ruby on Rails development", "Next.js development", "Go development",
    "enterprise software solutions", "SOC 2 compliant development",
  ],
  authors: [{ name: "Tackxel" }],
  creator: "Tackxel",
  publisher: "Tackxel",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tackxel — Custom Software Development & AI Engineering Company",
    description: "Senior engineering teams for ambitious software companies. We design, build, and operate production systems from prototype to global scale.",
    url: "https://tackxel.com",
    siteName: "Tackxel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tackxel — Custom Software Development & AI Engineering",
    description: "Senior engineering teams for ambitious software companies.",
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
  name: "Tackxel",
  url: "https://tackxel.com",
  logo: "https://tackxel.com/logo.png",
  description: "Senior software engineering firm offering custom software development, mobile and web applications, AI, cloud, and DevOps services to startups, scaleups, and enterprises.",
  foundingDate: "2012",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "130+" },
  address: [
    { "@type": "PostalAddress", streetAddress: "8 The Green, STE A", addressLocality: "Dover", addressRegion: "DE", postalCode: "19901", addressCountry: "US" },
    { "@type": "PostalAddress", streetAddress: "1 Fore Street", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    { "@type": "PostalAddress", streetAddress: "45 Lachlan St", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
    { "@type": "PostalAddress", streetAddress: "30 Shah Jamal Road", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+1-518-840-1004", email: "sales@tackxel.com", contactType: "sales" },
    { "@type": "ContactPoint", email: "hr@tackxel.com", contactType: "human resources" },
  ],
  sameAs: ["https://www.linkedin.com/company/tackxel", "https://twitter.com/tackxel", "https://github.com/tackxel"],
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
