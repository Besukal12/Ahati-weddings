import { Asterisk } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

export function GalleryHero() {
  return (
    <header className="relative isolate overflow-hidden bg-forest">
      <Navbar />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none text-center font-heading text-[clamp(6rem,28vw,24rem)] uppercase leading-[0.8] text-lime opacity-20 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor]"
      >
        Portfolio
      </span>

      <div className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44">
        <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
          <Asterisk className="size-5 md:size-6" strokeWidth={3} />
          <span>Ahati Portfolio</span>
        </div>

        <h1 className="font-heading text-[clamp(3.25rem,13vw,8.5rem)] uppercase leading-[0.9] text-lime">
          <span className="block">Wedding</span>
          <span className="block text-background">Moments</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium leading-snug text-background/90 sm:text-xl md:text-2xl">
          Explore wedding photography and films celebrating the details,
          traditions, and people that make each day special.
        </p>
      </div>

      <div className="h-3 bg-lime sm:h-4" aria-hidden />
    </header>
  );
}
