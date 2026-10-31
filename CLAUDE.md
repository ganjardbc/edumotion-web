# edumotion-web

Proyek Remotion untuk akun animasi 2D edukasi di Instagram dan TikTok (video pendek 30–120 detik, vertikal).
Pemilik: Ganjar (Coderium). Maskot: **Tako**, ditemani 18 karakter cast. Proyek masih lokal.

## Stack dan perintah
Remotion 4 (rspack), React 19, TypeScript, ElevenLabs untuk voice over.
- `npm run dev`: Remotion Studio
- `npm run lint`: `eslint src && tsc && check-videos && lint-props` (jalankan sebelum menyatakan selesai)
- `npm run cast:export`: ekspor paket cast (SVG master, parts, manifest) ke `design-references/tako_cast/`
- `npm run build`: bundle

## Format video (disepakati)
- Kanvas **1080×1920 (9:16), 30 fps**. Durasi 30–120 detik; durasi adegan mengikuti audio VO.
- Animasi hanya bergantung pada `useCurrentFrame()`. Tidak ada `setTimeout`, CSS animation, atau `Math.random()` tanpa seed.
- Satu ide per video. Struktur: **Hook → Setup → Penjelasan → Twist → Payoff**.
- Hook maksimal 6 kata dan harus muncul di 3 detik pertama.
- Lima faktor tonton yang dijaga: rasa penasaran (curiosity gap), keterhubungan (relatable), kejutan visual, alur cerita bergerak, payoff yang memuaskan.
- Caption tersinkron dengan VO, maksimal 2 baris. Teks penting di dalam safe zone: atas 220, bawah 480, kiri 64, kanan 160 px.
- Bahasa konten: Indonesia, nada ramah dan penasaran seperti Tako (bicara dengan "aku", menyapa penonton "kamu"), kalimat pendek.
- Tako boleh salah menebak dulu, lalu dikoreksi di bagian Twist; ini ciri khas akun.

## Audiens dan posisi akun (disepakati Ganjar, 31 Okt 2026)
- **Audiens:** orang Indonesia usia 15–25 yang penasaran (SMA sampai awal kuliah); materi tetap bisa dipahami anak SMP. Belum menargetkan anak SD (nada dan aturan platform berbeda; perlu dicek dulu).
- **Posisi:** "Sains 60 detik yang bikin kamu bilang 'oh iya ya!', dijelaskan Tako."
- **Pembeda:** (1) format pendek vertikal, satu pertanyaan sehari-hari per video; (2) Tako "cerdas tapi suka salah paham": Tako menebak keliru dulu lalu dikoreksi, itu jadi bagian *Twist*; (3) satu karakter cast per pilar topik.
- **Pilar konten (karakter):** Tubuh manusia (Jantung), Bumi & antariksa (Bumi), Cuaca & air (Awan, Tetes), Teknologi (Robo), Sejarah (Raka), Fakta umum (Buku).
- **Komposisi awal:** IPA sekitar 70%, sisanya sejarah dan teknologi. Ini hipotesis kerja dari riset kecil (satu akun pembanding, sampel kecil, label dibuat sendiri); data video nyata yang menentukan, jangan diperlakukan sebagai fakta.
- **Uji A/B:** versi A Tako berbicara sendiri (suara karakter), versi B narator netral dengan visual sederhana.
- Masih terbuka: nama akun/handle, daftar topik uji, kelayakan Creator Rewards di Indonesia (belum diverifikasi), aturan platform untuk konten yang menyasar anak.
- Ringkasan riset: Claude Doc "Riset Niche IPA vs IPS: Animasi Edukasi" (https://claude.ai/artifact/WrCm3FuaeZGbqGXYJxJivL).

## Struktur video (wajib, tanpa pengecualian)
Semua video edukasi memakai struktur folder yang sama supaya video baru tidak berbeda-beda bentuknya.

**Membuat video baru, termasuk saat diminta lewat `/remotion-create`:** jangan membuat proyek baru, jangan menulis komposisi langsung di `Root.tsx`, dan jangan meniru struktur video lain secara manual. Jalankan:

```bash
npm run video:new -- <NamaPascalCase> "<Judul>" --topic <tubuh|cuaca|ilmu|planet|sejarah|teknologi|air|alam|ai> --cast <id,id> --voice <aldo|zulfa|jefri|nilasari>
```

Skrip itu membuat folder berikut dan mendaftarkannya di `src/videos/index.ts` (yang dibaca `Root.tsx`):

```
src/videos/
  index.ts                  daftar VIDEOS (diisi skrip, jangan diubah tangan)
  _shared/                  kit bersama: ShortEdu (cangkang), types, timing, voices, voiceover, video
  <Nama>/
    README.md               status dan cara render
    script.md               naskah + tabel shot + objek + fakta/sumber (sumber kebenaran, disetujui Ganjar dulu)
    scenes.ts               META dan BASE_SCENES (id, segment, lines[{who,text,dur}]); dibaca juga oleh scripts/vo-lines.mjs
    <Nama>.tsx              komposisi: <ShortEdu scenes renderers vo />
    index.ts                ekspor VIDEO (id, durasi dari audio/estimasi, 1080x1920, 30 fps)
    voiceover.ts            tiga baris: createVoiceover({ voices: { tako: VOICES.<suara> } })
    voiceover.json          manifest, dibuat otomatis oleh vo-process.py
    voiceover-files.ts      dibuat otomatis, jangan diubah tangan
    voiceover/              mp3 hasil VO (otomatis)
    views/                  satu <SceneId>.tsx per scene + index.ts (RENDERERS)
    props/                  opsional: objek khusus video ini
    assets/                 opsional: aset khusus video ini
```

Aturan:
- Nama folder = id komposisi = `META.id` (PascalCase). Id scene PascalCase dan sama dengan nama berkas di `views/`: `Hook`, `Setup`, `Twist`, `Explain`/`Explain1..n`, `Payoff`, `Cta`.
- Urutan cerita baku: Hook → Setup → Twist → Explain (satu atau lebih) → Payoff → Cta. Ubah `--scenes` hanya bila naskah memang berbeda.
- **Alur kerja:** `script.md` disetujui Ganjar → isi `scenes.ts` dari naskah → objek yang belum ada dicatat di registry (`antre`) lalu dibuat di `src/props/<domain>/` → tulis `views/` → tinjau di Studio dengan `<ShortEdu safeZone />` → VO (dengan persetujuan Ganjar) → render.
- Objek yang bisa dipakai ulang masuk `src/props/<domain>/`, komponen penjelas lintas video masuk `src/explainers/`. Folder `props/` di dalam video hanya untuk objek yang tidak akan dipakai ulang.
- Jangan menulis warna heksadesimal di `src/videos/<Nama>/`; pakai `useTheme()` atau `TOPIC_COLORS` (`src/themes/topics.ts`).
- Durasi scene mengikuti audio; sebelum audio ada, memakai `dur` dari naskah. Jangan menulis durasi tetap di komposisi.
- Caption otomatis dari `lines[].text` (dipecah maksimal 2 baris); jangan menggambar subtitle sendiri.
- `npm run lint` menjalankan eslint, tsc, dan `scripts/check-videos.mjs` (menolak struktur video yang menyimpang) dan `scripts/lint-props.mjs` (menolak props dengan hex di luar palet, keacakan, tanpa `PropFrame`, atau belum tercatat di registry). Jalankan sebelum menyatakan selesai.
- Skrip lama `new-video.mjs` dan `from-draft.mjs` sudah dipensiunkan; jangan dipakai.

## Design system (wajib diikuti)
Lokasi: `design-system/edumotion-design-system/` (baca `readme.md`, `props/STYLE.md`). Tema Remotion: `src/themes/edumotion.ts` (`theme="edumotion"`).
- Diturunkan dari gaya Tako: datar, imut, **3 nada** per objek (main, rim, shine), garis berujung bulat.
- Satu topik = satu keluarga warna (`theme.json` → `color.topics`), warna asalnya dari karakter cast. Jangan menulis hex baru di komponen; ambil dari tema atau palet topik.
- Maksimal 5 warna unik per objek; stroke objek 8, anggota badan 20. Tipografi Nunito 700/800.
- Satu sorotan (`highlight`) per adegan.
- Objek baru: ikuti `props/STYLE.md`, lalu catat di `props/registry.md` (wajib; `lint-props` gagal bila belum tercatat). Saat storyboard, pilih dari registry; objek yang belum ada ditandai `antre`, jangan digambar asal.
- Kaya visual datang dari komposisi, gerak, dan kamera, bukan dari banyaknya gambar unik. Pakai ulang objek dengan warna topik berbeda.

## Peta kode
- `src/characters/tako/`: rig Tako (`TakoCharacter`, ekspresi, animasi, `assets/palette.ts`).
- `src/characters/cast/`: 18 karakter (awan, bumi, jantung, raka, buku, robo, tetes, claude, ganjar, hape, komputer, otak, matahari, baterai, bulan, atom, petir, api). Warna topik: `claude` memakai topik `ai` (oranye); tujuh karakter pertama dan karakter baru lain memakai topik yang sudah ada atau belum punya topik sendiri (Hape, Komputer, Otak, Matahari, Baterai, Bulan, Atom, Petir, Api, dan Ganjar belum). `ganjar` adalah karakter manusia (pemilik akun), bukan pilar topik. Satu rig bersama (`CastRig`), tiap karakter berupa `CastDefinition`. Pakai `<CastCharacter id=... />`.
- `src/assets/backdrops/`: latar (`plain`, `outdoor`, `workspace`, `edu` dengan 19 jenis termasuk `laut`, `dapur`, `jalanRaya`; `sketch` untuk stickman). Waktu hari: siang/sore/malam atau 0..1. Baca `README.md` di folder itu. Blok `block` dinonaktifkan karena preview crash.
- `src/assets/camera/`: kamera virtual 2D (`ShotCamera`, `framing`, layout SplitScreen/PictureInPicture/InsertCard). Baca `README.md`.
- `src/assets/screens/`: mock layar (BrowserMock, CodeEditor, Terminal, dll.), kebanyakan untuk video coding.
- `src/themes/`: tema `edumotion` (`edumotion.ts`), `topics.ts` (`TOPIC_COLORS`, `EDU_PLAIN`, `HIGHLIGHT`).
- `src/explainers/`: Caption, HookText, Counter, PhaseBar, GuessCard, EduBack (+ `beat`), SafeZoneGuide, CorrectionCard (Twist Tako), Callout, Cutaway, BarCompare, Timeline, MetaphorSwap, Transition (`swipe`/`iris`/`bars`, belum dipasang di `ShortEdu`), ProgressDots, EndCard, ThumbnailCard. Tinjau semuanya di komposisi `ExplainersDemo` dan `ThumbnailDemo`.
- `src/props/`: objek SVG berkontrak (`PropFrame`, viewBox 800), tercatat di `props/registry.md` dan dicek `scripts/lint-props.mjs`. Folder: `body/`, `umum/`, `antariksa/`, `cuaca/`, `teknologi/`, `sejarah/`. Lembar peninjauan: Still `PropsSheet`.
- `src/assets/effects/`: Confetti, Sparkle, SpeedLines, PopBurst, Bubbles (deterministik, `seeded`). Demo: `EffectsDemo`.
- `src/videos/`: video edukasi, lihat "Struktur video".
- `src/Root.tsx`: mendaftarkan demo (`TakoCastDemo`, `ExplainersDemo`, `EffectsDemo`, Still `PropsSheet`, `ThumbnailDemo`, `EduBackdrops`, `TakoCastExpressions`) dan semua video dari `VIDEOS`; jangan menambah komposisi video langsung di sini.

## Kondisi saat ini dan celah
- Video pertama: `JantungTidakCapek` (naskah disetujui; visual draf pertama selesai; VO belum dibuat, durasi memakai estimasi naskah sekitar 46 detik). Belum ditinjau Ganjar di Studio.
- Pratinjau visual dirender di lingkungan tanpa akses Google Fonts, jadi tipografi Nunito belum terlihat; periksa di Studio.
- Topik `ai` ditambahkan untuk karakter Claude (`TOPIC_COLORS`, `theme.json`, `new-short.mjs`). Daftar pilar konten di atas belum memuat AI atau "Sains dasar" (Atom, Api); itu keputusan posisi akun yang menunggu Ganjar.
- Props topik (antariksa, cuaca, teknologi, sejarah) dibuat di muka tanpa naskah yang memintanya; hapus yang tidak terpakai bila perlu.
- Belum ada: SFX dan musik latar, peta suara untuk narator versi B yang sudah diuji, pemasangan `Transition` ke `ShortEdu`.
- Sebagian dokumentasi (backdrops, camera) menyebut video dan karakter stickman dari proyek lama (SejarahAIStory, ProgrammerBodoh) yang tidak ada di `src/` saat ini. Perlakukan sebagai referensi, bukan kode yang tersedia.
- Klaim jalur darah sendiri (arteri koroner) di video jantung belum bersumber; verifikasi sebelum publikasi.

## Voice over (ElevenLabs) dan keamanan
- `scripts/vo-generate.mjs --video <Nama>` memakai kredit ElevenLabs berbayar. **Tampilkan jumlah baris dan huruf, lalu minta persetujuan Ganjar sebelum menjalankan**; jangan memakai `--yes` tanpa izin.
- `.env.local` berisi API key. Jangan dibaca, dicetak, di-commit, atau disalin ke tempat lain.
- `scripts/vo-lines.mjs --video <Nama>` (daftar baris dan status, tanpa kredit), `vo-generate.mjs --video <Nama>` (memakai kredit), `vo-process.py` (olah audio, tulis manifest); keluaran mentah ada di `out/vo-raw/`. Kontraknya: `scenes.ts` mengekspor `BASE_SCENES`, `voiceover.ts` mengekspor `VO_VOICES`, `VO_MODEL`, `VO_SPEED`, `VO_MANIFEST`, `lineId`, `ttsText`.
- **Suara (ElevenLabs, bahasa Indonesia):**
  - Suara Tako: **Aldo** `H7dnu83omjrDrtfihMsb` dan **Zulfa** `qXOoUJU1h7AiwSe4ltRA`. Keduanya sudah didengar dan disetujui Ganjar; pilihan akhir per video ditentukan Ganjar (belum ada aturan tetap).
  - Narator netral (versi B): usulan **Jefri** `1ijzBXcD3AIVH8RGMcQd`, belum didengar atau disetujui. Cadangan: Nilasari `NPDHDOOQCSyifTJZOe6J`.
  - Ari Eko `Se50W0zoqlDUbFxvcN9h` hanya untuk video dialog bertema coding, bukan untuk edumotion.
  - Katalog suara ada di `src/videos/_shared/voices.ts`; video memilihnya lewat `--voice` saat scaffold. Jangan menulis voice id di tempat lain. Peta lama (`ganjar`, `robot`) berasal dari proyek video lain dan sudah tidak dipakai.
  - Tes suara hanya dengan persetujuan Ganjar (kredit berbayar).

## Cara bekerja dengan Ganjar
- Ganjar berbicara bahasa Indonesia; gunakan "aku" dan "kamu" (bukan "gue/lo"), nada hangat seperti mentor.
- Ganjar tech lead frontend (JavaScript/TypeScript); boleh teknis, tapi jelaskan alasan keputusan desain.
- Usulkan arah dulu untuk keputusan besar (gaya visual, posisi akun, struktur), lalu bangun setelah disetujui. Untuk hal kecil, kerjakan dan laporkan.
- Verifikasi sebelum menyatakan selesai: `npm run lint`, dan lihat hasil di Remotion Studio untuk perubahan visual.
