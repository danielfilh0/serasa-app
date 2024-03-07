import { render } from '@testing-library/react'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render h1 as default', () => {
    const { container } = render(<Heading>Heading</Heading>)

    expect(container.querySelector('h1')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render other tag', () => {
    const { container } = render(<Heading variant="h3">Heading</Heading>)

    expect(container.querySelector('h3')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
