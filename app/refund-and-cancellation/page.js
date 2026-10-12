import Link from "next/link";
import RefundInteractive from "@/components/RefundInteractive";
import { C, tel, wa } from "@/lib/data";
import { Calendar, CheckCircle, Clock, Mail, Phone } from "lucide-react";
import {
  WrittenNoticeHighlightIcon,
  TierChargesHighlightIcon,
  RefundSpeedHighlightIcon,
  RescheduleFlexibleHighlightIcon,
  Step1GatherIcon,
  Step2EmailIcon,
  Step3DateRecordedIcon,
  Tier1ShieldIcon,
  Tier2ClockIcon,
  Tier3AlertIcon,
  Tier4LockIcon,
  HotelNightIcon,
  EarlyDepartureIcon,
  TimelineIcon,
  BankFeeIcon,
  CalculatorNetIcon,
  AnimatedEmailIcon,
  AnimatedHelplineIcon,
  AnimatedOfficePinIcon,
} from "@/components/PolicyAnimatedIcons";

export const metadata = {
  title: "Refund and Cancellation Policy | TripSthan",
  description:
    "Read TripSthan’s cancellation charges and refund timeline for private India tours. All cancellations must be sent in writing by email.",
  keywords: [
    "TripSthan refund policy",
    "TripSthan cancellation policy",
    "India tour cancellation charges",
    "private tour refund timeline",
    "India cab rental cancellation policy",
    "travel booking refund India",
  ],
  alternates: {
    canonical: "/refund-and-cancellation",
  },
  openGraph: {
    title: "Refund and Cancellation Policy | TripSthan",
    description:
      "Read TripSthan’s cancellation charges and refund timeline for private India tours. All cancellations must be sent in writing by email.",
    type: "website",
    url: "/refund-and-cancellation",
  },
};

export default function RefundAndCancellationPage() {
  const lastUpdatedDate = "October 10, 2026";

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-body">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#261E19] via-[#332720] to-[#261E19] text-white pt-14 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8DFC8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#7A2318]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-stone-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-saffron">Refund and Cancellation Policy</span>
          </nav>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] border border-white/15 mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
            Official Booking Policy & Guest Protection
          </span>

          {/* H1 Tag */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Refund and Cancellation Policy
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Read TripSthan’s cancellation charges and refund timeline for private India tours. All cancellations must be sent in writing by email.
          </p>

          {/* Meta Details Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-saffron" />
              <span>Last Updated: <strong className="text-white font-semibold">{lastUpdatedDate}</strong></span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Written Email Confirmation</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>15–20 Working Days Refund Processing</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative -mt-10 mx-auto max-w-5xl px-5 sm:px-6 pb-14 space-y-8 z-10">

        {/* Key Policy Highlights (At-a-Glance Cards with Animated Icons) */}
        <section aria-label="Policy Summary" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group rounded-2xl bg-white p-5 border border-[#EAE0D2] shadow-sm hover:shadow-md hover:border-[#DECFC0] transition">
            <WrittenNoticeHighlightIcon />
            <h3 className="text-sm font-bold text-ink mt-3 group-hover:text-[#7A2318] transition">Written Email Required</h3>
            <p className="mt-1 text-xs text-stone-600 leading-relaxed">
              Official cancellation notice must be sent via email to Tripsthan@gmail.com.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-5 border border-[#EAE0D2] shadow-sm hover:shadow-md hover:border-[#DECFC0] transition">
            <TierChargesHighlightIcon />
            <h3 className="text-sm font-bold text-ink mt-3 group-hover:text-amber-700 transition">Tiered Charges</h3>
            <p className="mt-1 text-xs text-stone-600 leading-relaxed">
              Charges scale fairly from 25% of advance to 100% of tour cost based on notice days.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-5 border border-[#EAE0D2] shadow-sm hover:shadow-md hover:border-[#DECFC0] transition">
            <RefundSpeedHighlightIcon />
            <h3 className="text-sm font-bold text-ink mt-3 group-hover:text-emerald-700 transition">15–20 Working Days</h3>
            <p className="mt-1 text-xs text-stone-600 leading-relaxed">
              Applicable refunds are calculated on net amount received and returned swiftly.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-5 border border-[#EAE0D2] shadow-sm hover:shadow-md hover:border-[#DECFC0] transition">
            <RescheduleFlexibleHighlightIcon />
            <h3 className="text-sm font-bold text-ink mt-3 group-hover:text-blue-700 transition">Reschedule Flexible</h3>
            <p className="mt-1 text-xs text-stone-600 leading-relaxed">
              Prefer changing your tour dates instead? Rescheduling options are gladly supported.
            </p>
          </div>
        </section>

        {/* SECTION 1: How to Cancel */}
        <section id="how-to-cancel" className="scroll-mt-24 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 border border-[#EAE0D2] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              01
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Procedure & Written Notice
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            How to Cancel
          </h2>

          {/* Prompt Required Content Block */}
          <div className="mt-5 rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2] leading-relaxed">
            <p className="text-base sm:text-lg text-ink font-semibold">
              All cancellations must be sent to us in writing by email at{" "}
              <a
                href="mailto:Tripsthan@gmail.com"
                className="text-[#7A2318] underline font-bold hover:text-saffron transition"
              >
                Tripsthan@gmail.com
              </a>
              . Please include your name, travel dates and booking details. The cancellation date is the day we receive your email.
            </p>
          </div>

          {/* 3-Step Visual Process Guide with Animated Icons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="group rounded-2xl border border-stone-200 p-5 bg-white space-y-3 transition hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center justify-between">
                <Step1GatherIcon />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron text-white text-xs font-bold shadow-xs">
                  1
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Preparation</span>
                <h3 className="text-base font-bold text-ink group-hover:text-[#7A2318] transition">Gather Details</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Include your full name, primary phone number, scheduled tour package, and invoice/booking reference number.
              </p>
            </div>

            <div className="group rounded-2xl border border-stone-200 p-5 bg-white space-y-3 transition hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center justify-between">
                <Step2EmailIcon />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron text-white text-xs font-bold shadow-xs">
                  2
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Written Notice</span>
                <h3 className="text-base font-bold text-ink group-hover:text-[#7A2318] transition">Send Email</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Send the request directly to <strong className="text-ink">Tripsthan@gmail.com</strong>. Cancellations over verbal phone call alone cannot be accepted.
              </p>
            </div>

            <div className="group rounded-2xl border border-stone-200 p-5 bg-white space-y-3 transition hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center justify-between">
                <Step3DateRecordedIcon />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron text-white text-xs font-bold shadow-xs">
                  3
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Effective Date</span>
                <h3 className="text-base font-bold text-ink group-hover:text-[#7A2318] transition">Date Recorded</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The official cancellation date is the day our inbox receives your email. Our team will verify and reply with confirmation.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100">
            <a
              href="mailto:Tripsthan@gmail.com?subject=Cancellation%20Request%20-%20Tour%20Booking"
              className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow hover:shadow-md transition active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email Tripsthan@gmail.com</span>
            </a>
            <a
              href={tel("+919953458949")}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-ink px-5 py-2.5 text-xs sm:text-sm font-semibold transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Urgent Assistance: +91 9953458949</span>
            </a>
          </div>
        </section>

        {/* SECTION 2: Cancellation Charges */}
        <section id="cancellation-charges" className="scroll-mt-24 space-y-5">
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 border border-[#EAE0D2] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
                02
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
                Standard Timeline Charges
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Cancellation Charges
            </h2>

            <p className="mt-3 text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
              The charge depends on how many days before your arrival you cancel:
            </p>

            {/* 4 Required Bulleted Tiers in Visual Structured Cards with Animated Icons */}
            <div className="mt-6 space-y-4">
              {/* Tier 1 */}
              <div className="group rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 sm:p-6 transition hover:shadow-md hover:border-emerald-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <Tier1ShieldIcon />
                    <div className="space-y-1">
                      <span className="inline-block rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-0.5 text-xs font-bold uppercase">
                        Tier 1: Maximum Refund Window
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-emerald-900 transition">
                        60 days or more before arrival
                      </h3>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#7A2318]">
                      25%
                    </span>
                    <span className="block text-xs font-semibold text-stone-600">
                      of advance payment
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-emerald-200/70 text-sm text-stone-800 leading-relaxed font-normal">
                  <strong className="text-ink font-semibold">25% of the advance payment received is kept as the cancellation fee.</strong> The remaining 75% of the received advance payment is refunded to the traveler (minus applicable bank and gateway transaction costs).
                </div>
              </div>

              {/* Tier 2 */}
              <div className="group rounded-2xl border border-amber-200 bg-amber-50/40 p-5 sm:p-6 transition hover:shadow-md hover:border-amber-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <Tier2ClockIcon />
                    <div className="space-y-1">
                      <span className="inline-block rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-3 py-0.5 text-xs font-bold uppercase">
                        Tier 2: Intermediate Window
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-amber-900 transition">
                        30 to 59 days before arrival
                      </h3>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#7A2318]">
                      50%
                    </span>
                    <span className="block text-xs font-semibold text-stone-600">
                      of total tour cost
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-amber-200/70 text-sm text-stone-800 leading-relaxed font-normal">
                  <strong className="text-ink font-semibold">50% of the total tour cost is charged.</strong> At this stage, hotel reservations and dedicated vehicle allocations have been secured.
                </div>
              </div>

              {/* Tier 3 */}
              <div className="group rounded-2xl border border-orange-200 bg-orange-50/40 p-5 sm:p-6 transition hover:shadow-md hover:border-orange-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <Tier3AlertIcon />
                    <div className="space-y-1">
                      <span className="inline-block rounded-full bg-orange-100 text-orange-800 border border-orange-300 px-3 py-0.5 text-xs font-bold uppercase">
                        Tier 3: Late Notice
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-orange-900 transition">
                        15 to 29 days before arrival
                      </h3>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#7A2318]">
                      75%
                    </span>
                    <span className="block text-xs font-semibold text-stone-600">
                      of total tour cost
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-orange-200/70 text-sm text-stone-800 leading-relaxed font-normal">
                  <strong className="text-ink font-semibold">75% of the total tour cost is charged.</strong> If you anticipate travel changes, we strongly suggest requesting a date reschedule instead.
                </div>
              </div>

              {/* Tier 4 */}
              <div className="group rounded-2xl border border-rose-200 bg-rose-50/40 p-5 sm:p-6 transition hover:shadow-md hover:border-rose-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <Tier4LockIcon />
                    <div className="space-y-1">
                      <span className="inline-block rounded-full bg-rose-100 text-rose-800 border border-rose-300 px-3 py-0.5 text-xs font-bold uppercase">
                        Tier 4: Non-Refundable Period
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-rose-900 transition">
                        Less than 15 days before arrival, or no-show
                      </h3>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#7A2318]">
                      100%
                    </span>
                    <span className="block text-xs font-semibold text-stone-600">
                      of total tour cost
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-rose-200/70 text-sm text-stone-800 leading-relaxed font-normal">
                  <strong className="text-ink font-semibold">100% of the total tour cost is charged, and no refund is given.</strong> Within 14 days of arrival, all hotels, guides, and chauffeurs have been fully contracted.
                </div>
              </div>
            </div>

            {/* Quick Reference Comparison Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 shadow-2xs">
              <div className="bg-stone-100/80 px-4 py-3 border-b border-stone-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Quick Reference Schedule
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600">
                    <tr>
                      <th className="py-3 px-4 font-bold">Cancellation Notice Window</th>
                      <th className="py-3 px-4 font-bold">Cancellation Charge</th>
                      <th className="py-3 px-4 font-bold">Calculated On</th>
                      <th className="py-3 px-4 font-bold">Refund Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-800">
                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-semibold text-ink">60 days or more before arrival</td>
                      <td className="py-3 px-4 font-bold text-[#7A2318]">25%</td>
                      <td className="py-3 px-4">Advance payment received</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">75% of advance payment</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-semibold text-ink">30 to 59 days before arrival</td>
                      <td className="py-3 px-4 font-bold text-[#7A2318]">50%</td>
                      <td className="py-3 px-4">Total tour cost</td>
                      <td className="py-3 px-4 text-amber-700 font-semibold">50% of total tour cost</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-semibold text-ink">15 to 29 days before arrival</td>
                      <td className="py-3 px-4 font-bold text-[#7A2318]">75%</td>
                      <td className="py-3 px-4">Total tour cost</td>
                      <td className="py-3 px-4 text-orange-700 font-semibold">25% of total tour cost</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-semibold text-ink">Less than 15 days or no-show</td>
                      <td className="py-3 px-4 font-bold text-[#7A2318]">100%</td>
                      <td className="py-3 px-4">Total tour cost</td>
                      <td className="py-3 px-4 text-rose-700 font-semibold">No refund given (0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Interactive Fee Estimator & Email Template Client Component */}
          <RefundInteractive />
        </section>

        {/* SECTION 3: Additional Terms */}
        <section id="additional-terms" className="scroll-mt-24 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 border border-[#EAE0D2] shadow-sm space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Operational Conditions & Deductions
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Additional Terms
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Please review the following specific stipulations governing tour cancellations, non-utilized services, and refund disbursements:
          </p>

          {/* 5 Required Bullet Points Styled into Rich Cards with Animated Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Term 1 */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2 transition-all duration-300 hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center gap-3">
                <HotelNightIcon />
                <h3 className="text-base font-bold text-ink group-hover:text-[#7A2318] transition">Unused Services</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-ink">Unused services such as hotel nights, transport, meals and sightseeing are not refundable.</strong> Once travel commences or services are scheduled, components that guests choose not to utilize cannot be credited or refunded.
              </p>
            </div>

            {/* Term 2 */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2 transition-all duration-300 hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center gap-3">
                <EarlyDepartureIcon />
                <h3 className="text-base font-bold text-ink group-hover:text-[#7A2318] transition">Early Departure</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-ink">If you leave the trip early, no refund is given for the remaining days.</strong> If a traveler decides to curtail or terminate their tour early for personal, scheduling, or medical reasons, unused itinerary portions cannot be refunded.
              </p>
            </div>

            {/* Term 3 */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2 transition-all duration-300 hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center gap-3">
                <TimelineIcon />
                <h3 className="text-base font-bold text-ink group-hover:text-blue-800 transition">Refund Timeline</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-ink">Any refund that applies is processed within 15 to 20 working days after your cancellation.</strong> Refunds are routed back through the original payment channel to provide full transparency and auditability.
              </p>
            </div>

            {/* Term 4 */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2 transition-all duration-300 hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center gap-3">
                <BankFeeIcon />
                <h3 className="text-base font-bold text-ink group-hover:text-emerald-800 transition">Banking & Gateway Fees</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-ink">Bank charges, payment gateway fees (such as PayPal or Wise) and other transaction costs are deducted from the refund amount.</strong> Processor charges incurred during initial receipt and refund transfer are subtracted from the gross return.
              </p>
            </div>

            {/* Term 5 - Full Width */}
            <div className="group md:col-span-2 rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2 transition-all duration-300 hover:shadow-md hover:border-[#DECFC0]">
              <div className="flex items-center gap-3">
                <CalculatorNetIcon />
                <h3 className="text-base font-bold text-ink group-hover:text-purple-800 transition">Net Amount Basis</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-ink">The refund is calculated on the net amount TripSthan has actually received.</strong> Exchange rate differences, intermediary correspondent banking levies, or third-party transfer fees outside of TripSthan’s control are excluded.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Changing Your Dates Instead */}
        <section id="changing-dates" className="scroll-mt-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#261E19] via-[#3A2B21] to-[#261E19] text-white p-5 sm:p-8 shadow-lg border border-white/10">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-block rounded-full bg-saffron/20 border border-saffron/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8DFC8]">
              Flexible Rescheduling
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Changing Your Dates Instead
            </h2>

            {/* Required Prompt Content */}
            <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/15">
              <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                Kindly inform us as soon as possible if you would prefer to reschedule your travel dates rather than cancel.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed pt-1">
              We understand that international flights, visa processing, or sudden personal obligations can necessitate adjustments. Because all our India tours and chauffeured car hires are 100% private and custom-planned, we can often modify your travel window with minimal or zero penalty, provided comparable hotels and fleet vehicles are available on your new dates.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`${wa}?text=${encodeURIComponent("Hello TripSthan, I would like to inquire about rescheduling my tour dates rather than cancelling.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#D44F00] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md transition active:scale-95"
              >
                <span>Reschedule via WhatsApp</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="mailto:Tripsthan@gmail.com?subject=Tour%20Rescheduling%20Request"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
              >
                <span>Email Reschedule Request</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: Contact Us */}
        <section id="contact-us" className="scroll-mt-24 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 border border-[#EAE0D2] shadow-sm space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              05
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Cancellations & Guest Relations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Contact Us
          </h2>

          {/* Required Prompt Content */}
          <div className="rounded-2xl bg-amber-50/60 p-5 sm:p-6 border border-amber-200/80">
            <p className="text-base sm:text-lg text-ink font-semibold">
              For cancellations and refunds, write to{" "}
              <a
                href="mailto:Tripsthan@gmail.com"
                className="text-[#7A2318] underline font-bold hover:text-saffron transition"
              >
                Tripsthan@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href={tel("+919953458949")}
                className="text-[#7A2318] underline font-bold hover:text-saffron transition"
              >
                +91 9953458949
              </a>
            </p>
          </div>

          {/* Contact Details Grid with Animated Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {/* Email Card */}
            <div className="group rounded-2xl border border-stone-200 p-5 space-y-3 bg-white transition hover:shadow-md hover:border-[#DECFC0]">
              <AnimatedEmailIcon />
              <div>
                <h3 className="text-sm font-bold text-ink group-hover:text-[#7A2318] transition">Written Cancellations</h3>
                <p className="text-xs text-stone-500 mt-0.5">Official written notices & refund queries</p>
              </div>
              <div className="pt-1">
                <a
                  href="mailto:Tripsthan@gmail.com"
                  className="text-sm font-bold text-[#7A2318] hover:underline break-all"
                >
                  Tripsthan@gmail.com
                </a>
              </div>
            </div>

            {/* Primary Phone Card */}
            <div className="group rounded-2xl border border-stone-200 p-5 space-y-3 bg-white transition hover:shadow-md hover:border-emerald-200">
              <AnimatedHelplineIcon />
              <div>
                <h3 className="text-sm font-bold text-ink group-hover:text-emerald-800 transition">Direct Helpline</h3>
                <p className="text-xs text-stone-500 mt-0.5">Immediate telephone assistance</p>
              </div>
              <div className="pt-1">
                <a
                  href={tel("+919953458949")}
                  className="text-sm font-bold text-[#7A2318] hover:underline"
                >
                  +91 9953458949
                </a>
              </div>
            </div>

            {/* Office / Secondary Card */}
            <div className="group rounded-2xl border border-stone-200 p-5 space-y-3 bg-white transition hover:shadow-md hover:border-blue-200">
              <AnimatedOfficePinIcon />
              <div>
                <h3 className="text-sm font-bold text-ink group-hover:text-blue-800 transition">Head Office Desk</h3>
                <p className="text-xs text-stone-500 mt-0.5">{C.address}</p>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold text-stone-700">
                  Govt. Approved Tour Operator
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Footer Navigation Links */}
        <section className="rounded-2xl bg-white p-6 border border-[#EAE0D2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-ink">Quick Links:</span>
            <Link href="/tours" className="hover:text-[#7A2318] hover:underline">
              Tour Packages
            </Link>
            <Link href="/cars" className="hover:text-[#7A2318] hover:underline">
              Luxury Car Hire
            </Link>
            <Link href="/about" className="hover:text-[#7A2318] hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#7A2318] hover:underline">
              Contact Desk
            </Link>
          </div>
          <p className="text-stone-400">
            TripSthan Private Tours & Chauffeur Services
          </p>
        </section>
      </div>
    </main>
  );
}
