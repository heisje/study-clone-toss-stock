import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/Tabs/index.tsx";
import { Tab } from "@/components/Tabs/Tab.tsx";

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
    children: (
      <>
        <Tab label={"내 주식"} />
        <Tab label={"오늘의 발견"} on />
        <Tab label={"뉴스"} />
      </>
    ),
  },
};
