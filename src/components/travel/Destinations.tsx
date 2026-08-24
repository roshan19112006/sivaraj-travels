import { MapPin, MessageCircle } from "lucide-react";
import { BUSINESS, DESTINATIONS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Destinations() {
  const heading = useScrollReveal({ delay: 0 });

  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Explore
          </p>
          <h2 className="section-heading">Travel With Us</h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {DESTINATIONS.map((dest, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.06 });
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 text-white">
                      <MapPin className="h-4 w-4 text-gold" />
                      <span className="font-heading text-sm font-bold sm:text-base">
                        {dest.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            };
            return <Card key={dest.name} />;
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30"
          >
            <MessageCircle className="h-5 w-5" />
            Plan Your Trip
          </a>
        </div>
      </div>
    </section>
  );
}
