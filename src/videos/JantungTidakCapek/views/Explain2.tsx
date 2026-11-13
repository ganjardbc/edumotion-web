import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const SEL = (cx: number, cy: number) => `M${cx - 150} ${cy} a150 200 0 1 0 300 0 a150 200 0 1 0 -300 0`;
const MITO = (x: number, y: number) => `M${x - 30} ${y} a30 16 0 1 0 60 0 a30 16 0 1 0 -60 0 M${x - 18} ${y} q9 -9 18 0 q9 9 18 0`;
const JANTUNG: ReadonlyArray<readonly [number, number]> = [[-70, -110], [60, -120], [-95, -20], [10, -30], [95, 10], [-60, 70], [50, 80], [-20, 140], [80, 140]];
const LENGAN: ReadonlyArray<readonly [number, number]> = [[10, -30], [-40, 80]];

// Explain2: dua sel otot. Sel jantung penuh mitokondria (oval beralur), sel otot lengan hanya dua.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const mito = at("mitokondria");
  const lengan = at("lengan");
  const banyak = at("lebih banyak");
  return (
    <>
      <Bandingkan
        judul="Otot jantung penuh pabrik energi"
        sorotJudul="penuh"
        kiri={{
          teks: "otot jantung",
          at: Math.max(8, at("Otot")),
          gambar: (p) => (
            <>
              <Garis d={SEL(p.x, p.y)} mulai={Math.max(8, at("Otot"))} lama={24} tebal={7} warna={KAPUR.chalk} kasar={0.6} />
              {JANTUNG.map(([dx, dy], i) => (
                <Pop key={i} at={i < 3 ? mito + i * 4 : banyak + (i - 3) * 4} durasi={6}>
                  <Garis d={MITO(p.x + dx, p.y + dy)} mulai={i < 3 ? mito + i * 4 : banyak + (i - 3) * 4} lama={10} tebal={6} warna={KAPUR.orange} />
                </Pop>
              ))}
            </>
          ),
        }}
        kanan={{
          teks: "otot lengan",
          at: Math.max(lengan - 10, mito + 40),
          gambar: (p) => (
            <>
              <Garis d={SEL(p.x, p.y)} mulai={Math.max(lengan - 10, mito + 40)} lama={24} tebal={7} warna={KAPUR.gold} kasar={0.6} />
              {LENGAN.map(([dx, dy], i) => (
                <Garis key={i} d={MITO(p.x + dx, p.y + dy)} mulai={lengan + i * 6} lama={10} tebal={6} warna={KAPUR.orange} />
              ))}
            </>
          ),
        }}
      />
      <Label teks="mitokondria" x={540} y={1210} at={mito} size={50} warna={KAPUR.orange} lebar={420} />
    </>
  );
};
