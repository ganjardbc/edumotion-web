import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff (layar penuh): induk dan anak badak kapur; tiga sebab di bawahnya saat "jarang", "mudah", "ruangnya".
export const Payoff: React.FC<SceneProps> = ({ at }) => (
  <>
    <KunciPola judul="Langka karena tiga hal" sorotJudul="tiga" keterangan="Jumlahnya sulit pulih" keteranganAt={at("sempit")} gambar={<g />} />
    <Kanvas>
      <Garis kasar={1} d="M180 805 L900 805" mulai={4} lama={14} warna={KAPUR.coklat} tebal={8} />
      <BadakKapur cx={400} cy={700} size={440} mulai={6} />
      <BadakKapur cx={790} cy={750} size={200} mulai={20} />
    </Kanvas>
    <Label teks="Jarang beranak" x={540} y={940} at={at("jarang")} size={56} warna={KAPUR.gold} lebar={560} />
    <Label teks="Mudah berkurang" x={540} y={1015} at={at("mudah")} size={56} lebar={560} />
    <Label teks="Ruang sempit" x={540} y={1090} at={at("ruangnya")} size={56} lebar={560} />
  </>
);
