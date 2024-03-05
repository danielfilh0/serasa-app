import React from 'react'

import { RootLayout } from '../src/views/layouts/RootLayout'

export const decorators = [
  (Story) => (
    <RootLayout>
      <Story />
    </RootLayout>
  )
]
