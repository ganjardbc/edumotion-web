import type { VideoTopic } from "../videos/_shared/types";

// Warna topik (3 nada + ink), sama dengan design-system/edumotion-design-system/theme.json. Komponen video dan objek
// mengambil warna dari sini, bukan menulis hex baru.
export type TopicColors = { readonly main: string; readonly rim: string; readonly shine: string; readonly ink: string };

export const TOPIC_COLORS: Readonly<Record<VideoTopic, TopicColors>> = {
  tubuh: { main: "#EF5350", rim: "#D63B3E", shine: "#FF9A92", ink: "#3D1416" },
  cuaca: { main: "#BFE3FA", rim: "#93CBF2", shine: "#EAF7FF", ink: "#1B3A6B" },
  ilmu: { main: "#8E5FC2", rim: "#6E43A3", shine: "#B493E0", ink: "#2A1548" },
  planet: { main: "#4FA8E0", rim: "#3B8FCC", shine: "#BFE4FA", ink: "#0F3350" },
  sejarah: { main: "#F9C74F", rim: "#E8A93A", shine: "#FFE08A", ink: "#3D2A10" },
  teknologi: { main: "#D5DCE4", rim: "#AEB9C6", shine: "#F2F5F8", ink: "#1E2F52" },
  air: { main: "#64B5F6", rim: "#3D97E3", shine: "#C6E7FF", ink: "#0F3D5E" },
  alam: { main: "#4CAF50", rim: "#2E8B42", shine: "#A7E17A", ink: "#0F3D2E" },
  ai: { main: "#D97757", rim: "#B85C41", shine: "#E8937A", ink: "#1B1715" },
};

// Warna pendukung lintas topik.
export const HIGHLIGHT = "#FFD84D";
export const TAKO_PINK = "#FF6B7D";

// Palet latar polos edumotion (dinding krem-hijau dan lantai lembut), dipakai EduBack.
export const EDU_PLAIN = {
  wallTop: "#F7FAF4",
  wallBottom: "#E4F1DA",
  floor: "#CFE5BF",
  floorEdge: "#B4D69F",
  spot: "#FFFFFF",
  spotOpacity: 0.5,
  shadowOpacity: 0.2,
} as const;
