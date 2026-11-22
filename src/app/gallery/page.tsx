import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/GalleryContent";
import { GalleryHero } from "@/components/gallery/GalleryHero";

export const metadata: Metadata = {
  title: "Gallery | Ahati Weddings",
  description:
    "Explore wedding photography and films celebrating Ahati Weddings and its couples.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryContent />
    </>
  );
}
