"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";

type Faq = { q: string; a: string; c: string };

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const cats = ["All", ...Array.from(new Set(faqs.map((f) => f.c)))];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  const list = faqs.filter((f) => (cat === "All" || f.c === cat) && `${f.q} ${f.a}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-burgundy/50" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions..." aria-label="Search questions" className="w-full rounded-full border-2 border-burgundy/20 bg-white py-3 pl-12 pr-4 font-medium outline-none transition-colors focus:border-gold" />
      </div>
      <div className="-mx-1 mt-5 flex gap-3 overflow-x-auto px-1 pb-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full border-2 px-5 py-2 text-sm font-bold transition-all sm:text-base ${cat === c ? "border-burgundy bg-burgundy text-ivory" : "border-burgundy text-burgundy hover:border-gold hover:bg-gold"}`}>
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-4">
        {list.map((f, i) => {
          const isOpen = open === f.q;
          return (
            <li key={f.q} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
              <div className={`rounded-2xl bg-white shadow-md transition-all duration-300 ${isOpen ? "ring-2 ring-gold" : "hover:-translate-y-0.5 hover:shadow-lg"}`}>
                <button onClick={() => setOpen(isOpen ? null : f.q)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-xl uppercase text-burgundy sm:p-6 sm:text-2xl">
                  {f.q}
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-gold" : "bg-burgundy text-gold"}`}>
                    <Plus size={20} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base font-medium leading-relaxed text-texts sm:px-6 sm:pb-6 sm:text-lg">{f.a}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        {list.length === 0 && <li className="rounded-2xl bg-white p-8 text-center font-heading text-2xl uppercase text-burgundy shadow-md">No matching questions</li>}
      </ul>
    </div>
  );
}
