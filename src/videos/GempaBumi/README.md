# GempaBumi

Bagaimana proses terjadinya gempa bumi?

- Tema: `dark-chalk` · Topik: `alam` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (20 Nov 2026)
- [x] Objek kapur ada di `src/dark-chalk/objek/Gempa.tsx` (tinjauan Ganjar bersama storyboard)
- [x] Scene visual selesai (views/), storyboard disetujui Ganjar (20 Nov 2026)
- [x] Voice over Aldo dibuat (20 Nov 2026, 6 baris, 604 huruf, ±39,8 dtk)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts GempaBumi out/GempaBumi.mp4`
