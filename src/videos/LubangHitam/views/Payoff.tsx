import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { LubangHitam, Silang } from "../../../dark-chalk/objek/LubangHitam";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Payoff: lubang hitam; panah keluar dicoret saat "keluar"; tanda tanya emas di pusat saat "pusatnya";
// label "belum tahu pasti" saat "belum".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const keluar = at("keluar");
  const pusatnya = at("pusatnya");
  const belum = at("belum");
  return (
    <>
      <Teks text="Dari dalam, tak ada jalan keluar" sorot="keluar" size={84} top={250} />
      <Kanvas>
        <LubangHitam cx={540} cy={880} size={560} mulai={4} />
        <Garis kasar={1} d="M600 900 L880 900" mulai={keluar - 8} lama={10} warna={KAPUR.abu} tebal={9} />
        <Silang cx={760} cy={900} size={80} mulai={keluar} />
      </Kanvas>
      <Label teks="?" x={540} y={870} at={pusatnya} size={230} warna={KAPUR.gold} lebar={230} />
      <Label teks="belum tahu pasti" x={540} y={1300} at={belum} size={60} warna={KAPUR.gold} lebar={700} />
    </>
  );
};
