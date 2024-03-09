import { RootLayout } from '@/views/layouts/RootLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Serasa App',
    default: 'Serasa App'
  },
  description:
    'Avalie os nossos serviços. Aproveite também e consulte seu CPF, simule e busque crédito, consulte seu score, monitore em tempo real seus dados e negocie dívidas e desenrola. Serasa soluções para sua vida financeira mais segura e saudável.',
  icons: {
    icon: '/assets/favicons/favicon.ico',
    shortcut: '/assets/favicons/favicon-16x16.png',
    apple: '/assets/favicons/favicon-180x180.png'
  }
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
