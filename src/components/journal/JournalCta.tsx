import Link from "next/link";
import { ArrowRight, Asterisk } from "lucide-react";

export function JournalCta() {
  return (
    <section className="bg-background pb-14 md:pb-20">
      <div className="mx-auto flex w-[90%] max-w-[1400px] flex-col items-start justify-between gap-6 rounded-3xl bg-lime p-8 sm:p-10 md:flex-row md:items-center md:p-14">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest sm:text-sm">
            <Asterisk className="size-5 text-orange" strokeWidth={3} />
            <span>Ready when you are</span>
          </div>
          <h2 className="font-heading text-[clamp(2.25rem,6vw,4rem)] uppercase leading-[0.95] text-forest">
            Let&apos;s plan your
            <br />
            big day together
          </h2>
        </div>

        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-bold text-background transition-colors hover:bg-orange hover:text-forest"
        >
          Start Planning
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
