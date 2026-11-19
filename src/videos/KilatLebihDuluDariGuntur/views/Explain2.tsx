import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { GelombangSuara, Kilat } from "../../../dark-chalk/objek/Petir";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: dalam lensa, kilat di kiri dan mata di kanan. Gelombang suara pelan saat "guntur";
// garis cahaya emas melesat cepat ke mata saat "melesat"; mata muncul saat "matamu".
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const guntur = at("guntur");
  const melesat = at("melesat");
  const mata = at("matamu");
  return (
    <>
      <Sorot
        judul="Guntur itu suara"
        sorotJudul="suara"
        gambar={({ x, y }) => (
          <>
            <defs>
              <clipPath id="lensa-kilat">
                <circle cx={x} cy={y} r={286} />
              </clipPath>
            </defs>
            <g clipPath="url(#lensa-kilat)">
              <GelombangSuara cx={x - 170} cy={y - 20} mulai={guntur} laju={1.6} maxR={250} />
            </g>
            <Kilat cx={x - 170} cy={y - 20} size={230} mulai={6} />
            <Pop at={mata}>
              <Ikon nama="eye" cx={x + 170} cy={y - 20} size={140} mulai={mata} warna={KAPUR.chalk} tebal={7} />
            </Pop>
            <Garis kasar={0.6} d={`M${x - 120} ${y - 20} L${x + 95} ${y - 20}`} mulai={melesat} lama={5} warna={KAPUR.gold} tebal={9} />
          </>
        )}
      />
      <Label teks="guntur" x={370} y={1000} at={guntur + 6} size={52} warna={KAPUR.es} lebar={260} />
      <Label teks="cahaya" x={540} y={1215} at={melesat + 6} size={56} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
