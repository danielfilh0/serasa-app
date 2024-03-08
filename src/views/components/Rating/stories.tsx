import { Meta, StoryObj } from '@storybook/react'
import { Rating } from '.'

export default {
  title: 'Form/Rating',
  component: Rating,
  onChange: { action: 'changed' }
} as Meta

export const Default: StoryObj = {}
