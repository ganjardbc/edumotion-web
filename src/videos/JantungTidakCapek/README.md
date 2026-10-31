# JantungTidakCapek

Kok jantung nggak capek?

- Topik: `tubuh` · Karakter: jantung · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar
- [ ] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [x] Scene visual selesai (views/)
- [x] Voice over dibuat (Aldo, 8 baris, 614 huruf, disetujui Ganjar 31 Okt 2026) (`node scripts/vo-generate.mjs --video JantungTidakCapek`, setelah persetujuan Ganjar)
- [x] SFX dipasang (`sfx` di scenes.ts)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts JantungTidakCapek out/JantungTidakCapek.mp4`
