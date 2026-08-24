import { MapPin } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Location() {
  const reveal = useScrollReveal({ delay: 0 });

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={reveal.ref} {...reveal.motion}>
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Find Us
            </p>
            <h2 className="section-heading">Our Location</h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                src={BUSINESS.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sivaraj Travels Location"
              />
            </div>
            <div className="flex items-center justify-center border-t border-border/50 p-5">
              <a
                href={BUSINESS.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-light"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
