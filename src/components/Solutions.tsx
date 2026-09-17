import {
  Wifi,
  Router,
  Shield,
  Zap,
  Info,
  AlertTriangle,
  ChevronRight,
  ExternalLink,
  Trash2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CopyChip from "./CopyChip";
import CodeBlock from "./CodeBlock";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface Method {
  index: string;
  icon: LucideIcon;
  title: string;
  badges: string[];
  accent?: boolean;
  body: ReactNode;
}

function Note({ tone, icon: Icon, children }: { tone: "info" | "warn"; icon: LucideIcon; children: ReactNode }) {
  return (
    <div
      className={`flex items-start gap-3.5 rounded-xl border p-4.5 text-[13.5px] leading-relaxed ${
        tone === "warn"
          ? "border-amber-300/25 bg-amber-300/[0.06] text-amber-100/85"
          : "border-xbox/25 bg-xbox/[0.05] text-white/70"
      }`}
    >
      <Icon size={17} className={`mt-0.5 shrink-0 ${tone === "warn" ? "text-amber-300" : "text-xbox"}`} />
      <p>{children}</p>
    </div>
  );
}

const METHODS: Method[] = [
  {
    index: "01",
    icon: Wifi,
    title: "DNS-сервер — самый простой путь",
    badges: ["Проще всего", "1–2 минуты"],
    accent: true,
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-white/60">
          Если раньше для обхода блокировок вы просто вводили DNS в консоли или роутере —
          пропишите обновлённый адрес:
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyChip value="45.90.33.120" big />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            нажмите, чтобы скопировать
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] text-white/50">
          {["Сеть", "Доп. настройки", "DNS вручную", "45.90.33.120"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              <span className={i === arr.length - 1 ? "text-xbox" : ""}>{s}</span>
              {i < arr.length - 1 && <ChevronRight size={12} className="text-white/25" />}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Note tone="info" icon={Info}>
            Если меняете DNS <span className="text-white">на роутере</span> — после смены обязательно
            переподключитесь к Wi-Fi сети. Это важно: без переподключения консоль продолжит ходить по старому адресу.
          </Note>
        </div>
      </>
    ),
  },
  {
    index: "02",
    icon: Router,
    title: "Замена хоста в роутере",
    badges: ["Keenetic · SNR · MikroTik", "D-Link · Ростелеком G-PON"],
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-white/60">
          Если вы использовали хост <span className="font-mono text-[13px] text-white/85 line-through decoration-white/40">50.7.85.221</span> в
          роутере — замените его на новый.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyChip value="31.129.110.240" label="Основной" big />
        </div>

        <div className="mt-8">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/40">
            Инструкция для Keenetic — CLI: http://192.168.1.1/a или http://192.168.0.1/a
          </p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {["1 — Удалить старый хост", "2 — Добавить новый", "3 — Сохранить конфиг"].map((s) => (
              <div key={s} className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 font-mono text-[11px] text-white/55">
                {s}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <CodeBlock
              title="Keenetic CLI · одна строка = одна команда"
              lines={[
                { text: "no ip host user.auth.xboxlive.com", tone: "cmd" },
                { text: "no ip host xsts.auth.xboxlive.com", tone: "cmd" },
                { text: "ip host xsts.auth.xboxlive.com 31.129.110.240", tone: "ок" },
                { text: "system configuration save", tone: "ok" },
              ]}
            />
          </div>
        </div>

        <div className="mt-6">
          <Note tone="warn" icon={AlertTriangle}>
            <span>
              Важно: <span className="font-semibold text-white">DNS на консоли — автоматические!</span>{" "}
              Четвёртая строка (31.129.110.240) — запасной вариант, используйте её вместо третьей,
              если основной хост не отвечает.
            </span>
          </Note>
        </div>
      </>
    ),
  },
  {
    index: "03",
    icon: Shield,
    title: "AdGuard — обновляем фильтр",
    badges: ["Если использовали AdGuard"],
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-white/60">
          В AdGuard обновите адрес хоста для домена <span className="font-mono text-[13px] text-xbox-soft">xsts</span> —
          и удалите устаревшую строку:
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyChip value="164.90.228.248" label="Новый хост" big />
          <CopyChip value="31.129.110.240" label="Если первый не работает" muted />
        </div>
        <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.05] px-4 py-3">
          <Trash2 size={15} className="text-red-300" />
          <span className="font-mono text-[13px] text-white/50 line-through decoration-red-300/60">user.auth.xboxlive.com</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-300/80">строку удалить</span>
        </div>
        <div className="mt-6">
          <a
            href="https://t.me/spelonline"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-xbox/90 transition-colors hover:text-xbox"
          >
            Подробная настройка AdGuard
            <ExternalLink size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </>
    ),
  },
  {
    index: "04",
    icon: Zap,
    title: "Альтернатива AdGuard",
    badges: ["Без лишнего софта", "1 минута"],
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-white/60">
          Не хотите держать AdGuard ради одной строки? Просто используйте DNS
          <span className="text-white"> на самой консоли</span> — тот же эффект, ноль дополнительных программ:
        </p>
        <div className="mt-6">
          <CopyChip value="45.90.33.120" big />
        </div>
      </>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 border-t border-white/5 py-28 sm:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_20%,transparent_100%)]" />
      <div className="pointer-events-none absolute right-[-18%] top-24 h-[480px] w-[480px] rounded-full bg-xbox/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="02"
            kicker="Пошаговое восстановление"
            title={
              <>
                Возвращаем <span className="text-gradient-xbox">Xbox Live</span> к жизни
              </>
            }
          />
          <Reveal delay={150}>
            <p className="max-w-xs pb-2 text-[14px] leading-relaxed text-white/50">
              Четыре рабочих способа — от простого к продвинутому. Выберите тот,
              каким пользовались раньше.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-7">
          {METHODS.map((m, i) => (
            <Reveal key={m.index} delay={i * 60}>
              <article
                className={`panel panel-hover relative overflow-hidden rounded-3xl p-7 sm:p-10 ${
                  m.accent ? "border-xbox/30" : ""
                }`}
              >
                {m.accent && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-xbox/10 blur-3xl" />
                )}
                <div className="grid gap-9 lg:grid-cols-[230px_1fr]">
                  <div className="flex flex-row items-start gap-5 lg:flex-col lg:gap-0">
                    <span className="font-display text-[52px] font-extrabold leading-none text-outline-faint lg:text-[64px]">
                      {m.index}
                    </span>
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border lg:mt-6 ${
                        m.accent
                          ? "border-xbox/40 bg-xbox/10 text-xbox shadow-[0_0_26px_-6px_rgba(155,240,11,0.6)]"
                          : "border-white/12 bg-white/[0.04] text-white/70"
                      }`}
                    >
                      <m.icon size={21} strokeWidth={2} />
                    </span>
                    <div className="flex flex-wrap gap-2 lg:mt-6">
                      {m.badges.map((b) => (
                        <span
                          key={b}
                          className={`rounded-full border px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] ${
                            m.accent
                              ? "border-xbox/30 bg-xbox/[0.07] text-xbox-soft"
                              : "border-white/12 bg-white/[0.03] text-white/45"
                          }`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-[26px]">
                      {m.title}
                    </h3>
                    <div className="mt-5">{m.body}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
