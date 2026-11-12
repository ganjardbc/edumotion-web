import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { HorizonLandscape, MeasurementMarks } from "../assets/Visuals";

export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const sejajar = frame >= at("tidak benar-benar");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HorizonLandscape y={1110} />
      <HookText text="Ilusinya belum terpecahkan" highlight="belum" size={84} />
      <CastCharacter id="bulan" x={730} y={760} size={290} expression="happy" animation="idle" />
      {sejajar ? <CastCharacter id="bulan" x={390} y={760} size={290} expression="thinking" animation="idle" opacity={0.7} /> : null}
      {sejajar ? <MeasurementMarks x={560} y={950} width={220} /> : null}
      <Pembawa topic={META.topic} x={540} y={EDU_FEET_Y} tinggi={470} ekspresi="senang" gestur="tunjuk" />
    </AbsoluteFill>
  );
};
