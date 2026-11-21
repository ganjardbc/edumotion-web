import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { GunungApi } from "../../../dark-chalk/objek/Krakatau";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff (layar penuh): gunung api di belakang; foto badak jawa ditempel pin di depannya saat "menurut".
export const Payoff: React.FC<SceneProps> = ({ at }) => (
  <>
    <KunciPola
      judul="Badak jawa tidak musnah"
      sorotJudul="tidak"
      keterangan="Menurut penelitian itu"
      keteranganAt={at("menurut")}
      gambar={
        <GunungApi cx={760} cy={980} size={280} mulai={6} getar={at("letusan")} asap={at("letusan") + 6} />
      }
    />
    <FotoPin berkas="badak/4.webp" cx={340} cy={900} lebar={520} rasio={800 / 1200} miring={-3} mulai={at("menurut")} />
  </>
);
