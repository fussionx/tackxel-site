// Premium award badges — larger, more detailed, platform-accurate styling
// Each badge: rich laurel wreaths, platform brand colors, embossed center text

type BadgeProps = {
  className?: string;
};

// Detailed laurel-wreath award badge with rich illustration
function AwardBase({
  platform,
  awardLine1,
  awardLine2,
  year = "2025",
  accent = "#3159A5",
  bg = "#1a1a1f",
  className = "",
}: {
  platform: string;
  awardLine1: string;
  awardLine2?: string;
  year?: string;
  accent?: string;
  bg?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`grad-${accent.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Background plate */}
      <rect width="180" height="200" rx="12" fill={bg} />

      {/* Inner decorative border */}
      <rect x="8" y="8" width="164" height="184" rx="8" fill="none" stroke={accent} strokeWidth="1" opacity="0.3" />

      {/* Platform name on top - banner ribbon style */}
      <g>
        <rect x="40" y="22" width="100" height="22" rx="11" fill={accent} />
        <text x="90" y="38" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#fff" letterSpacing="0.05em">
          {platform.toUpperCase()}
        </text>
      </g>

      {/* Left laurel branch - detailed leaves */}
      <g fill={`url(#grad-${accent.replace("#", "")})`}>
        <ellipse cx="30" cy="82" rx="5" ry="11" transform="rotate(-35 30 82)" />
        <ellipse cx="26" cy="95" rx="5" ry="11" transform="rotate(-25 26 95)" />
        <ellipse cx="24" cy="108" rx="5" ry="11" transform="rotate(-15 24 108)" />
        <ellipse cx="24" cy="122" rx="5" ry="11" transform="rotate(-5 24 122)" />
        <ellipse cx="26" cy="136" rx="5" ry="11" transform="rotate(10 26 136)" />
        <ellipse cx="32" cy="148" rx="5" ry="11" transform="rotate(25 32 148)" />
        <ellipse cx="42" cy="158" rx="5" ry="11" transform="rotate(45 42 158)" />
        {/* Inner accents */}
        <ellipse cx="38" cy="78" rx="3.5" ry="8" transform="rotate(-50 38 78)" opacity="0.7" />
        <ellipse cx="34" cy="91" rx="3.5" ry="8" transform="rotate(-40 34 91)" opacity="0.7" />
        <ellipse cx="32" cy="105" rx="3.5" ry="8" transform="rotate(-30 32 105)" opacity="0.7" />
      </g>

      {/* Right laurel branch - mirrored */}
      <g fill={`url(#grad-${accent.replace("#", "")})`}>
        <ellipse cx="150" cy="82" rx="5" ry="11" transform="rotate(35 150 82)" />
        <ellipse cx="154" cy="95" rx="5" ry="11" transform="rotate(25 154 95)" />
        <ellipse cx="156" cy="108" rx="5" ry="11" transform="rotate(15 156 108)" />
        <ellipse cx="156" cy="122" rx="5" ry="11" transform="rotate(5 156 122)" />
        <ellipse cx="154" cy="136" rx="5" ry="11" transform="rotate(-10 154 136)" />
        <ellipse cx="148" cy="148" rx="5" ry="11" transform="rotate(-25 148 148)" />
        <ellipse cx="138" cy="158" rx="5" ry="11" transform="rotate(-45 138 158)" />
        <ellipse cx="142" cy="78" rx="3.5" ry="8" transform="rotate(50 142 78)" opacity="0.7" />
        <ellipse cx="146" cy="91" rx="3.5" ry="8" transform="rotate(40 146 91)" opacity="0.7" />
        <ellipse cx="148" cy="105" rx="3.5" ry="8" transform="rotate(30 148 105)" opacity="0.7" />
      </g>

      {/* Center medallion */}
      <circle cx="90" cy="110" r="42" fill="#fff" opacity="0.04" />
      <circle cx="90" cy="110" r="38" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />

      {/* TOP label */}
      <text x="90" y="82" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="9" fontWeight="600" fill={accent} letterSpacing="0.15em">
        TOP
      </text>

      {/* Award text */}
      <text x="90" y="105" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#fff" letterSpacing="0.02em">
        <tspan x="90" dy="0">{awardLine1}</tspan>
        {awardLine2 && <tspan x="90" dy="14">{awardLine2}</tspan>}
      </text>

      {/* Year badge */}
      <rect x="60" y={awardLine2 ? "128" : "118"} width="60" height="20" rx="10" fill={accent} />
      <text x="90" y={awardLine2 ? "142" : "132"} textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="10" fontWeight="700" fill="#fff" letterSpacing="0.05em">
        {year}
      </text>

      {/* Decorative star at bottom */}
      <g transform="translate(90, 178)">
        <path d="M 0,-6 L 1.8,-1.8 L 6,-1.8 L 2.6,1 L 4,5.5 L 0,3 L -4,5.5 L -2.6,1 L -6,-1.8 L -1.8,-1.8 Z" fill={accent} />
      </g>
    </svg>
  );
}

export const BadgeClutchGlobal = ({ className }: BadgeProps) => (
  <AwardBase platform="Clutch" awardLine1="GLOBAL" awardLine2="WINNER" className={className} accent="#FF3D2E" />
);

export const BadgeClutchSoftware = ({ className }: BadgeProps) => (
  <AwardBase platform="Clutch" awardLine1="SOFTWARE" awardLine2="DEVELOPMENT" className={className} accent="#FF3D2E" />
);

export const BadgeClutchMobile = ({ className }: BadgeProps) => (
  <AwardBase platform="Clutch" awardLine1="MOBILE APP" awardLine2="DEVELOPMENT" className={className} accent="#FF3D2E" />
);

export const BadgeDesignRush = ({ className }: BadgeProps) => (
  <AwardBase platform="DesignRush" awardLine1="APP DESIGN" awardLine2="COMPANY" className={className} accent="#00C896" />
);

export const BadgeFirmstalk = ({ className }: BadgeProps) => (
  <AwardBase platform="Firmstalk" awardLine1="CUSTOM" awardLine2="SOFTWARE" className={className} accent="#A855F7" />
);

export const BadgeTopDevelopers = ({ className }: BadgeProps) => (
  <AwardBase platform="TopDevs" awardLine1="RUBY ON" awardLine2="RAILS" className={className} accent="#F59E0B" />
);
