import type React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { LabelPill } from "../../../explainers";
import { AwanHujan } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

const START = [
  { x: 240, y: 560 },
  { x: 840, y: 600 },
  { x: 540, y: 460 },
] as const;

// Explain3: dua fase. (1) tiga tetes kecil saling mendekat dan menyatu jadi satu tetes besar,
// (2) tetes besar tak tertahan udara lagi, awan menurunkan hujan.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const switchAt = at("Udara tidak kuat");
  const besar = at("besar");
  const phase2 = interpolate(frame, [switchAt, switchAt + 14], [0, 1], clamp);
  const merge = interpolate(frame, [at("bergabung"), besar], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const merged = spring({ frame: frame - besar, fps, config: { damping: 11, stiffness: 140 } });
  const title = { position: "absolute", left: 64, right: 160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />

      <div style={{ opacity: 1 - phase2 }}>
        <div style={{ ...title, top: 250 }}>Tetes saling bergabung</div>
        {merge < 1
          ? START.map((s, i) => <CastCharacter key={i} id="tetes" x={s.x + (540 - s.x) * merge} y={s.y + (800 - s.y) * merge} size={170} expression="happy" animation="idle" />)
          : null}
        {merge >= 1 ? <CastCharacter id="tetes" x={540} y={800} size={170 + 230 * Math.min(1, merged)} expression="surprised" animation="excitement" /> : null}
        <LabelPill x={540} y={1100} text="jadi besar" topic={META.topic} at={besar} number={1} size={40} />
      </div>

      <div style={{ opacity: phase2 }}>
        <div style={{ ...title, top: 250 }}>Udara tidak kuat menahan</div>
        <AwanHujan x={540} y={720} size={700} progress={(Math.max(0, frame - switchAt) % 45) / 45} />
        <LabelPill x={540} y={1130} text="jatuh jadi hujan" topic={META.topic} at={at("jatuh")} number={2} size={40} />
      </div>
    </AbsoluteFill>
  );
};
