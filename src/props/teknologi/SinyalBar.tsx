import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Sinyal seluler: empat batang naik. `level` 0..4 menyalakan batang dari kiri; batang mati abu-abu pucat bergaris.
// Acuan bentuk: ikon "signal" Lucide (batang bertambah tinggi).
const BARS = [150, 270, 390, 510];

export const SinyalBar: React.FC<PropProps & { readonly level?: number }> = ({ topic = "teknologi", level = 4, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      {BARS.map((h, i) => {
        const on = level > i;
        const x = 120 + i * 140;
        return (
          <g key={h}>
            <rect x={x} y={700 - h} width={96} height={h} rx={28} fill={on ? c.main : c.shine} stroke={c.ink} strokeWidth={8} opacity={on ? 1 : 0.55} />
            {on ? <path d={`M${x + 24} ${700 - h + 40} L${x + 24} ${700 - h + Math.min(90, h - 50)}`} fill="none" stroke={c.shine} strokeWidth={12} strokeLinecap="round" /> : null}
          </g>
        );
      })}
    </PropFrame>
  );
};
