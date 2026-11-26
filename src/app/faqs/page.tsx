import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/contact/FaqList";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ethiopian Orthodox Wedding Planning FAQs | Ahati Weddings",
  description:
    "Answers about Ahati Weddings' planning services, vendor coordination, and how couples can get started.",
  path: "/faqs",
});

const FAQS = [
  { c: "Planning", q: "How early should we contact you?", a: "Ideally 6–12 months before the wedding, but we also help with shorter timelines." },
  { c: "Planning", q: "Can you plan only part of the wedding?", a: "Yes. Choose full planning or individual services like venue, decoration, or photography." },
  { c: "Traditions", q: "Do you respect Orthodox ceremony traditions?", a: "We coordinate plans around the traditions that are important to each couple and family. Please confirm ceremony practices or church requirements directly with your church or clergy." },
  { c: "Vendors", q: "Do you work with our own vendors?", a: "Yes. We can coordinate your vendors or recommend from our trusted network." },
  { c: "Vendors", q: "How do you choose your vendors?", a: "We work with suppliers who are reliable, experienced, and comfortable with Ethiopian Orthodox weddings." },
  { c: "Pricing", q: "How do we get a quote?", a: "Send a request through the contact page with your date and needs, and we'll reply within 24 hours." },
];

export default function FaqsPage() {
  return (
    <main>
      <PageHero eyebrow="FAQs" bgWord="FAQs" line1="Common" line2="questions" text="Quick answers before you start planning." />
      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-[90%] max-w-[900px]">
          <FaqList faqs={FAQS} />
          <Reveal className="mt-12">
            <div className="rounded-3xl bg-burgundy p-8 text-center">
              <p className="font-heading text-3xl uppercase text-ivory">Still have a question?</p>
              <Link href="/contact" className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-burgundy transition-all hover:bg-ivory">
                Ask us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
