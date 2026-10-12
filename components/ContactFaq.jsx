"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_FAQS } from "@/lib/data";

export default function ContactFaq({ faqs = CONTACT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const list = faqs && faqs.length > 0 ? faqs : CONTACT_FAQS;

  return (
    <div className="space-y-4">
      {list.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#7A2318]/40 bg-white shadow-md shadow-[#7A2318]/5"
                : "border-stone-200 bg-white hover:border-[#DECFC0]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isOpen
                      ? "bg-saffron text-white"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  Q{index + 1}
                </span>
                <span className="font-bold text-base sm:text-lg text-ink leading-snug">
                  {faq.q}
                </span>
              </div>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-saffron text-white"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-700 bg-stone-50/50 leading-relaxed border-t border-stone-100">
                <p className="font-medium text-stone-800">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
