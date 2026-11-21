import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Label } from "../../../dark-chalk/Label";
import { PulauJawa } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): Pulau Jawa; pin menyala di ujung barat saat "Ujung", lingkaran emas menyorot pin.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const ujung = at("Ujung");
  const barat = at("barat");
  return (
    <>
      <KunciPola
        judul="Rumahnya tinggal satu"
        sorotJudul="satu"
        keterangan="di ujung barat Jawa"
        keteranganAt={barat}
        gambar={
          <>
            <PulauJawa cx={540} cy={880} size={780} mulai={6} pin={ujung} />
            <Garis kasar={1} d="M177 830 a70 70 0 1 0 0.1 0" mulai={ujung + 10} lama={20} warna={KAPUR.gold} tebal={8} />
          </>
        }
      />
      <Label teks="Ujung Kulon" x={300} y={1000} at={ujung + 6} size={64} warna={KAPUR.orange} lebar={460} />
    </>
  );
};
