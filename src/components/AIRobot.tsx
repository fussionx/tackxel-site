// Friendly, on-brand AI robot drawn as inline SVG and animated with pure CSS
// (float, glowing eyes, pulsing antenna + chest light, soft glow). No deps,
// lightweight, and all motion is disabled under prefers-reduced-motion.

export default function AIRobot() {
  return (
    <div className="relative flex w-full max-w-[280px] items-center justify-center" aria-hidden="true">
      {/* soft glow behind the robot */}
      <div className="absolute inset-8 rounded-full bg-brand-300/35 blur-3xl robot-glow" />

      <svg viewBox="0 0 200 220" className="relative w-[80%] robot-bob" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* antenna */}
        <line x1="100" y1="40" x2="100" y2="22" stroke="#3159A5" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="15" r="7" fill="#F97316" className="robot-pulse" />

        {/* arms */}
        <rect x="34" y="150" width="13" height="42" rx="6.5" fill="#EEF3FB" stroke="#3159A5" strokeWidth="3" />
        <rect x="153" y="150" width="13" height="42" rx="6.5" fill="#EEF3FB" stroke="#3159A5" strokeWidth="3" />

        {/* head */}
        <rect x="40" y="40" width="120" height="92" rx="26" fill="#EEF3FB" stroke="#3159A5" strokeWidth="4" />
        {/* ears */}
        <rect x="30" y="72" width="10" height="26" rx="5" fill="#5278C2" />
        <rect x="160" y="72" width="10" height="26" rx="5" fill="#5278C2" />
        {/* face screen */}
        <rect x="54" y="56" width="92" height="60" rx="16" fill="#0F1D3D" />
        {/* eyes */}
        <g className="robot-eye" fill="#7E9DD7">
          <rect x="70" y="76" width="16" height="20" rx="8" />
          <rect x="114" y="76" width="16" height="20" rx="8" />
        </g>
        {/* smile */}
        <path d="M84 104 q16 11 32 0" stroke="#5278C2" strokeWidth="3" strokeLinecap="round" />

        {/* neck */}
        <rect x="92" y="132" width="16" height="12" fill="#AEC3E8" />
        {/* body */}
        <rect x="52" y="144" width="96" height="64" rx="22" fill="#FFFFFF" stroke="#3159A5" strokeWidth="4" />
        {/* chest light */}
        <circle cx="100" cy="172" r="9" fill="#F97316" className="robot-pulse" />
        <rect x="80" y="190" width="40" height="6" rx="3" fill="#D6E1F4" />
      </svg>
    </div>
  );
}
