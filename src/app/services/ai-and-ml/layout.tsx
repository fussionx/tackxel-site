import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI and ML Development Services Company — Tackxel",
  description:
    "Tackxel helps companies capture value with AI and ML solutions — reducing operational costs, shortening decision latency, and minimizing revenue leakage. Custom AI, generative AI, predictive analytics, NLP, and computer vision.",
  alternates: { canonical: "/services/ai-and-ml" },
  openGraph: {
    title: "AI and ML Development — Tackxel",
    description:
      "Build, train, automate, and scale AI/ML systems with senior engineers. Generative AI, NLP, computer vision, predictive analytics, and MLOps.",
    url: "/services/ai-and-ml",
  },
};

export default function AIAndMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
