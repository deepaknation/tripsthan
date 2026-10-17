import Parallax from "@/components/Parallax";
import GalleryView from "@/components/GalleryView";

export const metadata = {
  title: "India Tour Packages | Private Tours with Driver | TripSthan",
  description:
    "Browse private India tour packages: Golden Triangle, Rajasthan, Himachal, Ganga and wildlife tours. Private car and driver included. Customize any plan.",
  keywords: [
    "India Tour Packages",
    "Private Tours with Driver",
    "Golden Triangle Tour",
    "Rajasthan Tours",
    "Himachal Tours",
    "TripSthan",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "India Tour Packages | Private Tours with Driver | TripSthan",
    description:
      "Browse private India tour packages: Golden Triangle, Rajasthan, Himachal, Ganga and wildlife tours. Private car and driver included. Customize any plan.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Majestic Parallax Visual Banner */}
      <Parallax img="/gallery-cover-amber-fort.jpg" priority h="min-h-[42vh] sm:min-h-[48vh]">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/25 mb-3 shadow-sm">
            TripSthan Travel Moments
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 drop-shadow max-w-2xl mx-auto leading-relaxed">
            Real moments, iconic monuments, and unforgettable memories from our private chauffeur journeys across India.
          </p>
        </div>
      </Parallax>

      {/* Clean, Simple, Distraction-Free Image Grid */}
      <GalleryView />
    </main>
  );
}
