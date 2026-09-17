import { ArrowUpRight, BookOpen, Bug } from "lucide-react";
import Reveal from "./Reveal";

const GUIDES = ["— 1 —", "— 2 —", "— 3 —", "— 4 —"];

export default function NewXbox() {
  return (
    <section id="newbie" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="panel relative overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-2">
              {/* photo side */}
              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
                <img
                  src="https://images.pexels.com/photos/12401185/pexels-photo-12401185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Xbox Series с геймпадом"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050806]/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0e09]" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-xbox/30 bg-[#050806]/80 px-5 py-2.5 backdrop-blur-md">
                  <Bug size={14} className="text-xbox" />
                  <span className="font-mono text-[12.5px] tracking-wide text-xbox-soft">0x80a40401</span>
                </div>
              </div>

              {/* content side */}
              <div className="relative p-8 sm:p-12">
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-medium text-xbox">/03</span>
                  <span className="h-px w-12 bg-gradient-to-r from-xbox/70 to-transparent" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Для новичков
                  </span>
                </div>
                <h2 className="mt-6 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.1] tracking-tight">
                  Только купили Xbox <span className="text-outline-faint">и всё сломалось?</span>
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
                  Спокойствие. Если при первом включении консоль встречает вас ошибкой
                  <span className="font-mono text-[13px] text-xbox-soft"> 0x80a40401</span> — это тот же
                  вопрос настройки сети. Собрали все решения в четырёх гайдах:
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {GUIDES.map((g) => (
                    <a
                      key={g}
                      href="https://t.me/spelonline/2953"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-xbox/50 hover:bg-xbox/[0.06]"
                    >
                      <span className="font-display text-lg font-bold text-white/80 transition-colors group-hover:text-xbox">
                        {g}
                      </span>
                      <ArrowUpRight size={16} className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-xbox" />
                    </a>
                  ))}
                </div>

                <a
                  href="https://t.me/spelonline/3522"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 flex items-center justify-between rounded-2xl border border-xbox/25 bg-xbox/[0.06] p-5 transition-all duration-300 hover:bg-xbox/[0.12] hover:shadow-[0_0_36px_-10px_rgba(155,240,11,0.5)]"
                >
                  <span className="flex items-center gap-3.5">
                    <BookOpen size={18} className="text-xbox" />
                    <span className="font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-xbox-soft">
                      Все гайды по настройке — здесь
                    </span>
                  </span>
                  <ArrowUpRight size={17} className="text-xbox transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
