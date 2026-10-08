"use client";
import Link from "next/link";
import Img from "./Img";
import Reveal from "./Reveal";
import HighlightedText from "./HighlightedText";

export default function PackageCard({ p, i = 0 }) {
  if (!p) return null;
  const href = "/tours/" + p.slug;

  return (
    <Reveal delay={i * 0.08} className="h-full w-full max-w-full">
      <article className="group flex h-full w-full max-w-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200">
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
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            <svg className="w-3.5 h-3.5 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{p.duration || `${p.days} ${p.days > 1 ? "Days" : "Day"}`}</span>
          </span>

          {/* Region / Category Badge */}
          <span className="absolute right-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {p.reg || p.category || "Tour"}
          </span>

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
            <HighlightedText text={p.overview} />
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

          {/* Tour Package Card Button */}
          <div className="mt-5 border-t border-stone-100 pt-3">
            <Link
              href={href}
              className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-saffron bg-[#FFF5EC] px-5 py-2.5 text-xs sm:text-sm font-bold text-saffron shadow-sm transition-all duration-300 hover:bg-saffron hover:text-white hover:shadow-md active:scale-95"
            >
              <span>Explore Tour Package</span>
              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover/btn:translate-x-1.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
