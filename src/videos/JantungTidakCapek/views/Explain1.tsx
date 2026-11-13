import type React from "react";
import { useCurrentFrame } from "remotion";
import { maju } from "../../../dark-chalk/Kanvas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan, PANEL } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: batang "kerja" pendek vs batang "istirahat" yang tumbuh panjang. Bagian bawah panel sebagai dasar batang.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const kerja = Math.max(8, at("bekerja"));
  const rehat = at("istirahat");
  const lama = at("lebih lama");
  const tumbuh = maju(frame, rehat, Math.max(24, lama - rehat + 20));
  const dasar = PANEL.atas + PANEL.tinggi - 50;
  const batang = (cx: number, tinggi: number, warna: string, isi: string) => (
    <rect x={cx - 70} y={dasar - tinggi} width={140} height={tinggi} rx={14} fill={isi} stroke={warna} strokeWidth={8} strokeLinejoin="round" />
  );
  return (
    <Bandingkan
      judul="Istirahat lebih lama"
      sorotJudul="Istirahat"
      kiri={{ teks: "kerja", at: kerja, gambar: (p) => batang(p.x, 110, KAPUR.chalk, "rgba(242, 240, 232, 0.2)") }}
      kanan={{ teks: "istirahat", at: rehat, gambar: (p) => batang(p.x, 40 + 370 * tumbuh, KAPUR.gold, "rgba(244, 185, 66, 0.25)") }}
    />
  );
};
