"use client";

import { useState } from "react";
import { GlowingBulbIcon } from "@/components/PolicyAnimatedIcons";
import { Mail, BarChart3, FileText, RefreshCw, Phone, Printer, Check, Copy, ChevronDown } from "lucide-react";

const TIERS = [
  {
    id: "tier-60",
    daysRange: "60 days or more",
    subtext: "2+ Months before arrival",
    chargeText: "25% of Advance Payment",
    chargePercentage: 25,
    basis: "Advance payment received",
    refundPercentage: 75,
    refundText: "75% of advance payment refunded",
    statusBadge: "Highest Refund",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    accentBorder: "border-emerald-500",
    bgHighlight: "bg-emerald-50/60",
    icon: "shield-check",
    note: "25% of the advance payment received is kept as the cancellation fee. The remaining advance is returned (minus applicable gateway/bank charges).",
    recommendation: "Early planning offers the most flexibility. We recommend notifying us promptly to maximize your return.",
  },
  {
    id: "tier-30-59",
    daysRange: "30 to 59 days",
    subtext: "1 to 2 Months before arrival",
    chargeText: "50% of Total Tour Cost",
    chargePercentage: 50,
    basis: "Total tour cost",
    refundPercentage: 50,
    refundText: "50% of tour cost eligible for refund",
    statusBadge: "Moderate Window",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    accentBorder: "border-amber-500",
    bgHighlight: "bg-amber-50/60",
    icon: "clock",
    note: "50% of the total tour cost is charged as hotels and dedicated vehicle allocations are partially locked in.",
    recommendation: "If your plans are flexible, consider shifting your tour dates rather than taking a 50% deduction.",
  },
  {
    id: "tier-15-29",
    daysRange: "15 to 29 days",
    subtext: "2 to 4 Weeks before arrival",
    chargeText: "75% of Total Tour Cost",
    chargePercentage: 75,
    basis: "Total tour cost",
    refundPercentage: 25,
    refundText: "25% of tour cost eligible for refund",
    statusBadge: "Late Cancellation",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    accentBorder: "border-orange-500",
    bgHighlight: "bg-orange-50/60",
    icon: "alert-triangle",
    note: "75% of the total tour cost is charged as vehicles, chauffeurs, and heritage accommodations have been secured.",
    recommendation: "High retention fee applies. We strongly advise rescheduling dates instead to protect your travel investment.",
  },
  {
    id: "tier-under-15",
    daysRange: "Less than 15 days or No-Show",
    subtext: "Under 2 Weeks or Non-Arrival",
    chargeText: "100% of Total Tour Cost",
    chargePercentage: 100,
    basis: "Total tour cost",
    refundPercentage: 0,
    refundText: "No refund given",
    statusBadge: "Non-Refundable",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    accentBorder: "border-rose-500",
    bgHighlight: "bg-rose-50/60",
    icon: "x-circle",
    note: "100% of the total tour cost is charged, and no refund is given as all services, hotels, and guides are fully committed.",
    recommendation: "Zero refund applies. Reach out immediately to explore date changes or emergency rescheduling options.",
  },
];

export default function RefundInteractive() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const activeTier = TIERS[selectedTierIndex];

  const emailTemplate = `To: Tripsthan@gmail.com
Subject: Tour Cancellation Request - [Your Full Name] - [Booking Ref/Dates]

Dear TripSthan Reservations Team,

I am writing to formally request the cancellation of my upcoming tour booking with TripSthan.

Here are my booking details:
- Full Name: [Enter your full name]
- Contact Number / WhatsApp: [Enter phone number]
- Planned Tour Name: [e.g. 5-Day Golden Triangle / Private Cab]
- Scheduled Travel Dates: [e.g. 15 Nov 2026 to 20 Nov 2026]
- Booking Reference / Invoice #: [If available]
- Reason for Cancellation: [Optional brief note]

I understand that the official cancellation date is the day this email is received by TripSthan, and that charges will be calculated in accordance with your published Refund and Cancellation Policy.

Please acknowledge receipt of this cancellation request and confirm the net refund amount to be processed.

Thank you,
[Your Name]`;

  const copyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailTemplate).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const faqs = [
    {
      q: "How is the cancellation date officially determined?",
      a: "The cancellation date is strictly recorded as the day our reservations desk receives your written email at Tripsthan@gmail.com. We recommend sending it as early in the day as possible to ensure your notice falls within the higher refund tier.",
    },
    {
      q: "How will my refund be paid back to me?",
      a: "All approved refunds are returned directly via the original method of payment (such as PayPal, Wise, or International Bank Wire Transfer) to the account originally used for the deposit.",
    },
    {
      q: "Why are bank and payment gateway fees deducted from my refund?",
      a: "Payment processors (including PayPal, Wise, credit card merchant gateways, and intermediary banks) charge non-refundable transaction fees when receiving and processing international remittances. TripSthan calculates refunds on the net amount actually received in our account, and any transfer or gateway fees incurred during refund processing are deducted.",
    },
    {
      q: "Can I reschedule my trip dates instead of canceling?",
      a: "Yes! We strongly encourage guests to reschedule rather than cancel. Private chauffeur and tour itineraries often allow date modifications with minimal or zero penalty, provided hotels and transport have comparable availability. Please inform us as soon as possible so we can update your dates smoothly.",
    },
    {
      q: "What if I experience unexpected flight delays or medical emergencies?",
      a: "If flight delays or illness prevent you from arriving on time, contact our emergency helpline at +91 9953458949 immediately. While strict hotel cancellation fees may apply within 15 days, our team will do everything possible to adjust your chauffeur pickup and sightseeing schedule without additional fees.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Quick Navigation Sticky/Anchor Pill Bar */}
      <nav
        aria-label="Policy Navigation"
        className="rounded-2xl bg-white p-2.5 sm:p-3 border border-[#EAE0D2] shadow-sm flex flex-wrap items-center justify-between gap-2"
      >
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <a
            href="#how-to-cancel"
            className="group inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            <Mail className="w-3.5 h-3.5 text-[#7A2318] transition-transform group-hover:scale-110" />
            <span>How to Cancel</span>
          </a>
          <a
            href="#cancellation-charges"
            className="group inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:scale-110" />
            <span>Charges Breakdown</span>
          </a>
          <a
            href="#additional-terms"
            className="group inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover:scale-110" />
            <span>Additional Terms</span>
          </a>
          <a
            href="#changing-dates"
            className="group inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:rotate-45" />
            <span>Date Changes</span>
          </a>
          <a
            href="#contact-us"
            className="group inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            <Phone className="w-3.5 h-3.5 text-rose-600 transition-transform group-hover:scale-110" />
            <span>Contact Desk</span>
          </a>
        </div>

        <button
          onClick={handlePrint}
          type="button"
          aria-label="Print policy document"
          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700 transition"
        >
          <Printer className="w-3.5 h-3.5 text-stone-600" />
          <span>Print / Save PDF</span>
        </button>
      </nav>

      {/* Interactive Cancellation Charge Estimator & Tier Visualizer */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] shadow-card overflow-hidden">
        <div className="bg-gradient-to-r from-[#261E19] via-[#3A2A20] to-[#261E19] p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-saffron/20 border border-saffron/40 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] mb-2">
                Interactive Fee Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Cancellation Charges by Notice Window
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Select your cancellation timeline below to see the exact deduction and refund terms.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs text-stone-300 font-medium">Selected Tier:</span>
              <span className="inline-block rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold text-white border border-white/20">
                {activeTier.daysRange}
              </span>
            </div>
          </div>

          {/* Tier Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
            {TIERS.map((tier, index) => {
              const isActive = selectedTierIndex === index;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTierIndex(index)}
                  className={`text-left rounded-2xl p-3.5 sm:p-4 transition-all duration-200 border ${
                    isActive
                      ? "bg-white text-ink border-white shadow-lg -translate-y-0.5"
                      : "bg-white/10 hover:bg-white/15 text-white/90 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-saffron" : "text-stone-300"}`}>
                      Tier {index + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-stone-100 text-stone-700" : "bg-white/10 text-stone-300"
                    }`}>
                      {tier.daysRange.includes("60") ? "60+ d" : tier.daysRange.includes("30") ? "30–59 d" : tier.daysRange.includes("15") ? "15–29 d" : "<15 d"}
                    </span>
                  </div>
                  <p className={`text-sm sm:text-base font-bold mt-1.5 leading-snug ${isActive ? "text-ink" : "text-white"}`}>
                    {tier.daysRange}
                  </p>
                  <p className={`text-xs mt-1 font-semibold ${isActive ? "text-[#7A2318]" : "text-amber-300"}`}>
                    Fee: {tier.chargeText}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Breakdown Card */}
        <div className="p-6 sm:p-8 bg-[#FAF7F2] border-t border-[#EAE0D2]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual Gauge / Charge Card */}
            <div className="md:col-span-5 rounded-2xl bg-white p-6 border border-[#EAE0D2] shadow-sm text-center space-y-4">
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${activeTier.badgeColor}`}>
                {activeTier.statusBadge}
              </span>

              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#7A2318] block">
                  {activeTier.chargePercentage}%
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider block mt-1">
                  Cancellation Fee Deducted
                </span>
                <span className="text-xs text-stone-500 block">
                  Based on: {activeTier.basis}
                </span>
              </div>

              {/* Progress bar visual */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-600">Charge: {activeTier.chargePercentage}%</span>
                  <span className="text-emerald-700">Eligible Refund: {activeTier.refundPercentage}%</span>
                </div>
                <div className="w-full bg-stone-200 h-3 rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#7A2318] h-full transition-all duration-500"
                    style={{ width: `${activeTier.chargePercentage}%` }}
                  />
                  <div
                    className="bg-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${activeTier.refundPercentage}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-emerald-700 block">
                  ✓ {activeTier.refundText}
                </span>
                <span className="text-[11px] text-stone-500 block mt-0.5">
                  Processed in 15 to 20 working days
                </span>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A2318]">
                <span className="flex h-2 w-2 rounded-full bg-[#7A2318]" />
                Policy Rule Details
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-ink">
                Cancelling {activeTier.daysRange}
              </h4>

              <div className="rounded-xl bg-white p-4 border border-[#EAE0D2] shadow-xs">
                <p className="text-sm sm:text-base font-semibold text-stone-800 leading-relaxed">
                  {activeTier.note}
                </p>
              </div>

              <div className="rounded-xl bg-amber-50/70 p-4 border border-amber-200/80 flex items-start gap-3">
                <GlowingBulbIcon />
                <div>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    TripSthan Recommendation
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 mt-0.5 leading-relaxed">
                    {activeTier.recommendation}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#how-to-cancel"
                  className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow hover:shadow-md transition active:scale-95"
                >
                  <span>Submit Cancellation Email</span>
                  <span>→</span>
                </a>
                <a
                  href="#changing-dates"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-5 py-2.5 text-xs sm:text-sm font-semibold transition"
                >
                  <span>Ask to Change Dates Instead</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Email Helper with One-Click Copy */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-stone-200">
          <div>
            <span className="inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-2">
              Writing Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">
              Ready-to-Send Cancellation Email Template
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Use this standard template to ensure your request includes all required details for fastest verification.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyTemplate}
              className="inline-flex items-center gap-2 rounded-xl bg-saffron text-white px-4 py-2 text-xs sm:text-sm font-bold shadow-sm hover:brightness-105 active:scale-95 transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Template</span>
                </>
              )}
            </button>

            <a
              href={`mailto:Tripsthan@gmail.com?subject=Tour%20Cancellation%20Request&body=${encodeURIComponent(
                "Dear TripSthan Team,\n\nI would like to request a cancellation for my upcoming tour booking.\n\nName: \nTravel Dates: \nBooking Reference: \n\nPlease confirm the cancellation date and refund details.\n\nThank you."
              )}`}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2 text-xs sm:text-sm font-bold text-ink transition active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#7A2318]" />
              <span>Open in Email App</span>
            </a>
          </div>
        </div>

        {/* Template Code Preview Box */}
        <div className="mt-5 relative">
          <pre className="rounded-2xl bg-[#1A1A1A] p-4 sm:p-5 text-xs sm:text-sm font-mono text-stone-200 overflow-x-auto whitespace-pre-wrap leading-relaxed border border-stone-800">
            {emailTemplate}
          </pre>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <span className="inline-block rounded-full bg-[#7A2318]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7A2318] mb-2">
            Clarifications
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink">
            Frequently Asked Cancellation Questions
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Common questions regarding refund calculations, international bank remittances, and policy enforcement.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
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
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-stone-100 text-stone-600 transition-colors duration-200 ${isOpen ? "bg-[#7A2318] text-white" : ""}`}>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
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
