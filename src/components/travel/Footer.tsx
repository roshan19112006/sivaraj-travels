import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUp,
} from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/config/business";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const allPhones = [BUSINESS.phones.primary, ...BUSINESS.phones.alternate];

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold text-white">
              SIVARAJ <span className="text-gold">TRAVELS</span>
            </h3>
            <p className="mt-3 text-sm text-white/50">
              Safe • Comfortable • Reliable
            </p>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Book Your Journey
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <ul className="space-y-3">
              {allPhones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:+91${p}`}
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.emailLink}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white/40">
              Get in Touch
            </h4>
            <p className="text-sm leading-relaxed text-white/50">
              Ready for your next journey? Contact us today and we&apos;ll
              arrange a comfortable ride for you.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-emerald-500"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.callLink}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-blue-500"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; 2026 {BUSINESS.name}. All Rights Reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-gold"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
