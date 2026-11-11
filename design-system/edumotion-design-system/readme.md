# edumotion Design System

edumotion adalah akun animasi 2D edukasi untuk Instagram dan TikTok (30–120 detik, vertikal 1080×1920, 30 fps),
dibuat dengan Remotion. Maskotnya **Tako**, makhluk hijau kecil yang selalu penasaran, ditemani 18 karakter cast.
Sistem ini diturunkan dari gaya Tako (`design-references/tako_character_sheet.png`) dan kode karakter di `src/characters`.

## Indeks
- `styles.css`: titik masuk, mengimpor `tokens/`
- `theme.json`: cermin mesin-terbaca dari semua token
- `tokens/`: colors, typography, spacing (termasuk safe zone), elevation, motion
- `props/STYLE.md`: kontrak gaya objek; `props/registry.md`: daftar objek bertag (diperiksa `scripts/lint-props.mjs`)
- `components/README.md`: komponen penjelas (caption, counter, callout, lensa, dll.) dan statusnya
- `preview.html`: halaman tinjau palet, aturan 3 nada, dan safe zone

## Prinsip visual
- **Gaya datar, imut, tiga nada.** Isi (main), tepi lebih gelap (rim), kilau kecil (shine). Tanpa gradasi rumit, tanpa tekstur.
- **Satu topik, satu keluarga warna.** Warna topik berasal dari karakter cast (Jantung untuk tubuh, Bumi untuk planet, dst.). Tako hijau selalu hadir sebagai pemandu.
- **Bentuk membulat.** Anggota badan tipis berujung bulat (stroke 20), mata sclera putih, sudut membulat.
- **Satu sorotan per adegan.** Warna `--highlight` hanya untuk satu angka atau kata kunci pada satu waktu.
- **Kaya lewat komposisi, bukan jumlah gambar.** Lapisan latar, objek, karakter, gerak kamera, dan komponen penjelas dipakai bergantian; objek yang sama boleh dipakai ulang dengan warna topik berbeda.

## Tipografi
Nunito 700/800 (sudah dipakai `CastDemo`). Skala untuk kanvas 1080×1920: hook 120, title 88, subtitle 56, caption 64, label 44, angka 200.
Hook maksimal 6 kata; caption maksimal 2 baris, sekitar 28 huruf per baris.

## Layout 9:16 dan safe zone
Teks penting jangan masuk: atas 220 px, bawah 480 px, kiri 64 px, kanan 160 px (UI platform: tombol suka/komentar di kanan, deskripsi di bawah).
Lantai karakter di y=1450, caption di y=1240.

## Gerak
Sama dengan kamera dan rig yang ada (`ShotCamera`, animasi karakter). Easing masuk standar `[0.4,0,0.2,1]`, easing pop `[0.34,1.3,0.64,1]` hanya untuk kemunculan dan kejutan.
Tahan objek kunci minimal 24 frame (0,8 detik) agar terbaca.

## Konten
Bahasa Indonesia, nada ramah dan penasaran seperti Tako, kalimat pendek. Satu ide per video. Struktur: Hook, Setup, Penjelasan, Twist, Payoff.

## Status
Fondasi (token, tema, kontrak objek) sudah ditulis. Sudah ada: 18 karakter cast, 36 objek di `props/registry.md` (umum, tubuh, antariksa, cuaca, teknologi, sejarah), 9 komponen penjelas baru, 3 latar baru, dan 5 efek. Belum ada: SFX, musik latar, dan peta suara narator versi B.
