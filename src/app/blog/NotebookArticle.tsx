"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TrainingBuddy from "../components/TrainingBuddy";
import type { BlogPost } from "./blogData";

export default function NotebookArticle({ post, index, total, prevHref, nextHref }: { post: BlogPost; index: number; total: number; prevHref: string; nextHref: string }) {
  const router = useRouter();
  const [turn, setTurn] = useState<"prev" | "next" | null>(null);

  const go = (href: string, direction: "prev" | "next") => {
    if (turn) return;
    setTurn(direction);
    window.setTimeout(() => router.push(href), 430);
  };

  return (
    <main className={`notebook-shell${turn ? ` is-turning-${turn}` : ""}`}>
      <button className="notebook-back" onClick={() => router.push("/blog")} aria-label="Back to AniTrain Journal">
        <span>←</span><b>JOURNAL</b>
      </button>

      <article className="notebook-book" aria-labelledby="article-title">
        <div className="notebook-rings" aria-hidden="true">{Array.from({ length: 8 }).map((_, i) => <i key={i} />)}</div>

        <section className="notebook-sheet notebook-left">
          <div className="notebook-margin-line" aria-hidden="true" />
          <span className="notebook-page-number">PAGE {String(index + 1).padStart(2,"0")} / {String(total).padStart(2,"0")}</span>
          <span className="notebook-kicker">{post.category}</span>
          <h1 id="article-title">{post.title}</h1>
          <p className="notebook-lead">{post.lead}</p>
          <div className="notebook-prose">
            {post.sections.slice(0, 2).map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
          </div>
          <div className="notebook-doodle doodle-arrow" aria-hidden="true">↘</div>
        </section>

        <section className="notebook-sheet notebook-right">
          <div className="notebook-margin-line" aria-hidden="true" />
          <div className="buddy-card">
            <div className="buddy-card-copy"><span>YOUR TRAINING STORY</span><strong>Progress is built page by page.</strong><p>AniTrain keeps the same character moving with you as the training gets stronger, cleaner and more confident.</p></div>
            <TrainingBuddy stage={post.stage} activity={post.activity} />
          </div>
          <div className="notebook-prose notebook-prose-right">
            {post.sections.slice(2).map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
          </div>
          <blockquote className="notebook-takeaway">“{post.takeaway}”</blockquote>
          <div className="notebook-keywords" aria-label="Topics">{post.keywords.slice(0,4).map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "BlogPosting", headline: post.title, description: post.description, keywords: post.keywords.join(", "), mainEntityOfPage: `https://anitrain.app/blog/${post.slug}`, author: { "@type": "Organization", name: "AniTrain" }, publisher: { "@type": "Organization", name: "AniTrain", logo: { "@type": "ImageObject", url: "https://anitrain.app/anitrain-icon.png" } } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "AniTrain", item: "https://anitrain.app/" },
            { "@type": "ListItem", position: 2, name: "Journal", item: "https://anitrain.app/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://anitrain.app/blog/${post.slug}` }
          ] }
        ]
      }) }} />

      <nav className="notebook-turn-nav" aria-label="Article navigation">
        <button className="turn-button turn-prev" onClick={() => go(prevHref, "prev")}><span>←</span><small>PREVIOUS PAGE</small></button>
        <a className="notebook-home-link" href="/#wall-story">HOME WALL</a>
        <button className="turn-button turn-next" onClick={() => go(nextHref, "next")}><small>NEXT PAGE</small><span>→</span></button>
      </nav>
    </main>
  );
}
