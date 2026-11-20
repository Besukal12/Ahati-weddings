import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import { JournalHero } from "@/components/journal/JournalHero";
import { JournalFeed } from "@/components/journal/JournalFeed";

export const metadata: Metadata = {
  title: "Journal | Ahati Weddings",
  description:
    "Ethiopian wedding traditions, style guides, planning tips and real celebrations from Ahati Weddings.",
};

export default function JournalPage() {
  return (
    <main>
      <JournalHero />
      <JournalFeed posts={POSTS} />
    </main>
  );
}