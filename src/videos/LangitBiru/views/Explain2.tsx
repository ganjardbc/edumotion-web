import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { MolekulUdara } from "../../../props";
import { useTheme } from "../../../themes";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2: sinar putih menembus molekul udara. Merah lurus terus, biru terhambur ke segala arah. Kamera mundur: langit penuh biru.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const scatter = interpolate(frame, [at("menyebarkan"), at("segala arah")], [0, 1], clamp);
  const sebab = at("Itu sebabnya");
  const back = interpolate(frame, [sebab, sebab + 25], [0, 1], clamp);
  const label = { position: "absolute", left: 0, width: 1080, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 48, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <AbsoluteFill style={{ backgroundColor: TOPIC_COLORS.planet.main, opacity: 0.55 * back }} />
      <AbsoluteFill style={{ transform: `scale(${1 - 0.28 * back})`, transformOrigin: "50% 45%" }}>
        <MolekulUdara x={540} y={640} size={860} topic="cuaca" scatter={scatter} />
        <div style={{ ...label, top: 1040, fontSize: 50, color: TOPIC_COLORS.tubuh.ink }}>Merah: lurus terus</div>
        <div style={{ ...label, top: 1110, fontSize: 50, color: TOPIC_COLORS.planet.ink }}>Biru: ke segala arah</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
