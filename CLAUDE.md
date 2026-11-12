# edumotion-web

Proyek Remotion untuk akun animasi 2D edukasi di Instagram dan TikTok (video pendek 30–120 detik, vertikal).
Pemilik: Ganjar (Coderium). Konsep utama: **video narator** (satu suara narator menjelaskan). Tema visual dipilih per video: **kertas berpetak** (stickman Ganjar sebagai pembawa bila diminta) atau **Dark Chalk** (papan tulis kapur). **Tidak ada tema bawaan dan tidak ada karakter bawaan** (lihat "Pemilihan tema dan karakter"). Tako dan 18 karakter cast tetap ada di kode; Tako tidak tampil lagi di video. Proyek masih lokal.

Ringkasan untuk agent lain (Codex, Pi, Antigravity, dll.): [AGENTS.md](AGENTS.md). Skill proyek ada di `.agents/skills/`; `.claude/skills/` hanya symlink ke sana.

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
- **Narator (konsep utama, diputuskan Ganjar 11 Nov 2026):** semua kalimat dibawakan satu narator (`who: "narator"`). Bila Ganjar meminta tokoh, pembawa (stickman Ganjar) atau cast tampil di layar sebagai pemeran yang bereaksi (berpikir, kaget, senang), tidak berbicara.
- **Pemilihan tema dan karakter (diputuskan Ganjar 12 Nov 2026, wajib):** (1) Tema dipilih per video dan tidak punya bawaan: **tanyakan ke Ganjar bila permintaannya belum menyebut tema** (kertas berpetak atau Dark Chalk). `video:new` menolak berjalan tanpa `--tema`. (2) **Karakter di layar bukan bawaan**: video dibuat tanpa tokoh kecuali Ganjar memintanya; Hook, Twist, Payoff, dan Cta lalu berupa gambar atau objek beranimasi. Bila diminta, ikuti aturan pembawa di bawah.
- **Bahasa:** Indonesia yang mudah dipahami. Kalimat pendek (sekitar 12 kata), satu gagasan per kalimat, kata sehari-hari, menyapa penonton "kamu". Istilah ilmiah hanya bila perlu dan langsung dijelaskan ("mitokondria, yaitu pabrik energi kecil di dalam sel"). Hindari kata serapan yang berat ("dihamburkan" → "disebarkan"). Fokus pada penjelasan, bukan lelucon.
- **Twist:** narator menyebut tebakan umum yang keliru ("Banyak orang mengira …") di Setup, lalu mengoreksinya di Twist; ini ciri khas akun.
- **Format stickman (diputuskan Ganjar 12 Nov 2026; berlaku untuk tema kertas berpetak):**
  - **Latar kertas berpetak (KISS):** semua scene memakai `<EduBackdrop topic={META.topic} />` (bawaan `kertas`: putih hangat, petak tipis tinta topik, tanpa dekor dan tanpa gerak). Konteks ditunjukkan lewat objek dan label, bukan latar.
  - **Pembawa (hanya bila diminta):** `<Pembawa topic={META.topic} />` dari `src/characters/ganjar` (stickman Ganjar berambut tiga garis; hoodie, celana pendek, dan tali hoodie memakai warna topik video). `TakoCharacter` ditolak lint di video.
  - **Akting satu badan penuh** (dipinjam dari panduan B1 stickman-video-director, gagasan saja): tiap momen pembawa punya `ekspresi` dan `gestur` yang sesuai makna kalimat (kaget + menyerah, mikir + tangan di dagu, senang + tunjuk ke jawaban, tertawa + sorak). Ekspresi dibuat jelas dan bervariasi; jangan satu wajah sepanjang video.
  - **Teks besar dan pendek di dalam adegan** (Judul pola, paling banyak 6 kata) jadi fokus; caption lebih tenang di bawah.
  - **Gambar terus maju:** gambar utama berganti atau bertambah paling lambat tiap sekitar 2,5 detik, dengan jeda tenang setelah aksi.
- **SFX hemat:** paling banyak satu cue per scene dan empat per video, pengulangan (`times`) paling banyak empat. Pakai hanya di momen penting (Hook, Twist, Payoff). Tanpa `whoosh` di tiap pergantian scene.

## Visual penjelas (disepakati Ganjar, 12 Nov 2026)
Masalah yang dihindari: gambar jelek, tata letak berantakan, visual tidak nyambung dengan narasi.
- **Brief visual dulu.** Tiap scene di `script.md` punya kolom Pola, Objek utama, Label (paling banyak 3, tiap label paling banyak 3 kata), dan "kata kunci → aksi". Brief disetujui Ganjar bersama naskah, sebelum ada kode.
- **Pola penjelas wajib untuk scene Setup dan Explain** (`src/explainers/pola`): `Bandingkan` (A vs B, baris atau kolom), `Langkah` (2–4 butir bernomor), `SebabAkibat`, `Sorot` (satu objek besar + paling banyak 3 penanda), `AngkaBesar`, dan `Koreksi` untuk Twist. Satu pola per fase (`Fase`), paling banyak dua fase per scene. Pola sudah menetapkan zona (judul y 250, panggung y 460–1240, lebar 160–920) dan skala huruf (`TEKS`); views tidak menulis `fontSize` atau posisi bebas sendiri.
- **Karakter (hanya bila diminta):** pembawa tampil penuh hanya di Hook, Twist, Payoff, Cta. Di Setup/Explain tidak ada pembawa (cast boleh sebagai gambar di dalam pola, mis. Matahari). Tanpa permintaan, tidak ada karakter sama sekali.
- **Kunci (frame layar penuh):** untuk poin terpenting video, buat scene tersendiri dengan id `Kunci` (segment `explain`, boleh `Kunci2`), bukan lapisan di atas scene lain. Kalimat kuncinya dipisah menjadi baris/scene sendiri di `scenes.ts`. View memakai pola `Kunci` dari `src/explainers/pola` (judul paling banyak 6 kata dengan satu kata disorot, satu gambar besar yang boleh beranimasi, keterangan pendek, `warna` untuk keluarga warna latar, mis. merah untuk panas), layar penuh tanpa karakter dan tanpa Pembawa. Paling banyak 2 per video. Contoh: `src/videos/BateraiCepatHabis/views/Kunci.tsx`. Mekanisme cutaway lama (field `cutaway` di `scenes.ts`) sudah dihapus.
- **Objek (props):** status di registry `antre` → `draf` → `disetujui`. Konsep sulit digambar dari acuan (`design-references/props/<id>.*`). Hanya Ganjar yang mengubah status ke `disetujui`.
- **Gerbang storyboard:** setelah `views/` ditulis, render `<Nama>-Storyboard`, lihat gambarnya, perbaiki, lalu minta Ganjar menyetujui sebelum menganggap visual selesai. `npm run lint` memberi peringatan untuk pembawa di Setup/Explain, Explain tanpa pola, `fontSize` di views, dan objek `draf`.

## Tema alternatif: Dark Chalk Storytelling (dicoba 12 Nov 2026)
Papan tulis hijau (varian navy tersedia) dengan bingkai kayu, garis kapur putih, dan aksen emas. Dipilih Ganjar sebagai tema percobaan; video pertama `EsBatuMengapung`. Tema ini pilihan per video, bukan bawaan; tema kertas berpetak juga bukan bawaan.
- **Cara pakai:** komposisi video memasang `<ShortEdu ... tema="dark-chalk" />` (dipasang otomatis oleh `video:new --tema dark-chalk`; prop `tema` di cangkang bawaannya `kertas` hanya untuk video lama). Cangkang menggambar papan bertekstur plus bingkai di belakang dan membungkus tiap scene dengan filter kapur (garis bergetar dan berbutir), jadi **view scene hanya menggambar isi**: tanpa `EduBackdrop`. Caption otomatis memakai tema `dark-chalk` (`src/themes/dark-chalk.ts`).
- **Pustaka:** `src/dark-chalk/` (baca README di sana): papan dan bingkai (PNG dirender sekali dari `TeksturPapan` dan `BingkaiKayu`), `Garis` (garis digambar), `Teks`, `Label`, `Kanvas` dan `Pop`, objek (`GelasAir`, `KubusEs`, `Batu`, `Molekul`/`MedanMolekul`), pola kapur di `src/dark-chalk/pola` (`SebabAkibat`, `Koreksi`, `Sorot`, `Bandingkan`, `Langkah`, `Kunci`; tata letak sama dengan pola biasa), dan tokoh `GanjarGaris` (stickman garis kapur, topi dan mantel detektif Sherlock Holmes) serta `GanjarDatar` (datar berkaos). Pakai warna dari `KAPUR` (`src/dark-chalk/palette.ts`).
- **Tanpa tokoh diperbolehkan:** `EsBatuMengapung` tidak memakai pembawa maupun cast; Hook, Twist, Payoff, dan Cta berupa gambar kapur beranimasi. Pola kapur dihitung sebagai pola penjelas oleh `check-videos` (impor dari `dark-chalk/pola`).
- **Scaffold:** `npm run video:new -- <Nama> "<Judul>" --topic <topik> --tema dark-chalk` membuat `<Nama>.tsx` dengan `tema="dark-chalk"` dan view kosong tanpa latar.
- **Belum ada:** pose samping tokoh, dan aturan `check-videos` yang khusus tema ini (latar dan pembawa lama tetap diperiksa hanya bila dipakai).
- Objek kapur ada di `src/dark-chalk/objek/`, di luar `src/props`, jadi tidak lewat registry props lama; tinjauan Ganjar tetap perlu.

## Audiens dan posisi akun (disepakati Ganjar, 31 Okt 2026)
- **Audiens:** orang Indonesia usia 15–25 yang penasaran (SMA sampai awal kuliah); materi tetap bisa dipahami anak SMP. Belum menargetkan anak SD (nada dan aturan platform berbeda; perlu dicek dulu).
- **Posisi:** "Sains 60 detik yang bikin kamu bilang 'oh iya ya!'", dibawakan narator dengan stickman Ganjar sebagai pembawa di layar.
- **Pembeda:** (1) format pendek vertikal, satu pertanyaan sehari-hari per video; (2) narator menyebut tebakan umum yang keliru lalu mengoreksinya, itu jadi bagian *Twist*; (3) satu karakter cast per pilar topik.
- **Pilar konten (karakter):** Tubuh manusia (Jantung), Bumi & antariksa (Bumi), Cuaca & air (Awan, Tetes), Teknologi (Robo), Sejarah (Raka), Fakta umum (Buku).
- **Komposisi awal:** IPA sekitar 70%, sisanya sejarah dan teknologi. Ini hipotesis kerja dari riset kecil (satu akun pembanding, sampel kecil, label dibuat sendiri); data video nyata yang menentukan, jangan diperlakukan sebagai fakta.
- **Uji A/B selesai secara keputusan:** versi narator dengan visual sederhana dipilih Ganjar sebagai konsep utama (11 Nov 2026). Versi Tako berbicara sendiri tidak dibuat lagi.
- Masih terbuka: nama akun/handle, daftar topik uji, kelayakan Creator Rewards di Indonesia (belum diverifikasi), aturan platform untuk konten yang menyasar anak.
- Ringkasan riset: Claude Doc "Riset Niche IPA vs IPS: Animasi Edukasi" (https://claude.ai/artifact/WrCm3FuaeZGbqGXYJxJivL).

## Struktur video (wajib, tanpa pengecualian)
Semua video edukasi memakai struktur folder yang sama supaya video baru tidak berbeda-beda bentuknya.

**Membuat video baru, termasuk saat diminta lewat `/remotion-create`:** jangan membuat proyek baru, jangan menulis komposisi langsung di `Root.tsx`, dan jangan meniru struktur video lain secara manual. Jalankan:

```bash
npm run video:new -- <NamaPascalCase> "<Judul>" --topic <tubuh|cuaca|ilmu|planet|sejarah|teknologi|air|alam|ai> --tema <kertas|dark-chalk> [--cast <id,id>] --voice <aldo|zulfa|jefri|nilasari>
```

Skrip itu membuat folder berikut dan mendaftarkannya di `src/videos/index.ts` (yang dibaca `Root.tsx`):

```
src/videos/
  index.ts                  daftar VIDEOS (diisi skrip, jangan diubah tangan)
  _shared/                  kit bersama: ShortEdu (cangkang), types, timing, voices, voiceover, video
  <Nama>/
    README.md               status dan cara render
    script.md               naskah + tabel shot + objek + fakta/sumber (sumber kebenaran, disetujui Ganjar dulu)
    scenes.ts               META dan BASE_SCENES (id, segment, lines[{who: "narator",text,dur}]); dibaca juga oleh scripts/vo-lines.mjs
    <Nama>.tsx              komposisi: <ShortEdu scenes renderers vo />
    index.ts                ekspor VIDEO (id, durasi dari audio/estimasi, 1080x1920, 30 fps)
    voiceover.ts            tiga baris: createVoiceover({ voices: { narator: VOICES.<suara> } })
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
- **Alur kerja:** `script.md` disetujui Ganjar → isi `scenes.ts` dari naskah → tinjau tempo dalam mode animatik → objek yang belum ada dicatat di registry (`antre`) lalu dibuat di `src/props/<domain>/` → tulis `views/` → tinjau di Studio dengan `<ShortEdu safeZone />` → VO (dengan persetujuan Ganjar) → render.
- Objek yang bisa dipakai ulang masuk `src/props/<domain>/`, komponen penjelas lintas video masuk `src/explainers/`. Folder `props/` di dalam video hanya untuk objek yang tidak akan dipakai ulang.
- Jangan menulis warna heksadesimal di `src/videos/<Nama>/`; pakai `useTheme()` atau `TOPIC_COLORS` (`src/themes/topics.ts`).
- Durasi scene mengikuti audio; sebelum audio ada, memakai `dur` dari naskah. Jangan menulis durasi tetap di komposisi.
- **Gerak mengikuti kata narator.** Di `views/`, picu objek dengan `at("kata kunci")` dari `SceneProps` (frame saat kata itu mulai diucapkan), bukan pecahan durasi (`frames * 0.5`) atau angka frame tetap. Dengan audio, `at()` memakai stempel waktu per kata dari ElevenLabs; tanpa audio, perkiraan porsi huruf. `check-videos` menolak kata kunci yang tidak ada di narasi scene. Ubah kata di naskah berarti cek ulang `at()` di view-nya.
- **Mode animatik:** set prop `animatic: true` di panel props Studio. Visual scene diganti kartu (bagian, scene, narasi, bilah waktu); audio, caption, dan SFX tetap. Pakai untuk menyetujui tempo naskah/VO sebelum `views/` ditulis. Scene tanpa view juga otomatis tampil sebagai kartu animatik.
- **Lembar storyboard:** tiap video punya komposisi `<Nama>-Storyboard` (folder Storyboard di Studio): semua scene dalam satu gambar, dibekukan sesaat sebelum kalimat terakhirnya selesai, dengan caption. Render: `npx remotion still src/index.ts <Nama>-Storyboard out/<Nama>-storyboard.png`. Lihat lembar ini setiap kali mengubah `views/` dan sebelum menyatakan visual selesai.
- Caption otomatis dari `lines[].text` (dipecah maksimal 2 baris); jangan menggambar subtitle sendiri.
- `npm run lint` menjalankan eslint, tsc, dan `scripts/check-videos.mjs` (menolak struktur video yang menyimpang, `who` selain `narator`, SFX melebihi batas, latar selain kertas, dan `TakoCharacter`; memberi peringatan bila audio VO usang terhadap teks) dan `scripts/lint-props.mjs` (menolak props dengan hex di luar palet, keacakan, tanpa `PropFrame`, atau belum tercatat di registry). Jalankan sebelum menyatakan selesai.
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
- `src/characters/cast/`: 18 karakter (awan, bumi, jantung, raka, buku, robo, tetes, claude, ganjar, hape, komputer, otak, matahari, baterai, bulan, atom, petir, api). 17 digambar dengan `CastRig`; **`ganjar` digambar sebagai stickman** (`src/characters/ganjar/`, diambil dari remotion-web, diputuskan Ganjar 12 Nov 2026) tetapi tetap dipakai lewat `<CastCharacter id="ganjar" />` dengan ekspresi dan animasi yang sama (dipetakan di `GanjarCast.tsx`). Untuk 14 ekspresi dan 13 gestur stickman yang lengkap, pakai `GanjarStickman` langsung. `npm run cast:export` tidak mengekspor Ganjar. Warna topik: `claude` memakai topik `ai` (oranye); tujuh karakter pertama dan karakter baru lain memakai topik yang sudah ada atau belum punya topik sendiri (Hape, Komputer, Otak, Matahari, Baterai, Bulan, Atom, Petir, Api, dan Ganjar belum). `ganjar` adalah karakter manusia (pemilik akun), bukan pilar topik. Rig bersama (`CastRig`) untuk 17 karakter, tiap karakter berupa `CastDefinition`; Ganjar memakai stickman. Pakai `<CastCharacter id=... />`.
- `src/dark-chalk/`: tema Dark Chalk Storytelling (papan bertekstur + bingkai kayu, garis kapur, objek, pola kapur, `GanjarGaris`/`GanjarDatar`); lihat "Tema alternatif" di atas dan `src/dark-chalk/README.md`.
- `src/assets/backdrops/`: latar (`plain`, `outdoor`, `workspace`, `edu` dengan 20 jenis termasuk `laut`, `dapur`, `jalanRaya`, `warna` (latar warna polos untuk Hook dan Cta), dan `kertas` (bawaan, satu-satunya yang dipakai video); `sketch` untuk stickman lama). Waktu hari: siang/sore/malam atau 0..1. Baca `README.md` di folder itu. Blok `block` dinonaktifkan karena preview crash.
- `src/assets/camera/`: kamera virtual 2D (`ShotCamera`, `framing`, layout SplitScreen/PictureInPicture/InsertCard). Baca `README.md`.
- `src/assets/screens/`: mock layar (BrowserMock, CodeEditor, Terminal, dll.), kebanyakan untuk video coding.
- `src/themes/`: tema `edumotion` (`edumotion.ts`), `topics.ts` (`TOPIC_COLORS`, `EDU_PLAIN`, `HIGHLIGHT`).
- `src/assets/sfx/`: pustaka SFX sintetis (`SFX`, `SfxName`), dibuat `python3 scripts/sfx-generate.py` (tanpa kredit). Video memakainya lewat `Scene.sfx` di `scenes.ts` (`{ sfx, at, every?, times?, volume? }`, detik dari awal scene).
- `src/explainers/pola/`: pola penjelas (Judul, Fase, Muncul, Kartu, Bandingkan, Langkah, SebabAkibat, Sorot, AngkaBesar, Koreksi, Kunci) dan tata letak bersama (`AREA`, `TEKS`). Contoh pemakaian lengkap: `src/videos/LangitBiru/views/`.
- `src/explainers/`: Caption, HookText, Counter, PhaseBar, GuessCard, EduBack (+ `beat`), SafeZoneGuide, CorrectionCard (Twist: tebakan umum dikoreksi), Callout, Lensa (kaca pembesar; dulu bernama Cutaway), BarCompare, Timeline, MetaphorSwap, Transition (`swipe`/`iris`/`bars`, belum dipasang di `ShortEdu`), ProgressDots, EndCard, ThumbnailCard. Tinjau semuanya di komposisi `ExplainersDemo` dan `ThumbnailDemo`.
- `src/props/`: objek SVG berkontrak (`PropFrame`, viewBox 800), tercatat di `props/registry.md` dan dicek `scripts/lint-props.mjs`. Folder: `body/`, `umum/`, `antariksa/`, `cuaca/`, `teknologi/`, `sejarah/`. Lembar peninjauan: Still `PropsSheet`.
- `src/assets/effects/`: Confetti, Sparkle, SpeedLines, PopBurst, Bubbles (deterministik, `seeded`). Demo: `EffectsDemo`.
- `src/videos/`: video edukasi, lihat "Struktur video".
- `src/Root.tsx`: menu Remotion Studio, dikelompokkan per Folder: **Video** (semua video dari `VIDEOS`), **Storyboard**, **Dark-Chalk** (demo dan lembar tinjauan tema), **Demo** (`TakoCastDemo`, `ExplainersDemo`, `EffectsDemo`, dkk.), **Lembar** (Still `PropsSheet`, `ThumbnailDemo`, `EduBackdrops`, `TakoCastExpressions`). Id komposisi tidak berubah oleh folder. Jangan menambah komposisi video langsung di sini.

## Kondisi saat ini dan celah
- `EsBatuMengapung` (12 Nov 2026): video pertama bertema Dark Chalk, tanpa tokoh. Naskah dan storyboard disetujui Ganjar; **VO ditahan dulu atas permintaan Ganjar, jangan diusulkan lagi sampai Ganjar memintanya** (durasi estimasi ~54 dtk). Fakta yang ditandai belum terverifikasi di `script.md` perlu dicek sebelum tayang.
- Empat video (`JantungTidakCapek`, `LangitBiru`, `BumiPunyaLaut`, `AwanTidakJatuh`) ditulis ulang ke konsep narator pada 11 Nov 2026: naskah sederhana, latar polos, SFX 3 cue per video. Pada 12 Nov 2026 keempatnya dipindah ke format stickman (latar kertas, Tako diganti `Pembawa`); hanya LangitBiru yang sudah memakai pola penjelas. **Naskah baru menunggu persetujuan Ganjar** dan belum ditinjau di Studio.
- VO: audio Aldo lama untuk `JantungTidakCapek` dan `LangitBiru` tidak cocok lagi dengan naskah baru, jadi dilepas dari manifest (mp3 lama masih ada di folder `voiceover/` dan di riwayat git). Hanya `LangitBiru` Hook-1 yang masih dipakai. Durasi memakai estimasi naskah sampai VO dibuat ulang (dengan persetujuan Ganjar).
- Suara narator: **Aldo** (diputuskan Ganjar 11 Nov 2026). VO ulang keempat video lama dan VO `EsBatuMengapung` **ditahan dulu** atas permintaan Ganjar; jangan diusulkan lagi sampai Ganjar memintanya.
- Pratinjau visual dirender di lingkungan tanpa akses Google Fonts, jadi tipografi Nunito belum terlihat; periksa di Studio.
- Topik `ai` ditambahkan untuk karakter Claude (`TOPIC_COLORS`, `theme.json`, `new-short.mjs`). Daftar pilar konten di atas belum memuat AI atau "Sains dasar" (Atom, Api); itu keputusan posisi akun yang menunggu Ganjar.
- Props topik (antariksa, cuaca, teknologi, sejarah) dibuat di muka tanpa naskah yang memintanya; hapus yang tidak terpakai bila perlu.
- Belum ada: musik latar.
- Sebagian dokumentasi (backdrops, camera) menyebut video dan karakter stickman dari proyek lama (SejarahAIStory, ProgrammerBodoh) yang tidak ada di `src/` saat ini. Perlakukan sebagai referensi, bukan kode yang tersedia.
- Klaim jalur darah sendiri (arteri koroner) di video jantung belum bersumber; verifikasi sebelum publikasi.

## Voice over (ElevenLabs) dan keamanan
- Skill proyek (sumber di `.agents/skills/`, dibaca agent mana pun; `.claude/skills/` berisi symlink ke sana): `edumotion-video` (pintu masuk membuat atau mengubah video), `edumotion-naskah` (menulis `script.md`), `edumotion-vo` (alur voice over berbayar). Skill Remotion yang dipertahankan: best-practices, markup, captions, create, docs, render, studio, upgrade. Edit skill hanya di `.agents/skills/`.
- `scripts/vo-generate.mjs --video <Nama>` memakai kredit ElevenLabs berbayar. **Tampilkan jumlah baris dan huruf, lalu minta persetujuan Ganjar sebelum menjalankan**; jangan memakai `--yes` tanpa izin.
- `.env.local` berisi API key. Jangan dibaca, dicetak, di-commit, atau disalin ke tempat lain.
- `scripts/vo-lines.mjs --video <Nama>` (daftar baris dan status, tanpa kredit), `vo-generate.mjs --video <Nama>` (memakai kredit, endpoint `with-timestamps`), `vo-process.py` (olah audio, simpan waktu per kata sebagai `words` di manifest); keluaran mentah (mp3 + `.align.json`) ada di `out/vo-raw/`. Audio lama tanpa `words` tetap jalan dengan perkiraan. Kontraknya: `scenes.ts` mengekspor `BASE_SCENES`, `voiceover.ts` mengekspor `VO_VOICES`, `VO_MODEL`, `VO_SPEED`, `VO_MANIFEST`, `lineId`, `ttsText`.
- **Suara (ElevenLabs, bahasa Indonesia):**
  - Sudah didengar dan disetujui Ganjar (dulu sebagai suara Tako): **Aldo** `H7dnu83omjrDrtfihMsb` dan **Zulfa** `qXOoUJU1h7AiwSe4ltRA`. **Aldo adalah suara narator** (keputusan Ganjar, 11 Nov 2026); Zulfa cadangan.
  - Jefri `1ijzBXcD3AIVH8RGMcQd` dan Nilasari `NPDHDOOQCSyifTJZOe6J`: belum didengar, tidak dipakai.
  - Ari Eko `Se50W0zoqlDUbFxvcN9h` hanya untuk video dialog bertema coding, bukan untuk edumotion.
  - Katalog suara ada di `src/videos/_shared/voices.ts`; video memilihnya lewat `--voice` saat scaffold. Jangan menulis voice id di tempat lain. Peta lama (`ganjar`, `robot`) berasal dari proyek video lain dan sudah tidak dipakai.
  - Tes suara hanya dengan persetujuan Ganjar (kredit berbayar).

## Cara bekerja dengan Ganjar
- Ganjar berbicara bahasa Indonesia; gunakan "aku" dan "kamu" (bukan "gue/lo"), nada hangat seperti mentor.
- Ganjar tech lead frontend (JavaScript/TypeScript); boleh teknis, tapi jelaskan alasan keputusan desain.
- Usulkan arah dulu untuk keputusan besar (gaya visual, posisi akun, struktur), lalu bangun setelah disetujui. Untuk hal kecil, kerjakan dan laporkan.
- Verifikasi sebelum menyatakan selesai: `npm run lint`, dan lihat hasil di Remotion Studio untuk perubahan visual.
