# Контекст для продолжения работы

## Краткое описание

Создаём UI-библиотеку для лендинга JVO Agent (jvo.ru/agent) — AI-менеджер для маркетплейсов.

**Задача:** Перенести дизайн с Tilda на чистый React, сохранив 1:1 соответствие Figma-макету.

## Ключевые ссылки

- **Figma:** https://www.figma.com/design/LrhmZ3j6JYpny2MBME5GcO/
- **Storybook:** https://segamega92.github.io/jvo/
- **GitHub:** https://github.com/SegaMega92/jvo
- **Текущий сайт:** https://jvo.ru/agent

## Как работать

```bash
cd /Users/sergey/JVO
npm run storybook  # localhost:6006
```

## Что уже готово

| Компонент | Статус | Файл |
|-----------|--------|------|
| Button | ✅ Готов | `src/components/Button/` |
| Typography | ✅ Готов | `src/components/Typography/` |
| Aurora | ✅ Готов | `src/components/Aurora/` |
| HeroSection | ✅ Готов | `src/components/HeroSection/` |
| FeatureSection | ✅ Готов | `src/components/FeatureSection/` |

## Важные детали

### Шрифты
- **RF Dewi Extended** — заголовки (H1, H2, кнопки)
- **RF Dewi** — подзаголовки Hero (загружается через CDN)
- **Manrope** — основной текст

### Цвета
- Заголовки: `#200131`
- Розовая кнопка: `#FF8FDA`
- Тёмная кнопка: `#292538`

### Figma MCP
Проект подключен к Figma через MCP. Можно получать стили напрямую:
```
mcp__figma-desktop__get_design_context
```

### Видео Kinescope
FeatureSection поддерживает видео. URL автоматически конвертируется в embed:
```
https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm
→ https://kinescope.io/embed/fiCG9ns1ZgH9jMX5gGEvgm
```

## Структура компонента

```
src/components/ComponentName/
├── index.jsx           # Компонент
├── ComponentName.module.css  # Стили
└── ComponentName.stories.jsx # Stories
```

## Деплой

```bash
npm run deploy-storybook
```
Публикует на GitHub Pages: https://segamega92.github.io/jvo/

## Следующие шаги

1. Посмотреть Figma-макет для следующих секций
2. Реализовать Header и Footer
3. Добавить остальные секции лендинга
4. Собрать финальную страницу

## Папка templates

В `/Users/sergey/JVO/templates/` лежит сохранённая HTML-страница с Tilda — можно использовать как референс для стилей и эффектов.
