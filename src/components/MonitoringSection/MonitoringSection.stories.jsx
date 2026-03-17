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

// Полная секция как в макете с интерактивной иллюстрацией
export const Default = {
  args: {
    title: 'Мониторинг и аналитика – центр управления и главный движок системы Дживио',
    subtitle: 'Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов',
    cards: [
      {
        image: illustrationCommunication,
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
