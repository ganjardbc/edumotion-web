import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Ponsel tampak depan, layar bercahaya. `terang` 0..1: 0 = layar redup (gelap), 1 = layar putih menyala dengan sinar di sekelilingnya.
// Acuan bentuk: ikon "smartphone" Lucide (persegi panjang tegak, sudut membulat, takik kecil di bawah).
const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

export const LayarHp: React.FC<PropProps & { readonly terang?: number }> = ({ topic = "teknologi", terang = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const t = clamp01(terang);
  return (
    <PropFrame {...frame}>
      {/* sinar di sekeliling saat terang */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const r1 = 400;
        const r2 = 400 + 60 * t;
        return <line key={i} x1={400 + Math.cos(a) * r1 * 0.9} y1={400 + Math.sin(a) * r1 * 0.9} x2={400 + Math.cos(a) * r2 * 0.9} y2={400 + Math.sin(a) * r2 * 0.9} stroke={HIGHLIGHT} strokeWidth={22} strokeLinecap="round" opacity={t > 0.5 ? (t - 0.5) * 2 : 0} />;
      })}
      <rect x={230} y={60} width={340} height={680} rx={56} fill={c.ink} stroke={c.ink} strokeWidth={8} />
      <rect x={252} y={96} width={296} height={600} rx={32} fill={c.rim} />
      {/* layar menyala: makin putih saat terang naik */}
      <rect x={252} y={96} width={296} height={600} rx={32} fill="#FFFFFF" opacity={0.15 + 0.85 * t} />
      <rect x={252} y={96} width={296} height={600} rx={32} fill={c.main} opacity={0.5 * (1 - t)} />
      <rect x={352} y={72} width={96} height={12} rx={6} fill={c.rim} />
      {/* kilau layar */}
      <path d="M290 150 L290 300" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" opacity={0.4 + 0.6 * t} />
    </PropFrame>
  );
};
