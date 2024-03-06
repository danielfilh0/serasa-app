import React from 'react'

import { roboto } from '@/assets/fonts/roboto'
import '@/assets/css/global.css'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root-layout" className={`${roboto.variable} font-roboto`}>
      {children}
    </div>
  )
}
