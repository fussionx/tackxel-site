"use client";

import { useState } from "react";
import { Linkedin, Twitter, Link2, Check } from "lucide-react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const base = "w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-brand-600 hover:border-brand-300 transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mr-1">Share</span>
      <a className={base} href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
        <Twitter className="w-4 h-4" />
      </a>
      <a className={base} href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
        <Linkedin className="w-4 h-4" />
      </a>
      <button onClick={copy} className={base} aria-label="Copy link">
        {copied ? <Check className="w-4 h-4 text-brand-600" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
