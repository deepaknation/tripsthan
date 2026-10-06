"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7EFE4] py-16 px-6 md:py-0 md:px-12">
      <div className="mx-auto max-w-7xl md:min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Column: Mobile Centered, Desktop Left-Aligned Content */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left justify-center">
          {/* Top Badge */}
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100/70 px-3.5 py-1.5 rounded-full mb-3">
            Explore India Your Way with TripSthan
          </span>

          {/* H1 Primary Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#8E2818]">
            Explore India Beyond The Guidebooks
          </h1>

          {/* SEO-Rich Subtitle */}
          <p className="text-base sm:text-lg text-stone-700 mt-5 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Discover timeless heritage, royal palaces, and Himalayan peaks with TripSthan. From private Golden Triangle tour cabs to tailor-made Rajasthan and Himachal holiday packages, experience authentic India with verified local guides and comfortable private travel.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start w-full sm:w-auto">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full bg-[#8E2818] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#8E2818]/20 transition-all duration-300 hover:bg-[#721F11] hover:shadow-lg active:scale-95"
            >
              Explore Tour Packages
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#8E2818]/30 bg-white/80 px-8 py-3.5 text-base font-semibold text-[#8E2818] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#8E2818] hover:bg-white active:scale-95"
            >
              Book Private Cab
            </Link>
          </div>
        </div>

        {/* Right Column: Hidden on mobile, only visible on desktop/tablets (md+) */}
        <div className="hidden md:flex justify-center items-center w-full">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-none flex justify-center items-center mx-auto"
          >
            <div className="relative aspect-[16/10] w-full max-h-[460px]">
              <Image
                src="/hero-artistic-india.png"
                alt="Explore India Beyond The Guidebooks - Taj Mahal, royal palaces and Indian elephant artwork"
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 600px"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
