/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF3FB", 100: "#D6E1F4", 200: "#AEC3E8", 300: "#7E9DD7",
          400: "#5278C2", 500: "#3159A5", 600: "#264784", 700: "#1D376A",
          800: "#162954", 900: "#0F1D3D", 950: "#080F22",
        },
        neutral: {
          50: "#FAFAFA", 100: "#F4F4F5", 200: "#E4E4E7", 300: "#D4D4D8",
          400: "#A1A1AA", 500: "#71717A", 600: "#52525B", 700: "#3F3F46",
          800: "#27272A", 900: "#18181B", 950: "#09090B",
        },
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "-apple-system", "sans-serif"],
        display: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "display": "-0.02em",
        "display-tight": "-0.028em",
      },
      fontSize: {
        "eyebrow": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" }],
        "h3": ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.018em", fontWeight: "600" }],
        "h2": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "600" }],
        "h2-lg": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.028em", fontWeight: "600" }],
        "h1": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "600" }],
        "h1-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "600" }],
      },
      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(9, 9, 11, 0.04)",
        "card": "0 1px 3px 0 rgba(9, 9, 11, 0.06), 0 1px 2px -1px rgba(9, 9, 11, 0.06)",
        "elevated": "0 4px 12px -2px rgba(9, 9, 11, 0.08), 0 2px 4px -2px rgba(9, 9, 11, 0.04)",
        "card-dark": "0 4px 20px -4px rgba(0, 0, 0, 0.5)",
        "brand-glow": "0 10px 40px -10px rgba(49, 89, 165, 0.5)",
      },
    },
  },
  plugins: [],
};
