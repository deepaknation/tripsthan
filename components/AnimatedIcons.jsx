"use client";

import {
  Route,
  Users,
  Star,
  Globe,
  Compass,
  Car,
  Map,
  Languages,
  ShieldCheck,
  Headphones,
} from "lucide-react";

// =========================================================================
// HOMEPAGE ANIMATED ICONS FOR STATS & VALUE PROPOSITIONS
// Clean, cohesive Lucide icons tailored for TripSthan India Tours
// =========================================================================

// 1. STATS: 20+ Years on the Road
export function RoadStatIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/20 via-[#7A2318]/15 to-transparent border border-amber-500/25 p-2 text-[#7A2318] transition-all duration-300 group-hover:scale-110 group-hover:border-saffron/40 shadow-2xs">
      <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-saffron/10 animate-pulse-ring pointer-events-none" />
      <Route className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A2318] transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// 2. STATS: 500+ Happy Guests
export function GuestsStatIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-600/15 to-transparent border border-emerald-500/25 p-2 text-emerald-700 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40 shadow-2xs">
      <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-emerald-500/10 animate-pulse-ring pointer-events-none" />
      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// 3. STATS: 4.9 Guest Rating
export function RatingStatIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400/25 via-amber-500/15 to-transparent border border-amber-400/30 p-2 text-amber-500 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400/50 shadow-2xs">
      <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-amber-400/15 animate-pulse-ring pointer-events-none" />
      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 fill-amber-400 animate-star-twinkle" strokeWidth={1.5} />
    </div>
  );
}

// 4. STATS: All India Tour Service
export function IndiaServiceStatIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-600/15 to-transparent border border-blue-500/25 p-2 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/40 shadow-2xs">
      <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-blue-500/10 animate-pulse-ring pointer-events-none" />
      <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 1: 20+ Years of Real Road Experience
export function RoadExperienceIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7A2318]/15 via-saffron/10 to-transparent border border-[#7A2318]/20 p-2 text-[#7A2318] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7A2318] group-hover:text-white shadow-2xs">
      <Compass className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 2: Private AC Fleet
export function FleetAcIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500/15 via-cyan-500/10 to-transparent border border-sky-500/20 p-2 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white shadow-2xs">
      <Car className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 3: Itineraries Built Around You
export function CustomItineraryIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent border border-purple-500/20 p-2 text-purple-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-700 group-hover:text-white shadow-2xs">
      <Map className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 4: Local Guides in Your Language
export function MultilingualGuidesIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/20 p-2 text-amber-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white shadow-2xs">
      <Languages className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 5: Clear, Honest Pricing
export function HonestPricingIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/20 p-2 text-emerald-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white shadow-2xs">
      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// WHY POINT 6: Support on the Road
export function RoadSupportIcon() {
  return (
    <div className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500/15 via-[#7A2318]/10 to-transparent border border-rose-500/20 p-2 text-[#7A2318] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7A2318] group-hover:text-white shadow-2xs">
      <Headphones className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2} />
    </div>
  );
}
