import { Asterisk } from "lucide-react";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[60%] z-0 flex items-center justify-center overflow-hidden select-none"
    >
      <span className="absolute whitespace-nowrap font-heading text-[clamp(5rem,24vw,26rem)] uppercase leading-none text-lime opacity-30 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:2px_currentColor] md:opacity-40 md:[-webkit-text-stroke:3px_currentColor]">
        Ethiopian
      </span>

      {/* Giant spinning badge */}
      <div className="relative hidden size-[clamp(3rem,15vw,10rem)] -top-65 items-center justify-center rounded-full bg-forest/80 ring-2 ring-lime/20 md:flex">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 size-full animate-[spin_20s_linear_infinite] motion-reduce:animate-none"
        >
          <defs>
            <path
              id="badge-circle"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text className="fill-lime font-heading text-[8.5px] uppercase tracking-[0.12em]">
            <textPath href="#badge-circle">
              Plan &bull; Celebrate &bull; Remember &bull; Plan &bull; Celebrate
              &bull; Remember &bull;
            </textPath>
          </text>
        </svg>
        <Asterisk
          className="size-1/4 animate-[spin_20s_linear_infinite_reverse] text-orange motion-reduce:animate-none"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}