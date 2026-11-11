import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../../themes";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { Judul } from "./Judul";
import { Kartu } from "./Kartu";
import { Muncul } from "./Muncul";
import { AREA, type Gambar, TEKS } from "./tata";

export type Sisi = { readonly gambar?: Gambar; readonly label: string; readonly nilai?: string; readonly at?: number };

// Pola BANDINGKAN: dua hal berdampingan (A vs B). `arah` "baris" = kiri-kanan (gambar tinggi), "kolom" = atas-bawah
// (gambar lebar, mis. gelombang). Mulai frame `sorotAt`, sisi `pemenang` disorot dan sisi lain diredupkan.
export const Bandingkan: React.FC<{
  readonly judul?: string;
  readonly sorotJudul?: string;
  readonly judulAt?: number;
  readonly a: Sisi;
  readonly b: Sisi;
  readonly arah?: "baris" | "kolom";
  readonly pemenang?: "a" | "b";
  readonly sorotAt?: number;
  readonly topic: VideoTopic;
}> = ({ judul, sorotJudul, judulAt = 0, a, b, arah = "baris", pemenang, sorotAt = Infinity, topic }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const sorotNyala = pemenang !== undefined && frame >= sorotAt;
  const pop = sorotNyala ? spring({ frame: frame - sorotAt, fps, config: { damping: 10, stiffness: 160 } }) : 0;
  const label = { position: "absolute", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.label, lineHeight: 1.1, color: c.ink } as const;
  const nilai = { ...label, fontSize: 88, color: t.colors.ink } as const;

  const sisi = (s: Sisi, i: 0 | 1) => {
    const menang = sorotNyala && pemenang === (i === 0 ? "a" : "b");
    const kalah = sorotNyala && !menang;
    const baris = arah === "baris";
    const w = baris ? 360 : AREA.width;
    const h = baris ? 680 : 370;
    const left = baris ? AREA.left + i * (w + 40) : AREA.left;
    const top = baris ? AREA.top : AREA.top + i * (h + 40);
    return (
      <Muncul key={i} at={s.at ?? 0}>
        <div style={{ position: "absolute", left, top, width: w, height: h, transform: `scale(${1 + 0.04 * (menang ? pop : 0)})`, opacity: kalah ? 0.5 : 1 }}>
          <Kartu left={0} top={0} width={w} height={h} topic={topic} sorot={menang}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 20 }}>
              {baris ? (
                <>
                  {s.gambar?.({ x: w / 2 - 8, y: 200, size: 300 })}
                  <div style={{ ...label, left: 16, right: 16, top: 380, textAlign: "center" }}>{s.label}</div>
                  {s.nilai ? <div style={{ ...nilai, left: 12, right: 12, top: 500, textAlign: "center", fontSize: Math.min(88, Math.floor(330 / (s.nilai.length * 0.5))), whiteSpace: "nowrap" }}>{s.nilai}</div> : null}
                </>
              ) : (
                <>
                  {s.gambar?.({ x: 190, y: h / 2 - 8, size: 300 })}
                  <div style={{ ...label, left: 370, right: 24, top: s.nilai ? 90 : 0, bottom: s.nilai ? undefined : 0, display: "flex", alignItems: "center" }}>{s.label}</div>
                  {s.nilai ? <div style={{ ...nilai, left: 370, right: 24, top: 170, fontSize: 72 }}>{s.nilai}</div> : null}
                </>
              )}
            </div>
          </Kartu>
        </div>
      </Muncul>
    );
  };

  return (
    <>
      {judul ? <Judul teks={judul} sorot={sorotJudul} at={judulAt} /> : null}
      {sisi(a, 0)}
      {sisi(b, 1)}
    </>
  );
};
