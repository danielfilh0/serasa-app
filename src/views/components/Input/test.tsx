import { render, screen, waitFor } from '@testing-library/react'

import { Input } from '.'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import userEvent from '@testing-library/user-event'

describe('<Input />', () => {
  it('should render with label', () => {
    render(<Input name="input" label="Input" />)

    expect(screen.getByLabelText('Input')).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<Input name="input" />)

    expect(screen.queryByLabelText('input')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<Input name="input" placeholder="Input" />)

    expect(screen.getByPlaceholderText('Input')).toBeInTheDocument()
  })

  it('should render with hint', () => {
    render(
      <Input name="input" placeholder="Input" hint="Please provide a input" />
    )

    expect(screen.getByPlaceholderText('Input')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Input')).toHaveAttribute(
      'aria-describedby',
      'input-hint'
    )
    expect(screen.getByText('Please provide a input')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(
      <Input name="input" icon={<EnvelopeClosedIcon data-testid="icon" />} />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with required', () => {
    render(<Input name="input" label="Input" required />)

    expect(screen.getByLabelText('Input')).toHaveAttribute('required')
    expect(screen.getByLabelText('Input')).toHaveAttribute(
      'aria-required',
      'true'
    )
  })

  it('should render with error', () => {
    const { container } = render(
      <Input name="input" error="Error message" label="Input" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild?.firstChild).toHaveClass('text-error')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle the hint by showing only for screen readers', () => {
    const { container } = render(
      <Input name="input" hint="Here is a hint" isHintVisible={false} />
    )

    expect(screen.getByText('Here is a hint')).toHaveClass('sr-only')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change its value when typing', async () => {
    const onChange = jest.fn()
    render(<Input name="input" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes(text.length)
    })
  })

  it('should not change its value when disabled', async () => {
    const onChange = jest.fn()
    render(<Input name="input" onChange={onChange} disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onChange).not.toHaveBeenCalled()
  })

  it('should be accessible by tab', async () => {
    render(<Input name="input" label="Input" />)

    const input = screen.getByLabelText('Input')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not be accessible by tab when disabled', async () => {
    render(<Input name="input" label="Input" disabled />)

    const input = screen.getByLabelText('Input')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should lost focus when pressed ESCAPE', async () => {
    render(<Input name="input" />)

    const input = screen.getByRole('textbox')

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(input).toHaveFocus()

    await userEvent.keyboard('{Escape}')
    expect(input).not.toHaveFocus()
  })
})
