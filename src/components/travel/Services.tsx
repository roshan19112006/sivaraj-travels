import {
  MapPin,
  Route,
  Plane,
  Users,
  CalendarHeart,
  Camera,
} from "lucide-react";
import { SERVICES } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap = {
  MapPin,
  Route,
  Plane,
  Users,
  CalendarHeart,
  Camera,
} as const;

export default function Services() {
  const heading = useScrollReveal({ delay: 0 });

  return (
    <section id="services" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            What We Offer
          </p>
          <h2 className="section-heading">Our Travel Services</h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.08 });
              const Icon = iconMap[service.icon];
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="card-shine group rounded-2xl border border-border/50 bg-white p-7 shadow-sm transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            };
            return <Card key={service.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
