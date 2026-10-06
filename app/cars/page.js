"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLEET, FLEET_CATEGORIES } from "@/lib/cars";
import { C, tel, wa } from "@/lib/data";

export default function CarServicePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFleet =
    activeCategory === "all"
      ? FLEET
      : FLEET.filter((car) => car.category === activeCategory);

  const getWaLink = (vehicleName) =>
    `${wa}?text=${encodeURIComponent(
      `Hello TripSthan, I would like to inquire about booking the ${vehicleName} with driver for my trip. Please share availability and best quote.`
    )}`;

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F7EFE4] py-16 sm:py-20 border-b border-[#EAE0D2]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#8E2818]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8E2818]">
            TripSthan Fleet & Chauffeur Hire
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#8E2818] sm:text-5xl lg:text-6xl">
            Hire Luxury Car & Tempo Traveller
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#4A3E35] sm:text-lg leading-relaxed">
            Travel India your way with our spotless, well-maintained fleet and verified English-speaking chauffeurs. Every booking includes <strong>Driver, State Taxes, Fuel, Tolls, and Doorstep Pickup/Drop</strong>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${wa}?text=${encodeURIComponent("Hello Tripsthan, I would like to book a car / tempo traveller.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#8E2818] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#8E2818]/25 transition hover:bg-[#721F11]"
            >
              Enquire on WhatsApp
              <span>→</span>
            </a>
            <a
              href={tel(C.phones[0])}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#8E2818]/30 bg-white px-7 py-3.5 text-base font-semibold text-[#8E2818] shadow-sm transition hover:border-[#8E2818] hover:bg-stone-50"
            >
              Call Us: {C.phones[0]}
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
            {[
              { icon: "🛡️", title: "All Inclusive", desc: "Driver + Fuel + Taxes + Tolls" },
              { icon: "👨‍✈️", title: "Expert Chauffeurs", desc: "Courteous & Route Experts" },
              { icon: "❄️", title: "Chilled Dual AC", desc: "Spotless Sanitized Cabins" },
              { icon: "📍", title: "Doorstep Service", desc: "Airport, Hotel & Home Pickup" },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-white/80 p-3.5 shadow-sm border border-[#EAE0D2]">
                <span className="text-2xl">{b.icon}</span>
                <p className="mt-1 text-sm font-bold text-ink">{b.title}</p>
                <p className="text-xs text-body">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-ink">Choose Your Perfect Travel Vehicle</h2>
          <p className="mt-2 text-sm sm:text-base text-body">
            From city sedans for couples to luxury 17-seat Urbania and 26-seat Travellers for large family delegations.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {FLEET_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? FLEET.length
                  : FLEET.filter((c) => c.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#8E2818] text-white shadow-md shadow-[#8E2818]/25 scale-105"
                      : "bg-white text-ink border border-line hover:border-[#8E2818]/50 hover:bg-stone-50"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredFleet.map((vehicle) => (
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
