# DinosaurusPunah

Kenapa dinosaurus punah?

- Tema: `dark-chalk` · Topik: `alam` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (12 Nov 2026)
- [x] Objek kapur ada di `src/dark-chalk/objek/Purba.tsx` (di luar registry props; tinjauan Ganjar masih perlu) dan ikon `Ikon`
- [x] Scene visual selesai (views/); storyboard menunggu persetujuan Ganjar
- [ ] Voice over dibuat (ditahan sampai Ganjar memintanya) (`node scripts/vo-generate.mjs --video DinosaurusPunah`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Catatan
- Fakta di `script.md` belum bersumber; verifikasi sebelum tayang.
- Pemicu beberapa objek memakai frame tetap (bukan `at()`) supaya tidak lambat tanpa audio: Setup (salju, termometer), Twist (asteroid), Explain2 dan Payoff (butir 1).

## Render
`npx remotion render src/index.ts DinosaurusPunah out/DinosaurusPunah.mp4`
