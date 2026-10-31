#!/usr/bin/env node
// Memeriksa struktur folder src/videos terhadap aturan baku edumotion (lihat "Struktur video" di CLAUDE.md).
//   node scripts/check-videos.mjs        (dijalankan oleh `npm run lint`)
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const videosDir = join(root, "src/videos");
const errors = [];
const err = (video, msg) => errors.push(`src/videos/${video}: ${msg}`);

const walk = (dir) => readdirSync(dir).flatMap((n) => (statSync(join(dir, n)).isDirectory() ? walk(join(dir, n)) : [join(dir, n)]));
const registry = readFileSync(join(videosDir, "index.ts"), "utf8");

const videos = readdirSync(videosDir).filter((n) => statSync(join(videosDir, n)).isDirectory() && n !== "_shared");
for (const v of videos) {
  const dir = join(videosDir, v);
  if (!/^[A-Z][A-Za-z0-9]*$/.test(v)) err(v, "nama folder harus PascalCase");

  const required = ["README.md", "script.md", "scenes.ts", `${v}.tsx`, "index.ts", "voiceover.ts", "voiceover.json", "voiceover-files.ts", "views/index.ts"];
  for (const f of required) if (!existsSync(join(dir, f))) err(v, `berkas wajib tidak ada: ${f}`);

  // Isi folder: hanya berkas wajib dan folder baku.
  const allowedTop = new Set([...required.map((f) => f.split("/")[0]), "voiceover", "props", "assets"]);
  for (const n of readdirSync(dir)) if (!allowedTop.has(n)) err(v, `berkas atau folder di luar aturan: ${n} (boleh: ${[...allowedTop].join(", ")})`);

  const scenesFile = join(dir, "scenes.ts");
  if (existsSync(scenesFile)) {
    const src = readFileSync(scenesFile, "utf8");
    if (!/export const BASE_SCENES/.test(src)) err(v, "scenes.ts harus mengekspor BASE_SCENES");
    if (!new RegExp(`id: "${v}"`).test(src)) err(v, `META.id di scenes.ts harus "${v}"`);
    const ids = [...src.matchAll(/\{\s*id:\s*"([A-Za-z0-9]+)",\s*segment:/g)].map((m) => m[1]);
    if (!ids.length) err(v, "BASE_SCENES kosong atau formatnya tidak dikenali");
    const index = existsSync(join(dir, "views/index.ts")) ? readFileSync(join(dir, "views/index.ts"), "utf8") : "";
    for (const id of ids) {
      if (!existsSync(join(dir, `views/${id}.tsx`))) err(v, `scene ${id} tidak punya views/${id}.tsx`);
      if (!new RegExp(`\\b${id}\\b`).test(index)) err(v, `scene ${id} belum terdaftar di views/index.ts`);
    }
    for (const f of existsSync(join(dir, "views")) ? readdirSync(join(dir, "views")) : []) {
      const id = f.replace(/\.tsx$/, "");
      if (f !== "index.ts" && f.endsWith(".tsx") && !ids.includes(id)) err(v, `views/${f} tidak dipakai scene mana pun di BASE_SCENES`);
    }
  }

  const reg = new RegExp(`import \\{ VIDEO as ${v} \\} from "\\./${v}"`);
  if (!reg.test(registry)) err(v, "belum terdaftar di src/videos/index.ts (jalankan lewat scripts/new-short.mjs)");

  // Tanpa warna heksadesimal baru di kode video; pakai tema atau TOPIC_COLORS.
  for (const f of walk(dir).filter((p) => /\.(ts|tsx)$/.test(p) && !p.includes("/voiceover/"))) {
    const hit = readFileSync(f, "utf8").match(/#[0-9a-fA-F]{6}\b/);
    if (hit) err(v, `${relative(dir, f)} memakai warna heksadesimal ${hit[0]}; ambil dari useTheme() atau TOPIC_COLORS`);
  }
}

// Registry tidak boleh menunjuk video yang tidak ada.
for (const m of registry.matchAll(/import \{ VIDEO as (\w+) \} from "\.\/(\w+)"/g)) if (!videos.includes(m[2])) errors.push(`src/videos/index.ts: mengimpor ${m[2]} yang tidak ada`);

if (errors.length) {
  console.error(`Struktur video tidak sesuai aturan (${errors.length} masalah):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Struktur video OK (${videos.length} video).`);
