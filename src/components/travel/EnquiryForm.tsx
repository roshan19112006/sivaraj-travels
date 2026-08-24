import { useState } from "react";
import { Send } from "lucide-react";
import { BUSINESS, VEHICLES } from "@/config/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormData = {
  name: string;
  phone: string;
  date: string;
  pickup: string;
  destination: string;
  vehicle: string;
  passengers: string;
  message: string;
};

const initial: FormData = {
  name: "",
  phone: "",
  date: "",
  pickup: "",
  destination: "",
  vehicle: "",
  passengers: "",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initial);
  const heading = useScrollReveal({ delay: 0 });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ${BUSINESS.name},

I would like to enquire about a trip.

Name: ${form.name}
Phone: ${form.phone}
Travel Date: ${form.date}
Pickup: ${form.pickup}
Destination: ${form.destination}
Vehicle: ${form.vehicle}
Passengers: ${form.passengers}
Message: ${form.message}

Please provide the details.`;

    window.open(
      `${BUSINESS.whatsappLink}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const inputClass =
    "w-full rounded-xl border border-border/60 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={heading.ref} {...heading.motion} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Enquiry
          </p>
          <h2 className="section-heading">Send Your Enquiry</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className={inputClass}
              />
            </div>
            {/* Date */}
            <div>
              <label className={labelClass}>Travel Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            {/* Passengers */}
            <div>
              <label className={labelClass}>Number of Passengers</label>
              <input
                type="number"
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                placeholder="e.g. 4"
                min="1"
                className={inputClass}
              />
            </div>
            {/* Pickup */}
            <div>
              <label className={labelClass}>Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Pickup location"
                className={inputClass}
              />
            </div>
            {/* Destination */}
            <div>
              <label className={labelClass}>Destination</label>
              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Destination"
                className={inputClass}
              />
            </div>
            {/* Vehicle */}
            <div className="sm:col-span-2">
              <label className={labelClass}>Vehicle Required</label>
              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a vehicle</option>
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Message */}
            <div className="sm:col-span-2">
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any additional details"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30 sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
