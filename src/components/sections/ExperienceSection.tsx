import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Asterisk,
  CalendarDays,
  ChevronRight,
  Heart,
  MessagesSquare,
} from "lucide-react";

const STEPS = [
  { title: "Inquire", text: "Share your vision", Icon: MessagesSquare },
  { title: "Plan", text: "Get a custom proposal", Icon: CalendarDays },
  { title: "Celebrate", text: "Enjoy your day", Icon: Heart },
];

export function ExperienceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* CONTENT */}
        <div className="flex-1 py-14 pl-[5vw] pr-[5vw] sm:py-16 lg:py-14 lg:pr-8 xl:pl-[max(5vw,calc((100vw_-_1400px)/2))]">
          <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-0">
            {/* LEFT: text */}
            <div className="flex flex-col items-start xl:pr-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
                <Asterisk className="size-5 md:size-6" strokeWidth={3} />
                <span>The Ahati Experience</span>
              </div>

              <h2 className="font-heading text-[clamp(2.75rem,10vw,4rem)] uppercase leading-[0.95] text-background lg:text-[clamp(2.5rem,4vw,4.25rem)]">
                From inquiry
                <br />
                to your big day
              </h2>

              <p className="mt-5 max-w-sm text-base font-medium leading-snug text-background/90 sm:text-lg">
                A seamless and personalized journey, crafted just for you.
              </p>

              <Link
                href="/about"
                className="group mt-4 inline-flex items-center gap-2 font-bold text-background transition-colors hover:text-orange"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>

            {/* RIGHT: steps */}
            <ol className="flex flex-col gap-8 border-white/20 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0 xl:border-l xl:pl-8">
              {STEPS.map(({ title, text, Icon }, i) => (
                <Fragment key={title}>
                  <li className="group flex-1 sm:px-4 xl:px-5">
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
                      <Icon
                        className="size-8 text-white transition-colors duration-300 group-hover:text-lime sm:size-9"
                        strokeWidth={1.5}
                      />
                      <div className="sm:mt-5">
                        <h3 className="font-heading text-xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-orange sm:text-2xl">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm text-white/70">{text}</p>
                      </div>
                    </div>
                  </li>

                  {/* Divider with chevron (tablet and up) */}
                  {i < STEPS.length - 1 && (
                    <li
                      aria-hidden
                      className="relative hidden w-px self-stretch bg-white/20 sm:block"
                    >
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest py-1 text-white/80">
                        <ChevronRight size={16} />
                      </span>
                    </li>
                  )}
                </Fragment>
              ))}
            </ol>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-72 w-full sm:h-80 lg:h-auto lg:w-[28%] lg:min-w-[20rem] lg:shrink-0">
          <div className="absolute inset-0 bg-neutral-700 [clip-path:polygon(0_14%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/ahati_hero_image.png"
              alt="Smiling Ethiopian bride holding a traditional fan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 28vw"
              className="object-cover object-[center_15%] grayscale contrast-110"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-forest/50 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}