import { useState } from "react";
import { X, ImageOff } from "lucide-react";
import { GALLERY_IMAGES } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Gallery() {
  const heading = useScrollReveal({ delay: 0 });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setFailed((prev) => new Set(prev).add(index));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Moments
          </p>
          <h2 className="section-heading">Our Travel Gallery</h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.05 });
              const isFailed = failed.has(i);
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="gallery-item group relative cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setLightbox(i)}
                >
                  {isFailed ? (
                    <div className="flex h-40 flex-col items-center justify-center gap-2 bg-navy/5 sm:h-48">
                      <ImageOff className="h-8 w-8 text-muted-foreground/40" />
                      <span className="text-xs text-muted-foreground/50">Photo coming soon</span>
                    </div>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-40 w-full object-cover sm:h-48"
                      loading="lazy"
                      onError={() => handleError(i)}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover:bg-navy/40">
                    <span className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                      {img.category}
                    </span>
                  </div>
                </div>
              );
            };
            return <Card key={i} />;
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={GALLERY_IMAGES[lightbox].src}
            alt={GALLERY_IMAGES[lightbox].alt}
            className="max-h-[80vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
