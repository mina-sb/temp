import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../Components/Button";
import img from "../../public/assets/Outline/Mic/Mic Off.svg";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    label: {
      text: "Button",
    },
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: {
      text: "Button",
    },
  },
};
export const Danger: Story = {
  args: {
    color: "danger",
    label: {
      text: "Button",
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: {
      text: "Button",
    },
  },
};

export const Outline: Story = {
  args: {
    label: {
      text: "Button",
    },
    mode: "btn-outline",
  },
};
export const FilledText: Story = {
  args: {
    label: {
      text: "Button",
    },
    mode: "filled-text-only",
  },
};

export const TextOnly: Story = {
  args: {
    label: {
      text: "Button",
    },
    mode: "text-only-outline",
  },
};

export const Disabled: Story = {
  args: {
    label: {
      text: "Button",
    },
    disabled: true,
  },
};

export const IconButtonPrefix: Story = {
  args: {
    label: {
      text: "Button",
      prefix: {
        icon: {
          imgSrc: img,
        },
      },
    },
  },
};
export const IconButtonSuffix: Story = {
  args: {
    label: {
      text: "Button",
      suffix: {
        icon: {
          imgSrc: img,
        },
      },
    },
  },
};
