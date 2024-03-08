import { Config } from 'tailwindcss'

export const theme: Config['theme'] = {
  extend: {
    fontFamily: {
      roboto: ['var(--font-roboto)']
    },
    colors: {
      dark: {
        low: 'rgba(0,0,0,0.44)',
        medium: 'rgba(0,0,0,0.60)',
        high: 'rgba(0,0,0,0.80)'
      },
      magenta: {
        accent: '#E63888'
      },
      light: {
        solid: '#FFFFFF',
        high: 'rgba(255,255,255,0.80)'
      },
      error: 'rgba(214,16,59)'
    }
  }
}
