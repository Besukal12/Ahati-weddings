import { Asterisk } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

type Props = { eyebrow: string; bgWord: string; line1: string; line2: string; text: string };

const TICKER = ["Plan", "Celebrate", "Remember", "Ahati Weddings"];

export function PageHero({ eyebrow, bgWord, line1, line2, text }: Props) {
  return (
    <header className="relative isolate overflow-hidden bg-burgundy">
      <Navbar />

      {/* Decorative floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-floaty absolute right-[8%] top-28 size-24 rounded-full border-2 border-gold/40 md:size-40" />
        <div className="animate-floaty absolute right-[22%] top-56 size-6 rounded-full bg-gold/60 [animation-delay:-3s]" />
        <Asterisk className="animate-floaty absolute right-[14%] bottom-24 size-16 text-gold/30 [animation-delay:-5s] md:size-28" strokeWidth={2} />
        <div className="absolute -left-24 top-1/3 size-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <span
        aria-hidden
        className="animate-drift pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none text-center font-heading text-[clamp(6rem,28vw,24rem)] uppercase leading-[0.8] text-gold-second opacity-20 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor]"
      >
        {bgWord}
      </span>

      <div className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44">
        <div className="animate-rise mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
          <Asterisk className="size-5 animate-spin [animation-duration:8s] md:size-6" strokeWidth={3} />
          <span>{eyebrow}</span>
        </div>
        <h1 className="font-heading text-[clamp(3.25rem,13vw,8.5rem)] uppercase leading-[0.9] text-gold-second">
          <span className="animate-rise block [animation-delay:120ms]">{line1}</span>
          <span className="animate-rise block text-ivory [animation-delay:260ms]">{line2}</span>
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg font-medium leading-snug text-ivory/90 [animation-delay:420ms] sm:text-xl md:text-2xl">
          {text}
        </p>
      </div>

      {/* Gold ticker strip */}
      <div className="overflow-hidden bg-gold-second py-1.5 sm:py-2" aria-hidden>
        <div className="flex w-max animate-marquee whitespace-nowrap font-heading text-sm uppercase tracking-widest text-burgundy sm:text-base">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="mx-5">{t} <span className="mx-5">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
