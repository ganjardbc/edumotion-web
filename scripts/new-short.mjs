#!/usr/bin/env node
// Membuat video edukasi vertikal baru (1080x1920, 30 fps) dengan struktur folder baku edumotion.
//   node scripts/new-short.mjs <NamaPascalCase> "<Judul>" --topic <topik> [--cast jantung,bumi] [--voice aldo]
//                              [--scenes Hook,Setup,Twist,Explain1,Explain2,Payoff,Cta] [--no-register]
// Struktur hasil (jangan diubah per video; aturannya ada di CLAUDE.md dan ditegakkan scripts/check-videos.mjs):
//   src/videos/<Nama>/{README.md, script.md, scenes.ts, <Nama>.tsx, index.ts, voiceover.ts, voiceover.json,
//                      voiceover-files.ts, views/{index.ts, <Scene>.tsx...}}
// lalu mendaftarkannya di src/videos/index.ts.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const VALUED = ["--topic", "--cast", "--voice", "--scenes"];
const opt = (name, fallback) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] !== undefined ? argv[i + 1] : fallback;
};
const args = argv.filter((a, i) => !a.startsWith("--") && !VALUED.includes(argv[i - 1]));
const [name, title] = args;

const TOPICS = ["tubuh", "cuaca", "ilmu", "planet", "sejarah", "teknologi", "air", "alam", "ai"];
const CAST = ["awan", "bumi", "jantung", "raka", "buku", "robo", "tetes", "claude", "ganjar", "hape", "komputer", "otak", "matahari", "baterai", "bulan", "atom", "petir", "api"];
const VOICES = ["aldo", "zulfa", "jefri", "nilasari"];
const SEGMENTS = { Hook: "hook", Setup: "setup", Twist: "twist", Explain: "explain", Payoff: "payoff", Cta: "cta" };
const fail = (msg) => {
  console.error(msg);
  process.exit(1);
};

const topic = opt("--topic");
const cast = opt("--cast", "").split(",").filter(Boolean);
const voice = opt("--voice", "aldo");
const scenes = opt("--scenes", "Hook,Setup,Twist,Explain1,Explain2,Payoff,Cta").split(",");

if (!name || !title || !/^[A-Z][A-Za-z0-9]*$/.test(name)) fail('Pakai: node scripts/new-short.mjs <NamaPascalCase> "<Judul>" --topic <topik> [--cast jantung] [--voice aldo] [--scenes ...] [--no-register]');
if (name.startsWith("_")) fail("Nama tidak boleh diawali garis bawah.");
if (!TOPICS.includes(topic)) fail(`--topic wajib salah satu dari: ${TOPICS.join(", ")}`);
for (const c of cast) if (!CAST.includes(c)) fail(`Karakter tidak dikenal: ${c}. Pilihan: ${CAST.join(", ")}`);
if (!VOICES.includes(voice)) fail(`--voice wajib salah satu dari: ${VOICES.join(", ")}`);
const segmentOf = (s) => SEGMENTS[s.replace(/\d+$/, "")];
for (const s of scenes) if (!segmentOf(s)) fail(`Nama scene tidak valid: ${s}. Pakai Hook, Setup, Twist, Explain, Explain1.., Payoff, Cta.`);
if (new Set(scenes).size !== scenes.length) fail("Nama scene harus unik.");

const dst = join(root, "src/videos", name);
if (existsSync(dst)) fail(`sudah ada: src/videos/${name}`);
const tpl = join(root, "scripts/templates/short-edu");
const fill = (s, extra = {}) => {
  const vars = { __NAME__: name, __TITLE__: title, __TOPIC__: topic, __CAST__: cast.length ? cast.join(", ") : "(hanya Tako)", __CASTLIST__: cast.map((c) => `"${c}"`).join(", "), __VOICE__: voice, ...extra };
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(k, v), s);
};
const read = (f) => readFileSync(join(tpl, f), "utf8");
const write = (f, s) => writeFileSync(join(dst, f), s);

mkdirSync(join(dst, "views"), { recursive: true });
write("README.md", fill(read("README.md.tmpl")));
write("script.md", fill(read("script.md.tmpl")));
write("scenes.ts", fill(read("scenes.ts.tmpl"), { __SCENES__: scenes.map((s) => `  { id: "${s}", segment: "${segmentOf(s)}", lines: [{ who: "tako", text: "", dur: 3 }] },`).join("\n") }));
write(`${name}.tsx`, fill(read("Video.tsx.tmpl")));
write("index.ts", fill(read("index.ts.tmpl")));
write("voiceover.ts", fill(read("voiceover.ts.tmpl")));
write("voiceover.json", '{ "lines": {} }\n');
write("voiceover-files.ts", '// Dibuat otomatis oleh scripts/vo-process.py. Jangan diubah tangan.\n\nexport const VO_FILES: Readonly<Record<string, string>> = {};\n');
for (const s of scenes) write(`views/${s}.tsx`, fill(read("scene.tsx.tmpl"), { __SCENE__: s, __SEGMENT__: segmentOf(s) }));
write(
  "views/index.ts",
  [
    "import type { SceneRenderers } from \"../../_shared/types\";",
    ...scenes.map((s) => `import { ${s} } from "./${s}";`),
    "",
    `export const RENDERERS: SceneRenderers = { ${scenes.join(", ")} };`,
    "",
  ].join("\n"),
);

if (!process.argv.includes("--no-register")) {
  const file = join(root, "src/videos/index.ts");
  let s = readFileSync(file, "utf8");
  if (!s.includes("// @videos:imports") || !s.includes("// @videos:list")) fail("Penanda @videos tidak ditemukan di src/videos/index.ts");
  s = s.replace("// @videos:imports", `import { VIDEO as ${name} } from "./${name}";\n// @videos:imports`);
  s = s.replace("  // @videos:list", `  ${name},\n  // @videos:list`);
  writeFileSync(file, s);
}
console.log(`Dibuat src/videos/${name}. Berikutnya: isi script.md, lalu scenes.ts, lalu views/. Periksa dengan: npm run lint`);
