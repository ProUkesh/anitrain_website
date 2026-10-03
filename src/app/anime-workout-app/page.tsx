import type { Metadata } from "next";
import DownloadNote from "../components/DownloadNote";

export const metadata: Metadata = {
  title: "Anime Workout App for Android",
  description: "AniTrain is an anime-inspired workout app for Android with home workouts, bodyweight strength, cardio, mobility, recovery and story-driven motivation.",
  alternates: { canonical: "/anime-workout-app" },
  openGraph: { title: "Anime Workout App for Android | AniTrain", description: "Train with anime-inspired motivation and practical everyday fitness." },
};

export default function AnimeWorkoutAppPage(){
  return <main className="content-page seo-landing-page"><div className="content-wrap">
    <a className="back-home" href="/">← AniTrain home</a>
    <span className="content-kicker">ANIME WORKOUT APP</span>
    <h1>Anime energy for real workouts.</h1>
    <p className="content-lead">AniTrain combines anime-inspired motivation with everyday training you can use at home or as part of a wider fitness routine.</p>
    <div className="prose">
      <h2>More than an anime theme</h2><p>Use the story and progression as motivation while your actual routine stays grounded in strength, cardio, mobility, recovery and consistency.</p>
      <h2>Built for Android</h2><p>AniTrain is currently available on Android. The website also gives you practical fitness guides for bodyweight workouts, mobility and staying consistent.</p>
      <h2>Train at home or wherever you are</h2><p>Bodyweight sessions, daily movement and shorter routines make it easier to keep training when a gym is not part of the day.</p>
    </div>
    <div className="seo-landing-actions"><DownloadNote /><a href="/blog/anime-inspired-workouts-beginners">Read the beginner anime workout guide →</a></div>
  </div></main>;
}
