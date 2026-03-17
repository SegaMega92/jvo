import { FeatureBlock } from './index';

export default {
  title: 'Sections/FeatureBlock',
  component: FeatureBlock,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    reversed: {
      control: 'boolean',
    },
  },
};

// Плейсхолдер для иллюстрации
const IllustrationPlaceholder = ({ text = 'Иллюстрация' }) => (
  <div
    style={{
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #e8def8 0%, #f3e8ff 50%, #fce7f3 100%)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-family-primary)',
      fontSize: '18px',
      color: '#9333ea',
    }}
  >
    {text}
  </div>
);

// Базовый вариант
export const Default = {
  args: {
    title: 'Автоматизация комментариев',
    description: 'Отвечайте на комментарии моментально и превращайте их в продажи с помощью умных автоответов.',
    features: [
      'Мгновенные ответы на комментарии 24/7',
      'Персонализированные сообщения на основе контекста',
      'Автоматическая квалификация лидов',
      'Интеграция с вашей CRM системой',
    ],
    buttonText: 'Попробовать бесплатно',
    buttonHref: '#demo',
    image: <IllustrationPlaceholder />,
  },
};

// Reversed вариант (иллюстрация слева)
export const Reversed = {
  args: {
    title: 'Умные воронки продаж',
    description: 'Создавайте автоматические воронки, которые ведут клиента от первого контакта до покупки.',
    features: [
      'Визуальный конструктор воронок',
      'A/B тестирование сценариев',
      'Триггеры на основе поведения',
      'Аналитика конверсий в реальном времени',
    ],
    buttonText: 'Узнать больше',
    buttonHref: '#funnels',
    buttonVariant: 'outline',
    reversed: true,
    image: <IllustrationPlaceholder text="Воронка продаж" />,
  },
};

// Без кнопки
export const WithoutButton = {
  args: {
    title: 'Мгновенная интеграция',
    description: 'Подключите JVO к вашим социальным сетям за пару минут без программистов.',
    features: [
      'Instagram Direct и комментарии',
      'Telegram боты и каналы',
      'WhatsApp Business API',
      'ВКонтакте сообщения и группы',
    ],
    image: <IllustrationPlaceholder text="Интеграции" />,
  },
};

// Минимальный вариант
export const Minimal = {
  args: {
    title: 'Простой старт',
    description: 'Начните использовать JVO прямо сейчас. Настройка занимает всего 5 минут.',
    buttonText: 'Начать',
    buttonHref: '#start',
    image: <IllustrationPlaceholder text="Quick Start" />,
  },
};

// С длинным списком фич
export const ExtendedFeatures = {
  args: {
    title: 'Полный контроль над продажами',
    description: 'Всё что нужно для автоматизации продаж в социальных сетях в одном месте.',
    features: [
      'Автоответы на комментарии и сообщения',
      'Умные воронки продаж с триггерами',
      'Сегментация аудитории по поведению',
      'Персонализированные рассылки',
      'Интеграция с CRM и платежными системами',
      'Детальная аналитика и отчеты',
    ],
    buttonText: 'Посмотреть все функции',
    buttonHref: '#features',
    buttonVariant: 'secondary',
    image: <IllustrationPlaceholder text="Dashboard" />,
  },
};

// Комбинация SectionHeader + FeatureBlock
export const WithSectionHeader = {
  args: {
    title: 'Автоматизация Instagram',
    description: 'Отвечайте на комментарии и сообщения автоматически, собирайте лиды и увеличивайте продажи.',
    features: [
      'Ответы на комментарии под постами и Reels',
      'Автоответы в Direct сообщениях',
      'Квалификация лидов по ключевым словам',
      'Триггеры на сторис и упоминания',
    ],
    buttonText: 'Подключить Instagram',
    buttonHref: '#instagram',
    image: <IllustrationPlaceholder text="Instagram Automation" />,
  },
  decorators: [
    (Story) => (
      <div>
        {/* Имитация SectionHeader */}
        <div style={{
          padding: '80px 24px',
          background: '#ffffff',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex',
            padding: '8px 16px',
            background: 'rgba(193, 111, 251, 0.1)',
            borderRadius: '100px',
            marginBottom: '24px',
          }}>
            <span style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#c16ffb',
            }}>
              Автоматизация
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: '48px',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#1a1a2e',
            margin: '0 0 16px',
          }}>
            Превращайте подписчиков в покупателей
          </h2>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Автоматизируйте рутину и сфокусируйтесь на том, что действительно важно — росте бизнеса.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
