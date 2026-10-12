import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Wind, MapPin, Users, Check, ArrowRight, Phone } from "lucide-react";
import Parallax from "@/components/Parallax";
import CarFaq from "@/components/CarFaq";
import { FLEET } from "@/lib/cars";
import { C, tel, wa } from "@/lib/data";

export const metadata = {
  title: "Car Hire with Driver in India | Dzire, Innova Crysta, Force Urbania | TripSthan",
  description:
    "Hire a private car with driver in India. Choose a Swift Dzire, Innova Crysta or Force Urbania Traveller. Fuel, taxes, tolls and doorstep pickup included.",
  keywords: [
    "car hire with driver in India",
    "Swift Dzire car hire with driver",
    "Toyota Innova Crysta hire India",
    "Force Urbania Traveller hire India",
    "private chauffeur car India",
    "Delhi Agra car hire with driver",
    "Rajasthan tour car rental",
  ],
  alternates: {
    canonical: "/cars",
  },
  openGraph: {
    title: "Car Hire with Driver in India | Dzire, Innova Crysta, Force Urbania | TripSthan",
    description:
      "Hire a private car with driver in India. Choose a Swift Dzire, Innova Crysta or Force Urbania Traveller. Fuel, taxes, tolls and doorstep pickup included.",
    type: "website",
    url: "/cars",
  },
};

export default function CarServicePage() {
  const getWaQuoteLink = (vehicleName) =>
    `${wa}?text=${encodeURIComponent(
      `Hello TripSthan, I would like to get a quote for hiring the ${vehicleName} with driver for my trip. Please share availability and best price.`
    )}`;

  const customPlanWaLink = `${wa}?text=${encodeURIComponent(
    "Hello TripSthan, I am planning a multi-city trip in India and would like to get a custom plan and clear price with car and driver."
  )}`;

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* HERO SECTION */}
      <Parallax
        img="/cars/force-urbania.jpg"
        priority
        h="min-h-[48vh] sm:min-h-[54vh]"
      >
        <div className="mx-auto max-w-4xl text-center px-4">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/25 mb-3.5 shadow-sm">
            TRIPSTHAN FLEET & CHAUFFEUR HIRE
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Car Hire with Driver in India: Cars & Urbania Traveller
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/95 leading-relaxed drop-shadow font-medium">
            Travel India your way in a clean, well-kept vehicle with an experienced, English-speaking driver. Every booking includes the driver, fuel, state taxes, tolls and doorstep pickup and drop.
          </p>
        </div>
      </Parallax>

      {/* 4 FEATURE PILLS / CARDS */}
      <section aria-label="Key Service Features" className="relative z-10 -mt-8 sm:-mt-10 mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            {
              title: "All Inclusive",
              desc: "Driver, fuel, taxes and tolls",
              iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
              icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              title: "Experienced Drivers",
              desc: "Courteous and route-savvy",
              iconBg: "bg-amber-50 text-amber-700 border border-amber-200/60",
              icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              title: "Air-Conditioned Cabins",
              desc: "Cleaned before every trip",
              iconBg: "bg-sky-50 text-sky-600 border border-sky-200/60",
              icon: <Wind className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              title: "Doorstep Service",
              desc: "Airport, hotel and home pickup",
              iconBg: "bg-rose-50 text-[#8E2818] border border-rose-200/60",
              icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-4 sm:p-5 shadow-lg border border-[#EAE0D2] flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-0.5 duration-200"
            >
              <div className={`grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl ${item.iconBg}`}>
                {item.icon}
              </div>
              <p className="mt-2.5 text-xs sm:text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-0.5 text-[11px] sm:text-xs text-stone-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHOOSE YOUR VEHICLE SECTION */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-3">
            Handpicked Sanitized Fleet
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Choose the Right Vehicle for Your Trip
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Pick a Dzire for couples, an Innova Crysta for families, or a Force Urbania Traveller for a larger group.
          </p>
        </div>

        {/* 3 VEHICLES GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FLEET.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-[#EAE0D2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vehicle Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#261E19]/85 backdrop-blur px-3 py-1 text-xs font-semibold text-white shadow">
                  {vehicle.categoryName}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-ink shadow inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-stone-600" />
                  <span>{vehicle.capacity}</span>
                </span>
              </div>

              {/* Vehicle Information Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-[#8E2818] transition tracking-tight">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-saffron leading-snug">
                    {vehicle.tagline}
                  </p>
                  <p className="mt-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {vehicle.overview}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 rounded-2xl bg-[#FBF8F2] p-4 border border-[#EAE0D2]/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#6B5E52] mb-2.5">
                      Included Features:
                    </p>
                    <ul className="space-y-2 text-xs text-ink font-medium">
                      {vehicle.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For Section */}
                  <div className="mt-4 rounded-xl bg-stone-50 p-3 border border-stone-200/60 text-xs text-stone-700 leading-relaxed">
                    <strong className="text-[#8E2818] font-bold block mb-0.5">Best For:</strong>
                    <span>{vehicle.bestFor}</span>
                  </div>
                </div>

                {/* Dual Call to Action Buttons */}
                <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-line">
                  <a
                    href={getWaQuoteLink(vehicle.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition shadow-sm active:scale-95 text-center"
                  >
                    <span>Get a Quote on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={tel(C.phones[0])}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink transition active:scale-95 text-center"
                  >
                    <Phone className="w-4 h-4 text-[#7A2318]" />
                    <span>Call Our Driver Desk</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CUSTOM ITINERARY SECTION */}
      <section className="bg-gradient-to-r from-[#261E19] via-[#332720] to-[#261E19] text-white py-16 px-5 border-y border-stone-800">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-saffron/20 border border-saffron/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] mb-3">
            Customised Private Travel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Planning a Multi-City Trip?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
            Whether you need a same-day Taj Mahal round trip from Delhi, a 5-day Golden Triangle journey, or a Traveller for your group across Rajasthan, we shape the route around your schedule. Tell us your dates and stops, and we will send a plan and a clear price.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={customPlanWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#D44F00] text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg transition active:scale-95"
            >
              <span>Get a Custom Plan on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 hover:border-white px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10 active:scale-95"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>

      {/* CAR HIRE FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-2.5">
            Clear & Upfront Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Car Hire in India: Common Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            Everything you need to know about inclusions, vehicles, driver languages, and booking.
          </p>
        </div>

        {/* Interactive FAQ Component */}
        <CarFaq />
      </section>
    </main>
  );
}
