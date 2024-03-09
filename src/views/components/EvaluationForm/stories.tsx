import { Meta, StoryObj } from '@storybook/react'
import { EvaluationForm } from '.'

export default {
  title: 'EvaluationForm',
  component: EvaluationForm
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div className="flex justify-center">
      <EvaluationForm />
    </div>
  )
}
