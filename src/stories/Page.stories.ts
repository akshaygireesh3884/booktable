import type { Meta, StoryObj } from '@storybook/react';

import  Wheather  from '../app/page';

const meta: Meta<typeof Wheather> = {
  component: Wheather,
};

export default meta;
type Story = StoryObj<typeof Wheather>;

export const Primary: Story = {
  args: {
    label: 'Wheather',
  },
};