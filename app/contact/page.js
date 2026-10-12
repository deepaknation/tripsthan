import Parallax from "@/components/Parallax";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import ContactFaq from "@/components/ContactFaq";
import { Phone, MapPin, Plane, ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import { C, tel, wa, CONTACT_FAQS } from "@/lib/data";

export const metadata = {
  title: "Contact TripSthan | Plan Your India Tour or Car Hire",
  description:
    "Contact TripSthan to plan a private India tour or hire a car with driver. Call or WhatsApp +91 7982625081. Based in Agra, serving all of India.",
  keywords: [
    "Contact TripSthan",
    "Plan Your India Tour",
    "hire car with driver India",
    "private India tour enquiry",
    "Agra tour planner",
    "Golden Triangle tour enquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact TripSthan | Plan Your India Tour or Car Hire",
    description:
      "Contact TripSthan to plan a private India tour or hire a car with driver. Call or WhatsApp +91 7982625081. Based in Agra, serving all of India.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CONTACT_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "TripSthan",
    url: "https://tripsthan.com",
    logo: "https://tripsthan.com/logo.png",
    telephone: ["+91 7982625081", "+91 9953458949"],
    email: "info@tripsthan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "226, Maidangarhi",
      addressLocality: "New Delhi",
      postalCode: "110068",
      addressCountry: "IN",
    },
    areaServed: ["Delhi", "Agra", "Jaipur", "Rajasthan", "Himachal", "Varanasi", "Uttarakhand"],
    description:
      "Private India tours and car hire with professional drivers. Customized day-by-day itineraries and transparent pricing.",
  };

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />

      {/* HERO SECTION WITH H1 */}
      <Parallax
        img="/private-india-tours-taj-mahal-agra.webp"
        priority
        h="min-h-[46vh] sm:min-h-[52vh]"
      >
        <div className="mx-auto max-w-4xl text-center px-4">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/25 mb-3.5 shadow-sm">
            TripSthan Travel Concierge &bull; 24/7 Roadside Assistance
          </span>
          {/* H1 TAG */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Contact TripSthan: Plan Your Private India Tour
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/95 leading-relaxed drop-shadow font-medium">
            Handcrafted day-by-day itineraries, transparent pricing, and private chauffeured cars across North India.
          </p>
        </div>
      </Parallax>

      {/* SUB-HEADING & INTRO SECTION */}
      <section className="border-b border-[#EAE0D2] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-block rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-3">
            Personalized Tour Planning
          </span>
          {/* SUB-HEADING - H2 TAG */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight">
            Let’s talk about your next trip
          </h2>
          {/* INTRO */}
          <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Tell us where you want to go, how many days you have and how many people are travelling. We will send you a day-by-day plan and a clear price. You can also call or message us directly to hire a car with driver.
          </p>

          {/* Quick Contact & Action Ribbons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-5 py-2.5 font-bold text-white shadow-md transition-all active:scale-95"
            >
              <span>Fill Enquiry Form</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-5 py-2.5 font-bold text-white shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={tel(C.phones[0])}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 font-bold text-ink shadow-sm transition-all"
            >
              <Phone className="h-4 w-4 text-saffron" />
              <span>Call +91 7982625081</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTACT SECTION */}
      <section id="enquiry-section" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: THE ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* RIGHT COLUMN: GET IN TOUCH DETAILS */}
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-[#EAE0D2] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-3">
              Clear &amp; Transparent Answers
            </span>
            {/* FAQ HEADING - H2 TAG */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Before You Write to Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Quick answers to common questions about trip planning, private car hire, and airport pickups.
            </p>
          </div>

          <ContactFaq />
        </div>
      </section>

      {/* OPERATIONS HUBS & LOCATION MAP SECTION */}
      <section className="border-t border-[#EAE0D2] bg-[#FAF7F2] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-3">
              Delhi NCR Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Our Operations Office &amp; Airport Pickup Hub
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              Centrally based in New Delhi for seamless driver dispatch across Delhi NCR, Agra, Jaipur, and Rajasthan highways.
            </p>
          </div>

          {/* Hub Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-[#EAE0D2] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                  <MapPin className="h-5 w-5 stroke-2" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Main Office
                  </span>
                  <h3 className="text-lg font-bold text-ink mt-0.5">
                    226, Maidangarhi, New Delhi 110068
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Fleet maintenance, driver briefing, and customized tour scheduling base.
                  </p>
                  <a
                    href="https://www.google.com/maps?q=226+Maidangarhi+New+Delhi+110068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#7A2318] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#EAE0D2] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                  <Plane className="h-5 w-5 stroke-2" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Airport Desk
                  </span>
                  <h3 className="text-lg font-bold text-ink mt-0.5">
                    Delhi NCR Airport Pickup Hub
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Dedicated chauffeur meeting point at IGI Airport (T1, T2 &amp; T3) with flight arrival tracking.
                  </p>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#7A2318] hover:underline"
                  >
                    <span>Coordinate Airport Pickup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-3xl border border-[#EAE0D2] bg-white overflow-hidden shadow-lg">
            <iframe
              title="TripSthan Delhi Operations Map"
              loading="lazy"
              className="h-80 w-full border-0 md:h-[24rem]"
              src="https://www.google.com/maps?q=Maidangarhi,New+Delhi,India&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
