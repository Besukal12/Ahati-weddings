"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Asterisk, Flower } from "lucide-react";

const STYLES = [
  {
    label: "Traditional Elegance",
    slug: "traditional-elegance",
    main: "/Ahati-decor2.jpg",
    side: "/Ahati-decor2.jpg",
  },
  {
    label: "Modern Luxury",
    slug: "modern-luxury",
    main: "/Ahati-decor.jpg",
    side: "/Ahati-decor.jpg",
  },
  {
    label: "Cultural Fusion",
    slug: "cultural-fusion",
    main: "/ahati_hero_image.png",
    side: "/ahati_hero_image.png",
  },
];

/* A cream "photo print" that crossfades between the style images */
function Photo({
  images,
  active,
  className,
  sizes,
  priority = false,
}: {
  images: string[];
  active: number;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`bg-background p-1.5 shadow-2xl shadow-black/40 sm:p-2 md:p-2.5 ${className}`}
    >
      <div className="relative size-full overflow-hidden">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function StylesSection() {
  const [active, setActive] = useState(0);
  const current = STYLES[active];

  return (
    <section className="relative bg-forest md:py-25 sm:py-10">
      {/* Faint decorative flower */}
      <Flower
        aria-hidden
        strokeWidth={0.5}
        className="pointer-events-none absolute left-[55%] top-1/2 hidden size-56 -translate-y-1/2 text-white/10 lg:block xl:size-72"
      />

      <h1 className="absolute flex flex-col whitespace-nowrap font-heading text-[clamp(3rem,20vw,15rem)] uppercase leading-none text-lime opacity-30 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor] md:opacity-40 md:[-webkit-text-stroke:3px_currentColor]">
        <span>Ahati</span>
        <span>Weddings</span>
      </h1>

      <div className="relative mx-auto grid w-[90%] max-w-350 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)] lg:gap-8 xl:gap-12">
        {/* LEFT: photos (bleed above and below the band on desktop) */}
        <div className="relative mx-auto h-76 w-full max-w-md sm:h-96 sm:max-w-xl lg:-my-14 lg:mx-0 lg:h-104 lg:max-w-none xl:h-120">
          <Photo
            images={STYLES.map((s) => s.main)}
            active={active}
            sizes="(max-width: 1024px) 80vw, 35vw"
            priority
            className="absolute left-0 top-0 h-[74%] w-[78%] -rotate-6"
          />
          <Photo
            images={STYLES.map((s) => s.side)}
            active={active}
            sizes="(max-width: 1024px) 45vw, 20vw"
            className="absolute bottom-0 right-0 h-[62%] w-[42%] rotate-6"
          />
        </div>

        {/* MIDDLE: text */}
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
            <Asterisk className="size-5 md:size-6" strokeWidth={3} />
            <span>Find Your Style</span>
          </div>

          <h2 className="font-heading text-[clamp(2.75rem,10vw,4rem)] uppercase leading-[0.95] text-background lg:text-[clamp(2.5rem,4vw,4.25rem)]">
            Discover
            <br />
            your wedding
            <br />
            style
          </h2>

          <p className="mt-5 max-w-sm text-base font-medium leading-snug text-background/90 sm:text-lg">
            From traditional to modern, explore different themes and aesthetics.
          </p>

          <Link
            href={`/styles/${current.slug}`}
            className="group mt-6 inline-flex items-center gap-2 rounded-full border-2 border-background/80 px-6 py-2.5 text-sm font-bold text-background transition-colors hover:border-orange hover:bg-orange sm:text-base"
          >
            Explore Styles
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* RIGHT: numbered list */}
        <ul className="flex flex-col gap-5 border-white/20 sm:gap-6 lg:border-l lg:pl-8 xl:pl-10">
          {STYLES.map(({ label, slug }, i) => {
            const isActive = i === active;
            return (
              <li key={slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group flex w-full items-center gap-4 text-left outline-none"
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-sm border-2 font-heading text-lg transition-colors duration-300 sm:size-11 ${
                      isActive
                        ? "border-orange bg-orange text-white"
                        : "border-white/80 text-white group-hover:border-orange group-focus-visible:border-orange"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-base font-semibold leading-tight transition-colors duration-300 sm:text-lg ${
                      isActive ? "text-lime" : "text-background"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
