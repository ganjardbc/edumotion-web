import type React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { mixHex } from "../../assets/backdrops";
import { useTheme } from "../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { AREA, CLAMP, type Gambar, TEKS } from "./tata";

// Bagi kalimat menjadi paling banyak 2 baris yang panjangnya paling seimbang (pecah di spasi).
const dua = (teks: string): ReadonlyArray<string> => {
  const w = teks.split(" ");
  if (w.length < 2) return [teks];
  let best = 1;
  let gap = Infinity;
  for (let i = 1; i < w.length; i++) {
    const g = Math.abs(w.slice(0, i).join(" ").length - w.slice(i).join(" ").length);
    if (g < gap) {
      gap = g;
      best = i;
    }
  }
  return [w.slice(0, best).join(" "), w.slice(best).join(" ")];
};

// Ukuran huruf agar baris terpanjang muat selebar panggung (rata-rata lebar huruf Nunito 800 ≈ 0,54 × ukuran).
const muat = (baris: ReadonlyArray<string>, max: number, lebar = AREA.width): number => Math.min(max, Math.floor(lebar / (Math.max(...baris.map((b) => b.length)) * 0.54)));

// Pola KUNCI: satu scene layar penuh, tanpa karakter, untuk poin terpenting video. Dipakai sebagai scene biasa
// (id `Kunci`, segment explain) di urutan video, bukan lapisan di atas scene lain. Urutan dari atas: label KUNCINYA,
// kalimat kunci (2 baris, satu kata disorot), satu gambar besar di tengah, keterangan pendek.
// `warna` memilih keluarga warna latar (bawaan = topik video), mis. merah untuk panas.
export const Kunci: React.FC<{
  readonly judul: string;
  readonly sorot?: string;
  readonly sub?: string;
  readonly topic: VideoTopic;
  readonly warna?: VideoTopic;
  readonly gambar?: Gambar;
  // Frame (scene) gambar mulai muncul; bawaan 14.
  readonly gambarAt?: number;
}> = ({ judul, sorot, sub, topic, warna, gambar, gambarAt = 14 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[warna ?? topic];
  const pop = spring({ frame: frame - 4, fps, config: { damping: 13, stiffness: 150 } });
  const popGambar = frame >= gambarAt ? spring({ frame: frame - gambarAt, fps, config: { damping: 12, stiffness: 120 } }) : 0;
  const key = sorot?.toLowerCase();
  const barisJudul = dua(judul);
  const barisSub = sub ? dua(sub) : [];
  const ukJudul = muat(barisJudul, TEKS.besar);
  const ukSub = muat(barisSub, TEKS.label);
  const art = { x: AREA.cx, y: 890, size: 500 };
  const denyut = 1 + 0.04 * Math.sin(frame / 7);
  const subIn = interpolate(frame, [gambarAt, gambarAt + 12], [0, 1], CLAMP);
  return (
    <AbsoluteFill style={{ background: `linear-gradient(180deg, ${c.ink} 0%, ${mixHex(c.ink, c.rim, 0.4)} 100%)` }}>
      <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 250, textAlign: "center" }}>
        <span style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.kecil, letterSpacing: 4, color: c.ink, backgroundColor: HIGHLIGHT, borderRadius: 40, padding: "8px 28px" }}>KUNCINYA</span>
      </div>
      <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 340, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: ukJudul, lineHeight: 1.15, color: "#FFFFFF", opacity: Math.min(1, pop * 1.5), transform: `scale(${0.9 + 0.1 * pop})` }}>
        {barisJudul.map((b, bi) => (
          <div key={bi} style={{ whiteSpace: "nowrap" }}>
            {b.split(" ").map((w, i) => {
              const on = key !== undefined && w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase() === key;
              return (
                <span key={i}>
                  {i > 0 ? " " : null}
                  <span style={on ? { backgroundColor: HIGHLIGHT, color: c.ink, borderRadius: 18, padding: "0 14px" } : undefined}>{w}</span>
                </span>
              );
            })}
          </div>
        ))}
      </div>
      {gambar ? (
        <>
          <div style={{ position: "absolute", left: art.x - 330, top: art.y - 330, width: 660, height: 660, borderRadius: "50%", background: `radial-gradient(closest-side, ${mixHex(c.shine, "#FFFFFF", 0.2)}, transparent)`, opacity: 0.35 * popGambar * denyut, transform: `scale(${denyut})` }} />
          <div style={{ position: "absolute", inset: 0, opacity: Math.min(1, popGambar * 1.5), transform: `scale(${0.85 + 0.15 * popGambar})`, transformOrigin: `${art.x}px ${art.y}px` }}>{gambar(art)}</div>
        </>
      ) : null}
      {barisSub.length ? (
        <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 1160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: ukSub, lineHeight: 1.2, color: mixHex(c.shine, "#FFFFFF", 0.35), opacity: subIn }}>
          {barisSub.map((b, i) => (
            <div key={i} style={{ whiteSpace: "nowrap" }}>
              {b}
            </div>
          ))}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
