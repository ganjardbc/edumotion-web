// Membuat src/dark-chalk/ikon/data.ts dari ikon outline Tabler (MIT). Hanya ikon yang terdaftar di NAMA yang disalin.
// Pemakaian: node scripts/ikon-build.mjs <folder icons/outline dari paket @tabler/icons>
// Hasilnya (data.ts) di-commit; folder sumber tidak perlu ada di proyek.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const NAMA = [
  "cat", "dog", "paw", "bug", "fish", "butterfly", "bat", "spider", "deer", "horse", "pig", "feather", "egg", "bone", "skull",
  "leaf", "leaf-maple", "plant", "tree", "trees", "flower", "mushroom", "cactus",
  "cloud", "cloud-rain", "cloud-storm", "sun", "moon", "moon-stars", "star", "rainbow", "tornado", "wind", "snowflake", "thermometer", "bolt", "ripple",
  "planet", "meteor", "rocket", "telescope", "atom", "flask", "microscope", "dna", "magnet", "bulb", "brain", "heart", "eye",
  "volcano", "mountain", "flame", "droplet", "globe", "book", "chalkboard", "school", "eraser", "ruler", "pencil",
];
const dir = process.argv[2];
if (!dir || !existsSync(dir)) {
  console.error("Beri folder icons/outline Tabler sebagai argumen.");
  process.exit(1);
}
const data = {};
const hilang = [];
for (const n of NAMA) {
  const f = join(dir, `${n}.svg`);
  if (!existsSync(f)) {
    hilang.push(n);
    continue;
  }
  const svg = readFileSync(f, "utf8");
  const paths = [...svg.matchAll(/<path\b[^>]*>/g)]
    .map((m) => m[0])
    .filter((t) => !/stroke="none"/.test(t))
    .map((t) => /\bd="([^"]+)"/.exec(t)?.[1])
    .filter(Boolean);
  const bukanPath = /<(circle|rect|line|polyline|polygon|ellipse)\b/.test(svg);
  if (bukanPath) console.warn(`peringatan: ${n} memuat elemen non-path (diabaikan)`);
  data[n] = paths;
}
const baris = Object.entries(data).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
const out = `// DIHASILKAN oleh scripts/ikon-build.mjs dari Tabler Icons (MIT, https://github.com/tabler/tabler-icons). Jangan diubah tangan.
// Tiap ikon = daftar path pada grid 24x24 (garis tebal 2).
export const IKON_DATA: Readonly<Record<string, ReadonlyArray<string>>> = {
${baris.join("\n")}
};
export type NamaIkon = keyof typeof IKON_DATA;
`;
writeFileSync(new URL("../src/dark-chalk/ikon/data.ts", import.meta.url), out);
console.log(`ikon: ${Object.keys(data).length} disalin${hilang.length ? `, tidak ada: ${hilang.join(", ")}` : ""}`);
