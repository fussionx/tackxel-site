"use client";

import { useRef, type ReactNode } from "react";

// Subtle 3D tilt on hover. Desktop pointers only, and disabled under
// prefers-reduced-motion — so it never costs anything on mobile or for users
// who opt out. Pairs with a hover shadow via the passed className.
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;
    }
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const max = 5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s", willChange: "transform" }}
      className={className}
    >
      {children}
    </div>
  );
}
