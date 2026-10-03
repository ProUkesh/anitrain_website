import type { Metadata } from "next";
import HeaderTools from "../components/HeaderTools";

export const metadata: Metadata = {
  title: "Advertise With AniTrain | Fitness, Anime & Wellness Partnerships",
  description: "Partner with AniTrain for branded fitness challenges, creator campaigns, website placements and anime-inspired wellness activations.",
  alternates: { canonical: "/advertise" },
  openGraph: {
    title: "Advertise With AniTrain",
    description: "Partnerships for brands that fit fitness, wellness, anime culture and everyday training.",
    url: "/advertise",
    type: "website",
  },
};

const mailto = "mailto:anitrainapp@gmail.com?subject=Advertising%20with%20AniTrain";

export default function AdvertisePage() {
  const structured = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advertise With AniTrain",
    description: "Advertising and partnership opportunities with AniTrain.",
    url: "https://anitrain.app/advertise",
    isPartOf: { "@type": "WebSite", name: "AniTrain", url: "https://anitrain.app" },
  };

  return (
    <main className="advertise-note-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />

      <header className="site-header advertise-header">
        <a className="brand-mark brand-mark-image" href="/" aria-label="AniTrain home"><img src="/anitrain-icon.png" alt="" /></a>
        <span className="header-kicker">PARTNER WITH ANITRAIN</span>
        <HeaderTools lang="EN" />
      </header>

      <div className="advertise-room" aria-hidden="true">
        <div className="advertise-wall" />
        <div className="advertise-board"><i /><i /><i /></div>
        <div className="advertise-desk" />
        <div className="advertise-lamp" />
        <div className="advertise-floor" />
      </div>

      <section className="advertise-layout">
        <a className="about-back" href="/#wall-story"><span>←</span> BACK TO ANITRAIN</a>

        <article className="advertise-paper">
          <span className="advertise-tape" aria-hidden="true" />
          <span className="advertise-number">PARTNERSHIPS / MEDIA</span>
          <h1>Build something people actually want to move with.</h1>
          <p className="advertise-lead">AniTrain sits between everyday fitness, gamified motivation and anime-inspired culture. We are open to partnerships that make the experience better for the people training with us.</p>

          <div className="advertise-rule" />

          <div className="advertise-grid">
            <section>
              <span>01 / BRANDED CHALLENGES</span>
              <h2>Make the campaign part of the workout.</h2>
              <p>Sponsored fitness challenges, themed training weeks and reward-based activations that fit naturally into AniTrain.</p>
            </section>
            <section>
              <span>02 / CONTENT + LAUNCHES</span>
              <h2>Reach people through useful fitness content.</h2>
              <p>Website, journal and launch collaborations for products that belong in fitness, wellness, active lifestyle or anime culture.</p>
            </section>
            <section>
              <span>03 / CREATOR + COMMUNITY</span>
              <h2>Create a campaign people can participate in.</h2>
              <p>Creator partnerships, community challenges, social activations and custom ideas built around movement instead of passive ads.</p>
            </section>
            <section>
              <span>04 / CUSTOM PARTNERSHIPS</span>
              <h2>Have another idea? Pitch it.</h2>
              <p>We are especially interested in partnerships that add real value to training, recovery, motivation or the AniTrain story.</p>
            </section>
          </div>

          <div className="advertise-fit">
            <div>
              <span>GOOD FIT</span>
              <p>Fitness · Activewear · Wellness · Recovery · Healthy lifestyle · Anime culture · Creator tools · Events</p>
            </div>
            <div>
              <span>BRAND SAFETY</span>
              <p>We do not want deceptive health claims or partnerships that work against a healthy training experience.</p>
            </div>
          </div>

          <div className="advertise-cta">
            <div><span>START A CONVERSATION</span><strong>Tell us what you want to promote, who it is for and what success looks like.</strong></div>
            <a href={mailto}>EMAIL ANITRAIN <b>↗</b></a>
          </div>
        </article>

        <aside className="advertise-side-note">
          <span className="advertise-small-tape" aria-hidden="true" />
          <span>ANDROID · FITNESS · ANIME ENERGY</span>
          <h2>Partnerships should feel native.</h2>
          <p>No giant banner dumped into the experience. The best AniTrain partnership should feel like it belongs in the workout, challenge or story.</p>
          <a href={mailto}>anitrainapp@gmail.com ↗</a>
        </aside>
      </section>
    </main>
  );
}
