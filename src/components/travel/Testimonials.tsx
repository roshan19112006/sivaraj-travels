import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonials() {
  const heading = useScrollReveal({ delay: 0 });

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Reviews
          </p>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.1 });
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="relative rounded-2xl border border-border/50 bg-white p-7 shadow-sm"
                >
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/20" />
                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-medium text-navy/60">
                    — {t.author}
                  </p>
                </div>
              );
            };
            return <Card key={i} />;
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          Sample reviews for layout purposes. Replace with genuine customer feedback.
        </p>
      </div>
    </section>
  );
}
