import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Hook: pesawat besar di langit berawan; label "ratusan ton" muncul di bawahnya, lalu pesawat naik pelan
// sambil sedikit mendongak saat "melayang" dan tanda tanya emas menyala.
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const ton = at("ratusan");
  const melayang = at("melayang");
  const naik = interpolate(frame, [melayang, melayang + 45], [0, -80], CLAMP);
  const dongak = interpolate(frame, [melayang, melayang + 45], [0, -6], CLAMP);
  const ayun = frame > melayang ? Math.sin((frame - melayang) / 14) * 6 : 0;
  return (
    <>
      <Teks text="Bagaimana pesawat bisa terbang?" sorot="terbang" size={92} top={250} />
      <Kanvas>
        <Ikon nama="cloud" cx={190} cy={560} size={130} mulai={6} warna={KAPUR.abu} tebal={6} />
        <Ikon nama="sun" cx={890} cy={560} size={120} mulai={10} warna={KAPUR.gold} tebal={6} />
        <Ikon nama="cloud" cx={200} cy={1060} size={160} mulai={14} warna={KAPUR.abu} tebal={7} />
        <Ikon nama="cloud" cx={870} cy={1080} size={180} mulai={18} warna={KAPUR.abu} tebal={7} />
        <g transform={`translate(0 ${naik + ayun})`}>
          <Pesawat cx={540} cy={830} size={700} mulai={4} miring={dongak} />
        </g>
      </Kanvas>
      <Label teks="ratusan ton" x={540} y={1180} at={ton} size={64} lebar={600} warna={KAPUR.gold} />
      <Label teks="?" x={930} y={700} at={melayang + 12} size={220} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
