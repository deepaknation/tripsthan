"use client";

import {
  Mail,
  BarChart3,
  Clock,
  RefreshCw,
  ClipboardList,
  Send,
  CalendarCheck,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Building2,
  LogOut,
  Calendar,
  CreditCard,
  Calculator,
  Phone,
  MapPin,
  Lightbulb,
} from "lucide-react";

// =========================================================================
// PREMIUM ANIMATED ICONS FOR REFUND & CANCELLATION POLICY
// Cohesive Lucide icons tailored for TripSthan Heritage & Private Tours
// =========================================================================

// 1. HIGHLIGHT: Written Email Required
export function WrittenNoticeHighlightIcon() {
  return (
    <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose-500/15 via-[#7A2318]/10 to-transparent p-2 text-[#7A2318] transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-rose-500/10 animate-pulse-ring pointer-events-none" />
      <Mail className="h-6 w-6 text-[#7A2318] transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.8} />
    </div>
  );
}

// 2. HIGHLIGHT: Tiered Charges
export function TierChargesHighlightIcon() {
  return (
    <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent p-2 text-amber-700 transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-amber-500/10 animate-pulse-ring pointer-events-none" />
      <BarChart3 className="h-6 w-6 text-amber-700 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.8} />
    </div>
  );
}

// 3. HIGHLIGHT: 15–20 Working Days
export function RefundSpeedHighlightIcon() {
  return (
    <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent p-2 text-emerald-700 transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-emerald-500/10 animate-pulse-ring pointer-events-none" />
      <Clock className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.8} />
    </div>
  );
}

// 4. HIGHLIGHT: Reschedule Flexible
export function RescheduleFlexibleHighlightIcon() {
  return (
    <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent p-2 text-blue-700 transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse-ring pointer-events-none" />
      <RefreshCw className="h-6 w-6 text-blue-700 animate-spin-slow" strokeWidth={1.8} />
    </div>
  );
}

// STEP 1: Gather Details
export function Step1GatherIcon() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-amber-500/15 text-amber-800 transition-transform duration-300 group-hover:scale-110">
      <ClipboardList className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// STEP 2: Send Written Email
export function Step2EmailIcon() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-rose-500/15 text-[#7A2318] transition-transform duration-300 group-hover:scale-110">
      <Send className="w-5 h-5 text-[#7A2318] animate-airplane-glide" strokeWidth={2} />
    </div>
  );
}

// STEP 3: Effective Date Recorded
export function Step3DateRecordedIcon() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
      <CalendarCheck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />
    </div>
  );
}

// TIER 1: 60+ Days (Shield)
export function Tier1ShieldIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
      <span className="absolute inset-0 rounded-xl bg-emerald-500/15 animate-pulse-ring pointer-events-none" />
      <ShieldCheck className="w-5 h-5 text-emerald-800" strokeWidth={2} />
    </div>
  );
}

// TIER 2: 30-59 Days (Clock / Balance)
export function Tier2ClockIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-amber-500/15 text-amber-800 transition-transform duration-300 group-hover:scale-110">
      <span className="absolute inset-0 rounded-xl bg-amber-500/15 animate-pulse-ring pointer-events-none" />
      <Clock className="w-5 h-5 text-amber-800" strokeWidth={2} />
    </div>
  );
}

// TIER 3: 15-29 Days (Alert Triangle)
export function Tier3AlertIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-orange-500/15 text-orange-800 transition-transform duration-300 group-hover:scale-110">
      <span className="absolute inset-0 rounded-xl bg-orange-500/15 animate-pulse-ring pointer-events-none" />
      <AlertTriangle className="w-5 h-5 text-orange-800" strokeWidth={2} />
    </div>
  );
}

// TIER 4: Under 15 Days (Locked / Restricted)
export function Tier4LockIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-rose-500/15 text-rose-800 transition-transform duration-300 group-hover:scale-110">
      <span className="absolute inset-0 rounded-xl bg-rose-500/15 animate-pulse-ring pointer-events-none" />
      <Lock className="w-5 h-5 text-rose-800" strokeWidth={2} />
    </div>
  );
}

// ADDITIONAL TERMS 1: Unused Services (Heritage Hotel)
export function HotelNightIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-amber-500/15 text-[#7A2318] transition-transform duration-300 group-hover:scale-110">
      <Building2 className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// ADDITIONAL TERMS 2: Early Departure
export function EarlyDepartureIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-rose-500/15 text-[#7A2318] transition-transform duration-300 group-hover:scale-110">
      <LogOut className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
    </div>
  );
}

// ADDITIONAL TERMS 3: Refund Timeline (Calendar/Clock)
export function TimelineIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-blue-500/15 text-blue-700 transition-transform duration-300 group-hover:scale-110">
      <Calendar className="w-5 h-5 text-blue-700 animate-pulse-ring" strokeWidth={2} />
    </div>
  );
}

// ADDITIONAL TERMS 4: Banking & Gateway Fees
export function BankFeeIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700 transition-transform duration-300 group-hover:scale-110">
      <CreditCard className="w-5 h-5 text-emerald-700 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />
    </div>
  );
}

// ADDITIONAL TERMS 5: Net Amount Basis
export function CalculatorNetIcon() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-purple-500/15 text-purple-700 transition-transform duration-300 group-hover:scale-110">
      <Calculator className="w-5 h-5 text-purple-700 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
    </div>
  );
}

// CONTACT US 1: Written Cancellations Email
export function AnimatedEmailIcon() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-rose-500/15 via-[#7A2318]/10 to-transparent p-2.5 text-[#7A2318] transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-rose-500/15 animate-pulse-ring pointer-events-none" />
      <Mail className="h-6 w-6 text-[#7A2318] transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.8} />
    </div>
  );
}

// CONTACT US 2: Direct Helpline Telephone
export function AnimatedHelplineIcon() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent p-2.5 text-emerald-700 transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-emerald-500/15 animate-pulse-ring pointer-events-none" />
      <Phone className="h-6 w-6 text-emerald-700 animate-phone-ring" strokeWidth={1.9} />
    </div>
  );
}

// CONTACT US 3: Head Office Location Pin
export function AnimatedOfficePinIcon() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 via-[#7A2318]/10 to-transparent p-2.5 text-blue-700 transition-all duration-300 group-hover:scale-110 shadow-xs">
      <span className="absolute inset-0 rounded-2xl bg-blue-500/15 animate-pulse-ring pointer-events-none" />
      <MapPin className="h-6 w-6 text-blue-700 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.9} />
    </div>
  );
}

// GLOWING BULB for recommendations
export function GlowingBulbIcon() {
  return (
    <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-amber-400/20 text-amber-600 shrink-0">
      <Lightbulb className="w-5 h-5 text-amber-500 animate-bulb-glow" strokeWidth={2} />
    </div>
  );
}
