import { render, screen, waitFor } from '@testing-library/react'

import { Rating } from '.'
import userEvent from '@testing-library/user-event'

describe('<Rating />', () => {
  it('should render', () => {
    const { container } = render(<Rating />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call onChange when radio is selected', async () => {
    const onChange = jest.fn()

    render(<Rating onChange={onChange} />)

    const radio = screen.getAllByRole('radio')[0]

    userEvent.click(radio)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled()
    })
  })
})
