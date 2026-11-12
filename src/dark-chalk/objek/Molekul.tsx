import type React from "react";
import { KAPUR } from "../palette";

// Satu molekul air: oksigen (lingkaran biru) dengan dua hidrogen kecil (putih) membentuk sudut sekitar 105 derajat.
// Berpusat di (x, y); `r` = jari-jari oksigen; `rot` derajat.
export const Molekul: React.FC<{ readonly x: number; readonly y: number; readonly r?: number; readonly rot?: number }> = ({ x, y, r = 14, rot = 0 }) => {
  const a = (52.5 * Math.PI) / 180;
  const hx = Math.sin(a) * r * 1.35;
  const hy = Math.cos(a) * r * 1.35;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <circle cx={-hx} cy={hy} r={r * 0.55} fill={KAPUR.chalk} />
      <circle cx={hx} cy={hy} r={r * 0.55} fill={KAPUR.chalk} />
      <circle cx={0} cy={0} r={r} fill={KAPUR.biruTerang} stroke={KAPUR.chalk} strokeWidth={3} />
    </g>
  );
};

// Kisi es: sarang lebah (heksagon) tempat molekul berada di tiap sudutnya, dengan rongga kosong di tengah heksagon.
const SQ3 = Math.sqrt(3);
const buatKisi = (kol: number, baris: number) => {
  const peta = new Map<string, number>();
  const titik: Array<{ x: number; y: number }> = [];
  const rusuk: Array<readonly [number, number]> = [];
  const pusat: Array<{ x: number; y: number }> = [];
  const idx = (x: number, y: number) => {
    const k = `${x.toFixed(3)},${y.toFixed(3)}`;
    const ada = peta.get(k);
    if (ada !== undefined) return ada;
    peta.set(k, titik.length);
    titik.push({ x, y });
    return titik.length - 1;
  };
  for (let r = 0; r < baris; r += 1) {
    for (let c = 0; c < kol; c += 1) {
      const cx = c * SQ3 + (r % 2) * (SQ3 / 2);
      const cy = r * 1.5;
      pusat.push({ x: cx, y: cy });
      const v = Array.from({ length: 6 }, (_, k) => {
        const ang = ((90 + 60 * k) * Math.PI) / 180;
        return idx(cx + Math.cos(ang), cy + Math.sin(ang));
      });
      for (let k = 0; k < 6; k += 1) {
        const a = v[k];
        const b = v[(k + 1) % 6];
        if (!rusuk.some(([p, q]) => (p === a && q === b) || (p === b && q === a))) rusuk.push([a, b]);
      }
    }
  }
  const xs = titik.map((p) => p.x);
  const ys = titik.map((p) => p.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const lebar = Math.max(...xs) - minX;
  const tinggi = Math.max(...ys) - minY;
  // Urut dari atas ke bawah lalu kiri ke kanan; pasangan 1:1 dengan posisi cair.
  const urut = titik.map((p, i) => ({ ...p, i })).sort((a, b) => a.y - b.y || a.x - b.x);
  const balik = new Map(urut.map((p, n) => [p.i, n]));
  return {
    titik: urut.map((p) => ({ x: p.x - minX - lebar / 2, y: p.y - minY - tinggi / 2 })),
    rusuk: rusuk.map(([a, b]) => [balik.get(a) ?? 0, balik.get(b) ?? 0] as const),
    pusat: pusat.map((p) => ({ x: p.x - minX - lebar / 2, y: p.y - minY - tinggi / 2 })),
    lebar,
    tinggi,
  };
};
export const KISI = buatKisi(3, 3);
export const JUMLAH_MOLEKUL = KISI.titik.length;

// Acak deterministik (tanpa Math.random).
const acak = (n: number) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

// Posisi tiap molekul pada kotak pusat (cx, cy): t=0 cair (rapat, acak), t=1 kristal es (teratur, renggang).
// `rusukPx` = panjang sisi heksagon kristal dalam piksel. Cair memakai petak rapat 0,62 x rusuk dengan sedikit goyang acak.
export const posisiMolekul = (cx: number, cy: number, rusukPx: number, t: number, frame: number, goyang: number) => {
  const kol = Math.ceil(Math.sqrt(JUMLAH_MOLEKUL * 0.9));
  const baris = Math.ceil(JUMLAH_MOLEKUL / kol);
  const jarak = rusukPx * 0.62;
  const e = t * t * (3 - 2 * t);
  return KISI.titik.map((p, i) => {
    const c = i % kol;
    const r = Math.floor(i / kol);
    const cair = { x: (c - (kol - 1) / 2) * jarak + (acak(i) - 0.5) * jarak * 0.5, y: (r - (baris - 1) / 2) * jarak + (acak(i + 40) - 0.5) * jarak * 0.5 + rusukPx * 0.55 };
    const kristal = { x: p.x * rusukPx, y: p.y * rusukPx };
    const g = goyang * (1 - e);
    return {
      x: cx + cair.x + (kristal.x - cair.x) * e + Math.sin(frame / 7 + i * 2.1) * g,
      y: cy + cair.y + (kristal.y - cair.y) * e + Math.cos(frame / 8 + i * 1.3) * g,
      rot: acak(i + 90) * 360 * (1 - e) + Math.sin(frame / 20 + i) * 8 * (1 - e),
    };
  });
};

// Medan molekul di sekitar (cx, cy). `t` mengubah cair → es; saat t mendekati 1 muncul ikatan (garis putus emas) dan
// `rongga` (0..1) menyorot lubang heksagon dengan lingkaran emas.
export const MedanMolekul: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly rusuk?: number;
  readonly r?: number;
  readonly t?: number;
  readonly frame: number;
  readonly goyang?: number;
  readonly rongga?: number;
}> = ({ cx, cy, rusuk = 52, r = 13, t = 0, frame, goyang = 4, rongga = 0 }) => {
  const pos = posisiMolekul(cx, cy, rusuk, t, frame, goyang);
  const ikatan = Math.max(0, (t - 0.7) / 0.3);
  return (
    <g>
      {ikatan > 0
        ? KISI.rusuk.map(([a, b], i) => <line key={i} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} stroke={KAPUR.gold} strokeWidth={4} strokeDasharray="8 8" strokeLinecap="round" opacity={0.85 * ikatan} />)
        : null}
      {rongga > 0
        ? KISI.pusat.map((p, i) => <circle key={i} cx={cx + p.x * rusuk} cy={cy + p.y * rusuk} r={rusuk * 0.5 * (0.85 + 0.15 * Math.sin(frame / 6 + i))} fill="none" stroke={KAPUR.gold} strokeWidth={5} opacity={rongga} />)
        : null}
      {pos.map((p, i) => (
        <Molekul key={i} x={p.x} y={p.y} r={r} rot={p.rot} />
      ))}
    </g>
  );
};
