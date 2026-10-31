import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

export type BarItem = { readonly label: string; readonly value: number; readonly highlight?: boolean };

// Batang horizontal yang tumbuh bergantian untuk membandingkan angka. Satu item `highlight` per adegan.
// Lebar batang proporsional terhadap nilai terbesar; angka ikut naik dan diformat Indonesia.
export const BarCompare: React.FC<{
  readonly top: number;
  readonly items: ReadonlyArray<BarItem>;
  readonly unit?: string;
  readonly topic?: VideoTopic;
  readonly left?: number;
  readonly width?: number;
  // Frame tumbuh satu batang dan jeda antar batang.
  readonly frames?: number;
  readonly stagger?: number;
}> = ({ top, items, unit = "", topic = "alam", left = 64, width = 856, frames = 30, stagger = 14 }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div style={{ position: "absolute", left, top, width, display: "flex", flexDirection: "column", gap: 36 }}>
      {items.map((item, i) => {
        const p = interpolate(frame, [i * stagger, i * stagger + frames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
        return (
          <div key={item.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 44, color: t.colors.ink, marginBottom: 10 }}>
              <span>{item.label}</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {Math.round(item.value * p).toLocaleString("id-ID")}
                {unit ? ` ${unit}` : ""}
              </span>
            </div>
            <div style={{ height: 84, borderRadius: 42, border: `8px solid ${c.ink}`, backgroundColor: t.colors.surface, boxSizing: "border-box", overflow: "hidden" }}>
              <div style={{ width: `${(item.value / max) * p * 100}%`, height: "100%", borderRadius: 42, backgroundColor: item.highlight ? HIGHLIGHT : c.main }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
