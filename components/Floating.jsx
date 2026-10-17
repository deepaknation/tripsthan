"use client";
import { useState } from "react";
import { Phone, MessageSquare, X, Send, Sparkles, CheckCheck } from "lucide-react";
import { C, tel, wa } from "@/lib/data";

export default function Floating() {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");

  const handleQuickQuestion = (text) => {
    const targetUrl = `${wa}?text=${encodeURIComponent(text)}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputMsg.trim()) return;
    const targetUrl = `${wa}?text=${encodeURIComponent(inputMsg.trim())}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    setInputMsg("");
  };

  return (
    <>
      {/* Interactive Live Chat Modal Window */}
      {chatOpen && (
        <div
          role="dialog"
          aria-label="TripSthan Live Chat"
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[92vw] max-w-[360px] sm:max-w-[380px] rounded-3xl bg-white shadow-2xl border border-stone-200/90 overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Live Chat Header */}
          <div className="bg-gradient-to-r from-[#261E19] via-[#3B2D24] to-[#7A2318] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-saffron text-white font-black flex items-center justify-center text-sm shadow-md border-2 border-white/30">
                  TS
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#261E19] animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                  <span>TripSthan Concierge</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h3>
                <p className="text-[11px] text-stone-300 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span>Online &bull; Instant Reply</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close live chat"
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition active:scale-90"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 bg-[#FAF7F2] space-y-3 max-h-[340px] overflow-y-auto text-xs sm:text-sm">
            {/* Operator greeting bubble */}
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 rounded-full bg-saffron text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                TS
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-xs border border-stone-200/80 text-stone-800 space-y-1.5">
                <p className="font-semibold text-ink">Namaste! 🙏 Welcome to TripSthan.</p>
                <p className="text-stone-600 leading-relaxed text-xs">
                  We are ready to assist with your private India tour, custom car with driver itinerary, or airport transfer.
                </p>
                <div className="flex items-center gap-1 text-[10px] text-stone-400 pt-1">
                  <span>Just now</span>
                  <CheckCheck className="w-3 h-3 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="pt-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 block mb-1.5">
                Select quick enquiry:
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  "Hello TripSthan, I want a quote for Car Hire with Driver (Dzire/Innova/Urbania).",
                  "Hi, I would like to plan a 5-Day Golden Triangle Tour.",
                  "Hello, please share custom Rajasthan tour packages and prices.",
                  "Hi TripSthan, I need Delhi Airport pickup and drop service.",
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickQuestion(prompt)}
                    className="text-left rounded-xl border border-stone-200 bg-white hover:border-saffron hover:bg-[#FFF5EC] p-2 text-xs font-medium text-stone-700 hover:text-saffron transition shadow-2xs active:scale-98 flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <Send className="w-3 h-3 text-stone-400 group-hover:text-saffron shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Chat Input */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Type your message to start chat..."
              className="flex-1 rounded-full border border-stone-300 bg-stone-50/70 px-4 py-2 text-xs sm:text-sm text-ink placeholder-stone-400 focus:border-saffron focus:bg-white focus:outline-none focus:ring-1 focus:ring-saffron"
            />
            <button
              type="submit"
              disabled={!inputMsg.trim()}
              aria-label="Send message to live chat"
              className="h-9 w-9 rounded-full bg-saffron hover:bg-[#d45504] text-white flex items-center justify-center shrink-0 transition disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Footer note */}
          <div className="bg-[#FAF7F2] px-4 py-1.5 border-t border-stone-200/60 text-center text-[10px] text-stone-500">
            ⚡ Direct live support connected to verified WhatsApp desk
          </div>
        </div>
      )}

      {/* Floating Action Strip */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
      >
        {/* Live Chat Button */}
        <div className="group relative flex items-center pointer-events-auto">
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-dark/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition-all duration-200 group-hover:block">
            {chatOpen ? "Close Live Chat" : "Live Chat Support"}
          </span>
          <button
            type="button"
            onClick={() => setChatOpen((prev) => !prev)}
            aria-label="Toggle Live Chat"
            className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#7A2318] via-[#BA9366] to-saffron p-2.5 sm:p-3 text-white shadow-xl shadow-stone-900/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 cursor-pointer"
          >
            {/* Live Indicator Pulse */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
            </span>

            {chatOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={2.5} />
            ) : (
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-sm" strokeWidth={2.2} />
            )}
          </button>
        </div>

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
            className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2BE875] p-2.5 sm:p-3 text-white shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
          >
            <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366]/30 duration-1000" />
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 fill-current drop-shadow-sm"
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
            className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#C84E00] via-saffron to-[#FF7B22] p-2.5 sm:p-3 text-white shadow-xl shadow-orange-950/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-sm" strokeWidth={2.2} />
          </a>
        </div>
      </aside>
    </>
  );
}
