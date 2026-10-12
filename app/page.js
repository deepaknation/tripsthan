import { img } from "@/lib/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArtisticHero from "@/components/ArtisticHero";
import Parallax from "@/components/Parallax";
import {
  StatsStrip,
  IntroSection,
  Offers,
  Why,
  Destinations,
  Services,
  Testimonials,
} from "@/components/HomeSections";

export const metadata = {
  title: "TripSthan | Private India Tours, Tour Packages and Car Hire",
  description:
    "Private India tours and car hire with driver. Golden Triangle, Rajasthan, Himachal and more, planned by a team with 20+ years on India’s roads.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TripSthan | Private India Tours, Tour Packages and Car Hire",
    description:
      "Private India tours and car hire with driver. Golden Triangle, Rajasthan, Himachal and more, planned by a team with 20+ years on India’s roads.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      {/* SECTION 1: HERO SECTION */}
      <ArtisticHero />

      {/* SECTION 2: STATS STRIP */}
      <StatsStrip />

      {/* SECTION 3: INTRO SECTION */}
      <IntroSection />

      {/* SECTION 4: POPULAR TOUR PACKAGES (OUR 4 PACKAGES) */}
      <Offers />

      {/* SECTION 5: WHY CHOOSE TRIPSTHAN (6 POINTS) */}
      <Why />

      {/* REGIONAL DESTINATIONS */}
      <Destinations />

      {/* COMPREHENSIVE SERVICES */}
      <Services />

      {/* GUEST REVIEWS */}
      <Testimonials />

      {/* FINAL CALL TO ACTION */}
      <Parallax img={img("hawa", 1800)} h="min-h-[50vh]">
        <h2 className="!text-white text-3xl sm:text-4xl">Ready to Explore India?</h2>
        <p className="mt-2 text-white/85">
          Let&apos;s plan your dream trip today. Slots are filling fast for this season!
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 mt-5 active:scale-95"
        >
          <span>Book Your Trip</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </Parallax>
    </main>
  );
}
