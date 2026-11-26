import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = [
    "/",
    "/services",
    ...SERVICES.map((service) => `/services/${service.slug}`),
    "/vendors",
    "/about",
    "/gallery",
    "/faqs",
    "/contact",
    "/journal",
    ...POSTS.map((post) => `/journal/${post.slug}`),
  ];

  return publicPaths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
