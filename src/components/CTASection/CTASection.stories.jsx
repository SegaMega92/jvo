import { CTASection } from './index';

export default {
  title: 'Sections/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
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
    title: 'Попробуйте бесплатно',
    subtitle: 'Начните использовать JVO уже сегодня',
    buttonText: 'Начать',
  },
};

export const WithLink = {
  args: {
    buttonHref: '#demo',
  },
};

export const NoIcon = {
  args: {
    icon: null,
  },
};
