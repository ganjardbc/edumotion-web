# Registry objek

Format: `id | topik | mood | tipe | bagian bergerak | status`
Status:
- `antre`: diminta naskah atau storyboard, belum dibuat.
- `draf`: sudah dibuat, belum disetujui Ganjar. Video boleh memakainya, tetapi `npm run lint` memberi peringatan.
- `disetujui`: Ganjar sudah melihatnya di `PropsSheet` (atau lembar storyboard) dan menyetujuinya.

Objek untuk konsep yang sulit digambar (molekul, organ, lapisan udara) wajib punya acuan: 1–2 gambar contoh dari Ganjar
atau sumber tepercaya, disimpan di `design-references/props/<id>.*`, sebelum digambar.

Claude Code memilih dari daftar ini saat menyusun storyboard; objek yang dibutuhkan tapi belum ada ditambahkan sebagai `antre`.

| id | topik | mood | tipe | bagian bergerak | status |
|----|-------|------|------|-----------------|--------|
| Stopwatch | tubuh | netral | prop | `progress` (jarum) | draf |
| EkgLine | tubuh | netral | prop | `progress` (garis) | draf |
| Mitochondria | tubuh | netral | prop | tidak ada | draf |
| MuscleCell | tubuh | netral | prop | `reveal` (mitokondria muncul) | draf |
| CoronaryVessels | tubuh | netral | prop | tidak ada | draf |
| QuestionMark | umum | penasaran | prop | `pop` | draf |
| ExclamationMark | umum | kejut | prop | `pop` | draf |
| LightBulb | umum | ide | prop | `on` | draf |
| Clock | umum | waktu | prop | `progress` (jarum hour, minute) | draf |
| CurvedArrow | umum | arah | prop | `progress` | draf |
| Star | umum | sorotan | prop | `pop` | draf |
| CheckMark | umum | benar | prop | `progress` | draf |
| CrossMark | umum | salah | prop | `progress` | draf |
| JantungAnatomi | tubuh | netral | prop | `beat` | draf |
| ParuParu | tubuh | netral | prop | `breath` | draf |
| SelDarahMerah | tubuh | netral | prop | tidak ada | draf |
| TetesDarah | tubuh | netral | prop | tidak ada | draf |
| Otot | tubuh | kuat | prop | `flex` | draf |
| Roket | antariksa | semangat | prop | `flame` | draf |
| PlanetBercincin | antariksa | tenang | prop | tidak ada | draf |
| Satelit | antariksa | netral | prop | tidak ada | draf |
| Meteor | antariksa | kejut | prop | tidak ada | draf |
| Orbit | antariksa | netral | prop | `progress` (planet mengorbit) | draf |
| AwanHujan | cuaca | sendu | prop | `progress` (tetes jatuh) | draf |
| GunungApi | cuaca | kejut | prop | `progress` (kepul uap naik) | draf |
| Pelangi | cuaca | senang | prop | `progress` | draf |
| Termometer | cuaca | netral | prop | `level` | draf |
| GelombangCahaya | cuaca | netral | prop | `progress` (gelombang), param `wavelength` | draf |
| MolekulUdara | cuaca | netral | prop | `scatter` (sinar membelok) | draf |
| LapisanAtmosfer | cuaca | netral | prop | `progress` (sinar menembus) | draf |
| Mata | tubuh | netral | prop | tidak ada | draf |
| SiklusAir | air | netral | prop | `progress` | draf |
| PanahUdara | cuaca | netral | prop | `progress` (panah naik) | draf |
| Timbangan | umum | netral | prop | `level` (jarum) | draf |
| SiluetGajah | umum | netral | prop | tidak ada | draf |
| RodaGigi | teknologi | netral | prop | `progress` | draf |
| Chip | teknologi | netral | prop | `glow` | draf |
| WifiSignal | teknologi | netral | prop | `level` | draf |
| Gembok | teknologi | aman | prop | `open` (gagang) | draf |
| KodeTag | teknologi | netral | prop | `progress` | draf |
| GulunganPeta | sejarah | petualangan | prop | `progress` | draf |
| PerahuLayar | sejarah | petualangan | prop | `bob` | draf |
| Candi | sejarah | tenang | prop | tidak ada | draf |
| Koin | sejarah | netral | prop | `flip` | draf |

## Kumpulan awal untuk topik tubuh (jantung), 12 objek
`jantung-anatomi`, `bilik-atrium`, `pembuluh-arteri`, `pembuluh-vena`, `sel-darah-merah`, `paru-paru`, `denyut-ekg`, `stopwatch`, `otot`, `pompa-air`, `tetes-darah`, `tanda-tanya-besar`
Status:
- `ada`: `stopwatch` (`src/props/body/Stopwatch`), `denyut-ekg` (`EkgLine`), `mitokondria` (`Mitochondria`), `sel-otot` (`MuscleCell`), `pembuluh-koroner` (`CoronaryVessels`).
- `ada` (tambahan): `jantung-anatomi` (`JantungAnatomi`), `sel-darah-merah` (`SelDarahMerah`), `paru-paru` (`ParuParu`), `otot` (`Otot`), `tetes-darah` (`TetesDarah`), `tanda-tanya-besar` (`QuestionMark`).
- `antre`: `bilik-atrium`, `pembuluh-arteri`, `pembuluh-vena`, `pompa-air`.
| JalurCahaya | cuaca | netral | prop | `progress` (sinar), param `waktu` siang/senja | draf |
| LayarHp | teknologi | netral | prop | param `terang` 0..1 (layar makin bercahaya) | antre |
| SinyalBar | teknologi | netral | prop | param `level` 0..4 (batang sinyal) | antre |
