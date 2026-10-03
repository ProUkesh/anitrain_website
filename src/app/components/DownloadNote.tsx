"use client";

import { useEffect, useState } from "react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.anitrain";

type Copy = {
  button: string;
  kicker: string;
  title: string;
  body: string;
  store: string;
  live: string;
};

const copies: Record<string, Copy> = {
  EN: { button: "DOWNLOAD NOW", kicker: "DOWNLOAD ANITRAIN", title: "Android is available now.", body: "Start your AniTrain story today. AniTrain is currently available on Android only.", store: "Google Play", live: "ANDROID · AVAILABLE NOW" },
  HI: { button: "अभी डाउनलोड करें", kicker: "ANITRAIN डाउनलोड करें", title: "Android पर अभी उपलब्ध है।", body: "आज ही अपनी AniTrain स्टोरी शुरू करें। फिलहाल AniTrain केवल Android पर उपलब्ध है।", store: "Google Play", live: "ANDROID · अभी उपलब्ध" },
  PT: { button: "BAIXAR AGORA", kicker: "BAIXAR ANITRAIN", title: "Disponível agora no Android.", body: "Comece sua história AniTrain hoje. No momento, o AniTrain está disponível apenas para Android.", store: "Google Play", live: "ANDROID · DISPONÍVEL" },
  ES: { button: "DESCARGAR AHORA", kicker: "DESCARGAR ANITRAIN", title: "Disponible ahora en Android.", body: "Empieza hoy tu historia con AniTrain. Por ahora, AniTrain está disponible solo en Android.", store: "Google Play", live: "ANDROID · DISPONIBLE" },
  DE: { button: "JETZT LADEN", kicker: "ANITRAIN HERUNTERLADEN", title: "Jetzt für Android verfügbar.", body: "Starte heute deine AniTrain-Story. AniTrain ist derzeit nur für Android verfügbar.", store: "Google Play", live: "ANDROID · JETZT VERFÜGBAR" },
  ID: { button: "UNDUH SEKARANG", kicker: "UNDUH ANITRAIN", title: "Sekarang tersedia di Android.", body: "Mulai cerita AniTrain-mu hari ini. Saat ini AniTrain hanya tersedia untuk Android.", store: "Google Play", live: "ANDROID · TERSEDIA" },
};

export default function DownloadNote({ compact = false, lang = "EN" }: { compact?: boolean; lang?: string }) {
  const [open, setOpen] = useState(false);
  const copy = copies[lang] || copies.EN;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button className={`download-trigger${compact ? " is-compact" : ""}`} onClick={() => setOpen(true)} aria-haspopup="dialog">
        {copy.button} <span aria-hidden="true">↗</span>
      </button>

      {open && (
        <div className="download-modal" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setOpen(false);
        }}>
          <section className="download-note" role="dialog" aria-modal="true" aria-labelledby="download-title">
            <button className="download-close" onClick={() => setOpen(false)} aria-label="Close download note">×</button>
            <span className="download-tape" aria-hidden="true" />
            <span className="download-kicker">{copy.kicker}</span>
            <h2 id="download-title">{copy.title}</h2>
            <p>{copy.body}</p>
            <a className="android-download" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
              <span className="android-icon" aria-hidden="true">▶</span>
              <span><small>GET IT ON</small><strong>{copy.store}</strong></span>
            </a>
            <div className="platform-row"><span className="platform-live">{copy.live}</span></div>
          </section>
        </div>
      )}
    </>
  );
}
