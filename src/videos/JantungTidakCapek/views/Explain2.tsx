import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { MuscleCell } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2: dua sel otot. Jantung penuh pabrik energi (mitokondria), lengan hanya sedikit.
export const Explain2: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const reveal = interpolate(frame, [30, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const label = { position: "absolute", left: 160, right: 160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 52, color: t.colors.ink } as const;
  const sub = { position: "absolute", left: 160, right: 160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 40, color: t.colors.muted } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <div style={{ ...label, top: 245 }}>Otot jantung</div>
      <div style={{ ...sub, top: 310 }}>sepertiga isi sel = pabrik energi</div>
      <MuscleCell x={540} y={530} size={560} count={12} reveal={reveal} />
      <div style={{ ...label, top: 700 }}>Otot lengan</div>
      <div style={{ ...sub, top: 765 }}>pabrik energinya jauh lebih sedikit</div>
      <MuscleCell x={540} y={990} size={560} count={2} reveal={reveal} topic="teknologi" />
    </AbsoluteFill>
  );
};
