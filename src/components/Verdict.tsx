import { Gamepad2, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Verdict() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-32 sm:py-44">
      <img
        src="https://images.pexels.com/photos/5713095/pexels-photo-5713095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050806] via-[#050806]/70 to-[#050806]" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-xbox/[0.09] blur-[140px]" />
      <div className="fx-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-xbox">
            Вердикт
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,7vw,5.4rem)] font-extrabold leading-[1.02] tracking-tight">
            <span className="text-outline block">НЕ ПАНИКУЙТЕ.</span>
            <span className="text-gradient-xbox block drop-shadow-[0_0_46px_rgba(155,240,11,0.3)]">
              ВЫ СНОВА В СЕТИ.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-white/60">
            Это был технический сбой, а не конец эпохи. Обновите DNS или хост —
            и возвращайтесь к играм. Остались вопросы? Напишите нам в Telegram —
            поможем разобраться с вашей конкретной конфигурацией.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://t.me/spelonline"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-xbox px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-[#0a1403] transition-all duration-300 hover:shadow-[0_0_50px_-4px_rgba(155,240,11,0.9)]"
            >
              <Gamepad2 size={16} strokeWidth={2.4} />
              Канал SPELONLINE
            </a>
            <a
              href="https://t.me/spelonline"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/80 transition-all duration-300 hover:border-xbox/50 hover:text-xbox"
            >
              <Send size={14} />
              Задать вопрос
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
