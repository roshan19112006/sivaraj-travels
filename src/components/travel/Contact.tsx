import { Phone, MessageCircle, Mail } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const heading = useScrollReveal({ delay: 0 });
  const content = useScrollReveal({ delay: 0.1 });

  const allPhones = [BUSINESS.phones.primary, ...BUSINESS.phones.alternate];

  return (
    <section id="contact" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Get in Touch
          </p>
          <h2 className="section-heading">Contact {BUSINESS.name}</h2>
        </div>

        <div
          ref={content.ref}
          {...content.motion}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {/* Phone */}
          <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-navy">
              Phone
            </h3>
            <ul className="mt-3 space-y-2">
              {allPhones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:+91${p}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-navy">
              WhatsApp
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {BUSINESS.phones.primary}
            </p>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-navy">
              Email
            </h3>
            <a
              href={BUSINESS.emailLink}
              className="mt-3 block text-sm break-all text-muted-foreground transition-colors hover:text-gold"
            >
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
