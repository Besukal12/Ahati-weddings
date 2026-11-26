import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Ahati Weddings | Ethiopian Orthodox Wedding Planning",
  description:
    "Contact Ahati Weddings to discuss planning and vendor coordination for your Ethiopian Orthodox Church wedding.",
  path: "/contact",
});

// Replace with your real details
const INFO = [
  { Icon: Phone, label: "Phone", value: "+251 900 000 000", href: "tel:+251900000000" },
  { Icon: Mail, label: "Email", value: "hello@ahatiweddings.com", href: "mailto:hello@ahatiweddings.com" },
  { Icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat, 8:30 AM – 6:00 PM" },
];

type ContactPageProps = {
  searchParams: Promise<{ service?: string; vendor?: string }>;
};

async function ContactRequestForm({ searchParams }: ContactPageProps) {
  const { service, vendor } = await searchParams;
  return <ContactForm defaultService={service} vendor={vendor} />;
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <main>
      <PageHero eyebrow="Contact Us" bgWord="Contact" line1="Let's plan" line2="together" text="Tell us about your day and we'll reply within 24 hours." />
      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.92] text-burgundy">Get in <span className="text-gold">touch</span></h2>
            <ul className="mt-8 flex flex-col gap-4">
              {INFO.map(({ Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold transition-all duration-300 group-hover:rotate-12 group-hover:bg-gold group-hover:text-burgundy">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold uppercase tracking-wider text-gold">{label}</span>
                      <span className="block break-all font-semibold text-burgundy">{value}</span>
                    </span>
                  </>
                );
                const cls = "group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:translate-x-2 hover:bg-white hover:shadow-md";
                return (
                  <li key={label}>
                    {href ? <a href={href} className={cls}>{body}</a> : <div className={cls}>{body}</div>}
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <Suspense fallback={<ContactForm />}>
              <ContactRequestForm searchParams={searchParams} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
