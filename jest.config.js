module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/data/**/*.ts(x)?',
    'src/data/contexts/*.ts(x)?',
    'src/data/hooks/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/**/stories.tsx',
    '!src/assets/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/assets/(.*)': '<rootDir>/src/assets/$1',
    '^@/data/(.*)': '<rootDir>/src/data/$1',
    '^@/views/(.*)': '<rootDir>/src/views/$1',
    '^@/components/(.*)': '<rootDir>/src/components/$1'
  }
}
