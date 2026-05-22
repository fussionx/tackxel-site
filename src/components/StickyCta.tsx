"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Floating "Book a call" button that appears once the user has scrolled past
// the hero. One passive scroll listener; hidden on the contact page itself.
export default function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 lg:bottom-6 lg:right-6 z-40"
        >
          <Link href="/contact" className="btn-get-in-touch group shadow-elevated">
            <span>Book a call</span>
            <span className="btn-arrow-wrap">
              <ArrowRight className="w-3.5 h-3.5 btn-arrow-1" />
              <ArrowRight className="w-3.5 h-3.5 btn-arrow-2" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
