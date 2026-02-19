# JVO Agent UI Playbook

## Обзор проекта

UI-библиотека компонентов для страницы [jvo.ru/agent](https://jvo.ru/agent) — лендинга AI-менеджера для автоматизации продаж на маркетплейсах (Wildberries, Ozon).

**Цель:** Заменить текущий сайт на Tilda чистой React-реализацией с 1:1 соответствием Figma-макетам.

**Figma-макет:** https://www.figma.com/design/LrhmZ3j6JYpny2MBME5GcO/

**GitHub:** https://github.com/SegaMega92/jvo

**Storybook (GitHub Pages):** https://segamega92.github.io/jvo/

---

## Технологический стек

| Технология | Версия | Назначение |
|------------|--------|------------|
| React | 19.2.0 | UI-фреймворк |
| Vite | 7.3.1 | Сборщик |
| Storybook | 10.2.9 | Документация и playground |
| CSS Modules | — | Изолированные стили |
| PropTypes | 15.8.1 | Валидация пропсов |
| gh-pages | 6.3.0 | Деплой на GitHub Pages |

**Без TypeScript, без CSS-in-JS** — чистый React + CSS.

---

## Структура проекта

```
JVO/
├── docs/                          # Документация
├── src/
│   ├── assets/
│   │   ├── fonts/                 # Шрифты (RF Dewi, Manrope)
│   │   │   └── fonts.css          # @font-face декларации
│   │   ├── images/                # Изображения
│   │   │   ├── hero-interface.png # Скриншот интерфейса для Hero
│   │   │   └── ...
│   │   ├── logos/                 # Логотипы
│   │   │   ├── jvo-agent.svg      # Логотип JVO Агент
│   │   │   ├── wb-logo.svg        # Wildberries
│   │   │   └── ozon-logo.svg      # Ozon
│   │   └── features/              # Изображения для секций
│   ├── components/                # React-компоненты
│   │   ├── Aurora/                # Фоновый градиентный эффект
│   │   ├── Button/                # Кнопка (primary/secondary/outline/ghost)
│   │   ├── Typography/            # Типографика (h1-h3, body, subtitle)
│   │   ├── HeroSection/           # Главный экран
│   │   ├── FeatureSection/        # Секция с фичей (текст + медиа)
│   │   └── ...                    # Другие секции
│   ├── tokens/
│   │   └── tokens.css             # Дизайн-токены (цвета, отступы, шрифты)
│   └── main.jsx                   # Точка входа
├── templates/                     # Исходники с Tilda (для референса)
├── storybook-static/              # Собранный Storybook
├── package.json
└── vite.config.js
```

---

## Дизайн-система

### Шрифты

| Переменная | Шрифт | Использование |
|------------|-------|---------------|
| `--font-family-heading` | RF Dewi Extended | Заголовки H1-H3 |
| `--font-family-body` | RF Dewi | Подзаголовки, описания в Hero |
| `--font-family-primary` | Manrope | Основной текст, буллеты |

**Загрузка шрифтов:**
- RF Dewi Extended — локальные файлы (`src/assets/fonts/`)
- RF Dewi — CDN (`https://db.onlinewebfonts.com/...`)
- Manrope — локальные файлы

### Цвета

```css
/* Основные */
--color-heading: #200131;           /* Заголовки */
--color-bg-light: #FFFFFF;          /* Фон страницы */
--color-accent-pink: #FF8FDA;       /* Акцентный розовый */

/* Кнопки */
--color-bg-card: #292538;           /* Secondary button (тёмный) */

/* Текст */
--color-text-dark-primary: #101010;
--color-text-dark-secondary: #505050;
```

### Типографика (из Figma)

| Элемент | Шрифт | Размер | Вес | Letter-spacing |
|---------|-------|--------|-----|----------------|
| H1 | RF Dewi Extended | 64px | 700 | -1.92px |
| H2 | RF Dewi Extended | 40px | 700 | -1.2px |
| H3 | RF Dewi Extended | 28px | 700 | -0.84px |
| Subtitle | RF Dewi | 20px | 400 | 0.4px |
| Body Large | Manrope | 18px | 500 | 0.36px |
| Body | Manrope | 16px | 500 | 0.32px |

---

## Компоненты

### Button

**Файл:** `src/components/Button/index.jsx`

Универсальная кнопка с поддержкой ссылок.

```jsx
// Как кнопка
<Button variant="primary" size="medium" onClick={handleClick}>
  Оставить заявку
</Button>

// Как ссылка
<Button variant="secondary" size="large" href="#demo">
  Оставить заявку на демо
</Button>
```

**Варианты:**
- `primary` — розовый (#FF8FDA), чёрный текст, radius 8px
- `secondary` — тёмный (#292538), белый текст, radius 12px
- `outline` — белый фон, тёмный текст
- `ghost` — прозрачный

**Размеры:** `small` (36px), `medium` (48px), `large` (64px)

---

### Typography

**Файл:** `src/components/Typography/index.jsx`

Компонент для типографики с вариантами из дизайн-системы.

```jsx
<Typography variant="h1">Заголовок</Typography>
<Typography variant="subtitle" center maxWidth="md">Описание</Typography>
<Typography variant="bodyLarge" secondary>Текст буллета</Typography>
```

**Варианты:** `h1`, `h2`, `h3`, `subtitle`, `bodyLarge`, `body`, `bodySmall`, `caption`

**Пропсы:**
- `secondary` — приглушённый цвет (#3d3e41)
- `center` — выравнивание по центру
- `maxWidth` — ограничение ширины (`sm`/`md`/`lg`)

---

### Aurora

**Файл:** `src/components/Aurora/index.jsx`

Фоновый градиентный эффект с размытыми кругами (скопирован с Tilda).

```jsx
<section style={{ position: 'relative' }}>
  <Aurora />
  {/* контент */}
</section>
```

**Состав:**
- Основной радиальный градиент (белый → зелёный → голубой → фиолетовый)
- 3 размытых круга (cyan, darkPurple, bluePurple)
- `filter: blur(50px)`
- Скрывается на мобильных (< 960px)

---

### HeroSection

**Файл:** `src/components/HeroSection/index.jsx`

Главный экран лендинга.

```jsx
<HeroSection
  title="Продажи на маркетплейсах под контролем. Всегда."
  subtitle="JVO Агент — ваш персональный AI-менеджер..."
  buttonText="Оставить заявку на демо"
  buttonHref="#demo"
  showBadge={true}      // Логотипы JVO + WB + Ozon
  showInterface={true}  // Скриншот интерфейса
  showAurora={true}     // Фоновый эффект
/>
```

**Элементы:**
- Aurora фон (опционально)
- Badge с логотипами (JVO Agent × WB × Ozon)
- Заголовок H1 (RF Dewi Extended 64px)
- Кнопка CTA (secondary, large)
- Скриншот интерфейса
- Подзаголовок (RF Dewi 20px)

---

### FeatureSection

**Файл:** `src/components/FeatureSection/index.jsx`

Секция с описанием фичи: текст слева, медиа справа.

```jsx
// С видео
<FeatureSection
  title="Автоматическое заполнение карточек"
  description="Загрузите изображения или артикулы конкурентов..."
  bullets={['Пункт 1', 'Пункт 2', 'Пункт 3']}
  video="https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm"
  buttonText="Попробовать"
  reversed={false}
/>

// С картинкой
<FeatureSection
  title="Умное управление ценами"
  description="Агент управляет ценами..."
  image={featureImage}
  imageAlt="Описание"
  reversed={true}  // Картинка слева, текст справа
/>
```

**Медиа:**
- Поддерживает `image` или `video` (Kinescope embed)
- Автоматически конвертирует URL Kinescope в embed
- Адаптивное видео с `aspect-ratio: 16/9`

---

## Команды

```bash
# Разработка
npm run storybook        # Запустить Storybook на localhost:6006

# Сборка
npm run build-storybook  # Собрать статический Storybook

# Деплой
npm run deploy-storybook # Собрать и опубликовать на GitHub Pages
```

---

## Деплой на GitHub Pages

1. Выполнить `npm run deploy-storybook`
2. Включить GitHub Pages в настройках репозитория:
   - Settings → Pages → Source: `gh-pages` branch
3. Ссылка: https://segamega92.github.io/jvo/

---

## Архитектурные решения

### CSS Modules
Каждый компонент имеет изолированные стили в `.module.css` файле. Классы генерируются автоматически с уникальными хэшами.

### Полиморфные компоненты
Button может рендериться как `<button>` или `<a>` в зависимости от пропса `href`.

### Дизайн-токены
Все значения цветов, шрифтов, отступов вынесены в CSS-переменные (`src/tokens/tokens.css`).

### Figma MCP
Проект подключен к Figma через MCP (Model Context Protocol) для извлечения точных стилей из макета.

---

## Что сделано

- [x] Настроен проект (React + Vite + Storybook)
- [x] Подключены шрифты (RF Dewi Extended, RF Dewi, Manrope)
- [x] Созданы дизайн-токены
- [x] Компонент Button (4 варианта, 3 размера, поддержка ссылок)
- [x] Компонент Typography (8 вариантов)
- [x] Компонент Aurora (фоновый эффект с Tilda)
- [x] Секция HeroSection (полная реализация по Figma)
- [x] Секция FeatureSection (поддержка видео Kinescope)
- [x] Деплой на GitHub Pages

---

## Что осталось сделать

- [ ] Секция Header (навигация)
- [ ] Секция Footer
- [ ] Остальные секции лендинга
- [ ] Мобильная адаптация всех секций
- [ ] Анимации появления элементов
- [ ] Форма заявки
- [ ] Интеграция с CRM/аналитикой
- [ ] Финальная сборка страницы

---

## Ресурсы

- **Figma:** https://www.figma.com/design/LrhmZ3j6JYpny2MBME5GcO/
- **Текущий сайт (Tilda):** https://jvo.ru/agent
- **GitHub:** https://github.com/SegaMega92/jvo
- **Storybook:** https://segamega92.github.io/jvo/

---

## Контакты

Проект создан для JVO — сервиса автоматизации продаж на маркетплейсах.
