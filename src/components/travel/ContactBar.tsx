import { Phone, MessageCircle, Mail } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    value: BUSINESS.phones.primary,
    href: BUSINESS.callLink,
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: BUSINESS.phones.primary,
    href: BUSINESS.whatsappLink,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: BUSINESS.emailLink,
    color: "bg-amber-50 text-amber-600",
  },
] as const;

export default function ContactBar() {
  const reveal = useScrollReveal({ delay: 0.1 });

  return (
    <section className="relative -mt-10 z-20 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={reveal.ref}
          {...reveal.motion}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="card-shine group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:shadow-navy/10"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform group-hover:scale-110`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
                <p className="truncate text-sm font-bold text-navy">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
