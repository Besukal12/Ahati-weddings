import { Asterisk } from "lucide-react";

const ITEMS = [
  "Ahati Weddings",
  "Plan",
  "Celebrate",
  "Remember",
  "Ethiopian Wedding Planner",
];

function MarqueeGroup({
  ariaHidden = false,
  iconClass = "",
}: {
  ariaHidden?: boolean;
  iconClass?: string;
}) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {/* repeated twice so one group is always wider than the screen */}
      {[0, 1].flatMap((round) =>
        ITEMS.map((text) => (
          <div key={`${round}-${text}`} className="flex items-center">
            <span>{text}</span>
            <Asterisk
              className={`mx-5 size-4 shrink-0 md:mx-8 md:size-6 ${iconClass}`}
              strokeWidth={3}
            />
          </div>
        )),
      )}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative z-30 -top-5 overflow-hidden py-2 sm:py-12 md:-mt-12 md:py-16">
      {/* BACK band: orange, tilted the other way, scrolls right */}
      <div className="group absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 rotate-[1.5deg] bg-orange py-7.5 md:py-9.5">
        <div className="flex w-max animate-marquee-reverse font-display text-xs font-extrabold uppercase tracking-wide whitespace-nowrap text-forest group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:text-sm md:text-lg">
          <MarqueeGroup />
          <MarqueeGroup ariaHidden />
        </div>
      </div>

      {/* FRONT band: lime, scrolls left */}
      <div className="group relative -ml-[5%] w-[110%] -rotate-2 bg-lime py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:py-5 md:py-7">
        <div className="flex w-max animate-marquee font-display text-sm font-black uppercase tracking-wide whitespace-nowrap text-forest group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:text-lg md:text-3xl">
          <MarqueeGroup iconClass="text-orange" />
          <MarqueeGroup ariaHidden iconClass="text-orange" />
        </div>
      </div>
    </div>
  );
}