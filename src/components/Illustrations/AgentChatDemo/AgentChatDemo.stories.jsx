import { AgentChatDemo } from './index';

export default {
  title: 'Illustrations/AgentChatDemo',
  component: AgentChatDemo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

// Интерактивный режим - кликните на кнопку
export const Interactive = {
  args: {
    autoPlay: false,
  },
};
