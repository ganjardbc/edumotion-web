import rough from "roughjs";

// Mengubah path SVG mulus menjadi path bergaya sketsa tangan (roughjs): garis sedikit melenceng dan digambar dua kali.
// Deterministik: seed diturunkan dari isi path, jadi hasil sama di setiap frame dan setiap render.
const gen = rough.generator();
const cache = new Map<string, string>();

const hash = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return (h >>> 0) % 2147483647 || 1;
};

export const kasarkan = (d: string, kekasaran = 1.2): string => {
  const kunci = `${kekasaran}|${d}`;
  const ada = cache.get(kunci);
  if (ada !== undefined) return ada;
  const gambar = gen.path(d, { roughness: kekasaran, bowing: 1, seed: hash(d), fill: undefined, disableMultiStroke: false, preserveVertices: false });
  const hasil = gen.toPaths(gambar).map((p) => p.d).join(" ");
  cache.set(kunci, hasil);
  return hasil;
};
