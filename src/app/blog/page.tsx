import type { Metadata } from "next";
import TrainingBuddy from "../components/TrainingBuddy";
import { blogPosts } from "./blogData";

export const metadata: Metadata = {
  title: "Fitness Journal | Daily Fitness, Home Workouts & Mobility",
  description: "Open the AniTrain fitness notebook for practical guides on daily fitness, home workouts, mobility, recovery, bodyweight training and anime-inspired motivation.",
  keywords: ["fitness blog", "daily fitness", "home workouts", "mobility", "bodyweight workout", "anime fitness"],
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <main className="notebook-index-shell">
      <a className="notebook-back notebook-index-back" href="/#wall-story"><span>←</span><b>BACK TO THE WALL</b></a>
      <section className="journal-cover">
        <div className="journal-cover-copy">
          <span>ANITRAIN JOURNAL · VOL. 01</span>
          <h1>Train. Learn. Turn the page.</h1>
          <p>Practical fitness notes for real life — strength, cardio, mobility, recovery and a little anime energy when you want it.</p>
          <div className="journal-cover-tags"><i>DAILY FITNESS</i><i>HOME TRAINING</i><i>MOBILITY</i><i>CONSISTENCY</i></div>
        </div>
        <TrainingBuddy stage={3} activity="walk" />
      </section>
      <section className="journal-grid" aria-label="AniTrain fitness articles">
        {blogPosts.map((post, index) => (
          <article className="journal-card" key={post.slug}>
            <span className="journal-card-number">{String(index + 1).padStart(2,"0")}</span>
            <small>{post.category}</small>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={`/blog/${post.slug}`}>Open notebook page <b>→</b></a>
          </article>
        ))}
      </section>
    </main>
  );
}
