import type { Meta, StoryObj } from '@storybook/react';
import { QrCodeCard } from '.';
import { qrCodeCardProps } from './story-porps';

const meta = {
  title: 'Components/Cards/Qr Code',
  component: QrCodeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QrCodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: qrCodeCardProps,
};
