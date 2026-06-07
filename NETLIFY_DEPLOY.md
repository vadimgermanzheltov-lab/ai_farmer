# Публикация на Netlify

## Вариант 1. Быстрая демо-публикация без AI
1. Выполните сборку статической версии:
   `node scripts/build-static.mjs`
2. Откройте [Netlify Drop](https://app.netlify.com/drop).
3. Перетащите папку `dist`.
4. Получите публичную ссылку формата `*.netlify.app`.

В этом режиме сайт работает как демо: без серверного AI-ответа, но со всеми локальными сценариями и рекомендациями.

## Вариант 2. Публикация с безопасным AI через Netlify Functions
Проект можно публиковать напрямую из GitHub без отдельного шага сборки. Netlify развернет статический сайт из корня репозитория и подключит функцию `netlify/functions/openrouter.mjs`.

### Переменные окружения в Netlify
Добавьте в настройках сайта:

- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`
- `OPENROUTER_SITE_NAME`

Пример значений:

```text
OPENROUTER_API_KEY=your_openrouter_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
OPENROUTER_SITE_NAME=Smart Poultry House Demo
```

### Настройки в Netlify
Если файлы проекта лежат в корне репозитория, укажите:

- Base directory: оставить пустым
- Build command: оставить пустым
- Publish directory: оставить пустым или `.`

`netlify.toml` уже задает:

- `publish = "."`
- functions directory: `netlify/functions`
- redirect `/images/*` -> `/public/images/*`

### Что важно
- Не храните реальный OpenRouter key в клиентском `.env` для публичного сайта.
- В публичной версии AI вызывается только через Netlify Function `/.netlify/functions/openrouter`.
- Если переменные окружения не заданы, сайт автоматически работает в демо-режиме.
