"use client";

import { useState } from "react";
import Link from "next/link";
import { Printer, ArrowRight, ChevronDown } from "lucide-react";

export default function TermsInteractive() {
  const [activeFaq, setActiveFaq] = useState(null);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const termsFaqs = [
    {
      q: "How is my booking advance calculated?",
      a: "The advance payment is mutually agreed at the time of initial itinerary planning, depending on the hotels selected, travel season, and transport requirements. Typically, an advance deposit of 25% to 50% secures all vehicle allocations, chauffeur bookings, and room holds.",
    },
    {
      q: "Who bears international currency conversion fees?",
      a: "As stated in our terms, all bank charges, intermediary wire fees, payment gateway service charges (such as PayPal or Wise), and currency conversion differentials are the responsibility of the customer. Quotes are provided in agreed currency net to TripSthan.",
    },
    {
      q: "Can I make changes to my route or hotel stops during the tour?",
      a: "Yes! Since all our tours are 100% private, we offer exceptional on-the-road flexibility. Route modifications, meal stops, and sightseeing pacing can be adjusted with your chauffeur. If changes involve additional mileage or higher-tier hotel upgrades, any price difference will be communicated transparently.",
    },
    {
      q: "What happens if a monument is closed on our scheduled visit day?",
      a: "Certain monuments have fixed weekly closure days (for instance, the Taj Mahal is closed every Friday for prayers). Our tour planners design itineraries around these schedules. If unexpected government closures occur, our chauffeur and local guides will seamlessly swap days or substitute an equivalent historical landmark.",
    },
    {
      q: "Are toll taxes, state border fees, and fuel included in car hire?",
      a: "Yes. Every TripSthan private cab booking includes fuel, state border entry taxes, expressway tolls, driver allowances, and parking charges. There are zero hidden fees on the road.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Quick Jump Navigation */}
      <nav
        aria-label="Terms Sections Navigation"
        className="rounded-2xl bg-white p-2.5 sm:p-3 border border-[#EAE0D2] shadow-sm flex flex-wrap items-center justify-between gap-2"
      >
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <a
            href="#booking-and-advance"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            💳 Payments & Advance
          </a>
          <a
            href="#cancellation-terms"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            📉 Cancellation Policy
          </a>
          <a
            href="#itinerary-changes"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🔄 Changes & Flexibility
          </a>
          <a
            href="#customer-responsibilities"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🧳 Guest Responsibilities
          </a>
          <a
            href="#vehicle-chauffeur-rules"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🚗 Chauffeur & Vehicle
          </a>
          <a
            href="#liability-force-majeure"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            ⚖️ Liability & Law
          </a>
        </div>

        <button
          onClick={handlePrint}
          type="button"
          aria-label="Print Terms and Conditions"
          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700 transition"
        >
          <Printer className="w-3.5 h-3.5 text-stone-600" />
          <span>Print / Save PDF</span>
        </button>
      </nav>

      {/* Cross-Link Callout to Refund Policy */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/80 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="inline-block rounded-full bg-amber-100 text-amber-900 border border-amber-300 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Important Notice
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-ink">
            Looking for Cancellation Charges & Timelines?
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 max-w-2xl leading-relaxed">
            All cancellations must be sent in writing by email to Tripsthan@gmail.com. Please consult our dedicated policy page for the full 60+, 30–59, 15–29, and &lt;15 day deduction schedule.
          </p>
        </div>
        <Link
          href="/refund-and-cancellation"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow hover:shadow-md transition active:scale-95"
        >
          <span>View Refund Policy</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Terms & Conditions FAQ Accordion */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <span className="inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-2">
            Clarifications
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink">
            Frequently Asked Booking Questions
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Common questions regarding advance deposits, banking fees, chauffeur terms, and liability.
          </p>
        </div>

        <div className="space-y-3">
          {termsFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-stone-200 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-stone-50 transition gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-ink">
                    {faq.q}
                  </span>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-stone-100 text-stone-600 transition-colors duration-200 ${isOpen ? "bg-saffron text-white" : ""}`}>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-700 bg-stone-50/50 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
