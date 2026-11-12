import type React from "react";
import { AbsoluteFill } from "remotion";
import { useTheme } from "../themes";
import { GanjarGaris } from "./GanjarGaris";
import { Kapur, KapurFilter } from "./Kapur";
import { type JenisLatar, LatarKapur } from "./LatarKapur";
import { KAPUR } from "./palette";
import type { VarianPapan } from "./TeksturPapan";

// Lembar tinjauan latar Dark Chalk: empat latar bergambar, masing-masing dengan Ganjar di tengah.
export const LATAR_SHEET = { id: "DarkChalk-Latar", width: 2160, height: 960 } as const;

const PANEL: ReadonlyArray<JenisLatar> = ["langit", "malam", "hutan", "kota"];

export const LatarSheet: React.FC<{ readonly varian: VarianPapan }> = ({ varian }) => {
  const t = useTheme();
  return (
    <AbsoluteFill style={{ backgroundColor: KAPUR.navy }}>
      <KapurFilter />
      {PANEL.map((jenis, i) => (
        <div key={jenis} style={{ position: "absolute", left: (i % 4) * 540, top: 0, width: 1080, height: 1920, transform: "scale(0.5)", transformOrigin: "0 0" }}>
          <LatarKapur jenis={jenis} varian={varian} />
          <Kapur>
            <GanjarGaris x={540} y={1215} tinggi={620} ekspresi="senyum" gestur="lambai" papan={varian} />
          </Kapur>
          <div style={{ position: "absolute", left: 0, right: 0, top: 1400, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 90, color: KAPUR.gold }}>{jenis}</div>
        </div>
      ))}
    </AbsoluteFill>
  );
};
