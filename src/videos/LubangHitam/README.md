# LubangHitam

Apa yang terjadi di lubang hitam?

- Tema: `dark-chalk` · Topik: `planet` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (16 Nov 2026)
- [x] Objek kapur di `src/dark-chalk/objek/LubangHitam.tsx` (LubangHitam, BintangRuntuh, Spageti, Silang)
- [x] Scene visual selesai (views/); storyboard disetujui Ganjar (19 Nov 2026, setelah jarak judul dan visual dirapikan)
- [x] Fakta diverifikasi (NASA, ESO; lihat script.md)
- [x] Voice over dibuat (Aldo, eleven_v4, 19 Nov 2026, 7 baris, 686 huruf, durasi ~48 dtk) (`node scripts/vo-generate.mjs --video LubangHitam`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone (termasuk didengarkan)
- [ ] Render akhir

## Render
`npx remotion render src/index.ts LubangHitam out/LubangHitam.mp4`
