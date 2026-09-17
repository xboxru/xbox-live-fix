import { CheckCircle2, XCircle, ServerCrash, CalendarClock, Radio } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TIMELINE = [
  {
    icon: CalendarClock,
    date: "Май 2023",
    title: "Эра обходов",
    text: "Microsoft ограничила для России часть сервисов. Сообщество перешло на обход через прокси-сервер и кастомные DNS — так Xbox Live работал почти год.",
  },
  {
    icon: ServerCrash,
    date: "25 января 2024",
    title: "Прокси-сервер падает",
    text: "Сервер, через который шла авторизация, отказал. У тысяч игроков перестал работать вход в сеть — и пошли слухи о «новых санкциях».",
    hot: true,
  },
  {
    icon: Radio,
    date: "26–27 января 2024",
    title: "Всё снова онлайн",
    text: "Подняты новые DNS и хосты: 45.90.33.120 и 164.90.228.248. Достаточно обновить пару цифр в настройках — и вы в игре.",
  },
];

export default function Incident() {
  return (
    <section id="incident" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="pointer-events-none absolute left-[-20%] top-1/3 h-[500px] w-[500px] rounded-full bg-xbox/[0.06] blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        {/* sticky heading */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="01"
              kicker="Хроника инцидента"
              title={
                <>
                  Что произошло <span className="text-outline-faint">на самом деле</span>
                </>
              }
            />
            <Reveal delay={180}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/55">
                Никакой внезапной блокировки не было. Сломалась неприметная, но критичная
                деталь инфраструктуры обхода — и сеть «отвалилась» у всех, кто сидел через неё.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 rounded-2xl border-l-2 border-xbox bg-xbox/[0.05] p-6">
                <p className="font-display text-[15px] font-semibold leading-snug text-xbox-soft">
                  «Не стоит поддаваться панике. Сбой вызван техническими неполадками,
                  а не санкциями Microsoft.»
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* content */}
        <div className="lg:col-span-7">
          {/* myth vs fact */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="panel panel-hover h-full rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/25 bg-red-400/10 text-red-300">
                    <XCircle size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-300/80">Слух</span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                  «Microsoft ввела <span className="text-white/85 line-through decoration-red-400/60 decoration-2">новые блокировки</span> и санкции —
                  Xbox в России больше не будет работать.»
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="panel h-full rounded-2xl border-xbox/25 bg-xbox/[0.05] p-7 panel-hover">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-xbox/30 bg-xbox/10 text-xbox">
                    <CheckCircle2 size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-xbox">Факт</span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-white/70">
                  <span className="text-white">Отказал прокси-сервер</span>, через который с мая 2023 года
                  обходились старые ограничения. Просто пересесть на новый — и всё.
                </p>
              </div>
            </Reveal>
          </div>

          {/* timeline */}
          <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8 sm:pl-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={i * 120}>
                <div className="group relative">
                  <span
                    className={`absolute -left-8 top-1 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border sm:-left-12 ${
                      t.hot
                        ? "border-xbox/40 bg-[#0d1507] text-xbox shadow-[0_0_28px_-4px_rgba(155,240,11,0.5)]"
                        : "border-white/12 bg-[#0a0e08] text-white/50"
                    }`}
                  >
                    <t.icon size={17} />
                  </span>
                  <span className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${t.hot ? "text-xbox" : "text-white/35"}`}>
                    {t.date}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight sm:text-xl">
                    {t.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-white/55">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
