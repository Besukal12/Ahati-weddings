import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { VendorsGrid } from "@/components/contact/VendorsGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Wedding Vendors and Coordination | Ahati Weddings",
  description:
    "Explore Ahati Weddings' vendor directory and coordination support for Ethiopian Orthodox Church weddings, including music, floral, beauty, and bridal styling.",
  path: "/vendors",
});

type VendorsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

async function VendorsFilter({ searchParams }: VendorsPageProps) {
  const { category = "all" } = await searchParams;
  return <VendorsGrid initial={category} />;
}

export default function VendorsPage({ searchParams }: VendorsPageProps) {
  return (
    <main>
      <PageHero eyebrow="Our Vendors" bgWord="Vendors" line1="Trusted" line2="specialists" text="Hand-picked professionals for music, flowers, beauty, and bridal styling." />
      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <Suspense fallback={<VendorsGrid initial="all" />}>
            <VendorsFilter searchParams={searchParams} />
          </Suspense>
          <Reveal className="mt-14">
            <div className="relative isolate flex flex-col items-start justify-between gap-4 overflow-hidden rounded-3xl bg-burgundy p-8 sm:flex-row sm:items-center sm:p-10">
              <div aria-hidden className="animate-floaty absolute -right-10 -top-10 -z-10 size-48 rounded-full border-2 border-gold/30" />
              <p className="font-heading text-2xl uppercase text-ivory sm:text-4xl">Need a vendor recommendation?</p>
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-burgundy transition-all hover:bg-ivory">
                Talk to us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
