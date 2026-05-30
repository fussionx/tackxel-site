import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development UK | iOS, Android, React Native | Tackxel",
  description:
    "UK mobile app development agency. iOS, Android, React Native, Flutter. 11+ shipped apps. Senior engineers, fast delivery. Book a discovery call.",
  keywords: [
    "React Native development agency UK",
    "mobile app development UK",
    "iOS Android app development UK",
    "Flutter development agency UK",
    "mobile app developers UK",
    "React Native developers UK",
    "iOS app development UK",
    "Android app development UK",
  ],
  alternates: { canonical: "/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development UK — iOS, Android, React Native, Flutter | Tackxel",
    description:
      "UK mobile app development. iOS, Android, React Native, Flutter. 11+ shipped apps. Senior engineers, App Store + Play Store ready.",
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
