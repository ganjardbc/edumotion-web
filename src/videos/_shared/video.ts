import type React from "react";

// Bentuk yang diekspor index.ts tiap video dan dibaca src/videos/index.ts lalu Root.tsx.
export type VideoEntry = {
  readonly id: string;
  readonly component: React.ComponentType;
  readonly durationInFrames: number;
  readonly width: 1080;
  readonly height: 1920;
  readonly fps: 30;
};
