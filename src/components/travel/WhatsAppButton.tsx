import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
