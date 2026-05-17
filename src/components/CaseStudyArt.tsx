// Case study mockup illustrations — colored dashboard previews like reference site

type IllusProps = {
  className?: string;
};

// Financial Services - dark blue/teal with chart UI
export const CaseStudyFintech = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="fintech-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0F1D3D" />
        <stop offset="100%" stopColor="#1D376A" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#fintech-bg)" />
    {/* Dashboard window */}
    <rect x="60" y="40" width="280" height="170" rx="8" fill="#162954" stroke="#264784" strokeWidth="1" />
    {/* Top bar */}
    <rect x="60" y="40" width="280" height="20" rx="8" fill="#0F1D3D" />
    <circle cx="72" cy="50" r="2.5" fill="#FF3D2E" />
    <circle cx="80" cy="50" r="2.5" fill="#FFB800" />
    <circle cx="88" cy="50" r="2.5" fill="#00C896" />
    {/* Stat boxes */}
    <rect x="76" y="76" width="62" height="32" rx="4" fill="#1D376A" />
    <text x="80" y="89" fontSize="6" fill="#7E9DD7" fontFamily="Geist">DEPLOYS</text>
    <text x="80" y="101" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Geist">4.3×</text>
    <rect x="143" y="76" width="62" height="32" rx="4" fill="#1D376A" />
    <text x="147" y="89" fontSize="6" fill="#7E9DD7" fontFamily="Geist">SERVICES</text>
    <text x="147" y="101" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Geist">14</text>
    <rect x="210" y="76" width="62" height="32" rx="4" fill="#1D376A" />
    <text x="214" y="89" fontSize="6" fill="#7E9DD7" fontFamily="Geist">UPTIME</text>
    <text x="214" y="101" fontSize="11" fontWeight="700" fill="#00C896" fontFamily="Geist">99.99%</text>
    {/* Chart area */}
    <rect x="76" y="118" width="196" height="78" rx="4" fill="#1D376A" />
    <polyline points="86,180 110,160 130,165 155,140 180,130 205,115 230,108 260,95" stroke="#5278C2" strokeWidth="1.5" fill="none" />
    <polyline points="86,185 110,175 130,168 155,165 180,150 205,140 230,135 260,128" stroke="#00C896" strokeWidth="1.5" fill="none" />
    {/* Sidebar */}
    <rect x="320" y="76" width="20" height="120" rx="3" fill="#264784" />
    <circle cx="330" cy="86" r="3" fill="#3159A5" />
    <circle cx="330" cy="100" r="3" fill="#5278C2" opacity="0.6" />
    <circle cx="330" cy="114" r="3" fill="#5278C2" opacity="0.6" />
  </svg>
);

// Healthcare - clean green/blue medical
export const CaseStudyHealthcare = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="health-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0B6B53" />
        <stop offset="100%" stopColor="#0E8A6C" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#health-bg)" />
    {/* Phone mockup */}
    <rect x="125" y="30" width="80" height="170" rx="12" fill="#fff" stroke="#0A4A39" strokeWidth="1.5" />
    <rect x="125" y="30" width="80" height="14" rx="12" fill="#fff" />
    <rect x="158" y="34" width="14" height="2" rx="1" fill="#0A4A39" />
    {/* Phone screen */}
    <rect x="130" y="48" width="70" height="120" rx="2" fill="#F0FDF9" />
    <circle cx="142" cy="60" r="6" fill="#0E8A6C" />
    <rect x="152" y="56" width="40" height="3" rx="1" fill="#0A4A39" />
    <rect x="152" y="62" width="28" height="2" rx="1" fill="#0E8A6C" opacity="0.5" />
    <rect x="134" y="74" width="62" height="20" rx="3" fill="#fff" stroke="#D0F0E6" strokeWidth="0.5" />
    <rect x="138" y="78" width="20" height="2" rx="0.5" fill="#0A4A39" />
    <rect x="138" y="84" width="35" height="2" rx="0.5" fill="#0E8A6C" opacity="0.5" />
    <rect x="138" y="88" width="25" height="2" rx="0.5" fill="#0E8A6C" opacity="0.5" />
    <rect x="134" y="98" width="62" height="20" rx="3" fill="#fff" stroke="#D0F0E6" strokeWidth="0.5" />
    <rect x="138" y="102" width="20" height="2" rx="0.5" fill="#0A4A39" />
    <rect x="138" y="108" width="35" height="2" rx="0.5" fill="#0E8A6C" opacity="0.5" />
    <rect x="138" y="112" width="25" height="2" rx="0.5" fill="#0E8A6C" opacity="0.5" />
    <rect x="134" y="122" width="62" height="20" rx="3" fill="#fff" stroke="#D0F0E6" strokeWidth="0.5" />
    {/* Dashboard behind */}
    <rect x="225" y="60" width="140" height="120" rx="6" fill="#fff" />
    <rect x="225" y="60" width="140" height="14" rx="6" fill="#0A4A39" />
    <text x="232" y="71" fontSize="7" fill="#fff" fontFamily="Geist" fontWeight="600">Patient Dashboard</text>
    <rect x="232" y="82" width="60" height="3" rx="1" fill="#0A4A39" />
    <rect x="232" y="90" width="120" height="40" rx="3" fill="#F0FDF9" />
    <polyline points="240,120 260,110 280,115 300,95 320,100 340,85" stroke="#0E8A6C" strokeWidth="2" fill="none" />
    <rect x="232" y="138" width="50" height="36" rx="3" fill="#F0FDF9" />
    <rect x="288" y="138" width="64" height="36" rx="3" fill="#F0FDF9" />
    <rect x="236" y="146" width="40" height="2" rx="1" fill="#0A4A39" />
    <text x="236" y="166" fontSize="10" fontWeight="700" fill="#0E8A6C" fontFamily="Geist">7M+</text>
  </svg>
);

// Retail - red/orange with shopping
export const CaseStudyRetail = ({ className = "" }: IllusProps) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="retail-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B91C1C" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#retail-bg)" />
    {/* Laptop mockup */}
    <rect x="40" y="50" width="320" height="150" rx="6" fill="#1F1F23" />
    <rect x="50" y="60" width="300" height="130" rx="2" fill="#fff" />
    {/* Top nav */}
    <rect x="50" y="60" width="300" height="18" fill="#FAFAFA" />
    <circle cx="60" cy="69" r="2" fill="#FF3D2E" />
    <circle cx="68" cy="69" r="2" fill="#FFB800" />
    <circle cx="76" cy="69" r="2" fill="#00C896" />
    <rect x="135" y="65" width="130" height="8" rx="4" fill="#fff" stroke="#E4E4E7" strokeWidth="0.5" />
    {/* Sidebar */}
    <rect x="50" y="78" width="60" height="112" fill="#F4F4F5" />
    <rect x="56" y="86" width="30" height="3" rx="1" fill="#27272A" />
    <rect x="56" y="96" width="48" height="6" rx="2" fill="#B91C1C" />
    <rect x="56" y="106" width="40" height="2" rx="1" fill="#A1A1AA" />
    <rect x="56" y="112" width="36" height="2" rx="1" fill="#A1A1AA" />
    <rect x="56" y="118" width="44" height="2" rx="1" fill="#A1A1AA" />
    {/* Charts */}
    <rect x="118" y="86" width="108" height="50" rx="3" fill="#F4F4F5" />
    <rect x="234" y="86" width="108" height="50" rx="3" fill="#F4F4F5" />
    {/* Bar chart */}
    <rect x="126" y="120" width="6" height="10" fill="#B91C1C" />
    <rect x="138" y="116" width="6" height="14" fill="#B91C1C" />
    <rect x="150" y="108" width="6" height="22" fill="#DC2626" />
    <rect x="162" y="100" width="6" height="30" fill="#DC2626" />
    <rect x="174" y="94" width="6" height="36" fill="#EF4444" />
    <rect x="186" y="98" width="6" height="32" fill="#EF4444" />
    <rect x="198" y="105" width="6" height="25" fill="#F87171" />
    <rect x="210" y="112" width="6" height="18" fill="#F87171" />
    {/* Bar chart 2 */}
    <rect x="242" y="118" width="8" height="12" fill="#B91C1C" />
    <rect x="256" y="110" width="8" height="20" fill="#B91C1C" />
    <rect x="270" y="105" width="8" height="25" fill="#DC2626" />
    <rect x="284" y="98" width="8" height="32" fill="#DC2626" />
    <rect x="298" y="92" width="8" height="38" fill="#EF4444" />
    <rect x="312" y="103" width="8" height="27" fill="#EF4444" />
    <rect x="326" y="115" width="8" height="15" fill="#F87171" />
    {/* Bottom row */}
    <rect x="118" y="142" width="50" height="48" rx="3" fill="#F4F4F5" />
    <rect x="172" y="142" width="50" height="48" rx="3" fill="#F4F4F5" />
    <rect x="226" y="142" width="58" height="48" rx="3" fill="#F4F4F5" />
    <rect x="288" y="142" width="54" height="48" rx="3" fill="#F4F4F5" />
    <text x="122" y="158" fontSize="6" fill="#71717A" fontFamily="Geist">Stores</text>
    <text x="122" y="178" fontSize="14" fontWeight="700" fill="#B91C1C" fontFamily="Geist">612</text>
    <text x="176" y="158" fontSize="6" fill="#71717A" fontFamily="Geist">Reduction</text>
    <text x="176" y="178" fontSize="14" fontWeight="700" fill="#B91C1C" fontFamily="Geist">22%</text>
    {/* Laptop base */}
    <rect x="30" y="200" width="340" height="6" rx="3" fill="#27272A" />
  </svg>
);
