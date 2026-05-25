"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

// Client-only: the dotLottie player touches `window`/WASM, so keep it out of SSR.
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

/** Shared hosted animation for the AI Integration card + AI services hero. */
export const AI_LOTTIE_SRC =
  "https://lottie.host/5e47ad4d-b2f7-49c0-949f-80baeae9ec9a/Iz9c2yELpi.lottie";

type LottieAIProps = {
  /** sizing classes for the lottie canvas (keeps it from going huge) */
  fitClassName?: string;
  /** static image shown during SSR/first paint and when reduced-motion is on */
  fallbackSrc?: string;
  fallbackAlt?: string;
  fallbackSizes?: string;
};

/**
 * Renders the AI lottie animation, centered inside its (relative) parent.
 * Falls back to a static image on the server, before hydration, and whenever
 * the user prefers reduced motion.
 */
export default function LottieAI({
  fitClassName = "w-full h-full",
  fallbackSrc = "/images/services/ai.jpg",
  fallbackAlt = "AI integration visualisation",
  fallbackSizes = "(max-width: 1024px) 100vw, 50vw",
}: LottieAIProps) {
  // Start false so SSR + first client paint render the static image (no layout
  // shift, good LCP). Flip to true after mount unless reduced motion is set.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimate(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAnimate(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!animate) {
    return (
      <Image
        src={fallbackSrc}
        alt={fallbackAlt}
        fill
        sizes={fallbackSizes}
        className="object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <DotLottieReact
        src={AI_LOTTIE_SRC}
        loop
        autoplay
        className={fitClassName}
        aria-label="Animated AI and machine learning illustration"
      />
    </div>
  );
}
