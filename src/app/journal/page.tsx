import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import { JournalHero } from "@/components/journal/JournalHero";
import { JournalFeed } from "@/components/journal/JournalFeed";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ethiopian Wedding Planning Journal | Ahati Weddings",
  description:
    "Read wedding planning ideas and stories about Ethiopian celebrations, styles, vendors, and traditions from Ahati Weddings.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <main>
      <JournalHero />
      <JournalFeed posts={POSTS} />
    </main>
  );
}