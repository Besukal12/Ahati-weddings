import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDate } from "./PostCard";

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl bg-forest lg:grid-cols-2">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          Featured
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 xl:p-16">
        <p className="text-sm font-bold uppercase tracking-wider text-lime">
          {post.category}
          <span className="px-2 text-white/40">&bull;</span>
          <span className="text-white/70">
            {formatDate(post.date)} &bull; {post.readTime}
          </span>
        </p>

        <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] text-background">
          {post.title}
        </h2>

        <p className="mt-4 max-w-md text-base leading-snug text-background/80 sm:text-lg">
          {post.excerpt}
        </p>

        <Link
          href={`/journal/${post.slug}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold text-forest transition-colors hover:bg-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
        >
          Read Story
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
