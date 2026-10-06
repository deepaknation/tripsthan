"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7EFE4] pt-20 pb-10 md:py-0">
      <div className="mx-auto max-w-7xl px-6 md:px-12 min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Column: Vertically Centered Text Block */}
        <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#8E2818]">
            Explore India Outside<br className="hidden sm:inline" /> The Book
          </h1>

          <p className="mt-4 max-w-lg text-sm sm:text-base text-gray-700 leading-relaxed">
            To get the best of your adventure in India, you just need to leave and come where you explore diversity. We are waiting for you.
          </p>

          <div className="mt-6 w-full sm:w-auto">
            <Link
              href="/tours"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#8E2818] px-9 py-3.5 text-base font-semibold text-white shadow-md shadow-[#8E2818]/20 transition-all duration-300 hover:bg-[#721F11] hover:shadow-lg active:scale-95 sm:rounded-2xl"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Column: Fully Visible Artwork with Gentle Motion */}
        <div className="flex justify-center items-center w-full">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-none flex justify-center items-center mx-auto mt-6 md:mt-0"
          >
            <div className="relative aspect-[16/10] w-full max-h-[460px]">
              <Image
                src="/hero-artistic-india.png"
                alt="Explore India Outside The Book - Taj Mahal, monuments and elephant watercolor artwork"
                fill
                priority
                sizes="(max-width: 768px) 320px, 50vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
