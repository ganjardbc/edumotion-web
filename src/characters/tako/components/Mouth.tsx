import type React from "react";
import { TAKO_PALETTE as C } from "../assets/palette";
import { MOUTH_ANCHOR } from "../rig/pivots";

export type MouthShape = {
  readonly d: string;
  readonly kind: "ink" | "accent" | "line";
};

export type MouthVariant = ReadonlyArray<MouthShape>;

export const Mouth: React.FC<{ readonly variant: MouthVariant; readonly open: number; readonly ink?: string; readonly accent?: string }> = ({
  variant,
  open,
  ink = C.dark,
  accent = C.accent,
}) => {
  const [ax, ay] = MOUTH_ANCHOR;
  const sy = Math.min(1.5, Math.max(0.2, 1 + open));
  return (
    <g id="mouth" transform={`translate(${ax} ${ay}) scale(1 ${sy}) translate(${-ax} ${-ay})`}>
      {variant.map((s, i) =>
        s.kind === "line" ? (
          <path key={i} d={s.d} fill="none" stroke={ink} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path key={i} d={s.d} fill={s.kind === "ink" ? ink : accent} />
        ),
      )}
    </g>
  );
};
