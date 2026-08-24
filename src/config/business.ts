// ============================================================
// Sivaraj Travels — Business Configuration
// Edit this file to update phone numbers, email, vehicles, etc.
// ============================================================

export const BUSINESS = {
  name: "Sivaraj Travels",
  owner: "Sivaraj",
  title: "Founder & Travel Service Provider",
  experience: "10+",
  email: "rsivarajt20@gmail.com",

  phones: {
    primary: "9786065325",
    alternate: ["7402094367", "9080617385", "9488603905"],
  },

  /** International-format phone (no + sign, used in wa.me / tel: links) */
  get primaryWa() {
    return `91${this.phones.primary}`;
  },

  whatsappLink: "https://wa.me/919786065325",
  callLink: "tel:+919786065325",
  emailLink: "mailto:rsivarajt20@gmail.com",

  // Replace with your actual Google Maps embed URL later
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900!2d78.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  // Replace with your actual Google Maps directions URL
  googleDirectionsUrl: "https://maps.google.com",
} as const;

export const VEHICLES = [
  {
    id: "5-seater",
    name: "5-Seater Car",
    description:
      "Perfect for small families, couples and comfortable personal travel.",
    features: [
      "5 Seats",
      "Comfortable Interior",
      "Air Conditioning",
      "Suitable for Local & Outstation Travel",
    ],
    enquiryMessage:
      "Hello Sivaraj Travels, I am interested in booking the 5-Seater Car. Please provide the details.",
  },
  {
    id: "7-seater",
    name: "7-Seater Car",
    description:
      "Spacious and comfortable for families and small groups.",
    features: [
      "7 Seats",
      "Spacious Interior",
      "Air Conditioning",
      "Ideal for Family Trips",
    ],
    enquiryMessage:
      "Hello Sivaraj Travels, I am interested in booking the 7-Seater Car. Please provide the details.",
  },
  {
    id: "van",
    name: "Van",
    description:
      "A practical option for group travel, functions and longer journeys.",
    features: [
      "Group Seating",
      "Comfortable Travel",
      "Suitable for Events",
      "Outstation Friendly",
    ],
    enquiryMessage:
      "Hello Sivaraj Travels, I am interested in booking the Van. Please provide the details.",
  },
] as const;

export const SERVICES = [
  {
    title: "Local Travel",
    description:
      "Comfortable transportation for local trips and daily travel.",
    icon: "MapPin" as const,
  },
  {
    title: "Outstation Trips",
    description:
      "Travel comfortably to destinations outside your city.",
    icon: "Route" as const,
  },
  {
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport transportation for individuals and families.",
    icon: "Plane" as const,
  },
  {
    title: "Family Trips",
    description:
      "Comfortable vehicles for family tours and vacations.",
    icon: "Users" as const,
  },
  {
    title: "Function & Event Travel",
    description:
      "Transportation for weddings, functions and special occasions.",
    icon: "CalendarHeart" as const,
  },
  {
    title: "Tour & Sightseeing",
    description:
      "Plan comfortable sightseeing and tour journeys with us.",
    icon: "Camera" as const,
  },
] as const;

export const DESTINATIONS = [
  { name: "Chennai", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop" },
  { name: "Kanchipuram", image: "https://images.unsplash.com/photo-1600112356915-089fba060140?w=600&h=400&fit=crop" },
  { name: "Tiruvannamalai", image: "https://images.unsplash.com/photo-1590050752117-238cb0f3f0b4?w=600&h=400&fit=crop" },
  { name: "Pondicherry", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop" },
  { name: "Tirupati", image: "https://images.unsplash.com/photo-1621427633710-32391e3961c3?w=600&h=400&fit=crop" },
  { name: "Bangalore", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&h=400&fit=crop" },
  { name: "Ooty", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" },
  { name: "Madurai", image: "https://images.unsplash.com/photo-1602086153025-fdac04a8bc99?w=600&h=400&fit=crop" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "10+ Years Experience",
    description: "Years of experience serving customers with reliable travel services.",
    icon: "Award" as const,
  },
  {
    title: "Safe Travel",
    description: "Customer safety is our priority.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Comfortable Vehicles",
    description: "Clean and comfortable vehicles for your journey.",
    icon: "Car" as const,
  },
  {
    title: "Affordable Pricing",
    description: "Reasonable pricing for different travel requirements.",
    icon: "IndianRupee" as const,
  },
  {
    title: "Reliable Service",
    description: "Professional and dependable travel service.",
    icon: "Clock" as const,
  },
  {
    title: "Easy Booking",
    description: "Call or WhatsApp us to enquire and book.",
    icon: "Smartphone" as const,
  },
] as const;

// Replace with real customer review data later
export const TESTIMONIALS = [
  {
    text: "Comfortable journey and good service.",
    author: "Happy Customer",
  },
  {
    text: "The vehicle was clean and the travel experience was smooth.",
    author: "Satisfied Traveller",
  },
  {
    text: "Very convenient for family travel.",
    author: "Regular Customer",
  },
] as const;

// Gallery images — actual fleet and travel photos
// To replace: swap the .jpg files in public/gallery/ with your real photos
export const GALLERY_IMAGES = [
  { src: "/gallery/vehicle-01.jpg", alt: "Hyundai i20 fleet car", category: "Vehicles" },
  { src: "/gallery/vehicle-02.jpg", alt: "Hyundai i20 side profile", category: "Vehicles" },
  { src: "/gallery/vehicle-03.jpg", alt: "Decorated bus interior with colourful seating", category: "Vehicles" },
  { src: "/gallery/vehicle-04.jpg", alt: "Custom-painted travel bus exterior", category: "Vehicles" },
  { src: "/gallery/vehicle-05.jpg", alt: "Travel bus on a scenic hillside road", category: "Journeys" },
  { src: "/gallery/vehicle-06.jpg", alt: "Honda City ready for a night trip", category: "Vehicles" },
  { src: "/gallery/vehicle-07.jpg", alt: "Chevrolet Tavera van for group travel", category: "Vehicles" },
  { src: "/gallery/vehicle-08.jpg", alt: "Toyota Etios on a forest route", category: "Journeys" },
  { src: "/gallery/vehicle-09.jpg", alt: "Decorated maxicab front view", category: "Vehicles" },
  { src: "/gallery/vehicle-10.jpg", alt: "Fleet cars parked together", category: "Vehicles" },
  { src: "/gallery/vehicle-11.jpg", alt: "Maruti Ertiga prepared for a trip", category: "Vehicles" },
] as const;
