import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PalemLangkap, Tunas } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain4: dua lapis. Palem tumbuh menutup saat "palem"; panah cahaya berhenti di daun saat "menghalangi"; tunas layu saat "sulit".
export const Explain4: React.FC<SceneProps> = ({ at }) => {
  const palem = at("palem");
  const halang = at("menghalangi");
  const sulit = at("sulit");
  return (
    <>
      <Judul teks="Palem menutup tanah" sorot="Palem" />
      <Kanvas>
        <Garis kasar={1} d="M170 1080 L910 1080" mulai={4} lama={20} warna={KAPUR.coklat} tebal={9} />
        <Tunas cx={540} cy={1080} size={150} mulai={6} layu={sulit} />
        <PalemLangkap cx={330} cy={780} size={460} dasar={1080} mulai={palem} />
        <PalemLangkap cx={760} cy={800} size={400} dasar={1080} mulai={palem + 10} />
        {[300, 540, 790].map((x, i) => (
          <g key={x}>
            <Garis kasar={0.8} d={`M${x} 470 L${x} 570 M${x - 22} 546 L${x} 570 L${x + 22} 546`} mulai={halang + i * 6} lama={12} warna={KAPUR.gold} tebal={9} />
            <Garis kasar={0.8} d={`M${x - 28} 590 L${x + 28} 622 M${x + 28} 590 L${x - 28} 622`} mulai={halang + 14 + i * 6} lama={8} warna={KAPUR.orange} tebal={8} />
          </g>
        ))}
      </Kanvas>
      <Label teks="Palem invasif" x={540} y={1140} at={palem + 12} size={50} lebar={400} />
      <Label teks="Cahaya terhalang" x={540} y={1215} at={halang + 16} size={54} warna={KAPUR.gold} lebar={560} />
    </>
  );
};
