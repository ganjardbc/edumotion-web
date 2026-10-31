# Edumotion Web

Proyek Remotion untuk akun animasi 2D edukasi di Instagram dan TikTok: video pendek vertikal (1080×1920, 30 fps, 30–120 detik) yang dijelaskan Tako dan 18 karakter cast. Aturan lengkap, keputusan akun, dan struktur video ada di [CLAUDE.md](CLAUDE.md); design system di [design-system/edumotion-design-system/](design-system/edumotion-design-system/readme.md).

## Perintah

```console
npm i --loglevel=error      # pasang dependensi
npm run dev                 # Remotion Studio
npm run lint                # eslint + tsc + check-videos + lint-props (jalankan sebelum selesai)
npm run build               # bundle
npm run video:new -- <NamaPascalCase> "<Judul>" --topic <topik> --cast <id,id> --voice <suara>
npm run cast:export         # ekspor paket cast ke design-references/tako_cast/
npx remotion render         # render video
```

## Isi proyek

| Folder | Isi |
|---|---|
| `src/characters/tako/`, `src/characters/cast/` | Tako dan 18 karakter cast (satu rig bersama, `<CastCharacter id=... />`) |
| `src/props/` | Objek SVG berkontrak: `body`, `umum`, `antariksa`, `cuaca`, `teknologi`, `sejarah` (katalog: `design-system/.../props/registry.md`) |
| `src/explainers/` | Komponen penjelas: Caption, HookText, CorrectionCard, Callout, Cutaway, BarCompare, Timeline, MetaphorSwap, Transition, ProgressDots, EndCard, ThumbnailCard, dan lainnya |
| `src/assets/backdrops/` | Latar, termasuk 19 jenis `EduBackdrop` berwarna topik |
| `src/assets/effects/` | Efek deterministik: Confetti, Sparkle, SpeedLines, PopBurst, Bubbles |
| `src/themes/` | Tema `edumotion` dan palet topik (`TOPIC_COLORS`) |
| `src/videos/` | Video edukasi, satu folder per video; dibuat lewat `video:new` |
| `scripts/` | `new-short`, `check-videos`, `lint-props`, `export-cast-pack`, skrip voice over |

## Meninjau di Studio

Komposisi dan Still untuk memeriksa hasil kerja tanpa membuat video:

| Id | Menampilkan |
|---|---|
| `TakoCastDemo` | Semua karakter cast beraksi, lalu berkumpul bersama Tako |
| `TakoCastExpressions` | Lembar ekspresi satu karakter (ganti `id` di panel props) |
| `ExplainersDemo` | Komponen penjelas, tiga transisi, dan kartu penutup |
| `EffectsDemo` | Lima efek visual |
| `PropsSheet` | Semua objek di `src/props/` dalam satu lembar |
| `ThumbnailDemo` | Contoh kartu sampul |
| `EduBackdrops` | Matriks latar edu × topik |

## Catatan keamanan

`.env.local` berisi API key ElevenLabs; jangan dibaca, dicetak, atau di-commit. Voice over berbayar: tampilkan jumlah baris dan huruf dan minta persetujuan sebelum `scripts/vo-generate.mjs` dijalankan.
