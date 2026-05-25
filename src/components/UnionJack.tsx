import type { SVGProps } from "react";

/**
 * Union Jack (Flag of the United Kingdom) — accurate, scalable SVG.
 * Standard 2:1 construction with the counterchanged St Patrick's saltire.
 */
export default function UnionJack({
  title = "Flag of the United Kingdom",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="uj-frame">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uj-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uj-frame)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#uj-diag)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
