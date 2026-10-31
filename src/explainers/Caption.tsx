import type React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";

// Subtitle VO: maksimal 2 baris (sekitar 40 huruf), simetris di tengah (margin 160 kiri-kanan).
// Kalimat panjang dipecah jadi potongan dan ditampilkan bergantian sesuai porsi hurufnya selama kalimat itu.
// Pasang di dalam Sequence kalimatnya (durasi Sequence = durasi kalimat).
// Caption rata tengah kanvas (x 540) di dasar safe zone bawah: tepi bawah teks di y 1440 (1920 - 480).
export const CAPTION_BOTTOM = 480;
export const CAPTION_MAX_CHARS = 40;
const SIDE_MARGIN = 160;

// Bagi daftar kata menjadi `parts` potongan dengan panjang huruf sedekat mungkin.
const balance = (words: ReadonlyArray<string>, parts: number): ReadonlyArray<string> => {
  if (parts <= 1 || words.length <= 1) return [words.join(" ")];
  const total = words.join(" ").length;
  const target = total / parts;
  let best = 1;
  let bestGap = Infinity;
  for (let i = 1; i < words.length; i++) {
    const gap = Math.abs(words.slice(0, i).join(" ").length - target);
    if (gap < bestGap) {
      bestGap = gap;
      best = i;
    }
  }
  return [words.slice(0, best).join(" "), ...balance(words.slice(best), parts - 1)];
};

// Pecah per kalimat, lalu per klausa (koma), lalu seimbang per kata bila klausa masih terlalu panjang.
export const splitCaption = (text: string, max = CAPTION_MAX_CHARS): ReadonlyArray<string> => {
  const sentences = text.match(/[^.!?]+[.!?]*\s*/g)?.map((x) => x.trim()).filter(Boolean) ?? [text];
  const pieces: string[] = [];
  for (const sentence of sentences) {
    for (const clause of sentence.split(/(?<=,)\s+/)) {
      pieces.push(...(clause.length <= max ? [clause] : balance(clause.split(" "), Math.ceil(clause.length / max))));
    }
  }
  // Gabungkan potongan pendek (mis. "Hah?") dengan tetangganya bila muat.
  const merged: string[] = [];
  for (const piece of pieces) {
    const last = merged[merged.length - 1];
    if (last && (last + " " + piece).length <= max) merged[merged.length - 1] = `${last} ${piece}`;
    else merged.push(piece);
  }
  return merged;
};

export const Caption: React.FC<{ readonly text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = useTheme();
  if (!text) return null;
  const chunks = splitCaption(text);
  const total = chunks.reduce((n, c) => n + c.length, 0);
  let acc = 0;
  let index = chunks.length - 1;
  let start = 0;
  for (let i = 0; i < chunks.length; i++) {
    const from = (acc / total) * durationInFrames;
    const to = ((acc + chunks[i].length) / total) * durationInFrames;
    if (frame < to) {
      index = i;
      start = from;
      break;
    }
    acc += chunks[i].length;
    start = from;
  }
  const local = frame - start;
  const enter = interpolate(local, [0, 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  // Gaya caption video pendek: teks putih tebal berkontur gelap tanpa kotak, kata yang sedang diucapkan disorot.
  const words = chunks[index].split(" ");
  const chunkChars = chunks[index].length;
  const chunkFrames = (chunkChars / total) * durationInFrames;
  const spoken = Math.min(1, Math.max(0, local / chunkFrames)) * chunkChars;
  let offset = 0;
  let active = words.length - 1;
  for (let i = 0; i < words.length; i++) {
    offset += words[i].length + 1;
    if (spoken < offset) {
      active = i;
      break;
    }
  }
  return (
    <div style={{ position: "absolute", left: SIDE_MARGIN, right: SIDE_MARGIN, bottom: CAPTION_BOTTOM, display: "flex", justifyContent: "center", alignItems: "flex-end", opacity: enter, transform: `translateY(${(1 - enter) * 20}px)` }}>
      <div
        style={{
          fontFamily: t.fonts.heading,
          fontWeight: 800,
          fontSize: 56,
          lineHeight: 1.2,
          textAlign: "center",
          textWrap: "balance",
          color: "#FFFFFF",
          WebkitTextStroke: `12px ${t.colors.ink}`,
          paintOrder: "stroke fill",
          strokeLinejoin: "round",
          textShadow: "0 6px 0 rgba(0, 0, 0, 0.25)",
        }}
      >
        {words.map((w, i) => (
          <span key={i} style={{ color: i === active ? t.colors.accent : "#FFFFFF" }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};
