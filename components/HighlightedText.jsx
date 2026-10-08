"use client";

// Target SEO keywords to highlight across package descriptions
const DEFAULT_KEYWORDS = [
  "golden triangle tour india packages",
  "golden triangle tour india package",
  "golden triangle private tour",
  "golden triangle tour delhi",
  "golden triangle india tours",
  "golden triangle india tour",
  "golden triangle tour with pushkar",
  "same-day taj mahal tour",
  "same day taj mahal tour",
  "taj mahal tour",
  "agra city tour",
  "delhi tour agencies",
  "delhi tour agency",
  "delhi tour packages",
  "delhi tour package",
  "varanasi spiritual tours",
  "varanasi spiritual tour",
];

export default function HighlightedText({ text, keywords = DEFAULT_KEYWORDS, className = "" }) {
  if (!text) return null;

  // Sort by length descending to match longer phrases first and escape regex
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const escaped = sortedKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const isMatch = keywords.some(
          (k) => k.toLowerCase() === part.toLowerCase()
        );
        if (isMatch) {
          return (
            <mark
              key={i}
              className="inline-block rounded-md  border-saffron/30 bg-[#FFF2E6] px-1.5 py-0.5 font-bold text-saffron shadow-xs mx-0.5 align-baseline"
            >
              {part}
            </mark>
          );
        }
        return part;
      })}
    </span>
  );
}
