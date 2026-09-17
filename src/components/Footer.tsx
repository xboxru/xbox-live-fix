import { MessageCircle, Send, ShoppingBag } from "lucide-react";
import XboxMark from "./XboxMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040703]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <XboxMark size={34} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold tracking-[0.14em]">SPELONLINE</span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-xbox/80">
                  Xbox Live Guide
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/45">
              Гайды, новости и живая поддержка игроков Xbox в России.
              Без паники — только рабочие решения.
            </p>
            <nav className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {[
                ["#incident", "Что произошло"],
                ["#solutions", "Инструкции"],
                ["#newbie", "0x80a40401"],
                ["#top", "Наверх"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="link-underline pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">Поддержка</p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60">
              Будут вопросы — пишите: <span className="font-display font-semibold text-white">Руслан</span>
            </p>
            <a
              href="https://t.me/realfurys"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-3 rounded-full border border-xbox/30 bg-xbox/[0.07] px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-xbox-soft transition-all duration-300 hover:bg-xbox/15 hover:shadow-[0_0_30px_-6px_rgba(155,240,11,0.6)]"
            >
              <MessageCircle size={14} />
              Написать
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">Магазин</p>
            <p className="mt-4 flex items-center gap-2.5 text-[14px] font-medium text-white/70">
              <ShoppingBag size={15} className="text-xbox" />
              Игры и подписки Xbox
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["Купить", "Спросить"].map((label) => (
                <a
                  key={label}
                  href="https://t.me/spelonline"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 transition-all duration-300 hover:border-xbox/50 hover:text-xbox"
                >
                  <Send size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/30">
            © 2026 Xbox Россия Игры и Подписки · t.me/spelonline
          </p>
          <p className="max-w-md font-mono text-[10px] leading-relaxed tracking-wide text-white/25">
            Не является продуктом Microsoft. Xbox и Xbox Live — товарные знаки Microsoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
