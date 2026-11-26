export type Vendor = {
  name: string;
  category: "music" | "floral" | "makeup" | "styling";
  image: string;
  location: string;
  about: string;
};

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "music", label: "Music & DJ" },
  { id: "floral", label: "Floral & Decor" },
  { id: "makeup", label: "Makeup & Beauty" },
  { id: "styling", label: "Bridal Styling" },
] as const;

// Sample vendors: replace with your real vendors
export const VENDORS: Vendor[] = [
  { name: "Selam Sound", category: "music", image: "/wedding-production.webp", location: "Addis Ababa", about: "Live bands, DJs, and traditional music for ceremony and reception." },
  { name: "Habesha Beats", category: "music", image: "/wedding-production.webp", location: "Addis Ababa", about: "Modern DJ sets blended with Ethiopian classics." },
  { name: "Enat Flowers", category: "floral", image: "/Ahati-decor.jpg", location: "Bole", about: "Fresh bouquets, arches, and table arrangements." },
  { name: "Meskel Decor", category: "floral", image: "/Ahati-decor2.jpg", location: "Kazanchis", about: "Full-hall styling with floral and fabric design." },
  { name: "Glow by Hana", category: "makeup", image: "/ahati_hero_image.png", location: "Piassa", about: "Bridal and family makeup, trial sessions included." },
  { name: "Lalibela Beauty", category: "makeup", image: "/ahati_hero_image.png", location: "CMC", about: "Natural, long-lasting looks for the whole wedding party." },
  { name: "Netela Bridal", category: "styling", image: "/Ahati-decor.webp", location: "Addis Ababa", about: "Traditional habesha kemis and modern gown styling." },
  { name: "Zuria Atelier", category: "styling", image: "/Ahati-decor.webp", location: "Megenagna", about: "Custom bridal outfits and hair accessories." },
];
