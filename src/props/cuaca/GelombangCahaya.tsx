import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Gelombang cahaya satu warna (warna dari `topic`). `wavelength` = jarak antar puncak dalam satuan viewBox;
// pendek = rapat (biru), panjang = renggang (merah). `progress` menggeser gelombang ke kanan, satu putaran per 1.
const AMP = 90;
const STEP = 8;
export const GelombangCahaya: React.FC<PropProps & { readonly progress?: number; readonly wavelength?: number }> = ({ topic = "planet", progress = 0, wavelength = 160, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const phase = progress * Math.PI * 2;
  const pts: string[] = [];
  for (let x = 40; x <= 760; x += STEP) pts.push(`${x} ${(400 - AMP * Math.sin(((x - 40) / wavelength) * Math.PI * 2 - phase)).toFixed(1)}`);
  const d = `M${pts.join(" L")}`;
  return (
    <PropFrame {...frame}>
      <path d={d} fill="none" stroke={c.ink} strokeWidth={56} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={c.main} strokeWidth={40} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={c.shine} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" transform="translate(0 -10)" opacity={0.7} />
    </PropFrame>
  );
};
