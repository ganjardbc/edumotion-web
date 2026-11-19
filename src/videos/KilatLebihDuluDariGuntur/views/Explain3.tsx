import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Kilat } from "../../../dark-chalk/objek/Petir";
import { AngkaTeks } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: suara (lambat, 340 meter tiap detik) dibandingkan dengan cahaya (sangat cepat).
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const suara = at("suara");
  const cahaya = at("cahaya");
  const satu = at("satu");
  return (
    <Bandingkan
      judul="Suara jauh lebih lambat"
      sorotJudul="lambat"
      kiri={{
        teks: "suara",
        at: suara,
        gambar: ({ x, y }) => (
          <>
            <Ikon nama="ripple" cx={x} cy={y - 90} size={150} mulai={suara + 6} warna={KAPUR.es} tebal={7} />
            <Pop at={satu}>
              <AngkaTeks cx={x} cy={y + 70} teks="340 m" size={90} warna={KAPUR.es} />
              <AngkaTeks cx={x} cy={y + 150} teks="tiap detik" size={52} />
            </Pop>
          </>
        ),
      }}
      kanan={{
        teks: "cahaya",
        at: cahaya,
        gambar: ({ x, y }) => <Kilat cx={x} cy={y} size={300} mulai={cahaya + 4} />,
      }}
    />
  );
};
