import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services — Tackxel",
  description:
    "Native and cross-platform mobile app development for iOS and Android — built for startup CTOs and product leaders. App Store-ready, CI/CD baked in, 90-day post-launch support.",
  alternates: { canonical: "/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development Services — Tackxel",
    description:
      "Native iOS + Android and cross-platform mobile apps engineered for product velocity. Discover, design, build, ship — with senior engineers from week one.",
    url: "/services/mobile-app-development",
    type: "website",
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
