import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: dua foto zoom sama ditumpuk. Baris atas: Bulan di langit tinggi. Baris bawah: Bulan di cakrawala.
// Dua garis emas tegak menempel di tepi kiri-kanan kedua Bulan: lebarnya sama.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const foto = at("Foto");
  const zoom = at("zoom");
  const ukuran = at("ukuran");
  const sama = at("hampir");
  const X = 360;
  const R = 150;
  return (
    <>
      <Judul teks="Ukuran Bulan hampir sama" sorot="sama" at={foto} />
      <Kanvas>
        <BulanKapur cx={X} cy={700} size={2 * R} mulai={foto + 4} />
        <Ikon nama="star" cx={180} cy={560} size={60} mulai={foto + 10} warna={KAPUR.gold} tebal={5} />
        <Ikon nama="star" cx={560} cy={880} size={44} mulai={foto + 14} warna={KAPUR.gold} tebal={5} />
        <Garis kasar={1} d="M120 1170 L640 1170" mulai={zoom} lama={14} warna={KAPUR.abu} tebal={8} />
        <BulanKapur cx={X} cy={1010} size={2 * R} mulai={zoom + 4} />
        <Pop at={sama} durasi={8}>
          <line x1={X - R} y1={520} x2={X - R} y2={1190} stroke={KAPUR.gold} strokeWidth={5} strokeDasharray="14 14" strokeLinecap="round" />
          <line x1={X + R} y1={520} x2={X + R} y2={1190} stroke={KAPUR.gold} strokeWidth={5} strokeDasharray="14 14" strokeLinecap="round" />
        </Pop>
        <Garis kasar={1} d={`M${X - R} 1225 L${X + R} 1225`} mulai={ukuran} lama={12} warna={KAPUR.gold} tebal={8} />
      </Kanvas>
      <Label teks="langit tinggi" x={790} y={680} at={foto + 8} size={56} lebar={380} />
      <Label teks="cakrawala" x={790} y={990} at={zoom + 8} size={56} lebar={380} />
      <Label teks="lebar sama" x={X} y={1275} at={sama} size={50} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
