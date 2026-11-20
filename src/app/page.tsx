import { Navbar } from "@/components/sections/Navbar";
import { Marquee } from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServiceSection";
import StylesSection from "@/components/sections/StylesSection";
import { VendorSection } from "@/components/sections/VendorSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Hero() {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden bg-forest">
      <Navbar />

      <HeroSection />

      <Marquee />

      <ServicesSection />

      <StylesSection />

      <VendorSection />
    </div>
  );
}
