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
  // Render the real number on the server / first paint, so the value is correct
  // even before (or without) JS — it is never 0.
  const [value, setValue] = useState(to);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Non-positive target, or reduced motion: just show the final number.
    if (to <= 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        if (t < 1) raf = requestAnimationFrame(tick);
        else setValue(to); // land exactly on the target
      };
      raf = requestAnimationFrame(tick);
    };

    // Already on screen at load: keep the final number (no flash through 0).
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      doneRef.current = true;
      setValue(to);
      return;
    }

    // Below the fold: start at 0 and count up when scrolled into view. The user
    // never sees the reset because the element isn't visible yet.
    setValue(0);
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

    // Safety net so it can never get stuck at 0 if the observer doesn't fire.
    const fallback = window.setTimeout(run, 2000);

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
