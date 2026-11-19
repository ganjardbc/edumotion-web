# BumiPunyaLaut

Dari mana air laut berasal?

- Tema: `dark-chalk` · Topik: `planet` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook → Explain1–3 → Payoff → Cta (dipindah dari format lama 19 Nov 2026)
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah dan storyboard disetujui Ganjar (19 Nov 2026)
- [x] Objek kapur di `src/dark-chalk/objek/Laut.tsx` (BumiLava, Tetes), menunggu tinjauan Ganjar
- [x] Scene visual selesai (views/); storyboard menunggu persetujuan Ganjar
- [x] Voice over dibuat (Aldo, eleven_v4, 19 Nov 2026, 6 baris, 593 huruf, durasi ~41 dtk) (`node scripts/vo-generate.mjs --video BumiPunyaLaut`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts BumiPunyaLaut out/BumiPunyaLaut.mp4`
