import { Meta, StoryObj } from "@storybook/react";
import App from "@/App.tsx";

const meta = {
  title: "Components/App",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const App_: Story = {};
