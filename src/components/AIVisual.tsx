// Themed gradient placeholder visuals for the AI Integration page, in the
// homepage warm visual language (gradient + grid + window chrome + brand
// line-art motif). Fills its parent — set width/height/aspect on the wrapper.
// Swap any of these for a real screenshot later by replacing the consumer
// with <Image />.

export type Variant =
  | "chat"
  | "neural"
  | "capabilities"
  | "models"
  | "modular"
  | "rag"
  | "workflow"
  | "document";

type Props = {
  variant: Variant;
  accent?: string; // bg-gradient-to-br from/via/to classes
  label?: string;
  className?: string;
};

const S = { b600: "#264784", b500: "#3159A5", b400: "#5278C2", b300: "#7E9DD7", b200: "#AEC3E8", b100: "#D6E1F4" };

function Motif({ variant }: { variant: Variant }) {
  const common = { fill: "none", stroke: S.b500, strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (variant) {
    case "chat":
      return (
        <g>
          <rect x="70" y="84" width="190" height="50" rx="16" fill="#fff" stroke={S.b300} strokeWidth={2} />
          <rect x="90" y="100" width="120" height="7" rx="3.5" fill={S.b300} />
          <rect x="90" y="114" width="80" height="7" rx="3.5" fill={S.b200} />
          <rect x="200" y="150" width="210" height="58" rx="16" fill={S.b500} />
          <rect x="220" y="168" width="150" height="7" rx="3.5" fill="#fff" opacity="0.85" />
          <rect x="220" y="184" width="110" height="7" rx="3.5" fill="#fff" opacity="0.5" />
          <rect x="70" y="226" width="92" height="42" rx="16" fill="#fff" stroke={S.b300} strokeWidth={2} />
          <circle cx="98" cy="247" r="5" fill={S.b400} />
          <circle cx="116" cy="247" r="5" fill={S.b300} />
          <circle cx="134" cy="247" r="5" fill={S.b200} />
        </g>
      );
    case "neural":
      return (
        <g>
          <g stroke={S.b300} strokeWidth={1.4} opacity="0.7">
            {[110, 160, 210, 260].map((y) =>
              [150, 230].map((x2) => <line key={`${y}-${x2}`} x1="120" y1={y} x2={x2} y2={x2 === 150 ? 150 : 220} />),
            )}
            <line x1="150" y1="150" x2="330" y2="185" />
            <line x1="230" y1="220" x2="330" y2="185" />
          </g>
          <g fill={S.b300}>
            {[110, 160, 210, 260].map((y) => <circle key={y} cx="120" cy={y} r="9" />)}
          </g>
          <g fill={S.b500} stroke="#fff" strokeWidth={2}>
            <circle cx="150" cy="150" r="13" />
            <circle cx="230" cy="220" r="13" />
          </g>
          <circle cx="330" cy="185" r="15" fill={S.b600} stroke="#fff" strokeWidth={2} />
        </g>
      );
    case "capabilities":
      return (
        <g {...common}>
          {[
            [110, 96], [250, 96], [110, 200], [250, 200],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="120" height="80" rx="12" fill={i === 0 ? S.b500 : "#fff"} stroke={S.b300} fillOpacity={i === 0 ? 0.18 : 1} />
              <circle cx={x + 24} cy={y + 26} r="9" fill={S.b400} stroke="none" />
              <rect x={x + 44} y={y + 22} width="56" height="7" rx="3.5" fill={S.b200} stroke="none" />
              <rect x={x + 20} y={y + 48} width="80" height="6" rx="3" fill={S.b100} stroke="none" />
            </g>
          ))}
        </g>
      );
    case "models":
      return (
        <g>
          <circle cx="240" cy="185" r="30" fill={S.b500} stroke="#fff" strokeWidth={2.5} />
          {[
            [110, 110], [370, 110], [110, 260], [370, 260],
          ].map(([x, y], i) => (
            <g key={i}>
              <line x1="240" y1="185" x2={x} y2={y} stroke={S.b300} strokeWidth={1.6} opacity="0.7" />
              <circle cx={x} cy={y} r="22" fill="#fff" stroke={S.b400} strokeWidth={2.5} />
              <circle cx={x} cy={y} r="8" fill={S.b300} />
            </g>
          ))}
        </g>
      );
    case "modular":
      return (
        <g {...common} stroke={S.b300}>
          <rect x="120" y="92" width="240" height="40" rx="10" fill={S.b500} fillOpacity="0.35" stroke={S.b500} strokeDasharray="6 6" />
          <rect x="120" y="146" width="240" height="40" rx="10" fill={S.b500} fillOpacity="0.25" />
          <rect x="120" y="200" width="240" height="40" rx="10" fill={S.b400} fillOpacity="0.18" />
          <rect x="120" y="254" width="240" height="40" rx="10" fill={S.b400} fillOpacity="0.12" />
          <path d="M 240 104 v 16 M 232 112 h 16" stroke={S.b500} />
        </g>
      );
    case "rag":
      return (
        <g {...common}>
          <g>
            <rect x="74" y="120" width="90" height="116" rx="8" fill="#fff" stroke={S.b300} />
            <rect x="64" y="110" width="90" height="116" rx="8" fill="#fff" stroke={S.b300} />
            <rect x="80" y="128" width="58" height="6" rx="3" fill={S.b200} stroke="none" />
            <rect x="80" y="144" width="48" height="6" rx="3" fill={S.b200} stroke="none" />
            <rect x="80" y="160" width="58" height="6" rx="3" fill={S.b100} stroke="none" />
          </g>
          <path d="M 160 168 h 56" />
          <path d="M 208 160 l 10 8 l -10 8" />
          <rect x="222" y="138" width="80" height="62" rx="14" fill={S.b500} fillOpacity="0.18" stroke={S.b500} />
          <path d="M 248 154 c -10 0 -10 14 0 14 c 0 8 12 8 14 0 c 10 0 10 -14 0 -14 c 0 -8 -12 -8 -14 0 z" stroke={S.b500} />
          <path d="M 304 168 h 40" />
          <path d="M 336 160 l 10 8 l -10 8" />
          <rect x="350" y="146" width="56" height="44" rx="10" fill="#fff" stroke={S.b300} />
        </g>
      );
    case "workflow":
      return (
        <g {...common}>
          <rect x="70" y="150" width="96" height="58" rx="12" fill="#fff" stroke={S.b300} />
          <path d="M 166 179 h 50" />
          <path d="M 208 171 l 10 8 l -10 8" />
          <rect x="218" y="150" width="96" height="58" rx="12" fill={S.b500} fillOpacity="0.18" stroke={S.b500} />
          <path d="M 266 150 v -36 h 100 v 36" />
          <path d="M 358 142 l 8 -8 l 8 8" />
          <rect x="330" y="150" width="80" height="58" rx="12" fill="#fff" stroke={S.b300} />
          <path d="M 348 179 l 12 12 l 22 -24" stroke={S.b500} strokeWidth={3} />
          <circle cx="118" cy="179" r="9" fill={S.b300} stroke="none" />
        </g>
      );
    case "document":
      return (
        <g {...common}>
          <rect x="150" y="80" width="180" height="200" rx="12" fill="#fff" stroke={S.b300} />
          <rect x="172" y="104" width="90" height="8" rx="4" fill={S.b300} stroke="none" />
          <rect x="172" y="128" width="136" height="6" rx="3" fill={S.b100} stroke="none" />
          <rect x="172" y="144" width="120" height="6" rx="3" fill={S.b100} stroke="none" />
          <rect x="172" y="176" width="136" height="34" rx="8" fill={S.b500} fillOpacity="0.15" stroke={S.b500} />
          <rect x="184" y="188" width="70" height="8" rx="4" fill={S.b400} stroke="none" />
          <rect x="172" y="226" width="120" height="6" rx="3" fill={S.b100} stroke="none" />
          <circle cx="330" cy="193" r="16" fill="#fff" stroke={S.b500} />
          <path d="M 324 193 l 5 5 l 9 -10" stroke={S.b500} strokeWidth={2.5} />
        </g>
      );
  }
}

export default function AIVisual({
  variant,
  accent = "from-brand-100/70 via-white to-orange-50",
  label,
  className = "",
}: Props) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-50 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute inset-0 grid-bg-light opacity-50" />

      <div className="absolute top-0 left-0 flex items-center gap-1.5 px-4 py-3.5">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-300/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-300/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-300/30" />
      </div>

      <svg viewBox="0 0 480 360" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <Motif variant={variant} />
      </svg>

      {label && (
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-700/70">{label}</span>
        </div>
      )}
    </div>
  );
}
