import { HeroBlock } from './index';
import heroIllustration from '../../../assets/hero-illustration-agent.png';
import heroBlockBg from '../../../assets/hero-block-bg.png';

export default {
  title: 'Sections/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
};

// Базовый вариант - Агент коммуникаций
export const Default = {
  args: {
    features: [
      'Оплата только за результат — от 1,3 ₽ за действие',
      'Кросс-продажи до 5 артикулов с проверкой остатков',
      'Готовые отчёты для производства, логистики и маркетинга',
    ],
    buttonText: 'Подключить ИИ-агента',
    buttonHref: '#demo',
    illustration: heroIllustration,
    illustrationAlt: 'Автоматические ответы на отзывы',
    backgroundImage: heroBlockBg,
  },
};

// Другой вариант фич
export const AlternativeFeatures = {
  args: {
    features: [
      'Автоматические ответы на отзывы 24/7',
      'Персонализация на основе истории покупок',
      'Интеграция с Wildberries, Ozon, Яндекс.Маркет',
      'Аналитика настроений покупателей',
    ],
    buttonText: 'Начать бесплатно',
    buttonHref: '#start',
    illustration: heroIllustration,
    backgroundImage: heroBlockBg,
  },
};

// Минимальный вариант
export const Minimal = {
  args: {
    features: [
      'Быстрый старт за 5 минут',
      'Без программистов и интеграций',
    ],
    buttonText: 'Попробовать',
    buttonHref: '#try',
    illustration: heroIllustration,
    backgroundImage: heroBlockBg,
  },
};

// В контексте с SectionHeader
export const WithSectionHeader = {
  args: {
    features: [
      'Оплата только за результат — от 1,3 ₽ за действие',
      'Кросс-продажи до 5 артикулов с проверкой остатков',
      'Готовые отчёты для производства, логистики и маркетинга',
    ],
    buttonText: 'Подключить ИИ-агента',
    buttonHref: '#demo',
    illustration: heroIllustration,
    backgroundImage: heroBlockBg,
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#fff', padding: '0 24px 80px' }}>
        {/* Имитация SectionHeader */}
        <div style={{
          padding: '80px 0 40px',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px 6px 6px',
            background: '#ead7fe',
            borderRadius: '16px',
            marginBottom: '24px',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: '#c16ffb',
              borderRadius: '10px',
            }} />
            <span style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: '16px',
              fontWeight: 500,
              color: '#300247',
            }}>
              Агент коммуникаций
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-2.56px',
            color: '#15181f',
            margin: '0 0 36px',
          }}>
            Ответы на отзывы, вопросы и кросс-продажи
          </h1>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#15181f',
            maxWidth: '760px',
            margin: '0 auto',
          }}>
            Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса
          </p>
        </div>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
