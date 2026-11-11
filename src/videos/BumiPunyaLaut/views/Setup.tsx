import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: Bumi baru lahir, panas membara dan tanpa air. Label kecil muncul bertahap, semburat panas memudar, lalu Bumi mulai ragu.
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();

  const floatY = Math.sin(frame / 38) * 10;
  const kering = at("Tidak ada");
  const bumiConfused = frame > kering + 15;
  const heat = interpolate(frame, [0, kering, kering + 20], [1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} floorY={1920} />

      {/* Pijar panas: semburat oranye berdenyut, memudar saat Bumi mulai ragu */}
      <AbsoluteFill style={{ backgroundColor: TOPIC_COLORS.ai.main, opacity: heat * (0.22 + 0.08 * Math.sin(frame / 6)), pointerEvents: "none" }} />

      <LabelPill x={540} y={300} text="Dulu, waktu Bumi baru lahir" topic="planet" at={6} size={46} />
      <LabelPill x={540} y={420} text="panas membara" topic="ai" at={at("panas")} size={52} />
      <LabelPill x={540} y={540} text="tanpa setetes air" topic="air" at={kering} size={52} />

      {/* Halo panas di sekitar Bumi, ikut memudar saat mendingin */}
      <div style={{ position: "absolute", left: 540 - 400, top: 960 - 400, width: 800, height: 800, borderRadius: "50%", background: `radial-gradient(circle, ${TOPIC_COLORS.ai.main} 0%, ${TOPIC_COLORS.ai.shine} 35%, transparent 68%)`, opacity: heat * (0.55 + 0.15 * Math.sin(frame / 5)) }} />

      <CastCharacter
        id="bumi"
        x={540}
        y={EDU_FEET_Y + floatY}
        size={560}
        expression={bumiConfused ? "confused" : "scared"}
        animation={bumiConfused ? "confusion" : "surprise"}
      />
    </AbsoluteFill>
  );
};
