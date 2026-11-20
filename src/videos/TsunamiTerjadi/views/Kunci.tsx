import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { KAPUR } from "../../../dark-chalk/palette";
import { Ombak } from "../../../dark-chalk/objek/Tsunami";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): rumah kecil di tepi pantai (skala); gelombang di laut dangkal menumpuk lalu menjulang di tepi pantai saat "menjulang".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const tumpuk = at("menumpuk");
  const julang = at("lalu");
  return (
    <KunciPola
      judul="Melambat lalu menjulang"
      sorotJudul="menjulang"
      keterangan="gelombang menumpuk"
      keteranganAt={tumpuk}
      gambar={
        <>
          <Ombak cx={540} cy={880} size={720} mulai={6} menjulang={julang} />
          <Garis kasar={0.8} d="M832 886 V838 H892 V880" mulai={30} lama={12} tebal={7} isi="rgba(244, 185, 66, 0.16)" />
          <Garis kasar={0.8} d="M820 838 L862 802 L904 838 Z" mulai={38} lama={10} tebal={7} warna={KAPUR.orange} />
        </>
      }
    />
  );
};
