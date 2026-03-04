import { PromoBanner, PromoBanners } from './index';

export default {
  title: 'Sections/PromoBanners [WIP]',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

/* Both banners together */
export const Default = {
  render: () => <PromoBanners />,
};

/* Single banner — Green variant */
export const Green = {
  render: () => (
    <PromoBanner
      text="До 6 месяцев в подарок, при подключении платформы"
      variant="green"
    />
  ),
};

/* Single banner — Lavender variant */
export const Lavender = {
  render: () => (
    <PromoBanner
      text="Прямая интеграция по API, подключайтесь к JVO и автоматизируйте обмен данными"
      variant="lavender"
    />
  ),
};

/* Full-width — для шапки страницы */
export const GreenFullWidth = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <PromoBanner
      text="До 6 месяцев в подарок, при подключении платформы"
      variant="green"
      fullWidth
    />
  ),
};

export const LavenderFullWidth = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <PromoBanner
      text="Прямая интеграция по API, подключайтесь к JVO и автоматизируйте обмен данными"
      variant="lavender"
      fullWidth
    />
  ),
};

/* Custom content */
export const CustomBanners = {
  render: () => (
    <PromoBanners
      banners={[
        {
          text: 'Специальное предложение для новых клиентов',
          variant: 'green',
          buttonText: 'Узнать больше',
        },
        {
          text: 'Откройте доступ к документации API',
          variant: 'lavender',
          buttonText: 'Документация',
        },
      ]}
    />
  ),
};
