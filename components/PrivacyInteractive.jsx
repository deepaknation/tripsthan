"use client";

import { useState } from "react";
import { Printer, Check, Copy, Mail, ChevronDown } from "lucide-react";

export default function PrivacyInteractive() {
  const [requestType, setRequestType] = useState("view");
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const requestOptions = [
    {
      id: "view",
      title: "View My Data",
      desc: "Request a copy of personal information TripSthan currently holds for you.",
      subject: "Data Access Request - Personal Information Copy",
      body: "Hello TripSthan Team,\n\nI would like to request a summary of the personal data you currently hold regarding my previous tours or enquiries.\n\nMy Details:\nFull Name: [Your Name]\nEmail: [Your Email]\nPhone: [Your Phone]\n\nThank you.",
    },
    {
      id: "update",
      title: "Update / Correct Data",
      desc: "Submit corrections to your contact information, name, or tour details.",
      subject: "Data Update Request - Correct My Information",
      body: "Hello TripSthan Team,\n\nI would like to update my personal contact details in your records.\n\nDetails to Update:\nName: [Your Name]\nOld Details: [Previous Email / Phone]\nNew Details: [Updated Email / Phone]\n\nThank you.",
    },
    {
      id: "erase",
      title: "Erase / Delete Data",
      desc: "Request the permanent removal of your contact details from our records.",
      subject: "Data Deletion Request - Right to be Forgotten",
      body: "Hello TripSthan Team,\n\nIn accordance with your Privacy Policy, I formally request that you erase and delete my personal information and contact history from your systems.\n\nFull Name: [Your Name]\nEmail: [Your Email]\nPhone / WhatsApp: [Your Phone]\n\nThank you.",
    },
    {
      id: "unsubscribe",
      title: "Stop Communications",
      desc: "Opt out of receiving tour updates, quotes, or marketing messages.",
      subject: "Opt-Out Request - Discontinue All Messages",
      body: "Hello TripSthan Team,\n\nPlease discontinue sending any promotional or follow-up communications to my email and phone number.\n\nFull Name: [Your Name]\nEmail: [Your Email]\nPhone / WhatsApp: [Your Phone]\n\nThank you.",
    },
  ];

  const currentOption = requestOptions.find((o) => o.id === requestType) || requestOptions[0];

  const copyEmailText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentOption.body).then(() => {
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
      q: "Does TripSthan ever store my credit card or bank credentials?",
      a: "No. Never. TripSthan does not store, capture, or host credit card numbers, CVVs, or bank login credentials on our website or servers. All online transactions are handled through secure, PCI-DSS compliant third-party payment gateways (such as PayPal, Wise, or certified banking partners).",
    },
    {
      q: "Why do you collect passport details for certain tour bookings?",
      a: "In India, government regulations, heritage luxury hotels, state forest departments (such as Ranthambore Tiger Safari permits), and airport transfer authorities legally mandate official guest identification. We collect passport copies solely when required to obtain mandatory entry permits, hotel check-in compliance, or train tickets on your behalf.",
    },
    {
      q: "Who has access to my phone number and travel itinerary?",
      a: "Only your assigned tour coordinator, reserved chauffeur, licensed local monuments guide, and booked accommodations receive your contact information to coordinate seamless airport pickups and hotel welcomes. We strictly never sell or trade contact data with third-party advertisers.",
    },
    {
      q: "How can I disable cookies on this website?",
      a: "You can easily disable or delete cookies at any time through your browser's preferences or privacy settings (under Chrome > Settings > Privacy, Safari > Preferences > Privacy, or Firefox > Options > Privacy & Security). Disabling cookies will not restrict your ability to browse our itineraries or contact our desk.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Policy Navigation Bar & Print Button */}
      <nav
        aria-label="Privacy Sections"
        className="rounded-2xl bg-white p-2.5 sm:p-3 border border-[#EAE0D2] shadow-sm flex flex-wrap items-center justify-between gap-2"
      >
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <a
            href="#who-we-are"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🏢 Who We Are
          </a>
          <a
            href="#information-we-collect"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            📋 Data Collected
          </a>
          <a
            href="#how-we-use-information"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            ⚙️ How We Use It
          </a>
          <a
            href="#who-we-share-with"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🤝 Sharing & Payments
          </a>
          <a
            href="#data-retention"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            ⏳ Data Retention
          </a>
          <a
            href="#your-choices"
            className="rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#7A2318] hover:bg-[#FAF7F2] transition"
          >
            🛡️ Your Rights
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

      {/* Interactive Data Rights & Choices Dispatcher */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <span className="inline-block rounded-full bg-[#7A2318]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7A2318] mb-2">
            Self-Service Data Rights Desk
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink">
            Exercise Your Privacy Rights in 1-Click
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Choose what you would like to do with your data. We prepare a pre-formatted request ready to send to <strong className="text-ink">info@tripsthan.com</strong>.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {requestOptions.map((opt) => {
            const isSelected = requestType === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setRequestType(opt.id)}
                className={`text-left rounded-2xl p-3.5 sm:p-4 transition border ${
                  isSelected
                    ? "bg-[#261E19] text-white border-[#261E19] shadow-md -translate-y-0.5"
                    : "bg-[#FAF7F2] text-stone-700 hover:bg-stone-100 border-[#EAE0D2]"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wide block ${isSelected ? "text-saffron" : "text-stone-500"}`}>
                  Action
                </span>
                <p className={`text-sm font-bold mt-1 ${isSelected ? "text-white" : "text-ink"}`}>
                  {opt.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Action Details & Copy Box */}
        <div className="rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 border border-[#EAE0D2] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base font-bold text-ink">
                {currentOption.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                {currentOption.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyEmailText}
                className="inline-flex items-center gap-1.5 rounded-xl bg-saffron text-white px-3.5 py-2 text-xs font-bold shadow-xs hover:brightness-105 active:scale-95 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:info@tripsthan.com?subject=${encodeURIComponent(currentOption.subject)}&body=${encodeURIComponent(currentOption.body)}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs font-bold text-ink transition active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-[#7A2318]" />
                <span>Open in Email App</span>
              </a>
            </div>
          </div>

          <pre className="rounded-xl bg-white p-4 text-xs font-mono text-stone-800 border border-stone-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {currentOption.body}
          </pre>
        </div>
      </div>

      {/* Frequently Asked Privacy Questions Accordion */}
      <div className="rounded-3xl bg-white border border-[#EAE0D2] p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <span className="inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-2">
            Frequently Asked
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink">
            Privacy & Data Security FAQ
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Learn more about how your private data, payments, and identification records are safeguarded.
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
