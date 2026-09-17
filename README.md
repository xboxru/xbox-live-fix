# Xbox Live — Сбой 25.01.2024: разбор и инструкции

Одностраничный гайд в стиле Xbox: разбор причин сбоя Xbox Live 25 января 2024 года,
пошаговые инструкции по восстановлению (DNS, хост в роутере / Keenetic CLI, AdGuard)
и помощь с ошибкой `0x80a40401`.

**Стек:** React 19 · Vite 7 · Tailwind CSS 4 · lucide-react · vite-plugin-singlefile

Вся страница собирается в **один самодостаточный файл** `dist/index.html` —
его можно выложить на любой хостинг без дополнительной настройки.

---

## Локальный запуск

```bash
git clone https://github.com/<ВАШ_НИК>/<ВАШ_РЕПОЗИТОРИЙ>.git
cd <ВАШ_РЕПОЗИТОРИЙ>
npm install
npm run dev
```

Откроется на `http://localhost:5173`.

## Сборка

```bash
npm run build
```

Готовая страница — `dist/index.html` (всё инлайнится: JS + CSS + шрифтовые ссылки).

---

## Деплой на GitHub Pages

В репозитории уже лежит workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
— он автоматически собирает проект и публикует его на Pages при каждом пуше в `main`.

Включение за 1 минуту:

1. Запушьте проект в репозиторий на GitHub.
2. Откройте **Settings → Pages**.
3. В пункте **Build and deployment → Source** выберите **GitHub Actions**.
4. Сделайте любой коммит в `main` (или запустите workflow вручную: **Actions → Deploy to GitHub Pages → Run workflow**).

Готовая страница будет доступна по адресу:
`https://<ВАШ_НИК>.github.io/<ВАШ_РЕПОЗИТОРИЙ>/`

*Так как сайт — один HTML-файл, никаких дополнительных настроек путей (base) не требуется.*

---

## Первый пуш в GitHub

```bash
# после создания пустого репозитория на github.com
git remote add origin https://github.com/<ВАШ_НИК>/<ВАШ_РЕПОЗИТОРИЙ>.git
git branch -M main
git push -u origin main
```

---

*Фанатский гайд сообщества SPELONLINE. Не является продуктом Microsoft.
Xbox и Xbox Live — товарные знаки Microsoft Corporation.*
