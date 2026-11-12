import type React from "react";
import { useCurrentFrame } from "remotion";
import { Kunci as KunciPola } from "../../../explainers/pola";
import { QuestionMark } from "../../../props";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

export const Kunci: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  return (
    <KunciPola
      judul="Penyebabnya belum diketahui"
      sorot="belum"
      sub="Ilusi Bulan masih diteliti"
      topic={META.topic}
      gambar={(k) => (
        <>
          <svg width={k.size} height={k.size} viewBox={`0 0 ${k.size} ${k.size}`} style={{ position: "absolute", left: k.x - k.size / 2, top: k.y - k.size / 2 }}>
            <circle cx={k.size / 2} cy={k.size / 2} r={k.size * 0.46} fill="none" stroke={TOPIC_COLORS.planet.rim} strokeWidth={6} strokeDasharray="10 22" opacity={0.72} />
            <circle cx={k.size / 2} cy={k.size / 2} r={k.size * 0.32} fill={TOPIC_COLORS.planet.shine} stroke={TOPIC_COLORS.planet.ink} strokeWidth={8} />
            <circle cx={k.size * 0.4} cy={k.size * 0.42} r={k.size * 0.05} fill={TOPIC_COLORS.planet.rim} />
            <circle cx={k.size * 0.59} cy={k.size * 0.57} r={k.size * 0.075} fill={TOPIC_COLORS.planet.rim} />
            <path d={`M${k.size * 0.1} ${k.size * 0.72} Q${k.size * 0.5} ${k.size * 0.88} ${k.size * 0.9} ${k.size * 0.72}`} fill="none" stroke={TOPIC_COLORS.planet.ink} strokeWidth={5} strokeDasharray="8 14" opacity={0.6} />
          </svg>
          <QuestionMark x={k.x + 190} y={k.y - 80} size={150} topic={META.topic} pop={Math.min(1, frame / 18)} />
        </>
      )}
    />
  );
};
