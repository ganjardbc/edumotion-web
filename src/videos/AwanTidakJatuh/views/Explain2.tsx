import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { LabelPill } from "../../../explainers";
import { PanahUdara } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2: arus udara hangat mendorong tetes kecil naik, jadi tetes melayang di bawah awan.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const bob = Math.sin(frame / 16) * 22;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <div style={{ position: "absolute", left: 64, right: 160, top: 250, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink }}>Udara naik menahan tetes</div>
      <CastCharacter id="awan" x={540} y={600} size={300} expression="happy" animation="idle" />
      <PanahUdara x={540} y={900} size={620} progress={(frame % 90) / 90} />
      <CastCharacter id="tetes" x={540} y={1000 + bob} size={200} expression="surprised" animation="idle" />
      <LabelPill x={300} y={1170} text="udara hangat" topic={META.topic} at={at("Udara hangat")} size={38} />
      <LabelPill x={300} y={760} text="melayang" topic={META.topic} at={at("melayang")} size={38} />
    </AbsoluteFill>
  );
};
