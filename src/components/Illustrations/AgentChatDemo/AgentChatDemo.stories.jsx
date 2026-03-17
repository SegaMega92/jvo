import { AgentChatDemo } from './index';

export default {
  title: 'Illustrations/AgentChatDemo',
  component: AgentChatDemo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Автоматический запуск анимации',
    },
    autoPlayDelay: {
      control: { type: 'number', min: 0, max: 5000, step: 500 },
      description: 'Задержка перед автозапуском (мс)',
    },
    typingSpeed: {
      control: { type: 'number', min: 10, max: 100, step: 10 },
      description: 'Скорость печатания (мс на символ)',
    },
  },
};

// Интерактивный режим - кликните на кнопку
export const Interactive = {
  args: {
    autoPlay: false,
  },
};

// Автозапуск анимации
export const AutoPlay = {
  args: {
    autoPlay: true,
    autoPlayDelay: 1000,
  },
};

// Быстрая печать
export const FastTyping = {
  args: {
    autoPlay: true,
    autoPlayDelay: 500,
    typingSpeed: 15,
  },
};

// Медленная печать
export const SlowTyping = {
  args: {
    autoPlay: true,
    autoPlayDelay: 500,
    typingSpeed: 60,
  },
};

// В контексте карточки (как в MonitoringSection)
export const InCard = {
  args: {
    autoPlay: false,
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '360px',
      }}>
        <Story />
        <div style={{ padding: '0 4px' }}>
          <h3 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.6,
            color: '#15181f',
            margin: '0 0 12px 0',
          }}>
            Мгновенная автоматизация
          </h3>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#15181f',
            margin: 0,
          }}>
            Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы
          </p>
        </div>
      </div>
    ),
  ],
};
