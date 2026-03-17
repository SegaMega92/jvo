import { MonitoringSection } from './index';
import featureCardAlerts from '../../../assets/feature-card-alerts.png';
import featureCardAutomation from '../../../assets/feature-card-automation.png';

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

// Полная секция как в макете
export const Default = {
  args: {
    title: 'Мониторинг и аналитика – центр управления и главный движок системы Дживио',
    subtitle: 'Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов',
    cards: [
      {
        image: featureCardAlerts,
        imageAlt: 'Приоритезация алертов',
        title: 'Приоритезация алертов',
        description: 'система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.',
      },
      {
        image: featureCardAutomation,
        imageAlt: 'Мгновенная автоматизация',
        title: 'Мгновенная автоматизация',
        description: 'Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы',
      },
    ],
    showNavigation: true,
  },
};

// Без навигации
export const WithoutNavigation = {
  args: {
    title: 'Мониторинг и аналитика – центр управления и главный движок системы Дживио',
    subtitle: 'Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов',
    cards: [
      {
        image: featureCardAlerts,
        imageAlt: 'Приоритезация алертов',
        title: 'Приоритезация алертов',
        description: 'система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.',
      },
      {
        image: featureCardAutomation,
        imageAlt: 'Мгновенная автоматизация',
        title: 'Мгновенная автоматизация',
        description: 'Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы',
      },
    ],
    showNavigation: false,
  },
};

// С placeholder изображениями
export const WithPlaceholders = {
  args: {
    title: 'Заголовок секции с описанием возможностей',
    subtitle: 'Подзаголовок с дополнительной информацией о функциях и преимуществах системы',
    cards: [
      {
        image: <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #ead7fe 0%, #d4bbf7 100%)' }} />,
        title: 'Первая функция',
        description: 'Описание первой функции системы с подробностями о том, как она помогает пользователям.',
      },
      {
        image: <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #ffd4e8 0%, #ffb8d4 100%)' }} />,
        title: 'Вторая функция',
        description: 'Описание второй функции системы с подробностями о её возможностях и преимуществах.',
      },
    ],
    showNavigation: true,
  },
};
