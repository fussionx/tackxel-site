// Hero collage: 4 tiles arranged in a 2x2 grid showing team scenes & dashboards
// Designed to feel premium and engineering-led, not stock-photo generic

type Props = {
  className?: string;
};

function Portrait({
  cx, cy, r, skin, hair, shirt,
}: { cx: number; cy: number; r: number; skin: string; hair: string; shirt: string }) {
  return (
    <>
      <ellipse cx={cx} cy={cy + r * 1.5} rx={r * 1.8} ry={r * 1.2} fill={shirt} />
      <circle cx={cx} cy={cy} r={r} fill={skin} />
      <path d={`M ${cx - r} ${cy - r * 0.3} Q ${cx - r * 0.9} ${cy - r * 1.3} ${cx} ${cy - r * 1.2} Q ${cx + r * 0.9} ${cy - r * 1.3} ${cx + r} ${cy - r * 0.3} Q ${cx + r * 0.5} ${cy - r * 0.7} ${cx} ${cy - r * 0.6} Q ${cx - r * 0.5} ${cy - r * 0.7} ${cx - r} ${cy - r * 0.3}`} fill={hair} />
    </>
  );
}

export const HeroCollage = ({ className = "" }: Props) => (
  <svg viewBox="0 0 540 540" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <clipPath id="h-t1"><rect x="0" y="0" width="300" height="260" rx="16" /></clipPath>
      <clipPath id="h-t2"><rect x="320" y="0" width="220" height="170" rx="16" /></clipPath>
      <clipPath id="h-t3"><rect x="0" y="280" width="220" height="260" rx="16" /></clipPath>
      <clipPath id="h-t4"><rect x="240" y="190" width="300" height="350" rx="16" /></clipPath>
      <linearGradient id="hero-dash-1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#162954" />
        <stop offset="100%" stopColor="#0F1D3D" />
      </linearGradient>
      <linearGradient id="hero-code-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1D376A" />
        <stop offset="100%" stopColor="#162954" />
      </linearGradient>
    </defs>

    {/* TILE 1 - top-left: team in meeting room */}
    <g clipPath="url(#h-t1)">
      <rect x="0" y="0" width="300" height="260" fill="#264784" />
      {/* Window light */}
      <rect x="20" y="20" width="170" height="100" rx="4" fill="#5278C2" opacity="0.4" />
      <line x1="105" y1="20" x2="105" y2="120" stroke="#3159A5" strokeWidth="2" opacity="0.5" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="#3159A5" strokeWidth="2" opacity="0.5" />

      {/* Plant */}
      <ellipse cx="250" cy="100" rx="20" ry="14" fill="#1D376A" />
      <path d="M 240 100 Q 240 70 250 65 Q 260 70 260 100" fill="#3F6BC5" />
      <path d="M 235 100 Q 240 80 245 80" stroke="#5278C2" strokeWidth="2" fill="none" />

      {/* Desk */}
      <rect x="0" y="200" width="300" height="60" fill="#162954" />
      <rect x="0" y="195" width="300" height="6" fill="#1D376A" />

      {/* Laptop */}
      <rect x="170" y="180" width="80" height="50" rx="3" fill="#0F1D3D" />
      <rect x="174" y="184" width="72" height="40" fill="#5278C2" opacity="0.7" />
      <rect x="180" y="190" width="30" height="3" rx="1" fill="#fff" opacity="0.6" />
      <rect x="180" y="196" width="50" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="180" y="202" width="40" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="180" y="212" width="55" height="8" rx="2" fill="#3159A5" />

      {/* People */}
      <Portrait cx={60} cy={140} r={28} skin="#E5C6A3" hair="#2A1810" shirt="#3159A5" />
      <Portrait cx={130} cy={150} r={26} skin="#C68B5D" hair="#1A0F0A" shirt="#1F2937" />

      {/* Coffee cup */}
      <ellipse cx="280" cy="195" rx="10" ry="3" fill="#0F1D3D" />
      <rect x="270" y="180" width="20" height="16" rx="2" fill="#fff" opacity="0.9" />
      <path d="M 290 184 Q 295 184 295 188 Q 295 192 290 192" stroke="#fff" strokeWidth="1.5" fill="none" />
    </g>

    {/* TILE 2 - top-right: code editor screen */}
    <g clipPath="url(#h-t2)">
      <rect x="320" y="0" width="220" height="170" fill="url(#hero-code-bg)" />
      {/* Browser-like top bar */}
      <rect x="320" y="0" width="220" height="20" fill="#0F1D3D" />
      <circle cx="332" cy="10" r="2.5" fill="#FF3D2E" />
      <circle cx="342" cy="10" r="2.5" fill="#FFB800" />
      <circle cx="352" cy="10" r="2.5" fill="#00C896" />
      <rect x="380" y="5" width="100" height="10" rx="3" fill="#1D376A" />

      {/* Code lines */}
      <g fontFamily="monospace" fontSize="7">
        <text x="335" y="40" fill="#7E9DD7">1</text>
        <text x="350" y="40" fill="#5278C2">const</text>
        <text x="380" y="40" fill="#fff">deploy</text>
        <text x="412" y="40" fill="#7E9DD7">=</text>
        <text x="420" y="40" fill="#5278C2">async</text>
        <text x="450" y="40" fill="#fff">() {`=>`} {`{`}</text>

        <text x="335" y="55" fill="#7E9DD7">2</text>
        <text x="360" y="55" fill="#7E9DD7">await</text>
        <text x="390" y="55" fill="#fff">build</text>
        <text x="415" y="55" fill="#fff">()</text>

        <text x="335" y="70" fill="#7E9DD7">3</text>
        <text x="360" y="70" fill="#7E9DD7">await</text>
        <text x="390" y="70" fill="#fff">test</text>
        <text x="410" y="70" fill="#fff">()</text>

        <text x="335" y="85" fill="#7E9DD7">4</text>
        <text x="360" y="85" fill="#7E9DD7">await</text>
        <text x="390" y="85" fill="#fff">ship</text>
        <text x="410" y="85" fill="#fff">()</text>

        <text x="335" y="100" fill="#7E9DD7">5</text>
        <text x="350" y="100" fill="#fff">{`}`}</text>
      </g>

      {/* Terminal output area */}
      <rect x="335" y="115" width="190" height="45" rx="3" fill="#0F1D3D" />
      <circle cx="345" cy="125" r="2" fill="#00C896" />
      <text x="352" y="128" fontFamily="monospace" fontSize="6" fill="#00C896">✓ build passed</text>
      <circle cx="345" cy="138" r="2" fill="#00C896" />
      <text x="352" y="141" fontFamily="monospace" fontSize="6" fill="#00C896">✓ 247 tests passing</text>
      <circle cx="345" cy="151" r="2" fill="#FFB800" />
      <text x="352" y="154" fontFamily="monospace" fontSize="6" fill="#FFB800">→ deploying...</text>
    </g>

    {/* TILE 3 - bottom-left: focused engineer at screen */}
    <g clipPath="url(#h-t3)">
      <rect x="0" y="280" width="220" height="260" fill="#1D376A" />
      {/* Background */}
      <rect x="0" y="280" width="220" height="260" fill="#5278C2" opacity="0.05" />

      {/* Monitor */}
      <rect x="40" y="300" width="140" height="90" rx="4" fill="#0F1D3D" />
      <rect x="44" y="304" width="132" height="78" fill="#162954" />
      {/* Charts on screen */}
      <polyline points="50,370 70,340 90,350 110,320 130,330 150,300 170,310" stroke="#5278C2" strokeWidth="2" fill="none" />
      <rect x="50" y="312" width="40" height="2" rx="1" fill="#7E9DD7" opacity="0.6" />
      {/* Stand */}
      <rect x="100" y="390" width="20" height="14" fill="#0F1D3D" />
      <ellipse cx="110" cy="405" rx="30" ry="4" fill="#0F1D3D" />

      {/* Person sitting */}
      <Portrait cx={110} cy={460} r={38} skin="#A66B3F" hair="#0D0807" shirt="#1F2937" />

      {/* Keyboard */}
      <rect x="50" y="415" width="120" height="14" rx="2" fill="#264784" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={55 + i * 9.5} y="418" width="7" height="8" rx="1" fill="#1D376A" />
      ))}
    </g>

    {/* TILE 4 - right side / bottom-right: analytics dashboard */}
    <g clipPath="url(#h-t4)">
      <rect x="240" y="190" width="300" height="350" fill="url(#hero-dash-1)" />

      {/* Dashboard window */}
      <rect x="260" y="210" width="260" height="310" rx="8" fill="#162954" stroke="#264784" strokeWidth="1" />

      {/* Window header */}
      <rect x="260" y="210" width="260" height="22" rx="8" fill="#0F1D3D" />
      <circle cx="272" cy="221" r="2.5" fill="#FF3D2E" />
      <circle cx="282" cy="221" r="2.5" fill="#FFB800" />
      <circle cx="292" cy="221" r="2.5" fill="#00C896" />
      <text x="390" y="225" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="7" fill="#7E9DD7" fontWeight="600">tackxel.com/dashboard</text>

      {/* Heading */}
      <text x="276" y="252" fontFamily="Geist, sans-serif" fontSize="8" fill="#7E9DD7" letterSpacing="0.1em">OVERVIEW</text>
      <text x="276" y="270" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="700" fill="#fff">Production Metrics</text>

      {/* Stat row */}
      <g>
        <rect x="276" y="285" width="74" height="46" rx="4" fill="#1D376A" />
        <text x="282" y="298" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">DEPLOYS / DAY</text>
        <text x="282" y="318" fontFamily="Geist, sans-serif" fontSize="16" fontWeight="700" fill="#fff">47</text>
        <text x="312" y="318" fontFamily="Geist, sans-serif" fontSize="7" fill="#00C896">↑ 4.3×</text>

        <rect x="356" y="285" width="74" height="46" rx="4" fill="#1D376A" />
        <text x="362" y="298" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">UPTIME</text>
        <text x="362" y="318" fontFamily="Geist, sans-serif" fontSize="16" fontWeight="700" fill="#00C896">99.99%</text>

        <rect x="436" y="285" width="74" height="46" rx="4" fill="#1D376A" />
        <text x="442" y="298" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">SERVICES</text>
        <text x="442" y="318" fontFamily="Geist, sans-serif" fontSize="16" fontWeight="700" fill="#fff">14</text>
      </g>

      {/* Chart */}
      <rect x="276" y="341" width="234" height="90" rx="4" fill="#1D376A" />
      <text x="282" y="354" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">DEPLOYS OVER TIME</text>

      <polyline points="282,415 305,400 325,408 345,385 365,378 385,360 405,355 425,340 445,335 465,325 485,310 505,300" stroke="#5278C2" strokeWidth="2" fill="none" />
      <polyline points="282,420 305,415 325,418 345,400 365,395 385,380 405,378 425,365 445,360 465,355 485,345 505,338" stroke="#00C896" strokeWidth="2" fill="none" />

      {/* Legend */}
      <circle cx="282" cy="442" r="3" fill="#5278C2" />
      <text x="290" y="445" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">prod</text>
      <circle cx="310" cy="442" r="3" fill="#00C896" />
      <text x="318" y="445" fontFamily="Geist, sans-serif" fontSize="6" fill="#7E9DD7">staging</text>

      {/* Bottom panel */}
      <rect x="276" y="441" width="234" height="58" rx="4" fill="#1D376A" />
      <rect x="284" y="453" width="60" height="2.5" rx="1" fill="#fff" opacity="0.8" />
      <rect x="284" y="461" width="90" height="2" rx="1" fill="#7E9DD7" opacity="0.6" />
      <rect x="284" y="469" width="70" height="2" rx="1" fill="#7E9DD7" opacity="0.6" />

      {/* Status pill */}
      <rect x="450" y="453" width="50" height="14" rx="7" fill="#00C896" opacity="0.2" />
      <circle cx="460" cy="460" r="2" fill="#00C896" />
      <text x="466" y="463" fontFamily="Geist, sans-serif" fontSize="6" fill="#00C896" fontWeight="600">HEALTHY</text>
    </g>

    {/* Floating accent — small badge */}
    <g>
      <circle cx="20" cy="500" r="22" fill="#3159A5" />
      <text x="20" y="498" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="9" fontWeight="700" fill="#fff">4.9</text>
      <text x="20" y="510" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="5" fill="#D6E1F4">★★★★★</text>
    </g>
  </svg>
);
