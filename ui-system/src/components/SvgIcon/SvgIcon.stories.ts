import {Meta, StoryObj} from '@storybook/react';
import {SvgIcon} from '@/components/SvgIcon';

const meta = {
    title: 'Components/SvgIcon',
    component: SvgIcon,
    tags: ['autodocs'],
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>

export const Rocket: Story = {
    args: {
        iconId: "rocket",
        size: 24,
    },
};
