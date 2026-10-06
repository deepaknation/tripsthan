"use client";
import { motion } from "framer-motion";

export default function Timeline({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="relative mx-auto max-w-4xl py-6">
      {/* Vertical Connecting Line */}
      <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-saffron via-amber-400 to-[#8E2818]/30" />

      <div className="space-y-8 sm:space-y-10">
        {items.map((item, i) => {
          // Normalize item whether it's an object or legacy tuple [title, desc]
          const isTuple = Array.isArray(item);
          const dayLabel = isTuple ? `Day ${i + 1}` : item.day || `Day ${i + 1}`;
          const title = isTuple ? item[0] : item.title || `Day ${i + 1}`;
          const desc = isTuple ? item[1] : item.desc || "";
          const points = !isTuple && Array.isArray(item.points) ? item.points : [];
          const overnight = !isTuple ? item.overnight : null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex items-start gap-4 sm:gap-8"
            >
              {/* Stepper Node */}
              <div className="relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-saffron text-white font-bold text-xs sm:text-sm shadow-md ring-4 ring-white">
                {i + 1}
              </div>

              {/* Day Card */}
              <div className="flex-1 rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-7 shadow-sm transition hover:shadow-md">
                {/* Header Tag & Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 border border-amber-200/70">
                    🗓️ {dayLabel}
                  </span>
                  {overnight && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
                      <span>🌙</span>
                      <strong className="text-stone-800">{overnight}</strong>
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg sm:text-xl font-bold text-ink">
                  {title}
                </h3>

                {/* Day Description */}
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-pre-line">
                  {desc}
                </p>

                {/* Highlights / Monuments Bullet List (if available) */}
                {points.length > 0 && (
                  <div className="mt-4 rounded-xl bg-[#FAF7F2] p-4 border border-[#EAE0D2]/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8E2818] mb-2">
                      Key Highlights & Sightseeing:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                      {points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-saffron font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Overnight Stay Highlight footer (if not already at top) */}
                {overnight && (
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">🏨</span>
                      <span>Stay / Conclusion: <strong>{overnight}</strong></span>
                    </span>
                    <span className="text-emerald-700 font-medium">
                      ✓ Private AC Cab on standby
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
