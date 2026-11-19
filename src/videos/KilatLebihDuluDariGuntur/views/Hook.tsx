import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Teks } from "../../../dark-chalk/Teks";
import { GelombangSuara, Kilat } from "../../../dark-chalk/objek/Petir";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";

// Hook: awan badai di atas; kilat menyambar saat "kilat" dan langsung terlihat; gelombang suara menyusul pelan saat "guntur";
// tanda tanya emas saat "lebih dulu".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const kilat = at("kilat");
  const guntur = at("guntur");
  const tanya = at("lebih");
  return (
    <>
      <Teks text="Kenapa kilat duluan?" sorot="duluan" size={96} top={250} />
      <Kanvas>
        <Ikon nama="cloud-storm" cx={540} cy={640} size={420} mulai={6} warna={KAPUR.abu} tebal={8} />
        <Garis kasar={1} d="M90 1120 Q540 1130 990 1118" mulai={10} lama={24} tebal={8} warna={KAPUR.abu} />
        <Pop at={kilat} durasi={3}>
          <Kilat cx={340} cy={940} size={320} mulai={kilat} />
        </Pop>
        <GelombangSuara cx={740} cy={980} mulai={guntur} laju={2} maxR={190} />
      </Kanvas>
      <Label teks="kilat" x={340} y={1200} at={kilat + 4} size={64} warna={KAPUR.gold} lebar={300} />
      <Label teks="guntur" x={740} y={1200} at={guntur + 4} size={64} warna={KAPUR.es} lebar={300} />
      <Label teks="?" x={900} y={700} at={tanya} size={200} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
