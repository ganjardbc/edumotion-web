import type React from "react";
import { useId } from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video GempaBumi. Semua berpusat di (cx, cy); `size` = lebar kira-kira.
// Path digambar di titik asal lalu digeser lewat transform, supaya goresan kasar (seed dari isi path) tetap stabil saat bergerak.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ISI = "rgba(242, 240, 232, 0.14)";
const BELUM = 99999; // frame yang tidak pernah tercapai: aksi belum terjadi

// Penampang tanah (dua blok batu berdampingan, retakan di tengah, rumah di atas). Lebar lokal ±200, permukaan y=0, dasar y=120.
// `getar`: tanah dan rumah mulai bergetar; `retak`: garis patahan muncul dan blok kanan bergeser naik (bila `geser`);
// `gelombang`: cincin getaran melebar dari titik patahan sampai permukaan. `rumah={false}` untuk gambar kecil.
export const PenampangTanah: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly getar?: number;
  readonly retak?: number;
  readonly gelombang?: number;
  readonly rumah?: boolean;
  readonly geser?: boolean;
  // Seberapa tinggi (satuan lokal) blok kanan naik saat patah; bawaan 16, besarkan untuk gambar kecil.
  readonly geserPx?: number;
}> = ({ cx, cy, size = 400, mulai = 0, getar = BELUM, retak = BELUM, gelombang = BELUM, rumah = true, geser = true, geserPx = 16 }) => {
  const frame = useCurrentFrame();
  const klip = useId().replace(/:/g, "");
  const s = size / 400;
  const tebal = 5 / s;
  const amp = 7 * interpolate(frame, [getar, getar + 8], [0, 1], CLAMP);
  const sx = Math.sin(frame * 1.7) * amp;
  const sy = Math.cos(frame * 2.3) * amp * 0.4;
  const naik = geser ? interpolate(frame, [retak, retak + 6], [0, -geserPx], { ...CLAMP, easing: Easing.out(Easing.cubic) }) : 0;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <g transform={`translate(${sx} ${sy})`}>
        <Garis d="M-200 0 L-6 0 L-6 120 L-200 120 Z" mulai={mulai} lama={16} tebal={tebal} kasar={0.8} isi={ISI} />
        <g transform={`translate(0 ${naik})`}>
          <Garis d="M6 0 L200 0 L200 120 L6 120 Z" mulai={mulai + 4} lama={16} tebal={tebal} kasar={0.8} isi={ISI} />
        </g>
        {rumah ? (
          <>
            <Garis d="M-140 0 L-140 -70 L-60 -70 L-60 0" mulai={mulai + 14} lama={12} tebal={tebal} kasar={0.7} isi="rgba(244, 185, 66, 0.16)" />
            <Garis d="M-152 -70 L-100 -112 L-48 -70 Z" mulai={mulai + 20} lama={10} tebal={tebal} kasar={0.7} warna={KAPUR.orange} />
            <Garis d="M-110 0 L-110 -32 L-90 -32 L-90 0" mulai={mulai + 26} lama={8} tebal={tebal * 0.7} kasar={0.5} />
          </>
        ) : null}
        <Garis d="M0 -4 L-9 28 L8 58 L-8 90 L0 124" mulai={retak} lama={8} tebal={tebal * 1.2} warna={KAPUR.orange} />
        <clipPath id={klip}>
          <rect x={-200} y={0} width={400} height={120} />
        </clipPath>
        <g clipPath={`url(#${klip})`}>
          {[0, 1, 2].map((k) => {
            const t = frame - gelombang - k * 12;
            if (t < 0) return null;
            const r = (t % 45) * 5.5;
            return <circle key={k} cx={0} cy={100} r={r} fill="none" stroke={KAPUR.es} strokeWidth={tebal} opacity={1 - r / 250} />;
          })}
        </g>
      </g>
    </g>
  );
};

// Bumi tampak dari luar dengan batas lempeng (garis patah-patah) dan dua panah emas yang saling mendekat pelan di satu batas.
// Lebar lokal ±230. `gerak`: frame panah mulai muncul dan bergeser pelan.
export const BumiLempeng: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly gerak?: number;
}> = ({ cx, cy, size = 460, mulai = 0, gerak = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 460;
  const tebal = 6 / s;
  const dx = interpolate(frame, [gerak, gerak + 60], [0, 16], CLAMP);
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-230 0 a230 230 0 1 0 460 0 a230 230 0 1 0 -460 0" mulai={mulai} lama={26} tebal={tebal * 1.2} kasar={0.8} isi="rgba(158, 216, 240, 0.12)" />
      <Garis d="M-215 -80 L-120 -40 L-40 -90 L60 -30 L150 -70 L226 -20" mulai={mulai + 18} lama={18} tebal={tebal} warna={KAPUR.orange} />
      <Garis d="M-40 -90 L-70 20 L-30 90 L-60 190" mulai={mulai + 26} lama={16} tebal={tebal} warna={KAPUR.orange} />
      <Garis d="M60 -30 L110 60 L80 130 L120 150" mulai={mulai + 32} lama={14} tebal={tebal} warna={KAPUR.orange} />
      <g transform={`translate(${dx} 0)`}>
        <Garis d="M-180 10 L-120 10 M-140 -8 L-120 10 L-140 28" mulai={gerak} lama={12} tebal={tebal} warna={KAPUR.gold} />
      </g>
      <g transform={`translate(${-dx} 0)`}>
        <Garis d="M40 10 L-20 10 M0 -8 L-20 10 L0 28" mulai={gerak} lama={12} tebal={tebal} warna={KAPUR.gold} />
      </g>
    </g>
  );
};

// Dua blok batu saling dorong (panah emas dari kiri dan kanan); bidang temu tersangkut (zig-zag oranye). Lebar lokal ±200.
export const BlokLempeng: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly tekan?: number;
  readonly sangkut?: number;
}> = ({ cx, cy, size = 520, mulai = 0, tekan = 0, sangkut = BELUM }) => {
  const s = size / 400;
  const tebal = 5 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-200 -50 L-12 -50 L-12 60 L-200 60 Z" mulai={mulai} lama={16} tebal={tebal} kasar={0.8} isi={ISI} />
      <Garis d="M12 -50 L200 -50 L200 60 L12 60 Z" mulai={mulai + 4} lama={16} tebal={tebal} kasar={0.8} isi={ISI} />
      <Garis d="M-190 -85 L-120 -85 M-140 -105 L-120 -85 L-140 -65" mulai={tekan} lama={12} tebal={tebal} warna={KAPUR.gold} />
      <Garis d="M190 -85 L120 -85 M140 -105 L120 -85 L140 -65" mulai={tekan} lama={12} tebal={tebal} warna={KAPUR.gold} />
      <Garis d="M0 -50 L-10 -20 L10 10 L-10 40 L0 60" mulai={sangkut} lama={10} tebal={tebal * 1.2} warna={KAPUR.orange} />
    </g>
  );
};

// Penggaris yang dibengkokkan dari kedua ujung; mulai melengkung di frame `lengkung` (40 frame sampai lengkung penuh). Lebar lokal ±200.
export const Penggaris: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly lengkung?: number;
}> = ({ cx, cy, size = 480, mulai = 0, lengkung = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 5 / s;
  const p = interpolate(frame, [lengkung, lengkung + 40], [0, 1], { ...CLAMP, easing: Easing.inOut(Easing.quad) });
  const ujung = 170 - 40 * p;
  const d = `M${-ujung} 40 Q0 ${40 - 220 * p} ${ujung} 40`;
  const muncul = interpolate(frame, [mulai, mulai + 10], [0, 1], CLAMP);
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <g opacity={muncul}>
        <path d={d} fill="none" stroke={KAPUR.coklat} strokeWidth={24} strokeLinecap="round" />
        <path d={d} fill="none" stroke={KAPUR.chalk} strokeWidth={tebal * 0.7} strokeLinecap="round" strokeDasharray="2 22" />
      </g>
      <Garis d="M-250 40 L-215 40 M-232 24 L-215 40 L-232 56" mulai={lengkung} lama={10} tebal={tebal} warna={KAPUR.gold} />
      <Garis d="M250 40 L215 40 M232 24 L215 40 L232 56" mulai={lengkung} lama={10} tebal={tebal} warna={KAPUR.gold} />
    </g>
  );
};
