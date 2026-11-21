import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Garis } from "../../../dark-chalk/Garis";
import { AngkaTeks } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Hitung naik 0 → 26 mulai frame `dari` (deterministik dari frame).
const Hitung: React.FC<{ readonly dari: number }> = ({ dari }) => {
  const frame = useCurrentFrame();
  if (frame < dari) return null;
  const n = Math.round(interpolate(frame, [dari, dari + 24], [0, 26], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  return <AngkaTeks cx={540} cy={860} teks={String(n)} size={440} warna={n === 26 ? KAPUR.gold : KAPUR.chalk} />;
};

// Ikon tengkorak besar saat "diburu", lalu hilang begitu angka mulai naik.
const Tengkorak: React.FC<{ readonly dari: number; readonly sampai: number }> = ({ dari, sampai }) => {
  const frame = useCurrentFrame();
  if (frame >= sampai) return null;
  return <Ikon nama="skull" cx={540} cy={860} size={300} mulai={dari} />;
};

// Kunci (layar penuh, tanpa karakter): tengkorak saat "diburu", angka naik ke 26 saat "dua"; garis emas di bawahnya saat angka sampai; keterangan tahun saat "antara".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const dua = at("dua");
  const diburu = at("diburu");
  const antara = at("antara");
  return (
    <KunciPola
      judul="26 badak diburu"
      sorotJudul="26"
      keterangan="Data polisi, 2019–2023"
      keteranganAt={antara}
      gambar={
        <>
          <Tengkorak dari={diburu} sampai={dua} />
          <Hitung dari={dua} />
          <Garis kasar={1} d="M330 1060 Q540 1076 750 1056" mulai={dua + 26} lama={14} warna={KAPUR.gold} tebal={9} />
        </>
      }
    />
  );
};
