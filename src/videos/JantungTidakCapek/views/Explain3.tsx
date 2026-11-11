import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CoronaryVessels } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain3: jantung punya jalur darah sendiri (arteri koroner) di permukaannya.
export const Explain3: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 250, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 64, color: t.colors.ink }}>Jalur darah sendiri</div>
      <CoronaryVessels x={540} y={690} size={720} flow={frame} />
    </AbsoluteFill>
  );
};
