import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Asterisk } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDate, PostCard } from "./PostCard";
import { Navbar } from "@/components/ui/Navbar";

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function JournalPost({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) {
  return (
    <main>
      <header className="relative isolate overflow-hidden bg-forest">
        <Navbar />

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none overflow-hidden text-center font-heading text-[clamp(6rem,24vw,22rem)] uppercase leading-[0.8] text-lime opacity-20 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor]"
        >
          Journal
        </span>

        <div className="mx-auto w-[90%] max-w-[1400px] pb-14 pt-32 sm:pb-16 sm:pt-36 md:pb-20 md:pt-44">
          <Link
            href="/journal"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-bold text-background/80 transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange sm:text-base"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Journal
          </Link>

          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
            <Asterisk className="size-5" strokeWidth={3} />
            <span>{post.category}</span>
          </div>

          <h1 className="max-w-5xl font-heading text-[clamp(2.75rem,10vw,7.5rem)] uppercase leading-[0.92] text-lime">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-background/85 sm:text-lg md:text-xl">
            {post.excerpt}
          </p>

          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-background/65 sm:text-sm">
            {formatDate(post.date)}
            <span aria-hidden className="px-2 text-orange">
              &bull;
            </span>
            {post.readTime}
          </p>
        </div>

        <div className="h-3 bg-lime sm:h-4" aria-hidden />
      </header>

      <section
        aria-label="Article"
        className="bg-background pb-14 pt-8 sm:pb-16 sm:pt-10 md:pb-20"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="relative aspect-[16/9] max-h-[44rem] overflow-hidden rounded-2xl bg-forest sm:rounded-3xl">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 90vw, 1400px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
            <article className="min-w-0">
              <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
                <Asterisk className="size-5" strokeWidth={3} />
                <span>From the Ahati Journal</span>
              </div>

              <div className="space-y-10 sm:space-y-12">
                {post.sections.map((section) => (
                  <section
                    key={section.heading}
                    id={sectionId(section.heading)}
                    aria-labelledby={`${sectionId(section.heading)}-heading`}
                    className="scroll-mt-8"
                  >
                    <h2
                      id={`${sectionId(section.heading)}-heading`}
                      className="font-heading text-3xl uppercase leading-tight text-forest sm:text-4xl"
                    >
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-texts sm:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-base leading-relaxed text-texts sm:text-lg"
                          >
                            <Asterisk
                              aria-hidden
                              className="mt-1 size-5 shrink-0 text-orange"
                              strokeWidth={3}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <Link
                href="/journal"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-3 font-bold text-forest transition-colors hover:border-orange hover:bg-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
              >
                More Journal Stories
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>

            <aside className="h-fit rounded-2xl bg-forest p-6 text-background lg:sticky lg:top-8">
              <h2 className="font-heading text-xl uppercase text-lime sm:text-2xl">
                In this story
              </h2>
              <nav aria-label="Article contents" className="mt-4">
                <ol className="space-y-3">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${sectionId(section.heading)}`}
                        className="group flex items-start gap-3 text-sm leading-snug text-background/75 transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:text-base"
                      >
                        <span className="font-heading text-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-bold text-lime transition-colors hover:text-orange"
              >
                Start planning
                <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section
          aria-labelledby="related-stories-heading"
          className="bg-white py-14 sm:py-16 md:py-20"
        >
          <div className="mx-auto w-[90%] max-w-[1400px]">
            <div className="mb-8 sm:mb-10">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
                <Asterisk className="size-5" strokeWidth={3} />
                <span>Keep exploring</span>
              </div>
              <h2
                id="related-stories-heading"
                className="font-heading text-[clamp(2.5rem,8vw,4rem)] uppercase leading-[0.95] text-forest"
              >
                More stories for you
              </h2>
            </div>

            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug}>
                  <PostCard post={relatedPost} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
