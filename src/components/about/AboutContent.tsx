import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Asterisk,
  Flower2,
  HeartHandshake,
  Sparkles,
  Users,
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

const TEAM = [
  {
    name: "Emnet Begashaw",
    role: "Founder & Wedding Director",
    image: "/Ahati-decor2.jpg",
    description:
      "Leads the Ahati vision for thoughtful, faith-rooted, and beautifully coordinated celebrations.",
  },
  {
    name: "Ahati Planning Team",
    role: "Coordination & Vendor Support",
    image: "/wedding-production.webp",
    description:
      "Brings ceremony timelines, venue needs, and specialist suppliers into one clear plan.",
  },
];

export function AboutContent() {
  return (
    <>
      <section
        aria-labelledby="about-story-heading"
        className="bg-ivory py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-[90%] max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>Origin &amp; Mission</span>
            </div>
            <h2
              id="about-story-heading"
              className="font-heading text-[clamp(2.75rem,10vw,5.5rem)] uppercase leading-[0.92] text-burgundy"
            >
              Your wedding
              <br />
              planning partner.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-texts sm:text-lg">
              Ahati began with a simple purpose: make it easier for couples and
              families to plan a safe, organized, and memorable Ethiopian
              Orthodox wedding. We bring the practical and meaningful parts of
              the day together, from church requirements and protocols to
              venues, catering, decor, photography, and transport.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-texts sm:text-lg">
              We exist to reduce the bottlenecks that can overwhelm a
              multi-family celebration. Our vision is to help the next
              generation enter married life with confidence, dignity, and less
              stress by keeping every plan clear and every detail cared for.
            </p>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 font-bold text-burgundy transition-colors hover:text-gold"
            >
              Browse wedding services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-burgundy">
            <Image
              src="/ahati_hero_image.png"
              alt="A couple celebrating their wedding together"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-burgundy/50 via-transparent to-transparent"
            />
            <div className="absolute right-4 top-4 flex -rotate-3 items-center gap-2 bg-gold px-4 py-2 text-sm font-bold uppercase tracking-wide text-burgundy shadow-lg sm:right-6 sm:top-6">
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
        className="bg-burgundy py-10 sm:py-12"
      >
        <dl className="mx-auto grid w-[90%] max-w-[1400px] gap-3 sm:grid-cols-3">
          {STATS.map(({ value, label }, index) => (
            <div
              key={label}
              className={`flex min-h-36 flex-col items-center justify-center rounded-2xl px-4 py-6 text-center sm:min-h-40 ${
                index === 1
                  ? "bg-gold"
                  : index === 2
                    ? "bg-ivory"
                    : "bg-gold-second"
              }`}
            >
              <dd className="font-heading text-5xl leading-none text-burgundy sm:text-6xl">
                {value}
              </dd>
              <dt className="mt-2 text-sm font-bold uppercase tracking-wide text-burgundy/80 sm:text-base">
                {label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="about-values-heading"
        className="bg-ivory py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>Our work and expertise</span>
            </div>
            <h2
              id="about-values-heading"
              className="font-heading text-[clamp(2.75rem,10vw,5rem)] uppercase leading-[0.92] text-burgundy"
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
                className="rounded-2xl border-t-4 border-gold bg-white/70 p-6 shadow-sm shadow-burgundy/5 sm:p-8"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-full text-burgundy ${
                    index === 1 ? "bg-gold" : "bg-gold-second"
                  }`}
                >
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <p className="mt-7 font-heading text-sm uppercase tracking-wider text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-2xl uppercase leading-tight text-burgundy sm:text-3xl">
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
        aria-labelledby="about-team-heading"
        className="bg-ivory pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-9 flex flex-col justify-between gap-5 border-t border-burgundy/15 pt-10 sm:mb-12 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
                <Users className="size-5 md:size-6" strokeWidth={2.5} />
                <span>People &amp; Culture</span>
              </div>
              <h2
                id="about-team-heading"
                className="font-heading text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.92] text-burgundy"
              >
                Care lives in every detail
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-texts sm:text-lg">
              Our team approach combines calm coordination, cultural respect,
              and a clear plan for everyone involved.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {TEAM.map((person, index) => (
              <article
                key={person.name}
                className="group grid overflow-hidden rounded-2xl bg-white/70 shadow-sm shadow-burgundy/5 sm:grid-cols-[minmax(12rem,0.8fr)_1.2fr]"
              >
                <div className="relative min-h-72 overflow-hidden bg-burgundy sm:min-h-80">
                  <Image
                    src={person.image}
                    alt={index === 0 ? "Emnet Begashaw, Ahati wedding director" : "Ahati wedding coordination team"}
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 35vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent"
                  />
                </div>
                <div className="flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">
                    {person.role}
                  </p>
                  <h3 className="mt-2 font-heading text-3xl uppercase leading-tight text-burgundy">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-texts sm:text-base">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
