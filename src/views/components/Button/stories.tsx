import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="max-w-[352px]">
      <Button {...args} />
    </div>
  )
}

export const Secondary: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="w-screen bg-gray-200 p-4">
      <div className="max-w-[352px]">
        <Button {...args} variant="secondary" />
      </div>
    </div>
  )
}

export const Disabled: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="max-w-[352px]">
      <Button {...args} disabled />
    </div>
  )
}

export const Loading: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="max-w-[352px]">
      <Button {...args} isLoading />
    </div>
  )
}
