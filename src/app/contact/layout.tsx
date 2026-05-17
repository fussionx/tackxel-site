import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tackxel — Talk to a Senior Software Engineer",
  description: "Book a free 30-minute consultation with a senior engineer at Tackxel. Custom software development, mobile apps, AI, and cloud services. Response within 4 business hours. NDA available.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tackxel — Talk to a Senior Engineer",
    description: "Free 30-minute technical consultation. Senior engineers, not sales reps. NDA available.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
