# BateraiCepatHabis

Kenapa baterai HP cepat habis?

- Topik: `teknologi` · Karakter: baterai, hape · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (12 Nov 2026)
- [x] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [x] Scene visual selesai (views/), draf pertama; storyboard menunggu tinjauan Ganjar
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video BateraiCepatHabis`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts BateraiCepatHabis out/BateraiCepatHabis.mp4`
