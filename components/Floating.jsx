"use client";
import {C,tel,wa} from "@/lib/data";

export default function Floating(){
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <div className="group relative flex items-center pointer-events-auto">
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-dark/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition-all duration-200 group-hover:block">
          Chat on WhatsApp
        </span>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2BE875] p-3 text-white shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366]/30 duration-1000" />
          <svg
            className="h-7 w-7 fill-current drop-shadow-sm"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.97.58 3.84 1.68 5.43L2 22l4.82-1.76a9.88 9.88 0 0 0 5.22 1.48h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 17.59h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09 1.13 1.15-3.02-.2-.32a8.21 8.21 0 0 1-1.26-4.16c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.25 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/>
          </svg>
        </a>
      </div>

      {/* Phone Call Button */}
      <div className="group relative flex items-center pointer-events-auto">
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-dark/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition-all duration-200 group-hover:block">
          Call {C.phones[0]}
        </span>
        <a
          href={tel(C.phones[0])}
          aria-label="Call Tripsthan"
          className="relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#C84E00] via-saffron to-[#FF7B22] p-3 text-white shadow-xl shadow-orange-950/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95"
        >
          <svg
            className="h-6 w-6 stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round drop-shadow-sm"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
