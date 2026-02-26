import { BannerSection } from './index';

export default {
  title: 'Sections/BannerSection',
  component: BannerSection,
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

export const CustomText = {
  args: {
    title: 'Нужна помощь с выбором?',
    subtitle: 'Наши эксперты помогут подобрать оптимальное решение',
    buttonText: 'Связаться с нами',
  },
};

export const WithLink = {
  args: {
    buttonHref: 'https://jvo.ru/consultation',
  },
};
