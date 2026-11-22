import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalPost } from "@/components/journal/JournalPost";
import { POSTS } from "@/lib/posts";

type JournalPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Story Not Found | Ahati Journal" };
  }

  return {
    title: `${post.title} | Ahati Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function JournalPostPage({
  params,
}: JournalPostPageProps) {
  const { slug } = await params;
  const postIndex = POSTS.findIndex((item) => item.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = POSTS[postIndex];
  const relatedPosts = POSTS.filter((item) => item.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category),
    )
    .slice(0, 3);

  return <JournalPost post={post} relatedPosts={relatedPosts} />;
}
