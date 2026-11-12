import type React from "react";
import { interpolate } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";

const C = TOPIC_COLORS.planet;

// Cakrawala sederhana memberi konteks tanpa mengubah latar kertas berpetak.
export const HorizonLandscape: React.FC<{ readonly y?: number }> = ({ y = 1120 }) => (
  <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
    <path d={`M0 ${y} Q260 ${y - 24} 520 ${y} T1080 ${y}`} fill="none" stroke={C.ink} strokeWidth={8} opacity={0.55} />
    <path d={`M0 ${y + 4} H1080 V1920 H0 Z`} fill={C.shine} opacity={0.42} />
    <g fill={C.rim} stroke={C.ink} strokeWidth={6} strokeLinejoin="round" opacity={0.82}>
      <path d={`M70 ${y} V${y - 155} H180 V${y} Z M98 ${y - 122} h22 v25 H98 Z M137 ${y - 122} h22 v25 H137 Z M98 ${y - 75} h22 v25 H98 Z M137 ${y - 75} h22 v25 H137 Z`} />
      <path d={`M215 ${y} V${y - 95} H315 V${y} Z M244 ${y - 68} h18 v22 h-18 Z M278 ${y - 68} h18 v22 h-18 Z`} />
      <path d={`M800 ${y} V${y - 120} H900 V${y} Z M827 ${y - 90} h20 v24 h-20 Z M861 ${y - 90} h20 v24 h-20 Z M827 ${y - 50} h20 v24 h-20 Z M861 ${y - 50} h20 v24 h-20 Z`} />
      <path d={`M930 ${y} V${y - 175} H1015 V${y} Z M951 ${y - 142} h18 v22 h-18 Z M984 ${y - 142} h18 v22 h-18 Z M951 ${y - 104} h18 v22 h-18 Z M984 ${y - 104} h18 v22 h-18 Z`} />
    </g>
    <g fill={C.main} stroke={C.ink} strokeWidth={6}>
      <path d={`M358 ${y} Q355 ${y - 65} 405 ${y - 86} Q455 ${y - 65} 452 ${y} Z`} />
      <path d={`M390 ${y - 66} Q380 ${y - 104} 405 ${y - 128} Q430 ${y - 104} 420 ${y - 66} Z`} />
      <path d={`M660 ${y} Q657 ${y - 55} 700 ${y - 78} Q743 ${y - 55} 740 ${y} Z`} />
      <path d={`M688 ${y - 57} Q680 ${y - 94} 700 ${y - 116} Q720 ${y - 94} 712 ${y - 57} Z`} />
    </g>
    <g fill={C.ink} opacity={0.28}>
      <circle cx="170" cy="350" r="8" /><circle cx="910" cy="410" r="7" /><circle cx="820" cy="265" r="6" />
      <path d="M300 400 l9 18 20 3-15 14 4 20-18-10-18 10 4-20-15-14 20-3z" />
      <path d="M760 490 l7 14 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2z" />
    </g>
  </svg>
);

// Garis ukuran membantu membandingkan lebar tampak Bulan di dua posisi langit.
export const MeasurementMarks: React.FC<{ readonly x: number; readonly y: number; readonly width?: number }> = ({ x, y, width = 170 }) => (
  <svg width={width + 24} height="42" viewBox={`0 0 ${width + 24} 42`} style={{ position: "absolute", left: x - width / 2 - 12, top: y, overflow: "visible", pointerEvents: "none" }}>
    <path d={`M12 20 H${width + 12} M12 8 V32 M${width + 12} 8 V32`} fill="none" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
    <circle cx="12" cy="20" r="7" fill={C.main} /><circle cx={width + 12} cy="20" r="7" fill={C.main} />
  </svg>
);

// Diagram tebakan awal: Bulan digambarkan dekat Bumi, dengan jarak pendek yang ditandai.
export const NearMoonGuess: React.FC<{ readonly x: number; readonly y: number; readonly size: number }> = ({ x, y, size }) => (
  <svg width={size} height={size} viewBox="0 0 720 720" style={{ position: "absolute", left: x - size / 2, top: y - size / 2, overflow: "visible", pointerEvents: "none" }}>
    <rect x="65" y="70" width="590" height="570" rx="44" fill={C.shine} opacity="0.38" />
    <circle cx="210" cy="455" r="112" fill={C.main} stroke={C.ink} strokeWidth="10" />
    <path d="M142 438 Q162 390 197 407 Q216 423 202 446 Q179 468 142 438 M232 479 Q265 446 288 474 Q292 506 258 529 Q232 518 232 479" fill={C.shine} stroke={C.ink} strokeWidth="6" />
    <circle cx="495" cy="265" r="82" fill={C.shine} stroke={C.ink} strokeWidth="10" />
    <circle cx="464" cy="239" r="17" fill={C.rim} /><circle cx="519" cy="282" r="24" fill={C.rim} /><circle cx="473" cy="301" r="10" fill={C.rim} />
    <path d="M308 425 Q370 365 415 328" fill="none" stroke={C.ink} strokeWidth="8" strokeDasharray="12 14" strokeLinecap="round" />
    <path d="M397 324 L420 323 L414 346" fill="none" stroke={C.ink} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M333 450 L352 450 M341 440 V460" fill="none" stroke={C.main} strokeWidth="8" strokeLinecap="round" />
    <g fontFamily="Nunito, sans-serif" fontWeight="800" fill={C.ink} textAnchor="middle">
      <text x="210" y="614" fontSize="30">BUMI</text>
      <text x="495" y="150" fontSize="30">BULAN</text>
    </g>
  </svg>
);

// Berkas diagram atmosfer: jalur cahaya membelok sedikit, sedangkan Bulan tampak memipih vertikal.
export const AtmosphereDiagram: React.FC<{ readonly x: number; readonly y: number; readonly size: number }> = ({ x, y, size }) => (
  <svg width={size} height={size} viewBox="0 0 300 300" style={{ position: "absolute", left: x - size / 2, top: y - size / 2, overflow: "visible", pointerEvents: "none" }}>
    <circle cx="150" cy="150" r="105" fill={C.shine} opacity="0.35" />
    <circle cx="150" cy="150" r="82" fill="none" stroke={C.rim} strokeWidth="12" strokeDasharray="18 14" />
    <path d="M28 216 Q110 190 202 202 T278 174" fill="none" stroke={C.main} strokeWidth="12" strokeLinecap="round" />
    <path d="M268 160 L282 173 L264 181" fill="none" stroke={C.ink} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="150" cy="150" rx="53" ry="43" fill={C.shine} stroke={C.ink} strokeWidth="8" />
    <circle cx="132" cy="141" r="7" fill={C.rim} /><circle cx="165" cy="163" r="10" fill={C.rim} />
  </svg>
);

export const MoonDisk: React.FC<{ readonly x: number; readonly y: number; readonly size: number; readonly pipih?: boolean; readonly opacity?: number }> = ({ x, y, size, pipih = false, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 300 300" style={{ position: "absolute", left: x - size / 2, top: y - size / 2, overflow: "visible", pointerEvents: "none", opacity }}>
    <ellipse cx="150" cy="150" rx="105" ry={pipih ? 78 : 105} fill={C.shine} stroke={C.ink} strokeWidth="9" />
    <circle cx="115" cy="118" r="17" fill={C.rim} opacity="0.8" />
    <circle cx="177" cy="164" r="25" fill={C.rim} opacity="0.72" />
    <circle cx="121" cy="193" r="10" fill={C.rim} opacity="0.72" />
  </svg>
);

// Penggaris bergerak dari Bulan tinggi ke Bulan dekat cakrawala untuk membandingkan diameter tampaknya.
export const RulerComparison: React.FC<{ readonly x: number; readonly y: number; readonly size: number; readonly progress: number }> = ({ x, y, size, progress }) => {
  const posisi = interpolate(progress, [0, 1], [174, 488], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <svg width={size} height={size} viewBox="0 0 720 720" style={{ position: "absolute", left: x - size / 2, top: y - size / 2, overflow: "visible", pointerEvents: "none" }}>
      <path d="M250 174 V488" fill="none" stroke={C.rim} strokeWidth="5" strokeDasharray="10 14" opacity="0.72" />
      <circle cx="250" cy="174" r="78" fill={C.shine} stroke={C.ink} strokeWidth="9" />
      <circle cx="225" cy="151" r="14" fill={C.rim} /><circle cx="269" cy="184" r="21" fill={C.rim} /><circle cx="232" cy="207" r="9" fill={C.rim} />
      <circle cx="250" cy="488" r="78" fill={C.shine} stroke={C.ink} strokeWidth="9" />
      <circle cx="225" cy="465" r="14" fill={C.rim} /><circle cx="269" cy="498" r="21" fill={C.rim} /><circle cx="232" cy="521" r="9" fill={C.rim} />
      <path d="M40 566 Q250 536 430 566" fill="none" stroke={C.ink} strokeWidth="7" opacity="0.55" />
      <g fill={C.main} stroke={C.ink} strokeWidth="5" strokeLinejoin="round">
        <path d="M80 566 V512 H124 V566 Z M94 530 H107 V543 H94 Z M94 549 H107 V562 H94 Z" />
        <path d="M374 566 V527 H412 V566 Z M386 539 H398 V551 H386 Z" />
        <path d="M43 566 Q45 538 68 529 Q91 538 93 566 Z" />
      </g>
      <g fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="23" fill={C.ink}>
        <text x="86" y="78">TINGGI DI LANGIT</text>
        <text x="42" y="640">DEKAT CAKRAWALA</text>
        <text x="466" y="350" fontSize="18">PENGGARIS</text>
      </g>
      <path d="M438 72 V590" fill="none" stroke={C.rim} strokeWidth="8" strokeLinecap="round" />
      <g stroke={C.ink} strokeWidth="5" strokeLinecap="round">
        <path d="M424 100 H452 M424 142 H452 M424 206 H452 M424 248 H452 M424 414 H452 M424 456 H452 M424 520 H452 M424 562 H452" />
      </g>
      <path d={`M438 ${posisi - 78} V${posisi + 78} M416 ${posisi - 78} H460 M416 ${posisi + 78} H460`} fill="none" stroke={C.main} strokeWidth="12" strokeLinecap="round" />
      <circle cx="438" cy={posisi} r="17" fill={C.shine} stroke={C.ink} strokeWidth="6" />
    </svg>
  );
};
