import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NotebookArticle from "../NotebookArticle";
import { blogPosts } from "../blogData";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, url: `/blog/${post.slug}` },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function DynamicPostPage({ params }: Props) {
  const { slug } = await params;
  const index = blogPosts.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const post = blogPosts[index];
  const prev = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
  const next = blogPosts[(index + 1) % blogPosts.length];
  return <NotebookArticle post={post} index={index} total={blogPosts.length} prevHref={`/blog/${prev.slug}`} nextHref={`/blog/${next.slug}`} />;
}
