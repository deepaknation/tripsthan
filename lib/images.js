const P = {
  taj: "1564507592333-c60657eea523",
  taj2: "1548013146-72479768bada",
  hawa: "1477587458883-47145ed94245",
  amber: "1599661046289-e31897846e41",
  gate: "1587474260584-136574528ed5",
  varanasi: "/images/varanasi.jpg",
  tiger: "1561731216-c3a4d99437d5",
  manali: "1626621341517-bbf3d9990a23",
  golden: "1514222134-b57cbb8ce073",
  amritsar: "1514222134-b57cbb8ce073",
  rajasthan: "1597040663342-45b6af3d91a5",
  desert: "1576487248805-cf45f6bcc67f",
  rishikesh: "1544717305-2782549b5136",
  haridwar: "1584551246679-0daf3d275d0f",
  shimla: "1573843981267-be1999ff37cd",
  peaks: "1506905925346-21bda4d32df4",
  travel: "1469854523086-cc02fe5d8800",
};
export const img = (k, w = 900) => {
  if (k === "varanasi" || P[k]?.startsWith?.("/")) return P[k] || "/images/varanasi.jpg";
  return `https://images.unsplash.com/photo-${P[k] || P.travel}?auto=format&fit=crop&w=${w}&q=80`;
};
export const GALLERY=["taj","hawa","varanasi","tiger","manali","amber","golden","gate","travel"];
