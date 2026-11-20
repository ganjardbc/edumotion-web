import type React from "react";
import { Label } from "../../../dark-chalk/Label";
import { Pesawat } from "../../../dark-chalk/objek/Terbang";
import { GelombangLaut, PanahMendatar } from "../../../dark-chalk/objek/Tsunami";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: laut dalam (gelombang rendah, panah panjang = cepat) lawan dekat pantai (laut dangkal, gelombang lebih tinggi, panah pendek = lambat).
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const dalam = at("dalam");
  const jet = at("jet");
  const dangkal = at("dekat");
  return (
    <>
      <Bandingkan
        judul="Dalam cepat, dangkal lambat"
        sorotJudul="cepat"
        kiri={{ teks: "laut dalam", at: dalam, gambar: ({ x, y }) => (
          <>
            <GelombangLaut cx={x} cy={y - 40} size={320} mulai={dalam + 4} tinggi={9} siklus={2} dasar={200} />
            <PanahMendatar cx={x} cy={y - 120} panjang={280} mulai={jet} />
            <Pesawat cx={x} cy={y - 195} size={130} mulai={jet + 6} />
          </>
        ) }}
        kanan={{ teks: "dekat pantai", at: dangkal, gambar: ({ x, y }) => (
          <>
            <GelombangLaut cx={x} cy={y + 50} size={320} mulai={dangkal + 4} tinggi={52} siklus={2} dasar={90} />
            <PanahMendatar cx={x} cy={y - 40} panjang={90} mulai={dangkal + 14} warna={KAPUR.abu} />
          </>
        ) }}
      />
      <Label teks="secepat jet" x={340} y={1230} at={jet} size={56} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
