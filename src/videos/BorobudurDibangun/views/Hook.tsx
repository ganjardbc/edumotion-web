import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Borobudur } from "../../../dark-chalk/objek/Borobudur";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: Borobudur digambar kapur dari teras bawah ke atas; label "1.200 tahun" saat "seribu";
// tanda tanya emas saat "caranya".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const tahun = at("seribu");
  const cara = at("caranya");
  return (
    <>
      <Teks text="Bagaimana Borobudur dibangun?" sorot="dibangun" size={92} top={250} />
      <Kanvas>
        <Ikon nama="cloud" cx={190} cy={600} size={130} mulai={6} warna={KAPUR.abu} tebal={6} />
        <Ikon nama="sun" cx={890} cy={590} size={120} mulai={10} warna={KAPUR.gold} tebal={6} />
        <Ikon nama="cloud" cx={880} cy={1090} size={150} mulai={16} warna={KAPUR.abu} tebal={7} />
        <Borobudur cx={540} cy={880} size={720} mulai={4} jeda={9} />
      </Kanvas>
      <Label teks="1.200 tahun" x={540} y={1190} at={tahun} size={64} lebar={600} warna={KAPUR.gold} />
      <Label teks="?" x={900} y={780} at={cara} size={220} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
