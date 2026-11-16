import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Aliran, Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Titik mesin pesawat di kanvas (pesawat cx 546, cy 850, size 500) dan posisi label "mesin" di kanan bawah lensa.
const MESIN = { x: 574, y: 912 };
const LABEL = { x: 820, y: 1215 };

// Explain1: lensa besar berisi pesawat; garis penunjuk emas dari mesin ke label "mesin" (di luar lensa, tidak menimpa teks)
// saat "mesin"; garis angin putus-putus mengalir dari depan ke belakang, di atas dan di bawah pesawat, saat "mengalir".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const mesin = at("mesin");
  const alir = at("mengalir");
  return (
    <>
      <Sorot
        judul="Udara mengalir deras"
        sorotJudul="deras"
        gambar={({ x, y, r }) => (
          <>
            <defs>
              <clipPath id="lensa-pesawat">
                <circle cx={x} cy={y} r={r - 14} />
              </clipPath>
            </defs>
            <g clipPath="url(#lensa-pesawat)">
              {[-205, -165, 135, 180].map((dy, i) => (
                <Aliran key={dy} d={`M${x + 300} ${y + dy} L${x - 300} ${y + dy}`} mulai={alir + i * 3} laju={-9} />
              ))}
            </g>
            <Pesawat cx={x + 6} cy={y - 10} size={500} mulai={6} />
            <Pop at={mesin}>
              <circle cx={MESIN.x} cy={MESIN.y} r={10} fill={KAPUR.gold} />
            </Pop>
            <Garis kasar={0.6} d={`M${MESIN.x} ${MESIN.y + 12} L${LABEL.x - 60} ${LABEL.y - 50}`} mulai={mesin} lama={12} warna={KAPUR.gold} tebal={6} />
          </>
        )}
      />
      <Label teks="mesin" x={LABEL.x} y={LABEL.y} at={mesin + 8} size={56} warna={KAPUR.gold} lebar={260} />
    </>
  );
};
