import type { Metadata } from "next";
import HeaderTools from "../components/HeaderTools";
import AnimeFitnessArt from "../components/AnimeFitnessArt";

export const metadata: Metadata = {
  title: "About AniTrain | Daily Fitness With Anime Energy",
  description: "Meet AniTrain: a daily fitness experience for strength, cardio, mobility, recovery and home workouts, powered by anime-inspired motivation.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="about-note-page">
      <header className="site-header about-note-header">
        <a className="brand-mark brand-mark-image" href="/" aria-label="AniTrain home"><img src="/anitrain-icon.png" alt="" /></a>
        <span className="header-kicker">ABOUT ANITRAIN · THE NOTE ON THE WALL</span>
        <HeaderTools lang="EN" />
      </header>

      <div className="about-room" aria-hidden="true">
        <div className="about-room-wall" />
        <div className="about-room-window"><i /><b /></div>
        <div className="about-room-plant"><i /><i /><i /></div>
        <div className="about-room-floor" />
      </div>

      <section className="about-note-layout">
        <a className="about-back" href="/#wall-story"><span>←</span> BACK TO THE ROOM</a>

        <article className="about-paper-note">
          <span className="about-tape" aria-hidden="true" />
          <span className="about-note-number">01 / ABOUT ANITRAIN</span>
          <h1>Fitness should feel like a story worth continuing.</h1>
          <p className="about-lead">AniTrain is a daily fitness experience built to make starting easier, progress more visible, and consistency more fun.</p>

          <div className="about-rule" />

          <div className="about-note-sections">
            <section>
              <span>WHY ANITRAIN</span>
              <h2>Anime energy. Real training.</h2>
              <p>We borrow the feeling of training arcs, quests and character growth — then apply it to practical strength, cardio, mobility, yoga, recovery and home workouts.</p>
            </section>
            <section>
              <span>THE IDEA</span>
              <h2>A routine, not random workouts.</h2>
              <p>AniTrain helps you choose movement that fits the day you actually have. Ten minutes still counts. Recovery still counts. Showing up is part of the story.</p>
            </section>
            <section>
              <span>WHO IT IS FOR</span>
              <h2>You do not need to be an anime fan.</h2>
              <p>Anime gives AniTrain its personality, but the fitness is for anyone who wants to move more, get stronger and build a routine they can keep.</p>
            </section>
          </div>

          <div className="about-note-footer">
            <div><span>BUILT AROUND</span><strong>Daily fitness · Home strength · Cardio · Mobility · Recovery</strong></div>
            <a href="/blog">OPEN THE TRAINING JOURNAL <b>↗</b></a>
          </div>
        </article>

        <aside className="about-character-note">
          <span className="about-small-tape" aria-hidden="true" />
          <div className="about-character-art about-anime-art"><AnimeFitnessArt alt="Anime-style fitness athletes training with weights and conditioning" /></div>
          <span className="about-character-kicker">ANITRAIN ENERGY</span>
          <h2>Fitness first. Anime energy on top.</h2>
          <p>AniTrain uses the momentum of training arcs, challenges and character growth to make real-world strength, cardio, mobility and recovery easier to keep doing.</p>
          <div className="about-progress"><i /><i /><i /><i /><i className="active" /><i /></div>
        </aside>
      </section>
    </main>
  );
}
