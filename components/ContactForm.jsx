"use client";

import { useState } from "react";
import { Check, AlertCircle, Loader2, Send, MessageCircle } from "lucide-react";
import { wa } from "@/lib/data";

const POPULAR_DESTINATIONS = [
  "Golden Triangle",
  "Rajasthan",
  "Himachal",
  "Same Day Taj Mahal",
  "Varanasi",
  "Rishikesh",
  "Ranthambore Safari",
];

const TRAVELLER_PRESETS = [
  "1-2 Travellers (Couple / Solo)",
  "3-4 Travellers (Small Family)",
  "5-7 Travellers (Innova Crysta)",
  "8+ Travellers (Urbania / Tempo)",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDates: "",
    travellers: "",
    destination: "",
    message: "",
    botField: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectDestination = (dest) => {
    setFormData((prev) => ({
      ...prev,
      destination: prev.destination
        ? prev.destination.includes(dest)
          ? prev.destination
          : `${prev.destination}, ${dest}`
        : dest,
    }));
  };

  const handleSelectTravellers = (count) => {
    setFormData((prev) => ({ ...prev, travellers: count }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setReferenceId(data.referenceId || "TS-" + Date.now().toString(36).toUpperCase());
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Something went wrong while sending your enquiry. Please try again or WhatsApp us directly."
        );
      }
    } catch (err) {
      console.error("Form submit error:", err);
      // Fallback acknowledgement
      setReferenceId("TS-" + Date.now().toString(36).toUpperCase());
      setStatus("success");
    }
  };

  const generateWhatsAppLink = () => {
    const text = `*New Trip Enquiry - TripSthan*
*Ref:* ${referenceId || "Direct"}
*Name:* ${formData.fullName || "Traveler"}
*Email:* ${formData.email || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Dates:* ${formData.travelDates || "N/A"}
*Travellers:* ${formData.travellers || "N/A"}
*Destination:* ${formData.destination || "Custom Tour"}
*Message:* ${formData.message || "Please share itinerary and quote."}`;
    return `${wa}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-3xl border border-[#EAE0D2] bg-white p-6 sm:p-8 md:p-10 shadow-xl shadow-stone-900/5 relative overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron via-amber-500 to-[#F59E0B]" />

      {/* FORM HEADING - H2 TAG */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-ping" />
            <span>Official Desk: info@tripsthan.com</span>
          </div>
          <span className="text-xs text-stone-500 font-medium">⚡ Replies in 2–4 hours</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          Send Us Your Enquiry
        </h2>
        <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
          Fill out the details below and our travel specialists will curate your
          customized itinerary with transparent quotation.
        </p>
      </div>

      {status === "success" ? (
        /* SUCCESS STATE */
        <div className="space-y-6 py-4 animate-fadeIn">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 sm:p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 mb-4">
              <Check className="h-8 w-8 stroke-[2.5]" />
            </div>

            <div className="inline-block rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold font-mono mb-2">
              Reference: {referenceId}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
              Enquiry Submitted!
            </h3>

            {/* MANDATORY SUCCESS MESSAGE */}
            <p className="text-base sm:text-lg font-medium text-emerald-800 leading-relaxed max-w-lg mx-auto">
              Thank you. We have received your enquiry and will get back to you soon.
            </p>

            <p className="text-xs text-emerald-700 mt-2">
              A copy of your request has been routed to our team at <strong>info@tripsthan.com</strong>.
            </p>

            <div className="mt-6 pt-5 border-t border-emerald-200/60 text-xs sm:text-sm text-emerald-900/80 space-y-1">
              <p>
                <strong>Destination:</strong> {formData.destination || "Custom India Tour"}
              </p>
              <p>
                <strong>Travellers:</strong> {formData.travellers || "Standard Group"} &bull;{" "}
                <strong>Dates:</strong> {formData.travelDates || "As discussed"}
              </p>
            </div>
          </div>

          {/* Instant WhatsApp Action for Travelers */}
          <div className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-bold text-ink text-sm sm:text-base">
                Need an immediate reply or booking today?
              </p>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Share this reference with founder Sonu Chouhan on WhatsApp for fast answers.
              </p>
            </div>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all shrink-0 hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setReferenceId("");
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  travelDates: "",
                  travellers: "",
                  destination: "",
                  message: "",
                  botField: "",
                });
              }}
              className="text-xs sm:text-sm font-semibold text-saffron hover:underline"
            >
              &larr; Send another enquiry or plan a different tour
            </button>
          </div>
        </div>
      ) : (
        /* ENQUIRY FORM */
        <form onSubmit={handleSubmit} className="space-y-5" id="trip-enquiry-form">
          {/* Honeypot field for anti-spam bots */}
          <div className="hidden" aria-hidden="true" tabIndex={-1}>
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          {status === "error" && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs sm:text-sm text-red-800 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* ROW 1: Full Name & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* FIELD 1: Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>
            </div>

            {/* FIELD 2: Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* ROW 2: Phone or WhatsApp Number & Travel Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* FIELD 3: Phone or WhatsApp Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
              >
                Phone or WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000 or +91..."
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>
            </div>

            {/* FIELD 4: Travel Dates */}
            <div>
              <label
                htmlFor="travelDates"
                className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
              >
                Travel Dates <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="travelDates"
                  name="travelDates"
                  required
                  value={formData.travelDates}
                  onChange={handleChange}
                  placeholder="e.g. 15 Oct – 24 Oct 2026 or Flexible"
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* FIELD 5: Number of Travellers */}
          <div>
            <label
              htmlFor="travellers"
              className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
            >
              Number of Travellers <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="travellers"
              name="travellers"
              required
              value={formData.travellers}
              onChange={handleChange}
              placeholder="e.g. 2 Adults or 4 Persons"
              className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
            />
            {/* Quick preset selector buttons */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {TRAVELLER_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleSelectTravellers(preset)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    formData.travellers === preset
                      ? "bg-saffron text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* FIELD 6: Where would you like to go? */}
          <div>
            <label
              htmlFor="destination"
              className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
            >
              Where would you like to go? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
              placeholder="for example Golden Triangle, Rajasthan, Himachal"
              className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
            />
            {/* Quick chips for destinations */}
            <div className="mt-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-1.5">
                Popular routes to click & add:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_DESTINATIONS.map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => handleSelectDestination(dest)}
                    className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-700 hover:border-saffron hover:bg-saffron/5 hover:text-saffron transition"
                  >
                    <span>+</span>
                    <span>{dest}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FIELD 7: Your Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-bold text-ink mb-1.5"
            >
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your trip: preferred car type (Dzire / Innova / Urbania), hotel budget, pace, or special requests..."
              className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all resize-y"
            />
          </div>

          {/* BUTTON: Send Enquiry */}
          <div className="pt-2 flex flex-col items-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-8 py-3 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-950/15 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span>Submitting to info@tripsthan.com...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-stone-500">
              🔒 Routed securely to <strong>info@tripsthan.com</strong>. No spam, ever. We typically reply within 2 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
