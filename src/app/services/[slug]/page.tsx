import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Asterisk, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s
    ? createPageMetadata({
        title: `${s.label} for Ethiopian Orthodox Weddings | Ahati Weddings`,
        description: s.description,
        path: `/services/${s.slug}`,
      })
    : {
        title: "Service Not Found | Ahati Weddings",
        robots: { index: false, follow: true },
      };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const idx = SERVICES.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = SERVICES[idx];
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <main>
      <PageHero eyebrow="Ahati Service" bgWord={s.label} line1={s.label} line2="by Ahati" text={s.tagline} />

      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1400px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:sticky lg:top-8">
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 size-full rounded-3xl border-2 border-gold" />
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-burgundy shadow-lg">
                <Image src={s.image} alt={s.label} fill priority sizes="(max-width:1024px) 90vw,45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute -left-3 -top-3 flex size-24 items-center justify-center rounded-full bg-gold text-center font-heading text-sm uppercase leading-tight text-burgundy animate-floaty sm:-left-6 sm:-top-6 sm:size-28">
                Ahati<br />Quality
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} /><span>What&apos;s included</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.92] text-burgundy">{s.label}</h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-texts sm:text-lg">{s.description}</p>
            <ul className="mt-8 grid gap-3">
              {s.includes.map((i, n) => (
                <li key={i} className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold transition-colors group-hover:bg-gold group-hover:text-burgundy">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-burgundy">{i}</span>
                  <span className="ml-auto font-heading text-xl text-burgundy/20">0{n + 1}</span>
                </li>
              ))}
            </ul>
            <Link href={`/contact?service=${s.slug}`} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 font-bold text-ivory transition-all hover:bg-gold hover:text-burgundy hover:shadow-lg">
              Request this service
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <section className="bg-ivory pb-16 sm:pb-20">
        <div className="mx-auto grid w-[90%] max-w-[1400px] gap-4 sm:grid-cols-2">
          {[{ s: prev, dir: "Previous" }, { s: next, dir: "Next" }].map(({ s: o, dir }) => (
            <Link key={dir} href={`/services/${o.slug}`} className={`group relative isolate flex items-center justify-between overflow-hidden rounded-2xl bg-burgundy p-6 text-ivory sm:p-8 ${dir === "Next" ? "flex-row-reverse text-right" : ""}`}>
              <Image src={o.image} alt="" fill sizes="50vw" className="-z-10 object-cover opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">{dir}</p>
                <p className="font-heading text-3xl uppercase sm:text-4xl">{o.label}</p>
              </div>
              {dir === "Next" ? (
                <ArrowRight className="text-gold transition-transform duration-300 group-hover:translate-x-2" size={28} />
              ) : (
                <ArrowLeft className="text-gold transition-transform duration-300 group-hover:-translate-x-2" size={28} />
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
