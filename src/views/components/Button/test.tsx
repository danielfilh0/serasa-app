import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render disabled', () => {
    const { container } = render(<Button disabled>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveAttribute(
      'aria-disabled',
      'true'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
