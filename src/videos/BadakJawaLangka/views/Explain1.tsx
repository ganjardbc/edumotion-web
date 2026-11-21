import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: tiga baris sebab muncul bertahap saat "tiga"; baris pertama digarisbawahi emas saat "Pertama".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const tiga = at("tiga");
  const pertama = at("Pertama");
  const ikon = (nama: "plant" | "skull" | "trees") => (k: { readonly x: number; readonly y: number; readonly size: number }) => <Ikon nama={nama} cx={k.x} cy={k.y} size={k.size} />;
  return (
    <>
      <Langkah
        judul="Tiga sebab langka"
        sorotJudul="Tiga"
        butir={[
          { teks: "Jarang beranak", at: tiga, gambar: ikon("plant") },
          { teks: "Diburu", at: tiga + 18, gambar: ikon("skull") },
          { teks: "Ruang sempit", at: tiga + 36, gambar: ikon("trees") },
        ]}
      />
      <Kanvas>
        <Garis kasar={1} d="M560 668 Q735 680 910 664" mulai={pertama} lama={14} warna={KAPUR.gold} tebal={8} />
      </Kanvas>
    </>
  );
};
