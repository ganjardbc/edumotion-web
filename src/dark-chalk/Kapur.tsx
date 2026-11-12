import type React from "react";
import { useCurrentFrame } from "remotion";

// Filter SVG gaya kapur: garis bergetar pelan (seed berganti tiap 4 frame, deterministik) dan butiran kapur (lubang kecil).
// Pasang <KapurFilter /> sekali di komposisi, lalu bungkus gambar dengan <Kapur>.
export const KapurFilter: React.FC = () => {
  const frame = useCurrentFrame();
  const seed = 2 + (Math.floor(frame / 4) % 3);
  return (
    <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="kapur" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={2} seed={seed} result="wobble" />
          <feDisplacementMap in="SourceGraphic" in2="wobble" scale={7} xChannelSelector="R" yChannelSelector="G" result="bent" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={9} result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3.4 0 0 0 -0.75" result="mask" />
          <feComposite in="bent" in2="mask" operator="in" />
        </filter>
      </defs>
    </svg>
  );
};

export const Kapur: React.FC<{ readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ position: "absolute", inset: 0, filter: "url(#kapur)", ...style }}>{children}</div>
);
