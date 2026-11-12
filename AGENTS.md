# AGENTS.md

Konteks project untuk agent AI apa pun (Claude Code, Codex, Pi, Antigravity, Cursor, dll.). Baca ini dulu, lalu buka berkas rujukan sesuai tugas.

## Apa project ini
`edumotion-web` adalah generator video animasi 2D edukasi untuk akun Instagram dan TikTok milik Ganjar (Coderium): video pendek vertikal 30–120 detik, 1080×1920, 30 fps. Remotion 4 (rspack), React 19, TypeScript, ElevenLabs untuk voice over.

Format video: **satu narator** menjelaskan dengan bahasa Indonesia yang mudah dipahami. **Tema visual dipilih per video** (kertas berpetak atau Dark Chalk) dan tidak punya bawaan: **bila permintaan belum menyebut tema, tanyakan ke Ganjar dulu**. **Karakter di layar bukan bawaan**: tambahkan pembawa (stickman Ganjar) atau cast hanya bila diminta. Alur cerita: Hook → Setup → Twist → Penjelasan → Payoff → Ajakan.

Tema alternatif yang sedang dicoba: **Dark Chalk Storytelling** (papan tulis hijau berbingkai kayu, garis kapur, aksen emas), diaktifkan dengan `tema="dark-chalk"` pada `ShortEdu`; video pertama `EsBatuMengapung` tanpa tokoh. Rinciannya di bagian "Tema alternatif" `CLAUDE.md` dan `src/dark-chalk/README.md`.

- Jangan dicampur dengan `remotion-web` (akun personal branding, proyek terpisah).
- Bahasa pengantar kerja dengan pemilik: Indonesia, gunakan "aku" dan "kamu". Komentar kode dan teks UI dalam Bahasa Indonesia.

## Berkas rujukan (sumber kebenaran)
| Butuh | Baca |
|---|---|
| Aturan lengkap: format video, audiens, struktur folder video, visual penjelas, voice over, cara bekerja dengan Ganjar, kondisi saat ini | [CLAUDE.md](CLAUDE.md) (nama berkasnya khusus Claude, isinya berlaku untuk semua agent) |
| Cara mengerjakan tugas tertentu | Skill di `.agents/skills/` (tabel di bawah) |
| Warna, huruf, objek (props), kontrak gaya, daftar objek dan statusnya | `design-system/edumotion-design-system/` (`readme.md`, `props/STYLE.md`, `props/registry.md`) |
| Pola penjelas dan contoh pemakaian | `src/explainers/pola/`, contoh lengkap di `src/videos/LangitBiru/views/` dan `src/videos/BateraiCepatHabis/views/` |
| Tema Dark Chalk (papan, kapur, objek, pola kapur) | `src/dark-chalk/README.md`, contoh `src/videos/EsBatuMengapung/views/` |
| Latar, kamera | `src/assets/backdrops/README.md`, `src/assets/camera/README.md` |
| Perintah dan struktur folder | [README.md](README.md) |

## Skill
Sumber utama ada di `.agents/skills/` (`.claude/skills/` hanya symlink ke sana). Agent yang memuat skill otomatis dari folder itu akan menemukannya; kalau agent-mu tidak, buka `SKILL.md`-nya sendiri sebelum mengerjakan tugasnya.

| Skill | Pakai saat |
|---|---|
| `edumotion-video` | Membuat atau mengubah video apa pun (pintu masuk wajib; menjamin struktur folder `src/videos/<Nama>`) |
| `edumotion-naskah` | Menulis atau merevisi `script.md`, brief visual, baris narasi di `scenes.ts`, atau mencari ide topik |
| `edumotion-vo` | Membuat, membuat ulang, atau menguji voice over ElevenLabs (berbayar, wajib persetujuan) |
| `remotion-best-practices`, `remotion-markup`, `remotion-captions`, `remotion-render`, `remotion-studio`, `remotion-docs`, `remotion-upgrade`, `remotion-create` | Teknik Remotion (animasi, urutan, audio, render). `remotion-create` jangan dipakai untuk membuat proyek baru; proyek ini sudah ada |

## Aturan yang paling sering dilanggar
1. **Video baru hanya lewat** `npm run video:new -- <NamaPascalCase> "<Judul>" --topic <topik> --tema <kertas|dark-chalk> [--cast <id,id>] --voice aldo` (`--tema` wajib; tanyakan ke Ganjar bila belum jelas). Jangan menulis komposisi di `Root.tsx` dan jangan menyalin video lain dengan tangan.
2. **Gerbang persetujuan.** Urutan: `script.md` (naskah + brief visual) → persetujuan Ganjar → `scenes.ts` → `views/` → lembar storyboard → persetujuan Ganjar → voice over (persetujuan lagi) → render. Berhenti dan laporkan di tiap gerbang; jangan melompat sendiri.
3. Semua kalimat `who: "narator"`. Tokoh di layar tidak berbicara.
4. Tema kertas: latar `<EduBackdrop topic={META.topic} />`; tema Dark Chalk: papan digambar `ShortEdu`, view hanya menggambar isi. Tanpa karakter kecuali diminta; bila diminta, `<Pembawa topic={META.topic} />` hanya di Hook, Twist, Payoff, Cta. Tako tidak tampil di video.
5. Scene Setup dan Explain memakai **pola** dari `src/explainers/pola` (Bandingkan, Langkah, SebabAkibat, Sorot, AngkaBesar, Koreksi). Poin terpenting video = scene `Kunci` (layar penuh tanpa karakter, paling banyak 2).
6. Gerak dipicu kata narator lewat `at("kata")` (dari `SceneProps`), bukan pecahan durasi atau angka frame tetap. Animasi hanya dari `useCurrentFrame()`; tanpa `setTimeout`, CSS animation, atau `Math.random()` tanpa seed. Durasi scene mengikuti audio.
7. Tanpa warna heksadesimal di `src/videos/<Nama>/`; pakai `useTheme()` atau `TOPIC_COLORS`.
8. SFX paling banyak satu per scene dan empat per video.
9. Bahasa narasi sederhana: kalimat pendek (sekitar 12 kata), satu gagasan per kalimat, istilah langsung dijelaskan, menyapa penonton "kamu". Tiap klaim fakta punya sumber di `script.md`.
10. Objek (props) berstatus `antre` → `draf` → `disetujui` di `props/registry.md`. Hanya Ganjar yang mengubah ke `disetujui`.
11. **Voice over memakai kredit berbayar.** `scripts/vo-generate.mjs` hanya dijalankan setelah Ganjar menyetujui jumlah baris dan huruf. Jangan membaca, mencetak, meng-commit, atau menyalin `.env.local`.

## Verifikasi sebelum menyatakan selesai
- `npm run lint` (eslint + tsc + pemeriksa struktur video + pemeriksa props). Peringatan boleh ada, galat tidak.
- Agent tanpa Remotion Studio: render lembar storyboard dan lihat gambarnya, `npx remotion still src/index.ts <Nama>-Storyboard out/<Nama>-storyboard.png`. Untuk menilai tempo sebelum visual jadi, tambahkan `--props='{"animatic":true}'` pada `remotion still` atau nyalakan prop `animatic` di Studio.

## Perintah dan batasan
- `npm i`, `npm run dev` (Remotion Studio), `npm run lint`, `npm run video:new`, `npm run cast:export`, `npm run build`.
- Voice over butuh `python3` dan `ffmpeg`; contoh perintah ada di skill `edumotion-vo`.
- Jangan commit: `out/`, `.env.local`, `node_modules/`. Commit hanya bila diminta, dengan pesan berbahasa Indonesia gaya `feat(<ruang>): ...`.
- Bila aturan berubah, perbarui `CLAUDE.md` dan skill yang bersangkutan (sumber kebenaran), bukan hanya berkas ini.
