import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOCIALS } from "./SocialIcons";

/* ---------- Content (edit text and links here) ---------- */
const LINK_GROUPS = [
  {
    title: "Shop",
    links: [
      { label: "Venues", href: "/services/venues" },
      { label: "Catering", href: "/services/catering" },
      { label: "Decoration", href: "/services/decoration" },
      { label: "Photography", href: "/services/photography" },
      { label: "Transportation", href: "/services/transportation" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const CONTACT = {
  email: "hello@ahatiweddings.com", // replace with your real email
  phone: "+251 900 000 000", // replace with your real phone
};

/* ---------- Shared styles ---------- */
const headingStyle = "font-heading text-base uppercase tracking-wide text-lime";
const linkStyle =
  "rounded-sm text-background transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

/* ---------- Link columns ---------- */
function FooterLinks() {
  return (
    <nav
      aria-label="Footer"
      className="grid grid-cols-2 gap-x-8 gap-y-8 lg:flex lg:gap-16 xl:gap-24"
    >
      {LINK_GROUPS.map((group) => (
        <div key={group.title}>
          <h3 className={headingStyle}>{group.title}</h3>

          <ul className="mt-3 flex flex-col gap-1.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm sm:text-base ${linkStyle}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

/* ---------- "Let's Talk" block ---------- */
function ContactBlock() {
  return (
    <div className="flex w-full min-w-0 max-w-md flex-col items-start gap-4">
      <h3 className={headingStyle}>Let&apos;s Talk</h3>

      <Link
        href="/contact"
        className="group flex w-full items-center justify-between rounded-full bg-background py-3 pl-6 pr-4 font-semibold text-forest transition-colors hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      >
        Start planning
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <div className="flex min-w-0 flex-col gap-1 text-sm sm:text-base">
        <a href={`mailto:${CONTACT.email}`} className={`break-all ${linkStyle}`}>
          {CONTACT.email}
        </a>
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          className={linkStyle}
        >
          {CONTACT.phone}
        </a>
      </div>

      <ul className="flex items-center gap-4 text-lime">
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="block rounded-sm transition-all duration-300 hover:-translate-y-1 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Spinning badge ---------- */
function Badge() {
  return (
    <div
      aria-hidden
      className="relative flex size-24 shrink-0 items-center justify-center rounded-full bg-lime text-forest sm:size-28 xl:size-32"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path
            id="footer-badge-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-forest font-heading text-[9.5px] uppercase tracking-[0.14em]">
          <textPath href="#footer-badge-circle">
            Ahati Weddings &bull; Plan &bull; Celebrate &bull; Remember &bull;
          </textPath>
        </text>
      </svg>

      <span className="font-serif text-5xl italic leading-none xl:text-6xl">
        A
      </span>
    </div>
  );
}

/* ---------- Giant "AHATI" that stretches to the full width ---------- */
function Wordmark() {
  return (
    <div className="mt-10 select-none" aria-hidden>
      <svg viewBox="0 0 1000 250" className="block w-full overflow-visible">
        <text
          x="0"
          y="245"
          fontSize="300"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="fill-background font-heading uppercase"
        >
          Ahati
        </text>
      </svg>
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="w-full bg-background p-3 sm:p-4">
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl bg-forest px-6 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
        {/* Top row: links | divider | contact + badge */}
        <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <FooterLinks />

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:border-l lg:border-lime/50 lg:pl-12 xl:pl-16">
            <ContactBlock />
            <Badge />
          </div>
        </div>

        <Wordmark />

        {/* Bottom bar */}
        <p className="py-5 text-center text-xs text-background/80 sm:text-left sm:text-sm">
          &copy; {new Date().getFullYear()} Ahati Weddings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}