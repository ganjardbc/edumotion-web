# BadakJawaLangka

Kenapa badak jawa sangat langka?

- Tema: `dark-chalk` · Topik: `alam` · Karakter: (tanpa cast) · 1080×1920, 30 fps
- Format: Hook (pertanyaan 5W1H) → Penjelasan → Payoff → Cta
- Naskah dan tabel shot: [script.md](./script.md) (sumber kebenaran; ubah di sini dulu, baru kode)
- Data scene dan baris VO: [scenes.ts](./scenes.ts)
- Struktur folder: lihat "Struktur video" di CLAUDE.md di root proyek

## Status
- [ ] Naskah disetujui Ganjar
- [ ] Objek (`props`) yang dibutuhkan sudah ada atau dicatat `antre` di design-system/edumotion-design-system/props/registry.md
- [ ] Scene visual selesai (views/)
- [ ] Voice over dibuat (`node scripts/vo-generate.mjs --video BadakJawaLangka`, setelah persetujuan Ganjar)
- [ ] Ditinjau di Remotion Studio dengan panduan safe zone
- [ ] Render akhir

## Render
`npx remotion render src/index.ts BadakJawaLangka out/BadakJawaLangka.mp4`
