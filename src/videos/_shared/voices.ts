// Katalog suara ElevenLabs (bahasa Indonesia). Video memilih dari sini di voiceover.ts, jangan menulis voice id di tempat lain.
export type Voice = { readonly id: string; readonly name: string };

export const VOICES = {
  // Suara Tako: sudah didengar dan disetujui Ganjar.
  aldo: { id: "H7dnu83omjrDrtfihMsb", name: "Aldo" },
  zulfa: { id: "qXOoUJU1h7AiwSe4ltRA", name: "Zulfa" },
  // Narator netral untuk versi B; belum didengar.
  jefri: { id: "1ijzBXcD3AIVH8RGMcQd", name: "Jefri" },
  nilasari: { id: "NPDHDOOQCSyifTJZOe6J", name: "Nilasari" },
} as const satisfies Record<string, Voice>;

export type VoiceKey = keyof typeof VOICES;

// Model TTS dan kecepatan bawaan untuk semua video edumotion.
export const DEFAULT_MODEL = "eleven_multilingual_v2";
export const DEFAULT_SPEED: number | undefined = undefined;
