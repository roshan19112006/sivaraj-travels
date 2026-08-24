import {
  Award,
  ShieldCheck,
  Car,
  IndianRupee,
  Clock,
  Smartphone,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap = {
  Award,
  ShieldCheck,
  Car,
  IndianRupee,
  Clock,
  Smartphone,
} as const;

export default function WhyChooseUs() {
  const heading = useScrollReveal({ delay: 0 });

  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Why Us
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Why Choose Sivaraj Travels?
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Card = () => {
              const r = useScrollReveal({ delay: i * 0.08 });
              const Icon = iconMap[item.icon];
              return (
                <div
                  ref={r.ref}
                  {...r.motion}
                  className="card-shine group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold/20 hover:bg-white/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              );
            };
            return <Card key={item.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
