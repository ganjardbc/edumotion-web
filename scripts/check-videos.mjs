#!/usr/bin/env node
// Memeriksa struktur folder src/videos terhadap aturan baku edumotion (lihat "Struktur video" di CLAUDE.md).
//   node scripts/check-videos.mjs        (dijalankan oleh `npm run lint`)
import { transform } from "esbuild";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const videosDir = join(root, "src/videos");
const errors = [];
const warnings = [];
const err = (video, msg) => errors.push(`src/videos/${video}: ${msg}`);

// Aturan konsep (lihat "Format video" di CLAUDE.md): narator sebagai satu-satunya suara, SFX hemat, latar polos.
const NARRATOR = "narator";
const MAX_SFX_PER_SCENE = 1;
const MAX_SFX_PER_VIDEO = 4;
const MAX_SFX_REPEAT = 4;
const ALLOWED_BACKDROPS = ["polos"];

// scenes.ts hanya mengimpor tipe, jadi cukup ditranspilasi lalu diimpor untuk membaca BASE_SCENES apa adanya.
const tmp = join(root, "node_modules", ".check-videos-tmp");
const loadScenes = async (video, file) => {
  mkdirSync(tmp, { recursive: true });
  const out = join(tmp, `${video}.mjs`);
  writeFileSync(out, (await transform(readFileSync(file, "utf8"), { loader: "ts", format: "esm" })).code);
  return (await import(pathToFileURL(out).href)).BASE_SCENES;
};
const voiceCatalog = Object.fromEntries([...readFileSync(join(videosDir, "_shared/voices.ts"), "utf8").matchAll(/(\w+): \{ id: "(\w+)"/g)].map((m) => [m[1], m[2]]));
const propStatus = Object.fromEntries([...readFileSync(join(root, "design-system/edumotion-design-system/props/registry.md"), "utf8").matchAll(/^\|\s*([A-Z]\w*)\s*\|.*\|\s*([\w-]+)\s*\|\s*$/gm)].map((m) => [m[1], m[2]]));
const MAX_CUTAWAY = 2;
const voModel = readFileSync(join(videosDir, "_shared/voices.ts"), "utf8").match(/DEFAULT_MODEL = "([^"]+)"/)?.[1];

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

  if (existsSync(scenesFile) && /export const BASE_SCENES/.test(readFileSync(scenesFile, "utf8"))) {
    const scenes = await loadScenes(v, scenesFile);
    let cues = 0;
    for (const sc of scenes) {
      for (const l of sc.lines) if (l.who !== NARRATOR) err(v, `scene ${sc.id}: who "${l.who}" tidak boleh; semua kalimat dibawakan "${NARRATOR}"`);
      const sfx = sc.sfx ?? [];
      cues += sfx.length;
      if (sfx.length > MAX_SFX_PER_SCENE) err(v, `scene ${sc.id}: ${sfx.length} cue SFX (maksimal ${MAX_SFX_PER_SCENE} per scene)`);
      for (const c of sfx) if ((c.times ?? 1) > MAX_SFX_REPEAT) err(v, `scene ${sc.id}: SFX ${c.sfx} diulang ${c.times} kali (maksimal ${MAX_SFX_REPEAT})`);
    }
    if (cues > MAX_SFX_PER_VIDEO) err(v, `${cues} cue SFX (maksimal ${MAX_SFX_PER_VIDEO} per video)`);

    // Audio yang teksnya sudah berubah akan tetap terputar dengan caption baru; beri peringatan supaya dibuat ulang.
    const voSrc = existsSync(join(dir, "voiceover.ts")) ? readFileSync(join(dir, "voiceover.ts"), "utf8") : "";
    const voiceId = voiceCatalog[voSrc.match(/narator: VOICES\.(\w+)/)?.[1]];
    const manifest = existsSync(join(dir, "voiceover.json")) ? JSON.parse(readFileSync(join(dir, "voiceover.json"), "utf8")).lines : {};
    if (voiceId && voModel)
      for (const sc of scenes)
        sc.lines.forEach((l, i) => {
          const entry = manifest[`${sc.id}-${i + 1}`];
          const hash = createHash("sha1").update(`${voiceId}|${voModel}|${l.tts ?? l.text}`).digest("hex").slice(0, 12);
          if (entry && entry.hash !== hash) warnings.push(`src/videos/${v}: audio ${sc.id}-${i + 1} usang (teks atau suara berubah); buat ulang VO atau hapus dari voiceover.json`);
        });
  }

  // Kata kunci at("...") di views harus ada di narasi scene-nya; tanpa ini salah ketik baru ketahuan saat Studio galat.
  if (existsSync(scenesFile) && /export const BASE_SCENES/.test(readFileSync(scenesFile, "utf8"))) {
    const scenes = await loadScenes(v, scenesFile);
    const norm = (w) => w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
    const words = (t) => t.split(/\s+/).map(norm).filter(Boolean);
    for (const sc of scenes) {
      const f = join(dir, `views/${sc.id}.tsx`);
      if (!existsSync(f)) continue;
      const lines = sc.lines.map((l) => words(l.text));
      for (const m of readFileSync(f, "utf8").matchAll(/\bat\(\s*"([^"]+)"/g)) {
        const target = words(m[1]);
        const found = lines.some((ws) => ws.some((_, i) => target.every((t, k) => ws[i + k] === t)));
        if (!found) err(v, `views/${sc.id}.tsx: at("${m[1]}") tidak ada di narasi scene ${sc.id}`);
      }
    }

    // Cutaway: sisipan layar penuh untuk poin penting, hemat dan pendek.
    const cuts = scenes.filter((sc) => sc.cutaway);
    if (cuts.length > MAX_CUTAWAY) err(v, `${cuts.length} cutaway (maksimal ${MAX_CUTAWAY} per video)`);
    for (const sc of cuts) {
      const cw = sc.cutaway;
      const lines = sc.lines.map((l) => words(l.text));
      const inScene = (kata) => { const target = words(kata); return lines.some((ws) => ws.some((_, i) => target.every((t, k) => ws[i + k] === t))); };
      if (sc.segment === "hook" || sc.segment === "cta") err(v, `scene ${sc.id}: cutaway tidak dipakai di ${sc.segment}`);
      if (cw.judul.split(/\s+/).length > 6) err(v, `scene ${sc.id}: judul cutaway "${cw.judul}" lebih dari 6 kata`);
      for (const kata of [cw.at, cw.sampai].filter(Boolean)) if (!inScene(kata)) err(v, `scene ${sc.id}: kata cutaway "${kata}" tidak ada di narasi scene`);
    }

    // Peringatan visual (lihat "Pola penjelas" di CLAUDE.md).
    const draf = new Set();
    for (const sc of scenes) {
      const f = join(dir, `views/${sc.id}.tsx`);
      if (!existsSync(f)) continue;
      const src = readFileSync(f, "utf8");
      const rel = `views/${sc.id}.tsx`;
      if ((sc.segment === "explain" || sc.segment === "setup") && /<TakoCharacter\b/.test(src)) warnings.push(`src/videos/${v}: ${rel} memakai Tako di scene ${sc.segment}; Tako hanya di Hook, Twist, Payoff, Cta`);
      if (sc.segment === "explain" && !/explainers\/pola"/.test(src)) warnings.push(`src/videos/${v}: ${rel} tidak memakai pola penjelas (explainers/pola)`);
      if (/fontSize\s*:/.test(src)) warnings.push(`src/videos/${v}: ${rel} menulis fontSize sendiri; pakai Judul atau pola (skala TEKS)`);
      const imp = src.match(/import \{([^}]+)\} from "\.\.\/\.\.\/\.\.\/props"/);
      for (const name of imp ? imp[1].split(",").map((x) => x.trim()).filter(Boolean) : []) if (propStatus[name] === "draf") draf.add(name);
    }
    if (draf.size) warnings.push(`src/videos/${v}: objek berstatus draf (belum disetujui Ganjar di PropsSheet): ${[...draf].sort().join(", ")}`);
  }

  // Latar polos saja di video (KISS). Latar lain tetap ada di pustaka, tetapi tidak dipakai video.
  for (const f of existsSync(join(dir, "views")) ? walk(join(dir, "views")).filter((p) => p.endsWith(".tsx")) : []) {
    const src = readFileSync(f, "utf8");
    for (const m of src.matchAll(/<EduBackdrop\b[^>]*\bkind=(?:"(\w+)"|\{)/g)) if (!ALLOWED_BACKDROPS.includes(m[1])) err(v, `${relative(dir, f)} memakai latar ${m[1] ?? "dinamis"}; video hanya memakai latar polos (<EduBackdrop topic={META.topic} />)`);
    const other = src.match(/<(PlainBack|OutdoorBack|RoomBack|SketchBack|BlockBack)\b/);
    if (other) err(v, `${relative(dir, f)} memakai ${other[1]}; pakai <EduBackdrop topic={META.topic} />`);
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

rmSync(tmp, { recursive: true, force: true });
if (warnings.length) console.warn(`Peringatan (${warnings.length}):\n- ${warnings.join("\n- ")}`);
if (errors.length) {
  console.error(`Struktur video tidak sesuai aturan (${errors.length} masalah):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Struktur video OK (${videos.length} video).`);
