import { Car, Check, MessageCircle } from "lucide-react";
import { BUSINESS, VEHICLES } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Vehicles() {
  const heading = useScrollReveal({ delay: 0 });

  return (
    <section id="vehicles" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Fleet
          </p>
          <h2 className="section-heading">Our Vehicles</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Choose the right vehicle for your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((v, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.1 });
              const whatsappUrl = `${BUSINESS.whatsappLink}?text=${encodeURIComponent(v.enquiryMessage)}`;
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="group flex flex-col rounded-2xl border border-border/50 bg-white shadow-sm transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 border-b border-border/50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all group-hover:bg-gold group-hover:text-white">
                      <Car className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy">
                      {v.name}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-muted-foreground">
                      {v.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {v.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                          <span className="text-navy/80">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-white shadow-md shadow-gold/15 transition-all hover:bg-gold-light hover:shadow-gold/25"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire Now
                    </a>
                  </div>
                </div>
              );
            };
            return <Card key={v.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
