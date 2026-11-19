import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AwanKapur, Gajah } from "../../../dark-chalk/objek/Awan";
import { Panah } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: awan besar di atas; gajah dengan "× 100" saat "seratus"; panah turun dan tanda tanya emas saat "jatuh".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const awan = at("awan");
  const seratus = at("seratus");
  const jatuh = at("jatuh");
  return (
    <>
      <Teks text="Awan seberat 100 gajah?" sorot="100" size={92} top={250} />
      <Kanvas>
        <AwanKapur cx={540} cy={740} size={760} mulai={awan - 6} />
        <Gajah cx={310} cy={1090} size={380} mulai={seratus - 4} />
        <Panah cx={860} cy={1050} size={130} arah="bawah" mulai={jatuh} />
      </Kanvas>
      <Label teks="× 100" x={670} y={1090} at={seratus + 10} size={110} warna={KAPUR.gold} lebar={300} />
      <Label teks="?" x={860} y={1190} at={jatuh + 14} size={130} warna={KAPUR.gold} lebar={140} />
    </>
  );
};
