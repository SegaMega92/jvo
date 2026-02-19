import '../src/tokens/tokens.css';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282537' },
        { name: 'darker', value: '#1a1825' },
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f8f9fa' },
      ],
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        wide: {
          name: 'Wide',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },

    a11y: {
      test: 'todo',
    },
  },

  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'var(--font-family-primary)' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
