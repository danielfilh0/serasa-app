import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: [
    '../src/views/components/**/stories.tsx',
    '../src/views/components/**/stories.tsx'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..', 'src')
      }
    }
    return config
  }
}
export default config
