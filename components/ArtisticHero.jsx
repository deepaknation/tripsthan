"use client";
import Link from "next/link";
import Image from "next/image";

export default function ArtisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7EFE4] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
          
          {/* Left Column: Heading, Subtitle & Single Button (exactly like reference) */}
          <div className="z-10 flex flex-col items-start lg:col-span-6 lg:pr-4">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#8E2818] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Explore India Outside<br />
              The Book
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4A3E35] sm:text-lg">
              To get the best of your adventure in India, you just need to leave and come where you explore diversity. We are waiting for you.
            </p>

            <div className="mt-8">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-xl bg-[#8E2818] px-9 py-3.5 text-base font-semibold text-white shadow-md shadow-[#8E2818]/20 transition-all duration-300 hover:bg-[#721F11] hover:shadow-lg active:scale-95 sm:rounded-2xl"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Right Column: Seamless Artwork blending into canvas */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative aspect-[16/10] w-full max-w-2xl">
              <Image
                src="/hero-artistic-india.jpg"
                alt="Explore India Outside The Book - Taj Mahal, monuments and elephant watercolor artwork"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-right mix-blend-multiply"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
