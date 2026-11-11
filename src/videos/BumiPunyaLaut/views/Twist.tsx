import type React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { CheckMark, CrossMark, Meteor } from "../../../props";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: dua babak tanpa kartu besar. Babak salah: tebakan penonton dicoret + lencana silang merah.
// Babak benar: tebakan memudar, meteor melesat ke Bumi, lencana centang + label jawaban.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const second = at("Ternyata");
  const keliru = at("muncul sendiri");

  const strike = interpolate(frame, [keliru, keliru + 16], [0, 1], clamp);
  const cross = spring({ frame: frame - (keliru + 14), fps, config: { damping: 10, stiffness: 150 } });
  const check = spring({ frame: frame - (second + 20), fps, config: { damping: 10, stiffness: 150 } });
  const wrongOut = interpolate(frame, [second, second + 12], [1, 0], clamp);
  const guessDim = interpolate(frame, [second, second + 12], [1, 0.4], clamp);

  const fly = interpolate(frame, [second, second + 60], [0, 1], clamp);
  const meteorX = interpolate(fly, [0, 1], [1180, 600]);
  const meteorY = interpolate(fly, [0, 1], [460, 880]);
  const understood = frame > second + 30;

  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} floorY={1920} />

      {/* Meteor di belakang label */}
      <Meteor x={meteorX} y={meteorY} size={300} topic="planet" opacity={fly > 0 ? 1 - Math.max(0, fly - 0.9) * 10 : 0} />

      {/* Tebakan penonton: pil dengan coretan */}
      <div style={{ opacity: guessDim }}>
        <LabelPill x={540} y={545} text="Muncul sendiri dari dalam" topic="tubuh" at={4} size={50} />
        <div style={{ position: "absolute", left: 262, top: 543, width: 556 * strike, height: 12, borderRadius: 6, backgroundColor: TOPIC_COLORS.tubuh.main, transform: "rotate(-2deg)", transformOrigin: "left center" }} />
      </div>
      <div style={{ opacity: wrongOut }}>
        <CrossMark x={770} y={960} size={400} progress={Math.min(1, cross)} opacity={Math.min(1, cross * 1.5)} />
      </div>

      {/* Jawaban benar */}
      <LabelPill x={540} y={680} text="Sebagian dari luar angkasa!" topic="planet" at={second + 14} size={56} />
      <CheckMark x={770} y={960} size={400} topic="planet" progress={Math.min(1, check)} opacity={Math.min(1, check * 1.5)} />

      <CastCharacter id="bumi" x={380} y={EDU_FEET_Y} size={540} expression={understood ? "happy" : "surprised"} animation={understood ? "idle" : "surprise"} />
    </AbsoluteFill>
  );
};
