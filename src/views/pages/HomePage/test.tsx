import { render, screen } from '@testing-library/react'

import { HomePage } from '.'

jest.mock('@/views/components/EvaluationForm', () => ({
  __esModule: true,
  EvaluationForm: function Mock() {
    return <div data-testid="EvaluationForm Mock" />
  }
}))

describe('<HomePage />', () => {
  it('should render the heading', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /Formulário de avaliação/i })
    ).toBeInTheDocument()
  })
})
