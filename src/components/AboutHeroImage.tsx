// Premium illustrated office hero for About Us
// Editorial-style scene: modern office interior, diverse team, multiple monitors
// Avoids generic stock-photo look by using a painterly SVG illustration

type Props = {
  className?: string;
};

// Re-usable portrait helper
function Portrait({
  cx, cy, r, skin, hair, shirt, hairStyle = "short",
}: {
  cx: number; cy: number; r: number;
  skin: string; hair: string; shirt: string;
  hairStyle?: "short" | "long" | "bun" | "curly";
}) {
  return (
    <g>
      {/* shirt */}
      <ellipse cx={cx} cy={cy + r * 1.6} rx={r * 1.9} ry={r * 1.3} fill={shirt} />
      <rect x={cx - r * 1.5} y={cy + r * 0.8} width={r * 3} height={r * 2} rx={r * 0.3} fill={shirt} />
      {/* neck */}
      <rect x={cx - r * 0.35} y={cy + r * 0.7} width={r * 0.7} height={r * 0.5} fill={skin} />
      {/* head */}
      <circle cx={cx} cy={cy} r={r} fill={skin} />
      {/* hair variations */}
      {hairStyle === "short" && (
        <path d={`M ${cx - r * 1.05} ${cy - r * 0.35} Q ${cx - r * 0.95} ${cy - r * 1.35} ${cx} ${cy - r * 1.25} Q ${cx + r * 0.95} ${cy - r * 1.35} ${cx + r * 1.05} ${cy - r * 0.35} Q ${cx + r * 0.55} ${cy - r * 0.75} ${cx} ${cy - r * 0.65} Q ${cx - r * 0.55} ${cy - r * 0.75} ${cx - r * 1.05} ${cy - r * 0.35}`} fill={hair} />
      )}
      {hairStyle === "long" && (
        <>
          <path d={`M ${cx - r * 1.1} ${cy - r * 0.3} Q ${cx - r} ${cy - r * 1.35} ${cx} ${cy - r * 1.3} Q ${cx + r} ${cy - r * 1.35} ${cx + r * 1.1} ${cy - r * 0.3} L ${cx + r * 1.1} ${cy + r * 0.5} Q ${cx + r * 1.05} ${cy + r * 0.6} ${cx + r * 0.95} ${cy + r * 0.5}`} fill={hair} />
          <path d={`M ${cx - r * 1.1} ${cy - r * 0.3} L ${cx - r * 1.1} ${cy + r * 0.5} Q ${cx - r * 1.05} ${cy + r * 0.6} ${cx - r * 0.95} ${cy + r * 0.5}`} fill={hair} />
        </>
      )}
      {hairStyle === "bun" && (
        <>
          <path d={`M ${cx - r * 1.05} ${cy - r * 0.35} Q ${cx - r * 0.95} ${cy - r * 1.35} ${cx} ${cy - r * 1.25} Q ${cx + r * 0.95} ${cy - r * 1.35} ${cx + r * 1.05} ${cy - r * 0.35} Q ${cx + r * 0.55} ${cy - r * 0.75} ${cx} ${cy - r * 0.65} Q ${cx - r * 0.55} ${cy - r * 0.75} ${cx - r * 1.05} ${cy - r * 0.35}`} fill={hair} />
          <circle cx={cx + r * 0.8} cy={cy - r * 1.4} r={r * 0.55} fill={hair} />
        </>
      )}
      {hairStyle === "curly" && (
        <>
          <circle cx={cx - r * 0.7} cy={cy - r * 0.9} r={r * 0.5} fill={hair} />
          <circle cx={cx} cy={cy - r * 1.1} r={r * 0.55} fill={hair} />
          <circle cx={cx + r * 0.7} cy={cy - r * 0.9} r={r * 0.5} fill={hair} />
          <circle cx={cx - r * 1.0} cy={cy - r * 0.4} r={r * 0.45} fill={hair} />
          <circle cx={cx + r * 1.0} cy={cy - r * 0.4} r={r * 0.45} fill={hair} />
        </>
      )}
      {/* facial features - subtle */}
      <circle cx={cx - r * 0.3} cy={cy - r * 0.05} r={r * 0.07} fill="#1a1a1a" opacity="0.7" />
      <circle cx={cx + r * 0.3} cy={cy - r * 0.05} r={r * 0.07} fill="#1a1a1a" opacity="0.7" />
      <path d={`M ${cx - r * 0.18} ${cy + r * 0.35} Q ${cx} ${cy + r * 0.5} ${cx + r * 0.18} ${cy + r * 0.35}`} stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.4" />
    </g>
  );
}

export const AboutHeroImage = ({ className = "" }: Props) => (
  <svg viewBox="0 0 700 560" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Sky / wall gradient */}
      <linearGradient id="ab-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8F4ED" />
        <stop offset="100%" stopColor="#EFE6D5" />
      </linearGradient>
      <linearGradient id="ab-window-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFD89E" />
        <stop offset="50%" stopColor="#FFB088" />
        <stop offset="100%" stopColor="#E89488" />
      </linearGradient>
      <linearGradient id="ab-floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C9B89F" />
        <stop offset="100%" stopColor="#A89378" />
      </linearGradient>
      <linearGradient id="ab-desk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8B7355" />
        <stop offset="100%" stopColor="#6B5641" />
      </linearGradient>
      <linearGradient id="ab-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1D376A" />
        <stop offset="100%" stopColor="#0F1D3D" />
      </linearGradient>
      <radialGradient id="ab-light" cx="0.3" cy="0.2" r="0.7">
        <stop offset="0%" stopColor="#FFE8C2" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFE8C2" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ab-glass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B8D4E8" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#B8D4E8" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="ab-plant1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A7C59" />
        <stop offset="100%" stopColor="#2D5039" />
      </linearGradient>
    </defs>

    {/* === BACK WALL === */}
    <rect x="0" y="0" width="700" height="380" fill="url(#ab-wall)" />

    {/* === LARGE WINDOW with warm sunset light === */}
    <rect x="60" y="40" width="320" height="220" rx="4" fill="url(#ab-window-sky)" />
    {/* Window frames */}
    <line x1="220" y1="40" x2="220" y2="260" stroke="#fff" strokeWidth="3" />
    <line x1="60" y1="150" x2="380" y2="150" stroke="#fff" strokeWidth="3" />
    {/* Window outer frame */}
    <rect x="60" y="40" width="320" height="220" rx="4" fill="none" stroke="#4A3829" strokeWidth="3" />
    {/* City silhouettes through window */}
    <g opacity="0.35">
      <rect x="80" y="180" width="40" height="80" fill="#5A4A3A" />
      <rect x="130" y="160" width="30" height="100" fill="#6B5742" />
      <rect x="170" y="140" width="50" height="120" fill="#5A4A3A" />
      <rect x="230" y="170" width="35" height="90" fill="#6B5742" />
      <rect x="275" y="155" width="45" height="105" fill="#5A4A3A" />
      <rect x="330" y="170" width="40" height="90" fill="#6B5742" />
    </g>
    {/* Tiny lights in buildings */}
    {[100, 145, 195, 245, 295, 345].map((x, i) => (
      <g key={i}>
        <rect x={x} y={200 + (i % 2) * 5} width="3" height="3" fill="#FFE8C2" />
        <rect x={x + 8} y={210 + (i % 2) * 5} width="3" height="3" fill="#FFE8C2" />
        <rect x={x + 16} y={205 + (i % 2) * 5} width="3" height="3" fill="#FFE8C2" />
      </g>
    ))}

    {/* === RIGHT SIDE WALL DECORATION === */}
    {/* Hanging pendant lamp */}
    <line x1="490" y1="0" x2="490" y2="50" stroke="#4A3829" strokeWidth="1.5" />
    <ellipse cx="490" cy="65" rx="22" ry="16" fill="#2A2017" />
    <ellipse cx="490" cy="60" rx="22" ry="5" fill="#3A2D1F" />
    <ellipse cx="490" cy="80" rx="15" ry="3" fill="#FFE8C2" opacity="0.6" />

    {/* Wall art / framed picture */}
    <rect x="430" y="50" width="100" height="120" fill="#fff" stroke="#4A3829" strokeWidth="3" />
    <rect x="438" y="58" width="84" height="104" fill="#3159A5" />
    {/* abstract art shapes */}
    <circle cx="465" cy="85" r="14" fill="#FFD89E" />
    <path d="M 445 130 L 480 100 L 515 140 Z" fill="#5278C2" />
    <rect x="448" y="125" width="20" height="20" rx="2" fill="#fff" opacity="0.6" />

    {/* Shelf with plant + books */}
    <rect x="560" y="100" width="120" height="6" fill="#4A3829" />
    {/* Plant 1 - large monstera */}
    <ellipse cx="595" cy="106" rx="20" ry="6" fill="#8B6F4A" />
    <path d="M 580 102 Q 575 70 590 60 Q 605 55 605 80 Q 600 95 595 100" fill="url(#ab-plant1)" />
    <path d="M 590 100 Q 600 75 615 70 Q 620 80 612 95" fill="url(#ab-plant1)" />
    <path d="M 588 96 Q 580 85 575 88 Q 575 95 583 98" fill="#5A8C68" />
    {/* Books */}
    <rect x="625" y="76" width="6" height="30" fill="#D4574D" />
    <rect x="633" y="80" width="6" height="26" fill="#4A7C7E" />
    <rect x="641" y="74" width="6" height="32" fill="#E5B888" />
    <rect x="649" y="78" width="6" height="28" fill="#3159A5" />
    {/* Small decorative object */}
    <circle cx="668" cy="98" r="8" fill="#FFD89E" />

    {/* === GLASS PARTITION on right === */}
    <rect x="540" y="180" width="160" height="220" fill="url(#ab-glass)" />
    <line x1="540" y1="180" x2="540" y2="400" stroke="#4A3829" strokeWidth="2" />
    <line x1="700" y1="180" x2="700" y2="400" stroke="#4A3829" strokeWidth="2" />
    {/* Faint silhouette behind glass */}
    <g opacity="0.4">
      <Portrait cx={620} cy={280} r={22} skin="#D4A574" hair="#3D2817" shirt="#4A6CB3" hairStyle="short" />
    </g>
    {/* Glass reflections */}
    <line x1="565" y1="200" x2="585" y2="380" stroke="#fff" strokeWidth="1" opacity="0.4" />
    <line x1="640" y1="200" x2="660" y2="380" stroke="#fff" strokeWidth="1" opacity="0.3" />

    {/* === FLOOR === */}
    <rect x="0" y="380" width="700" height="180" fill="url(#ab-floor)" />
    {/* Floor planks */}
    <line x1="0" y1="380" x2="700" y2="380" stroke="#8B7355" strokeWidth="2" />
    <line x1="0" y1="440" x2="700" y2="440" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
    <line x1="0" y1="500" x2="700" y2="500" stroke="#8B7355" strokeWidth="1" opacity="0.4" />

    {/* === FOREGROUND LARGE PLANT (left) === */}
    <ellipse cx="40" cy="425" rx="35" ry="10" fill="#3A2D1F" />
    <path d="M 30 425 Q 5 380 20 320 Q 30 290 50 310 Q 55 360 45 420" fill="url(#ab-plant1)" />
    <path d="M 45 425 Q 75 370 90 350 Q 100 360 80 410" fill="#3D6B4D" />
    <path d="M 35 415 Q 15 400 8 410 Q 12 420 30 420" fill="#5A8C68" />
    <path d="M 50 410 Q 65 395 80 405 Q 75 415 55 415" fill="#3D6B4D" />

    {/* === MAIN DESK === */}
    <rect x="90" y="370" width="450" height="25" fill="url(#ab-desk)" rx="2" />
    <rect x="90" y="370" width="450" height="6" fill="#9B8260" />
    {/* Desk legs hint */}
    <rect x="100" y="395" width="8" height="60" fill="#5A4A3A" />
    <rect x="520" y="395" width="8" height="60" fill="#5A4A3A" />

    {/* === MONITOR 1 (left center, large) === */}
    <rect x="140" y="240" width="180" height="120" rx="4" fill="#1a1a1a" />
    <rect x="143" y="243" width="174" height="105" fill="url(#ab-screen)" />
    {/* Code on screen */}
    <g fontFamily="monospace" fontSize="6.5">
      <text x="150" y="258" fill="#7E9DD7">01</text>
      <text x="165" y="258" fill="#5278C2">function</text>
      <text x="205" y="258" fill="#fff">deploy</text>
      <text x="237" y="258" fill="#7E9DD7">() {`{`}</text>

      <text x="150" y="270" fill="#7E9DD7">02</text>
      <text x="170" y="270" fill="#7E9DD7">await</text>
      <text x="200" y="270" fill="#fff">build()</text>

      <text x="150" y="282" fill="#7E9DD7">03</text>
      <text x="170" y="282" fill="#7E9DD7">await</text>
      <text x="200" y="282" fill="#fff">test()</text>

      <text x="150" y="294" fill="#7E9DD7">04</text>
      <text x="170" y="294" fill="#7E9DD7">await</text>
      <text x="200" y="294" fill="#fff">ship()</text>

      <text x="150" y="306" fill="#7E9DD7">05</text>
      <text x="165" y="306" fill="#fff">{`}`}</text>

      <text x="150" y="325" fill="#00C896">✓ deployed</text>
      <text x="150" y="335" fill="#7E9DD7">▎</text>
    </g>
    {/* Monitor stand */}
    <rect x="220" y="360" width="20" height="12" fill="#1a1a1a" />
    <ellipse cx="230" cy="372" rx="35" ry="3" fill="#1a1a1a" />

    {/* === MONITOR 2 (right of desk, smaller, angled) === */}
    <rect x="360" y="260" width="140" height="100" rx="4" fill="#1a1a1a" />
    <rect x="363" y="263" width="134" height="85" fill="url(#ab-screen)" />
    {/* Dashboard mockup on screen */}
    <rect x="370" y="270" width="60" height="3" rx="1" fill="#fff" opacity="0.8" />
    <rect x="370" y="277" width="40" height="2" rx="1" fill="#5278C2" />
    <rect x="370" y="285" width="40" height="22" rx="2" fill="#1D376A" />
    <text x="374" y="295" fontFamily="Geist" fontSize="5" fill="#7E9DD7">DEPLOYS</text>
    <text x="374" y="304" fontFamily="Geist" fontSize="9" fontWeight="700" fill="#fff">47</text>
    <rect x="415" y="285" width="40" height="22" rx="2" fill="#1D376A" />
    <text x="419" y="295" fontFamily="Geist" fontSize="5" fill="#7E9DD7">UPTIME</text>
    <text x="419" y="304" fontFamily="Geist" fontSize="9" fontWeight="700" fill="#00C896">99.99%</text>
    <rect x="460" y="285" width="32" height="22" rx="2" fill="#1D376A" />
    <text x="464" y="295" fontFamily="Geist" fontSize="5" fill="#7E9DD7">SVC</text>
    <text x="464" y="304" fontFamily="Geist" fontSize="9" fontWeight="700" fill="#fff">14</text>
    {/* Mini chart */}
    <rect x="370" y="312" width="122" height="30" rx="2" fill="#1D376A" />
    <polyline points="375,338 390,330 405,332 420,322 435,318 450,308 465,310 480,300" stroke="#5278C2" strokeWidth="1.5" fill="none" />
    <polyline points="375,340 390,335 405,330 420,328 435,322 450,318 465,316 480,310" stroke="#00C896" strokeWidth="1.5" fill="none" />
    {/* Monitor stand */}
    <rect x="420" y="360" width="20" height="12" fill="#1a1a1a" />
    <ellipse cx="430" cy="372" rx="30" ry="3" fill="#1a1a1a" />

    {/* === PERSON 1 (sitting at desk, left, facing monitor) === */}
    {/* Body / chair back */}
    <rect x="200" y="395" width="60" height="80" rx="6" fill="#374151" />
    <rect x="195" y="395" width="70" height="20" rx="6" fill="#1F2937" />
    {/* Head (back view, slightly turned) */}
    <Portrait cx={230} cy={400} r={18} skin="#E5C6A3" hair="#2A1810" shirt="#374151" hairStyle="short" />
    {/* Arm on desk */}
    <rect x="218" y="378" width="30" height="18" rx="6" fill="#E5C6A3" />

    {/* === PERSON 2 (standing, mid, slight turn) === */}
    {/* Body */}
    <rect x="335" y="385" width="38" height="100" rx="6" fill="#1F2937" />
    {/* Pants */}
    <rect x="340" y="465" width="14" height="55" fill="#0F1D3D" />
    <rect x="356" y="465" width="14" height="55" fill="#0F1D3D" />
    {/* Shoes */}
    <ellipse cx="346" cy="525" rx="9" ry="4" fill="#1a1a1a" />
    <ellipse cx="363" cy="525" rx="9" ry="4" fill="#1a1a1a" />
    {/* Head */}
    <Portrait cx={354} cy={365} r={20} skin="#A66B3F" hair="#0D0807" shirt="#1F2937" hairStyle="curly" />
    {/* Arm holding tablet/papers */}
    <rect x="320" y="395" width="10" height="36" rx="4" fill="#A66B3F" />
    <rect x="315" y="425" width="22" height="14" rx="2" fill="#fff" />
    <rect x="318" y="428" width="14" height="2" rx="0.5" fill="#3159A5" />
    <rect x="318" y="432" width="10" height="2" rx="0.5" fill="#7E9DD7" />
    <rect x="318" y="436" width="14" height="2" rx="0.5" fill="#7E9DD7" />

    {/* === PERSON 3 (sitting at desk, right, in profile) === */}
    {/* Chair */}
    <rect x="450" y="400" width="55" height="75" rx="6" fill="#4A6CB3" />
    {/* Body in profile */}
    <ellipse cx="478" cy="425" rx="28" ry="22" fill="#4A6CB3" />
    {/* Head profile - bun style */}
    <Portrait cx={478} cy={395} r={19} skin="#D4A574" hair="#5C3520" shirt="#4A6CB3" hairStyle="bun" />
    {/* Arm reaching for keyboard */}
    <rect x="460" y="395" width="22" height="10" rx="4" fill="#D4A574" transform="rotate(-15 471 400)" />

    {/* === KEYBOARDS on desk === */}
    <rect x="170" y="362" width="95" height="14" rx="2" fill="#2A2A2A" />
    {Array.from({ length: 10 }).map((_, i) => (
      <rect key={i} x={175 + i * 9} y="365" width="7" height="8" rx="1" fill="#1a1a1a" />
    ))}
    <rect x="385" y="365" width="80" height="11" rx="2" fill="#2A2A2A" />

    {/* === COFFEE CUP on desk === */}
    <rect x="305" y="350" width="18" height="22" rx="2" fill="#fff" />
    <path d="M 323 354 Q 330 354 330 360 Q 330 366 323 366" stroke="#fff" strokeWidth="2" fill="none" />
    <ellipse cx="314" cy="352" rx="9" ry="3" fill="#5C3520" />
    {/* Steam */}
    <path d="M 310 348 Q 312 343 311 338 Q 309 335 312 332" stroke="#E5B888" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M 316 348 Q 318 343 316 338" stroke="#E5B888" strokeWidth="1" fill="none" opacity="0.5" />

    {/* Notebook + pen on desk */}
    <rect x="280" y="362" width="22" height="14" rx="1" fill="#FFF5E5" />
    <rect x="280" y="362" width="22" height="3" fill="#D4574D" />
    <rect x="305" y="368" width="14" height="2" rx="1" fill="#1a1a1a" transform="rotate(15 312 369)" />

    {/* === FOREGROUND PLANT (right) === */}
    <ellipse cx="640" cy="500" rx="40" ry="10" fill="#3A2D1F" />
    <path d="M 625 500 Q 600 440 620 410 Q 640 395 650 425 Q 655 470 645 495" fill="url(#ab-plant1)" />
    <path d="M 645 495 Q 670 460 685 450 Q 690 465 670 490" fill="#3D6B4D" />
    <path d="M 615 490 Q 595 480 590 490 Q 600 500 620 495" fill="#5A8C68" />

    {/* === WARM LIGHT GLOW (from window) === */}
    <ellipse cx="280" cy="200" rx="350" ry="180" fill="url(#ab-light)" opacity="0.7" />

    {/* === SUBTLE FLOATING UI ELEMENTS (premium product feel) === */}
    {/* Floating notification card top-right */}
    <g>
      <rect x="555" y="430" width="130" height="50" rx="8" fill="#fff" stroke="#E4E4E7" strokeWidth="1" />
      <circle cx="572" cy="448" r="8" fill="#00C896" />
      <path d="M 568 448 L 572 452 L 577 444" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="588" y="446" fontFamily="Geist, sans-serif" fontSize="8" fontWeight="700" fill="#18181B">Deploy successful</text>
      <text x="588" y="458" fontFamily="Geist, sans-serif" fontSize="6" fill="#71717A">Production · 12 seconds ago</text>
      <rect x="588" y="465" width="60" height="8" rx="4" fill="#00C896" opacity="0.15" />
      <text x="592" y="471" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="700" fill="#15803D">+ 247 tests passing</text>
    </g>
  </svg>
);
