// Futuristic AI robot head — sleek sci-fi aesthetic built as inline SVG with
// pure-CSS animation: floating motion, glowing visor + core, rotating
// holographic rings, drifting particles, and a scan sweep. No dependencies,
// GPU-friendly, and all motion is disabled under prefers-reduced-motion.
// On-brand with the warm gradient theme (brand blue + orange accents).

export default function AIRobotVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center" aria-hidden="true">
      {/* ambient glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-400/30 via-brand-300/20 to-orange-300/20 blur-3xl ai-glow" />

      <svg viewBox="0 0 300 300" className="relative w-full ai-float" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiHead" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#EEF3FB" />
            <stop offset="100%" stopColor="#AEC3E8" />
          </linearGradient>
          <linearGradient id="aiVisor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#264784" />
            <stop offset="50%" stopColor="#7E9DD7" />
            <stop offset="100%" stopColor="#264784" />
          </linearGradient>
          <radialGradient id="aiCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#5278C2" />
            <stop offset="100%" stopColor="#264784" />
          </radialGradient>
          <clipPath id="aiVisorClip">
            <rect x="106" y="132" width="88" height="34" rx="17" />
          </clipPath>
        </defs>

        {/* holographic rings */}
        <circle cx="150" cy="150" r="132" stroke="#7E9DD7" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 9" className="ai-ring ai-ring-a" />
        <circle cx="150" cy="150" r="110" stroke="#5278C2" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 12" className="ai-ring ai-ring-b" />
        <circle cx="150" cy="150" r="94" stroke="#AEC3E8" strokeOpacity="0.45" strokeWidth="1" className="ai-ring ai-ring-a" />

        {/* antenna */}
        <line x1="150" y1="64" x2="150" y2="48" stroke="#3159A5" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="42" r="5" fill="#F97316" className="ai-core" />

        {/* arms / shoulders behind */}
        <path d="M104 240 C104 231 120 227 150 227 C180 227 196 231 196 240 L196 256 L104 256 Z" fill="url(#aiHead)" stroke="#3159A5" strokeWidth="3" />
        <circle cx="150" cy="246" r="5" fill="#F97316" className="ai-core" />

        {/* head */}
        <path d="M150 66 C188 66 206 92 206 128 L206 176 C206 212 184 238 150 238 C116 238 94 212 94 176 L94 128 C94 92 112 66 150 66 Z" fill="url(#aiHead)" stroke="#3159A5" strokeWidth="3.5" />
        {/* sheen */}
        <path d="M150 74 C176 74 192 92 197 116 C170 105 132 105 107 121 C112 94 126 74 150 74 Z" fill="#FFFFFF" fillOpacity="0.5" />
        {/* side panels */}
        <rect x="86" y="138" width="10" height="34" rx="4" fill="#5278C2" />
        <rect x="204" y="138" width="10" height="34" rx="4" fill="#5278C2" />

        {/* forehead core */}
        <circle cx="150" cy="104" r="8" fill="url(#aiCore)" className="ai-core" />

        {/* visor (glowing) */}
        <g className="ai-core" style={{ filter: "drop-shadow(0 0 9px rgba(82,120,194,0.85))" }}>
          <rect x="106" y="132" width="88" height="34" rx="17" fill="url(#aiVisor)" />
          <rect x="118" y="146" width="64" height="6" rx="3" fill="#DCE7F8" fillOpacity="0.9" />
        </g>
        {/* scan sweep inside visor */}
        <g clipPath="url(#aiVisorClip)">
          <rect x="106" y="132" width="16" height="34" fill="#FFFFFF" fillOpacity="0.55" className="ai-scan" />
        </g>

        {/* mouth grille */}
        <g stroke="#5278C2" strokeWidth="2" strokeLinecap="round" opacity="0.75">
          <line x1="134" y1="200" x2="166" y2="200" />
          <line x1="138" y1="210" x2="162" y2="210" />
        </g>

        {/* particles */}
        <circle cx="58" cy="92" r="3" fill="#7E9DD7" className="ai-particle ai-p1" />
        <circle cx="244" cy="112" r="2.5" fill="#F97316" className="ai-particle ai-p2" />
        <circle cx="70" cy="212" r="2.5" fill="#5278C2" className="ai-particle ai-p3" />
        <circle cx="240" cy="204" r="3" fill="#7E9DD7" className="ai-particle ai-p4" />
        <circle cx="150" cy="22" r="2" fill="#AEC3E8" className="ai-particle ai-p2" />
      </svg>
    </div>
  );
}
