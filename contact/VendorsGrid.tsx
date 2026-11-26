"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, MapPin, Search, X } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CATEGORIES, VENDORS } from "@/lib/vendors";

export function VendorsGrid({ initial }: { initial: string }) {
  const [cat, setCat] = useState(CATEGORIES.some((c) => c.id === initial) ? initial : "all");
  const [q, setQ] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [onlySaved, setOnlySaved] = useState(false);

  const list = useMemo(
    () =>
      VENDORS.filter(
        (v) =>
          (cat === "all" || v.category === cat) &&
          (!onlySaved || saved.includes(v.name)) &&
          `${v.name} ${v.about} ${v.location}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [cat, q, saved, onlySaved],
  );

  const toggle = (n: string) => setSaved((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
  const count = (id: string) => (id === "all" ? VENDORS.length : VENDORS.filter((v) => v.category === id).length);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-burgundy/50" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search vendors..."
            aria-label="Search vendors"
            className="w-full rounded-full border-2 border-burgundy/20 bg-white py-3 pl-12 pr-11 font-medium outline-none transition-colors focus:border-gold"
          />
          {q && (
            <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-burgundy hover:bg-gold/30">
              <X size={18} />
            </button>
          )}
        </div>

        <button
          onClick={() => setOnlySaved((v) => !v)}
          aria-pressed={onlySaved}
          className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all sm:text-base ${
            onlySaved ? "border-gold bg-gold text-burgundy" : "border-burgundy text-burgundy hover:border-gold"
          }`}
        >
          <Heart size={18} className={saved.length ? "fill-current" : ""} /> Saved ({saved.length})
        </button>
      </div>

      <div role="tablist" aria-label="Vendor categories" className="-mx-1 mb-10 flex gap-3 overflow-x-auto px-1 pb-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={cat === c.id}
            onClick={() => setCat(c.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-bold transition-all duration-300 sm:text-base ${
              cat === c.id ? "scale-105 border-burgundy bg-burgundy text-ivory shadow-lg" : "border-burgundy text-burgundy hover:border-gold hover:bg-gold"
            }`}
          >
            {c.label}
            <span className={`rounded-full px-2 text-xs ${cat === c.id ? "bg-gold text-burgundy" : "bg-burgundy/10"}`}>{count(c.id)}</span>
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="animate-rise rounded-3xl bg-white p-12 text-center shadow-md">
          <p className="font-heading text-3xl uppercase text-burgundy">No vendors found</p>
          <p className="mt-2 font-medium text-texts">Try a different search or category.</p>
        </div>
      ) : (
        <ul key={`${cat}-${onlySaved}`} className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {list.map((v, i) => (
            <li key={v.name} className="animate-rise" style={{ animationDelay: `${i * 70}ms` }}>
              <SpotlightCard className="rounded-2xl">
                <article className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <div className="relative aspect-[4/5] overflow-hidden bg-burgundy">
                    <Image src={v.image} alt={v.name} fill sizes="(max-width:480px) 90vw,(max-width:1024px) 45vw,22vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-transparent to-transparent opacity-80" />
                    <button
                      onClick={() => toggle(v.name)}
                      aria-label={saved.includes(v.name) ? `Unsave ${v.name}` : `Save ${v.name}`}
                      aria-pressed={saved.includes(v.name)}
                      className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/90 text-burgundy transition-transform duration-200 hover:scale-110 active:scale-90"
                    >
                      <Heart size={20} className={saved.includes(v.name) ? "fill-gold text-gold" : ""} />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-burgundy">
                      {CATEGORIES.find((c) => c.id === v.category)?.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-heading text-2xl uppercase text-burgundy">{v.name}</h2>
                    <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gold"><MapPin size={14} /> {v.location}</p>
                    <p className="mt-3 text-sm font-medium leading-snug text-texts sm:text-base">{v.about}</p>
                    <Link href={`/contact?vendor=${encodeURIComponent(v.name)}`} className="mt-4 inline-flex items-center gap-1 font-bold text-burgundy transition-colors hover:text-gold">
                      Enquire <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
