import type React from "react";
import { getLength, getPointAtLength } from "@remotion/paths";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, Pop, maju } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Badan hati (path ikon Tabler "heart", viewBox 24) dipetakan ke kanvas: x = 156 + 32u, y = 476 + 32v, berpusat di (540, 860).
const HATI = "M12 6.006 a5 5 0 1 1 7.5 6.572 l-7.5 7.422 l-7.5 -7.428 a5 5 0 1 1 7.5 -6.566 Z";

type Cabang = { readonly d: string; readonly tebal: number; readonly at: number };

// Arteri koroner: dua cabang utama keluar dari pangkal aorta (atas, tengah) lalu menyelimuti hati kiri dan kanan.
// Tiap cabang kecil bercabang dari yang utama. Arah path = arah aliran darah.
const UTAMA: ReadonlyArray<Cabang> = [
  { d: "M540 610 L540 668 C470 700 400 760 390 860 C385 950 450 1030 520 1085", tebal: 13, at: 0 },
  { d: "M540 668 C610 700 680 760 690 860 C695 950 630 1030 560 1085", tebal: 13, at: 8 },
];
const KECIL: ReadonlyArray<Cabang> = [
  { d: "M425 735 C390 760 355 800 345 855", tebal: 8, at: 22 },
  { d: "M390 900 C440 920 470 960 482 1015", tebal: 8, at: 28 },
  { d: "M655 735 C690 760 725 800 735 855", tebal: 8, at: 25 },
  { d: "M690 900 C640 920 610 960 598 1015", tebal: 8, at: 31 },
];
const SEMUA = [...UTAMA, ...KECIL];
const PANJANG = SEMUA.map((c) => getLength(c.d));

// Titik darah mengalir di sepanjang pembuluh (getPointAtLength), diikuti dua jejak yang memudar. Emas = makanan, biru = oksigen.
const Aliran: React.FC<{ readonly mulai: number }> = ({ mulai }) => {
  const frame = useCurrentFrame();
  if (frame < mulai) return null;
  const masuk = maju(frame, mulai, 14);
  return (
    <g opacity={masuk}>
      {SEMUA.flatMap((c, i) =>
        [0, 1, 2].flatMap((k) => {
          const kecepatan = c.tebal > 10 ? 0.011 : 0.016;
          const t = (((frame - mulai) * kecepatan + k / 3 + i * 0.13) % 1 + 1) % 1;
          const warna = (i + k) % 2 === 0 ? KAPUR.gold : KAPUR.es;
          return [0, 1, 2].map((j) => {
            const tj = t - j * 0.022;
            if (tj < 0) return null;
            const p = getPointAtLength(c.d, tj * PANJANG[i]);
            if (!p) return null;
            return <circle key={`${i}-${k}-${j}`} cx={p.x} cy={p.y} r={(c.tebal > 10 ? 10 : 7) - j * 2} fill={warna} opacity={1 - j * 0.38} />;
          });
        }),
      )}
    </g>
  );
};

// Explain3: hati besar di tengah (tanpa lensa); pembuluh digambar satu per satu dari aorta (utama dulu, lalu cabang kecil),
// lalu titik makanan dan oksigen mengalir di dalamnya. Penanda menunjuk pembuluh utama.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const pembuluh = Math.max(14, at("pembuluh"));
  const makanan = at("makanan");
  const oksigen = at("oksigennya");
  const tanda = pembuluh + 12;
  return (
    <>
      <Judul teks="Jantung punya pembuluh sendiri" sorot="pembuluh" />
      <Kanvas>
        <g transform="translate(540 900) scale(0.92) translate(-540 -860)">
          <g transform="translate(156 476) scale(32)">
            <Garis d={HATI} mulai={4} lama={24} tebal={9 / 32} isi="rgba(237, 120, 83, 0.1)" warna={KAPUR.chalk} />
          </g>
          {SEMUA.map((c, i) => (
            <Garis key={i} d={c.d} mulai={pembuluh + c.at} lama={c.tebal > 10 ? 26 : 16} tebal={c.tebal} warna={KAPUR.orange} />
          ))}
          <Aliran mulai={makanan} />
        </g>
        <Pop at={tanda}>
          <line x1={250} y1={632} x2={403} y2={891} stroke={KAPUR.gold} strokeWidth={6} strokeLinecap="round" />
          <circle cx={403} cy={891} r={10} fill={KAPUR.gold} />
        </Pop>
      </Kanvas>
      <Label teks="pembuluh sendiri" x={270} y={575} at={tanda} size={48} warna={KAPUR.gold} lebar={420} />
      <Kanvas>
        <Pop at={makanan}><circle cx={235} cy={1276} r={15} fill={KAPUR.gold} /></Pop>
        <Pop at={oksigen}><circle cx={615} cy={1276} r={15} fill={KAPUR.es} /></Pop>
      </Kanvas>
      <Label teks="makanan" x={385} y={1270} at={makanan} size={50} warna={KAPUR.gold} lebar={260} />
      <Label teks="oksigen" x={755} y={1270} at={oksigen} size={50} warna={KAPUR.es} lebar={260} />
    </>
  );
};
