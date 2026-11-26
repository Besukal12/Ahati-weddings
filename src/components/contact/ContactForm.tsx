"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services";

const input =
  "peer w-full rounded-xl border-2 border-burgundy/20 bg-white px-4 pb-2 pt-6 text-base font-medium text-black outline-none transition-colors placeholder-transparent focus:border-gold";
const floatLabel =
  "pointer-events-none absolute left-4 top-2 text-xs font-bold text-gold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-texts peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-gold";

function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-24">
      {Array.from({ length: 28 }).map((_, i) => {
        const a = (i / 28) * Math.PI * 2;
        const d = 90 + (i % 4) * 40;
        return (
          <span
            key={i}
            className="animate-burst absolute size-2.5 rounded-full"
            style={{
              background: i % 2 ? "#D4AF37" : "#5A1F1F",
              ["--tx" as string]: `${Math.cos(a) * d}px`,
              ["--ty" as string]: `${Math.sin(a) * d}px`,
              animationDelay: `${(i % 5) * 40}ms`,
            }}
          />
        );
      })}
    </div>
  );
}

export function ContactForm({ defaultService = "", vendor = "" }: { defaultService?: string; vendor?: string }) {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>(defaultService ? [defaultService] : []);
  const [guests, setGuests] = useState(200);

  if (sent) {
    return (
      <div role="status" className="animate-rise relative flex flex-col items-start gap-3 overflow-hidden rounded-3xl bg-white p-8 shadow-md sm:p-12">
        <Confetti />
        <CheckCircle2 className="size-14 text-gold" />
        <h2 className="font-heading text-5xl uppercase text-burgundy">Thank you!</h2>
        <p className="text-lg font-medium text-texts">We received your request and will reach out within 24 hours.</p>
        <button onClick={() => setSent(false)} className="mt-2 font-bold text-burgundy underline decoration-gold underline-offset-4 hover:text-gold">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to your backend / email service
        setSent(true);
      }}
      className="grid gap-5 rounded-3xl bg-white p-6 shadow-md sm:grid-cols-2 sm:p-8"
    >
      {vendor && (
        <p className="rounded-xl bg-gold/20 px-4 py-3 text-sm font-bold text-burgundy sm:col-span-2">
          Enquiring about vendor: {vendor}
        </p>
      )}
      {[
        { id: "name", label: "Full name", type: "text", req: true },
        { id: "phone", label: "Phone", type: "tel", req: true },
        { id: "email", label: "Email", type: "email", req: false },
        { id: "date", label: "Wedding date", type: "date", req: false },
      ].map((f) => (
        <div key={f.id} className="relative">
          <input id={f.id} name={f.id} type={f.type} required={f.req} placeholder=" " className={input} />
          <label htmlFor={f.id} className={floatLabel}>{f.label}</label>
        </div>
      ))}

      <fieldset className="sm:col-span-2">
        <legend className="mb-3 text-sm font-bold text-burgundy">What do you need? (pick any)</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const on = picked.includes(s.slug);
            return (
              <button
                type="button"
                key={s.slug}
                aria-pressed={on}
                onClick={() => setPicked((p) => (on ? p.filter((x) => x !== s.slug) : [...p, s.slug]))}
                className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-all duration-200 active:scale-95 ${
                  on ? "border-burgundy bg-burgundy text-ivory" : "border-burgundy/30 text-burgundy hover:border-gold"
                }`}
              >
                {on && "✓ "}{s.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="services" value={picked.join(",")} />
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="guests" className="mb-2 flex items-center justify-between text-sm font-bold text-burgundy">
          Expected guests <span className="rounded-full bg-gold px-3 py-0.5 font-heading text-lg">{guests}</span>
        </label>
        <input id="guests" type="range" min={50} max={1500} step={25} value={guests} onChange={(e) => setGuests(+e.target.value)} className="w-full accent-[#D4AF37]" />
        <div className="flex justify-between text-xs font-semibold text-texts"><span>50</span><span>1500+</span></div>
      </div>

      <div className="relative sm:col-span-2">
        <textarea id="message" name="message" rows={5} placeholder=" " className={input} />
        <label htmlFor="message" className={floatLabel}>Tell us about your wedding</label>
      </div>

      <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3.5 font-bold text-ivory transition-all hover:bg-gold hover:text-burgundy hover:shadow-lg active:scale-95 sm:col-span-2 sm:justify-self-start">
        Send request
        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>
    </form>
  );
}
