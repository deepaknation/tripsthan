import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, ExternalLink } from "lucide-react";

export const BLOG_POSTS = [
  {
    slug: "golden-triangle-tour-complete-guide",
    title: "Golden Triangle Tour India: Complete Route, Timing & Chauffeur Guide",
    excerpt:
      "A complete insider guide to planning Delhi, Agra and Jaipur: best months, road travel times, Yamuna Expressway conditions, and how to combine monuments with local heritage.",
    category: "Travel Guides",
    readTime: "6 min read",
    date: "Oct 2026",
    image: "/private-india-tours-taj-mahal-agra.webp",
    url: "https://tripsthan.com/blog/",
  },
  {
    slug: "how-to-hire-car-with-driver-india",
    title: "How to Hire a Car with Driver in India: Pricing, Luggage & Safety Tips",
    excerpt:
      "Everything you need to know before booking private car hire: what quotes include (fuel, state taxes, tolls, parking), choosing Swift Dzire vs Innova Crysta vs Urbania, and highway safety.",
    category: "Car Hire & Fleets",
    readTime: "5 min read",
    date: "Oct 2026",
    image: "/cars/fleet-all-cars.jpg",
    url: "https://tripsthan.com/blog/",
  },
  {
    slug: "rajasthan-royal-heritage-itinerary",
    title: "10 Royal Forts, Desert Camps and Palaces in Rajasthan You Must Not Miss",
    excerpt:
      "From Amber Fort and Mehrangarh to the living fort of Jaisalmer, Mandawa's frescoed havelis, and Udaipur's lakeside palaces, explore Rajasthan's greatest royal circuits.",
    category: "Rajasthan Heritage",
    readTime: "7 min read",
    date: "Oct 2026",
    image: "/hawa-mahal-jaipur.jpg",
    url: "https://tripsthan.com/blog/",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-[#EAE0D2]">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-block rounded-full bg-[#8E2818]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-1.5">
              TripSthan Travel Insights
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
              Latest From Our Travel Blog
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl">
              Authentic travel guides, road tips, and insider cultural recommendations crafted from over 20 years on India&apos;s roads.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:border-saffron/40 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-saffron shadow-2xs transition"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 text-saffron transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://tripsthan.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-saffron text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#d45504] transition shadow-xs"
            >
              <span>Open Blog</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-200"
            >
              {/* Card Image Banner */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-48 sm:h-52 w-full overflow-hidden bg-stone-100"
                aria-label={post.title}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                  {post.category}
                </span>

                {/* Read Time */}
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-stone-800 shadow-xs">
                  <Clock className="w-3 h-3 text-saffron" />
                  <span>{post.readTime}</span>
                </span>
              </a>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>By Sonu Chouhan</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold leading-snug text-ink group-hover:text-saffron transition-colors">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Bottom Read Link */}
                <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saffron group-hover:text-[#BA9366] transition"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <span className="text-[11px] font-medium text-stone-400">
                    tripsthan.com/blog
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner to Visit Blog */}
        <div className="mt-8 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D2] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-saffron/10 text-saffron flex items-center justify-center">
              <BookOpen className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-ink">
                Looking for more travel inspiration and route maps?
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Browse our complete collection of Rajasthan, Golden Triangle, and chauffeur travel articles.
              </p>
            </div>
          </div>
          <a
            href="https://tripsthan.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition active:scale-95 shrink-0"
          >
            <span>Visit TripSthan Blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
