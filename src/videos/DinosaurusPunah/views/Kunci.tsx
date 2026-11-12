import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Matahari, Tumbuhan } from "../../../dark-chalk/objek/Purba";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): matahari tertutup debu di atas, tumbuhan di bawah layu pelan.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mati = at("mati");
  return (
    <KunciPola
      judul="Tanpa matahari, makanan habis"
      sorotJudul="habis"
      keterangan="rantai makanan runtuh"
      keteranganAt={at("habis") - 6}
      gambar={
        <Kanvas>
          <Matahari cx={540} cy={690} size={260} tutup={1} mulai={4} />
          <Garis kasar={1} d="M160 1130 Q540 1144 920 1126" mulai={10} lama={20} tebal={8} />
          <Ikon nama="skull" cx={285} cy={1060} size={120} mulai={at("habis")} warna={KAPUR.abu} tebal={7} />
          <Ikon nama="bone" cx={800} cy={1068} size={120} mulai={at("habis") + 10} warna={KAPUR.abu} tebal={7} />
          <Tumbuhan cx={500} cy={1126} tinggi={250} layu={maju(frame, mati, 40)} />
        </Kanvas>
      }
    />
  );
};
