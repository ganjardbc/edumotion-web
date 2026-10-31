import type React from "react";
import type { PropProps } from "./types";

// Kanvas SVG 800x800 yang dipakai semua objek: posisi tengah di (x, y), ukuran `size`.
export const PropFrame: React.FC<Pick<PropProps, "x" | "y" | "size" | "opacity" | "rotate"> & { readonly children: React.ReactNode }> = ({ x = 540, y = 700, size = 400, opacity = 1, rotate = 0, children }) => (
  <svg viewBox="0 0 800 800" width={size} height={size} style={{ position: "absolute", left: x - size / 2, top: y - size / 2, opacity, transform: `rotate(${rotate}deg)`, overflow: "visible" }}>
    {children}
  </svg>
);
