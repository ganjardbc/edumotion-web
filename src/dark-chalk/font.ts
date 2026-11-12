import { loadFont } from "@remotion/google-fonts/PatrickHand";

// Font tulisan tangan untuk teks kapur (Teks, Label). Caption tetap memakai font tema (Nunito).
// Patrick Hand hanya punya bobot 400 dan huruf lebih kecil dari Nunito, jadi ukuran dikali SKALA_FONT.
export const { fontFamily: FONT_KAPUR } = loadFont("normal", { weights: ["400"], subsets: ["latin"] });
export const SKALA_FONT = 1.2;
