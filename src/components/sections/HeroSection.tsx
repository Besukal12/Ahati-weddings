import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Asterisk, Images } from "lucide-react";
import { BackgroundDecor } from "./HeroBackgroundDecor";

const STATS = [
  { value: "500", label: "Happy Couples" },
  { value: "120", label: "Weddings Planned" },
  { value: "50", label: "Trusted Vendors" },
];

export function HeroSection() {
  return (
    <>
      <BackgroundDecor />

      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-white/5 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] md:block"
      />

      <section className="relative flex flex-1 flex-col">
        {/* TEXT */}
        <div className="relative z-20 mx-auto flex w-[90%] max-w-[1400px] flex-1 items-center pt-28 sm:pt-32 md:pb-16 md:pt-36">
          <div className="flex w-full flex-col items-start md:w-[52%]">
            <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-wider text-lime sm:gap-x-3 sm:text-sm md:mb-5 md:text-base">
              <Asterisk
                className="size-5 text-orange md:size-6"
                strokeWidth={3}
              />
              <span>Plan</span>
              <span aria-hidden>&bull;</span>
              <span>Celebrate</span>
              <span aria-hidden>&bull;</span>
              <span>Remember</span>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,16vw,6rem)] font-black uppercase leading-[0.85] text-lime md:text-[clamp(5rem,10vw,9rem)]">
              <span className="block">Ahati</span>
              <span className="mt-3 block -rotate-2 text-white">Weddings</span>
            </h1>

            <p className="mt-5 text-lg font-semibold leading-snug text-white sm:text-xl md:mt-6 md:text-2xl">
              Your dream wedding,
              <br />
              our expert touch.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 md:mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold text-forest transition-colors hover:bg-lime md:px-7 md:py-3.5"
              >
                Start Planning
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/gallery"
                className="group flex items-center gap-3 font-semibold text-white"
              >
                <span className="flex size-11 items-center justify-center rounded-full border-2 border-orange transition-colors group-hover:bg-orange group-hover:text-forest md:size-12">
                  <Images size={18} />
                </span>
                Explore Gallery
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-8 hidden items-center gap-6 sm:flex md:mt-10 md:gap-10">
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={
                    i > 0 ? "border-l border-white/20 pl-6 md:pl-10" : ""
                  }
                >
                  <dt className="font-display text-3xl font-black text-white md:text-4xl">
                    {value}
                    <span className="text-orange">+</span>
                  </dt>
                  <dd className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white/70 md:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative z-10 mx-auto mt-8 w-[92%] max-w-md sm:max-w-lg md:absolute md:bottom-0 md:right-0 md:mx-0 md:mt-0 md:w-[56%] md:max-w-[950px]">
          <Image
            src="/ahati_hero_image.png"
            alt="Ahati wedding couple"
            width={825}
            height={550}
            priority
            sizes="(max-width: 768px) 92vw, 56vw"
            className="h-auto w-full object-contain"
          />

          {/* Badge */}
          <div className="absolute bottom-[24%] right-0 flex -rotate-6 items-center gap-2 bg-background px-3 py-2 shadow-lg sm:px-4 sm:py-3 md:right-[3%] md:gap-3 md:px-6 md:py-4">
            <p className="font-display text-xs font-extrabold uppercase leading-tight text-forest sm:text-sm md:text-lg lg:text-xl">
              Ethiopian
              <br />
              Wedding Planner
            </p>
            <Asterisk
              className="size-4 text-forest md:size-5"
              strokeWidth={3}
            />
          </div>
        </div>
      </section>
    </>
  );
}
