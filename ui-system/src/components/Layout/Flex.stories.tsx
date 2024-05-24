import { Meta, StoryObj } from "@storybook/react";
import Flex from "@/components/Layout/Flex.tsx";

const meta = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flex_: Story = {
  args: {
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </>
    ),
  },
};
