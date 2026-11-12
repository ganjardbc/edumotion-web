import { loadFont } from "@remotion/google-fonts/PatrickHand";
import { fitText, measureText } from "@remotion/layout-utils";
import { useEffect, useState } from "react";
import { cancelRender, continueRender, delayRender } from "remotion";

// Font tulisan tangan untuk teks kapur (Teks, Label). Caption tetap memakai font tema (Nunito).
// Patrick Hand hanya punya bobot 400 dan huruf lebih kecil dari Nunito, jadi ukuran dikali SKALA_FONT.
const { fontFamily, waitUntilDone } = loadFont("normal", { weights: ["400"], subsets: ["latin"] });
export const FONT_KAPUR = fontFamily;
export const SKALA_FONT = 1.2;

// true setelah font kapur siap; render ditahan (delayRender) sampai font terpasang supaya ukuran teks terukur dengan benar.
export const useFontKapur = (): boolean => {
  const [siap, setSiap] = useState(false);
  const [handle] = useState(() => delayRender("font kapur"));
  useEffect(() => {
    waitUntilDone()
      .then(() => {
        setSiap(true);
        continueRender(handle);
      })
      .catch((e: unknown) => cancelRender(e));
  }, [handle]);
  return siap;
};

const lebarBaris = (text: string): number => measureText({ text, fontFamily, fontWeight: 400, fontSize: 100 }).width;

export type TataTeks = { readonly size: number; readonly baris: ReadonlyArray<ReadonlyArray<string>> };

// Menata kata menjadi 1–2 baris yang seimbang, dengan ukuran huruf terbesar (paling banyak `maks`) yang muat di `lebar`.
// Satu baris dipilih bila muat pada ukuran `maks`; bila tidak, dipilih pemisahan dua baris dengan baris terpanjang paling pendek.
export const tataTeks = (kata: ReadonlyArray<string>, lebar: number, maks: number): TataTeks => {
  const satu = kata.join(" ");
  if (lebarBaris(satu) * (maks / 100) <= lebar || kata.length < 2) {
    const size = Math.min(maks, fitText({ text: satu, withinWidth: lebar, fontFamily, fontWeight: 400 }).fontSize);
    return { size, baris: [kata] };
  }
  let terbaik = 1;
  let skor = Infinity;
  for (let i = 1; i < kata.length; i++) {
    const m = Math.max(lebarBaris(kata.slice(0, i).join(" ")), lebarBaris(kata.slice(i).join(" ")));
    if (m < skor) {
      skor = m;
      terbaik = i;
    }
  }
  return { size: Math.min(maks, (lebar / skor) * 100), baris: [kata.slice(0, terbaik), kata.slice(terbaik)] };
};

// Ukuran huruf terbesar (paling banyak `maks`) agar teks satu baris muat di `lebar`.
export const ukuranMuat = (text: string, lebar: number, maks: number): number => Math.min(maks, fitText({ text, withinWidth: lebar, fontFamily, fontWeight: 400 }).fontSize);
