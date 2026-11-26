"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Vendors", href: "/vendors" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll + close on Escape while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex w-[90%] max-w-[1400px] items-center justify-between py-4 lg:py-5"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            alt="Ahati logo"
            src="/icon-logo.png"
            width={40}
            height={40}
            className="size-9 lg:size-10"
          />
          <span className="font-display text-lg font-bold uppercase leading-[0.95] text-white lg:text-xl">
            Ahati
            <br />
            Weddings
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors hover:text-gold-second xl:text-base ${
                  isActive(href) ? "text-white" : "text-white/80"
                }`}
              >
                {label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300 ${
                    isActive(href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-burgundy transition-colors hover:bg-gold-second lg:inline-flex"
        >
          Start Planning
          <ArrowRight size={18} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border-2 border-gold text-white transition-colors hover:bg-gold hover:text-burgundy lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden bg-burgundy">
          <div className="mx-auto flex w-[90%] max-w-[1400px] flex-col gap-6 pb-8 pt-2">
            <ul className="flex flex-col">
              {links.map(({ label, href }) => (
                <li key={href} className="border-b border-white/10">
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`flex items-center justify-between py-4 text-lg font-semibold transition-colors hover:text-gold-second ${
                      isActive(href) ? "text-gold-second" : "text-white"
                    }`}
                  >
                    {label}
                    {isActive(href) && (
                      <span className="size-2 rounded-full bg-gold" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-burgundy transition-colors hover:bg-gold-second"
            >
              Start Planning
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
