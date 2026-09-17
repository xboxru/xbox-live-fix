import { useRef, type MouseEvent } from "react";
import { ArrowDown, CalendarDays, Send, ShieldCheck, Timer, Wrench } from "lucide-react";
import XboxMark from "./XboxMark";
import Reveal from "./Reveal";

const STATS = [
  { icon: CalendarDays, label: "Дата сбоя", value: "25.01.2024" },
  { icon: Wrench, label: "Причина", value: "Отказ прокси" },
  { icon: ShieldCheck, label: "Санкции Microsoft", value: "Нет", accent: true },
  { icon: Timer, label: "На восстановление", value: "~5 минут" },
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    const el = glowRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - rect.left - 300}px, ${e.clientY - rect.top - 300}px)`;
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouse}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* background layers */}
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_85%_65%_at_50%_28%,black_30%,transparent_100%)]" />
      <div className="absolute -top-40 right-[-15%] h-[620px] w-[620px] rounded-full bg-xbox/[0.13] blur-[130px]" />
      <div className="absolute bottom-[-30%] left-[-15%] h-[520px] w-[520px] rounded-full bg-xbox-deep/25 blur-[130px]" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(155,240,11,0.10),transparent_65%)] transition-transform duration-300 ease-out lg:block"
      />
      <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
        <img
          src="https://images.pexels.com/photos/12380741/pexels-photo-12380741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt=""
          className="h-full w-full object-cover opacity-30 [mask-image:linear-gradient(to_right,transparent,black_55%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050806] via-[#050806]/40 to-transparent" />
        <div className="absolute inset-0 bg-xbox-deep/20 mix-blend-color" />
      </div>
      <div className="fx-noise pointer-events-none absolute inset-0" />

      {/* side annotation */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/25">
          Incident Report — 25 Jan 2024
        </span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:pt-32">
        {/* left column */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-xbox/25 bg-xbox/[0.07] py-2 pl-3 pr-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-xbox opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-xbox" />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-xbox-soft">
                Инцидент закрыт · Работает у всех
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 font-display font-extrabold leading-[0.98] tracking-tight">
              <span className="text-outline block text-[clamp(2.5rem,7.5vw,5.6rem)]">XBOX LIVE</span>
              <span className="text-gradient-xbox block text-[clamp(2.5rem,7.5vw,5.6rem)] drop-shadow-[0_0_40px_rgba(155,240,11,0.25)]">
                СБОЙ 25.01
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
              25 января 2024 года игроки из России массово не могли войти в Xbox Live.
              Паника была напрасной: <span className="text-white">это не санкции Microsoft</span>,
              а отказ прокси-сервера, который обходил блокировки с мая 2023-го.
              Ниже — разбор причин и рабочие инструкции по восстановлению.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-3 rounded-full bg-xbox px-7 py-4 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-[#0a1403] transition-all duration-300 hover:shadow-[0_0_44px_-4px_rgba(155,240,11,0.9)]"
              >
                Восстановить доступ
                <ArrowDown size={15} strokeWidth={2.8} className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="https://t.me/spelonline"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/80 transition-all duration-300 hover:border-xbox/50 hover:text-xbox"
              >
                <Send size={14} strokeWidth={2.4} />
                t.me/spelonline
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="group flex flex-col gap-2 bg-[#070b06]/90 p-4 transition-colors duration-300 hover:bg-[#0a1108]">
                  <span className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/35">
                    <s.icon size={12} className={s.accent ? "text-xbox" : "text-white/40"} />
                    {s.label}
                  </span>
                  <span className={`font-display text-sm font-semibold sm:text-[15px] ${s.accent ? "text-xbox" : "text-white"}`}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right column — sphere */}
        <Reveal delay={250} className="relative mx-auto hidden aspect-square w-full max-w-[460px] select-none sm:block">
          <div className="absolute inset-0 grid place-items-center">
            <span className="absolute h-[46%] w-[46%] animate-pulse-ring rounded-full border-2 border-xbox/50" />
            <span className="absolute h-[46%] w-[46%] animate-pulse-ring rounded-full border border-xbox/40 [animation-delay:1.3s]" />
          </div>
          <div className="absolute inset-[6%] animate-orbit rounded-full border border-dashed border-xbox/20">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-xbox shadow-[0_0_14px_rgba(155,240,11,0.9)]" />
          </div>
          <div className="absolute inset-[16%] animate-orbit-rev rounded-full border border-white/10">
            <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60" />
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-xbox/70" />
          </div>
          <div className="absolute inset-0 grid animate-float place-items-center">
            <XboxMark size={200} glow />
          </div>

          <div className="panel absolute -left-2 top-[14%] animate-float-late rounded-xl px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-xbox" />
              <span className="font-mono text-[11px] text-white/70">xsts.auth — <span className="text-xbox">OK</span></span>
            </div>
          </div>
          <div className="panel absolute -right-3 bottom-[16%] animate-float rounded-xl px-4 py-3 backdrop-blur-md [animation-delay:1.6s]">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Новый DNS</div>
            <div className="mt-1 font-mono text-[13px] text-xbox-soft">45.90.33.120</div>
          </div>
          <div className="panel absolute bottom-[38%] left-[-6%] animate-float rounded-xl px-4 py-3 backdrop-blur-md [animation-delay:3s]">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-xbox [animation-delay:0.8s]" />
              <span className="font-mono text-[11px] text-white/70">Санкций — <span className="text-xbox">нет</span></span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
        <span className="h-8 w-px overflow-hidden bg-white/10">
          <span className="block h-3 w-px animate-bounce bg-xbox" />
        </span>
      </div>
    </section>
  );
}
