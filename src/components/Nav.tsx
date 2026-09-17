import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import XboxMark from "./XboxMark";

const LINKS = [
  { href: "#incident", label: "Что произошло" },
  { href: "#solutions", label: "Инструкции" },
  { href: "#newbie", label: "0x80a40401" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[3px] w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-xbox-deep via-xbox to-xbox-soft shadow-[0_0_16px_rgba(155,240,11,0.7)] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#050806]/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <XboxMark size={30} className="transition-transform duration-500 group-hover:rotate-[20deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[13px] font-bold tracking-[0.14em]">Xbox Россия Игры и Подписки</span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-xbox/80">
                Xbox Live Guide
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/spelonline"
            target="_blank"
            rel="noreferrer"
            className="group ml-auto inline-flex items-center gap-2.5 rounded-full bg-xbox px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-[#0a1403] transition-all duration-300 hover:shadow-[0_0_34px_-4px_rgba(155,240,11,0.8)] md:ml-0"
          >
            <Send size={13} strokeWidth={2.6} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
