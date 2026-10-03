"use client";

import { CSSProperties, PointerEvent, useRef } from "react";

const bubbles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85",
    top: "22%",
    left: "8%",
    size: "clamp(84px, 8vw, 132px)",
    delay: "0s",
    duration: "7.4s",
    depth: 0.22,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85",
    top: "17%",
    left: "50%",
    size: "clamp(78px, 7vw, 118px)",
    delay: "-1.7s",
    duration: "8.2s",
    depth: 0.36,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=700&q=85",
    top: "61%",
    left: "70%",
    size: "clamp(82px, 7.8vw, 126px)",
    delay: "-3.1s",
    duration: "7.8s",
    depth: 0.28,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=700&q=85",
    top: "63%",
    left: "27%",
    size: "clamp(74px, 6.7vw, 108px)",
    delay: "-4.3s",
    duration: "8.8s",
    depth: 0.18,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const setHeroVars = (x: number, y: number) => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--hero-x", `${x}px`);
    hero.style.setProperty("--hero-y", `${y}px`);
  };

  const handleHeroMove = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setHeroVars(localX, localY));
  };

  const handleWordMove = (event: PointerEvent<HTMLDivElement>) => {
    const word = wordRef.current;
    if (!word) return;

    const rect = word.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    word.style.setProperty("--liquid-x", `${x}%`);
    word.style.setProperty("--liquid-y", `${y}%`);
  };

  return (
    <main className="page-shell">
      <svg className="liquid-filter" aria-hidden="true">
        <defs>
          <filter id="anitrain-liquid" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.018"
              numOctaves="2"
              seed="9"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.008 0.018;0.012 0.026;0.008 0.018"
                dur="6s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="42"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <header className="site-header">
        <a className="brand-dot" href="#" aria-label="AniTrain home">
          AT
        </a>

        <span className="header-label">ANIME-INSPIRED TRAINING</span>

        <a className="enter-app" href="#">
          ENTER APP <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section
        ref={heroRef}
        className="hero"
        onPointerMove={handleHeroMove}
      >
        <div className="bubble-layer bubble-layer-back" aria-hidden="true">
          {bubbles.slice(0, 2).map((bubble) => (
            <div
              key={bubble.id}
              className="character-bubble"
              style={
                {
                  "--bubble-top": bubble.top,
                  "--bubble-left": bubble.left,
                  "--bubble-size": bubble.size,
                  "--bubble-delay": bubble.delay,
                  "--bubble-duration": bubble.duration,
                  "--bubble-depth": bubble.depth,
                  "--bubble-image": `url(${bubble.image})`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="hero-content">
          <div
            ref={wordRef}
            className="word-stage"
            onPointerMove={handleWordMove}
            onPointerEnter={(event) => event.currentTarget.classList.add("is-hovered")}
            onPointerLeave={(event) => event.currentTarget.classList.remove("is-hovered")}
          >
            <h1 className="anitrain-word anitrain-base">AniTrain</h1>
            <h1 className="anitrain-word anitrain-liquid" aria-hidden="true">
              AniTrain
            </h1>

            <div className="liquid-orb" aria-hidden="true">
              <span className="liquid-orb-edge" />
              <span className="liquid-orb-sheen" />
            </div>
          </div>

          <p className="hero-quote">Train like the hero of your own arc.</p>
        </div>

        <div className="bubble-layer bubble-layer-front" aria-hidden="true">
          {bubbles.slice(2).map((bubble) => (
            <div
              key={bubble.id}
              className="character-bubble"
              style={
                {
                  "--bubble-top": bubble.top,
                  "--bubble-left": bubble.left,
                  "--bubble-size": bubble.size,
                  "--bubble-delay": bubble.delay,
                  "--bubble-duration": bubble.duration,
                  "--bubble-depth": bubble.depth,
                  "--bubble-image": `url(${bubble.image})`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="cursor-note" aria-hidden="true">
          <span className="cursor-note-line" />
          MOVE YOUR CURSOR
        </div>
      </section>
    </main>
  );
}
