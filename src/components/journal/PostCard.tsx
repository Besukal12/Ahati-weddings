import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";

/* Fixed locale + UTC so server and browser always print the same date */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
          {post.category}
        </span>

        <span
          aria-hidden
          className="absolute bottom-3 right-3 flex size-10 translate-y-2 items-center justify-center rounded-full bg-orange text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={20} />
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-texts">
          {formatDate(post.date)} &bull; {post.readTime}
        </p>

        <h3 className="mt-2 font-heading text-2xl uppercase leading-tight text-forest transition-colors duration-300 group-hover:text-orange">
          {/* The ::after makes the whole card clickable */}
          <Link
            href={`/journal/${post.slug}`}
            className="outline-none after:absolute after:inset-0 focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-orange"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-base leading-snug text-texts">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
