export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: string;
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
    image: "/journal/traditions.jpg",
  },
  {
    slug: "choosing-your-wedding-style",
    title: "Traditional, Modern or Fusion: Choosing Your Style",
    excerpt:
      "Three styles, three moods. Learn how to pick the theme that feels most like the two of you.",
    category: "Styles",
    date: "2026-10-28",
    readTime: "5 min read",
    image: "/journal/styles.jpg",
  },
  {
    slug: "wedding-planning-timeline",
    title: "Your 12-Month Wedding Planning Timeline",
    excerpt:
      "A simple month-by-month checklist so nothing gets missed, from the first call to the last dance.",
    category: "Planning",
    date: "2026-10-15",
    readTime: "6 min read",
    image: "/journal/timeline.jpg",
  },
  {
    slug: "garden-wedding-in-addis",
    title: "A Garden Wedding in Addis Ababa",
    excerpt:
      "Take a look inside Hana and Dawit's day, with white roses, green arches and a lot of dancing.",
    category: "Real Weddings",
    date: "2026-09-30",
    readTime: "4 min read",
    image: "/journal/real-wedding.jpg",
  },
  {
    slug: "how-to-choose-a-photographer",
    title: "How to Choose the Right Wedding Photographer",
    excerpt:
      "The questions to ask, the red flags to avoid and how to read a portfolio like a pro.",
    category: "Vendors",
    date: "2026-09-12",
    readTime: "5 min read",
    image: "/journal/photographer.jpg",
  },
  {
    slug: "traditional-dress-ideas",
    title: "Habesha Kemis: Dress Ideas for the Modern Bride",
    excerpt:
      "Embroidery, fabrics and fits that keep the tradition while still feeling fresh and personal.",
    category: "Styles",
    date: "2026-08-25",
    readTime: "4 min read",
    image: "/journal/dress.jpg",
  },
  {
    slug: "catering-menu-ideas",
    title: "Building a Wedding Menu Your Guests Will Remember",
    excerpt:
      "Balance traditional dishes and modern plates, and plan portions without waste.",
    category: "Planning",
    date: "2026-08-08",
    readTime: "6 min read",
    image: "/journal/catering.jpg",
  },
];
