import type { VideoTopic } from "../../../videos/_shared/types";
import { TOPIC_COLORS } from "../../../themes/topics";
import { mixHex } from "../shared";

// Warna latar edumotion diturunkan dari palet topik (main, rim, shine), jadi satu latar bisa dipakai ulang oleh semua pilar.
export type EduBackdropColors = {
  readonly wallTop: string;
  readonly wallBottom: string;
  readonly floor: string;
  readonly floorEdge: string;
  readonly line: string;
  readonly deep: string;
  readonly soft: string;
};

const WHITE = "#FFFFFF";
const tint = (hex: string, amount: number): string => mixHex(hex, WHITE, amount);

export const eduColors = (topic: VideoTopic): EduBackdropColors => {
  const c = TOPIC_COLORS[topic];
  return {
    wallTop: tint(c.shine, 0.8),
    wallBottom: tint(c.shine, 0.45),
    floor: tint(c.main, 0.55),
    floorEdge: tint(c.rim, 0.35),
    line: tint(c.rim, 0.75),
    deep: c.rim,
    soft: tint(c.main, 0.4),
  };
};
