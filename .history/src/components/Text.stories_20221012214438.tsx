import { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: 'We are Born to be alone'
  }
} as Meta<TextProps>;

export const Default:StoryObj  = {

}