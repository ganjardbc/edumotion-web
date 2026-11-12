import type React from "react";
import { useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Baterai } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: bulan dan baterai yang terisi pelan semalaman; tanda tanya emas saat "bahaya".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  return (
    <>
      <Teks text="Isi semalaman, bahaya?" sorot="bahaya" size={96} top={250} />
      <Kanvas>
        <Ikon nama="moon-stars" cx={250} cy={780} size={220} mulai={8} warna={KAPUR.es} tebal={7} />
        <Baterai cx={700} cy={780} lebar={420} level={0.15 + 0.85 * maju(frame, 20, 70)} mulai={12} />
        <Ikon nama="bolt" cx={700} cy={780} size={110} mulai={30} warna={KAPUR.gold} tebal={7} />
      </Kanvas>
      <Label teks="?" x={540} y={1120} at={at("bahaya")} size={260} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
