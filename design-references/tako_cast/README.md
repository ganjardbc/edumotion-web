# Karakter pendukung Tako

Awan, Bumi, Jantung, Raka, Buku, Robo, dan Tetes berasal dari `tako_supporting_sheet.png`. Karakter lain dirancang di kode tanpa lembar referensi: Claude (mengikuti karakter di proyek remotion-web), Hape, Komputer, Otak, Matahari, Baterai, Bulan, Atom, Petir, Api (17 karakter rig). Ganjar tidak ada di paket ini: ia memakai stickman dari remotion-web (`src/characters/ganjar/`).

Tiap folder berisi referensi, SVG master, parts, manifest rig, dan lembar ekspresi. Sumbernya ada di `src/characters/cast/`. Paket ini hasil ekspor:

    npm run cast:export

`expressions.png` dirender dari komposisi `TakoCastExpressions`:

    npx remotion still src/index.ts TakoCastExpressions design-references/tako_cast/awan/expressions.png --props='{"id":"awan"}'

Aturan bersama: viewBox 800x800, titik tumpu kaki di (400,730), warna datar dengan bayangan satu lapis, wajah simetris menghadap depan. Rig, ekspresi, dan preset animasi sama dengan Tako.
