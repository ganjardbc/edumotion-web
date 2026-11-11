// Ganjar (pemilik akun) sebagai stickman. Di video pakai <CastCharacter id="ganjar" />; GanjarStickman untuk kontrol penuh
// (14 ekspresi, 13 gestur, jalan, bicara).
export { GanjarStickman, GANJAR_STICKMAN_EXPRESSIONS, type GanjarStickmanExpression, type GanjarStickmanProps } from "./GanjarStickman";
export { GESTURES, type Gesture } from "./gestures";
export { GanjarCast, GANJAR_EXPRESSION } from "./GanjarCast";
export { GANJAR_STICKMAN_PALETTE } from "./palette";

// Metadata untuk demo dan lembar ekspresi (karakter ini tidak memakai CastRig).
export const GANJAR_META = { id: "ganjar", name: "Ganjar", topic: "pembuat (pemilik akun)", brief: "Stickman gambar tangan: kepala oval, hoodie gelap, celana pendek abu, headphone biru; sama dengan stickman Ganjar di remotion-web." } as const;
