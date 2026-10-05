"use client";
import Link from "next/link";
import Image from "next/image";
import {img} from "@/lib/images";

export default function ArtisticHero() {
  const previews = [
    { title: "Agra & Taj", slug: "2-day-taj-mahal-delhi", src: img("taj", 300) },
    { title: "Jaipur Forts", slug: "jaipur-day-tour", src: img("hawa", 300) },
    { title: "Varanasi Ghats", slug: "7-day-golden-triangle-varanasi", src: img("varanasi", 300) },
    { title: "Himachal Peaks", slug: "7-day-shimla-manali", src: img("manali", 300) },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-8 pb-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="z-10 flex flex-col items-start lg:col-span-6 lg:py-6">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#A5341C]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A5341C]">
              Welcome to TripSthan
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#9B2C16] sm:text-5xl lg:text-6xl">
              Explore India <br />
              <span className="text-[#A5341C]">Outside The Book</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#3D352E] sm:text-lg">
              To get the best of your adventure in India, you just need to leave the guidebook behind and come where you explore true diversity. Handcrafted private tours, authentic heritage walks, and royal palaces—TripSthan is waiting for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full bg-[#A5341C] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#A5341C]/25 transition-all duration-300 hover:bg-[#852310] hover:shadow-xl hover:shadow-[#A5341C]/35 active:scale-95"
              >
                Explore
                <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#A5341C]/30 bg-white/80 px-7 py-3 text-base font-semibold text-[#9B2C16] backdrop-blur transition hover:border-[#A5341C] hover:bg-white"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Bottom preview cards as seen in the reference */}
            <div className="mt-12 w-full pt-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#6B5E52]">
                Popular Journeys
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {previews.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/tours/${p.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative h-20 w-full overflow-hidden rounded-lg bg-stone-200">
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        sizes="160px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="mt-2 truncate px-1 text-xs font-semibold text-ink group-hover:text-[#A5341C]">
                      {p.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Masterpiece Artistic Artwork */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative aspect-[16/11] w-full max-w-2xl overflow-hidden rounded-2xl lg:aspect-[16/12]">
              <Image
                src="/hero-artistic-india.jpg"
                alt="Artistic illustration of Taj Mahal, Mughal monuments and Indian elephant on warm ivory canvas"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-right transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
