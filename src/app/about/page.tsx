import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About | Ahati Weddings",
  description:
    "Meet Ahati Weddings and discover our mission to make Ethiopian Orthodox celebrations safe, organized, meaningful, and unforgettable.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
    </main>
  );
}
