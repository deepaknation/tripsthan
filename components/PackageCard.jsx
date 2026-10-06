"use client";
import Link from "next/link";
import Img from "./Img";
import Reveal from "./Reveal";
import { wa } from "@/lib/data";

export default function PackageCard({ p, i = 0 }) {
  if (!p) return null;
  const href = "/tours/" + p.slug;
  const waLink = `${wa}?text=${encodeURIComponent(
    `Hello TripSthan, I would like to inquire about the "${p.title}" (${p.duration || p.days + " Days"}). Please share details and best price quote.`
  )}`;

  return (
    <Reveal delay={i * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200">
        {/* Card Image Header */}
        <Link href={href} className="relative block h-52 overflow-hidden bg-stone-100" aria-label={p.title}>
          <Img
            src={p.img}
            alt={p.title}
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Duration Badge */}
          <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            ⏱️ {p.duration || `${p.days} ${p.days > 1 ? "Days" : "Day"}`}
          </span>

          {/* Region / Category Badge */}
          <span className="absolute right-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {p.reg || p.category || "Tour"}
          </span>

          {/* Starting Price / Tag on Image Bottom */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
            <span className="font-medium bg-black/40 backdrop-blur px-2.5 py-1 rounded-md">
              ✓ Private AC Cab & Driver
            </span>
            {p.price && p.price !== "On request" ? (
              <span className="font-bold text-amber-300 text-sm drop-shadow">
                {p.price}
              </span>
            ) : null}
          </div>
        </Link>

        {/* Card Body */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold leading-snug text-ink transition-colors duration-200 group-hover:text-saffron">
            <Link href={href} className="hover:underline">
              {p.title}
            </Link>
          </h3>

          {/* Overview snippet */}
          <p className="mt-2.5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-stone-600">
            {p.overview}
          </p>

          {/* Quick Highlights Snippets (First 2 highlights) */}
          {p.highlights && p.highlights.length > 0 && (
            <ul className="mt-3.5 space-y-1.5 border-t border-stone-100 pt-3 text-xs text-stone-700">
              {p.highlights.slice(0, 2).map((h, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span className="truncate">{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Action CTAs */}
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-stone-100 pt-3">
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-full bg-saffron px-3 py-2 text-xs sm:text-sm font-semibold text-white transition hover:brightness-95 active:scale-95 text-center shadow-sm"
            >
              Itinerary Details →
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-600/40 bg-emerald-50 px-3 py-2 text-xs sm:text-sm font-semibold text-emerald-800 transition hover:bg-emerald-600 hover:text-white active:scale-95 text-center"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
