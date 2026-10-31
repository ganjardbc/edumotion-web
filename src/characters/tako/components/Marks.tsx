import type React from "react";
import { TAKO_PALETTE as C } from "../assets/palette";

export type MarkName = "sparks" | "zzz" | "question" | "fear";

const Dash: React.FC<{ readonly d: string }> = ({ d }) => <path d={d} fill="none" stroke={C.limbShadow} strokeWidth={15} strokeLinecap="round" />;

export const Tear: React.FC<{ readonly x: number; readonly y: number }> = ({ x, y }) => (
  <path d={`M${x} ${y} C${x + 13} ${y + 18} ${x + 13} ${y + 34} ${x} ${y + 34} C${x - 13} ${y + 34} ${x - 13} ${y + 18} ${x} ${y} Z`} fill={C.tear} />
);

// Tanda di sekitar kepala seperti di panel ekspresi. `float` -1..1 menggerakkannya naik-turun.
export const Marks: React.FC<{ readonly name: MarkName; readonly float: number; readonly tears?: boolean }> = ({ name, float, tears = true }) => (
  <g id="marks" transform={`translate(0 ${float * 5})`}>
    {name === "sparks" ? (
      <>
        <Dash d="M596 150 L586 192" />
        <Dash d="M652 182 L618 212" />
      </>
    ) : null}
    {name === "fear" ? (
      <>
        <Dash d="M596 150 L586 192" />
        <Dash d="M652 182 L618 212" />
        <Dash d="M214 150 L226 190" />
        <Dash d="M158 186 L194 214" />
        {tears ? (
          <>
            <Tear x={224} y={440} />
            <Tear x={576} y={440} />
          </>
        ) : null}
      </>
    ) : null}
    {name === "zzz" ? (
      <g fill="none" stroke={C.dark} strokeLinecap="round" strokeLinejoin="round">
        <path d="M586 196 H626 L586 240 H626" strokeWidth={13} />
        <path d="M644 170 H670 L644 198 H670" strokeWidth={10} />
      </g>
    ) : null}
    {name === "question" ? (
      <g fill="none" stroke={C.dark} strokeLinecap="round" strokeLinejoin="round">
        <path d="M594 152 C594 118 650 118 650 154 C650 180 620 180 620 208" strokeWidth={17} />
        <circle cx={620} cy={238} r={10} fill={C.dark} stroke="none" />
      </g>
    ) : null}
  </g>
);
