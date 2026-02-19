# Справочник компонентов

## Быстрый старт

```bash
cd /Users/sergey/JVO
npm run storybook
# Открыть http://localhost:6006
```

---

## Button

```jsx
import { Button } from '../Button';

// Primary (розовый)
<Button variant="primary" size="medium">Оставить заявку</Button>

// Secondary (тёмный) - для Hero
<Button variant="secondary" size="large" href="#demo">
  Оставить заявку на демо
</Button>

// Outline (белый)
<Button variant="outline" size="medium">Войти</Button>
```

### Props

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| variant | `'primary'` \| `'secondary'` \| `'outline'` \| `'ghost'` | `'primary'` | Стиль кнопки |
| size | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Размер |
| href | `string` | — | Если указан, рендерит как `<a>` |
| fullWidth | `boolean` | `false` | На всю ширину |
| disabled | `boolean` | `false` | Заблокирована |
| onClick | `function` | — | Обработчик клика |

### Стили из Figma

| Variant | Background | Color | Radius | Font-size |
|---------|------------|-------|--------|-----------|
| primary | #FF8FDA | #101010 | 8px | 13px |
| secondary | #292538 | #FFFFFF | 12px | 16px |
| outline | #FFFFFF | #15181F | 8px | 13px |

---

## Typography

```jsx
import { Typography } from '../Typography';

<Typography variant="h1">Заголовок страницы</Typography>
<Typography variant="h2">Заголовок секции</Typography>
<Typography variant="subtitle" center maxWidth="md">
  Описание под заголовком
</Typography>
<Typography variant="bodyLarge">Текст описания</Typography>
<Typography variant="bodyLarge" secondary>✔ Пункт списка</Typography>
```

### Props

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| variant | см. ниже | `'body'` | Стиль текста |
| as | `elementType` | авто | HTML-тег (`h1`, `p`, `span`...) |
| secondary | `boolean` | `false` | Приглушённый цвет |
| center | `boolean` | `false` | Выравнивание по центру |
| maxWidth | `'sm'` \| `'md'` \| `'lg'` | — | Ограничение ширины |

### Варианты

| Variant | Шрифт | Размер | Вес | Тег по умолчанию |
|---------|-------|--------|-----|------------------|
| h1 | RF Dewi Extended | 64px | 700 | `<h1>` |
| h2 | RF Dewi Extended | 40px | 700 | `<h2>` |
| h3 | RF Dewi Extended | 28px | 700 | `<h3>` |
| subtitle | RF Dewi | 20px | 400 | `<p>` |
| bodyLarge | Manrope | 18px | 500 | `<p>` |
| body | Manrope | 16px | 500 | `<p>` |
| bodySmall | Manrope | 14px | 400 | `<p>` |
| caption | Manrope | 12px | 400 | `<span>` |

---

## Aurora

```jsx
import { Aurora } from '../Aurora';

// Использование в секции
<section style={{ position: 'relative', overflow: 'hidden' }}>
  <Aurora />
  <div style={{ position: 'relative', zIndex: 1 }}>
    {/* контент */}
  </div>
</section>
```

### Структура эффекта

1. **Основной градиент** (1920x1000px, blur 50px):
   ```css
   radial-gradient(
     circle at center,
     rgba(255,255,255,1) 0%,
     rgba(237,255,245,1) 28%,   /* зеленоватый */
     rgba(231,250,255,1) 44%,   /* голубоватый */
     rgba(244,237,255,1) 57%,   /* фиолетовый */
     rgba(255,255,255,1) 67%
   )
   ```

2. **Круги** (все с blur 50px):
   - Cyan: 186x147px, opacity 0.5
   - Dark Purple: 156x173px, opacity 0.1
   - Blue-Purple: 281x350px, opacity 0.5

---

## HeroSection

```jsx
import { HeroSection } from '../HeroSection';

<HeroSection
  title="Продажи на маркетплейсах под контролем. Всегда."
  subtitle="JVO Агент — ваш персональный AI-менеджер..."
  buttonText="Оставить заявку на демо"
  buttonHref="#demo"
  showBadge={true}
  showInterface={true}
  showAurora={true}
/>
```

### Props

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| title | `string` | "Продажи..." | Заголовок H1 |
| subtitle | `string` | "JVO Агент..." | Описание под скриншотом |
| buttonText | `string` | "Оставить заявку на демо" | Текст кнопки |
| buttonHref | `string` | "#demo" | Ссылка кнопки |
| showBadge | `boolean` | `true` | Показать логотипы JVO+WB+Ozon |
| showInterface | `boolean` | `true` | Показать скриншот интерфейса |
| showAurora | `boolean` | `true` | Показать фоновый эффект |

---

## FeatureSection

```jsx
import { FeatureSection } from '../FeatureSection';

// С видео
<FeatureSection
  title="Автоматическое заполнение карточек"
  description="Загрузите изображения или артикулы конкурентов..."
  bullets={[
    'Анализ конкурентов и автозаполнение',
    'SEO-оптимизация описаний',
    'Генерация продающих текстов',
  ]}
  video="https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm"
  buttonText="Попробовать"
  buttonHref="#demo"
/>

// С картинкой, reversed
<FeatureSection
  title="Умное управление ценами"
  description="Агент управляет ценами опираясь на события..."
  bullets={['Пункт 1', 'Пункт 2']}
  image={featureImage}
  imageAlt="Управление ценами"
  reversed={true}
/>
```

### Props

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| title | `string` | **required** | Заголовок H2 |
| description | `string` | **required** | Описание |
| bullets | `string[]` | `[]` | Список преимуществ |
| image | `string` | — | URL картинки |
| imageAlt | `string` | `''` | Alt для картинки |
| video | `string` | — | URL видео (Kinescope) |
| buttonText | `string` | "Оставить заявку" | Текст кнопки |
| buttonHref | `string` | "#demo" | Ссылка кнопки |
| reversed | `boolean` | `false` | Медиа слева, текст справа |

### Видео Kinescope

URL автоматически конвертируется:
- `https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm`
- → `https://kinescope.io/embed/fiCG9ns1ZgH9jMX5gGEvgm`

Видео адаптивное: `aspect-ratio: 16/9`

---

## Дизайн-токены

**Файл:** `src/tokens/tokens.css`

```css
/* Цвета */
--color-heading: #200131;
--color-bg-light: #FFFFFF;
--color-accent-pink: #FF8FDA;
--color-bg-card: #292538;

/* Шрифты */
--font-family-heading: 'RF Dewi Extended', Arial, sans-serif;
--font-family-body: 'RF Dewi', 'Manrope', Arial, sans-serif;
--font-family-primary: 'Manrope', Arial, sans-serif;

/* Радиусы */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
```

---

## Структура файлов компонента

```
src/components/Button/
├── index.jsx           # React компонент
├── Button.module.css   # CSS стили
└── Button.stories.jsx  # Storybook stories
```

Все компоненты экспортируются как named export:
```jsx
export function Button() { ... }
export default Button;
```

Импорт:
```jsx
import { Button } from '../components/Button';
// или
import Button from '../components/Button';
```
