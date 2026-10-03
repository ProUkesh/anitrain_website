"use client";

import { useState } from "react";

type Activity = "running" | "pushup" | "boxing" | "yoga";

const ART: Record<Activity, { local: string; remote: string }> = {
  running: {
    local: "/characters/activity-running.png",
    remote: "https://w7.pngwing.com/pngs/256/272/png-transparent-anime-runner-sprinting-track-athletic-dynamic-sketch-drawing.png",
  },
  pushup: {
    local: "/characters/activity-pushup.png",
    remote: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Push_up_(PSF).png",
  },
  boxing: {
    local: "/characters/activity-shadow-boxing.png",
    remote: "https://w7.pngwing.com/pngs/629/455/png-transparent-shonen-anime-protagonist-fist-bump-dynamic-pose-sketch-graphic.png",
  },
  yoga: {
    local: "/characters/activity-yoga.png",
    remote: "https://w7.pngwing.com/pngs/281/825/png-transparent-anime-yoga-pose-zen-and-relaxing-sketch-style.png",
  },
};

export default function ActivityArt({ activity, alt }: { activity: Activity; alt: string }) {
  const [src, setSrc] = useState(ART[activity].local);

  return (
    <img
      className={`activity-art activity-${activity}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (src !== ART[activity].remote) setSrc(ART[activity].remote);
      }}
    />
  );
}
