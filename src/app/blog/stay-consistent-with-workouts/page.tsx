import type { Metadata } from "next";
import NotebookArticle from "../NotebookArticle";
import { blogPosts, getBlogPost } from "../blogData";

const post = getBlogPost("stay-consistent-with-workouts");
const index = blogPosts.findIndex((item) => item.slug === post.slug);
const prev = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
const next = blogPosts[(index + 1) % blogPosts.length];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { type: "article", title: post.title, description: post.description, url: `/blog/${post.slug}` },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

export default function PostPage() {
  return <NotebookArticle post={post} index={index} total={blogPosts.length} prevHref={`/blog/${prev.slug}`} nextHref={`/blog/${next.slug}`} />;
}
