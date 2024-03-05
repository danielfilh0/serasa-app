import { render, screen } from '@testing-library/react'

import { HomePage } from '.'

describe('<HomePage />', () => {
  it('should render the heading', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { name: /Home Page/i })).toBeInTheDocument()
  })
})
