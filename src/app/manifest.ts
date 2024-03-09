import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Formulário de Avaliação - Serasa App',
    short_name: 'Formulário',
    description: 'Avalie os nossos serviços',
    start_url: `${process.env.VERCEL_URL}`,
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: '/favicons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png'
      },
      {
        src: '/favicons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/favicons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/favicons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/favicons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/favicons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }
}
