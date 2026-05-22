"use client";

import { useRef, useEffect } from "react";

// A soft brand glow that follows the cursor inside its parent section.
// Desktop pointers only, disabled under prefers-reduced-motion, and rAF-throttled
// so it costs nothing on mobile and stays smooth on desktop.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = parent.getBoundingClientRect();
        el.style.opacity = "1";
        el.style.background = `radial-gradient(380px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(49,89,165,0.10), transparent 70%)`;
      });
    };
    const onLeave = () => { el.style.opacity = "0"; };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300" />;
}
