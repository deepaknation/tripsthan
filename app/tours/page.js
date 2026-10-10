import { img } from "@/lib/images";
import PackageCard from "@/components/PackageCard";
import Parallax from "@/components/Parallax";
import { packages, wa, C, tel } from "@/lib/data";

export const metadata = {
  title: "Tours & Tour Packages India – TripSthan",
  description:
    "Explore our complete range of India tour packages: Golden Triangle Tour, Rajasthan Royal Palaces, Same Day Taj Mahal Tour, Himachal Hill Stations, and Varanasi spiritual tours.",
};

export default function ToursPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <Parallax img={img("taj", 1800)} priority h="min-h-[45vh]">
        <div className="text-center px-4">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur px-4 py-1 text-xs font-bold uppercase tracking-wider text-white mb-3">
            Private Chauffeur & Guided Circuits
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-md">
            Tour Packages & Itineraries
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-white/90 drop-shadow">
            Authentic, customizable journeys across Delhi, Agra, Rajasthan, Himachal Pradesh, and Varanasi with dedicated private AC car and 24/7 travel desk.
          </p>
        </div>
      </Parallax>

      <section className="mx-auto max-w-6xl px-5 py-16 overflow-hidden w-full max-w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EAE0D2] w-full max-w-full">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              All Tour Packages ({packages.length})
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Every tour includes private AC vehicle, verified driver, fuel, taxes, tolls, and local sightseeing guides.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
            >
              Custom Tour Inquiry
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-full">
          {packages.map((p, i) => (
            <PackageCard key={p.slug} p={p} i={i % 3} />
          ))}
        </div>
      </section>
    </main>
  );
}
