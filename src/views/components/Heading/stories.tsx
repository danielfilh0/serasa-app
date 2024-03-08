import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    variant: 'h1',
    children: 'Heading'
  }
} as Meta

export const Default: StoryObj = {}
