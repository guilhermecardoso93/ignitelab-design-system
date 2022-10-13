import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Input,
  args: {
    placeholder: 'Type your email.'
  },
  argTypes: {},
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};
