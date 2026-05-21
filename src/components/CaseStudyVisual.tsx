// Designed gradient placeholder for a case study, in the homepage visual
// language. Fills its parent (set width/height/aspect on the wrapper).
// Swap for a real screenshot later by replacing the consumer with <Image />.

type Props = {
  monogram: string;
  accent: string; // bg-gradient-to-br from/via/to classes
  name?: string;
  className?: string;
};

export default function CaseStudyVisual({ monogram, accent, name, className = "" }: Props) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-50 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute inset-0 grid-bg-light opacity-50" />

      {/* window chrome — signals "product screenshot goes here" */}
      <div className="absolute top-0 left-0 flex items-center gap-1.5 px-4 py-3.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center p-6">
        <div className="flex aspect-square w-[28%] max-w-[110px] min-w-[56px] items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-subtle backdrop-blur">
          <span className="font-display font-bold text-neutral-900 tracking-display text-[clamp(1.25rem,4vw,2.25rem)]">
            {monogram}
          </span>
        </div>
        {name && (
          <div className="mt-4 font-display font-semibold text-neutral-900 text-[clamp(0.9rem,2.2vw,1.25rem)]">
            {name}
          </div>
        )}
        <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600/80">
          Preview coming soon
        </div>
      </div>
    </div>
  );
}
