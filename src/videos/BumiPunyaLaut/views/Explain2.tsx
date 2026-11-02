import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { BarCompare, EDU_FEET_Y, LabelPill } from "../../../explainers";
import { Meteor } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2: dua fase di papan diagram. (1) bandingkan kadar air batu biasa vs asteroid karbon,
// (2) asteroid menabrak Bumi, airnya terlepas menjadi Tetes.
export const Explain2: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const switchAt = Math.round(frames * 0.5);
  const phase2 = interpolate(frame, [switchAt, switchAt + 14], [0, 1], clamp);
  const floatY = Math.sin(frame / 34) * 8;
  const title = { position: "absolute", left: 64, right: 160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink } as const;

  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />

      <div style={{ opacity: 1 - phase2 }}>
        <div style={{ ...title, top: 250 }}>Kandungan air</div>
        <BarCompare top={350} topic="planet" left={64} width={856} items={[{ label: "Batu biasa", value: 1 }, { label: "Asteroid karbon", value: 10, highlight: true }]} unit="% (kira-kira)" frames={36} stagger={24} />
        <Meteor x={800} y={950 + floatY * 2} size={280} topic="planet" />
        <LabelPill x={800} y={760} text="batu + mineral berair" topic="planet" at={50} size={34} />
      </div>
      <div style={{ opacity: phase2 }}>
        <div style={{ ...title, top: 300 }}>Nabrak aku → air terlepas!</div>
        <CastCharacter id="tetes" x={800} y={EDU_FEET_Y} size={320} expression="happy" animation="excitement" />
      </div>

      <CastCharacter id="bumi" x={300} y={EDU_FEET_Y + floatY} size={460} expression={phase2 > 0.5 ? "happy" : "curious"} animation={phase2 > 0.5 ? "excitement" : "idle"} />
    </AbsoluteFill>
  );
};
