import Parallax from "@/components/Parallax";
import { BLOG_POSTS } from "@/components/BlogSection";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ExternalLink, ArrowRight, BookOpen, ShieldCheck, User } from "lucide-react";

export const metadata = {
  title: "TripSthan Travel Blog | India Private Tour & Car Hire Guides",
  description:
    "Explore travel guides, Rajasthan circuit itineraries, Golden Triangle road advice, and driver hire tips written by the TripSthan travel team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TripSthan Travel Blog | India Private Tour & Car Hire Guides",
    description:
      "Explore travel guides, Rajasthan circuit itineraries, Golden Triangle road advice, and driver hire tips written by the TripSthan travel team.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Visual Parallax Hero Banner */}
      <Parallax img="/private-india-tours-taj-mahal-agra.webp" priority h="min-h-[44vh] sm:min-h-[50vh]">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/25 mb-3.5 shadow-sm">
            TripSthan Travel Blog &amp; Road Guides
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Stories &amp; Advice from 20+ Years on India&apos;s Roads
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/95 drop-shadow max-w-2xl mx-auto leading-relaxed">
            Insider routes, seasonal timings, monument guides, and practical chauffeur advice to help you experience India smoothly.
          </p>
        </div>
      </Parallax>

      {/* Main Blog Content Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EAE0D2]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              Featured Articles &amp; Travel Guides
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Curated by founder Sonu Chouhan and our experienced North India chauffeur fleet.
            </p>
          </div>

          <a
            href="https://tripsthan.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition active:scale-95 shrink-0"
          >
            <span>Visit Full WordPress Blog</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#EAE0D2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
            >
              {/* Image Banner */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 sm:h-56 w-full overflow-hidden bg-stone-100"
                aria-label={post.title}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute left-3.5 top-3.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-xs">
                  {post.category}
                </span>

                {/* Reading Duration */}
                <span className="absolute right-3.5 top-3.5 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-stone-800 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-saffron" />
                  <span>{post.readTime}</span>
                </span>
              </a>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span className="inline-flex items-center gap-1">
                    <User className="w-3 h-3 text-stone-400" />
                    Sonu Chouhan
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold leading-snug text-ink group-hover:text-saffron transition-colors">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Link footer */}
                <div className="mt-auto pt-5 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saffron group-hover:text-[#BA9366] transition"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <span className="text-[11px] font-semibold text-stone-400">
                    tripsthan.com/blog
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Big WordPress Blog Banner Callout */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#261E19] to-[#1A1A1A] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="inline-block rounded-full bg-saffron/20 border border-saffron/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
              TripSthan Official Blog
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Looking for More Trip Ideas &amp; Itineraries?
            </h3>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Explore in-depth articles on Rajasthan havelis, luxury palace stays, driver safety, offbeat mountain valleys, and food walks in Delhi on our main blog portal.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://tripsthan.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-saffron hover:bg-[#d45504] px-7 py-3 text-sm font-bold text-white shadow-lg transition active:scale-95"
              >
                <span>Read Blog on tripsthan.com/blog</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-bold text-white transition"
              >
                <span>Explore Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
