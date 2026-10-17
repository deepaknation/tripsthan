import Link from "next/link";
import PrivacyInteractive from "@/components/PrivacyInteractive";
import { C, tel } from "@/lib/data";
import { Calendar, ShieldCheck, Lock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | TripSthan",
  description:
    "Read how TripSthan collects, uses and protects your personal information when you book a private India tour or car hire.",
  keywords: [
    "TripSthan privacy policy",
    "private India tour privacy",
    "tour operator data protection India",
    "car rental privacy India",
    "TripSthan personal information protection",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TripSthan",
    description:
      "Read how TripSthan collects, uses and protects your personal information when you book a private India tour or car hire.",
    type: "website",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = "October 10, 2026";

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-body">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#261E19] via-[#332720] to-[#261E19] text-white pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8DFC8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#7A2318]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-stone-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-saffron">Privacy Policy</span>
          </nav>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] border border-white/15 mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Guest Data Protection & Trust
          </span>

          {/* H1 Tag */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Privacy Policy
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Read how TripSthan collects, uses and protects your personal information when you book a private India tour or car hire.
          </p>

          {/* Metadata Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-saffron" />
              <span>Last Updated: <strong className="text-white font-semibold">{lastUpdatedDate}</strong></span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Card Details Not Stored</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-stone-200 border border-white/10">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>We Never Sell Your Data</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative -mt-10 mx-auto max-w-5xl px-5 sm:px-6 pb-20 space-y-12 z-10">

        {/* SECTION 1: Who We Are */}
        <section id="who-we-are" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              01
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              About the Controller
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Who We Are
          </h2>

          <div className="mt-5 rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2]">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              TripSthan plans private India tours and provides car hire with driver across India. This policy explains how we handle your personal information when you use our website or book a service with us.
            </p>
          </div>
        </section>

        {/* SECTION 2: Information We Collect */}
        <section id="information-we-collect" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              02
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Personal Data Categories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Information We Collect
          </h2>

          <div className="rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2]">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              We collect only what we need to plan your trip. This can include your name, phone number, email address, travel dates, destinations, group size and any special requests. If a hotel or booking requires it, we may also ask for identity details such as passport information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-stone-200 p-5 bg-white space-y-2">
              <span className="text-xl">👤</span>
              <h3 className="text-base font-bold text-ink">Trip Planning & Contact Details</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Full names of travelers, email addresses, phone/WhatsApp numbers, preferred travel dates, destination preferences, and requested vehicle type.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5 bg-white space-y-2">
              <span className="text-xl">🛂</span>
              <h3 className="text-base font-bold text-ink">Mandatory Identification</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Passport numbers, nationality, or government photo ID only when legally required by Indian hotel regulations, wildlife sanctuary permits, or train bookings.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: How We Use Your Information */}
        <section id="how-we-use-information" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Operational Purposes
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            How We Use Your Information
          </h2>

          <p className="text-sm sm:text-base text-stone-600">
            We process your personal information strictly for the following purposes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {[
              {
                icon: "💬",
                title: "Enquiry Response & Quotes",
                desc: "To reply to your enquiries and send you a quote tailored to your dates and preferences.",
              },
              {
                icon: "🗺️",
                title: "Tour & Cab Management",
                desc: "To plan, confirm and manage your tour or car hire itinerary with our operations team.",
              },
              {
                icon: "🏨",
                title: "Logistics Coordination",
                desc: "To arrange hotels, drivers and guides for your trip and ensure timely arrivals.",
              },
              {
                icon: "📲",
                title: "Booking Updates",
                desc: "To contact you about your booking, chauffeur details, flight pickups, and support.",
              },
              {
                icon: "🚀",
                title: "Service Improvement",
                desc: "To improve our website and services, optimizing guest comfort and itinerary flow.",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 space-y-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  • {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Who We Share It With */}
        <section id="who-we-share-with" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              04
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Third Parties & Security
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Who We Share It With
          </h2>

          <div className="rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2] space-y-3">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              We share your details only with the people who help deliver your trip, such as hotels, drivers, guides and payment providers. We do not sell your personal information to anyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Payment security assurance card */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Card Details Not Stored</span>
              </div>
              <h3 className="text-base font-bold text-ink">
                Secure Third-Party Online Payments
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Online payments are handled by third-party payment providers such as PayPal. Your card details are not stored on our website.
              </p>
            </div>

            {/* Cookies card */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <span className="text-lg">🍪</span>
                <span>Website Cookies</span>
              </div>
              <h3 className="text-base font-bold text-ink">
                How Cookies Are Used
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Cookies may be used on our website to better understand how users use it. Cookies can be disabled in the browser&apos;s settings at any time without impacting your booking experience.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: How Long We Keep Your Data */}
        <section id="data-retention" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              05
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Storage Duration
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            How Long We Keep Your Data
          </h2>

          <div className="rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2]">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              We keep your information only as long as needed to provide our services and meet legal and accounting requirements.
            </p>
          </div>
        </section>

        {/* SECTION 6: Your Choices & Rights */}
        <section id="your-choices" className="scroll-mt-24 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7A2318]/10 text-[#7A2318] font-bold text-sm">
              06
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A2318]">
              Your Rights & Preferences
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Your Choices
          </h2>

          <div className="rounded-2xl bg-amber-50/60 p-5 sm:p-6 border border-amber-200/80 space-y-2">
            <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
              You have the option to request that we present, update, or erase the personal data we have about you. At any moment, you can request that we discontinue sending you messages.
            </p>
            <p className="text-sm sm:text-base font-bold text-[#7A2318] pt-1">
              For any privacy question, write to{" "}
              <a href="mailto:info@tripsthan.com" className="underline hover:text-saffron">
                info@tripsthan.com
              </a>{" "}
              or call{" "}
              <a href={tel("+919953458949")} className="underline hover:text-saffron">
                +91 9953458949
              </a>
            </p>
          </div>

          {/* Interactive Rights Dispatcher & FAQs */}
          <PrivacyInteractive />
        </section>

        {/* Contact Strip */}
        <section className="rounded-2xl bg-gradient-to-r from-[#261E19] via-[#332720] to-[#261E19] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Have a specific privacy concern?</h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
              Write to us and we will reply as soon as we can.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:info@tripsthan.com"
              className="inline-flex items-center gap-2 rounded-full bg-saffron text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow hover:brightness-105 transition active:scale-95 cursor-pointer"
            >
              <span>Email Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
