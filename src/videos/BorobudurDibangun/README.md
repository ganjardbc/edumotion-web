# BorobudurDibangun

Bagaimana Borobudur bisa dibangun?

- Tema: `dark-chalk` · Topik: `sejarah` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (19 Nov 2026)
- [x] Objek kapur dibuat di `src/dark-chalk/objek/Borobudur.tsx` (19 Nov 2026; menunggu tinjauan Ganjar)
- [x] Scene visual selesai (views/) (19 Nov 2026); storyboard disetujui Ganjar (19 Nov 2026)
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video BorobudurDibangun`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts BorobudurDibangun out/BorobudurDibangun.mp4`
