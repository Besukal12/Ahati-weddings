export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: string;
  sections: PostSection[];
};

export const CATEGORIES = [
  "All",
  "Traditions",
  "Styles",
  "Planning",
  "Real Weddings",
  "Vendors",
];

/* Replace titles, text and images with your real posts */
export const POSTS: Post[] = [
  {
    slug: "guide-to-ethiopian-wedding-traditions",
    title: "A Complete Guide to Ethiopian Wedding Traditions",
    excerpt:
      "From the Telosh to the Melse, here is what each ceremony means and how to include it in your big day.",
    category: "Traditions",
    date: "2026-11-10",
    readTime: "8 min read",
    image: "/Ahati-decor2.jpg",
    sections: [
      {
        heading: "Begin with your families",
        paragraphs: [
          "Ethiopian wedding celebrations can bring together ceremonies and customs that are meaningful to each couple and their families. The details vary across communities and households, so start by talking with the people whose traditions you want to honor.",
          "Ask what each moment means to them, who should take part, and what needs to happen before guests arrive. These conversations help turn a long list of customs into a plan that feels personal and considered.",
        ],
      },
      {
        heading: "Plan the flow of the day",
        paragraphs: [
          "Once you understand which traditions are important, map them alongside the practical parts of the celebration. Give each ceremony a place in the schedule and allow enough time for guests to move between spaces, change attire, or take a break.",
          "If your plans include moments such as a Telosh or Melse, confirm the timing and arrangements with your families. Their guidance is the best way to reflect the customs that are right for your celebration.",
        ],
      },
      {
        heading: "Make the details clear",
        paragraphs: [
          "Share the schedule with your planner, venue, and vendors so everyone understands when and where each part happens. A simple program can also help guests follow the celebration, especially when it includes several ceremonies.",
          "Traditions are not one-size-fits-all. Keep the elements that matter to you, make space for both families, and let the day reflect your own story.",
        ],
      },
    ],
  },
  {
    slug: "choosing-your-wedding-style",
    title: "Traditional, Modern or Fusion: Choosing Your Style",
    excerpt:
      "Three styles, three moods. Learn how to pick the theme that feels most like the two of you.",
    category: "Styles",
    date: "2026-10-28",
    readTime: "5 min read",
    image: "/Ahati-decor.jpg",
    sections: [
      {
        heading: "Traditional elegance",
        paragraphs: [
          "A traditional direction can bring cultural details, formal attire, and family customs to the center of the celebration. Start by choosing the traditions and visual details that feel most meaningful to you rather than trying to include everything.",
        ],
      },
      {
        heading: "Modern luxury",
        paragraphs: [
          "A modern look often relies on a clear palette, considered materials, and a few strong design choices. Focus on the atmosphere you want guests to experience, then carry that direction through the venue, decor, stationery, and attire.",
        ],
      },
      {
        heading: "Cultural fusion",
        paragraphs: [
          "A fusion celebration can combine customs and contemporary elements in a way that feels cohesive. Choose a few shared colors or design details to connect different parts of the day, and plan transitions so each moment feels intentional.",
        ],
        bullets: [
          "Collect inspiration from both partners and families.",
          "Choose a practical budget before confirming design details.",
          "Share the same style references with every vendor.",
        ],
      },
    ],
  },
  {
    slug: "wedding-planning-timeline",
    title: "Your 12-Month Wedding Planning Timeline",
    excerpt:
      "A simple month-by-month checklist so nothing gets missed, from the first call to the last dance.",
    category: "Planning",
    date: "2026-10-15",
    readTime: "6 min read",
    image: "/wedding catering.webp",
    sections: [
      {
        heading: "12 to 9 months out",
        paragraphs: [
          "Set a working budget, discuss your guest list, and decide on the kind of celebration you want. Research venues and the availability of the services that matter most before settling on a date.",
        ],
        bullets: [
          "Agree on priorities and a comfortable budget range.",
          "Explore venues and confirm your date.",
          "Start conversations with key vendors.",
        ],
      },
      {
        heading: "8 to 5 months out",
        paragraphs: [
          "With the main plans in place, build the look and schedule of the day. Confirm the services you need and make sure your vendors have the latest details about the venue, guest count, and timing.",
        ],
        bullets: [
          "Confirm catering, decor, photography, and production plans.",
          "Choose attire and coordinate fittings.",
          "Draft the event schedule and guest communications.",
        ],
      },
      {
        heading: "4 months to the wedding",
        paragraphs: [
          "Use the final months to confirm logistics rather than introduce major changes. Review arrangements with your vendors, share a final timeline, and make sure someone you trust knows who to contact on the day.",
        ],
        bullets: [
          "Confirm final numbers and vendor arrival times.",
          "Review the ceremony and reception schedule.",
          "Prepare payments, contact details, and a day-of checklist.",
        ],
      },
    ],
  },
  {
    slug: "garden-wedding-in-addis",
    title: "A Garden Wedding in Addis Ababa",
    excerpt:
      "Take a look inside Hana and Dawit's day, with white roses, green arches and a lot of dancing.",
    category: "Real Weddings",
    date: "2026-09-30",
    readTime: "4 min read",
    image: "/Ahati-decor.webp",
    sections: [
      {
        heading: "A garden setting in Addis",
        paragraphs: [
          "A garden celebration offers an open-air backdrop for a wedding day. For Hana and Dawit, the inspiration begins with a fresh palette of white roses and green arches, creating a clear visual direction for the event.",
          "When planning an outdoor wedding, visit the space at the time of day your event will take place. Consider the light, guest flow, and where each part of the celebration will happen.",
        ],
      },
      {
        heading: "Bring the design together",
        paragraphs: [
          "Choose a small group of colors and repeat them through the ceremony and reception. Floral arrangements, table details, and the ceremony backdrop can each contribute without competing for attention.",
          "Ask your venue and decor team how the setup can adapt to weather or changing light. A backup plan helps protect the schedule and keeps guests comfortable.",
        ],
      },
      {
        heading: "Plan for the guest experience",
        paragraphs: [
          "Think about seating, shade, pathways, and access between spaces. Coordinate catering, photography, and music around the event timeline so vendors can work smoothly while guests enjoy the celebration.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-photographer",
    title: "How to Choose the Right Wedding Photographer",
    excerpt:
      "The questions to ask, the red flags to avoid and how to read a portfolio like a pro.",
    category: "Vendors",
    date: "2026-09-12",
    readTime: "5 min read",
    image: "/wedding-production.webp",
    sections: [
      {
        heading: "Look beyond the highlight reel",
        paragraphs: [
          "A portfolio shows how a photographer handles different lighting, settings, and moments. Look through complete galleries when possible, not only a selection of favorite images, to understand how they document a full event.",
        ],
        bullets: [
          "Review indoor and outdoor celebrations.",
          "Look for consistent color and image quality.",
          "Notice how candid moments and family portraits are handled.",
        ],
      },
      {
        heading: "Ask about the service",
        paragraphs: [
          "Before booking, discuss coverage hours, the number of photographers, delivery timing, and how the finished images will be shared. Make sure the agreement explains what is included and how additional requests are handled.",
        ],
      },
      {
        heading: "Check that the fit is right",
        paragraphs: [
          "Your photographer will be close by throughout important moments. Talk through your schedule, family priorities, and any traditions you want documented, then choose someone whose communication style makes you comfortable.",
        ],
      },
    ],
  },
  {
    slug: "traditional-dress-ideas",
    title: "Habesha Kemis: Dress Ideas for the Modern Bride",
    excerpt:
      "Embroidery, fabrics and fits that keep the tradition while still feeling fresh and personal.",
    category: "Styles",
    date: "2026-08-25",
    readTime: "4 min read",
    image: "/ahati_hero_image.png",
    sections: [
      {
        heading: "Start with the look and feel",
        paragraphs: [
          "Habesha kemis designs range from understated to richly detailed. Gather references for embroidery, color, neckline, and sleeve shape, then discuss which elements work together and suit the celebration you have planned.",
        ],
      },
      {
        heading: "Choose materials with the occasion in mind",
        paragraphs: [
          "Consider how the fabric looks in natural and evening light, how it moves, and how comfortable it will feel over several hours. If you are coordinating outfits with a partner or wedding party, agree on a palette before ordering.",
        ],
      },
      {
        heading: "Leave time for fittings",
        paragraphs: [
          "Work with your designer or tailor on a timeline that allows for measurements, fittings, and small adjustments. Bring your shoes and accessories to a fitting so the final length and proportions can be checked together.",
        ],
      },
    ],
  },
  {
    slug: "catering-menu-ideas",
    title: "Building a Wedding Menu Your Guests Will Remember",
    excerpt:
      "Balance traditional dishes and modern plates, and plan portions without waste.",
    category: "Planning",
    date: "2026-08-08",
    readTime: "6 min read",
    image: "/wedding-car.jpg",
    sections: [
      {
        heading: "Build a menu around your guests",
        paragraphs: [
          "Think about the style of the celebration, the time of day, and the guests you are welcoming. A menu can include familiar favorites alongside new choices, with options that account for dietary needs.",
          "Ask your caterer how dishes will be served and how the menu fits the schedule. The service style affects timing, seating, and the overall flow of the reception.",
        ],
      },
      {
        heading: "Taste, discuss, and confirm",
        paragraphs: [
          "A tasting is a chance to discuss flavor, presentation, and portion expectations with your caterer. Share your guest estimate and ask how the team plans for dietary restrictions and changes in attendance.",
        ],
        bullets: [
          "Confirm menu selections and serving style in writing.",
          "Provide clear notes on allergies and dietary requirements.",
          "Coordinate meal service with speeches, dancing, and other events.",
        ],
      },
      {
        heading: "Make the experience memorable",
        paragraphs: [
          "A well-planned menu supports the celebration rather than interrupting it. Keep communication open with your catering team as the guest count and schedule are finalized, and share one updated plan with everyone involved.",
        ],
      },
    ],
  },
];
