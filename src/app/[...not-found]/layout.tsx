import type { Metadata } from 'next'

import { RootLayout } from '@/views/layouts/RootLayout'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'Page not found'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
