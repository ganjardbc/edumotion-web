import { loadFont } from "@remotion/google-fonts/Nunito";
import type React from "react";
import { AbsoluteFill } from "remotion";
import { TAKO_PALETTE } from "../tako/assets/palette";
import { EXPRESSION_LABEL } from "../tako/expressions/index";
import { EXPRESSION_NAMES } from "../tako/types";
import { CastCharacter } from "./CastCharacter";
import { CAST_BY_ID } from "./characters";
import type { CastId } from "./types";

const { fontFamily } = loadFont("normal", { weights: ["800"] });

export const SHEET = { width: 1500, height: 900 } as const;

const CELL_W = 300;
const CELL_H = 380;
const SIZE = 300;

// Lembar ekspresi satu karakter, diekspor ke design-references/tako_cast/<id>/expressions.png.
export const CastExpressionSheet: React.FC<{ readonly id: CastId }> = ({ id }) => {
  const def = CAST_BY_ID[id];
  return (
    <AbsoluteFill style={{ backgroundColor: "#F6F1E8", fontFamily, fontWeight: 800, color: TAKO_PALETTE.dark }}>
      <div style={{ position: "absolute", left: 40, top: 24, display: "flex", alignItems: "baseline", gap: 24 }}>
        <span style={{ fontSize: 52 }}>{def.name}</span>
        <span style={{ fontSize: 28, opacity: 0.6 }}>{def.topic}</span>
      </div>
      {EXPRESSION_NAMES.map((name, i) => {
        const x = CELL_W * (i % 5) + CELL_W / 2;
        const y = 100 + CELL_H * Math.floor(i / 5) + 290;
        return (
          <div key={name}>
            <CastCharacter id={id} x={x} y={y} size={SIZE} expression={name} idle={false} />
            <div style={{ position: "absolute", left: x - CELL_W / 2, width: CELL_W, top: y + 14, textAlign: "center", fontSize: 28 }}>{EXPRESSION_LABEL[name]}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
