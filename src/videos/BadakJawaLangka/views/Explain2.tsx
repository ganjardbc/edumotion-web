import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: garis waktu; lima tanda tahun terisi satu per satu mulai "setiap", badak anak muncul di ujung saat "lima".
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const setiap = at("setiap");
  const lima = at("lima");
  const hamil = at("Hamilnya");
  return (
    <>
      <Judul teks="Jarang beranak" sorot="Jarang" />
      <Kanvas>
        <Garis kasar={1} d="M180 990 L700 990" mulai={setiap - 6} lama={16} warna={KAPUR.chalk} tebal={8} />
        {[0, 1, 2, 3, 4].map((i) => (
          <Garis key={i} kasar={1} d={`M${260 + i * 110} 960 L${260 + i * 110} 1020`} mulai={setiap + i * 10} lama={8} warna={KAPUR.gold} tebal={9} />
        ))}
        <BadakKapur cx={540} cy={650} size={520} mulai={4} />
        <Pop at={lima + 4}>
          <BadakKapur cx={810} cy={940} size={200} mulai={lima + 4} />
        </Pop>
      </Kanvas>
      <Label teks="Tiap 4–5 tahun" x={470} y={1100} at={setiap} size={54} lebar={560} />
      <Label teks="Hamil 16 bulan" x={540} y={1190} at={hamil} size={54} warna={KAPUR.gold} lebar={560} />
    </>
  );
};
