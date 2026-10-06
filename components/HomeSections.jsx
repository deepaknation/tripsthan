"use client";
import { useState } from "react";
import Link from "next/link";
import PackageCard from "./PackageCard";
import { packages, featured, wa } from "@/lib/data";

const Chip = ({ on, ...p }) => (
  <button
    {...p}
    className={`shrink-0 rounded-full border px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
      on
        ? "border-saffron bg-saffron text-white shadow-sm"
        : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50"
    }`}
  />
);

const Head = ({ t, s }) => (
  <div className="mb-8">
    <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-2">
      Curated Packages
    </span>
    <h2 className="text-2xl sm:text-4xl font-extrabold text-ink">{t}</h2>
    {s && <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">{s}</p>}
  </div>
);

export function Offers() {
  const T = [
    "All Special Offers",
    "Golden Triangle",
    "Rajasthan Heritage",
    "Himachal & Mountains",
    "Day & Short Tours",
  ];
  const [activeTab, setActiveTab] = useState(T[0]);

  const getFilteredList = () => {
    if (activeTab === "All Special Offers") return featured;
    if (activeTab === "Golden Triangle")
      return packages.filter((p) => p.category === "Golden Triangle" || p.slug.includes("golden-triangle"));
    if (activeTab === "Rajasthan Heritage")
      return packages.filter((p) => p.reg === "Rajasthan");
    if (activeTab === "Himachal & Mountains")
      return packages.filter((p) => p.reg === "Himachal" || p.reg === "Uttarakhand" || p.category === "Himachal & Mountains");
    if (activeTab === "Day & Short Tours")
      return packages.filter((p) => p.days <= 2 || p.category === "Day Tours");
    return packages;
  };

  const list = getFilteredList();

  return (
    <>
      <div className="border-b border-[#EAE0D2] bg-white sticky top-[68px] z-30 shadow-xs">
        <div className="mx-auto flex max-w-6xl gap-2.5 overflow-x-auto px-5 py-4 scrollbar-none">
          {T.map((x) => (
            <Chip key={x} on={activeTab === x} onClick={() => setActiveTab(x)}>
              {x}
            </Chip>
          ))}
        </div>
      </div>

      <section className="bg-[#FAF7F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Head
            t="Our Special Offers"
            s="Handcrafted itineraries featuring private AC chauffeur transport, verified local guides, and flexible customization."
          />

          {list.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p, i) => (
                <PackageCard key={activeTab + p.slug} p={p} i={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center">
              <p className="text-stone-600">
                Looking for a tailored route?{" "}
                <a
                  className="font-bold text-saffron underline hover:text-[#721F11]"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask us for a free customized plan on WhatsApp.
                </a>
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95"
            >
              View All Tour Packages ({packages.length}+)
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function Destinations() {
  const R = ["Rajasthan", "Uttar Pradesh", "Delhi", "Himachal", "Uttarakhand"];
  const [selectedReg, setSelectedReg] = useState(R[0]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <Head
          t="Popular Destinations"
          s="Explore India's most celebrated states with private AC car circuits, door-to-door comfort, and flexible schedules."
        />
        <Link
          href="/tours"
          className="mb-8 text-sm font-bold text-saffron hover:underline whitespace-nowrap"
        >
          View all destinations →
        </Link>
      </div>

      <div className="-mt-2 mb-8 flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {R.map((x) => (
          <Chip key={x} on={selectedReg === x} onClick={() => setSelectedReg(x)}>
            {x}
          </Chip>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages
          .filter((p) => p.reg === selectedReg)
          .map((p, i) => (
            <PackageCard key={p.slug} p={p} i={i % 3} />
          ))}
      </div>
    </section>
  );
}

const W = [
  [
    "Expert Local Guides",
    "Our certified guides know every hidden gem. Experience India like a local with deep cultural insights, not as a rushed tourist.",
  ],
  [
    "100% Customizable Tours",
    "Build your perfect trip from scratch. Choose durations, private vehicles, heritage stays, and offbeat stops according to your schedule.",
  ],
  [
    "Best Price & Transparent Guarantee",
    "All inclusive pricing with Driver, Fuel, Tolls, and State Taxes. No hidden charges or surprise extras.",
  ],
  [
    "24/7 Dedicated Chauffeur & Travel Support",
    "Round-the-clock assistance throughout your journey. Chauffeur on standby and immediate helpline support.",
  ],
];

export function Why() {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#EAE0D2]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div
          className="relative h-80 sm:h-96 overflow-hidden rounded-3xl bg-dark bg-cover bg-center shadow-lg lg:h-[30rem]"
          style={{ backgroundImage: "url(/why-choose-tripsthan.jpg)" }}
        >
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur p-5 shadow-lg border border-stone-200/60">
            <div>
              <b className="text-base sm:text-lg text-ink font-bold">5,000+ travelers</b>
              <p className="text-xs text-stone-500">trust TripSthan every single year</p>
            </div>
            <div className="text-right">
              <b className="text-2xl sm:text-3xl text-saffron font-extrabold">4.9 / 5</b>
              <p className="text-xs text-stone-500">average verified rating</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-3">
            Why Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight">
            Why Choose TripSthan for Your Next Adventure
          </h2>
          <ul className="mt-8 space-y-6">
            {W.map(([a, b], i) => (
              <li key={a} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-saffron text-sm font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{a}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">{b}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#8E2818] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition hover:bg-[#721F11] mt-8"
          >
            Start Planning Your Trip
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Head
        t="What We Do For You"
        s="From tailored itineraries across India's Golden Triangle to spotless luxury car rentals with experienced chauffeurs."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {[
          [
            "Private & Customized Tours",
            "Build an unforgettable experience with help of multiple local expert agents. Add offbeat attractions, choose local cuisines, and add authentic activities. Best priced packages for your holiday duration with private AC cars.",
            "/tours",
            "Explore Tours",
          ],
          [
            "Luxury Car & Tempo Traveller Hire",
            "We provide well-maintained sedans, SUVs, and luxury Tempo Travellers for tourists. Every vehicle booking includes courteous driver, fuel, interstate taxes, and doorstep pickup/drop.",
            "/cars",
            "View Our Fleet",
          ],
        ].map(([a, b, link, linkText]) => (
          <div key={a} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-ink">{a}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{b}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={link}
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:brightness-105"
              >
                {linkText} →
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Quick WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Q = [
  [
    "Priya Sharma",
    "Mumbai",
    "The Rajasthan tour was beyond amazing. Every detail was perfectly planned and our driver and guides were incredibly knowledgeable. Highly recommend TripSthan!",
  ],
  [
    "Arjun Mehta",
    "Bangalore",
    "Wildlife safari at Ranthambore was the highlight of our journey. Spotted tigers in zone 3! The car was immaculate and the chauffeur was courteous.",
  ],
  [
    "Sarah Johnson",
    "London, UK",
    "As an international solo traveler, I felt completely safe and well looked after. The Golden Triangle tour was expertly curated. Will definitely book again!",
  ],
];

export function Testimonials() {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 border-t border-[#EAE0D2]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Real Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink">
            Stories from Our Travelers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Real experiences from travelers who trusted us with their private journeys across India.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Q.map(([n, c, t]) => (
            <figure
              key={n}
              className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div>
                <p className="text-amber-500 font-bold text-lg">★★★★★</p>
                <blockquote className="mt-3 text-sm leading-relaxed text-stone-700">
                  “{t}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-stone-100 pt-4 text-xs sm:text-sm">
                <b className="text-ink font-bold block">{n}</b>
                <span className="text-stone-500">{c}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
