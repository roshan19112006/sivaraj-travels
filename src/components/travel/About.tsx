import { Award, Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Award,
    title: "Experienced",
    desc: `${BUSINESS.experience} Years of Travel Experience`,
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Sparkles,
    title: "Comfortable",
    desc: "Clean & Comfortable Vehicles",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Safe and On-Time Travel",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function About() {
  const heading = useScrollReveal({ delay: 0 });
  const content = useScrollReveal({ delay: 0.1 });
  const cards = useScrollReveal({ delay: 0.2 });

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div ref={heading.ref} {...heading.motion} className="mb-12 text-center">
          <img
            src="/sivaraj-logo.png"
            alt="Sivaraj Travels Logo"
            className="mx-auto h-56 w-auto sm:h-64 md:h-72"
            decoding="async"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/about.jpg"
                alt="Sivaraj Travels vehicle"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-gold px-6 py-4 text-center shadow-xl shadow-gold/20 sm:-right-5">
              <p className="text-3xl font-bold text-white leading-none">
                {BUSINESS.experience}
              </p>
              <p className="mt-1 text-xs font-medium text-white/80">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div ref={content.ref} {...content.motion}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
                About Us
              </p>
              <h2 className="section-heading">
                About {BUSINESS.name}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {BUSINESS.name} provides reliable and comfortable travel
                services for individuals, families, functions and outstation
                journeys. With {BUSINESS.experience} years of experience, our
                focus is on safety, comfort, punctuality and customer
                satisfaction.
              </p>
            </div>

            <div
              ref={cards.ref}
              {...cards.motion}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border/60 bg-white p-5 shadow-sm"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${f.color}`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
