import { img } from "@/lib/images";
import Link from "next/link";
import ArtisticHero from "@/components/ArtisticHero";
import Parallax from "@/components/Parallax";
import { Offers, Destinations, Why, Services, Testimonials } from "@/components/HomeSections";

export default function Home() {
  return (
    <main>
      <ArtisticHero />
      <Offers />
      <Destinations />
      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <h2 className="text-2xl font-bold text-ink">Golden Triangle Tour India, Planned Your Way</h2>
        <p className="mt-3 text-body leading-relaxed">
          Book a Private Delhi Agra Jaipur Cab with an English-speaking guide, heritage walks and optional luxury stays. Prefer the mountains? Choose a Himachal Holiday Package, or see the Taj in a day with our Same Day Taj Mahal Tour by Car.
        </p>
      </section>
      <Why />
      <Services />
      <Testimonials />
      <Parallax img={img("hawa", 1800)} h="min-h-[50vh]">
        <h2 className="!text-white text-3xl sm:text-4xl">Ready to Explore India?</h2>
        <p className="mt-2 text-white/85">Let's plan your dream trip today. Slots are filling fast for this season!</p>
        <Link href="/contact" className="btn mt-6">Book Your Trip</Link>
      </Parallax>
    </main>
  );
}
