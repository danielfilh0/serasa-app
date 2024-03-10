import { env } from '@/data/environments'
import { RootLayout } from '@/views/layouts/RootLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  authors: [
    {
      name: 'Daniel Filho',
      url: 'https://www.linkedin.com/in/danielfilh0/'
    }
  ],
  creator: 'Daniel Filho',
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: '%s - Serasa App',
    default: 'Formulário de Avaliação - Serasa App'
  },
  description:
    'Avalie os nossos serviços. Aproveite também e consulte seu CPF, simule e busque crédito, consulte seu score, monitore em tempo real seus dados e negocie dívidas e desenrola. Serasa soluções para sua vida financeira mais segura e saudável.',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/favicon-180x180.png'
  },
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    title: 'Formulário de Avaliação - Serasa App',
    description: 'Avalie os nossos serviços',
    siteName: 'Formulário de Avaliação - Serasa App',
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 800,
        height: 351,
        alt: 'Banner da Serasa Experian'
      }
    ]
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
