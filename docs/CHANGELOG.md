# История изменений

## 2026-02-19 — Начальная настройка

### Создано

#### Инфраструктура
- Проект на React 19 + Vite 7 + Storybook 10
- CSS Modules для стилизации
- Дизайн-токены в `src/tokens/tokens.css`
- Подключены шрифты RF Dewi Extended, RF Dewi, Manrope
- Настроен деплой на GitHub Pages (`npm run deploy-storybook`)

#### Компоненты

**Button** (`src/components/Button/`)
- 4 варианта: primary (розовый), secondary (тёмный), outline (белый), ghost
- 3 размера: small, medium, large
- Полиморфный: рендерится как `<button>` или `<a>` (если указан `href`)
- Стили точно по Figma

**Typography** (`src/components/Typography/`)
- 8 вариантов текста: h1, h2, h3, subtitle, bodyLarge, body, bodySmall, caption
- Утилитарные пропсы: secondary, center, maxWidth
- Адаптивные размеры для мобильных

**Aurora** (`src/components/Aurora/`)
- Фоновый градиентный эффект (скопирован с jvo.ru/agent)
- Основной радиальный градиент + 3 размытых круга
- Скрывается на мобильных (< 960px)
- Переиспользуемый компонент

**HeroSection** (`src/components/HeroSection/`)
- Полная реализация первого экрана по Figma
- Badge с логотипами JVO Agent × WB × Ozon
- Заголовок H1 (RF Dewi Extended 64px)
- Кнопка CTA (Button secondary large)
- Скриншот интерфейса
- Подзаголовок (RF Dewi 20px)
- Опциональный Aurora фон (`showAurora` проп)

**FeatureSection** (`src/components/FeatureSection/`)
- Двухколоночный layout: текст + медиа
- Поддержка картинок и видео (Kinescope embed)
- Автоматическая конвертация URL Kinescope в embed
- Адаптивное видео с `aspect-ratio: 16/9`
- Reversed layout (медиа слева)
- Список буллетов с галочками

### Исправлено

- Шрифты не загружались → скачаны с Tilda CDN
- RF Dewi vs RF Dewi Extended → добавлен RF Dewi через CDN для subtitle
- Неправильные логотипы WB/Ozon → скопированы из папки templates
- Логотип JVO растягивался → зафиксированы размеры 173.327×31.76px
- Дублирование стилей кнопок → вынесены в компонент Button

### Технические решения

1. **Figma MCP** — подключение к Figma для извлечения точных стилей
2. **CSS переменные** — все цвета/шрифты через токены
3. **Полиморфные компоненты** — Button как button/a
4. **Aspect-ratio** — для адаптивного видео
5. **CSS Modules** — изоляция стилей компонентов

---

## TODO

- [ ] Header с навигацией
- [ ] Footer
- [ ] Остальные секции лендинга (из Figma)
- [ ] Мобильная адаптация
- [ ] Анимации
- [ ] Форма заявки
- [ ] Сборка финальной страницы
