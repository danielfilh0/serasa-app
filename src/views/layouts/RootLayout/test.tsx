import { render, screen } from '@testing-library/react'

import { RootLayout } from '.'

jest.mock('next/font/google', () => ({
  Roboto: () => ({ variable: '' })
}))

describe('<RootLayout />', () => {
  it('should render', () => {
    render(<RootLayout>Root Layout</RootLayout>)

    expect(screen.getByText('Root Layout')).toBeInTheDocument()
  })
})
