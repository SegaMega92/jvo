import { ImageListCards } from './index';

export default {
  title: 'Sections/ImageListCards',
  component: ImageListCards,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1E1B2E' },
      ],
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const CustomContent = {
  args: {
    leftCard: {
      title: 'Обучение и поддержка',
      items: [
        'Онлайн-курсы для команды',
        'Сертификация по результатам',
        'Доступ к базе знаний',
      ],
    },
    rightCard: {
      title: 'Выделенный менеджер',
      items: [
        'Персональное сопровождение',
        'Настройка под ваши процессы',
        'Регулярные отчёты по эффективности',
      ],
    },
  },
};
