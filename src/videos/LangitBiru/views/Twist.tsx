import type React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { CorrectionCard, EDU_FEET_Y } from "../../../explainers";
import { ExclamationMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: Tako kaget, kartu koreksi muncul, laut menghilang tapi langit tetap biru, kamera mendekat ke udara.
export const Twist: React.FC<SceneProps> = ({ frames, lineStarts }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const second = lineStarts[1] ?? Math.round(frames * 0.25);
  const sea = interpolate(frame, [second, second + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const zoom = interpolate(frame, [second, frames], [1, 1.08], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 160 } });
  const understood = frame > frames * 0.7;
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 40%" }}>
      <EduBackdrop kind="langit" topic={META.topic} time="siang" />
      <AbsoluteFill style={{ opacity: sea }}>
        <EduBackdrop kind="laut" topic={META.topic} time="siang" />
      </AbsoluteFill>
      <CorrectionCard top={240} guess="Langit mantulin laut" answer="Warna dari udara" topic="planet" crossAt={Math.round(second * 0.6)} answerAt={second + 20} />
      <ExclamationMark x={780} y={900} size={260} topic="planet" pop={pop} />
      <TakoCharacter x={330} y={EDU_FEET_Y} size={520} expression={understood ? "happy" : "surprised"} animation={understood ? "idle" : "surprise"} />
    </AbsoluteFill>
  );
};
