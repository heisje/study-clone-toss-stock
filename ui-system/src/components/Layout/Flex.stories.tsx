import { Meta, StoryObj } from "@storybook/react";
import Flex_ from "@/components/Layout/Flex.tsx";

const meta = {
  title: "Components/Flex",
  component: Flex_,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex_>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flex: Story = {
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
