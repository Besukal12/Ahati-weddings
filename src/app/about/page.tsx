import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Ahati Weddings | Ethiopian Orthodox Wedding Planning",
  description:
    "Learn how Ahati Weddings supports couples planning Ethiopian Orthodox Church weddings through thoughtful preparation, vendor coordination, and respect for each couple's traditions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
    </main>
  );
}
