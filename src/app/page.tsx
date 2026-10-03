"use client";

import { useEffect, useRef } from "react";
import HeaderTools from "./components/HeaderTools";
import DownloadNote from "./components/DownloadNote";
import AnimeFitnessArt from "./components/AnimeFitnessArt";
import ActivityArt from "./components/ActivityArt";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sectionProgress(element: HTMLElement | null) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const distance = Math.max(1, rect.height - window.innerHeight);
  return clamp(-rect.top / distance);
}

function Runner() {
  return (
    <svg className="runner" viewBox="0 0 280 320" aria-hidden="true">
      <ellipse className="shadow" cx="140" cy="293" rx="78" ry="13" />
      <g className="run-body">
        <circle className="skin" cx="146" cy="65" r="31" />
        <path className="hair" d="M116 65c4-30 24-47 51-39 20 6 26 23 19 44-18-15-41-19-70-5Z" />
        <path className="headband" d="M119 57c23-9 45-8 65 1" /><circle className="character-eye" cx="137" cy="67" r="3.5" /><circle className="character-eye" cx="157" cy="67" r="3.5" /><path className="character-smile" d="M139 80c7 4 14 4 21 0" />
        <rect className="top" x="110" y="96" width="72" height="83" rx="29" />
        <path className="mark" d="M137 117h23l-9 39h-22l8-39Z" />
        <g className="run-arm arm-a"><path className="limb" d="M119 115C88 119 76 142 60 160" /><circle className="skin" cx="57" cy="162" r="10" /></g>
        <g className="run-arm arm-b"><path className="limb" d="M174 115c28 11 42 30 57 44" /><circle className="skin" cx="234" cy="161" r="10" /></g>
        <g className="run-leg leg-a"><path className="leg" d="M130 175c-10 41-28 61-55 84" /><path className="shoe" d="M79 258c-23 4-35 14-40 23 20 4 38-1 55-11" /></g>
        <g className="run-leg leg-b"><path className="leg" d="M163 175c14 37 32 59 59 79" /><path className="shoe" d="M220 254c22 4 35 14 41 24-19 3-38-1-56-13" /></g>
      </g>
    </svg>
  );
}

function YogaPerson() {
  return (
    <svg className="yoga-person" viewBox="0 0 320 340" aria-hidden="true">
      <ellipse className="shadow" cx="160" cy="307" rx="88" ry="12" />
      <circle className="skin" cx="160" cy="69" r="31" />
      <path className="hair" d="M130 69c1-33 23-49 48-39 19 8 24 26 16 46-17-16-38-20-64-7Z" />
      <path className="headband" d="M132 61c19-8 38-7 59 1" /><circle className="character-eye" cx="150" cy="72" r="3.5" /><circle className="character-eye" cx="171" cy="72" r="3.5" /><path className="character-smile" d="M151 84c7 4 14 4 21 0" />
      <rect className="top" x="126" y="101" width="68" height="88" rx="28" />
      <path className="mark" d="M150 121h22l-7 42h-23l8-42Z" />
      <path className="limb yoga-arm-left" d="M133 122c-31 9-50 34-68 59" />
      <path className="limb yoga-arm-right" d="M187 122c31 9 50 34 68 59" />
      <circle className="skin" cx="62" cy="184" r="9" /><circle className="skin" cx="258" cy="184" r="9" />
      <path className="leg yoga-leg-left" d="M147 187c-28 33-52 57-76 80 31 8 63 9 91 3" />
      <path className="leg yoga-leg-right" d="M173 187c28 33 52 57 76 80-31 8-63 9-91 3" />
    </svg>
  );
}

function PushupPerson() {
  return (
    <svg className="pushup-person" viewBox="0 0 520 250" aria-hidden="true">
      <ellipse className="shadow" cx="270" cy="218" rx="205" ry="14" />
      <g className="push-body">
        <circle className="skin" cx="105" cy="108" r="28" />
        <path className="hair" d="M78 108c0-31 20-46 44-37 18 7 23 22 17 41-17-13-37-17-61-4Z" />
        <path className="headband" d="M82 100c18-7 36-6 54 1" /><circle className="character-eye" cx="96" cy="111" r="3.2" /><circle className="character-eye" cx="114" cy="111" r="3.2" /><path className="character-smile" d="M96 122c7 3 13 3 19 0" />
        <path className="top push-torso" d="M135 110c68 1 135 9 204 28l-13 61c-74-18-144-25-210-19Z" />
        <path className="mark" d="M187 133h32l-11 42h-31l10-42Z" />
        <path className="limb push-arm-a" d="M159 151c-21 7-33 28-35 58" />
        <path className="limb push-arm-b" d="M282 169c-6 12-9 27-8 45" />
        <path className="leg" d="M326 184c54 6 88 10 128 7" />
        <path className="shoe" d="M449 190c22 0 35 6 44 17-20 4-41 3-59-3" />
      </g>
    </svg>
  );
}

function Room({ mode }: { mode: "yoga" | "pushup" | "wall" }) {
  return (
    <div className={`room room-${mode}`} aria-hidden="true">
      <div className="room-wall-bg" />
      <div className="window"><div className="window-sky" /><div className="window-frame-v" /><div className="window-frame-h" /></div>
      <div className="curtain curtain-left" /><div className="curtain curtain-right" />
      <div className="shelf shelf-one"><i /><i /><i /></div>
      <div className="shelf shelf-two"><i /><i /></div>
      <div className="plant"><div className="pot" /><span className="leaf l1" /><span className="leaf l2" /><span className="leaf l3" /><span className="leaf l4" /></div>
      <div className="sofa"><div className="cushion c1" /><div className="cushion c2" /></div>
      <div className="lamp"><div className="lamp-shade" /><div className="lamp-stand" /></div>
      <div className="room-floor" />
      <div className="rug" />
      <div className="coffee-table" />
      <div className="wall-note-hint note-hint-a">ABOUT</div>
      <div className="wall-note-hint note-hint-b">BLOG</div>
      <div className="wall-note-hint note-hint-c">MOVE</div>
      <div className="wall-note-hint note-hint-d">CONTACT</div>
    </div>
  );
}

function Feature({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <article className="mini-feature"><span>{eyebrow}</span><strong>{title}</strong><p>{text}</p></article>;
}

const cameraStops = [
  { x: 0, y: 0, scale: 0.58, stage: 0 },
  { x: 29, y: 20, scale: 1.12, stage: 0 },
  { x: -6, y: 20, scale: 1.12, stage: 1 },
  { x: -6, y: -22, scale: 1.12, stage: 2 },
];

export default function HomePage() {
  const revealRef = useRef<HTMLDivElement | null>(null);
  const runRef = useRef<HTMLElement | null>(null);
  const yogaRef = useRef<HTMLElement | null>(null);
  const pushRef = useRef<HTMLElement | null>(null);
  const arcRef = useRef<HTMLElement | null>(null);
  const wallRef = useRef<HTMLElement | null>(null);
  const wallCanvasRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 50, y: 50, r: 0 });
  const current = useRef({ x: 50, y: 50, r: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      if (revealRef.current) {
        current.current.x += (target.current.x - current.current.x) * 0.15;
        current.current.y += (target.current.y - current.current.y) * 0.15;
        current.current.r += (target.current.r - current.current.r) * 0.13;
        revealRef.current.style.setProperty("--mx", `${current.current.x}%`);
        revealRef.current.style.setProperty("--my", `${current.current.y}%`);
        revealRef.current.style.setProperty("--reveal", `${current.current.r}px`);
      }

      const run = sectionProgress(runRef.current);
      if (runRef.current) {
        runRef.current.style.setProperty("--runner-x", `${mix(-35, 35, run)}vw`);
        runRef.current.style.setProperty("--road-x", `${mix(0, -18, run)}%`);
        runRef.current.style.setProperty("--run-copy", `${clamp(run * 3.1)}`);
      }

      const yoga = sectionProgress(yogaRef.current);
      if (yogaRef.current) {
        yogaRef.current.style.setProperty("--room-zoom", `${mix(1.08, 1, yoga)}`);
        yogaRef.current.style.setProperty("--yoga-y", `${mix(65, 0, yoga)}px`);
        yogaRef.current.style.setProperty("--yoga-copy", `${clamp(yoga * 3)}`);
        yogaRef.current.style.setProperty("--breath", `${clamp((yoga - .18) * 2.1)}`);
      }

      const push = sectionProgress(pushRef.current);
      if (pushRef.current) {
        const rep = (1 - Math.cos(push * Math.PI * 8)) / 2;
        pushRef.current.style.setProperty("--push-y", `${mix(0, 28, rep)}px`);
        pushRef.current.style.setProperty("--push-rotate", `${mix(-1.5, 1.5, rep)}deg`);
        pushRef.current.style.setProperty("--push-copy", `${clamp(push * 2.7)}`);
        pushRef.current.style.setProperty("--note-pulse", `${clamp((push - .58) * 3)}`);
      }

      const wallProgress = sectionProgress(wallRef.current);
      if (wallRef.current && wallCanvasRef.current) {
        const segments = cameraStops.length - 1;
        const raw = wallProgress * segments;
        const i = Math.min(segments - 1, Math.floor(raw));
        const t = clamp(raw - i);
        const eased = t * t * (3 - 2 * t);
        const a = cameraStops[i];
        const b = cameraStops[i + 1];
        const x = mix(a.x, b.x, eased);
        const y = mix(a.y, b.y, eased);
        const scale = mix(a.scale, b.scale, eased);
        wallCanvasRef.current.style.setProperty("--cam-x", `${x}vw`);
        wallCanvasRef.current.style.setProperty("--cam-y", `${y}vh`);
        wallCanvasRef.current.style.setProperty("--cam-scale", `${scale}`);
        const stage = Math.min(2, Math.max(0, Math.round(raw - .55)));
        wallRef.current.dataset.stage = String(stage);
        wallRef.current.style.setProperty("--wall-hud", `${clamp(wallProgress * 4)}`);
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, []);

  useEffect(() => {
    const arc = arcRef.current;
    if (!arc) return;
    const observer = new IntersectionObserver(([entry]) => {
      arc.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: 0.22 });
    observer.observe(arc);
    return () => observer.disconnect();
  }, []);

  const revealMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = revealRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current.x = ((event.clientX - rect.left) / rect.width) * 100;
    target.current.y = ((event.clientY - rect.top) / rect.height) * 100;
    target.current.r = Math.max(92, Math.min(178, rect.width * .095));
  };

  const revealPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || event.buttons > 0) revealMove(event);
  };

  const revealPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    revealMove(event);
  };

  const revealPointerUp = () => {
    target.current.r = 0;
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-mark brand-mark-image" href="#top" aria-label="AniTrain home"><img src="/anitrain-icon.png" alt="" /></a>
        <span className="header-kicker">ANIME WORKOUT APP · DAILY FITNESS</span>
        <HeaderTools lang="EN" />
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">AniTrain daily fitness, home workouts, strength, cardio, yoga and anime-inspired training</h1>
        <div className="hero-inner">
          <div
            ref={revealRef}
            className="reveal-stage"
            onPointerMove={revealPointerMove}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") revealMove(event); }}
            onPointerLeave={revealPointerUp}
            onPointerDown={revealPointerDown}
            onPointerUp={revealPointerUp}
            onPointerCancel={revealPointerUp}
          >
            <img className="logo-white" src="/hero/anitrain-white.png" alt="AniTrain — Train Like an Anime Hero" draggable={false} />
            <img className="logo-color-reveal" src="/hero/anitrain-color.png" alt="" aria-hidden="true" draggable={false} />
          </div>
          <p className="hero-subcopy">Daily fitness for real life — strength, cardio, mobility and recovery with AniTrain energy.</p>
          <div className="hero-download-wrap"><DownloadNote /></div>
          <a className="creator-credit" href="https://www.linkedin.com/in/programmerukesh/" target="_blank" rel="noopener noreferrer"><span>BUILT BY GROWWITHUKESH WITH LOVE</span><b aria-hidden="true">↗</b></a>
        </div>
      </section>

      <section id="features" ref={runRef} className="story run-story" aria-labelledby="run-title">
        <div className="sticky-scene">
          <div className="run-world" aria-hidden="true"><div className="sun" /><div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="hills" /><div className="road"><div /></div></div>
          <div className="runner-wrap"><Runner /></div>
          <div className="scene-copy copy-left">
            <span className="scene-index">01 · DAILY MOVEMENT</span>
            <h2 id="run-title">Move every day.</h2>
            <p>Quick cardio, walking, conditioning and activity goals that make movement easier to keep doing.</p>
            <div className="mini-grid"><Feature eyebrow="CARDIO" title="Build endurance" text="Progress from short sessions to longer movement days." /><Feature eyebrow="ROUTINE" title="Stay consistent" text="Choose workouts around the time and energy you have." /></div>
          </div>
        </div>
      </section>

      <section ref={yogaRef} className="story yoga-room-story" aria-labelledby="yoga-title">
        <div className="sticky-scene">
          <Room mode="yoga" />
          <div className="yoga-mat" aria-hidden="true" />
          <div className="breath-ring ring-one" aria-hidden="true" /><div className="breath-ring ring-two" aria-hidden="true" />
          <div className="yoga-person-wrap"><YogaPerson /></div>
          <div className="scene-copy copy-right room-copy">
            <span className="scene-index">02 · YOGA + MOBILITY</span>
            <h2 id="yoga-title">Make room to recover.</h2>
            <p>Mobility and yoga live inside the same fitness routine as strength and cardio — right from your sitting room.</p>
            <div className="mini-grid"><Feature eyebrow="MOBILITY" title="Move better" text="Simple flows for hips, shoulders and the full body." /><Feature eyebrow="RECOVERY" title="Slow down on purpose" text="Use guided breathing and easier days without losing momentum." /></div>
          </div>
        </div>
      </section>

      <section ref={pushRef} className="story pushup-story" aria-labelledby="push-title">
        <div className="sticky-scene">
          <Room mode="pushup" />
          <div className="push-mat" aria-hidden="true" />
          <div className="pushup-wrap"><PushupPerson /></div><div className="story-phone" aria-label="AniTrain story mode preview"><div className="phone-speaker" /><span>STORY MODE</span><strong>PUSH-UP QUEST</strong><b>06 / 10</b><div className="phone-progress"><i /></div><small>KEEP GOING · +40 XP</small></div>
          <div className="scene-copy copy-left push-copy">
            <span className="scene-index">03 · HOME STRENGTH</span>
            <h2 id="push-title">Your home can be the gym.</h2>
            <p>Bodyweight strength sessions for the days you do not need equipment, a commute or a complicated setup.</p>
            <div className="mini-grid"><Feature eyebrow="STRENGTH" title="Start with your body" text="Push, squat, hinge and core work with clear progressions." /><Feature eyebrow="ANYWHERE" title="Train where you are" text="Home-friendly routines that still feel structured." /></div>
          </div>
          <div className="look-at-wall" aria-hidden="true"><span>THE WALL HAS MORE</span><b>↗</b></div>
        </div>
      </section>

      <section ref={arcRef} className="character-arc" aria-labelledby="arc-title">
        <div className="arc-shell">
          <div className="arc-heading compact-heading">
            <span>04 · TRAINING STYLES</span>
            <h2 id="arc-title">Choose the energy. Keep the routine.</h2>
            <p>Pick the kind of movement your day needs. Every path is equipment-free, easy to start at home, and designed to keep your routine moving forward.</p>
          </div>

          <div className="anime-character-stage equipment-free-stage" aria-label="Equipment-free AniTrain workout styles">
            <figure className="anime-character-card char-running">
              <div className="anime-crop"><ActivityArt activity="running" alt="Anime-inspired athlete running without equipment" /></div>
              <figcaption><span>01 · RUNNING</span><strong>Build your engine</strong><p>Run, jog or use short cardio intervals to build endurance without needing equipment.</p></figcaption>
            </figure>
            <figure className="anime-character-card char-pushup">
              <div className="anime-crop"><ActivityArt activity="pushup" alt="Athlete performing a bodyweight push-up" /></div>
              <figcaption><span>02 · PUSH-UPS</span><strong>Get stronger anywhere</strong><p>Use bodyweight progressions for chest, shoulders, arms and core — right at home.</p></figcaption>
            </figure>
            <figure className="anime-character-card char-boxing">
              <div className="anime-crop"><ActivityArt activity="boxing" alt="Anime-inspired athlete shadow boxing without equipment" /></div>
              <figcaption><span>03 · SHADOW BOXING</span><strong>Move with intensity</strong><p>Fast combinations, footwork and conditioning give you a high-energy session with zero gear.</p></figcaption>
            </figure>
            <figure className="anime-character-card char-yoga">
              <div className="anime-crop"><ActivityArt activity="yoga" alt="Anime-inspired athlete practicing yoga" /></div>
              <figcaption><span>04 · YOGA</span><strong>Reset and recover</strong><p>Slow down with mobility, breathing and yoga flows that help you move better tomorrow.</p></figcaption>
            </figure>
          </div>

          <div className="arc-actions"><a className="arc-journal-link" href="/blog">Open the training journal <b>↗</b></a><a className="arc-ad-link" href="/advertise">Advertise with AniTrain <b>↗</b></a></div>
        </div>
      </section>

      <section id="wall-story" ref={wallRef} className="wall-story" data-stage="0" aria-label="About AniTrain, fitness blog and contact">
        <div className="wall-sticky">
          <div ref={wallCanvasRef} className="wall-canvas">
            <div className="wall-room-bg" aria-hidden="true"><div className="wall-window" /><div className="wall-sofa" /><div className="wall-plant" /><div className="wall-floor" /></div>

            <article className="paper-note note-about">
              <span className="tape tape-a" /><span className="note-number">01 / ABOUT</span>
              <h2>About AniTrain</h2>
              <p>AniTrain is a daily fitness experience for people who want to move more, get stronger and build a routine they can actually keep. Anime gives the brand energy; the training is built for real life.</p>
              <div className="note-pills"><span>Daily fitness</span><span>Strength</span><span>Cardio</span><span>Mobility</span></div>
              <a href="/about">Read our story <b>↗</b></a>
            </article>

            <article className="paper-note blog-note note-blog-1">
              <span className="tape tape-b" /><span className="note-number">02 / JOURNAL</span>
              <h2>Open the AniTrain training notebook.</h2>
              <p>Turn through all of our fitness guides inside one notebook — daily routines, bodyweight training, mobility, consistency and anime-inspired motivation.</p>
              <a href="/blog">Open the journal <b>↗</b></a>
            </article>

            <article className="paper-note note-contact note-blog-2">
              <span className="tape tape-f" /><span className="note-number">03 / CONTACT</span>
              <h2>Talk to AniTrain.</h2>
              <p>Questions, partnerships, feedback or something you want us to build next? Email us at <strong>anitrainapp@gmail.com</strong>.</p>
              <div className="contact-note-actions"><a className="contact-button" href="mailto:anitrainapp@gmail.com">Email AniTrain <b>↗</b></a><a className="contact-text-link" href="/advertise">Advertise with AniTrain <b>↗</b></a></div>
            </article>
          </div>

          <div className="wall-hud" aria-hidden="true">
            <span className="hud-kicker">WALL JOURNEY</span>
            <div className="hud-path"><i /><i /><i /></div>
            <span className="hud-instruction">ABOUT → JOURNAL → CONTACT</span>
          </div>
        </div>
      </section>

      <section id="faq" className="seo-faq" aria-labelledby="faq-title">
        <div className="seo-faq-inner">
          <span className="seo-eyebrow">ANITRAIN · QUESTIONS</span>
          <h2 id="faq-title">Anime energy. Real daily fitness.</h2>
          <p className="seo-faq-intro">AniTrain is built for anime fans and for anyone who simply wants a more motivating way to train at home, improve strength, add cardio, work on mobility and stay consistent.</p>
          <div className="seo-faq-grid">
            <details><summary>Is AniTrain an anime workout app?</summary><p>Yes. AniTrain uses anime-inspired motivation and story elements around practical workouts, while keeping the training useful for everyday fitness.</p></details>
            <details><summary>Do I need to be an anime fan?</summary><p>No. You can use AniTrain for daily movement, bodyweight strength, cardio, mobility and recovery even if anime is not your main reason for training.</p></details>
            <details><summary>Can I use AniTrain for home workouts?</summary><p>Yes. The site and journal include home-friendly bodyweight ideas alongside cardio, mobility and routine-building guidance.</p></details>
            <details><summary>Where can I download AniTrain?</summary><p>AniTrain is currently available on Android through Google Play. Use the Download button at the top of the page.</p></details>
          </div>
          <div className="seo-links"><a href="/anime-workout-app">Anime workout app</a><a href="/anime-trainer-assistant">Anime trainer assistant</a><a href="/blog/anime-inspired-workouts-beginners">Anime-inspired workouts</a><a href="/blog/home-workouts-no-equipment">Home workouts</a><a href="/blog/mobility-recovery-guide">Mobility + recovery</a><a href="/blog/stay-consistent-with-workouts">Workout consistency</a></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": "https://anitrain.app/#organization", name: "AniTrain", url: "https://anitrain.app", logo: "https://anitrain.app/anitrain-icon.png", email: "anitrainapp@gmail.com", contactPoint: [{ "@type": "ContactPoint", email: "anitrainapp@gmail.com", contactType: "customer support" }] },
          { "@type": "WebSite", "@id": "https://anitrain.app/#website", url: "https://anitrain.app", name: "AniTrain", publisher: { "@id": "https://anitrain.app/#organization" } },
          { "@type": "MobileApplication", name: "AniTrain", operatingSystem: "Android", applicationCategory: "HealthApplication", url: "https://anitrain.app", downloadUrl: "https://play.google.com/store/apps/details?id=com.anitrain" },
          { "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "Is AniTrain an anime workout app?", acceptedAnswer: { "@type": "Answer", text: "Yes. AniTrain combines anime-inspired motivation and story elements with practical everyday workouts." } },
            { "@type": "Question", name: "Do I need to be an anime fan?", acceptedAnswer: { "@type": "Answer", text: "No. AniTrain also supports everyday strength, cardio, mobility, recovery and home fitness." } },
            { "@type": "Question", name: "Where can I download AniTrain?", acceptedAnswer: { "@type": "Answer", text: "AniTrain is currently available on Android through Google Play." } }
          ] }
        ]
      }) }} />
    </main>
  );
}
