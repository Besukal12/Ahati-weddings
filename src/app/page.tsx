import { Navbar } from "@/components/ui/Navbar";
import { Marquee } from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServiceSection";
import StylesSection from "@/components/sections/StylesSection";
import { VendorSection } from "@/components/sections/VendorSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeJournal } from "@/components/journal/HomeJournal";
import { createPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Hero() {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden bg-burgundy">
      <Navbar />

      <HeroSection />

      <Marquee />

      <ServicesSection />

      <StylesSection />

      <VendorSection />

      <ExperienceSection />

      <HomeJournal />
    </div>
  );
}
