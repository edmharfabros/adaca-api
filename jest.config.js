export default {
  preset: 'ts-jest/presets/js-with-ts',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  maxWorkers: 2,
  setupFiles: ['<rootDir>/jest.setup.js'],
}
