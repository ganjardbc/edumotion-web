import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Bandingkan } from "../../../dark-chalk/pola";
import { SusunanBlok } from "../../../dark-chalk/objek/Borobudur";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";

// Explain3: kiri balok bersemen (dicoret saat "sini"), kanan balok bersambungan; balok atas jatuh dan mengunci saat "mengunci".
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const semen = at("semen");
  const sini = at("sini");
  const sambungan = at("sambungan");
  const kunci = at("mengunci");
  return (
    <Bandingkan
      judul="Tanpa semen, saling mengunci"
      sorotJudul="mengunci"
      kiri={{
        teks: "semen",
        at: semen,
        gambar: ({ x, y }) => (
          <>
            <SusunanBlok cx={x} cy={y} size={240} mulai={semen} jatuh={semen + 12} semen />
            <Garis kasar={1} d={`M${x - 120} ${y - 120} L${x + 120} ${y + 120} M${x + 120} ${y - 120} L${x - 120} ${y + 120}`} mulai={sini} lama={14} warna={KAPUR.orange} tebal={11} />
          </>
        ),
      }}
      kanan={{
        teks: "saling mengunci",
        at: sambungan,
        gambar: ({ x, y }) => <SusunanBlok cx={x} cy={y} size={240} mulai={sambungan} jatuh={kunci} />,
      }}
    />
  );
};
