#!/usr/bin/env node
// Memeriksa objek SVG di src/props terhadap kontrak gaya (design-system/edumotion-design-system/props/STYLE.md).
//   node scripts/lint-props.mjs        (dijalankan oleh `npm run lint`)
// Galat: hex di luar palet, keacakan/timer, objek tanpa PropFrame, objek belum tercatat di registry.md.
// Peringatan: lebih dari 5 warna unik dalam satu objek.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const propsDir = join(root, "src/props");
const registry = readFileSync(join(root, "design-system/edumotion-design-system/props/registry.md"), "utf8");
const errors = [];
const warnings = [];

const ALLOWED_HEX = new Set(["#FFFFFF"]);
// Pembungkus dan lembar peninjauan bukan objek. Komponen berakhiran "Shape" adalah bentuk internal dan tidak perlu dicatat.
const SKIP = new Set(["PropFrame.tsx", "PropsDemo.tsx"]);
const walk = (dir) => readdirSync(dir).flatMap((n) => (statSync(join(dir, n)).isDirectory() ? walk(join(dir, n)) : [join(dir, n)]));

for (const file of walk(propsDir).filter((f) => f.endsWith(".tsx"))) {
  const name = file.split("/").pop();
  if (SKIP.has(name)) continue;
  const rel = relative(root, file);
  const src = readFileSync(file, "utf8");
  const code = src.replace(/\/\/.*$/gm, "");

  for (const m of code.matchAll(/#[0-9A-Fa-f]{6}\b/g)) if (!ALLOWED_HEX.has(m[0].toUpperCase())) errors.push(`${rel}: hex di luar palet: ${m[0]} (pakai TOPIC_COLORS atau HIGHLIGHT)`);
  if (/Math\.random\(|setTimeout|setInterval|Date\.now\(/.test(code)) errors.push(`${rel}: dilarang memakai Math.random/setTimeout/setInterval/Date.now`);
  if (!code.includes("<PropFrame")) errors.push(`${rel}: objek harus dibungkus <PropFrame> (viewBox 800x800)`);
  if (/viewBox=/.test(code) && !/viewBox="0 0 800 800"/.test(code)) errors.push(`${rel}: viewBox harus 0 0 800 800`);

  const exported = [...code.matchAll(/export const ([A-Z]\w*)\s*:\s*React\.FC/g)].map((m) => m[1]).filter((id) => !id.endsWith("Shape"));
  if (exported.length === 0) errors.push(`${rel}: tidak ada komponen React.FC yang diekspor`);
  for (const id of exported) if (!new RegExp(`\\|\\s*${id}\\s*\\|`).test(registry)) errors.push(`${rel}: ${id} belum tercatat di props/registry.md`);

  const colors = new Set([...code.matchAll(/\bc\.(main|rim|shine|ink)\b|HIGHLIGHT|"#FFFFFF"|TOPIC_COLORS\.(\w+)\.(main|rim|shine|ink)/g)].map((m) => m[0]));
  if (colors.size > 5) warnings.push(`${rel}: ${colors.size} warna unik (maksimal 5): ${[...colors].join(", ")}`);
}

for (const w of warnings) console.warn(`peringatan: ${w}`);
if (errors.length > 0) {
  console.error(`lint-props: ${errors.length} galat`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`lint-props: ok${warnings.length ? ` (${warnings.length} peringatan)` : ""}`);
