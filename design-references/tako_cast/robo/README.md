# Robo (teknologi)

Robot perak berkepala dan berbadan kotak (sudut membulat) dengan layar wajah gelap, inti dada bercahaya, tangan abu-abu.

Dibuat dari `reference.png`, potongan `../tako_supporting_sheet.png`. File di folder ini hasil ekspor; sumbernya `src/characters/cast/characters/robo.tsx`. Jangan sunting manual, jalankan `npm run cast:export`.

## File
- `robo_master.svg`: karakter lengkap, ekspresi Senang.
- `parts/`: bagian terpisah dengan viewBox 800x800 yang sama.
- `rig_manifest.json`: palet, urutan lapisan, pivot, spesifikasi wajah.
- `expressions.png`: 10 ekspresi.

## Beda dari referensi
- Alis ditambahkan (warna cahaya) karena ekspresi butuh alis; mulut juga berwarna cahaya agar terbaca di layar gelap.
- Kaki referensi satu tiang; dibuat dua agar bisa berjalan.
