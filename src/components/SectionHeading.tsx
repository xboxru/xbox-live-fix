import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: ReactNode;
  className?: string;
}

export default function SectionHeading({ index, kicker, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-medium text-xbox">/{index}</span>
          <span className="h-px w-12 bg-gradient-to-r from-xbox/70 to-transparent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-6 font-display text-[clamp(1.7rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-tight">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
