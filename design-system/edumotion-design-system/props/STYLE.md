# Kontrak gaya objek (props)

Setiap objek SVG baru wajib mengikuti aturan ini. Tujuannya: objek apa pun terlihat satu keluarga dengan Tako.

1. **Tiga nada.** Isi `main`, tepi `rim` (lebih gelap, sekitar 10–15% lebih pekat), kilau `shine` (goresan kecil, satu per objek). Contoh: `RimBody` + `Highlight` di `src/characters/cast/shapes.tsx`.
2. **Warna dari palet.** Hanya token topik, warna Tako, `ink`, dan `highlight`. Maksimal 5 warna unik per objek. Tidak ada gradasi kecuali langit dan latar.
3. **Garis.** Stroke objek 8 px, anggota badan 20 px, `strokeLinecap="round"`, `strokeLinejoin="round"`. Warna garis: `ink` topik, bukan hitam.
4. **Bentuk.** Sudut membulat, siluet sederhana yang terbaca di ukuran 200 px. Tanpa detail yang hilang saat dikecilkan.
5. **Kanvas.** `viewBox` 800×800 (seperti rig karakter), titik pusat di tengah, pivot untuk bagian bergerak diberi `id` dan didokumentasikan.
6. **Komponen React.** Ekspor sebagai `React.FC<PropProps>` dengan `topic?: TopicId` (mengganti warna), `size`, `x`, `y`. Animasi hanya dari `useCurrentFrame()`.
7. **Bagian bergerak.** Pisahkan jadi grup ber-`id` (misalnya `lid`, `needle`) supaya bisa dianimasikan tanpa menggambar ulang.
8. **Daftarkan.** Tambahkan satu baris di `registry.md` (id, tag topik, mood, tipe, bagian bergerak) dengan status `draf`.
9. **Acuan dan persetujuan.** Konsep sulit (molekul, organ, lapisan udara, proses) digambar dari acuan di `design-references/props/<id>.*`, bukan dari bayangan. Tunjukkan objek di `PropsSheet` atau lembar storyboard; status menjadi `disetujui` hanya setelah Ganjar menyetujuinya.
10. **Lebih baik sederhana dan terbaca.** Satu gagasan per objek, bentuk besar, paling banyak 3 bagian penting. Objek yang harus dijelaskan dengan banyak label berarti terlalu rumit; pecah jadi dua objek atau pakai pola `Langkah`.

## Validator
`scripts/lint-props.mjs` berjalan di `npm run lint`. Galat (gagal): hex di luar palet (hanya `#FFFFFF` selain token), `Math.random`/`setTimeout`/`setInterval`/`Date.now`, objek tanpa `<PropFrame>`, `viewBox` bukan 800×800, dan objek yang belum tercatat di `registry.md`. Peringatan: lebih dari 5 warna unik dalam satu objek. Komponen berakhiran `Shape` dianggap bentuk internal dan tidak perlu dicatat.

Catatan: stroke di luar 8/20 (kilau 14, alas outline lebih tebal) tidak diperiksa otomatis; jaga manual.
