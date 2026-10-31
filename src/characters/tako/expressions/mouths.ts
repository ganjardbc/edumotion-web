import type { MouthVariant } from "../components/Mouth";
import type { ExpressionName } from "../types";

// Varian mulut untuk tiap ekspresi di sekitar titik (400,450), mengikuti panel "Ekspresi Wajah" di tako_character_sheet.png.
// Tertawa dan berpikir tidak ada di lembar karakter, jadi digambar dengan gaya yang sama.
export const MOUTHS: Record<ExpressionName, MouthVariant> = {
  happy: [
    { d: "M353 436 C351 424 367 416 377 420 C387 426 409 426 419 420 C431 412 449 420 447 436 C443 464 423 482 399 482 C375 482 357 464 353 436 Z", kind: "ink" },
    { d: "M370 466 C377 452 413 452 421 466 C413 480 381 480 370 466 Z", kind: "accent" },
  ],
  curious: [
    { d: "M375 444 Q400 454 425 444 Q421 472 400 472 Q379 472 375 444 Z", kind: "ink" },
    { d: "M385 462 Q400 454 415 462 Q409 471 400 471 Q391 471 385 462 Z", kind: "accent" },
  ],
  surprised: [
    { d: "M400 424 C422 424 428 448 426 462 C424 480 414 486 400 486 C386 486 376 480 374 462 C372 448 378 424 400 424 Z", kind: "ink" },
    { d: "M384 474 Q400 462 416 474 Q410 484 400 484 Q390 484 384 474 Z", kind: "accent" },
  ],
  angry: [{ d: "M378 470 Q400 450 422 470", kind: "line" }],
  sad: [{ d: "M382 470 Q400 454 418 470", kind: "line" }],
  sleepy: [{ d: "M386 466 Q400 456 414 466", kind: "line" }],
  confused: [{ d: "M370 460 Q384 444 399 460 T429 460", kind: "line" }],
  scared: [
    { d: "M371 456 Q400 426 429 456 Q433 486 400 488 Q367 486 371 456 Z", kind: "ink" },
    { d: "M382 476 Q400 462 418 476 Q410 487 400 487 Q390 487 382 476 Z", kind: "accent" },
  ],
  laughing: [
    { d: "M342 426 Q400 414 458 426 Q452 494 400 498 Q348 494 342 426 Z", kind: "ink" },
    { d: "M369 474 Q400 454 431 474 Q419 496 400 496 Q381 496 369 474 Z", kind: "accent" },
  ],
  thinking: [{ d: "M413 456 Q423 444 433 456 Q433 472 423 472 Q413 470 413 456 Z", kind: "ink" }],
};
