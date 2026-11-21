import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PulauJawa } from "../../../dark-chalk/objek/Badak";
import { GunungApi } from "../../../dark-chalk/objek/Krakatau";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: tanggal emas saat "27"; ujung barat Jawa; gunung api kecil (Krakatau) di barat laut meletus saat "meletus"; garis emas ke pin Ujung Kulon saat "seberang".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const letus = at("meletus");
  const ujung = at("Ujung");
  const seberang = at("seberang");
  return (
    <>
      <Judul teks="Krakatau meletus 1883" sorot="1883" />
      <Kanvas>
        <PulauJawa cx={640} cy={900} size={760} mulai={4} pin={ujung} />
        <GunungApi cx={250} cy={720} size={170} mulai={8} getar={letus} asap={letus + 4} />
        <Garis kasar={1} d="M262 790 C270 830 280 860 288 890" mulai={seberang} lama={18} warna={KAPUR.gold} tebal={8} />
      </Kanvas>
      <Label teks="27 Agustus 1883" x={540} y={1130} at={at("27")} size={66} warna={KAPUR.gold} lebar={700} />
      <Label teks="Krakatau" x={250} y={560} at={at("Krakatau")} size={56} warna={KAPUR.orange} lebar={340} />
      <Label teks="Selat Sunda" x={640} y={760} at={at("Selat")} size={50} warna={KAPUR.es} lebar={380} />
      <Label teks="Ujung Kulon" x={470} y={1010} at={ujung + 6} size={56} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
