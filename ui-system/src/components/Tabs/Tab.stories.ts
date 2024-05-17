import { Meta, StoryObj } from "@storybook/react";
import { Tab } from "@/components/Tabs/Tab.tsx";

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tab: Story = {
    args: {
        label: "title",
    },
};
