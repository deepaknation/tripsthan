"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CAR_FAQS } from "@/lib/cars";

export default function CarFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3.5">
      {CAR_FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.q}
            className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all duration-200 hover:border-[#DECFC0]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-stone-50/70 transition gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-sm sm:text-base text-ink leading-snug">
                {faq.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stone-100 text-stone-700 text-xs font-bold transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-saffron text-white" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 bg-stone-50/50 leading-relaxed border-t border-stone-100">
                <p className="font-medium text-stone-800">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
