import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Asteroid, Bumi, Debu } from "../../../dark-chalk/objek/Purba";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: di dalam lensa, asteroid meluncur ke Bumi, menabrak, lalu ukurannya ditandai (sekitar 10 km).
const AKHIR = { x: 500, y: 835 };
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const datang = at("asteroid");
  const tabrak = Math.max(datang + 12, at("menabrak") + 4);
  const t = interpolate(frame, [datang, tabrak], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) });
  const ledak = interpolate(frame, [tabrak, tabrak + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ukur = at("sepuluh");
  // Dampak: layar bergetar singkat (meluruh) dan debu mengembang dari titik tabrak.
  const sejak = frame - tabrak;
  const getar = sejak >= 0 && sejak < 16 ? 1 - sejak / 16 : 0;
  const dx = Math.sin(frame * 2.7) * 14 * getar;
  const dy = Math.cos(frame * 3.1) * 10 * getar;
  const debuT = interpolate(frame, [tabrak, tabrak + 34], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", inset: 0, transform: `translate(${dx}px, ${dy}px)` }}>
    <Sorot
      judul="Asteroid selebar sepuluh kilometer"
      sorotJudul="sepuluh"
      gambar={({ x, y }) => (
        <>
          <Bumi cx={x} cy={y + 140} r={120} mulai={6} />
          <Pop at={datang - 4}>
            <Asteroid cx={AKHIR.x - 150 * (1 - t)} cy={AKHIR.y - 260 * (1 - t)} size={130} api={frame < tabrak} mulai={datang - 4} />
          </Pop>
          <Pop at={ukur}>
            <Garis kasar={1} d={`M${AKHIR.x - 62} 750 L${AKHIR.x + 62} 750 M${AKHIR.x - 62} 736 L${AKHIR.x - 62} 764 M${AKHIR.x + 62} 736 L${AKHIR.x + 62} 764`} mulai={ukur} lama={12} warna={KAPUR.gold} tebal={7} />
          </Pop>
          {debuT > 0 && debuT < 1 ? <Debu cx={AKHIR.x + 90} cy={AKHIR.y + 70 - 40 * debuT} size={90 + 200 * debuT} buram={0.85 * (1 - debuT)} /> : null}
          {ledak > 0 ? <Garis kasar={1} d={`M${AKHIR.x + 70} ${AKHIR.y + 40} L${AKHIR.x + 130} ${AKHIR.y - 10} M${AKHIR.x + 80} ${AKHIR.y + 70} L${AKHIR.x + 160} ${AKHIR.y + 70} M${AKHIR.x + 60} ${AKHIR.y + 10} L${AKHIR.x + 100} ${AKHIR.y - 50}`} mulai={tabrak} lama={8} warna={KAPUR.orange} tebal={9} /> : null}
        </>
      )}
          />
    <Label teks="sekitar 10 km" x={AKHIR.x} y={690} at={ukur} size={46} warna={KAPUR.gold} lebar={360} />
    </div>
  );
};
