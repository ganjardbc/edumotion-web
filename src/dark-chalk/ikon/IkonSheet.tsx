import type React from "react";
import { AbsoluteFill } from "remotion";
import { useTheme } from "../../themes";
import { Kanvas } from "../Kanvas";
import { Kapur, KapurFilter } from "../Kapur";
import { Label } from "../Label";
import { PapanBackdrop } from "../PapanBackdrop";
import { IKON_DATA, type NamaIkon } from "./data";
import { Ikon } from "./Ikon";

// Lembar tinjauan pustaka ikon kapur: semua ikon di IKON_DATA dalam satu papan.
export const IKON_SHEET = { id: "DarkChalk-Ikon", width: 1080, height: 1920 } as const;

const KOLOM = 6;
const SEL_W = 160;
const SEL_H = 152;
const X0 = (1080 - KOLOM * SEL_W) / 2;
const Y0 = 130;

export const IkonSheet: React.FC = () => {
  const t = useTheme();
  const nama = Object.keys(IKON_DATA) as NamaIkon[];
  return (
    <AbsoluteFill>
      <KapurFilter />
      <PapanBackdrop varian="hijau" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 70, textAlign: "center", fontFamily: t.fonts.heading, fontSize: 52, color: "#F4B942" }}>Ikon kapur ({nama.length})</div>
      <Kapur>
        <Kanvas>
          {nama.map((n, i) => (
            <Ikon key={n} nama={n} cx={X0 + (i % KOLOM) * SEL_W + SEL_W / 2} cy={Y0 + Math.floor(i / KOLOM) * SEL_H + 46} size={88} mulai={-200} tebal={4} />
          ))}
        </Kanvas>
      </Kapur>
      {nama.map((n, i) => (
        <Label key={n} teks={n} x={X0 + (i % KOLOM) * SEL_W + SEL_W / 2} y={Y0 + Math.floor(i / KOLOM) * SEL_H + 112} size={19} at={-20} lebar={SEL_W} />
      ))}
    </AbsoluteFill>
  );
};
