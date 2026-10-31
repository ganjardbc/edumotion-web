import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";

const BOOKS: ReadonlyArray<readonly [number, number]> = [[26, 90], [20, 110], [30, 80], [22, 100], [28, 120], [24, 86]];

// Latar ruang kerja pribadi (gaya edu, warna topik; beda dari `workspace` bergaya rig): meja panjang di belakang karakter
// dengan monitor, laptop, lampu baca, tanaman; rak buku di dinding. Info tetap lega di tengah atas.
export const RuangKerja: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const wood = mixHex("#C99A6B", c.main, 0.15);
  const woodDark = mixHex(wood, "#000000", 0.18);
  const deskTop = 900;
  let bx = 0;
  const books = BOOKS.map(([w, h], i) => {
    const x = bx;
    bx += w + 4;
    return <div key={i} style={{ position: "absolute", left: x, bottom: 0, width: w, height: h, backgroundColor: [c.main, c.shine, c.rim][i % 3], borderRadius: 4 }} />;
  });
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${e.wallBottom})` }} />
      <div style={{ position: "absolute", left: 60, top: 150, width: 300, height: 14, backgroundColor: woodDark, borderRadius: 7 }} />
      <div style={{ position: "absolute", left: 80, top: 30, width: 260, height: 120 }}>{books}</div>
      <div style={{ position: "absolute", left: 720, top: 120, width: 280, height: 14, backgroundColor: woodDark, borderRadius: 7 }} />
      <div style={{ position: "absolute", left: 740, top: 40, width: 80, height: 80, borderRadius: "50%", border: `8px solid ${c.rim}`, boxSizing: "border-box", backgroundColor: "#FFFFFF" }} />
      <div style={{ position: "absolute", left: 120, top: deskTop - 250, width: 330, height: 220, backgroundColor: c.ink, borderRadius: 16 }}>
        <div style={{ position: "absolute", inset: 14, backgroundColor: mixHex(c.shine, "#FFFFFF", 0.35), borderRadius: 6 }}>
          <div style={{ position: "absolute", left: 20, top: 24, width: 150, height: 14, backgroundColor: c.main, borderRadius: 7 }} />
          <div style={{ position: "absolute", left: 20, top: 56, width: 220, height: 14, backgroundColor: c.rim, opacity: 0.5, borderRadius: 7 }} />
          <div style={{ position: "absolute", left: 20, top: 88, width: 120, height: 14, backgroundColor: c.rim, opacity: 0.5, borderRadius: 7 }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 255, top: deskTop - 32, width: 60, height: 32, backgroundColor: c.ink }} />
      <div style={{ position: "absolute", left: 790, top: deskTop - 210, width: 14, height: 210, backgroundColor: c.ink, borderRadius: 7 }} />
      <div style={{ position: "absolute", left: 760, top: deskTop - 250, width: 140, height: 50, backgroundColor: c.main, borderRadius: "60px 60px 10px 10px", transform: "rotate(-12deg)" }} />
      <div style={{ position: "absolute", left: 930, top: deskTop - 90, width: 70, height: 90, backgroundColor: c.rim, borderRadius: "10px 10px 20px 20px" }} />
      <div style={{ position: "absolute", left: 925, top: deskTop - 170, width: 80, height: 100, borderRadius: "50%", backgroundColor: mixHex(c.main, "#46B25A", 0.8) }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: deskTop, height: 30, backgroundColor: wood, borderBottom: `6px solid ${woodDark}`, boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: deskTop + 30, height: floorY - deskTop - 30, backgroundColor: mixHex(wood, "#000000", 0.08) }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: e.floor, borderTop: `6px solid ${e.floorEdge}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} />
    </AbsoluteFill>
  );
};
