import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { GanjarStickmanExpression, Gesture } from "../characters/ganjar";
import { useTheme } from "../themes";
import { GanjarGaris } from "./GanjarGaris";
import { Kapur, KapurFilter } from "./Kapur";
import { type JenisLatar, LatarKapur } from "./LatarKapur";
import { KAPUR } from "./palette";
import { Teks } from "./Teks";

// Demo Ganjar stickman garis (tanpa baju) di tema Dark Chalk: enam momen akting, berganti tiap 40 frame.
export const DARK_CHALK_GARIS = { id: "DarkChalk-GanjarGaris", width: 1080, height: 1920, fps: 30, durationInFrames: 240 } as const;

const LATAR: ReadonlyArray<JenisLatar> = ["malam", "langit", "hutan", "kota", "malam", "langit"];

const MOMEN: ReadonlyArray<{ readonly ekspresi: GanjarStickmanExpression; readonly gestur: Gesture; readonly label: string }> = [
  { ekspresi: "senyum", gestur: "lambai", label: "Senyum + lambai" },
  { ekspresi: "kaget", gestur: "menyerah", label: "Kaget + menyerah" },
  { ekspresi: "mikir", gestur: "mikir", label: "Mikir" },
  { ekspresi: "senang", gestur: "tunjuk", label: "Senang + tunjuk" },
  { ekspresi: "tertawa", gestur: "sorak", label: "Tertawa + sorak" },
  { ekspresi: "bingung", gestur: "angkatBahu", label: "Bingung + angkat bahu" },
];

export const PapanGanjarGaris: React.FC = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const i = Math.min(MOMEN.length - 1, Math.floor(frame / 40));
  const m = MOMEN[i];
  return (
    <AbsoluteFill>
      <KapurFilter />
      <LatarKapur jenis={LATAR[i]} />
      <Kapur>
        <Teks text="Ganjar stickman garis" size={72} top={240} />
        <GanjarGaris x={540} y={1215} tinggi={760} ekspresi={m.ekspresi} gestur={m.gestur} />
      </Kapur>
      <div style={{ position: "absolute", left: 64, right: 160, top: 1330, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 64, color: KAPUR.gold }}>{m.label}</div>
    </AbsoluteFill>
  );
};
