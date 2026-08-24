import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Owner() {
  const reveal = useScrollReveal({ delay: 0 });

  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={reveal.ref}
          {...reveal.motion}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy text-3xl font-bold text-white shadow-xl">
            {BUSINESS.owner.charAt(0)}
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              Meet {BUSINESS.owner}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {BUSINESS.title}
            </p>
            <p className="mt-1 text-sm font-semibold text-gold">
              {BUSINESS.experience} Years of Experience
            </p>
          </div>

          <p className="max-w-xl text-sm text-muted-foreground">
            Dedicated to providing safe, comfortable and reliable travel services.
            Your satisfaction and safety are our top priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
