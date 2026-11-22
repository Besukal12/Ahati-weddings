import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About | Ahati Weddings",
  description:
    "Get to know Ahati Weddings: thoughtful planning, trusted wedding services, and celebrations rooted in Ethiopian tradition.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
    </main>
  );
}
