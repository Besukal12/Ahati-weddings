import type { Metadata } from "next";

export const SITE_URL = "https://ahati-weddings.vercel.app";
export const SITE_NAME = "Ahati Weddings";
export const SITE_TITLE = "Ahati Weddings | Ethiopian Orthodox Wedding Planning";
export const SITE_DESCRIPTION =
  "Ahati Weddings specializes in Ethiopian Orthodox Church wedding planning and vendor management, helping couples organize their day with care and respect for the traditions meaningful to them.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/icon-logo.png",
  type = "website",
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      images: [{ url: image, alt: "Ahati Weddings" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
