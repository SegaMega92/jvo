import { MonitoringSection } from './index';
import { AgentChatDemo } from '../Illustrations/AgentChatDemo';
import illustrationCommunication from '../../../assets/illustration_commenication_1.svg';

export default {
  title: 'Sections/MonitoringSection',
  component: MonitoringSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

// Обёртка для левой иллюстрации с градиентом
const LeftIllustration = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      background: `
        radial-gradient(
          ellipse at 100% 0%,
          rgba(200, 160, 255, 0.8) 0%,
          rgba(180, 140, 250, 0.4) 40%,
          rgba(246, 243, 254, 0) 80%
        ),
        radial-gradient(
          ellipse at 0% 100%,
          rgba(245, 236, 254, 0) 0%,
          rgba(246, 243, 254, 1) 100%
        )
      `,
      backgroundColor: '#f6f3fe',
    }}
  >
    {/* Точечный паттерн */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--pattern-dots)',
        backgroundRepeat: 'repeat',
        pointerEvents: 'none',
      }}
    />
    <img
      src={illustrationCommunication}
      alt="Приоритезация алертов"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'relative',
        zIndex: 1,
      }}
    />
  </div>
);

// Полная секция как в макете с интерактивной иллюстрацией
export const Default = {
  args: {
    title: 'Мониторинг и аналитика – центр управления и главный движок системы Дживио',
    subtitle: 'Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов',
    cards: [
      {
        image: <LeftIllustration />,
        imageAlt: 'Приоритезация алертов',
        title: 'Приоритезация алертов',
        description: 'система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.',
      },
      {
        image: <AgentChatDemo />,
        imageAlt: 'Мгновенная автоматизация',
        title: 'Мгновенная автоматизация',
        description: 'Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы',
      },
    ],
    showNavigation: true,
  },
};
