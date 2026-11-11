import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { AwanHujan, GunungApi } from "../../../props";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain3: jalur uap di papan diagram yang tenang. Gunung menyembur → uap naik → awan → hujan → permukaan laut naik.
// Tiap langkah muncul bersama label bernomor di dekat objeknya.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  // Tiap langkah muncul saat narator menyebutnya.
  const tGunung = at("Gunung berapi");
  const tUap = at("uap air");
  const tAwan = at("menjadi awan");
  const tHujan = at("turun");
  const tKumpul = at("terkumpul");
  const fade = (from: number) => interpolate(frame, [from, from + 14], [0, 1], clamp);
  const volcano = fade(tGunung);
  const cloud = fade(tAwan);
  const rain = fade(tHujan);
  const seaLevel = interpolate(frame, [tKumpul, tKumpul + 45], [0, 1], clamp);
  const floatY = Math.sin(frame / 36) * 8;
  const air = TOPIC_COLORS.air;
  const happy = seaLevel > 0.8;

  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />

      <GunungApi x={230} y={900} size={420} progress={frame / 70} opacity={volcano} />
      <LabelPill x={300} y={640} text="menyembur" number={1} topic="ai" at={tGunung} />
      <LabelPill x={330} y={470} text="uap naik" number={2} topic="cuaca" at={tUap} />

      <div style={{ opacity: cloud }}>
        <AwanHujan x={680} y={480} size={460} progress={rain > 0 ? (frame - tHujan) / 50 : 0} topic="cuaca" />
      </div>
      <LabelPill x={680} y={310} text="jadi awan" number={3} topic="cuaca" at={tAwan} />
      <LabelPill x={800} y={720} text="hujan" number={4} topic="air" at={tHujan} />

      {/* Permukaan laut naik di belakang Bumi dan gunung */}
      <div style={{ position: "absolute", left: 32, right: 32, bottom: 1920 - 1170, height: 40 + 150 * seaLevel, backgroundColor: air.main, opacity: 0.75, borderTop: `8px solid ${air.ink}`, borderRadius: "40px 40px 0 0" }} />
      <LabelPill x={540} y={850} text="terkumpul jadi laut!" topic="air" at={at("menjadi laut")} size={44} />

      <CastCharacter id="bumi" x={770} y={EDU_FEET_Y + floatY} size={420} expression={happy ? "happy" : "curious"} animation={happy ? "excitement" : "idle"} />
    </AbsoluteFill>
  );
};
