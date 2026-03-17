import { FeatureCard } from './index';
import featureCardAlerts from '../../../assets/feature-card-alerts.png';
import featureCardAutomation from '../../../assets/feature-card-automation.png';

export default {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

// Приоритезация алертов
export const Alerts = {
  args: {
    image: featureCardAlerts,
    imageAlt: 'Приоритезация алертов',
    title: 'Приоритезация алертов',
    description: 'система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.',
  },
};

// Мгновенная автоматизация
export const Automation = {
  args: {
    image: featureCardAutomation,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: 'Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы',
  },
};

// Без изображения (placeholder фон)
export const WithPlaceholder = {
  args: {
    image: <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #ead7fe 0%, #d4bbf7 100%)' }} />,
    title: 'Название фичи',
    description: 'Описание фичи или функции системы, которая помогает пользователям решать их задачи.',
  },
};
