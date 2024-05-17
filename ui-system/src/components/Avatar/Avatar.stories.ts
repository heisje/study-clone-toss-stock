import { Meta, StoryObj } from "@storybook/react";
import { Avator } from "@/components/Avatar/index.tsx";

const meta = {
  title: "Components/Avator",
  component: Avator,
  tags: ["autodocs"],
} satisfies Meta<typeof Avator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    image: "https://avatars.githubusercontent.com/u/109322450?v=4",
  },
};
