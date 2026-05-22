"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Hero image for service pages. Rounded, soft shadow, a subtle brand gradient
// overlay so stock photos blend with the palette, and a gentle fade-in.
// Responsive: the parent grid stacks it below the text on mobile.
export default function ServiceHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated"
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="w-full h-full object-cover"
      />
      {/* Brand gradient wash so the photo reads on-palette */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/30 via-brand-500/5 to-orange-200/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  );
}
