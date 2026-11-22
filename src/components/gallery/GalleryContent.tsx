import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Asterisk, Camera, Clapperboard } from "lucide-react";
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from "@/lib/gallery";

function getVideoEmbedUrl(rawUrl: string) {
  let url: URL;

  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") {
    return null;
  }

  const host = url.hostname.toLowerCase();

  if (
    host === "youtube.com" ||
    host === "www.youtube.com" ||
    host === "m.youtube.com"
  ) {
    const videoId = url.searchParams.get("v");
    return videoId && /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  }

  if (host === "youtu.be") {
    const videoId = url.pathname.slice(1).split("/")[0];
    return videoId && /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  }

  if (host === "vimeo.com" || host === "www.vimeo.com") {
    const videoId = url.pathname.split("/").filter(Boolean)[0];
    return videoId && /^\d+$/.test(videoId)
      ? `https://player.vimeo.com/video/${videoId}`
      : null;
  }

  return null;
}

function PhotoGallery() {
  if (GALLERY_PHOTOS.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-forest/20 bg-white/70 px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-lime text-forest">
          <Camera size={26} strokeWidth={1.7} />
        </div>
        <h3 className="mt-5 font-heading text-2xl uppercase text-forest sm:text-3xl">
          Photos are on the way
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-texts sm:text-base">
          This space is ready for Ahati wedding photography. Portfolio images
          will be added here.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {GALLERY_PHOTOS.map((photo) => (
        <li key={photo.src}>
          <figure className="group relative overflow-hidden rounded-2xl bg-forest">
            <div className="relative aspect-[4/5]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                  {photo.category}
                </span>
                <p className="mt-3 font-heading text-2xl uppercase leading-tight text-white sm:text-3xl">
                  {photo.title}
                </p>
              </figcaption>
            </div>
          </figure>
        </li>
      ))}
    </ul>
  );
}

function VideoGallery() {
  if (GALLERY_VIDEOS.length === 0) {
    return (
      <div className="rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-orange text-forest">
            <Clapperboard size={25} strokeWidth={1.7} />
          </div>
          <div>
            <h3 className="font-heading text-2xl uppercase text-background sm:text-3xl">
              Films coming soon
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-background/75 sm:text-base">
              YouTube and Vimeo wedding films will have a dedicated space here
              alongside the photo gallery.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {GALLERY_VIDEOS.map((video) => {
        const embedUrl = getVideoEmbedUrl(video.url);

        return (
          <li
            key={video.url}
            className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]"
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={video.title}
                className="aspect-video w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-background/75">
                This video needs a valid YouTube or Vimeo URL.
              </div>
            )}
            <h3 className="p-4 font-heading text-xl uppercase text-background sm:text-2xl">
              {video.title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}

export function GalleryContent() {
  return (
    <main>
      <section
        aria-labelledby="gallery-photos-heading"
        className="bg-background py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
              <Asterisk className="size-5" strokeWidth={3} />
              <span>Photo Gallery</span>
            </div>
            <h2
              id="gallery-photos-heading"
              className="font-heading text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.94] text-forest"
            >
              The celebrations
              <br className="hidden sm:block" /> we bring together
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-texts sm:text-lg">
              A closer look at wedding days, thoughtful details, and the
              moments in between.
            </p>
          </div>

          <PhotoGallery />
        </div>
      </section>

      <section
        aria-labelledby="gallery-videos-heading"
        className="bg-forest py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange sm:text-sm">
              <Asterisk className="size-5" strokeWidth={3} />
              <span>Video Highlights</span>
            </div>
            <h2
              id="gallery-videos-heading"
              className="font-heading text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.94] text-background"
            >
              Moments in motion
            </h2>
          </div>

          <VideoGallery />

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold text-forest transition-colors hover:bg-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Start planning
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
