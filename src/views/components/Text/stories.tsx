import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Body'
  }
} as Meta

export const Default: StoryObj = {}
