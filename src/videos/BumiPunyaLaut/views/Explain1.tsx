import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, Timeline } from "../../../explainers";
import { Meteor } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// [x0, y0, x1, y1, delayFrame, size]
const METEOR_PATHS: ReadonlyArray<readonly [number, number, number, number, number, number]> = [
  [1120, 640, 600, 930, 40, 170],
  [980, 600, 520, 910, 56, 150],
  [1180, 700, 700, 940, 72, 160],
  [900, 580, 470, 920, 88, 140],
];

// Explain1: garis waktu (lahir panas → hujan asteroid → laut) di papan diagram, meteor menghujani Bumi di bawahnya.
export const Explain1: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const floatY = Math.sin(frame / 26) * 6;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />
      <Timeline
        top={250}
        topic="planet"
        frames={Math.round(frames * 0.55)}
        events={[
          { year: "Lahir", label: "panas, tanpa air" },
          { year: "Hujan batu", label: "asteroid & meteor" },
          { year: "Laut", label: "air terkumpul" },
        ]}
      />
      {METEOR_PATHS.map(([x0, y0, x1, y1, delay, size], i) => {
        const dur = Math.max(1, Math.round(frames * 0.5));
        const p = interpolate(frame, [delay, delay + dur * 0.5], [0, 1], clamp);
        const op = interpolate(frame, [delay, delay + 8], [0, 1], clamp) * (1 - Math.max(0, (p - 0.9) * 10));
        return <Meteor key={i} x={x0 + (x1 - x0) * p} y={y0 + (y1 - y0) * p} size={size} topic="planet" opacity={op} />;
      })}
      <CastCharacter id="bumi" x={540} y={EDU_FEET_Y - 10 + floatY} size={440} expression="scared" animation="confusion" />
    </AbsoluteFill>
  );
};
