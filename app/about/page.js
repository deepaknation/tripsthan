import Link from "next/link";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import HighlightedText from "@/components/HighlightedText";
import { img } from "@/lib/images";
import { C, tel, wa } from "@/lib/data";

export const metadata = {
  title: "About Us | TripSthan – Private India Tours & Tour Packages",
  description:
    "Learn about TripSthan and founder Sonu Chouhan. With over 20 years on the road, we plan private India tours and India tour packages that go beyond landmarks to real connections.",
  keywords:
    "India tours, India tour packages, India tour, private India tours, TripSthan about us, Sonu Chouhan, customized India trips",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Majestic Parallax Visual Banner */}
      <Parallax img="/hero-artistic-india.jpg" priority h="min-h-[45vh] sm:min-h-[52vh]">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 mb-3 shadow-sm">
            Explore India Your Way
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            About TripSthan
          </h1>
          <p className="mt-4 text-base sm:text-xl text-white/95 font-medium drop-shadow max-w-2xl mx-auto leading-relaxed">
            Travel isn't just about where you go — it's about how you experience it.
          </p>
        </div>
      </Parallax>

      {/* Headline & Supporting Line Section */}
      <section className="border-b border-[#EAE0D2] bg-[#FAF7F2] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-3">
            Our Core Vision
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight">
            Travel isn't just about where you go — it's about how you experience it.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            <HighlightedText text="We plan private India tours that go beyond forts, palaces, and landscapes, connecting you with the people and everyday life that make this country what it is." />
          </p>
        </div>
      </section>

      {/* About Our Founder - Sonu Chouhan */}
      {/* About Our Founder - Sonu Chouhan */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left Column: Founder Bio */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-block rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron">
              About Our Founder
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Sonu Chouhan
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>
                For over 20 years, Sonu Chouhan has spent his life on the road across India — driving, guiding, and getting to know this country one journey at a time. What started as simply getting travelers from one destination to the next slowly became something more: a deep understanding of what actually makes a trip memorable.
              </p>
              <p>
                Over two decades, Sonu has worked with travelers from all over the world — families, couples, solo explorers, and returning guests — each with different expectations, but all wanting the same thing: to see the real India, not just the version in a brochure.
              </p>
              <p>
                That experience shaped the idea behind TripSthan. Having sat behind the wheel through Rajasthan's deserts, Delhi's traffic, and the winding roads of the Himalayas, Sonu learned that the best trips aren't the ones with the longest list of monuments — they're the ones where a traveler actually connects with the country and its people.
              </p>
            </div>

            {/* Founder Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-stone-200">
              <div className="rounded-xl bg-white p-2.5 sm:p-3 border border-stone-200 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-saffron">20+</span>
                <span className="text-[11px] sm:text-xs text-stone-600">Years on Road</span>
              </div>
              <div className="rounded-xl bg-white p-2.5 sm:p-3 border border-stone-200 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-saffron">5,000+</span>
                <span className="text-[11px] sm:text-xs text-stone-600">Happy Guests</span>
              </div>
              <div className="rounded-xl bg-white p-2.5 sm:p-3 border border-stone-200 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-amber-500">★ 4.9</span>
                <span className="text-[11px] sm:text-xs text-stone-600">Guest Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Portrait Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[340px] md:max-w-none rounded-2xl overflow-hidden shadow-xl border border-stone-200/80">
              <Image
                src="/founder-sonu-chouhan.jpg"
                alt="TripSthan Founder Sonu Chouhan"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Pull Quote Card */}
        <div className="mt-8 sm:mt-10 relative rounded-2xl bg-gradient-to-br from-[#261E19] to-[#3A2E26] p-6 sm:p-8 text-white shadow-xl border border-white/10">
          <svg
            className="h-7 w-7 text-saffron/40 mb-2.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-sm sm:text-base italic text-stone-200 leading-relaxed">
            “After 20 years on the road, I've learned that people don't remember every fort or palace they visited — they remember the conversations, the food, the small moments with local people along the way. That's what we try to build into every TripSthan itinerary.”
          </p>
          <div className="mt-4 pt-3 border-t border-white/15">
            <p className="font-bold text-white text-sm">
              — Sonu Chouhan
            </p>
            <p className="text-xs text-[#E8DFC8]">
              Founder, TripSthan
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Philosophy (Side by Side Cards) */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#EAE0D2]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="rounded-2xl bg-[#FAF7F2] p-8 border border-[#EAE0D2] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-28 h-28 bg-saffron/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-4">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Targeted Purpose
                </div>
                <h3 className="text-2xl font-extrabold text-ink mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  <HighlightedText text="To design private, well-planned India tour packages that go beyond sightseeing — helping travelers experience India through its people, culture, and everyday life, not just its landmarks." />
                </p>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="rounded-2xl bg-[#FAF7F2] p-8 border border-[#EAE0D2] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#8E2818]/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron mb-4">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Core Belief
                </div>
                <h3 className="text-2xl font-extrabold text-ink mb-3">Our Philosophy</h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  We believe the real India isn't found only in forts, palaces, or landscapes — it's found in the people you meet along the way. Every itinerary we design looks for those moments: a conversation with a local family, a meal cooked the traditional way, a market visited like a local rather than a tourist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us? */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-3">
            The TripSthan Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            Why Travel With Us?
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-8 sm:p-10 border border-[#EAE0D2] shadow-sm space-y-6">
          <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
            TripSthan doesn't just show you India's forts, palaces, and landscapes. We take you between them — into the everyday life, people, and culture that make this country what it truly is.
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            With over 20 years of experience planning journeys across India, we build itineraries around real connection, not just checklists of sights. Every trip includes a private vehicle, an experienced driver, and local insight that comes from decades on the road — not a script.
          </p>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron font-bold text-sm">
                ✓
              </span>
              <div>
                <h4 className="text-sm font-bold text-ink">20+ Years on the Road</h4>
                <p className="text-xs text-stone-600 mt-0.5">Real highway expertise, not scripted call center advice.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron font-bold text-sm">
                ✓
              </span>
              <div>
                <h4 className="text-sm font-bold text-ink">Private Sanitized Fleet</h4>
                <p className="text-xs text-stone-600 mt-0.5">Air-conditioned sedans & SUVs with courteous drivers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron font-bold text-sm">
                ✓
              </span>
              <div>
                <h4 className="text-sm font-bold text-ink">Authentic Local Insight</h4>
                <p className="text-xs text-stone-600 mt-0.5">Food, cultural stops, and warm local interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do & Services List */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-t border-[#EAE0D2]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: What We Do Overview */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block rounded-full bg-[#8E2818]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8E2818]">
                Complete Travel Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
                What We Do
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                <HighlightedText text="TripSthan plans and operates private, customized India tours across the entire country — not just one region. Whether it's the Golden Triangle, the forts and deserts of Rajasthan, the hill stations of Himachal Pradesh, the spiritual towns along the Ganges, or a wildlife safari, we design and manage every detail of your journey." />
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Whichever part of the country you want to explore, TripSthan is equipped to plan and support your journey from start to finish.
              </p>
              <div className="pt-2">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-bold text-white shadow-md hover:brightness-105 transition"
                >
                  <span>Explore Tour Packages</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Our Services Bulleted Cards */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#EAE0D2] shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-5 pb-3 border-b border-stone-200">
                  Our Services Include:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Custom-built India tour itineraries",
                    "Private, air-conditioned vehicles with experienced drivers",
                    "Local guides at every destination",
                    "Hotel and heritage stay arrangements",
                    "End-to-end trip planning and on-road support, all across India",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8E2818]/10 text-[#8E2818] text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base text-stone-800 font-medium leading-normal">
                        <HighlightedText text={service} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch / Contact Section */}
      <section className="bg-gradient-to-r from-[#261E19] via-[#332720] to-[#261E19] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <span className="inline-block rounded-full bg-saffron/20 border border-saffron/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8DFC8] mb-3">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
            <HighlightedText
              text="Looking for an India tour that goes beyond the usual checklist? Tell us what you're looking for, and we'll help you plan a trip built around real experiences, not just sightseeing."
              className="text-stone-200"
            />
          </p>

          {/* Contact Details Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
            <a
              href={tel(C.phones[0])}
              className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/15 transition"
            >
              <svg className="h-4 w-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>{C.phones[0]}</span>
            </a>
            <a
              href={tel(C.phones[1])}
              className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/15 transition"
            >
              <svg className="h-4 w-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>{C.phones[1]}</span>
            </a>
            <a
              href={`mailto:${C.emails[1]}`}
              className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/15 transition"
            >
              <svg className="h-4 w-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{C.emails[1]}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
