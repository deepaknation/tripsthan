import Link from "next/link";
import TermsInteractive from "@/components/TermsInteractive";
import { C, tel } from "@/lib/data";
import { Calendar, CheckCircle, Zap, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | TripSthan",
  description:
    "Read the terms for booking a private India tour or car hire with driver with TripSthan, including payments, changes and responsibilities.",
  keywords: [
    "TripSthan terms and conditions",
    "private India tour booking terms",
    "India car rental agreement",
    "chauffeur hire terms India",
    "TripSthan customer responsibilities",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | TripSthan",
    description:
      "Read the terms for booking a private India tour or car hire with driver with TripSthan, including payments, changes and responsibilities.",
    type: "website",
    url: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdatedDate = "October 10, 2026";

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-body">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#261E19] via-[#332720] to-[#261E19] text-white pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8DFC8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#7A2318]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-stone-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-saffron">Terms and Conditions</span>
          </nav>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] border border-white/15 mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
            Official Booking Agreement & Service Terms
          </span>

          {/* H1 Tag */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Read the terms for booking a private India tour or car hire with driver with TripSthan, including payments, changes and responsibilities.
          </p>

          {/* Metadata Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-saffron" />
              <span>Last Updated: <strong className="text-white font-semibold">{lastUpdatedDate}</strong></span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Agreed Advance Deposit Confirmation</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Private Custom Tours</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative -mt-10 mx-auto max-w-5xl px-5 sm:px-6 pb-20 space-y-12 z-10">

        {/* SECTION 1: Booking, Payments and Advance */}
        <section id="booking-and-advance" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              01
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Booking Confirmation & Financial Terms
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Payments and Cancellation
          </h2>

          {/* User Required Exact Content Block */}
          <div className="rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2] space-y-3">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              A booking is confirmed once we receive the agreed advance payment towards the total tour cost. The advance payment amount will be mutually agreed upon at the time of booking, depending on the tour package and services included.
            </p>
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed pt-1">
              All bank charges, payment gateway fees, and currency conversion charges are the responsibility of the customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="rounded-2xl border border-stone-200 p-5 bg-white space-y-2">
              <span className="text-xl">💳</span>
              <h3 className="text-base font-bold text-ink">Advance Deposit</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Secures hotel room reservations, verified commercial chauffeur schedules, and dedicated AC vehicle bookings.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5 bg-white space-y-2">
              <span className="text-xl">💱</span>
              <h3 className="text-base font-bold text-ink">Currency & Gateway Fees</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Wire transfer fees, PayPal/Wise handling levies, and bank exchange commissions are covered by the sender.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5 bg-white space-y-2">
              <span className="text-xl">🧾</span>
              <h3 className="text-base font-bold text-ink">Balance Settlement</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The remaining tour balance is payable upon arrival in India, before commencement of overland travel, as agreed in writing.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Cancellation Policy Summary */}
        <section id="cancellation-terms" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              02
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Deduction Schedule & Notice
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Cancellation Policy and Charges
          </h2>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            All cancellations must be sent to us in writing by email at <strong className="text-ink">Tripsthan@gmail.com</strong>. The cancellation date is the day we receive your email. Deductions are determined strictly by the notice window:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-1">
              <span className="text-xs font-bold uppercase text-emerald-800">60+ Days Prior</span>
              <p className="text-xl font-black text-[#7A2318]">25% Charge</p>
              <p className="text-xs text-stone-600">Calculated on the advance payment received.</p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-4 space-y-1">
              <span className="text-xs font-bold uppercase text-amber-800">30 to 59 Days</span>
              <p className="text-xl font-black text-[#7A2318]">50% Charge</p>
              <p className="text-xs text-stone-600">Calculated on the total tour cost.</p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4 space-y-1">
              <span className="text-xs font-bold uppercase text-orange-800">15 to 29 Days</span>
              <p className="text-xl font-black text-[#7A2318]">75% Charge</p>
              <p className="text-xs text-stone-600">Calculated on the total tour cost.</p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-4 space-y-1">
              <span className="text-xs font-bold uppercase text-rose-800">&lt; 15 Days / No-Show</span>
              <p className="text-xl font-black text-[#7A2318]">100% Charge</p>
              <p className="text-xs text-stone-600">Zero refund given as all services are fully committed.</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Unused hotel nights, transport, meals, and sightseeing are non-refundable. For full terms, processing windows (15 to 20 working days), and payment gateway deductions, read our complete{" "}
            <Link href="/refund-and-cancellation" className="text-[#7A2318] underline font-bold hover:text-saffron">
              Refund and Cancellation Policy
            </Link>.
          </p>
        </section>

        {/* SECTION 3: Changes and Rescheduling */}
        <section id="itinerary-changes" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Amendments & Date Adjustments
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Itinerary Changes and Rescheduling
          </h2>

          <div className="rounded-2xl bg-amber-50/60 p-5 sm:p-6 border border-amber-200/80">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              Kindly inform us as soon as possible if you would prefer to reschedule your travel dates rather than cancel.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong>Guest-Requested Changes:</strong> Because our tours and chauffeured car hires are 100% private, we gladly accommodate adjustments to departure timings, meal stops, and day-to-day pacing. If a guest requests modifications involving additional mileage, alternate cities, or hotel category upgrades, any supplemental costs will be communicated transparently.
            </p>
            <p>
              <strong>Operational Adjustments:</strong> Certain historical monuments have routine closure schedules (such as the Taj Mahal being closed on Fridays). In cases of road diversions, seasonal fog, or state VIP security movements, our experienced drivers and tour coordinators reserve the right to modify the sightseeing sequence to preserve guest safety and optimize travel flow.
            </p>
          </div>
        </section>

        {/* SECTION 4: Customer Responsibilities */}
        <section id="customer-responsibilities" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              04
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Guest Obligations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Customer Responsibilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2">
              <span className="text-xl">🛂</span>
              <h3 className="text-base font-bold text-ink">Passport & Indian Visas</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Travelers are solely responsible for ensuring their passports have at least 6 months remaining validity and holding an approved Indian visa or e-visa prior to boarding international flights.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2">
              <span className="text-xl">🏥</span>
              <h3 className="text-base font-bold text-ink">Comprehensive Travel Insurance</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We strongly advise all international guests to secure comprehensive travel and medical insurance covering flight cancellations, medical emergencies, emergency evacuation, and luggage loss.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2">
              <span className="text-xl">⏰</span>
              <h3 className="text-base font-bold text-ink">Punctuality & Daily Departures</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Guests are requested to adhere to agreed morning departure schedules to ensure timely monument entry, avoid peak highway traffic, and comfortably complete the scheduled day program.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2">
              <span className="text-xl">🧳</span>
              <h3 className="text-base font-bold text-ink">Personal Belongings & Valuables</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Guests remain responsible for their passports, cameras, wallets, and personal belongings at all times during monument visits, hotel stays, and cab transit.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Vehicle Hire and Chauffeur Services */}
        <section id="vehicle-chauffeur-rules" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              05
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Fleet Operations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Vehicle Hire and Chauffeur Services
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong>All-Inclusive Vehicle Rates:</strong> Unless otherwise specified in writing, private car hire quotes include fuel, all state inter-state border taxes, expressway toll fees, parking levies, and driver night halt allowances.
            </p>
            <p>
              <strong>Chauffeur Safety & Driving Hours:</strong> For passenger safety and transport department compliance, drivers are restricted to reasonable daily driving hours (typically 8 to 10 hours per day). Drivers cannot be requested to drive through the night on high-speed expressways without advance operational coordination.
            </p>
            <p>
              <strong>Vehicle Capacity:</strong> Vehicles must not exceed designated passenger seating and trunk luggage allowances (Sedans: up to 3 guests + 2 large bags; Innova Crysta: up to 5-6 guests; Force Urbania: up to 12-16 guests).
            </p>
          </div>
        </section>

        {/* SECTION 6: Limitation of Liability and Force Majeure */}
        <section id="liability-force-majeure" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              06
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Risk Allocation & Jurisdiction
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Limitation of Liability & Governing Law
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong>Force Majeure:</strong> TripSthan shall not be held liable for failure or delay in delivering travel arrangements arising from circumstances beyond reasonable control, including but not limited to severe weather, natural disasters, epidemics, strikes, airline delays, train cancellations, or state government road blockades.
            </p>
            <p>
              <strong>Third-Party Service Providers:</strong> While TripSthan selects reputable hotels, licensed guides, and transport providers, we act as an intermediary operator. TripSthan is not liable for injury, damage, loss, or irregularities caused by negligence of independent third-party vendors.
            </p>
            <p>
              <strong>Governing Law:</strong> All contracts, agreements, and disputes arising out of bookings with TripSthan shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in <strong>Agra, Uttar Pradesh, India</strong>.
            </p>
          </div>
        </section>

        {/* Interactive Companion Component */}
        <TermsInteractive />

        {/* Contact Support Section */}
        <section className="rounded-2xl bg-gradient-to-r from-[#261E19] via-[#332720] to-[#261E19] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Have questions about our booking terms?</h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
              Contact our reservations team for custom quotes and clarity on booking policies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:Tripsthan@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-saffron text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow hover:brightness-105 transition active:scale-95"
            >
              <span>Email Booking Desk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={tel("+919953458949")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9953458949</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
