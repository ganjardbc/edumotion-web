import type React from "react";
import { useCurrentFrame } from "remotion";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Nol, Titik } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): titik kecil emas mengecil lalu berubah menjadi angka nol besar saat "berubah".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const ubah = at("berubah");
  const t = maju(frame, ubah - 6, 18);
  return (
    <KunciPola
      judul="Nol jadi angka"
      sorotJudul="angka"
      keterangan="tanda kosong jadi angka"
      keteranganAt={at("angka") - 6}
      gambar={
        <Kanvas>
          {t < 1 ? (
            <g opacity={1 - t} transform={`translate(540 860) scale(${1 + 0.8 * t}) translate(-540 -860)`}>
              <Titik cx={540} cy={860} r={46} mulai={6} />
            </g>
          ) : null}
          <Nol cx={540} cy={860} tinggi={520} mulai={ubah} warna={KAPUR.gold} tebal={16} />
        </Kanvas>
      }
    />
  );
};
