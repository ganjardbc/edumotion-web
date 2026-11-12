import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan, PANEL } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

export const Setup: React.FC<SceneProps> = ({ at }) => <>
  <Bandingkan judul="Hasta jadi meter?" sorotJudul="meter"
    kiri={{ teks: "60 hasta", at: at("mengubahnya"), gambar: ({ x, y }) => <>
      <Garis d={`M${x - 75} ${y} L${x + 75} ${y}`} mulai={at("mengubahnya")} lama={18} tebal={9} />
      <Garis d={`M${x - 65} ${y - 20} L${x - 65} ${y + 20} M${x - 25} ${y - 13} L${x - 25} ${y + 13} M${x + 15} ${y - 20} L${x + 15} ${y + 20} M${x + 55} ${y - 13} L${x + 55} ${y + 13}`} mulai={at("mengubahnya") + 8} lama={18} tebal={6} />
    </> }}
    kanan={{ teks: "≈ 30 meter?", at: at("meter"), gambar: ({ x, y }) => <>
      <Garis d={`M${x} ${y + 72} L${x} ${y - 72} M${x - 18} ${y - 72} L${x + 18} ${y - 72} M${x - 18} ${y + 72} L${x + 18} ${y + 72}`} mulai={at("meter")} lama={18} warna={KAPUR.gold} tebal={8} />
    </> }} />
  <Kanvas><Garis d={`M${PANEL.kiri.x + PANEL.kiri.w} 780 L${PANEL.kanan.x} 780 M${PANEL.kanan.x - 12} 768 L${PANEL.kanan.x} 780 L${PANEL.kanan.x - 12} 792`} mulai={at("mengubahnya")} lama={14} warna={KAPUR.gold} tebal={7} /></Kanvas>
</>;
