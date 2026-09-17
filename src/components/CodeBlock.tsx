import { useState } from "react";
import { Check, Copy, TerminalSquare } from "lucide-react";
import { copyText } from "./CopyChip";

interface CodeLine {
  text: string;
  tone?: "cmd" | "ok" | "dim";
}

interface CodeBlockProps {
  title: string;
  lines: CodeLine[];
}

export default function CodeBlock({ title, lines }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(lines.map((l) => l.text).join("\n"));
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070b06] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <i className="h-2.5 w-2.5 rounded-full bg-xbox/80" />
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
          <TerminalSquare size={13} className="text-xbox/80" />
          {title}
        </span>
        <button
          onClick={handleCopy}
          className="ml-auto inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-white/55 transition-all duration-300 hover:border-xbox/50 hover:text-xbox"
        >
          {copied ? <Check size={12} className="text-xbox" /> : <Copy size={12} />}
          {copied ? "Скопировано" : "Копировать всё"}
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <div className="pointer-events-none absolute left-0 h-px w-full animate-scanline bg-gradient-to-r from-transparent via-xbox/40 to-transparent" />
        <pre className="px-4 py-4 font-mono text-[12.5px] leading-[1.9] sm:text-[13.5px]">
          {lines.map((line, i) => (
            <div key={i} className="flex items-baseline gap-4">
              <span className="w-5 shrink-0 select-none text-right text-white/20">{String(i + 1).padStart(2, "0")}</span>
              <code
                className={
                  line.tone === "ok"
                    ? "text-xbox"
                    : line.tone === "dim"
                      ? "text-white/35 italic"
                      : "text-[#d7f7b4]"
                }
              >
                {line.text}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
