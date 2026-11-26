export type ServiceItem = {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  description: string;
  includes: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "venues",
    label: "Venues",
    image: "/Ahati-decor.jpg",
    tagline: "The right place for every ceremony and celebration.",
    description:
      "We help you shortlist and book church-friendly ceremony spaces and reception halls that fit your guest list, budget, and traditions.",
    includes: ["Venue shortlisting & visits", "Capacity and layout planning", "Contract and booking support", "Day-of venue coordination"],
  },
  {
    slug: "catering",
    label: "Catering",
    image: "/wedding catering.webp",
    tagline: "Traditional flavors, served with care.",
    description:
      "From fasting-friendly menus to full reception feasts, we coordinate trusted caterers who honor Ethiopian Orthodox customs.",
    includes: ["Menu planning & tasting", "Fasting and non-fasting options", "Service staff coordination", "Drinks and cake arrangements"],
  },
  {
    slug: "decoration",
    label: "Decoration",
    image: "/Ahati-decor2.jpg",
    tagline: "Details that turn a hall into your story.",
    description:
      "Floral design, stage styling, table settings, and lighting built around your chosen wedding style.",
    includes: ["Concept & mood boards", "Stage and entrance design", "Floral and table styling", "Setup and teardown"],
  },
  {
    slug: "photography",
    label: "Photography",
    image: "/Ahati-decor.webp",
    tagline: "Every moment kept, beautifully.",
    description:
      "Professional photographers and videographers who capture the ceremony, the family, and the small moments in between.",
    includes: ["Pre-wedding shoots", "Full-day coverage", "Edited photo albums", "Highlight film"],
  },
  {
    slug: "transportation",
    label: "Transportation",
    image: "/wedding-car.jpg",
    tagline: "Arrive in style, on time.",
    description:
      "Decorated bridal cars and guest transport planned around your ceremony timeline and photo stops.",
    includes: ["Decorated bridal cars", "Family and guest shuttles", "Route and timing plan", "Experienced drivers"],
  },
  {
    slug: "production",
    label: "Production",
    image: "/wedding-production.webp",
    tagline: "Sound, light, and flow, handled.",
    description:
      "Sound systems, lighting, MCs, and run-of-show management so your program runs smoothly from start to finish.",
    includes: ["Sound and lighting", "MC and program flow", "Live music and DJ", "On-site production crew"],
  },
];
