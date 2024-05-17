import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/Tabs/index.tsx";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tabs: Story = {
  args: {
    layout: "fill",
  },
};
