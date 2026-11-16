import type React from "react";
import { Pop } from "../../../dark-chalk/Kanvas";
import { LubangHitam, Silang } from "../../../dark-chalk/objek/LubangHitam";
import { Aliran } from "../../../dark-chalk/objek/Terbang";
import { Garis } from "../../../dark-chalk/Garis";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): lubang hitam besar; lingkaran putus-putus saat "batas"; sinar cahaya emas
// mengalir masuk saat "cahaya"; panah keluar dicoret saat "keluar".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const batas = at("batas");
  const cahaya = at("cahaya");
  const keluar = at("keluar");
  return (
    <KunciPola
      judul="Cahaya pun terjebak"
      sorotJudul="terjebak"
      keterangan="tidak bisa keluar"
      keteranganAt={keluar}
      gambar={
        <>
          <LubangHitam cx={540} cy={880} size={460} mulai={4} cincin={false} />
          <Pop at={batas}>
            <circle cx={540} cy={880} r={250} fill="none" stroke={KAPUR.es} strokeWidth={8} strokeDasharray="28 22" strokeLinecap="round" />
          </Pop>
          <Aliran d="M120 700 C300 740 380 800 440 850" mulai={cahaya} warna={KAPUR.gold} laju={7} tebal={8} />
          <Garis kasar={1} d="M650 900 L860 900" mulai={keluar - 8} lama={10} warna={KAPUR.abu} tebal={9} />
          <Silang cx={770} cy={900} size={80} mulai={keluar} />
        </>
      }
    />
  );
};
