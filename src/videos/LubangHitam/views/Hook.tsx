import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { LubangHitam } from "../../../dark-chalk/objek/LubangHitam";
import { Aliran } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: lubang hitam besar di tengah; tiga garis cahaya emas mengalir masuk dari kiri saat "cahaya" dan terus
// tertarik ke dalam saat "kabur"; tanda tanya emas muncul di atas lubang saat "dalamnya".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const cahaya = at("cahaya");
  const kabur = at("kabur");
  const dalamnya = at("dalamnya");
  return (
    <>
      <Teks text="Apa di lubang hitam?" sorot="lubang hitam" size={96} top={250} />
      <Kanvas>
        <LubangHitam cx={540} cy={860} size={620} mulai={4} />
        <Aliran d="M90 560 C300 560 400 700 470 800" mulai={cahaya} warna={KAPUR.gold} laju={7} />
        <Aliran d="M60 860 C260 860 360 860 440 860" mulai={cahaya + 4} warna={KAPUR.gold} laju={7} />
        <Aliran d="M90 1160 C300 1160 400 1020 470 920" mulai={cahaya + 8} warna={KAPUR.gold} laju={7} />
      </Kanvas>
      <Label teks="cahaya" x={200} y={1260} at={cahaya + 6} size={60} warna={KAPUR.gold} lebar={300} />
      <Label teks="?" x={540} y={850} at={dalamnya} size={240} warna={KAPUR.gold} lebar={240} />
      <Label teks="tertarik masuk" x={540} y={1190} at={kabur} size={52} lebar={560} />
    </>
  );
};
