import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/GalleryContent";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ethiopian Wedding Gallery | Ahati Weddings",
  description:
    "View wedding photographs and films featuring the details, people, and celebrations shared in the Ahati Weddings gallery.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryContent />
    </>
  );
}
