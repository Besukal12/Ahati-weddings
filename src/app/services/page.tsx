import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Asterisk, Camera, CarFront, Clapperboard, ConciergeBell, Flower, Tent, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SERVICES } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ethiopian Orthodox Wedding Planning Services | Ahati Weddings",
  description:
    "Explore Ahati Weddings' planning and coordination services for Ethiopian Orthodox Church weddings, including venues, catering, decor, photography, transport, and production.",
  path: "/services",
});

const ICONS: Record<string, LucideIcon> = {
  venues: Tent, catering: ConciergeBell, decoration: Flower,
  photography: Camera, transportation: CarFront, production: Clapperboard,
};

const STEPS = [
  { t: "Share your vision", d: "Tell us your date, guests, style, and traditions." },
  { t: "Get your plan", d: "We build a clear plan and match trusted suppliers." },
  { t: "We coordinate", d: "Timelines, bookings, and details handled for you." },
  { t: "Celebrate", d: "Enjoy your day while our team runs everything." },
];

const STATS = [
  { to: 6, s: "", l: "Service categories" },
  { to: 40, s: "+", l: "Trusted vendors" },
  { to: 120, s: "+", l: "Weddings supported" },
  { to: 100, s: "%", l: "Faith-rooted care" },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Our Services" bgWord="Services" line1="Everything for" line2="your big day" text="Planning and vendor coordination for Ethiopian Orthodox Church weddings, shaped around the traditions meaningful to each couple." />

      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <Reveal>
            <div className="mb-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>What we offer</span>
            </div>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.slug];
              return (
                <li key={s.slug}>
                  <Reveal delay={(i % 3) * 120}>
                    <SpotlightCard className="rounded-2xl">
                      <Link href={`/services/${s.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md outline-none ring-gold focus-visible:ring-2">
                        <div className="relative aspect-[16/10] overflow-hidden bg-burgundy">
                          <Image src={s.image} alt="" fill sizes="(max-width:640px) 90vw,(max-width:1024px) 45vw,30vw" className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-burgundy/80 to-transparent" />
                          <span aria-hidden className="absolute left-4 top-3 font-heading text-6xl leading-none text-transparent [-webkit-text-stroke:1.5px_#D4AF37]">0{i + 1}</span>
                          <span className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-gold text-burgundy transition-transform duration-500 group-hover:rotate-[360deg]">
                            <Icon size={22} />
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h2 className="font-heading text-3xl uppercase text-burgundy">{s.label}</h2>
                          <p className="mt-2 flex-1 text-base font-medium leading-snug text-texts">{s.tagline}</p>
                          <span className="mt-5 inline-flex items-center gap-2 font-bold text-burgundy transition-colors group-hover:text-gold">
                            Learn more
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
                          </span>
                        </div>
                      </Link>
                    </SpotlightCard>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold-second py-12">
        <ul className="mx-auto grid w-[90%] max-w-[1400px] grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <li key={s.l}>
              <p className="font-heading text-5xl text-burgundy sm:text-6xl"><Counter to={s.to} suffix={s.s} /></p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-burgundy/80">{s.l}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-burgundy py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} /> <span>How it works</span>
            </div>
            <h2 className="font-heading text-[clamp(2.75rem,9vw,5.5rem)] uppercase leading-[0.92] text-ivory">
              From idea to <span className="text-gold-second">I do</span>
            </h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t}>
                <Reveal delay={i * 120} className="h-full">
                  <div className="group h-full rounded-2xl border border-gold/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:bg-white/5">
                    <span className="font-heading text-6xl text-gold-second transition-transform duration-300 group-hover:scale-110 inline-block">0{i + 1}</span>
                    <h3 className="mt-3 text-2xl text-ivory">{s.t}</h3>
                    <p className="mt-2 font-medium leading-snug text-ivory/80">{s.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
