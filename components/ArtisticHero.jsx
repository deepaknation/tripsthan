"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7EFE4] pt-6 pb-8 sm:py-10 md:py-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 md:min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
        
        {/* Left Column: Heading, Subtitle & Centered/Aligned Button */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#8E2818]">
            Explore India Outside<br className="hidden sm:inline" /> The Book
          </h1>

          <p className="mt-3 sm:mt-4 max-w-md md:max-w-lg text-sm sm:text-base text-gray-700 leading-relaxed">
            To get the best of your adventure in India, you just need to leave and come where you explore diversity. We are waiting for you.
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center md:justify-start">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full bg-[#8E2818] px-8 py-3 text-base font-semibold text-white shadow-md shadow-[#8E2818]/20 transition-all duration-300 hover:bg-[#721F11] hover:shadow-lg active:scale-95"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Column: Fully Visible Artwork with Smooth Motion on both Mobile & Desktop */}
        <div className="flex justify-center items-center w-full mt-4 md:mt-0">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[270px] sm:max-w-[340px] md:max-w-none flex justify-center items-center mx-auto"
          >
            <div className="relative aspect-[16/11] w-full md:max-h-[460px]">
              <Image
                src="/hero-artistic-india.png"
                alt="Explore India Outside The Book - Taj Mahal, monuments and elephant artwork"
                fill
                priority
                sizes="(max-width: 768px) 300px, 50vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
