import { Meta, StoryObj } from '@storybook/react'
import { Input, TextInputProps } from '.'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import React from 'react'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    icon: {
      control: { type: 'boolean' },
      mapping: { false: null, true: <EnvelopeClosedIcon /> }
    },
    onChange: { action: 'changed' }
  },
  parameters: {
    docs: {
      description: 'Another description, overriding the comments'
    }
  }
} as Meta

export const Default: StoryObj<TextInputProps> = {}

export const WithLabel: StoryObj = {}

export const WithHint: StoryObj = {}

export const WithIcon: StoryObj = {}

export const WithError: StoryObj = {}

export const Disabled: StoryObj = {}

Default.args = {
  placeholder: 'Input'
}

WithLabel.args = {
  name: 'input1',
  label: 'Input',
  placeholder: 'Input'
}

WithHint.args = {
  name: 'input2',
  label: 'Input',
  placeholder: 'Input',
  hint: 'Please provide a correct input'
}

WithIcon.args = {
  name: 'email',
  placeholder: 'Email',
  icon: <EnvelopeClosedIcon className="text-gray-400" />
}

WithError.args = {
  name: 'input3',
  placeholder: 'Input',
  error: 'Not allowed'
}

Disabled.args = {
  name: 'input4',
  placeholder: 'Input',
  disabled: true
}
