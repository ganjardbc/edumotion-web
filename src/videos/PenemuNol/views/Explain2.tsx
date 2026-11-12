import type React from "react";
import { Pop } from "../../../dark-chalk/Kanvas";
import { AngkaTeks, Gulungan, Nol } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: lensa berisi gulungan naskah dengan dua aturan nol (5 + 0 = 5; 5 × 0 = 0); penanda tahun 628; nol emas muncul saat "angka sendiri".
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const aturan = Math.max(14, at("aturan"));
  const sendiri = at("sendiri");
  return (
    <Sorot
      judul="Brahmagupta, tahun 628"
      sorotJudul="628"
      gambar={({ x, y }) => (
        <>
          <Gulungan cx={x} cy={y - 50} lebar={440} tinggi={300} mulai={8} />
          <Pop at={aturan}>
            <AngkaTeks cx={x} cy={y - 100} teks="5 + 0 = 5" size={84} />
          </Pop>
          <Pop at={aturan + 14}>
            <AngkaTeks cx={x} cy={y - 10} teks="5 × 0 = 0" size={84} />
          </Pop>
          <Pop at={sendiri}>
            <Nol cx={x} cy={y + 160} tinggi={130} mulai={sendiri} warna={KAPUR.gold} tebal={10} />
          </Pop>
        </>
      )}
      penanda={{ teks: "tahun 628", dari: { x: 800, y: 1290 }, ke: { x: 690, y: 1040 }, at: at("Tahun") }}
    />
  );
};
