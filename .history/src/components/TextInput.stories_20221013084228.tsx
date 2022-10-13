import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Type your e-mail address" />
      ],
    },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
