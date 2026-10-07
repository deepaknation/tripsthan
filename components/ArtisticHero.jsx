"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    image: "/hero-taj-sunrise.jpg",
    badge: "Explore India With TripSthan",
    location: "Agra & Golden Triangle",
    title: "Explore India Beyond The Guidebooks",
    desc: "Discover timeless heritage, royal palaces, and Himalayan peaks with TripSthan. Private AC cabs, tailor-made holiday packages, and certified local guides.",
    ctaTours: "Explore Tour Packages",
    ctaCars: "Book Private Cab",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1920&q=85",
    badge: "Royal Rajputana Circuits",
    location: "Jaipur, Jodhpur & Udaipur",
    title: "Step Into Royal Palaces & Golden Sands",
    desc: "From Jaipur's honeycomb Hawa Mahal to Jaisalmer Thar desert camps and romantic lakeside palaces with courteous private chauffeurs.",
    ctaTours: "View Rajasthan Tours",
    ctaCars: "Hire Luxury Cab",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=85",
    badge: "Himalayan Hill Stations",
    location: "Shimla, Manali & Dharamshala",
    title: "Breathe The Cool Air of Himalayan Peaks",
    desc: "Escape to pine-covered valleys, snow-capped Rohtang Pass excursions, and colonial mountain charm with comfortable all-inclusive private vehicles.",
    ctaTours: "View Himachal Packages",
    ctaCars: "Book Mountain Cab",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=85",
    badge: "Sacred Spiritual Journeys",
    location: "Varanasi, Haridwar & Rishikesh",
    title: "Experience The Sacred Soul of India",
    desc: "Witness the mesmerizing evening Ganga Aarti, sunrise boat rituals on the holy river, and tranquil yoga retreats in the Himalayan foothills.",
    ctaTours: "Spiritual Tour Packages",
    ctaCars: "Private Ganga Cab",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1920&q=85",
    badge: "Wildlife & Jungle Safari",
    location: "Ranthambore & Bharatpur",
    title: "Track Royal Bengal Tigers in The Wild",
    desc: "Exciting open-jeep tiger safaris in Ranthambore and UNESCO birdwatching in Keoladeo paired with iconic North India heritage circuits.",
    ctaTours: "Explore Jungle Tours",
    ctaCars: "Book Safari Cab",
  },
];

export default function ArtisticHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play interval (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, current]);

  const goToSlide = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // Swiped left -> next
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide(); // Swiped right -> prev
    }
  };

  const slide = SLIDES[current];

  return (
    <section
      className="relative overflow-hidden bg-[#1F1814] text-white min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:h-[calc(100vh-80px)] lg:max-h-[820px] flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel"
    >
      {/* Background Image Carousel with Ken-Burns Motion */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Multi-stop Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent hidden md:block" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-16 sm:py-20 w-full flex flex-col justify-center">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          
          {/* Top Badge & Location Pill */}
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              ★ {slide.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white/95 border border-white/25">
              📍 {slide.location}
            </span>
          </motion.div>

          {/* Primary H1 Headline */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md"
          >
            {slide.title}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-stone-200 drop-shadow line-clamp-3 sm:line-clamp-none max-w-xl mx-auto md:mx-0"
          >
            {slide.desc}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start w-full sm:w-auto"
          >
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-saffron/30 transition-all duration-300 hover:brightness-110 active:scale-95 text-center"
            >
              <span>{slide.ctaTours}</span>
              <span>→</span>
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-ink active:scale-95 text-center"
            >
              <span>{slide.ctaCars}</span>
            </Link>
          </motion.div>

          {/* Micro Trust Points on Desktop */}
          <div className="hidden sm:flex items-center gap-6 mt-8 pt-6 border-t border-white/15 text-xs text-white/85">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> Private AC Cabs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> Verified Chauffeurs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">★</span> 4.9/5 Rating (5,000+ Guests)
            </span>
          </div>

        </div>
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-saffron hover:border-saffron hover:scale-105 active:scale-95"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-saffron hover:border-saffron hover:scale-105 active:scale-95"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Navigation Dots / Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              current === idx
                ? "w-7 sm:w-9 h-2 bg-saffron shadow-sm"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
        <span className="text-[11px] font-semibold text-white/75 ml-1 hidden sm:inline">
          {current + 1} / {SLIDES.length}
        </span>
      </div>
    </section>
  );
}
