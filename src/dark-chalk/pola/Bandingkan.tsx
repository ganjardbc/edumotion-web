import type React from "react";
import { Garis } from "../Garis";
import { Kanvas, Pop } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";

export const PANEL = { kiri: { x: 160, w: 360 }, kanan: { x: 560, w: 360 }, atas: 520, tinggi: 520 } as const;

export type Sisi = { readonly teks: string; readonly at: number; readonly gambar: (pusat: { readonly x: number; readonly y: number }) => React.ReactNode };

// Pola BANDINGKAN kolom (kapur): dua panel berdampingan, tiap panel punya gambar dan label di bawahnya. Panel kanan boleh
// muncul belakangan (`at` sisi kanan).
export const Bandingkan: React.FC<{ readonly judul: string; readonly sorotJudul?: string; readonly kiri: Sisi; readonly kanan: Sisi; readonly cepat?: boolean }> = ({ judul, sorotJudul, kiri, kanan, cepat = false }) => {
  const kotak = (p: { readonly x: number; readonly w: number }) => `M${p.x} ${PANEL.atas} L${p.x + p.w} ${PANEL.atas} L${p.x + p.w} ${PANEL.atas + PANEL.tinggi} L${p.x} ${PANEL.atas + PANEL.tinggi} Z`;
  const pusat = (p: { readonly x: number; readonly w: number }) => ({ x: p.x + p.w / 2, y: PANEL.atas + PANEL.tinggi / 2 });
  return (
    <>
      <Judul teks={judul} sorot={sorotJudul} />
      <Kanvas>
        <Garis d={kotak(PANEL.kiri)} mulai={kiri.at} lama={cepat ? 7 : 20} tebal={7} isi="rgba(0, 0, 0, 0.12)" />
        <Pop at={kiri.at} durasi={cepat ? 3 : 10}>{kiri.gambar(pusat(PANEL.kiri))}</Pop>
        <Garis d={kotak(PANEL.kanan)} mulai={kanan.at} lama={cepat ? 7 : 20} tebal={7} isi="rgba(0, 0, 0, 0.12)" warna={KAPUR.gold} />
        <Pop at={kanan.at} durasi={cepat ? 3 : 10}>{kanan.gambar(pusat(PANEL.kanan))}</Pop>
      </Kanvas>
      <Label teks={kiri.teks} x={PANEL.kiri.x + PANEL.kiri.w / 2} y={PANEL.atas + PANEL.tinggi + 70} at={kiri.at} size={52} lebar={380} durasi={cepat ? 3 : 10} />
      <Label teks={kanan.teks} x={PANEL.kanan.x + PANEL.kanan.w / 2} y={PANEL.atas + PANEL.tinggi + 70} at={kanan.at} size={52} warna={KAPUR.gold} lebar={380} durasi={cepat ? 3 : 10} />
    </>
  );
};
