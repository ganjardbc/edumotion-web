# PesawatTerbang

Bagaimana pesawat bisa terbang?

- Tema: `dark-chalk` · Topik: `ilmu` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [x] Naskah disetujui Ganjar (16 Nov 2026)
- [x] Objek kapur di `src/dark-chalk/objek/Terbang.tsx` (Pesawat, Penampang, Aliran, SayapUdara, Panah)
- [x] Scene visual selesai (views/); storyboard disetujui Ganjar (16 Nov 2026)
- [x] Fakta diverifikasi (lihat script.md)
- [x] Voice over dibuat (Aldo, eleven_v4, 16 Nov 2026) (`node scripts/vo-generate.mjs --video PesawatTerbang`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts PesawatTerbang out/PesawatTerbang.mp4`
