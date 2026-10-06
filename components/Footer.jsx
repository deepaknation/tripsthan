import Link from "next/link";
import { C, tel } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FBF7F0] text-[#42352D] pt-12 border-t border-[#DECFC0]">
      {/* Main 4-Column Footer Grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative z-10">

        {/* Column 1: Brand Info, Social & Payment */}
        <div className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-[#7A2318] tracking-tight">
            TripSthan
          </h3>
          <p className="text-sm leading-relaxed text-[#5A4B42]">
            Government-approved tour operator. Dedicated to creating unforgettable journeys across India with trust, care, and expertise. Private AC cabs, custom holiday packages, and certified local guides.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center gap-2.5 pt-1">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="grid h-8 w-8 place-items-center rounded-full bg-[#BA9366] text-white shadow-sm transition hover:bg-[#7A2318] hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* We Accept Payment Badges */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A2318] mb-2.5">
              We Accept
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {/* PayPal */}
              <div className="flex h-7 items-center justify-center rounded border border-stone-300 bg-white px-2.5 shadow-2xs">
                <span className="font-extrabold text-xs text-[#003087]">Pay</span>
                <span className="font-extrabold text-xs text-[#0079C1]">Pal</span>
              </div>

              {/* MasterCard */}
              <div className="flex h-7 items-center justify-center gap-1 rounded border border-stone-300 bg-white px-2.5 shadow-2xs">
                <span className="flex items-center -space-x-1.5">
                  <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#EB001B]" />
                  <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#F79E1B]/90" />
                </span>
                <span className="text-[10px] font-bold text-stone-700">mastercard</span>
              </div>

              {/* American Express */}
              <div className="flex h-7 items-center justify-center rounded border border-stone-300 bg-[#006FCF] px-2 shadow-2xs">
                <span className="text-[10px] font-black uppercase text-white tracking-wider">
                  AMEX
                </span>
              </div>

              {/* VISA */}
              <div className="flex h-7 items-center justify-center rounded border border-stone-300 bg-white px-2.5 shadow-2xs">
                <span className="font-black italic text-xs text-[#1A1F71] tracking-wider">
                  VISA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Link */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#7A2318] mb-5 tracking-tight">
            Quick Link
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["Tours & Packages", "/tours"],
              ["Luxury Car Hire", "/cars"],
              ["Same Day Taj Mahal Tour", "/tours/same-day-taj-mahal-tour"],
              ["Golden Triangle Tours", "/tours/5-day-golden-triangle"],
              ["Photo Gallery", "/gallery"],
              ["Heritage Rajasthan Tours", "/tours/10-day-rajasthan-tour"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 transition hover:text-[#7A2318]"
                >
                  <span className="text-xs text-[#BA9366] transition group-hover:translate-x-0.5">
                    ▸
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#7A2318] mb-5 tracking-tight">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Why Choose TripSthan", "/about"],
              ["Privacy Policy", "/contact"],
              ["Terms and Conditions", "/contact"],
              ["Refund and Cancellation", "/contact"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 transition hover:text-[#7A2318]"
                >
                  <span className="text-xs text-[#BA9366] transition group-hover:translate-x-0.5">
                    ▸
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#7A2318] mb-5 tracking-tight">
            Contact Us
          </h3>

          {/* Address */}
          <div className="flex items-start gap-3 text-sm">
            <span className="text-base text-[#7A2318] shrink-0 mt-0.5">📍</span>
            <div className="leading-relaxed">
              <p className="font-semibold text-[#3B2D24]">Agra, Uttar Pradesh, India</p>
              <p className="text-xs text-[#6B5A50] mt-0.5">Head Office & Taj Sightseeing Desk</p>
              <p className="text-xs text-[#6B5A50]">Delhi NCR Airport Pickup Hub</p>
            </div>
          </div>

          {/* Phones */}
          <div className="space-y-2 pt-1 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#7A2318] shrink-0">☎️</span>
              <a
                href={tel(C.phones[0])}
                className="font-medium hover:text-[#7A2318] hover:underline"
              >
                {C.phones[0]}
              </a>
            </div>
            {C.phones[1] && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#7A2318] shrink-0">📞</span>
                <a
                  href={tel(C.phones[1])}
                  className="font-medium hover:text-[#7A2318] hover:underline"
                >
                  {C.phones[1]}
                </a>
              </div>
            )}
          </div>

          {/* Emails */}
          <div className="space-y-2 pt-1 text-sm">
            {C.emails.map((e) => (
              <div key={e} className="flex items-center gap-3">
                <span className="text-sm text-[#7A2318] shrink-0">✉️</span>
                <a
                  href={`mailto:${e}`}
                  className="break-all font-medium hover:text-[#7A2318] hover:underline"
                >
                  {e}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright row */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A6A5E] pt-10 pb-4 border-t border-[#DECFC0]/70 mt-12 relative z-10">
        <p>© {new Date().getFullYear()} TripSthan Tours Pvt. Ltd. All Rights Reserved.</p>
        <p className="hidden sm:block">Recognized Travel Agency & Private Tourist Cab Service</p>
      </div>

      {/* Big Background Watermark */}
      <div className="w-full overflow-hidden flex justify-center -mb-4 sm:-mb-6 pointer-events-none">
        <span className="font-extrabold tracking-tight text-[#7A2318]/10 text-[13vw] leading-none whitespace-nowrap select-none">
          TripSthan
        </span>
      </div>
    </footer>
  );
}
