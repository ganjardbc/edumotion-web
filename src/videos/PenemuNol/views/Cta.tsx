import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, maju, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AngkaTeks } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: angka 1–9 tersusun dalam papan 3×3 (satu per satu muncul); saat "India" angkanya meredup dan tanda tanya emas besar menyala di tengah.
const X = [330, 540, 750] as const;
const Y = [650, 850, 1050] as const;
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const angka = Math.max(10, at("angka"));
  const india = at("India");
  const redup = 1 - 0.65 * maju(frame, india, 12);
  return (
    <>
      <Judul teks="Angka lain dari India?" sorot="India" />
      <Kanvas>
        <Garis kasar={1} d="M200 540 L880 540 L880 1170 L200 1170 Z" mulai={6} lama={26} tebal={8} isi="rgba(0, 0, 0, 0.12)" />
        <g opacity={redup}>
          {Y.map((y, r) =>
            X.map((x, c) => (
              <Pop key={`${r}${c}`} at={angka + (r * 3 + c) * 4}>
                <AngkaTeks cx={x} cy={y} teks={String(r * 3 + c + 1)} size={170} />
              </Pop>
            )),
          )}
        </g>
        <Garis kasar={1} d="M270 760 L810 760 M270 960 L810 960 M435 580 L435 1130 M645 580 L645 1130" mulai={angka} lama={20} warna={KAPUR.abu} tebal={5} />
      </Kanvas>
      <Label teks="?" x={540} y={850} at={india} size={480} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
