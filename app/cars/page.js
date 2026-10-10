"use client";
import Image from "next/image";
import Link from "next/link";
import Parallax from "@/components/Parallax";
import { FLEET } from "@/lib/cars";
import { C, tel, wa } from "@/lib/data";

export default function CarServicePage() {
  const getWaLink = (vehicleName) =>
    `${wa}?text=${encodeURIComponent(
      `Hello TripSthan, I would like to inquire about booking the ${vehicleName} with driver for my trip. Please share availability and best quote.`
    )}`;

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Visual Photo Banner */}
      <Parallax
        img="/cars/force-urbania.jpg"
        priority
        h="min-h-[46vh] sm:min-h-[52vh]"
      >
        <div className="mx-auto max-w-4xl text-center px-4">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/25 mb-3.5 shadow-sm">
            TripSthan Fleet & Chauffeur Hire
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Hire Luxury Car & Tempo Traveller
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed drop-shadow">
            Travel India your way with our spotless, well-maintained fleet and verified English-speaking chauffeurs. Every booking includes <strong className="text-amber-300 font-semibold">Driver, State Taxes, Fuel, Tolls, and Doorstep Pickup/Drop</strong>.
          </p>
        </div>
      </Parallax>

      {/* Value Badges with Real SVG Vector Icons */}
      <section className="relative z-10 -mt-8 sm:-mt-10 mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            {
              title: "All Inclusive",
              desc: "Driver + Fuel + Taxes + Tolls",
              iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
            },
            {
              title: "Expert Chauffeurs",
              desc: "Courteous & Route Experts",
              iconBg: "bg-amber-50 text-amber-700 border border-amber-200/60",
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <path strokeLinecap="round" d="M12 3v6m0 6v6M3 12h6m6 0h6" />
                </svg>
              ),
            },
            {
              title: "Chilled Dual AC",
              desc: "Spotless Sanitized Cabins",
              iconBg: "bg-sky-50 text-sky-600 border border-sky-200/60",
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18m-4.5-6.5l-9 9m0-9l9 9" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              ),
            },
            {
              title: "Doorstep Service",
              desc: "Airport, Hotel & Home Pickup",
              iconBg: "bg-rose-50 text-[#8E2818] border border-rose-200/60",
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-4 sm:p-5 shadow-lg border border-[#EAE0D2] flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-0.5 duration-200"
            >
              <div className={`grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl ${b.iconBg}`}>
                {b.icon}
              </div>
              <p className="mt-2.5 text-xs sm:text-sm font-bold text-ink">{b.title}</p>
              <p className="mt-0.5 text-[11px] sm:text-xs text-stone-500 leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-ink">Choose Your Perfect Travel Vehicle</h2>
          <p className="mt-2 text-sm sm:text-base text-body max-w-2xl mx-auto">
            From comfortable city sedans for couples to luxury Innova Crysta and 17-seat Force Urbania for group travel.
          </p>
        </div>

        {/* Vehicles Grid - All 4 Curated Options (No Filter Buttons) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FLEET.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#EAE0D2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#261E19]/85 backdrop-blur px-3.5 py-1 text-xs font-semibold text-white shadow">
                  {vehicle.categoryName}
                </span>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-ink shadow">
                    👥 {vehicle.passengers}
                  </span>
                  <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-ink shadow">
                    🧳 {vehicle.luggage}
                  </span>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-[#8E2818] transition">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-saffron">{vehicle.tagline}</p>
                  <p className="mt-3 text-sm text-body leading-relaxed">{vehicle.overview}</p>

                  {/* Highlights Grid */}
                  <div className="mt-5 rounded-xl bg-[#FBF8F2] p-4 border border-[#EAE0D2]/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#6B5E52] mb-2.5">
                      Service Inclusions & Features:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink font-medium">
                      {vehicle.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Callout */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-body">
                    <span className="font-bold text-[#8E2818] shrink-0">Best For:</span>
                    <span>{vehicle.idealFor}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-line">
                  <a
                    href={getWaLink(vehicle.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white px-5 py-2.5 text-sm font-semibold transition shadow-sm active:scale-95"
                  >
                    <span>Instant WhatsApp Quote</span>
                    <span>→</span>
                  </a>
                  <a
                    href={tel(C.phones[0])}
                    className="inline-flex items-center justify-center rounded-full border border-line bg-white hover:bg-stone-50 px-4 py-2.5 text-sm font-semibold text-ink transition active:scale-95"
                  >
                    Call Driver Desk
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Booking Assurance Banner */}
      <section className="bg-[#261E19] text-white py-16 px-5">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold !text-white">Planning a Multi-City Circuit or Custom Tour?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you need a Same Day Taj Mahal round trip by car from Delhi, a 5-Day Golden Triangle private cab, or a luxury Force Urbania for your corporate group, we customize routes to your exact schedule.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${wa}?text=${encodeURIComponent("Hello TripSthan, I need a custom itinerary with car and driver.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#D44F00] text-white px-8 py-3.5 text-base font-semibold shadow-lg transition"
            >
              Get Custom Itinerary on WhatsApp
              <span>→</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 hover:border-white px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
