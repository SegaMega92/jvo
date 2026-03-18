import { Footer } from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = {
  args: {},
};

export const InPage = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, background: '#15181f', padding: '40px' }}>
        <h1 style={{ color: 'white', fontFamily: 'RF Dewi Extended, sans-serif' }}>
          Контент страницы
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '16px' }}>
          Футер находится внизу страницы
        </p>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Footer в контексте страницы',
      },
    },
  },
};
