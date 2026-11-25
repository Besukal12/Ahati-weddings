"use client";

import { useState } from "react";
import { CATEGORIES, type Post } from "@/lib/posts";
import { FeaturedPost } from "./FeaturedPost";
import { PostCard } from "./PostCard";

const PAGE_SIZE = 6;

export function JournalFeed({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered =
    category === "All" ? posts : posts.filter((p) => p.category === category);

  const [featured, ...rest] = filtered;
  const shown = rest.slice(0, visible);

  function selectCategory(name: string) {
    setCategory(name);
    setVisible(PAGE_SIZE); // start fresh when the filter changes
  }

  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        {/* Filter pills (scroll sideways on small screens) */}
        <div className="-mx-[5vw] overflow-x-auto px-[5vw] pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-2 sm:gap-3 md:w-auto md:flex-wrap">
            {CATEGORIES.map((name) => {
              const active = name === category;
              return (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => selectCategory(name)}
                    aria-pressed={active}
                    className={`whitespace-nowrap rounded-full border-2 px-5 py-2 text-sm font-bold transition-colors sm:text-base ${
                      active
                        ? "border-burgundy bg-burgundy text-gold-second"
                        : "border-burgundy/30 text-burgundy hover:border-gold hover:text-gold"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Empty state */}
        {!featured && (
          <p className="py-20 text-center text-lg text-texts">
            No stories in this category yet. Check back soon.
          </p>
        )}

        {/* Featured */}
        {featured && (
          <div className="mt-8 md:mt-10">
            <FeaturedPost post={featured} />
          </div>
        )}

        {/* Grid */}
        {shown.length > 0 && (
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {shown.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}

        {/* Load more */}
        {rest.length > visible && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full border-2 border-burgundy px-8 py-3 font-bold text-burgundy transition-colors hover:border-gold hover:bg-gold"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
