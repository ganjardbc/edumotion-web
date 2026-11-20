import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { PenampangTanah } from "../../../dark-chalk/objek/Gempa";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: batu patah saat "patah", cincin getaran naik saat "getarannya", rumah bergoyang saat "permukaan".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const patah = at("patah");
  const getaran = at("getarannya");
  const permukaan = at("permukaan");
  return (
    <>
      <Judul teks="Batu patah, tanah bergetar" sorot="patah" />
      <Kanvas>
        <PenampangTanah cx={540} cy={930} size={760} mulai={4} retak={patah} gelombang={getaran} getar={permukaan} />
      </Kanvas>
    </>
  );
};
