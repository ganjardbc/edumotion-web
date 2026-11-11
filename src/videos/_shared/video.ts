import type React from "react";
import type { VideoProps } from "./ShortEdu";

// Bentuk yang diekspor index.ts tiap video dan dibaca src/videos/index.ts lalu Root.tsx.
export type VideoEntry = {
  readonly id: string;
  readonly component: React.ComponentType<VideoProps>;
  readonly durationInFrames: number;
  // Frame kunci tiap scene untuk Still <id>-Storyboard (lihat storyboardOf).
  readonly storyboard: ReadonlyArray<{ readonly id: string; readonly frame: number }>;
  readonly width: 1080;
  readonly height: 1920;
  readonly fps: 30;
};
