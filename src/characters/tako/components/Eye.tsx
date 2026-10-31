import type React from "react";
import { TAKO_PALETTE as C } from "../assets/palette";
import { EYES, type EyeGeometry, GAZE_RANGE } from "../rig/pivots";
import type { Side } from "../types";

// Warna mata; bawaan warna Tako.
export type EyeColors = { readonly ball: string; readonly pupil: string; readonly lid: string; readonly ink: string };

const TAKO_EYE: EyeColors = { ball: C.white, pupil: C.dark, lid: C.primary, ink: C.dark };

export type EyeProps = {
  readonly side: Side;
  readonly clipId: string;
  readonly gazeX: number;
  readonly gazeY: number;
  // 0..1, kedipan (bola mata dipipihkan vertikal).
  readonly blink: number;
  // 0..1, kelopak atas yang menutup sebagian (mengantuk, marah, sedih).
  readonly lid: number;
  // Kemiringan kelopak; positif = sisi dalam (dekat mata satunya) lebih rendah.
  readonly lidTilt: number;
  readonly pupilScale: number;
  // Mata tertutup melengkung "^" (tertawa); menggantikan bola mata.
  readonly arc: boolean;
  // Untuk karakter lain: geometri dan warna sendiri. `dot` = mata titik tanpa putih mata; gaze menggeser seluruh mata.
  readonly geometry?: EyeGeometry;
  readonly colors?: EyeColors;
  readonly dot?: boolean;
  readonly arcSpan?: number;
  readonly arcWidth?: number;
};

export const Eye: React.FC<EyeProps> = ({
  side,
  clipId,
  gazeX,
  gazeY,
  blink,
  lid,
  lidTilt,
  pupilScale,
  arc,
  geometry,
  colors = TAKO_EYE,
  dot = false,
  arcSpan,
  arcWidth = 15,
}) => {
  const g = geometry ?? EYES[side];
  const id = `eye_${side}`;

  if (arc) {
    const w = arcSpan ?? g.rx * 0.6;
    return (
      <g id={id}>
        <path
          d={`M${g.cx - w} ${g.cy + 12} Q${g.cx} ${g.cy - g.ry * 0.7} ${g.cx + w} ${g.cy + 12}`}
          fill="none"
          stroke={colors.ink}
          strokeWidth={arcWidth}
          strokeLinecap="round"
        />
      </g>
    );
  }

  const dx = gazeX * GAZE_RANGE.x;
  const dy = gazeY * GAZE_RANGE.y;
  const p = g.pupil;
  // Pupil diskalakan di pusatnya sendiri, lalu digeser; kilau ikut pupil.
  const pupilTransform = `${dot ? "" : `translate(${dx} ${dy}) `}translate(${p.cx} ${p.cy}) scale(${pupilScale}) translate(${-p.cx} ${-p.cy})`;
  const tilt = side === "left" ? lidTilt : -lidTilt;
  const top = g.cy - g.ry - 90;
  const lidEdge = g.cy - g.ry + lid * 2 * g.ry;

  return (
    <g id={id} transform={`${dot ? `translate(${dx} ${dy}) ` : ""}translate(${g.cx} ${g.cy}) scale(1 ${1 - 0.92 * blink}) translate(${-g.cx} ${-g.cy})`}>
      <ellipse cx={g.cx} cy={g.cy} rx={g.rx} ry={g.ry} fill={colors.ball} />
      <clipPath id={`${clipId}-ball`}>
        <ellipse cx={g.cx} cy={g.cy} rx={g.rx} ry={g.ry} />
      </clipPath>
      <g clipPath={`url(#${clipId}-ball)`}>
        <g transform={pupilTransform}>
          <ellipse cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry} fill={colors.pupil} />
          <circle cx={g.glint.cx} cy={g.glint.cy} r={g.glint.r} fill={C.white} />
        </g>
      </g>
      <clipPath id={clipId}>
        <ellipse cx={g.cx} cy={g.cy} rx={g.rx + 2} ry={g.ry + 2} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect
          x={g.cx - g.rx - 40}
          y={top}
          width={g.rx * 2 + 80}
          height={Math.max(0, lidEdge - top)}
          fill={colors.lid}
          transform={`rotate(${tilt} ${g.cx} ${g.cy})`}
        />
      </g>
    </g>
  );
};
