import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyChipProps {
  value: string;
  label?: string;
  big?: boolean;
  muted?: boolean;
}

export async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

export default function CopyChip({ value, label, big = false, muted = false }: CopyChipProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(value);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group relative inline-flex items-center gap-3 rounded-xl border font-mono transition-all duration-300 cursor-pointer ${
        big ? "px-5 py-4 text-lg sm:text-xl" : "px-4 py-2.5 text-sm"
      } ${
        muted
          ? "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25"
          : "border-xbox/25 bg-xbox/[0.06] text-xbox-soft hover:border-xbox/60 hover:bg-xbox/[0.12] hover:shadow-[0_0_36px_-8px_rgba(155,240,11,0.5)]"
      }`}
      title="Нажмите, чтобы скопировать"
    >
      {label && (
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</span>
      )}
      <span className="tracking-wide">{value}</span>
      <span
        className={`grid place-items-center rounded-md transition-all duration-300 ${
          copied ? "text-xbox" : "text-white/35 group-hover:text-xbox"
        }`}
      >
        {copied ? <Check size={big ? 18 : 14} strokeWidth={2.6} /> : <Copy size={big ? 18 : 14} strokeWidth={2.2} />}
      </span>
      <span
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-xbox/30 bg-[#0c120a] px-2.5 py-1 font-mono text-[11px] text-xbox transition-all duration-300 ${
          copied ? "opacity-100 -translate-y-1" : "opacity-0"
        }`}
      >
        Скопировано
      </span>
    </button>
  );
}
