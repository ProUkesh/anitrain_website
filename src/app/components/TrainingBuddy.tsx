import type { CSSProperties } from "react";

type Props = {
  stage?: number;
  activity?: "walk" | "pushup" | "mobility" | "run" | "strength" | "stretch";
  compact?: boolean;
};

export default function TrainingBuddy({ stage = 1, activity = "walk", compact = false }: Props) {
  const progress = Math.max(1, Math.min(6, stage));
  const shoulder = 1 + (progress - 1) * 0.018;
  const tone = 0.12 + (progress - 1) * 0.035;

  return (
    <div
      className={`training-buddy training-buddy-${activity}${compact ? " is-compact" : ""}`}
      style={{ "--buddy-shoulder": shoulder, "--buddy-tone": tone } as CSSProperties}
      aria-label={`AniTrain training character, progress stage ${progress} of 6`}
    >
      <svg viewBox="0 0 320 420" role="img" aria-hidden="true">
        <ellipse className="buddy-shadow" cx="160" cy="390" rx="90" ry="15" />
        <g className="buddy-body">
          <path className="buddy-neck" d="M143 118h34l5 42h-44l5-42Z" />
          <circle className="buddy-face" cx="160" cy="92" r="55" />
          <path className="buddy-ear" d="M104 89c-14-4-20 8-13 21 5 9 13 12 21 9M216 89c14-4 20 8 13 21-5 9-13 12-21 9" />
          <path className="buddy-hair buddy-hair-back" d="M104 84c-4-50 31-78 69-72 43 7 62 39 43 87l-16-29-14 12-14-23-18 20-15-22-19 24-16 13Z" />
          <path className="buddy-hair buddy-hair-front" d="M111 62c18-37 67-49 99-17l-15 8-7 25-15-20-20 20-17-22-16 18-9-12Z" />
          <path className="buddy-brow" d="M124 87c9-6 19-7 29-2M168 85c10-5 20-4 28 2" />
          <ellipse className="buddy-eye-white" cx="139" cy="99" rx="13" ry="11" />
          <ellipse className="buddy-eye-white" cx="184" cy="99" rx="13" ry="11" />
          <ellipse className="buddy-eye" cx="141" cy="100" rx="7" ry="8" />
          <ellipse className="buddy-eye" cx="182" cy="100" rx="7" ry="8" />
          <circle className="buddy-eye-glint" cx="143" cy="97" r="2.5" />
          <circle className="buddy-eye-glint" cx="184" cy="97" r="2.5" />
          <path className="buddy-nose" d="M160 101l-3 15 7 1" />
          <path className="buddy-mouth" d="M145 127c10 7 21 7 31 0" />
          <path className="buddy-shirt" d="M112 162c11-19 31-29 49-29 20 0 40 9 51 29l20 126c-47 18-96 18-143 0l23-126Z" />
          <path className="buddy-shirt-panel" d="M150 154h22l9 101-40 0 9-101Z" />
          <path className="buddy-logo" d="M150 186h24l-12 26-12-26Z" />
          <g className="buddy-arms">
            <path className="buddy-skin buddy-arm buddy-arm-left" d="M113 170c-28 18-41 50-49 92 8 5 16 7 24 8 11-37 26-60 43-70Z" />
            <path className="buddy-skin buddy-arm buddy-arm-right" d="M207 170c28 18 41 50 49 92-8 5-16 7-24 8-11-37-26-60-43-70Z" />
            <circle className="buddy-hand" cx="76" cy="270" r="13" />
            <circle className="buddy-hand" cx="244" cy="270" r="13" />
          </g>
          <path className="buddy-shorts" d="M109 282h102l-9 61-41-4-43 4-9-61Z" />
          <g className="buddy-legs">
            <path className="buddy-skin buddy-leg buddy-leg-left" d="M125 335c-2 24-7 38-11 50h27c8-20 13-36 15-50Z" />
            <path className="buddy-skin buddy-leg buddy-leg-right" d="M195 335c2 24 7 38 11 50h-27c-8-20-13-36-15-50Z" />
            <path className="buddy-shoe" d="M106 380h43l7 17H92c2-9 6-14 14-17Z" />
            <path className="buddy-shoe" d="M214 380h-43l-7 17h64c-2-9-6-14-14-17Z" />
          </g>
          <path className="buddy-tone buddy-tone-a" d="M123 176c10 5 20 7 30 7" />
          <path className="buddy-tone buddy-tone-b" d="M197 176c-10 5-20 7-30 7" />
          <path className="buddy-tone buddy-tone-c" d="M139 242c14 7 29 7 43 0" />
        </g>
      </svg>
      <div className="buddy-stage"><span>TRAINING ARC</span><strong>{String(progress).padStart(2,"0")} / 06</strong></div>
    </div>
  );
}
