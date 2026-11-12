import type React from "react";
import { AbsoluteFill, Img } from "remotion";
import bingkaiKayu from "./assets/bingkai.png";
import papanHijau from "./assets/papan-hijau.png";
import papanNavy from "./assets/papan-navy.png";
import type { VarianPapan } from "./TeksturPapan";

// Latar papan tulis bertekstur (noda warna, bekas hapusan, debu, sudut gelap) dengan bingkai kayu di keempat sisi.
// Tekstur dan bingkai dirender sekali dari TeksturPapan dan BingkaiKayu ke PNG supaya render video tetap ringan.
// Bawaan navy (warna tema); hijau = papan sekolah klasik. `bingkai` false untuk papan tanpa bingkai.
export const PapanBackdrop: React.FC<{ readonly varian?: VarianPapan; readonly bingkai?: boolean }> = ({ varian = "navy", bingkai = true }) => (
  <AbsoluteFill>
    <Img src={varian === "navy" ? papanNavy : papanHijau} style={{ width: "100%", height: "100%" }} />
    {bingkai ? <Img src={bingkaiKayu} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /> : null}
  </AbsoluteFill>
);
