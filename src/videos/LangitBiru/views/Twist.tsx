import type React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { CorrectionCard, EDU_FEET_Y } from "../../../explainers";
import { ExclamationMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: Tako kaget, kartu koreksi muncul, kamera mendekat ke udara.
export const Twist: React.FC<SceneProps> = ({ frames, at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const second = at("Tanpa laut");
  const zoom = interpolate(frame, [second, frames], [1, 1.08], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 160 } });
  const understood = frame > at("udara");
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 40%" }}>
      <EduBackdrop topic={META.topic} />
      <div style={{ position: "absolute", inset: 0, transform: "translateX(48px)" }}>
        <CorrectionCard top={240} guess="Langit memantulkan laut" answer="Warna dari udara" topic="planet" crossAt={at("bukan")} answerAt={at("Warna birunya")} />
      </div>
      <ExclamationMark x={720} y={900} size={260} topic="planet" pop={pop} />
      <TakoCharacter x={440} y={EDU_FEET_Y} size={520} expression={understood ? "happy" : "surprised"} animation={understood ? "idle" : "surprise"} />
    </AbsoluteFill>
  );
};
