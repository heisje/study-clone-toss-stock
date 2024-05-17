import { Meta, StoryObj } from "@storybook/react";

import { Text } from "@/components/Text/index.tsx";

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const title: Story = {
  args: {
    type: "title-1-2",
    children: "abc",
  },
};
