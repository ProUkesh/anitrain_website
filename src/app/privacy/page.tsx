import type { Metadata } from "next";
import HeaderTools from "../components/HeaderTools";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the AniTrain privacy policy, including how account, workout, device and support information may be processed and how to request deletion.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="about-note-page">
      <header className="site-header about-note-header">
        <a className="brand-mark brand-mark-image" href="/" aria-label="AniTrain home">
          <img src="/anitrain-icon.png" alt="" />
        </a>
        <span className="header-kicker">PRIVACY · ANITRAIN</span>
        <HeaderTools lang="EN" />
      </header>

      <div className="about-room" aria-hidden="true">
        <div className="about-room-wall" />
        <div className="about-room-window"><i /><b /></div>
        <div className="about-room-plant"><i /><i /><i /></div>
        <div className="about-room-floor" />
      </div>

      <section className="about-note-layout">
        <a className="about-back" href="/"><span>←</span> BACK TO ANITRAIN</a>

        <article className="about-paper-note">
          <span className="about-tape" aria-hidden="true" />
          <span className="about-note-number">PRIVACY POLICY · LAST UPDATED OCTOBER 5, 2026</span>
          <h1>Your privacy is part of the training plan.</h1>
          <p className="about-lead">
            This policy explains how AniTrain may process information when you use the Android app, visit anitrain.app, or contact us.
          </p>

          <div className="about-rule" />

          <div className="about-note-sections">
            <section>
              <span>INFORMATION WE MAY PROCESS</span>
              <h2>Account and profile information.</h2>
              <p>When you create or use an AniTrain account, information associated with that account may include details such as your email address, profile information, settings and account identifiers.</p>
            </section>

            <section>
              <span>FITNESS + APP ACTIVITY</span>
              <h2>Progress that makes the experience work.</h2>
              <p>Depending on the features you use, AniTrain may process workout activity, completed sessions, challenges, streaks, progress, preferences and other in-app activity needed to provide the fitness experience.</p>
            </section>

            <section>
              <span>TECHNICAL INFORMATION</span>
              <h2>Keeping AniTrain stable and useful.</h2>
              <p>Device, browser, app-version, diagnostics, crash, analytics or similar technical information may be processed to operate, secure, troubleshoot and improve AniTrain.</p>
            </section>

            <section>
              <span>SUPPORT</span>
              <h2>Messages you send us.</h2>
              <p>If you email or otherwise contact AniTrain, we may process the information you include in that communication so we can respond, investigate a problem or provide support.</p>
            </section>

            <section>
              <span>HOW INFORMATION IS USED</span>
              <h2>To run and improve the service.</h2>
              <p>Information may be used to provide account features, personalize workouts and progress, maintain security, understand product performance, respond to users and improve AniTrain.</p>
            </section>

            <section>
              <span>SERVICE PROVIDERS</span>
              <h2>Infrastructure that helps AniTrain operate.</h2>
              <p>Hosting, authentication, analytics, crash-reporting or similar technology providers may process information on AniTrain&apos;s behalf when needed to provide or maintain the service.</p>
            </section>

            <section>
              <span>RETENTION</span>
              <h2>We keep information only as needed.</h2>
              <p>Information may be retained while your account is active and for as long as reasonably necessary for service operation, security, dispute resolution, legal obligations or backup recovery. Retention periods can differ by data type and purpose.</p>
            </section>

            <section>
              <span>YOUR CHOICES</span>
              <h2>You can request account deletion.</h2>
              <p>You can request deletion of your AniTrain account and associated personal data through our public account-deletion page. No website login is required to open that page.</p>
              <p><a href="/delete-account"><strong>Open account deletion instructions ↗</strong></a></p>
            </section>

            <section>
              <span>CONTACT</span>
              <h2>Questions about privacy?</h2>
              <p>Email <a href="mailto:anitrainapp@gmail.com"><strong>anitrainapp@gmail.com</strong></a> with privacy, account or data questions.</p>
            </section>
          </div>

          <div className="about-note-footer">
            <div><span>ANITRAIN</span><strong>Privacy · Account controls · Data deletion</strong></div>
            <a href="/delete-account">DELETE ACCOUNT / DATA <b>↗</b></a>
          </div>
        </article>

        <aside className="about-character-note">
          <span className="about-small-tape" aria-hidden="true" />
          <span className="about-character-kicker">QUICK PRIVACY CONTROLS</span>
          <h2>Your account. Your choices.</h2>
          <p>Need to remove your AniTrain account and associated data? Use the public deletion page — no website login required.</p>
          <p><a href="/delete-account"><strong>Delete account / data ↗</strong></a></p>
          <p>Questions? <a href="mailto:anitrainapp@gmail.com"><strong>anitrainapp@gmail.com</strong></a></p>
          <div className="about-progress"><i className="active" /><i /><i /><i /><i /><i /></div>
        </aside>
      </section>
    </main>
  );
}
