// Designed gradient placeholder for a blog post, in the homepage visual
// language. Fills its parent. Swap for a real image by setting `image` in a
// post's frontmatter.

export default function BlogVisual({
  accent,
  category,
  className = "",
}: {
  accent: string;
  category: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-50 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute inset-0 grid-bg-light opacity-50" />
      <div className="relative flex h-full w-full items-center justify-center">
        <span className="font-display text-2xl font-bold tracking-display text-neutral-900/70">{category}</span>
      </div>
    </div>
  );
}
