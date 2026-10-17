import { Phone, Mail, Building2, Plane, ShieldCheck, MessageCircle } from "lucide-react";
import { C, tel, wa } from "@/lib/data";

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* DETAILS HEADING - H2 TAG */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
          <span>Direct Travel Concierge</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
          Connect directly with our tour coordinators. Whether you need a full customized
          India tour or just a comfortable private car with driver, we are ready to assist.
        </p>
      </div>

      {/* CONTACT INFO CARDS GRID */}
      <div className="space-y-4">
        {/* PHONE CARD */}
        <div className="rounded-2xl border border-[#EAE0D2] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
              <Phone className="h-6 w-6 stroke-current stroke-2" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Phone &amp; WhatsApp
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                Call or Message Directly
              </h3>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base font-semibold text-saffron">
                <a
                  href={tel(C.phones[0])}
                  className="hover:underline flex items-center gap-1.5"
                >
                  <span>{C.phones[0]}</span>
                </a>
                <span className="hidden sm:inline text-stone-300">|</span>
                <a
                  href={tel(C.phones[1])}
                  className="hover:underline flex items-center gap-1.5"
                >
                  <span>{C.phones[1]}</span>
                </a>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition active:scale-95"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Message on WhatsApp</span>
                </a>
                <span className="text-xs text-stone-500">
                  Quick replies for urgent travel and same-day car hire.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EMAIL CARD */}
        <div className="rounded-2xl border border-[#EAE0D2] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
              <Mail className="h-6 w-6 stroke-current stroke-2" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Official Email
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                Send Plans &amp; Custom Requests
              </h3>
              <div className="mt-1.5 space-y-1">
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${C.emails[0]}`}
                    className="text-sm sm:text-base font-bold text-saffron hover:underline break-all"
                  >
                    {C.emails[0]}
                  </a>
                  <span className="rounded bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wide">
                    Professional
                  </span>
                </div>
                {C.emails[1] && (
                  <div>
                    <a
                      href={`mailto:${C.emails[1]}`}
                      className="text-xs sm:text-sm text-stone-600 hover:text-saffron hover:underline break-all"
                    >
                      {C.emails[1]}
                    </a>
                  </div>
                )}
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Official bookings, custom quotes, and day-by-day travel documentation.
              </p>
            </div>
          </div>
        </div>

        {/* OFFICE CARD */}
        <div className="rounded-2xl border border-[#EAE0D2] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
              <Building2 className="h-6 w-6 stroke-current stroke-2" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Office Address
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                Head Operations Desk
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-semibold text-[#3B2D24] leading-relaxed">
                226, Maidangarhi, New Delhi 110068
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Delhi NCR base for tour planning, driver coordination and trip
              </p>
            </div>
          </div>
        </div>

        {/* AIRPORT HUB CARD */}
        <div className="rounded-2xl border border-[#EAE0D2] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <Plane className="h-6 w-6 stroke-current stroke-2" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Airport Logistics Hub
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                Delhi NCR Airport Pickup Hub
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-semibold text-[#3B2D24] leading-relaxed">
                Terminal 1, Terminal 2 &amp; Terminal 3 Coordination
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Nameboard meet &amp; greet, real-time flight tracking, and seamless airport transfers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY WRITE TO US QUICK TRUST BOX */}
      <div className="rounded-2xl bg-gradient-to-br from-[#261E19] to-[#1A1A1A] p-6 text-white shadow-lg">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-saffron shrink-0" />
          <span>Our Direct Commitment</span>
        </h4>
        <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-stone-300">
          <li className="flex items-start gap-2">
            <span className="text-saffron font-bold text-base leading-none">&bull;</span>
            <span>
              <strong>Clear Price:</strong> Includes AC vehicle, experienced chauffeur, fuel, tolls, state road permits, and parking.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-saffron font-bold text-base leading-none">&bull;</span>
            <span>
              <strong>Travel Your Way:</strong> Stop where you wish for photos, meals and sightseeing, with a route planned around you.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-saffron font-bold text-base leading-none">&bull;</span>
            <span>
              <strong>20+ Years Experience:</strong> Supervised by founder Sonu Chouhan with trusted drivers on North India roads.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
