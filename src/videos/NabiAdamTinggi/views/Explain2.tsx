import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

export const Explain2: React.FC<SceneProps> = ({ at }) => <>
  <Sorot judul="Hasta: siku sampai jari" sorotJudul="Hasta" lensaAt={at("Hasta")} gambar={() => <>
    {/* Skema lengan dan tangan saja, sebagai penanda ukuran; bukan sosok atau tokoh. */}
    <Garis d="M285 860 C390 835 500 820 612 805 L650 818 Q672 827 686 810 L709 774 Q721 763 733 777 L721 825 L749 789 Q763 780 774 795 L754 838 L780 813 Q795 807 803 823 L779 857 Q758 882 716 885 L650 870 C520 876 405 900 300 920 Z" mulai={at("Hasta")} lama={28} tebal={9} isi="rgba(242, 240, 232, 0.08)" />
    <Garis d="M300 860 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0" mulai={at("siku")} lama={16} warna={KAPUR.gold} tebal={8} />
    <Garis d="M300 955 L790 955 M300 937 L300 973 M790 937 L790 973" mulai={at("ujung jari")} lama={18} warna={KAPUR.gold} tebal={7} />
    <Garis d="M400 1090 L650 1090 M400 1118 L710 1118" mulai={at("berbeda")} lama={18} tebal={7} />
    <Garis d="M400 1075 L400 1105 M650 1075 L650 1105 M400 1103 L400 1133 M710 1103 L710 1133" mulai={at("berbeda")} lama={12} warna={KAPUR.gold} tebal={6} />
  </>} />
  <Label teks="siku" x={330} y={1030} at={at("siku")} size={48} warna={KAPUR.gold} lebar={200} />
  <Label teks="ujung jari" x={760} y={1030} at={at("ujung jari")} size={48} warna={KAPUR.gold} lebar={300} />
  <Label teks="ukuran hasta bisa berbeda" x={540} y={1260} at={at("berbeda")} size={46} lebar={760} />
  <Kanvas><Garis d="M345 1170 L735 1170" mulai={at("berbeda")} lama={14} warna={KAPUR.gold} tebal={5} /></Kanvas>
</>;
