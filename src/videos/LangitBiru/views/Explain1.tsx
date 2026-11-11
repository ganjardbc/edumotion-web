import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Bandingkan, Fase, SebabAkibat } from "../../../explainers/pola";
import { GelombangCahaya, Pelangi } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain1, dua fase: (1) Sebab→Akibat: cahaya putih Matahari = campuran warna (pelangi);
// (2) Bandingkan: biru gelombang pendek, merah gelombang panjang.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const biru = at("Cahaya biru");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Fase sampai={biru}>
        <SebabAkibat
          judul="Cahaya putih itu campuran"
          sorotJudul="campuran"
          topic="cuaca"
          sebab={{ teks: "Cahaya Matahari: putih", at: at("Cahaya Matahari"), gambar: (k) => <CastCharacter id="matahari" x={k.x} y={k.y + k.size * 0.45} size={k.size} expression="happy" animation="idle" /> }}
          akibat={{ teks: "isinya semua warna", at: at("campuran"), gambar: (k) => <Pelangi {...k} size={k.size * 1.3} topic="cuaca" progress={1} /> }}
        />
      </Fase>
      <Fase dari={biru}>
        <Bandingkan
          judul="Panjang gelombangnya beda"
          sorotJudul="gelombangnya"
          judulAt={biru}
          arah="kolom"
          topic="planet"
          a={{ label: "Biru", nilai: "pendek", at: biru, gambar: (k) => <GelombangCahaya {...k} topic="planet" wavelength={90} progress={frame / 45} /> }}
          b={{ label: "Merah", nilai: "panjang", at: at("Cahaya merah"), gambar: (k) => <GelombangCahaya {...k} topic="tubuh" wavelength={230} progress={frame / 90} /> }}
        />
      </Fase>
    </AbsoluteFill>
  );
};
