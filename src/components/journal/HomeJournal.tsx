import Link from "next/link";
import { ArrowRight, Asterisk } from "lucide-react";
import { POSTS } from "@/lib/posts";
import { PostCard } from "./PostCard";

export function HomeJournal() {
  return (
    <section
      aria-labelledby="home-journal-heading"
      className="bg-ivory py-14 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold sm:text-sm md:text-base">
              <Asterisk className="size-5 md:size-6" strokeWidth={3} />
              <span>The Ahati Journal</span>
            </div>
            <h2
              id="home-journal-heading"
              className="font-heading text-[clamp(2.75rem,10vw,4rem)] uppercase leading-[0.95] text-burgundy"
            >
              Ideas for your big day
            </h2>
          </div>
          <Link
            href="/journal"
            className="group inline-flex w-fit items-center gap-2 font-bold text-burgundy transition-colors hover:text-gold"
          >
            Explore the Journal
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>

        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {POSTS.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
