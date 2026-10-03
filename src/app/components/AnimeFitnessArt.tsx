"use client";

import { useState } from "react";

const LOCAL = "/characters/anime-fitness-collage.png";
const REMOTE = "https://w7.pngwing.com/pngs/87/1023/png-transparent-flat-drawing-gym-workout-sweat-dynamic-action-anime.png";

export default function AnimeFitnessArt({ alt, className = "" }: { alt: string; className?: string }) {
  const [src, setSrc] = useState(LOCAL);
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => { if (src !== REMOTE) setSrc(REMOTE); }}
    />
  );
}
