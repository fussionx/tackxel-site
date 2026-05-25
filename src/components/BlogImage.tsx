import Image from "next/image";

// Blog post image: fills its parent (set the aspect on the wrapper), with a
// subtle brand gradient overlay so photos read on-palette. Fade-in is handled
// by the surrounding <Reveal> on each surface.
export default function BlogImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/25 via-brand-500/5 to-orange-200/10 mix-blend-multiply pointer-events-none" />
    </div>
  );
}
