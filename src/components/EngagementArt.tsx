// Illustrations for engagement model cards (Fixed-Cost, Dedicated Teams, Staff Augmentation)
// SVG illustrations that look professional and avoid generic stock imagery

type IllusProps = {
  className?: string;
};

// Fixed-cost project illustration - blueprint / planning
export const IllusFixedCost = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Background */}
    <rect width="320" height="200" rx="8" fill="#EEF3FB" />
    {/* Grid pattern */}
    <pattern id="fc-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#AEC3E8" strokeWidth="0.5" opacity="0.5" />
    </pattern>
    <rect width="320" height="200" fill="url(#fc-grid)" />
    {/* Document/blueprint */}
    <rect x="60" y="35" width="200" height="135" rx="4" fill="#fff" stroke="#3159A5" strokeWidth="1.5" />
    {/* Header */}
    <rect x="72" y="48" width="80" height="6" rx="2" fill="#3159A5" />
    <rect x="72" y="60" width="120" height="3" rx="1" fill="#AEC3E8" />
    <rect x="72" y="67" width="100" height="3" rx="1" fill="#AEC3E8" />
    {/* Milestones */}
    <g transform="translate(72, 85)">
      <circle cx="0" cy="0" r="4" fill="#3159A5" />
      <line x1="4" y1="0" x2="36" y2="0" stroke="#AEC3E8" strokeWidth="1" />
      <circle cx="40" cy="0" r="4" fill="#3159A5" />
      <line x1="44" y1="0" x2="76" y2="0" stroke="#AEC3E8" strokeWidth="1" />
      <circle cx="80" cy="0" r="4" fill="#3159A5" />
      <line x1="84" y1="0" x2="116" y2="0" stroke="#AEC3E8" strokeWidth="1" />
      <circle cx="120" cy="0" r="4" fill="#264784" />
      <line x1="124" y1="0" x2="156" y2="0" stroke="#D6E1F4" strokeWidth="1" />
      <circle cx="160" cy="0" r="4" fill="#fff" stroke="#AEC3E8" strokeWidth="1.5" />
    </g>
    <text x="72" y="115" fontFamily="Geist" fontSize="7" fontWeight="600" fill="#264784">M1</text>
    <text x="112" y="115" fontFamily="Geist" fontSize="7" fontWeight="600" fill="#264784">M2</text>
    <text x="152" y="115" fontFamily="Geist" fontSize="7" fontWeight="600" fill="#264784">M3</text>
    <text x="192" y="115" fontFamily="Geist" fontSize="7" fontWeight="600" fill="#264784">M4</text>
    <text x="232" y="115" fontFamily="Geist" fontSize="7" fontWeight="600" fill="#AEC3E8">M5</text>
    {/* Budget/checkmark */}
    <rect x="72" y="130" width="80" height="28" rx="3" fill="#EEF3FB" />
    <text x="80" y="143" fontFamily="Geist" fontSize="6" fill="#264784">BUDGET</text>
    <text x="80" y="153" fontFamily="Geist" fontSize="10" fontWeight="700" fill="#3159A5">$185,000</text>
    <rect x="160" y="130" width="92" height="28" rx="3" fill="#EEF3FB" />
    <text x="168" y="143" fontFamily="Geist" fontSize="6" fill="#264784">TIMELINE</text>
    <text x="168" y="153" fontFamily="Geist" fontSize="10" fontWeight="700" fill="#3159A5">14 weeks</text>
  </svg>
);

// Dedicated team illustration - team avatars
export const IllusDedicatedTeam = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="8" fill="#09090B" />
    {/* Constellation lines */}
    <line x1="60" y1="70" x2="120" y2="50" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="120" y1="50" x2="200" y2="70" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="200" y1="70" x2="260" y2="50" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="60" y1="70" x2="90" y2="130" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="120" y1="50" x2="160" y2="100" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="200" y1="70" x2="160" y2="100" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="160" y1="100" x2="230" y2="140" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    <line x1="90" y1="130" x2="160" y2="100" stroke="#3159A5" strokeWidth="0.5" opacity="0.4" />
    {/* Team member avatars */}
    {[
      { cx: 60, cy: 70, c: "#5278C2", initial: "JK" },
      { cx: 120, cy: 50, c: "#7E9DD7", initial: "SL" },
      { cx: 200, cy: 70, c: "#3159A5", initial: "MA" },
      { cx: 260, cy: 50, c: "#5278C2", initial: "RP" },
      { cx: 90, cy: 130, c: "#264784", initial: "TH" },
      { cx: 160, cy: 100, c: "#3159A5", initial: "AB" },
      { cx: 230, cy: 140, c: "#5278C2", initial: "EM" },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.cx} cy={p.cy} r="14" fill={p.c} stroke="#fff" strokeWidth="1.5" />
        <text x={p.cx} y={p.cy + 3} textAnchor="middle" fontFamily="Geist" fontSize="8" fontWeight="700" fill="#fff">{p.initial}</text>
        {/* Status dot */}
        <circle cx={p.cx + 10} cy={p.cy + 10} r="3" fill="#22C55E" stroke="#09090B" strokeWidth="1" />
      </g>
    ))}
    {/* Bottom label */}
    <rect x="60" y="165" width="200" height="22" rx="11" fill="#162954" />
    <circle cx="74" cy="176" r="3" fill="#22C55E" />
    <text x="84" y="180" fontFamily="Geist" fontSize="8" fontWeight="600" fill="#fff">7 engineers · online now</text>
  </svg>
);

// Staff augmentation - profile cards
export const IllusStaffAug = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="8" fill="#EEF3FB" />
    {/* Profile card 1 */}
    <g transform="translate(30, 30)">
      <rect width="120" height="140" rx="6" fill="#fff" stroke="#D6E1F4" strokeWidth="1" />
      <circle cx="60" cy="38" r="20" fill="#3159A5" />
      <text x="60" y="43" textAnchor="middle" fontFamily="Geist" fontSize="11" fontWeight="700" fill="#fff">SK</text>
      <rect x="20" y="68" width="80" height="3" rx="1" fill="#264784" />
      <rect x="32" y="76" width="56" height="2.5" rx="1" fill="#7E9DD7" />
      {/* Skill tags */}
      <rect x="20" y="92" width="32" height="14" rx="7" fill="#EEF3FB" />
      <text x="36" y="102" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">React</text>
      <rect x="55" y="92" width="40" height="14" rx="7" fill="#EEF3FB" />
      <text x="75" y="102" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">Node.js</text>
      <rect x="20" y="110" width="36" height="14" rx="7" fill="#EEF3FB" />
      <text x="38" y="120" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">AWS</text>
      <rect x="20" y="128" width="80" height="6" rx="3" fill="#22C55E" opacity="0.15" />
      <circle cx="26" cy="131" r="2" fill="#22C55E" />
      <text x="32" y="133" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#15803D">Available</text>
    </g>
    {/* Profile card 2 - offset */}
    <g transform="translate(170, 50)">
      <rect width="120" height="140" rx="6" fill="#fff" stroke="#D6E1F4" strokeWidth="1" />
      <circle cx="60" cy="38" r="20" fill="#264784" />
      <text x="60" y="43" textAnchor="middle" fontFamily="Geist" fontSize="11" fontWeight="700" fill="#fff">AM</text>
      <rect x="20" y="68" width="80" height="3" rx="1" fill="#264784" />
      <rect x="32" y="76" width="56" height="2.5" rx="1" fill="#7E9DD7" />
      <rect x="20" y="92" width="40" height="14" rx="7" fill="#EEF3FB" />
      <text x="40" y="102" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">Python</text>
      <rect x="63" y="92" width="32" height="14" rx="7" fill="#EEF3FB" />
      <text x="79" y="102" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">Go</text>
      <rect x="20" y="110" width="48" height="14" rx="7" fill="#EEF3FB" />
      <text x="44" y="120" textAnchor="middle" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#3159A5">Kubernetes</text>
      <rect x="20" y="128" width="80" height="6" rx="3" fill="#22C55E" opacity="0.15" />
      <circle cx="26" cy="131" r="2" fill="#22C55E" />
      <text x="32" y="133" fontFamily="Geist" fontSize="6" fontWeight="600" fill="#15803D">Available</text>
    </g>
  </svg>
);
