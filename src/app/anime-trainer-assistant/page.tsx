import type { Metadata } from "next";
import DownloadNote from "../components/DownloadNote";

export const metadata: Metadata = {
  title: "Anime Trainer Assistant for Daily Fitness",
  description: "Use AniTrain as an anime-inspired training companion for home workouts, daily movement, strength, cardio, mobility and consistent fitness habits.",
  alternates: { canonical: "/anime-trainer-assistant" },
};

export default function AnimeTrainerAssistantPage(){
  return <main className="content-page seo-landing-page"><div className="content-wrap">
    <a className="back-home" href="/">← AniTrain home</a>
    <span className="content-kicker">ANIME TRAINER ASSISTANT</span>
    <h1>A training companion with a story.</h1>
    <p className="content-lead">AniTrain is designed to make everyday training feel more engaging without replacing realistic progression, recovery or good exercise choices.</p>
    <div className="prose">
      <h2>Keep the next workout obvious</h2><p>Use simple training themes and progression to make it easier to decide what to do next instead of searching for a completely new routine every day.</p>
      <h2>Mix strength, cardio and mobility</h2><p>A sustainable routine can include harder sessions, easier movement, bodyweight strength, cardio and recovery instead of treating every day the same.</p>
      <h2>Use anime as motivation, not a shortcut</h2><p>The training arc is the creative layer. Real progress still comes from repeatable sessions, gradual progression and enough recovery.</p>
    </div>
    <div className="seo-landing-actions"><DownloadNote /><a href="/blog/daily-fitness-routine">Build a daily fitness routine →</a></div>
  </div></main>;
}
