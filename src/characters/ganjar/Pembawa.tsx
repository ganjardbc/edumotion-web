import type React from "react";
import { mixHex } from "../../assets/backdrops";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import type { Gesture } from "./gestures";
import { GANJAR_STICKMAN_PALETTE as P } from "./palette";
import { GanjarStickman, type GanjarStickmanExpression, VIEWBOX } from "./GanjarStickman";

// Warna pembawa dari topik: hoodie = tinta topik yang sedikit dicerahkan (tetap gelap supaya garis dan wajah terbaca),
// celana = warna utama topik, tali dan kantong = kilau topik.
const aksenTopik = (topic: VideoTopic) => {
  const c = TOPIC_COLORS[topic];
  return { hoodie: mixHex(c.ink, c.rim, 0.45), celana: c.main, tali: c.shine };
};

// Letak bawah telapak kaki di viewBox stickman (400x410).
const FOOT_Y = 380;

// Pembawa video (format stickman): Ganjar berdiri dengan kaki di (x, y), tinggi `tinggi` px, plus bayangan kaki.
// Akting satu badan penuh: pilih `ekspresi` dan `gestur` yang sesuai makna kalimat, dan ganti keduanya antar momen
// (jangan satu wajah sepanjang video). Narator yang berbicara, jadi `bicara` bawaan false.
export const Pembawa: React.FC<{
  readonly x?: number;
  readonly y: number;
  readonly tinggi?: number;
  readonly ekspresi?: GanjarStickmanExpression;
  readonly gestur?: Gesture;
  readonly jalan?: boolean;
  readonly bicara?: boolean;
  // 1 = menghadap depan apa adanya, -1 = dicerminkan (gestur tangan kanan pindah ke kiri).
  readonly hadap?: 1 | -1;
  readonly opacity?: number;
  // Topik video: warna celana pendek dan tali hoodie mengikuti warna topik (satu aksen, jadi tiap video punya identitas).
  readonly topic?: VideoTopic;
}> = ({ x = 540, y, tinggi = 620, ekspresi = "senyum", gestur = "netral", jalan = false, bicara = false, hadap = 1, opacity = 1, topic }) => {
  const w = (tinggi * VIEWBOX.w) / VIEWBOX.h;
  const top = y - (tinggi * FOOT_Y) / VIEWBOX.h;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top, width: w, height: tinggi, opacity }}>
      <div style={{ position: "absolute", left: w * 0.22, width: w * 0.56, top: tinggi * (FOOT_Y / VIEWBOX.h) - 14, height: 28, borderRadius: "50%", backgroundColor: P.ink, opacity: 0.12 }} />
      <div style={{ position: "absolute", inset: 0, transform: hadap === -1 ? "scaleX(-1)" : undefined }}>
        <GanjarStickman height={tinggi} expression={ekspresi} gesture={gestur} walk={jalan} talking={bicara} strokeWidth={6} aksen={topic ? aksenTopik(topic) : undefined} />
      </div>
    </div>
  );
};
