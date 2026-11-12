# EsBatuMengapung

Kenapa es batu mengapung?

- Tema: **Dark Chalk Storytelling** (papan hijau) · Topik: `air` · Karakter: tidak ada · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (12 Nov 2026, tanpa karakter pendukung)
- [x] Objek kapur ada di `src/dark-chalk/objek/` (menunggu tinjauan Ganjar)
- [x] Scene visual ditulis (views/); storyboard menunggu persetujuan Ganjar
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video EsBatuMengapung`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts EsBatuMengapung out/EsBatuMengapung.mp4`
