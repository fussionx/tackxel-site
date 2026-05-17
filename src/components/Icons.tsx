// Custom illustrated icons - duotone style with brand accents
// Each icon is a self-contained SVG with two visual layers:
// - Background shape in brand-50/100 (filled)
// - Foreground stroke in brand-600/700
// All icons are 24x24 on a 48x48 viewBox for clarity

type IconProps = {
  className?: string;
};

const baseProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

export const IconCustomSoftware = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="4" y="8" width="40" height="28" rx="3" fill="#D6E1F4" />
    <rect x="4" y="8" width="40" height="6" rx="3" fill="#3159A5" />
    <circle cx="8" cy="11" r="1" fill="#fff" />
    <circle cx="11.5" cy="11" r="1" fill="#fff" />
    <circle cx="15" cy="11" r="1" fill="#fff" />
    <path d="M14 22L10 26L14 30M22 22L26 26L22 30M28 30L20 22" stroke="#264784" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="32" y="22" width="8" height="8" rx="1.5" fill="#3159A5" opacity="0.3" />
    <path d="M34 26h4M34 28h4" stroke="#1D376A" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const IconWebApp = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="4" y="10" width="40" height="28" rx="3" fill="#D6E1F4" />
    <path d="M4 18h40" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="9" cy="14" r="1.2" fill="#3159A5" />
    <circle cx="13" cy="14" r="1.2" fill="#3159A5" />
    <rect x="10" y="22" width="10" height="12" rx="1.5" fill="#3159A5" />
    <rect x="22" y="22" width="16" height="5" rx="1.5" fill="#264784" />
    <rect x="22" y="29" width="16" height="5" rx="1.5" fill="#5278C2" />
  </svg>
);

export const IconMobileApp = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="14" y="4" width="20" height="40" rx="3.5" fill="#D6E1F4" />
    <rect x="14" y="4" width="20" height="40" rx="3.5" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M22 7h4" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="17" y="12" width="14" height="22" rx="1.5" fill="#3159A5" opacity="0.25" />
    <rect x="19" y="15" width="10" height="2" rx="0.5" fill="#1D376A" />
    <rect x="19" y="19" width="7" height="2" rx="0.5" fill="#264784" />
    <circle cx="24" cy="39" r="1.5" stroke="#3159A5" strokeWidth="1.2" />
    <path d="M19 26h10M19 29h6" stroke="#264784" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const IconDevOps = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="18" fill="#D6E1F4" />
    <path d="M14 24a10 10 0 0 1 16-7.5" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 24a10 10 0 0 1-16 7.5" stroke="#264784" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 14l2 2.5L27.5 18" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 34l-2-2.5L20.5 30" stroke="#264784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3.5" fill="#3159A5" />
  </svg>
);

export const IconLegacy = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="6" y="10" width="16" height="28" rx="2" fill="#AEC3E8" />
    <rect x="26" y="10" width="16" height="28" rx="2" fill="#D6E1F4" />
    <rect x="26" y="10" width="16" height="28" rx="2" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M22 24l4-4M22 24l4 4M22 24h4" stroke="#3159A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="14" width="10" height="1.5" rx="0.5" fill="#264784" />
    <rect x="9" y="18" width="7" height="1.5" rx="0.5" fill="#264784" />
    <rect x="29" y="14" width="10" height="1.5" rx="0.5" fill="#3159A5" />
    <rect x="29" y="18" width="10" height="1.5" rx="0.5" fill="#3159A5" />
    <rect x="29" y="22" width="8" height="1.5" rx="0.5" fill="#3159A5" />
  </svg>
);

export const IconQA = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 4l16 6v10c0 10-7 18-16 22-9-4-16-12-16-22V10l16-6z" fill="#D6E1F4" />
    <path d="M24 4l16 6v10c0 10-7 18-16 22-9-4-16-12-16-22V10l16-6z" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M16 22l5 5 11-11" stroke="#3159A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconProductStrategy = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="18" fill="#D6E1F4" />
    <circle cx="24" cy="24" r="13" fill="#fff" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="8" fill="#AEC3E8" />
    <circle cx="24" cy="24" r="3" fill="#3159A5" />
    <path d="M24 24L36 12" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 9l3 3-3 3v-2.5h-3v-1h3V9z" fill="#3159A5" />
  </svg>
);

export const IconDesign = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 4c-11 0-20 8-20 18 0 4 2 6 5 6h3a3 3 0 0 1 3 3 4 4 0 0 0 4 4c3 0 5-2 5-5 0-2 0-3 2-3h2c6 0 16-1 16-12 0-6-9-11-20-11z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="14" cy="20" r="2.5" fill="#3159A5" />
    <circle cx="22" cy="14" r="2.5" fill="#5278C2" />
    <circle cx="32" cy="16" r="2.5" fill="#264784" />
    <circle cx="36" cy="24" r="2.5" fill="#1D376A" />
  </svg>
);

export const IconMVP = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 4c4 4 8 10 8 18 0 6-3 12-8 16-5-4-8-10-8-16 0-8 4-14 8-18z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="3" fill="#3159A5" />
    <path d="M18 32l-4 4M30 32l4 4M16 28c-3 1-5 4-6 8M32 28c3 1 5 4 6 8" stroke="#264784" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 38l-3 4M28 38l3 4" stroke="#3159A5" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconAdvisory = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="6" y="10" width="30" height="22" rx="3" fill="#D6E1F4" />
    <rect x="6" y="10" width="30" height="22" rx="3" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M12 18h18M12 22h12M12 26h15" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="36" cy="34" r="8" fill="#fff" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="36" cy="32" r="2.5" fill="#3159A5" />
    <path d="M30 38c0-3 3-4 6-4s6 1 6 4" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconConsulting = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="18" fill="#D6E1F4" />
    <path d="M24 12v12l8 4" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="2" fill="#3159A5" />
    <circle cx="24" cy="8" r="1.5" fill="#264784" />
    <circle cx="40" cy="24" r="1.5" fill="#264784" />
    <circle cx="24" cy="40" r="1.5" fill="#264784" />
    <circle cx="8" cy="24" r="1.5" fill="#264784" />
  </svg>
);

export const IconAIConsulting = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 6c-8 0-14 5-14 12 0 4 2 7 5 9v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6c3-2 5-5 5-9 0-7-6-12-14-12z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="19" cy="17" r="2" fill="#3159A5" />
    <circle cx="29" cy="17" r="2" fill="#3159A5" />
    <path d="M19 23c1 2 3 3 5 3s4-1 5-3" stroke="#264784" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 39h4" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 43h4" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconAWS = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M10 28c0-6 5-10 10-10 1-5 5-9 10-9 7 0 12 5 12 12 0 1 0 1-1 2 4 1 6 4 6 8 0 5-4 8-9 8H14c-4 0-8-4-8-8 0-2 1-3 4-3z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M18 33l4-6h4l4 6M20 31h8" stroke="#3159A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconIntegration = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="6" y="10" width="14" height="14" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="28" y="24" width="14" height="14" rx="2" fill="#AEC3E8" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M20 17h4a4 4 0 0 1 4 4v6" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="13" cy="17" r="2" fill="#3159A5" />
    <circle cx="35" cy="31" r="2" fill="#3159A5" />
  </svg>
);

export const IconCommerce = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M8 12h4l4 18h22l4-12H14" stroke="#3159A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#D6E1F4" />
    <circle cx="20" cy="38" r="3" fill="#3159A5" />
    <circle cx="34" cy="38" r="3" fill="#3159A5" />
    <path d="M22 22v-4a3 3 0 0 1 6 0v4" stroke="#264784" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconAnalytics = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="4" y="6" width="40" height="36" rx="3" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="10" y="26" width="4" height="10" rx="1" fill="#3159A5" />
    <rect x="17" y="20" width="4" height="16" rx="1" fill="#3159A5" />
    <rect x="24" y="22" width="4" height="14" rx="1" fill="#3159A5" />
    <rect x="31" y="14" width="4" height="22" rx="1" fill="#264784" />
    <path d="M10 16l8-4 6 2 8-6" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconManagedIT = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="6" y="8" width="36" height="10" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="6" y="20" width="36" height="10" rx="2" fill="#AEC3E8" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="6" y="32" width="36" height="10" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="11" cy="13" r="1.5" fill="#3159A5" />
    <circle cx="11" cy="25" r="1.5" fill="#3159A5" />
    <circle cx="11" cy="37" r="1.5" fill="#3159A5" />
    <rect x="16" y="12" width="14" height="2" rx="0.5" fill="#264784" />
    <rect x="16" y="24" width="14" height="2" rx="0.5" fill="#264784" />
    <rect x="16" y="36" width="14" height="2" rx="0.5" fill="#264784" />
  </svg>
);

export const IconAI = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="14" fill="#D6E1F4" />
    <circle cx="24" cy="24" r="14" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M24 12v24M12 24h24M16 16l16 16M32 16L16 32" stroke="#3159A5" strokeWidth="1" opacity="0.5" />
    <circle cx="24" cy="24" r="4" fill="#3159A5" />
    <circle cx="24" cy="12" r="2" fill="#264784" />
    <circle cx="36" cy="24" r="2" fill="#264784" />
    <circle cx="24" cy="36" r="2" fill="#264784" />
    <circle cx="12" cy="24" r="2" fill="#264784" />
  </svg>
);

export const IconGenAI = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M38 32l1.5 4.5L44 38l-4.5 1.5L38 44l-1.5-4.5L32 38l4.5-1.5L38 32z" fill="#3159A5" />
    <path d="M10 36l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#264784" />
  </svg>
);

export const IconAgent = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="10" y="14" width="28" height="22" rx="4" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="18" cy="24" r="2.5" fill="#3159A5" />
    <circle cx="30" cy="24" r="2.5" fill="#3159A5" />
    <path d="M16 30c2 2 5 3 8 3s6-1 8-3" stroke="#264784" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 14V8M20 8h8" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="6" r="2" fill="#264784" />
    <path d="M6 22v6M42 22v6" stroke="#3159A5" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const IconDataScience = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <ellipse cx="24" cy="12" rx="14" ry="5" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M10 12v10c0 3 6 5 14 5s14-2 14-5V12" stroke="#3159A5" strokeWidth="1.5" fill="#AEC3E8" />
    <path d="M10 22v10c0 3 6 5 14 5s14-2 14-5V22" stroke="#3159A5" strokeWidth="1.5" fill="#D6E1F4" />
    <path d="M10 32v4c0 3 6 5 14 5s14-2 14-5v-4" stroke="#3159A5" strokeWidth="1.5" fill="#fff" />
  </svg>
);

export const IconIoT = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="14" y="14" width="20" height="20" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="20" y="20" width="8" height="8" rx="1" fill="#3159A5" />
    <path d="M10 14v-4h4M38 14v-4h-4M10 34v4h4M38 34v4h-4" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="6" cy="6" r="2" fill="#264784" />
    <circle cx="42" cy="6" r="2" fill="#264784" />
    <circle cx="6" cy="42" r="2" fill="#264784" />
    <circle cx="42" cy="42" r="2" fill="#264784" />
  </svg>
);

export const IconBlockchain = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="6" y="6" width="14" height="14" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="28" y="6" width="14" height="14" rx="2" fill="#AEC3E8" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="17" y="28" width="14" height="14" rx="2" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M20 13h8M13 20l3.5 8M35 20l-3.5 8" stroke="#3159A5" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="13" cy="13" r="2" fill="#3159A5" />
    <circle cx="35" cy="13" r="2" fill="#3159A5" />
    <circle cx="24" cy="35" r="2" fill="#3159A5" />
  </svg>
);

// Engagement model icons
export const IconStartup = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M24 4c8 4 12 12 12 20 0 4-1 8-3 10h-6l-3 4-3-4h-6c-2-2-3-6-3-10 0-8 4-16 12-20z" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="3.5" fill="#3159A5" />
    <path d="M18 38l-4 4-2-6M30 38l4 4 2-6" stroke="#264784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconScaleup = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <rect x="4" y="30" width="10" height="14" rx="1" fill="#AEC3E8" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="17" y="20" width="14" height="24" rx="1" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="34" y="10" width="10" height="34" rx="1" fill="#3159A5" />
    <path d="M6 18l8-6 8 4 14-10" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 6h6v6" stroke="#3159A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconEnterprise = ({ className = "w-12 h-12" }: IconProps) => (
  <svg {...baseProps} className={className}>
    <path d="M6 44V18l10-6 10 6v26" fill="#D6E1F4" stroke="#3159A5" strokeWidth="1.5" />
    <path d="M26 44V24h16v20" fill="#AEC3E8" stroke="#3159A5" strokeWidth="1.5" />
    <rect x="10" y="22" width="3" height="4" fill="#3159A5" />
    <rect x="19" y="22" width="3" height="4" fill="#3159A5" />
    <rect x="10" y="30" width="3" height="4" fill="#3159A5" />
    <rect x="19" y="30" width="3" height="4" fill="#3159A5" />
    <rect x="30" y="28" width="3" height="4" fill="#3159A5" />
    <rect x="35" y="28" width="3" height="4" fill="#3159A5" />
    <rect x="30" y="34" width="3" height="4" fill="#3159A5" />
    <rect x="35" y="34" width="3" height="4" fill="#3159A5" />
  </svg>
);
