import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AniTrain",
  description: "Contact AniTrain for product support, feedback, partnerships, creator collaborations and fitness app questions.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="content-page contact-page-final">
      <div className="content-wrap">
        <span className="content-kicker">CONTACT · ANITRAIN</span>
        <h1>Talk to AniTrain.</h1>
        <p className="content-lead">Questions, feedback, partnerships, creator ideas or product support — email us directly and we’ll have one place to continue the conversation.</p>
        <div className="contact-grid">
          <section className="contact-card">
            <span className="contact-card-kicker">GENERAL + SUPPORT</span>
            <h2>anitrainapp@gmail.com</h2>
            <p>For app questions, feedback, bug reports and anything you want AniTrain to improve next.</p>
            <a className="contact-email-button" href="mailto:anitrainapp@gmail.com?subject=AniTrain%20Support">Email AniTrain ↗</a>
          </section>
          <section className="contact-card">
            <span className="contact-card-kicker">PARTNERSHIPS</span>
            <h2>Build something together.</h2>
            <p>For creators, fitness communities, brand collaborations and partnership ideas, use the same inbox and tell us what you have in mind.</p>
            <a className="contact-email-button" href="mailto:anitrainapp@gmail.com?subject=AniTrain%20Partnership">Start a conversation ↗</a>
          </section>
        </div>
        <div className="contact-actions">
          <a className="back-home" href="/#wall-story">← Back to the AniTrain wall</a>
          <a className="contact-play-link" href="https://play.google.com/store/apps/details?id=com.anitrain" target="_blank" rel="noopener noreferrer">Download AniTrain on Android ↗</a>
        </div>
      </div>
    </main>
  );
}
