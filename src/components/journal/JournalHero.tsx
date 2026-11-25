import { Asterisk } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

export function JournalHero() {
  return (
    <section className="relative isolate overflow-hidden bg-burgundy">
      <Navbar />

      {/* Giant outlined background word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none text-center font-heading text-[clamp(6rem,28vw,24rem)] uppercase leading-[0.8] text-gold-second opacity-20 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor]"
      >
        Journal
      </span>

      <div className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44">
        <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
          <Asterisk className="size-5 md:size-6" strokeWidth={3} />
          <span>The Ahati Journal</span>
        </div>

        <h1 className="font-heading text-[clamp(3.25rem,13vw,8.5rem)] uppercase leading-[0.9] text-gold-second">
          <span className="block">Stories &amp;</span>
          <span className="block text-ivory">Inspiration</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium leading-snug text-ivory/90 sm:text-xl md:text-2xl">
          Wedding traditions, style guides and real celebrations to help you
          plan a day you will never forget.
        </p>
      </div>

      {/* Lime strip, same as the home hero */}
      <div className="h-3 bg-gold-second sm:h-4" aria-hidden />
    </section>
  );
}
