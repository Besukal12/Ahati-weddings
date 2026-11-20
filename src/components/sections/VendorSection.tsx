import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Asterisk } from "lucide-react";

const VENDORS = [
  {
    label: "Music & DJ",
    href: "/vendors?category=music",
    image: "/wedding-production.webp",
    alt: "DJ mixing on a console",
  },
  {
    label: "Floral & Decor",
    href: "/vendors?category=floral",
    image: "/Ahati-decor.jpg",
    alt: "Bouquet of white and peach roses on a table",
  },
  {
    label: "Makeup & Beauty",
    href: "/vendors?category=makeup",
    image: "/ahati_hero_image.png",
    alt: "Bride having her makeup applied",
  },
  {
    label: "Bridal Styling",
    href: "/vendors?category=styling",
    image: "/Ahati-decor.webp",
    alt: "Bride with curly hair and floral hairpiece",
  },
];

export function VendorSection() {
  return (
    <section className="relative bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-[90%] max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 xl:gap-16">
        {/* LEFT: text */}
        <div className="flex flex-col items-start z-10">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
            <Asterisk className="size-5 md:size-6" strokeWidth={3} />
            <span>Our Vendors</span>
          </div>

          <h2 className="font-heading text-[clamp(3rem,12vw,4.5rem)] uppercase leading-[0.9] text-forest lg:text-[clamp(3.5rem,5.5vw,5.5rem)]">
            <span className="block">Discover</span>
            <span className="block">Trusted Vendors</span>
          </h2>

          <p className="mt-5 max-w-sm text-base font-medium leading-snug text-texts sm:text-lg md:mt-6">
            Find the best vendors for your special day.
          </p>

          <Link
            href="/vendors"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-bold text-forest transition-colors hover:border-orange hover:bg-orange sm:text-base"
          >
            Browse Vendors
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <h1 className="absolute text-right flex w-[92%] flex-col justify-end-safe whitespace-nowrap font-heading text-[clamp(3rem,20vw,15rem)] uppercase leading-none text-forest opacity-30 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor] md:opacity-40 md:[-webkit-text-stroke:3px_currentColor]">
          <span>Better</span>
          <span>Services</span>
        </h1>

        {/* RIGHT: cards */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {VENDORS.map(({ label, href, image, alt }) => (
            <li key={label}>
              <Link
                href={href}
                className="group relative isolate block aspect-[4/5] overflow-hidden rounded-lg bg-forest shadow-md outline-none ring-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[4/5]"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 17vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient + label: always visible on touch, appears on hover on desktop */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/90 via-forest/20 to-transparent p-3 opacity-100 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
                  <span className="flex w-full items-center justify-between gap-2 text-sm font-semibold text-white sm:text-base">
                    {label}
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-lime transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>

                {/* Orange line that grows on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
