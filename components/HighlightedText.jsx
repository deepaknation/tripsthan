"use client";

// Target SEO keywords to highlight across package descriptions & overviews
const DEFAULT_KEYWORDS = [
  // 1. Jaipur Day Tour
  "jaipur sightseeing tour",
  "jaipur city tour",
  "amber palace",
  "hawa mahal",
  "jal mahal",
  "jantar mantar",
  "city palace",

  // 2. 12 Days Himachal & Amritsar Tour
  "himachal amritsar tour package",
  "himachal amritsar tour",
  "shimla manali dharamshala tour",
  "amritsar golden temple tour",
  "north india hill station tour",

  // 3. 10 Days Rajasthan Tour
  "10 days rajasthan tour",
  "rajasthan tour packages",
  "rajasthan tour package",
  "rajasthan luxury tours",
  "rajasthan luxury tour",

  // 4. 7 Days Golden Triangle with Jungle Tour
  "golden triangle tour ranthambore",
  "tour package for ranthambore",
  "ranthambore safari tour",
  "ranthambore",
  "safari tour",

  // 5. 7 Days Golden Triangle & Rishikesh Tour
  "delhi agra jaipur rishikesh tour package",
  "delhi agra jaipur rishikesh tour",
  "golden triangle tour with rishikesh",
  "golden triangle rishikesh tour",
  "india golden triangle yoga tour",

  // 6. 4 Days Holy River Ganga Tour – Haridwar & Rishikesh
  "ganga tour haridwar rishikesh",
  "delhi haridwar rishikesh tour",
  "rishikesh yoga tour package",
  "haridwar rishikesh tour",

  // 7. 7 Days Shimla Manali Tour
  "delhi shimla manali tour",
  "shimla manali tour package",
  "shimla manali tour",
  "himachal tour package",
  "himachal tour packages",

  // Golden Triangle & Taj Mahal tours
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

  // General India Tours
  "india tour packages",
  "india tour package",
  "india tours",
  "india tour",
];

export default function HighlightedText({
  text,
  keywords = DEFAULT_KEYWORDS,
  className = "",
}) {
  if (!text) return null;

  // Sort by length descending to match longer phrases first and escape regex
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const escaped = sortedKeywords.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={`break-words [overflow-wrap:anywhere] ${className}`}>
      {parts.map((part, i) => {
        const isMatch = keywords.some(
          (k) => k.toLowerCase() === part.toLowerCase()
        );
        if (isMatch) {
          return (
            <mark
              key={i}
              className="inline rounded bg-[#FFF2E6] px-1 py-0.5 font-bold text-saffron  border-saffron/20 align-baseline break-words [overflow-wrap:anywhere]"
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
