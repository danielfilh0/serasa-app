import { render, screen } from '@testing-library/react'

import { Text } from '.'

describe('<Text />', () => {
  it('should render the heading', () => {
    const { container } = render(<Text>Body</Text>)

    expect(screen.getByText('Body')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
