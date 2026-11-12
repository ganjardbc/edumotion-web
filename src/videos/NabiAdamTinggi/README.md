# NabiAdamTinggi

Berapa Tinggi Nabi Adam?

- Tema: `dark-chalk` · Topik: `sejarah` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar
- [x] Visual memakai ikon dan bentuk kapur yang sudah tersedia; tanpa penggambaran Nabi Adam
- [x] Scene visual selesai (views/); storyboard perlu ditinjau Ganjar
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video NabiAdamTinggi`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts NabiAdamTinggi out/NabiAdamTinggi.mp4`
