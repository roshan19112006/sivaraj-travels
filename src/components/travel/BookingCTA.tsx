import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BookingCTA() {
  const reveal = useScrollReveal({ delay: 0 });

  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div ref={reveal.ref} {...reveal.motion}>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready for Your Next Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Contact {BUSINESS.name} today and plan your comfortable journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-gold/25 transition-all hover:bg-gold-light hover:shadow-gold/35 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.callLink}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:text-base"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
