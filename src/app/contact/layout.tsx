import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tackxel — UK AI Development Agency",
  description:
    "Contact Tackxel — UK AI development agency in Manchester. Email contact@tackxel.com, sale@tackxel.com, call +44 7862 409351, or send a message. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tackxel — UK AI Development Agency",
    description:
      "Email, phone, or send us a message. UK AI development agency in Manchester building AI integrations, mobile apps, web platforms, product design and more.",
    url: "/contact",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tackxel",
  url: "https://www.tackxel.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Tackxel Ltd",
    url: "https://www.tackxel.com",
    email: "contact@tackxel.com",
    telephone: "+44 7862 409351",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19 Athol Road",
      addressLocality: "Manchester",
      postalCode: "M16 8QW",
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@tackxel.com",
        contactType: "customer support",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        email: "sale@tackxel.com",
        contactType: "sales",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+44-7862-409351",
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CompaniesHouseNumber",
      value: "17212854",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
