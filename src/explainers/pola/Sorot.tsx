import type React from "react";
import type { VideoTopic } from "../../videos/_shared/types";
import { Callout } from "../Callout";
import { Judul } from "./Judul";
import { Muncul } from "./Muncul";
import { AREA, type Gambar } from "./tata";

// Titik pada gambar: `x`, `y` relatif kotak gambar (0..1), label diletakkan di sisi `sisi`, muncul di frame `at`.
export type Titik = { readonly x: number; readonly y: number; readonly teks: string; readonly sisi: "kiri" | "kanan"; readonly at: number };

const BOX = 620;
const CY = 830;

// Pola SOROT: satu objek besar di tengah panggung, paling banyak 3 penanda yang menunjuk bagiannya.
export const Sorot: React.FC<{ readonly judul?: string; readonly sorotJudul?: string; readonly judulAt?: number; readonly gambar: Gambar; readonly gambarAt?: number; readonly titik?: ReadonlyArray<Titik>; readonly topic: VideoTopic }> = ({ judul, sorotJudul, judulAt = 0, gambar, gambarAt = 0, titik = [], topic }) => {
  if (titik.length > 3) throw new Error("Sorot: paling banyak 3 titik");
  const x0 = AREA.cx - BOX / 2;
  const y0 = CY - BOX / 2;
  return (
    <>
      {judul ? <Judul teks={judul} sorot={sorotJudul} at={judulAt} /> : null}
      <Muncul at={gambarAt}>{gambar({ x: AREA.cx, y: CY, size: BOX })}</Muncul>
      {titik.map((p, i) => {
        const target = { x: x0 + p.x * BOX, y: y0 + p.y * BOX };
        // Label di tepi panggung, setinggi titiknya, dijaga di dalam panggung.
        const label = { x: p.sisi === "kiri" ? AREA.left + 150 : AREA.right - 150, y: Math.min(AREA.bottom - 40, Math.max(AREA.top + 20, target.y + (p.y < 0.5 ? -110 : 110))) };
        return <Callout key={i} target={target} label={label} text={p.teks} topic={topic} at={p.at} />;
      })}
    </>
  );
};
