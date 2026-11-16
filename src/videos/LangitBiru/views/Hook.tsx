import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";
import { UNGU, gelombang } from "./gambar";

// Hook: Matahari kapur di atas dua gelombang, biru (pendek) dan ungu (lebih pendek lagi). Tanda tanya ungu saat "ungu". Tanpa tokoh.
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const mulai = Math.max(6, at("langit"));
  return (
    <>
      <Teks text="Kenapa langit biru, bukan ungu?" sorot="ungu" size={96} top={250} />
      <Kanvas>
        <Ikon nama="sun" cx={540} cy={700} size={340} mulai={6} warna={KAPUR.gold} tebal={9} lama={30} />
        <Garis d={gelombang(200, 1020, 680, 34, 120)} mulai={mulai} lama={40} tebal={8} warna={KAPUR.es} kasar={0.5} />
        <Garis d={gelombang(200, 1130, 680, 34, 80)} mulai={at("ungu")} lama={40} tebal={8} warna={UNGU} kasar={0.5} />
      </Kanvas>
      <Label teks="?" x={820} y={600} at={at("ungu") + 10} size={200} warna={UNGU} lebar={240} />
    </>
  );
};
