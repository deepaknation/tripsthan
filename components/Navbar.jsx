"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { C, tel, wa } from "@/lib/data";

const NAV_LINKS = [
  ["Home", "/"],
  ["Tours & Packages", "/tours"],
  ["Car Hire", "/cars"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F7EFE4]/95 backdrop-blur border-b border-[#EAE0D2]">
        {/* Top Bar for Desktop */}
        <div className="hidden bg-[#261E19] text-xs text-[#E8DFC8] md:block">
          <div className="mx-auto flex max-w-6xl justify-between px-5 py-1.5">
            <span>
              {C.phones.map((p) => (
                <a key={p} href={tel(p)} className="mr-4 hover:underline">
                  {p}
                </a>
              ))}
            </span>
            <span>{C.emails.join("  |  ")}</span>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5">
          <Link href="/" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="TripSthan" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden gap-7 text-sm font-medium text-ink md:flex">
            {NAV_LINKS.map(([name, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-saffron"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-2 text-sm font-semibold text-white transition hover:brightness-90 active:scale-95"
          >
            Start Journey
          </Link>

          {/* Mobile Hamburger Button with Smooth Morphing to 'X' */}
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 bg-transparent text-black transition-all duration-300 md:hidden active:scale-90 cursor-pointer"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-in-out ${open ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0 -translate-x-2" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-in-out ${open ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer (Rendered as SIBLING outside <header> so backdrop-blur does not trap fixed viewport positioning) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in Full Height Drawer from Right */}
            <motion.aside
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 flex h-full h-[100dvh] w-[300px] max-w-[85vw] flex-col justify-between bg-[#FAF6F0] p-6 shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header with Logo & Prominent Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE0D2]">
                  <img src="/logo.png" alt="TripSthan" className="h-10 w-auto" />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="grid h-10 w-10 place-items-center rounded-full bg-dark text-white transition hover:bg-black active:scale-90 cursor-pointer shadow-md"
                  >
                    <svg className="h-5 w-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Nav Links */}
                <ul className="mt-5 space-y-1.5">
                  {NAV_LINKS.map(([name, href]) => (
                    <li key={href}>
                      <Link
                        onClick={() => setOpen(false)}
                        href={href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink transition-all hover:bg-white hover:text-saffron hover:shadow-sm"
                      >
                        <span>{name}</span>
                        <span className="text-stone-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Direct Contact Cards */}
                <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm border border-[#EAE0D2]">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Quick Contact
                  </p>
                  <div className="space-y-2 text-sm">
                    {C.phones.map((p) => (
                      <a
                        key={p}
                        href={tel(p)}
                        className="flex items-center gap-2 text-ink hover:text-saffron font-medium"
                      >
                        <span className="text-emerald-600">📞</span> {p}
                      </a>
                    ))}
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-emerald-700 font-medium hover:underline pt-1"
                    >
                      <span>💬</span> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Start Journey CTA Button */}
              <div className="pt-6 pb-2">
                <Link
                  onClick={() => setOpen(false)}
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-saffron/30 transition hover:brightness-105 active:scale-95"
                >
                  <span>Start Journey</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
