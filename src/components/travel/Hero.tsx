import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { BUSINESS } from "@/config/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-ebd63fc7d0e3?w=1920&h=1080&fit=crop')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
          >
            <Shield className="h-4 w-4" />
            {BUSINESS.experience} Years of Experience
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Journey,{" "}
            <span className="text-gradient-gold">Our Responsibility</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-xl font-semibold text-gold-light sm:text-2xl"
          >
            Safe, Comfortable &amp; Reliable Travel Services
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Travel with confidence with Sivaraj Travels. We provide comfortable
            vehicles and reliable travel services for local and outstation
            journeys.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-gold/25 transition-all hover:bg-gold-light hover:shadow-gold/35 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Book Your Journey
            </a>
            <a
              href={BUSINESS.callLink}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:text-base"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
