import { HeroBlock } from './index';
import { SectionHeader } from '../SectionHeader';
import heroIllustration from '../../../assets/hero-illustration-agent.png';
import heroGradient from '../../../assets/hero-gradient.png';
import tagIconAgent from '../../../assets/tag-icon-agent.svg';

export default {
  title: 'Sections/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    showPattern: {
      control: 'boolean',
      description: 'Показать точечный паттерн поверх градиента',
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
    backgroundImage: heroGradient,
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
    backgroundImage: heroGradient,
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
    backgroundImage: heroGradient,
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
    backgroundImage: heroGradient,
  },
  render: (args) => (
    <div style={{ background: '#fff' }}>
      <SectionHeader
        tag="Агент коммуникаций"
        tagIcon={tagIconAgent}
        title="Ответы на отзывы, вопросы и кросс-продажи"
        subtitle="Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса"
      />
      <div style={{ maxWidth: '960px', margin: '-40px auto 80px', padding: '0 24px' }}>
        <HeroBlock {...args} />
      </div>
    </div>
  ),
};
