import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance And Software Testing Services — Tackxel",
  description:
    "Tackxel helps brands achieve zero-defect releases to meet performance, scalability, and security benchmarks. With our QA automation, you can increase customer satisfaction by 40% while ensuring a faster time to market.",
  alternates: { canonical: "/services/qa-testing" },
  openGraph: {
    title: "QA and Software Testing — Tackxel",
    description:
      "Functional, automation, performance, security, mobile, and regression testing — with AI-led intelligent QA for enterprise-grade quality.",
    url: "/services/qa-testing",
  },
};

export default function QATestingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
