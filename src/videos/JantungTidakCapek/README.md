# JantungTidakCapek

Kok jantung nggak capek?

- Topik: `tubuh` · Karakter: jantung · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [ ] Naskah disetujui Ganjar
- [ ] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [ ] Scene visual selesai (views/)
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video JantungTidakCapek`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts JantungTidakCapek out/JantungTidakCapek.mp4`
