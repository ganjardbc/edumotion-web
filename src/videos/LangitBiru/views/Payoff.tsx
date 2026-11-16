import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";
import { sinar } from "./gambar";

// Payoff: satu sebab, dua hasil. Kiri: biru tersebar ke segala arah (langit biru). Kanan: Matahari rendah dengan sinar jingga (senja merah).
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const biru = Math.max(8, at("langit"));
  const merah = at("senja");
  return (
    <>
      <Teks text="Cahaya biru tersebar" sorot="tersebar" size={104} top={250} />
      <Kanvas>
        <circle cx={300} cy={800} r={26} fill={KAPUR.esIsi} stroke={KAPUR.chalk} strokeWidth={7} opacity={at("langit") > 0 ? 1 : 0} />
        {sinar(300, 800, 190, 10).map((d, i) => (
          <Garis key={i} d={d} mulai={biru + i * 2} lama={14} tebal={7} warna={KAPUR.es} kasar={0.4} />
        ))}
        <Ikon nama="sun" cx={680} cy={900} size={150} mulai={merah} warna={KAPUR.gold} tebal={7} />
        <Garis d="M770 900 L920 900" mulai={merah + 10} lama={18} tebal={9} warna={KAPUR.orange} />
        <Garis d="M600 1010 L880 1010" mulai={merah} lama={14} tebal={7} />
      </Kanvas>
      <Label teks="langit biru" x={300} y={1100} at={biru} size={54} warna={KAPUR.es} lebar={340} />
      <Label teks="senja merah" x={760} y={1100} at={merah} size={54} warna={KAPUR.orange} lebar={340} />
    </>
  );
};
