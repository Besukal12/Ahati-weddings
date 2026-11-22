import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Asterisk,
  Flower2,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const STATS = [
  { value: "06", label: "Wedding service categories" },
  { value: "04", label: "Vendor specialties" },
  { value: "03", label: "Wedding style directions" },
];

const VALUES = [
  {
    title: "Wedding services",
    description:
      "Explore venues, catering, decoration, photography, transportation, and production for your celebration.",
    Icon: Flower2,
  },
  {
    title: "Vendor connections",
    description:
      "Find specialists in music and DJ, floral and decor, makeup and beauty, and bridal styling.",
    Icon: HeartHandshake,
  },
  {
    title: "Wedding styles",
    description:
      "Compare traditional elegance, modern luxury, and cultural fusion to shape your wedding direction.",
    Icon: Sparkles,
  },
];

export function AboutContent() {
  return (
    <>
      <section
        aria-labelledby="about-story-heading"
        className="bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-[90%] max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>Who We Are</span>
            </div>
            <h2
              id="about-story-heading"
              className="font-heading text-[clamp(2.75rem,10vw,5.5rem)] uppercase leading-[0.92] text-forest"
            >
              Your wedding
              <br />
              planning partner.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-texts sm:text-lg">
              Ahati is an Ethiopian wedding planning service that brings key
              parts of the planning process together. Couples can explore
              wedding services, connect with vendors, and find ideas for their
              celebration in one place.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-texts sm:text-lg">
              Our work covers the practical details—from choosing services and
              suppliers to considering the style and production of the day.
            </p>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 font-bold text-forest transition-colors hover:text-orange"
            >
              Browse wedding services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-forest">
            <Image
              src="/ahati_hero_image.png"
              alt="A couple celebrating their wedding together"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent"
            />
            <div className="absolute right-4 top-4 flex -rotate-3 items-center gap-2 bg-orange px-4 py-2 text-sm font-bold uppercase tracking-wide text-forest shadow-lg sm:right-6 sm:top-6">
              <Asterisk size={17} strokeWidth={3} />
              <span>Celebrate your way</span>
            </div>
            <p className="absolute bottom-5 left-5 right-5 font-heading text-2xl uppercase leading-tight text-white sm:bottom-7 sm:left-7 sm:text-3xl">
              Wedding planning.
              <br />
              Services in one place.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="What you can find with Ahati"
        className="bg-forest py-10 sm:py-12"
      >
        <dl className="mx-auto grid w-[90%] max-w-[1400px] gap-3 sm:grid-cols-3">
          {STATS.map(({ value, label }, index) => (
            <div
              key={label}
              className={`flex min-h-36 flex-col items-center justify-center rounded-2xl px-4 py-6 text-center sm:min-h-40 ${
                index === 1
                  ? "bg-orange"
                  : index === 2
                    ? "bg-background"
                    : "bg-lime"
              }`}
            >
              <dd className="font-heading text-5xl leading-none text-forest sm:text-6xl">
                {value}
              </dd>
              <dt className="mt-2 text-sm font-bold uppercase tracking-wide text-forest/80 sm:text-base">
                {label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="about-values-heading"
        className="bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>Our work and expertise</span>
            </div>
            <h2
              id="about-values-heading"
              className="font-heading text-[clamp(2.75rem,10vw,5rem)] uppercase leading-[0.92] text-forest"
            >
              Support for each part of planning
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-texts sm:text-lg">
              Ahati brings wedding services, specialist vendors, and style
              guidance together to help couples plan their celebration.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
            {VALUES.map(({ title, description, Icon }, index) => (
              <li
                key={title}
                className="rounded-2xl border-t-4 border-orange bg-white/70 p-6 shadow-sm shadow-forest/5 sm:p-8"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-full text-forest ${
                    index === 1 ? "bg-orange" : "bg-lime"
                  }`}
                >
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <p className="mt-7 font-heading text-sm uppercase tracking-wider text-orange">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-2xl uppercase leading-tight text-forest sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-texts sm:text-base">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="about-promise-heading"
        className="bg-forest px-[5%] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1400px] gap-8 rounded-3xl border border-orange/50 bg-white/[0.03] p-7 sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-14">
          <div className="flex size-14 items-center justify-center rounded-full bg-orange text-forest">
            <Asterisk size={30} strokeWidth={2.5} />
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
              <span>What Ahati does</span>
            </div>
            <h2
              id="about-promise-heading"
              className="font-heading text-[clamp(2rem,7vw,4rem)] uppercase leading-[0.98] text-background"
            >
              Ethiopian wedding planning,{" "}
              <span className="text-lime">services, and vendors</span> in one
              place.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Explore planning support, compare service categories, and find
              specialists for traditional, modern, and cultural-fusion weddings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
