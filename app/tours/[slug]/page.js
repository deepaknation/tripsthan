import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import PackageCard from "@/components/PackageCard";
import { packages, wa, C, tel } from "@/lib/data";

export const generateStaticParams = () => packages.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const p = packages.find((x) => x.slug === params.slug);
  if (!p) return { title: "Tour Not Found – TripSthan" };
  return {
    title: `${p.title} – TripSthan`,
    description: p.overview ? p.overview.slice(0, 160) : "Book your private India tour with TripSthan.",
  };
}

export default function TourDetailPage({ params }) {
  const p = packages.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const related = packages.filter((x) => x.slug !== p.slug).slice(0, 3);
  const waLink = `${wa}?text=${encodeURIComponent(
    `Hello TripSthan, I would like to book / inquire about the "${p.title}" (${p.duration || p.days + " Days"}). Please share availability and best price quote.`
  )}`;

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#261E19] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={p.hero}
            alt={p.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814] via-[#1F1814]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-24">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/70">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-white transition">Tours & Packages</Link>
            <span>/</span>
            <span className="text-amber-300 truncate max-w-xs">{p.title}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-saffron px-3.5 py-1 text-xs font-bold text-white shadow-sm">
              ⏱️ {p.duration || `${p.days} Days`}
            </span>
            <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
              📍 {p.reg || "India"}
            </span>
            <span className="rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 text-xs font-semibold">
              ⭐ 4.9 (280+ Reviews)
            </span>
            <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-xs font-semibold">
              ✓ 100% Private & Customizable
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white max-w-4xl drop-shadow-md">
            {p.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/85 leading-relaxed drop-shadow">
            Private air-conditioned car, experienced chauffeur, dedicated local guides, and flexible pickup & drop included.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-saffron/30 transition hover:brightness-110 active:scale-95"
            >
              Enquire on WhatsApp
              <span>→</span>
            </a>
            <a
              href={tel(C.phones[0])}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-95"
            >
              Call Us: {C.phones[0]}
            </a>
            {p.price && p.price !== "On request" && (
              <span className="text-xl sm:text-2xl font-bold text-amber-300 sm:ml-4">
                Starting {p.price}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Quick Specs Strip */}
      <section className="border-b border-[#EAE0D2] bg-[#F7EFE4]/80 py-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "⏱️", label: "Duration", val: p.duration || `${p.days} Days` },
              { icon: "🚗", label: "Transport", val: "Private AC Cab with Driver" },
              { icon: "👨‍✈️", label: "Local Guide", val: "Knowledgeable English Guide" },
              { icon: "📍", label: "Pickup / Drop", val: "Hotel, Airport or Station" },
            ].map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-3">
                <span className="text-2xl">{spec.icon}</span>
                <div>
                  <p className="text-xs text-stone-500 font-medium">{spec.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-ink">{spec.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-6xl px-5 py-14 space-y-16">
        {/* Tour Overview Section (Exact PDF Content) */}
        <section className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-6 w-1 rounded-full bg-saffron" />
            <span className="text-xs font-bold uppercase tracking-wider text-saffron">
              TripSthan Curated Experience
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            Tour Overview
          </h2>
          <div className="mt-5 text-base sm:text-lg leading-relaxed text-stone-700 whitespace-pre-line space-y-4">
            {p.overview}
          </div>
        </section>

        {/* Tour Highlights Section (Exact PDF Content) */}
        {p.highlights && p.highlights.length > 0 && (
          <section>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-saffron" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                Tour Highlights
              </h2>
            </div>
            <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {p.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <li className="flex items-start gap-3 rounded-2xl border border-stone-200/80 bg-white p-4 text-sm font-medium text-stone-800 shadow-sm transition hover:border-amber-300 hover:shadow-md">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      ✓
                    </span>
                    <span className="leading-snug">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        {/* Day-by-Day Itinerary (Exact PDF Content) */}
        <section>
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-[#8E2818]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-2">
              Detailed Schedule & Route
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink">
              Itinerary
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Every detail is planned for comfort, flexibility, and authentic discovery.
            </p>
          </div>

          <Timeline items={p.itinerary} />
        </section>

        {/* What Is Included & Booking Guarantee */}
        <section className="rounded-3xl border border-amber-200/80 bg-[#FAF3EA] p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#8E2818] mb-6">
            What Is Included in This Tour
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-stone-800">
            {[
              "Private air-conditioned car dedicated throughout the entire journey",
              "Experienced, courteous English-speaking driver",
              "All fuel charges, interstate taxes, toll fees & vehicle parking fees",
              "Doorstep hotel, airport, or railway station pickup & drop-off",
              "Knowledgeable certified local guides at designated sightseeing spots",
              "24/7 dedicated travel coordinator and WhatsApp support",
            ].map((inc, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Concluding Callout Box (Exact PDF Content) */}
        {p.conclusion && (
          <section className="rounded-3xl border-2 border-saffron/30 bg-white p-6 sm:p-10 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-saffron">
                  Custom Travel Plan
                </span>
                <p className="mt-2 text-base sm:text-lg leading-relaxed font-medium text-stone-800">
                  {p.conclusion}
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-saffron px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95 text-center"
                >
                  Book This Tour
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 active:scale-95 text-center"
                >
                  Ask for Custom Plan
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Related Special Offers */}
        {related.length > 0 && (
          <section className="pt-6">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-saffron">
                  More Inspiring Journeys
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1">
                  Explore Other Special Offers
                </h3>
              </div>
              <Link href="/tours" className="text-sm font-bold text-saffron hover:underline">
                View All Packages ({packages.length}) →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp, i) => (
                <PackageCard key={rp.slug} p={rp} i={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
