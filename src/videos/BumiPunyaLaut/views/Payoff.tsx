import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, HookText, LabelPill } from "../../../explainers";
import { GunungApi, Meteor } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: dua sumber air tampil sebagai objek di dunia scene (meteor dari luar, gunung api dari dalam), bertemu di Bumi.
// Label kecil menempel pada objek; tidak ada kartu besar, jadi latar laut sore tetap terlihat.
export const Payoff: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const pop = (delay: number) => spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 140 } });
  const left = pop(10);
  const plus = pop(26);
  const right = pop(34);
  const floatY = Math.sin(frame / 36) * 10;
  const bob = Math.sin(frame / 28) * 8;

  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Laut = luar + dalam!" highlight="luar" size={80} />

      <Meteor x={200} y={640 + bob} size={320} topic="planet" opacity={Math.min(1, left * 1.5)} />
      <LabelPill x={200} y={820} text="dari luar angkasa" topic="planet" at={10} size={34} />

      <div style={{ position: "absolute", left: 540, top: 640, transform: `translate(-50%, -50%) scale(${0.4 + 0.6 * plus})`, opacity: Math.min(1, plus * 1.8), fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 120, color: t.colors.ink }}>+</div>

      <GunungApi x={880} y={650} size={340} progress={frame / 70} opacity={Math.min(1, right * 1.5)} />
      <LabelPill x={880} y={820} text="dari dalam Bumi" topic="ai" at={34} size={34} />

      <CastCharacter id="bumi" x={540} y={EDU_FEET_Y + floatY} size={500} expression="laughing" animation="excitement" />
    </AbsoluteFill>
  );
};
