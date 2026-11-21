# BadakKrakatau

Bagaimana nasib badak jawa saat Krakatau meletus?

- Tema: `dark-chalk` · Topik: `alam` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [ ] Naskah disetujui Ganjar
- [x] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [x] Scene visual selesai (views/) — 21 Nov 2026, storyboard disetujui Ganjar
- [x] Voice over dibuat (21 Nov 2026) (`node scripts/vo-generate.mjs --video BadakKrakatau`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [x] Render akhir (21 Nov 2026, out/BadakKrakatau.mp4, 66,5 dtk)

## Render
`npx remotion render src/index.ts BadakKrakatau out/BadakKrakatau.mp4`
