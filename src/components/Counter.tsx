"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function Counter({ to, suffix = "", duration = 1600, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion (or a non-positive target): skip the animation and show
    // the real number immediately.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || to <= 0) {
      setValue(to);
      return;
    }

    let raf = 0;
    const run = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      const start = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * easeOutCubic(t)));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          // Land exactly on the target — the resting value is never short, never 0.
          setValue(to);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);

    // Safety net: if the observer never fires (already-in-view edge cases,
    // layout quirks), animate anyway so the number is never stuck at 0.
    const fallback = window.setTimeout(run, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
