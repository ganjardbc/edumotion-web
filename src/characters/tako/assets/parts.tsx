import type React from "react";
import { TAKO_PALETTE as C } from "./palette";

// Digambar mengikuti tampak "Depan" di design-references/tako_character_sheet.png (viewBox 800x800).
// Mata, alis, dan mulut ada di components/ dan expressions/ karena butuh varian.

export const BodyHead: React.FC = () => (
  <g id="body_head">
    <path
      d="M395 170 C430 170 460 180 489 196 C550 225 606 295 606 372 C606 440 560 495 503 518 C508 560 506 610 502 650 C500 668 470 670 440 668 L360 668 C330 670 304 668 302 650 C298 610 296 560 298 521 C240 498 194 440 194 377 C194 300 240 235 302 199 C330 184 360 170 395 170 Z"
      fill={C.primary}
    />
  </g>
);

// Batang antena sewarna badan dan pangkalnya tertanam di kepala, jadi menyambung saat diputar.
export const Antenna: React.FC = () => (
  <g id="antenna">
    <path
      d="M298 215 C306 160 328 100 372 72 L405 122 C382 124 376 148 400 172 L400 240 Z"
      fill={C.primary}
    />
    <ellipse cx={429} cy={82} rx={54} ry={43} fill={C.limbShadow} transform="rotate(-6 429 82)" />
  </g>
);

export const ArmLeft: React.FC = () => (
  <g id="arm_left">
    <path
      d="M300 520 C268 548 236 580 224 606 C216 626 226 646 246 648 C252 650 258 648 262 642 C266 650 276 652 282 646 C288 652 298 646 298 636 C306 615 318 590 326 566 C330 545 316 526 300 520 Z"
      fill={C.limb}
    />
  </g>
);

export const ArmRight: React.FC = () => (
  <g id="arm_right">
    <path
      d="M501 520 C533 548 565 580 577 606 C585 626 575 646 555 648 C549 650 543 648 539 642 C535 650 525 652 519 646 C513 652 503 646 503 636 C495 615 483 590 475 566 C471 545 485 526 501 520 Z"
      fill={C.limb}
    />
  </g>
);

export const LegLeft: React.FC = () => (
  <g id="leg_left">
    <path d="M300 630 L302 700 C296 708 294 730 312 730 L372 730 C392 730 386 712 380 704 L384 640 Z" fill={C.limb} />
  </g>
);

export const LegRight: React.FC = () => (
  <g id="leg_right">
    <path d="M416 640 L420 704 C412 714 412 730 430 730 L490 730 C506 730 506 710 498 700 L502 630 Z" fill={C.limb} />
  </g>
);
