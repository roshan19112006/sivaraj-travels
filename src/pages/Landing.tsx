import Navbar from "@/components/travel/Navbar";
import Hero from "@/components/travel/Hero";
import ContactBar from "@/components/travel/ContactBar";
import About from "@/components/travel/About";
import Services from "@/components/travel/Services";
import Vehicles from "@/components/travel/Vehicles";
import WhyChooseUs from "@/components/travel/WhyChooseUs";
import Gallery from "@/components/travel/Gallery";
import Owner from "@/components/travel/Owner";
import Testimonials from "@/components/travel/Testimonials";
import BookingCTA from "@/components/travel/BookingCTA";
import Contact from "@/components/travel/Contact";
import WhatsAppButton from "@/components/travel/WhatsAppButton";
import Footer from "@/components/travel/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactBar />
      <About />
      <Services />
      <Vehicles />
      <WhyChooseUs />
      <Gallery />
      <Owner />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
