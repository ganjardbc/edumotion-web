import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";
import { type NamaPose, GanjarDatar, poseDariFrame } from "./GanjarDatar";
import { Kapur, KapurFilter } from "./Kapur";
import { PapanBackdrop } from "./PapanBackdrop";
import { KAPUR } from "./palette";
import { Teks } from "./Teks";

// Demo tema Dark Chalk Storytelling: Ganjar dalam enam pose, berganti tiap 40 frame.
export const DARK_CHALK_GANJAR = { id: "DarkChalk-Ganjar", width: 1080, height: 1920, fps: 30, durationInFrames: 240 } as const;

const URUTAN: ReadonlyArray<readonly [NamaPose, number]> = [["berdiri", 0], ["tunjuk", 40], ["mikir", 80], ["kaget", 120], ["sorak", 160], ["menyerah", 200]];
const LABEL: Record<NamaPose, string> = { berdiri: "Berdiri", tunjuk: "Tunjuk", mikir: "Mikir", kaget: "Kaget", sorak: "Sorak", menyerah: "Menyerah" };

export const PapanGanjar: React.FC = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const { pose, tanda } = poseDariFrame(frame, URUTAN);
  const aktif = [...URUTAN].reverse().find(([, mulai]) => frame >= mulai)?.[0] ?? "berdiri";
  return (
    <AbsoluteFill>
      <KapurFilter />
      <PapanBackdrop />
      <Kapur>
        <Teks text="Ganjar: Dark Chalk" size={72} top={240} />
      </Kapur>
      <GanjarDatar pose={pose} x={540} y={1215} tinggi={900} tanda={tanda} />
      <div style={{ position: "absolute", left: 64, right: 160, top: 1330, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 70, color: KAPUR.gold }}>{LABEL[aktif]}</div>
    </AbsoluteFill>
  );
};
