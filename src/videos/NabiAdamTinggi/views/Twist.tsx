import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

export const Twist: React.FC<SceneProps> = ({ at }) => <>
  <Koreksi judul="Satuannya bukan meter" salah="meter" salahAt={at("meter")} coretAt={at("bukan")} benar={{ teks: "hasta", at: at("hasta"), gambar: ({ x, y, size }) => <>
    <Garis d={`M${x - size * 0.42} ${y} L${x + size * 0.42} ${y}`} mulai={at("hasta")} lama={20} warna={KAPUR.gold} tebal={10} />
    <Garis d={`M${x - size * 0.42} ${y - 38} L${x - size * 0.42} ${y + 38} M${x - size * 0.2} ${y - 22} L${x - size * 0.2} ${y + 22} M${x} ${y - 38} L${x} ${y + 38} M${x + size * 0.2} ${y - 22} L${x + size * 0.2} ${y + 22} M${x + size * 0.42} ${y - 38} L${x + size * 0.42} ${y + 38}`} mulai={at("hasta") + 8} lama={22} warna={KAPUR.gold} tebal={7} />
  </> }} />
  <Kanvas><Garis d="M350 1350 L730 1350" mulai={at("hasta")} lama={18} warna={KAPUR.gold} tebal={6} /></Kanvas>
  <Label teks="ukuran dalam hadis" x={540} y={1450} at={at("hasta")} size={48} lebar={600} />
</>;
