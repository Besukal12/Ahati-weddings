import { Asterisk } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-burgundy">
      <Navbar />

      {/* Giant outlined background word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none text-center font-heading text-[clamp(6rem,28vw,24rem)] uppercase leading-[0.8] text-gold-second opacity-20 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor]"
      >
        About us
      </span>

      <div className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44">
        <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
          <Asterisk className="size-5 md:size-6" strokeWidth={3} />
          <span>About Ahati</span>
        </div>

        <h1 className="font-heading text-[clamp(3.25rem,13vw,8.5rem)] uppercase leading-[0.9] text-gold-second">
          <span className="block">Ethiopian weddings</span>
          <span className="block text-ivory">planned with purpose</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-snug text-ivory/90 sm:text-xl md:text-2xl">
          We help couples plan Ethiopian Orthodox Tewahedo Church weddings,
          bringing wedding preparation and vendor coordination together with
          respect for traditions meaningful to each couple and family.
        </p>
      </div>

      {/* Lime strip, same as the home hero */}
      <div className="h-3 bg-gold-second sm:h-4" aria-hidden />
    </section>
  );
}
