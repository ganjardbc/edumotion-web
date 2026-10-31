// Mengekspor paket rig karakter pendukung ke design-references/tako_cast/<id>/ dari definisi di src/characters/cast,
// dengan format yang sama seperti tako_svg_rig_pack. Jalankan: npm run cast:export
// expressions.png dibuat terpisah dari komposisi TakoCastExpressions.
import { build } from "esbuild";
import { createRequire } from "node:module";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outfile = join(root, "node_modules/.cache/tako-cast/pack.cjs");
await build({ entryPoints: [join(root, "src/characters/cast/pack.ts")], bundle: true, platform: "node", format: "cjs", packages: "external", outfile, logLevel: "error" });
const { CAST, CastFace, CastRig, NEUTRAL_POSE } = createRequire(import.meta.url)(outfile);

const markup = (el) => `${renderToStaticMarkup(h("svg", { xmlns: "http://www.w3.org/2000/svg", width: 800, height: 800, viewBox: "0 0 800 800" }, el))}\n`;

for (const def of CAST) {
  const dir = join(root, "design-references/tako_cast", def.id);
  rmSync(join(dir, "parts"), { recursive: true, force: true });
  mkdirSync(join(dir, "parts"), { recursive: true });

  const parts = {
    leg_left: def.legs.left,
    leg_right: def.legs.right,
    ...(def.back ? { back: def.back } : {}),
    body: { part: def.body },
    ...(def.topper ? { topper: def.topper } : {}),
    arm_left: def.arms.left,
    arm_right: def.arms.right,
  };
  for (const [name, { part }] of Object.entries(parts)) writeFileSync(join(dir, "parts", `${name}.svg`), markup(h(part)));
  writeFileSync(join(dir, "parts", "face_happy.svg"), markup(h(CastFace, { face: def.face, expression: "happy", pose: NEUTRAL_POSE, clipBase: def.id })));
  if (def.extras) writeFileSync(join(dir, "parts", "extras.svg"), markup(h(def.extras)));

  writeFileSync(join(dir, `${def.id}_master.svg`), markup(h(CastRig, { def, pose: NEUTRAL_POSE, expression: "happy", clipBase: def.id, float: 0 })));

  const layers = [...Object.keys(parts), "face", ...(def.extras ? ["extras"] : [])];
  const pivots = Object.fromEntries(Object.entries(parts).filter(([, p]) => p.pivot).map(([n, p]) => [n, p.pivot]));
  writeFileSync(
    join(dir, "rig_manifest.json"),
    `${JSON.stringify({ character: def.name, topic: def.topic, canvas: { width: 800, height: 800, viewBox: "0 0 800 800" }, ground: [400, 730], palette: def.colors, layers_back_to_front: layers, pivots, face: def.face, marks: def.marks }, null, 2)}\n`,
  );

  writeFileSync(
    join(dir, "README.md"),
    `# ${def.name} (${def.topic})

${def.brief}

Dibuat dari \`reference.png\`, potongan \`../tako_supporting_sheet.png\`. File di folder ini hasil ekspor; sumbernya \`src/characters/cast/characters/${def.id}.tsx\`. Jangan sunting manual, jalankan \`npm run cast:export\`.

## File
- \`${def.id}_master.svg\`: karakter lengkap, ekspresi Senang.
- \`parts/\`: bagian terpisah dengan viewBox 800x800 yang sama.
- \`rig_manifest.json\`: palet, urutan lapisan, pivot, spesifikasi wajah.
- \`expressions.png\`: 10 ekspresi.

## Beda dari referensi
${def.deviations.map((d) => `- ${d}`).join("\n")}
`,
  );
}
console.log(`Diekspor: ${CAST.map((c) => c.id).join(", ")}`);
