const ITEMS = [
  { text: "Xbox Live — Online", hot: true },
  { text: "Авторизация восстановлена", hot: false },
  { text: "xsts.auth.xboxlive.com — OK", hot: false },
  { text: "Санкций со стороны Microsoft нет", hot: true },
  { text: "Причина — отказ прокси-сервера", hot: false },
  { text: "Новый DNS: 45.90.33.120", hot: true },
  { text: "Новый хост: 164.90.228.248", hot: false },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap font-mono text-[11.5px] uppercase tracking-[0.24em] ${
              item.hot ? "text-xbox" : "text-white/45"
            }`}
          >
            {item.text}
          </span>
          <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-xbox/50" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-xbox/15 bg-[#070b05] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070b05] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070b05] to-transparent" />
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
