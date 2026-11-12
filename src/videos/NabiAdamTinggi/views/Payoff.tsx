import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola/Judul";
import type { SceneProps } from "../../_shared/types";

export const Payoff: React.FC<SceneProps> = ({ at }) => <>
  <Judul teks="Konversi perkiraan" sorot="perkiraan" at={at("Kalau")} />
  <Label teks="≈ 30 meter" x={640} y={770} at={at("tiga puluh")} size={112} warna={KAPUR.gold} lebar={500} />
  <Kanvas>
    <Garis d="M360 1110 L360 640 M330 1110 L390 1110 M340 1032 L380 1032 M330 954 L390 954 M340 876 L380 876 M330 798 L390 798 M340 720 L380 720 M330 640 L390 640" mulai={at("Kalau")} lama={26} warna={KAPUR.chalk} tebal={8} />
    <Garis d="M470 1110 L840 1110" mulai={at("Kalau")} lama={18} warna={KAPUR.gold} tebal={7} />
  </Kanvas>
  <Label teks="perkiraan, bukan ukuran pasti" x={620} y={930} at={at("dikira-kira")} size={44} lebar={500} />
  <Label teks="hasilnya bergantung ukuran hasta" x={540} y={1210} at={at("ukuran hasta")} size={44} lebar={760} />
</>;
