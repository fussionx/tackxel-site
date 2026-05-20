import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development UK — iOS, Android, React Native & Flutter",
  description:
    "UK mobile app development. Native iOS, Android, React Native and Flutter apps with App Store-ready pipelines, by a senior boutique studio. 90-day post-launch support.",
  keywords: [
    "mobile app development UK",
    "React Native development UK",
    "iOS app development UK",
    "Android app development UK",
    "Flutter development UK",
    "mobile app agency UK",
  ],
  alternates: { canonical: "/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development UK — Tackxel",
    description:
      "Native iOS + Android and cross-platform (React Native / Flutter) mobile apps. App Store-ready, by a senior UK boutique studio.",
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
