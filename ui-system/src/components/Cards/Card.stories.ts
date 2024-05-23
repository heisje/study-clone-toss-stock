import { Meta, StoryObj } from "@storybook/react";
import { Card01 } from "@/components/Cards/Card01.tsx";

const meta = {
  title: "Components/Card01",
  component: Card01,
  tags: ["autodocs"],
} satisfies Meta<typeof Card01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {},
};
