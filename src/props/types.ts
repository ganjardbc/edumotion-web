import type { VideoTopic } from "../videos/_shared/types";

// Props dasar semua objek SVG: viewBox 800x800, titik tumpu di tengah (x, y) dalam piksel kanvas.
export type PropProps = {
  readonly x?: number;
  readonly y?: number;
  // Lebar kotak viewBox dalam piksel.
  readonly size?: number;
  // Mengganti keluarga warna (main/rim/shine/ink). Bawaan "tubuh".
  readonly topic?: VideoTopic;
  readonly opacity?: number;
  readonly rotate?: number;
};
