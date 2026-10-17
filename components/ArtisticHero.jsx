"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Compass, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    image: "/private-india-tours-taj-mahal-agra.webp",
    alt: "Taj Mahal at sunrise on a private India tour from Delhi",
    badge: "PRIVATE INDIA TOURS | Delhi, Agra & Jaipur",
    title: "Explore India Your Way – Private India Tours with 20+ Years of Road Experience",
    isH1: true,
    subline:
      "Travel India with a private car, an experienced driver and local guides. From the Taj Mahal to Rajasthan and the Himalayas, every trip is planned around you.",
    buttonText: "Plan My Trip",
    buttonLink: "/contact",
  },
  {
    id: 2,
    image: "/hawa-mahal-jaipur.jpg",
    alt: "Hawa Mahal Jaipur, part of our Rajasthan tour packages",
    badge: "ROYAL RAJPUTANA CIRCUITS | Jaipur, Jodhpur & Udaipur",
    title: "Step Into Royal Palaces & Golden Sands",
    isH1: false,
    subline:
      "From Jaipur’s Hawa Mahal to Jaisalmer’s desert camps and Udaipur’s lakeside palaces, explore Rajasthan tour packages with a private driver.",
    buttonText: "Explore Rajasthan Tours",
    buttonLink: "/tours",
  },
  {
    id: 3,
    image: "/shimla-manali-tour-himachal-mountains.webp",
    alt: "Snow-covered mountains near Manali on a Himachal tour",
    badge: "HIMALAYAN ESCAPES | Shimla, Manali & Dharamshala",
    title: "Cool Hills, Snowy Peaks & Mountain Roads",
    isH1: false,
    subline:
      "Take a relaxed Himachal tour with a private car and a driver who knows every mountain road.",
    buttonText: "View Himachal Tours",
    buttonLink: "/tours",
  },
  {
    id: 4,
    image: "/ganga-tour-rishikesh-haridwar-varanasi.webp",
    alt: "Evening Ganga Aarti on a spiritual India tour",
    badge: "SPIRITUAL JOURNEYS | Rishikesh, Haridwar & Varanasi",
    title: "Walk Along the Holy Ganges",
    isH1: false,
    subline:
      "Experience the sacred side of India with quiet mornings by the river, evening aarti and a slower pace of travel.",
    buttonText: "Explore Spiritual Tours",
    buttonLink: "/tours",
  },
  {
    id: 5,
    image: "/ranthambore-tiger-safari-tour.webp",
    alt: "Bengal tiger in Ranthambore National Park on a wildlife tour",
    badge: "WILDLIFE SAFARIS | Ranthambore National Park",
    title: "Tigers, Forts & Wild India",
    isH1: false,
    subline:
      "Add a Ranthambore tiger safari to your heritage route, with a private driver and a plan built around you.",
    buttonText: "Explore Wildlife Tours",
    buttonLink: "/tours",
  },
];

export default function ArtisticHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Preload slides for smooth instant transitions
  useEffect(() => {
    SLIDES.forEach((slide) => {
      if (typeof window !== "undefined" && slide.image) {
        const img = new window.Image();
        img.src = slide.image;
      }
    });
  }, []);

  // Continuous auto-play slider (advances every 5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [current]);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  const slide = SLIDES[current];

  return (
    <section
      className="relative overflow-hidden bg-[#1F1814] text-white min-h-[600px] sm:min-h-[660px] md:min-h-[720px] lg:h-[calc(100vh-80px)] lg:max-h-[840px] flex items-center select-none"
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
              alt={slide.alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Multi-stop Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent hidden md:block" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-16 sm:py-20 w-full flex flex-col justify-center overflow-hidden">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0 w-full">
          
          {/* Top Badge */}
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4 max-w-full"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm border border-saffron/40">
              <Star className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>{slide.badge}</span>
            </span>
          </motion.div>

          {/* Headline (H1 on Slide 1, H2 on Slides 2-5) */}
          {slide.isH1 ? (
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md break-words"
            >
              {slide.title}
            </motion.h1>
          ) : (
            <motion.h2
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md break-words"
            >
              {slide.title}
            </motion.h2>
          )}

          {/* Subtitle Description */}
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-stone-200 drop-shadow max-w-2xl mx-auto md:mx-0 break-words font-normal"
          >
            {slide.subline}
          </motion.p>

          {/* Call to Action Button */}
          <div className="mt-5 sm:mt-6 flex justify-center md:justify-start">
            <Link
              href={slide.buttonLink}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-saffron bg-white/95 backdrop-blur-sm px-5 py-2.5 text-xs sm:text-sm font-bold text-saffron shadow-md transition-all duration-200 hover:bg-saffron hover:text-white hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-saffron group-hover:text-white transition-colors" />
              <span>{slide.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>

      {/* Slide Navigation Dots / Indicators */}
      <div className="absolute bottom-13 sm:bottom-15 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`relative overflow-hidden transition-all duration-300 rounded-full cursor-pointer ${
              current === idx
                ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-white/25 shadow-sm"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80"
            }`}
          >
            {current === idx && (
              <motion.span
                key={`progress-${current}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.5, ease: "linear" }}
                className="absolute inset-0 bg-saffron rounded-full"
              />
            )}
          </button>
        ))}
        <span className="text-[11px] font-semibold text-white/90 ml-1.5 tracking-wider hidden sm:inline">
          {current + 1} / {SLIDES.length}
        </span>
      </div>
    </section>
  );
}
