import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Asterisk,
  Camera,
  CarFront,
  Clapperboard,
  ConciergeBell,
  Flower,
  Tent,
  type LucideIcon,
} from "lucide-react";

type Service = {
  label: string;
  href: string;
  image: string;
  Icon: LucideIcon;
};

const SERVICES: Service[] = [
  { label: "Venues", href: "/services/venues", image: "/ahati_hero_image.png", Icon: Tent },
  { label: "Catering", href: "/services/catering", image: "/ahati_hero_image.png", Icon: ConciergeBell },
  { label: "Decoration", href: "/services/decoration", image: "/ahati_hero_image.png", Icon: Flower },
  { label: "Photography", href: "/services/photography", image: "/ahati_hero_image.png", Icon: Camera },
  { label: "Transportation", href: "/services/transportation", image: "/ahati_hero_image.png", Icon: CarFront },
  { label: "Production", href: "/services/production", image: "/ahati_hero_image.png", Icon: Clapperboard },
];

function ServiceCard({ label, href, image, Icon }: Service) {
  return (
    <Link
      href={href}
      className="group relative isolate flex aspect-9/6 flex-col justify-between overflow-hidden rounded-xl bg-forest p-5 text-white shadow-md outline-none ring-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 sm:aspect-[16/10] md:p-5 lg:aspect-[16/11] xl:aspect-[16/10]"
    >
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="-z-20 object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
      />

      {/* Forest gradient so text stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/80 to-forest/10 transition-opacity duration-300 group-hover:opacity-90"
      />

      {/* Orange bottom line that grows on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100"
      />

      <Icon
        className="size-9 transition-colors duration-300 group-hover:text-lime md:size-11"
        strokeWidth={1.5}
      />

      <span className="flex items-center gap-2 text-sm font-semibold sm:text-base md:text-lg">
        {label}
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-orange"
        />
      </span>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-[90%] max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 xl:gap-16">
        {/* LEFT: text */}
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm md:text-base">
            <Asterisk className="size-5 md:size-6" strokeWidth={3} />
            <span>Our Services</span>
          </div>

          <h2 className="font-heading text-[clamp(3rem,12vw,4.5rem)] uppercase leading-[0.9] text-forest lg:text-[clamp(3.5rem,5.5vw,5.5rem)]">
            <span className="block">Explore</span>
            <span className="block">Our Services</span>
          </h2>

          <p className="mt-5 max-w-sm text-base font-medium leading-snug text-texts sm:text-lg md:mt-6">
            Everything you need for a perfect Ethiopian wedding.
          </p>

          <Link
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 font-bold text-forest transition-colors hover:text-orange"
          >
            View All Services
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>

        {/* RIGHT: cards */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.label}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}