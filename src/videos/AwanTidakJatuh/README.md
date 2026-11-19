# AwanTidakJatuh

Awan kok nggak jatuh?

- Tema: `dark-chalk` · Topik: `cuaca` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook → Explain1–3 → Payoff → Cta (dipindah dari format lama 19 Nov 2026)
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [ ] Naskah disetujui Ganjar
- [x] Scene visual selesai (views/, Dark Chalk); storyboard disetujui
- [x] Objek kapur di `src/dark-chalk/objek/Awan.tsx`, menunggu tinjauan Ganjar
- [x] Fakta diverifikasi (19 Nov 2026, script.md)
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video AwanTidakJatuh`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts AwanTidakJatuh out/AwanTidakJatuh.mp4`
