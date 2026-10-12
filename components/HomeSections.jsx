"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Info,
  ArrowRight,
  Calendar,
  MessageCircle,
  Route,
  Users,
  Star,
  Globe,
} from "lucide-react";
import PackageCard from "./PackageCard";
import { packages, featured, wa } from "@/lib/data";
import {
  RoadExperienceIcon,
  FleetAcIcon,
  CustomItineraryIcon,
  MultilingualGuidesIcon,
  HonestPricingIcon,
  RoadSupportIcon,
} from "./AnimatedIcons";

const Chip = ({ on, ...p }) => (
  <button
    {...p}
    className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
      on
        ? "border-saffron bg-saffron text-white shadow-2xs"
        : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50"
    }`}
  />
);

/* =========================================================================
   SECTION 2: STATS STRIP - REFINED EXECUTIVE PEARL RIBBON
   Ultra-luxury floating pearl glass ribbon with hairline gold needle dividers,
   cohesive heritage brass medallions, serif typography & elegant micro-tags
   ========================================================================= */
export function StatsStrip() {
  const stats = [
    {
      value: "20+",
      label: "Years on the Road",
      sublabel: "Experienced Chauffeurs",
      tag: "Since 2004",
      tagColor: "text-amber-900 bg-amber-500/10 border-amber-300/60",
      Icon: Route,
    },
    {
      value: "500+",
      label: "Happy Guests",
      sublabel: "100% Private Tours",
      tag: "Solo & Families",
      tagColor: "text-emerald-900 bg-emerald-500/10 border-emerald-300/60",
      Icon: Users,
    },
    {
      value: "4.9",
      label: "Guest Rating",
      sublabel: "Verified Travellers",
      stars: true,
      tagColor: "text-amber-900 bg-amber-500/10 border-amber-300/60",
      Icon: Star,
    },
    {
      value: "All India",
      label: "Tour Service",
      sublabel: "Doorstep Pickup & Drop",
      tag: "Pan-India",
      tagColor: "text-stone-800 bg-stone-200/50 border-stone-300/70",
      Icon: Globe,
    },
  ];

  return (
    <section
      aria-label="Key Milestones"
      className="relative z-20 -mt-9 sm:-mt-11 mx-auto max-w-6xl px-4 sm:px-6"
    >
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFFDFB] via-[#FAF6F0] to-[#F5EFEB] border border-[#BA9366]/35 shadow-[0_22px_50px_-12px_rgba(40,24,15,0.14),0_0_0_1px_rgba(255,255,255,0.9)_inset] overflow-hidden">
        {/* Dual-tone hairline metallic gold accent ribbon */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] via-saffron to-transparent opacity-90" />

        {/* 4 Executive Stats Grid with Needle Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-0 p-3 sm:p-3.5 lg:p-4">
          {stats.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <div
                key={idx}
                className="group relative flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3.5 lg:p-4 rounded-xl lg:rounded-none transition-all duration-300 hover:bg-white/80 border border-[#BA9366]/15 lg:border-none shadow-2xs lg:shadow-none"
              >
                {/* Cohesive Warm Gold Heritage Medallion */}
                <div className="relative grid h-12 w-12 sm:h-13 sm:w-13 place-items-center rounded-2xl bg-gradient-to-br from-[#FFF8EE] via-[#F6EDE2] to-[#ECE0D0] border border-[#BA9366]/35 shadow-xs text-[#7A2318] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-saffron/60 group-hover:shadow-[0_4px_16px_rgba(232,93,4,0.18)]">
                  <span className="absolute inset-0 rounded-2xl bg-saffron/5 group-hover:bg-saffron/10 transition-colors pointer-events-none" />
                  <Icon
                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A2318] transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.9}
                  />
                </div>

                {/* Metric Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#7A2318] tracking-tight leading-none group-hover:text-saffron transition-colors">
                      {s.value}
                    </span>
                    {s.stars ? (
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-300/60">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-2.5 h-2.5 fill-amber-400 text-amber-500"
                          />
                        ))}
                      </div>
                    ) : (
                      s.tag && (
                        <span
                          className={`inline-block text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border leading-none ${s.tagColor}`}
                        >
                          {s.tag}
                        </span>
                      )
                    )}
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-stone-900 mt-1 leading-snug">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium truncate mt-0.5 hidden sm:block">
                    {s.sublabel}
                  </div>
                </div>

                {/* Vertical Needle Divider on Desktop */}
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gradient-to-b from-transparent via-[#BA9366]/35 to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SECTION 3: INTRO SECTION - CUSTOMIZED PRIVATE TRAVEL
   Exact 2-column layout: Left text & button, Right organic travel photo collage
   ========================================================================= */
export function IntroSection() {
  return (
    <section
      id="customized-private-travel"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#EAE0D2] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading, Story & Call-to-Action */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            <span className="inline-block rounded-full bg-[#EFE5DC] px-4 py-1 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#8E2818] mb-3">
              CUSTOMIZED PRIVATE TRAVEL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold text-[#1F1814] tracking-tight leading-[1.15]">
              Your India Tour, Planned Around You
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              <p>
                India is too big and too varied to see from a fixed script. That is why every TripSthan trip is private and built from scratch. You tell us how many days you have, what you love, and how fast you like to travel. We turn that into a day-by-day route with a comfortable vehicle, an experienced driver, and local guides who bring each place to life.
              </p>
              <p>
                Want to see the Taj Mahal in one day, or spend two weeks exploring Rajasthan? Either way, one TripSthan team looks after your car, driver, hotels and guides from the moment you land to your final drop-off. That is how we make it easy for you to travel India without worrying about the details.
              </p>
            </div>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] text-white px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md shadow-orange-950/15 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Info className="w-4 h-4 text-white/90 shrink-0" />
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Real authentic photo from gallery */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[500px]">
              {/* Decorative warm aura glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-saffron/20 via-[#7A2318]/10 to-transparent -z-10 blur-xl opacity-75" />

              {/* Main Photo Card */}
              <div className="relative aspect-[3542/4117] w-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl transition-all duration-500 hover:shadow-stone-900/15 group">
                <Image
                  src="/gallery/tripsthan-img-01.jpg"
                  alt="TripSthan founder Sonu Chouhan on the road with locals in Rajasthan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Top status pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white border border-white/20 shadow-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real Stories from the Road</span>
                  </span>
                </div>

                {/* Bottom glassmorphic info bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 p-4 text-white shadow-lg">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron text-white font-extrabold text-sm shadow-md">
                      20+
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                        Real Connections Across India
                      </p>
                      <p className="text-[11px] sm:text-xs text-stone-200 mt-0.5">
                        With Founder Sonu Chouhan &amp; Local Communities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SECTION 4: POPULAR TOUR PACKAGES (OUR 4 PACKAGES)
   Reduced vertical padding, sleek header button with SVG icon
   ========================================================================= */
export function Offers() {
  return (
    <section className="bg-white py-8 sm:py-12 border-b border-[#EAE0D2] overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-5 w-full max-w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="inline-block rounded-full bg-[#8E2818]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-1.5">
              Featured Itineraries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
              Popular Tour Packages
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl">
              Handcrafted itineraries featuring private AC chauffeur transport, verified local guides, and flexible customization.
            </p>
          </div>
          <Link
            href="/tours"
            className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:border-saffron/40 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-saffron shadow-2xs transition self-start sm:self-auto shrink-0"
          >
            <span>View all packages</span>
            <ArrowRight className="w-3.5 h-3.5 text-saffron transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* The 4 packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-full">
          {featured.map((p, i) => (
            <PackageCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SECTION 5: WHY CHOOSE TRIPSTHAN (6 POINTS WITH ANIMATED ICONS)
   Harmonious spacing, sleek Point badges, compact CTA button
   ========================================================================= */
export function Why() {
  const points = [
    {
      num: "01",
      title: "20+ Years of Real Road Experience",
      text: "Our routes come from years of driving them. We know the best timings, the good rest stops and the roads to avoid, so your journey stays easy.",
      Icon: RoadExperienceIcon,
    },
    {
      num: "02",
      title: "Private AC Fleet: Sedan, SUV and Traveller",
      text: "Clean, air-conditioned vehicles with courteous, experienced drivers, for your group only. Choose a sedan for couples, an SUV for families, or a Traveller for larger groups.",
      Icon: FleetAcIcon,
    },
    {
      num: "03",
      title: "Itineraries Built Around You",
      text: "No fixed templates. Change the days, hotels or stops until the plan feels right for you.",
      Icon: CustomItineraryIcon,
    },
    {
      num: "04",
      title: "Local Guides in Your Language",
      text: "We provide guides in English, French, German, Spanish, Italian, Japanese and more. They share the stories behind each monument and introduce you to the people around it.",
      Icon: MultilingualGuidesIcon,
    },
    {
      num: "05",
      title: "Clear, Honest Pricing",
      text: "You know the cost before you confirm. We also tell you what is worth your time and what you can skip.",
      Icon: HonestPricingIcon,
    },
    {
      num: "06",
      title: "Support on the Road",
      text: "We stay reachable throughout your trip, not only at the time of booking.",
      Icon: RoadSupportIcon,
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-8 sm:py-12 border-b border-[#EAE0D2]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-1.5">
            The TripSthan Standard
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Why Travellers Choose TripSthan
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Twenty years on India’s roads have taught us what makes a trip smooth, comfortable and memorable.
          </p>
        </div>

        {/* 6 Key Points Grid with Animated Vector Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {points.map((p) => {
            const IconComponent = p.Icon;
            return (
              <div
                key={p.num}
                className="group relative rounded-2xl sm:rounded-3xl border border-[#EAE0D2] bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <IconComponent />
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider text-stone-500 group-hover:bg-saffron/15 group-hover:text-saffron transition">
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                    POINT {p.num}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-ink leading-snug group-hover:text-[#7A2318] transition">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Bar with Small Modern Button */}
        <div className="mt-6 sm:mt-7 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Start Planning Your Trip</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   DESTINATIONS (REGIONS)
   ========================================================================= */
export function Destinations() {
  const R = ["Rajasthan", "Uttar Pradesh", "Delhi", "Himachal", "Uttarakhand"];
  const [selectedReg, setSelectedReg] = useState(R[0]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:py-12 overflow-hidden w-full max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 w-full max-w-full">
        <div>
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-1.5">
            Explore By Region
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Popular Destinations
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl">
            Explore India&apos;s most celebrated states with private AC car circuits, door-to-door comfort, and flexible schedules.
          </p>
        </div>
        <Link
          href="/tours"
          className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:border-saffron/40 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-saffron shadow-2xs transition self-start sm:self-auto shrink-0"
        >
          <span>View all destinations</span>
          <ArrowRight className="w-3.5 h-3.5 text-saffron transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Region Filter Chips */}
      <div className="w-full max-w-full overflow-x-auto pb-2 mb-5 flex gap-2 overscroll-x-contain touch-pan-x">
        {R.map((x) => (
          <Chip key={x} on={selectedReg === x} onClick={() => setSelectedReg(x)}>
            {x}
          </Chip>
        ))}
      </div>

      {/* Fully Mobile Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-full">
        {packages
          .filter((p) => p.reg === selectedReg)
          .map((p, i) => (
            <PackageCard key={p.slug} p={p} i={i % 3} />
          ))}
      </div>
    </section>
  );
}

/* =========================================================================
   SERVICES
   ========================================================================= */
export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
      <div className="mb-6">
        <span className="inline-block rounded-full bg-[#8E2818]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-1.5">
          What We Do For You
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
          Complete Private Travel Arrangements
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl">
          From tailored itineraries across India&apos;s Golden Triangle to spotless luxury car rentals with experienced chauffeurs.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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
          <div key={a} className="rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-ink">{a}</h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">{b}</p>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <Link
                href={link}
                className="group inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-2xs hover:bg-[#d45504] transition active:scale-95"
              >
                <span>{linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-stone-700 shadow-2xs transition active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   TESTIMONIALS
   ========================================================================= */
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
    <section className="bg-[#FAF7F2] py-8 sm:py-12 border-t border-[#EAE0D2]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-6 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
            Real Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Stories from Our Travelers
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
            Real experiences from travelers who trusted us with their private journeys across India.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {Q.map(([n, c, t]) => (
            <figure
              key={n}
              className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs transition hover:shadow-md"
            >
              <div>
                <p className="text-amber-500 font-bold text-sm">★★★★★</p>
                <blockquote className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-700">
                  “{t}”
                </blockquote>
              </div>
              <figcaption className="mt-4 border-t border-stone-100 pt-3 text-xs">
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
