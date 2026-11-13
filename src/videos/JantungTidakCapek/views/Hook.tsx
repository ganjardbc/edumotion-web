import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

const EKG = "M160 1120 L360 1120 L400 1120 L430 1000 L470 1230 L500 1090 L530 1120 L760 1120 L800 1120 L830 1000 L870 1230 L900 1090 L920 1120";

// Hook: hati kapur berdetak (denyut pelan dengan jeda) di atas garis EKG. Berhenti sesaat di "capek". Tanpa tokoh.
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mulai = Math.max(6, at("jantungmu"));
  const capek = at("capek");
  // Denyut tiap 25 frame (selaras SFX); diam di sekitar kata "capek".
  const fase = ((frame - mulai) % 25 + 25) % 25;
  const diam = frame >= capek - 4 && frame < capek + 10;
  const denyut = frame < mulai + 12 || diam ? 0 : Math.max(0, Math.sin((fase / 9) * Math.PI)) * (fase < 9 ? 1 : 0);
  const s = 1 + 0.1 * denyut;
  return (
    <>
      <Teks text="Kenapa jantung tidak capek?" sorot="capek" size={96} top={250} />
      <Kanvas>
        <g transform={`translate(540 760) scale(${s}) translate(-540 -760)`}>
          <Ikon nama="heart" cx={540} cy={760} size={440} mulai={mulai} warna={KAPUR.orange} tebal={9} isi="rgba(237, 120, 83, 0.22)" lama={30} />
        </g>
        <Garis d={EKG} mulai={mulai + 20} lama={60} tebal={7} warna={KAPUR.gold} />
      </Kanvas>
    </>
  );
};
