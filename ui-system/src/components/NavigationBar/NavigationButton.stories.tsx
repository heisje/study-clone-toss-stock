import { Meta, StoryObj } from "@storybook/react";
import { NavigationButton } from "@/components/NavigationBar/NavigationButton.tsx";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/NavigationBar/NavigationButton",
  component: NavigationButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rocket: Story = {
  args: {
    label: "홈",
  },
};
