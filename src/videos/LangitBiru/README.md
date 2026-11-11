# LangitBiru

Kenapa langit biru, bukan ungu?

- Topik: `cuaca` · Karakter: awan, matahari, bumi · 1080×1920, 30 fps
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [ ] Naskah disetujui Ganjar (ditulis ulang untuk narator 11 Nov 2026)
- [x] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [x] Scene visual selesai (views/)
- [ ] Voice over dibuat (hanya Hook-1 yang masih cocok; sisanya perlu dibuat ulang) (`node scripts/vo-generate.mjs --video LangitBiru`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts LangitBiru out/LangitBiru.mp4`
