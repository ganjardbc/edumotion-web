import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Pelangi tiga lengkung dalam warna topik (lengkung bawah selalu terang). `progress` 0..1 menggambar dari kiri ke kanan.
export const Pelangi: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "cuaca", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const arcs = [
    { r: 330, color: TOPIC_COLORS.tubuh.main },
    { r: 260, color: HIGHLIGHT },
    { r: 190, color: c.main },
  ];
  const wipe = Math.min(1, Math.max(0, progress));
  return (
    <PropFrame {...frame}>
      <clipPath id="pelangi-wipe">
        <rect x={0} y={0} width={800 * wipe} height={800} />
      </clipPath>
      <g clipPath="url(#pelangi-wipe)" fill="none" strokeLinecap="round">
        {arcs.map((a) => (
          <g key={a.r}>
            <path d={`M${400 - a.r} 600 A${a.r} ${a.r} 0 0 1 ${400 + a.r} 600`} stroke={c.ink} strokeWidth={80} />
            <path d={`M${400 - a.r} 600 A${a.r} ${a.r} 0 0 1 ${400 + a.r} 600`} stroke={a.color} strokeWidth={64} />
          </g>
        ))}
      </g>
    </PropFrame>
  );
};
