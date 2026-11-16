// Bentuk kapur bersama untuk video LangitBiru (path SVG, koordinat kanvas).

// Gelombang sinus dari (x, y) sepanjang `panjang`, tinggi puncak `amp`, satu siklus = `lamb` px.
export const gelombang = (x: number, y: number, panjang: number, amp: number, lamb: number): string => {
  const separuh = lamb / 2;
  const n = Math.max(1, Math.round(panjang / separuh));
  let d = `M${x} ${y}`;
  for (let i = 0; i < n; i++) {
    const arah = i % 2 === 0 ? -1 : 1;
    d += ` Q${x + i * separuh + separuh / 2} ${y + arah * 2 * amp} ${x + (i + 1) * separuh} ${y}`;
  }
  return d;
};

// Sinar memancar dari (cx, cy): `n` garis sepanjang `r`, di luar arah `lewati` (derajat, ±20).
export const sinar = (cx: number, cy: number, r: number, n: number, lewati = 0): ReadonlyArray<string> =>
  Array.from({ length: n }, (_, i) => (i * 360) / n)
    .filter((a) => Math.abs(((a - lewati + 540) % 360) - 180) > 20)
    .map((a) => {
      const rad = (a * Math.PI) / 180;
      return `M${cx + Math.cos(rad) * 44} ${cy + Math.sin(rad) * 44} L${cx + Math.cos(rad) * r} ${cy + Math.sin(rad) * r}`;
    });

// Warna ungu kapur (belum ada di KAPUR).
export const UNGU = "rgb(184, 148, 236)";
