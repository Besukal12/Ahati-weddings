import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers | Ahati Weddings",
  description: "Explore career opportunities with Ahati Weddings.",
  path: "/careers",
  noIndex: true,
});

const ROLES = [
  { title: "Wedding Coordinator", type: "Full-time", place: "Addis Ababa" },
  { title: "Decor Assistant", type: "Part-time", place: "Addis Ababa" },
  { title: "Photographer / Videographer", type: "Freelance", place: "Addis Ababa" },
];

const PERKS = [
  { Icon: HeartHandshake, t: "Meaningful work", d: "Help families through the most important day of their lives." },
  { Icon: Users, t: "Supportive team", d: "Work alongside planners, creatives, and trusted vendors." },
  { Icon: Sparkles, t: "Room to grow", d: "Learn every side of wedding planning and production." },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero eyebrow="Careers" bgWord="Careers" line1="Join our" line2="team" text="Help families celebrate the most meaningful day of their lives." />
      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-[90%] max-w-[1100px]">
          <ul className="grid gap-5 md:grid-cols-3">
            {PERKS.map(({ Icon, t, d }, i) => (
              <li key={t}>
                <Reveal delay={i * 120} className="h-full">
                  <div className="group h-full rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <span className="flex size-14 items-center justify-center rounded-full bg-burgundy text-gold transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-gold group-hover:text-burgundy">
                      <Icon size={26} />
                    </span>
                    <h2 className="mt-4 font-heading text-2xl uppercase text-burgundy">{t}</h2>
                    <p className="mt-2 font-medium leading-snug text-texts">{d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-16">
            <h2 className="font-heading text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.92] text-burgundy">Open <span className="text-gold">roles</span></h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {ROLES.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={i * 100}>
                  <Link href="/contact" className="group relative isolate flex flex-col gap-3 overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:justify-between">
                    <span aria-hidden className="absolute inset-0 -z-10 origin-left scale-x-0 bg-burgundy transition-transform duration-500 group-hover:scale-x-100" />
                    <div>
                      <h3 className="font-heading text-2xl uppercase text-burgundy transition-colors duration-300 group-hover:text-ivory sm:text-3xl">{r.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-gold">{r.type} · {r.place}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-bold text-burgundy transition-colors duration-300 group-hover:text-gold">
                      Apply <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
